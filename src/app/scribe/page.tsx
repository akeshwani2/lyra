'use client'
import { Button } from '@/components/ui/button';
import React, { useState, useRef, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { useUser } from '@clerk/nextjs';
import { toast } from 'react-hot-toast';
import { Save, Plus, Pause, Play, Square, X } from 'lucide-react';
import NotesHistory from '@/components/ui/NotesHistory';
import { Note } from '@/types';

const ScribePage = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [notes, setNotes] = useState<string>('');
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStatus, setProcessingStatus] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const { user } = useUser();
  const [audioData, setAudioData] = useState<number[]>(new Array(50).fill(0));
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number>();
  const [isSaving, setIsSaving] = useState(false);
  const [title, setTitle] = useState('');
  const [isTitleSaved, setIsTitleSaved] = useState(false);
  const [savedTitle, setSavedTitle] = useState('');
  const [isNoteSaved, setIsNoteSaved] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isNewNote, setIsNewNote] = useState(true);
  const [currentNoteId, setCurrentNoteId] = useState<string>();
  const notesHistoryRef = useRef<{ loadNotes: () => Promise<void> } | null>(null);
  const [isCancelled, setIsCancelled] = useState(false);

  useEffect(() => {
    const loadLastOpenedNote = async () => {
      const lastNoteId = localStorage.getItem('lastOpenedNoteId');
      if (lastNoteId) {
        try {
          const response = await fetch(`/api/notes/${lastNoteId}`);
          if (!response.ok) throw new Error('Failed to load note');
          const note = await response.json();
          
          setNotes(note.content);
          setTitle(note.title);
          setSavedTitle(note.title);
          setCurrentNoteId(note.id);
          setIsNoteSaved(true);
          setIsTitleSaved(true);
          setIsNewNote(false);
        } catch (error) {
          console.error('Error loading last note:', error);
          localStorage.removeItem('lastOpenedNoteId');
        }
      }
    };

    loadLastOpenedNote();
  }, []);

  const startRecording = async () => {
    try {
      setIsCancelled(false);
      chunksRef.current = [];
      
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      // Set up audio context and analyzer with adjusted settings
      audioContextRef.current = new AudioContext();
      const source = audioContextRef.current.createMediaStreamSource(stream);
      const analyser = audioContextRef.current.createAnalyser();
      // Increase sensitivity by adjusting these values
      analyser.fftSize = 128; // Smaller FFT size for more rapid updates
      analyser.smoothingTimeConstant = 0.5; // Lower value = more reactive (0-1)
      analyser.minDecibels = -90; // Lower value = more sensitive to quiet sounds
      analyser.maxDecibels = -10; // Upper limit of sensitivity
      
      source.connect(analyser);
      analyserRef.current = analyser;

      visualizeAudio();

      mediaRecorder.ondataavailable = (e) => {
        if (!isCancelled && e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = async () => {
        if (isCancelled) {
          if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
          }
          return;
        }

        if (chunksRef.current.length > 0) {
          const audioBlob = new Blob(chunksRef.current, { type: 'audio/webm' });
          await processAudio(audioBlob);
        }
        
        if (streamRef.current) {
          streamRef.current.getTracks().forEach(track => track.stop());
        }
      };

      mediaRecorder.start(1000); // Collect data every second
      setIsRecording(true);
      setIsPaused(false);
      setIsCancelled(false);
    } catch (err) {
      console.error('Error accessing microphone:', err);
    }
  };

  const pauseRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.pause();
      setIsPaused(true);
    }
  };

  const resumeRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.resume();
      setIsPaused(false);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsPaused(false);
      
      // Clean up audio visualization
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
      setAudioData(new Array(50).fill(0));
    }
  };

  const processAudio = async (audioBlob: Blob) => {
    // Add early return if cancelled or blob is empty
    if (isCancelled || audioBlob.size === 0) {
      return;
    }

    try {
      setIsProcessing(true);
      setProcessingStatus('Feeding audio to AI...');

      const formData = new FormData();
      formData.append('file', audioBlob, 'recording.webm');
      formData.append('model', 'whisper-1');

      const transcriptionResponse = await fetch('/api/transcribe', {
        method: 'POST',
        body: formData,
      });
      
      // Add check for cancelled state before continuing
      if (isCancelled) {
        return;
      }

      if (!transcriptionResponse.ok) {
        const errorText = await transcriptionResponse.text();
        throw new Error(errorText || 'Transcription failed');
      }

      const transcriptionData = await transcriptionResponse.json();
      
      // Another cancelled check
      if (isCancelled) {
        return;
      }

      const { text: rawTranscript } = transcriptionData;
      setProcessingStatus('Generating notes...');
      
      const notesResponse = await fetch('/api/process-notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: rawTranscript }),
      });
      
      // Final cancelled check
      if (isCancelled) {
        return;
      }

      const notesData = await notesResponse.json();
      if (!notesResponse.ok) {
        throw new Error(notesData.error || 'Notes processing failed');
      }

      setNotes(notesData.notes);
      toast.success('Recording processed and saved successfully!');
    } catch (err) {
      // Only show error if not cancelled
      if (!isCancelled) {
        console.error('Error processing audio:', err);
        setProcessingStatus('Error: Failed to process recording');
        toast.error(err instanceof Error ? err.message : 'Failed to process recording');
      }
    } finally {
      // Reset processing states if not cancelled
      if (!isCancelled) {
        setIsProcessing(false);
        setProcessingStatus('');
      }
    }
  };

  const visualizeAudio = () => {
    if (analyserRef.current) {
      const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
      analyserRef.current.getByteFrequencyData(dataArray); // Changed to frequency data for more movement
      
      // Enhanced normalization with more dramatic scaling
      const normalizedData = Array.from(dataArray)
        .slice(0, 50)
        .map(value => {
          const normalized = value / 255.0; // Normalize to 0-1
          return normalized * normalized * 1.5; // Square for more dramatic effect
        });
      
      setAudioData(normalizedData);
      animationFrameRef.current = requestAnimationFrame(visualizeAudio);
    }
  };

  const AudioVisualizer = ({ data }: { data: number[] }) => (
    <div className="flex items-center justify-center h-16 gap-[2px] px-4">
      {data.map((value, index) => (
        <div
          key={index}
          className="w-1 bg-gradient-to-t from-purple-500 to-blue-500 rounded-full transition-all duration-[50ms]"
          style={{
            height: `${Math.max(4, value * 100)}%`,
            transform: `scaleY(${1 + value * 0.5})`, // Add some scaling effect
            opacity: 0.7 + value * 0.3, // Dynamic opacity
          }}
        />
      ))}
    </div>
  );

  const handleSaveNotes = async () => {
    if (!notes) {
      toast.error('No notes to save');
      return;
    }

    try {
      setIsSaving(true);
      const response = await fetch('/api/notes/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title || `Notes ${new Date().toLocaleString()}`,
          content: notes,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.details || data.error || 'Failed to save notes');
      }

      setSavedTitle(title || `Notes ${new Date().toLocaleString()}`);
      setIsNoteSaved(true);
      setIsTitleSaved(true);
      setCurrentNoteId(data.id);
      
      if (notesHistoryRef.current) {
        await notesHistoryRef.current.loadNotes();
      }

      toast.success('Notes saved successfully!');
    } catch (error) {
      console.error('Error saving notes:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to save notes');
    } finally {
      setIsSaving(false);
    }
  };

  // Add this temporary test function
  const testSave = async () => {
    try {
      const response = await fetch('/api/notes/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'Test Note',
          content: 'Test content',
        }),
      });
      
      const data = await response.json();
      console.log('Test save response:', data);
      
      if (!response.ok) {
        throw new Error(data.details || data.error || 'Failed to save test note');
      }
    } catch (error) {
      console.error('Test save error:', error);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setIsTitleSaved(false); // Reset saved state when title changes
  };

  const handleTitleBlur = async () => {
    if (title.trim() && title !== savedTitle) {
      try {
        // Only make API call if note has been saved (has an ID)
        if (isNoteSaved) {
          const response = await fetch('/api/notes/update-title', {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title: title.trim(),
            }),
          });

          if (!response.ok) {
            throw new Error('Failed to update title');
          }
        }

        setSavedTitle(title.trim());
        setIsTitleSaved(true);
        setIsEditingTitle(false);
        
        toast.success('Title updated', {
          duration: 2000,
          style: {
            background: 'rgba(147, 51, 234, 0.1)',
            border: '1px solid rgba(147, 51, 234, 0.2)',
            color: '#fff',
          },
        });
      } catch (error) {
        toast.error('Failed to update title');
      }
    }
  };

  const handleTitleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur(); // This will trigger the blur event
    }
  };

  const resetNote = () => {
    setNotes('');
    setTitle('');
    setSavedTitle('');
    setIsNoteSaved(false);
    setIsTitleSaved(false);
    setIsNewNote(true);
    setCurrentNoteId(undefined);
    localStorage.removeItem('lastOpenedNoteId');
  };

  const handleSelectNote = (note: Note) => {
    setNotes(note.content);
    setTitle(note.title);
    setSavedTitle(note.title);
    setCurrentNoteId(note.id);
    setIsNoteSaved(true);
    setIsTitleSaved(true);
    setIsNewNote(false);
    localStorage.setItem('lastOpenedNoteId', note.id);
  };

  const handleDeleteNote = async () => {
    if (!currentNoteId) {
      toast.error('No note to delete');
      return;
    }

    if (!confirm('Are you sure you want to delete this note?')) {
      return;
    }

    try {
      // First, get the notes list
      let nextNoteToShow: Note | null = null;
      
      try {
        const notesResponse = await fetch('/api/notes');
        if (notesResponse.ok) {
          const data = await notesResponse.json();
          // Make sure we have notes array and it's not empty
          if (data && Array.isArray(data.notes) && data.notes.length > 0) {
            const allNotes = data.notes;
            const currentIndex = allNotes.findIndex((note: Note) => note.id === currentNoteId);
            
            // Find the next note to show (if any)
            if (allNotes.length > 1 && currentIndex !== -1) {
              nextNoteToShow = allNotes[currentIndex + 1] || allNotes[currentIndex - 1];
            }
          }
        }
      } catch (error) {
        console.error('Error fetching notes:', error);
      }

      // Then delete the current note
      const deleteResponse = await fetch('/api/notes/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ noteId: currentNoteId }),
      });

      if (!deleteResponse.ok) {
        throw new Error('Failed to delete note');
      }

      // Update the sidebar
      if (notesHistoryRef.current) {
        await notesHistoryRef.current.loadNotes();
      }

      // Navigate to next note or reset
      if (nextNoteToShow) {
        setNotes(nextNoteToShow.content);
        setTitle(nextNoteToShow.title);
        setSavedTitle(nextNoteToShow.title);
        setCurrentNoteId(nextNoteToShow.id);
        setIsNoteSaved(true);
        setIsTitleSaved(true);
        setIsNewNote(false);
        localStorage.setItem('lastOpenedNoteId', nextNoteToShow.id);
      } else {
        resetNote();
      }
      
      toast.success('Note deleted successfully');
    } catch (error) {
      console.error('Error deleting note:', error);
      toast.error('Failed to delete note');
    }
  };

  const cancelRecording = () => {
    // Set cancelled state first
    setIsCancelled(true);
    setIsProcessing(false); // Immediately clear processing state
    setProcessingStatus(''); // Clear any status message
    
    // Clear the chunks array
    chunksRef.current = [];
    
    // Stop the media recorder
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsPaused(false);
    }
    
    // Clean up audio visualization
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    
    // Reset audio data
    setAudioData(new Array(50).fill(0));
    
    // Reset notes
    resetNote();
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>
      
      {/* Main content - change to flex-col and h-screen */}
      <div className='absolute inset-0 flex flex-col h-screen'>
        {/* Header bar - add shrink-0 to prevent shrinking */}
        <div className="flex justify-between items-center w-full px-8 pr-16 py-8 shrink-0">
          <h1 className="text-2xl sm:text-4xl pb-1 font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            Scribe
          </h1>
          
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              {/* <Button
                onClick={resetNote}
                className="group relative bg-gradient-to-r from-emerald-500 to-teal-500 
                          hover:from-emerald-600 hover:to-teal-600 
                          transition-all duration-300 rounded-xl px-6 py-2 
                          text-base font-medium shadow-lg"
                disabled={isRecording || (!notes && !title)} // Disable if recording or no content
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  New Note
                </span>
              </Button> */}
              
              {!isRecording ? (
                <Button
                  onClick={() => {startRecording(); resetNote()}}
                  className="group relative bg-gradient-to-r from-purple-500 to-blue-500 hover:from-violet-600 hover:to-cyan-500 transition-all duration-300 ease-in-out rounded-xl px-6 py-2 text-base font-medium shadow-lg hover:shadow-[0_0_2rem_-0.5rem_rgba(139,92,246,0.8)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    Start Recording
                  </span>
                </Button>
              ) : null}
            </div>

            <div className="flex items-center gap-3">
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text md:text-xl font-bold">
            {user?.username || user?.firstName || ''}
              </span>
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  baseTheme: dark,
                  elements: {
                    avatarBox: "w-10 h-10",
                    userButtonTrigger: "rounded-full"
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* Notes display - add loader */}
        <div className="flex-1 overflow-y-auto px-4 pb-8">
          {isProcessing ? (
            <div className='max-w-3xl w-full mx-auto mt-12 flex flex-col items-center gap-4'>
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              <div className="text-white/80 text-lg font-medium animate-pulse">
                {processingStatus}
              </div>
            </div>
          ) : notes ? (
            <div className='max-w-3xl w-full mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/10'>
              {/* AI Focused Highlights header */}
              <div className="flex items-center gap-2 mb-6">
                <Image
                  src="/star.svg"
                  alt="Star icon"
                  width={24}
                  height={24}
                  className="opacity-80"
                />
                <h2 className="text-xl font-semibold text-white/90">
                  AI Focused Highlights
                </h2>
              </div>

              <div className="flex flex-col gap-4 mt-6">
                <div className="relative flex items-center gap-2 mb-4">
                  {isEditingTitle ? (
                    <input
                      type="text"
                      value={title}
                      onChange={handleTitleChange}
                      onBlur={handleTitleBlur}
                      onKeyDown={handleTitleKeyDown}
                      placeholder="Enter title..."
                      className="bg-transparent border-b border-purple-500/30 focus:border-purple-500 outline-none px-2 py-1 text-white placeholder:text-gray-400 transition-all duration-300 w-full max-w-[300px]"
                      autoFocus
                    />
                  ) : (
                    <div className="flex items-center gap-2">
                      <h3 className="text-white text-lg font-medium">
                        {savedTitle || "Untitled Note"}
                      </h3>
                      <button
                        onClick={() => {
                          setIsEditingTitle(true);
                          setIsTitleSaved(false);
                        }}
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        ✎
                      </button>
                    </div>
                  )}
                  {isTitleSaved && (
                    <span className="ml-2 text-green-400 text-sm animate-fade-in">
                      ✓
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-2 self-end">
                  <Button
                    onClick={handleSaveNotes}
                    disabled={isSaving || !notes || isNoteSaved}
                    className={`bg-gradient-to-r from-purple-500 to-blue-500 
                                hover:from-purple-600 hover:to-blue-600 
                                transition-all duration-300 px-6 py-2 rounded-lg 
                                flex items-center gap-2
                                ${(isNoteSaved || !notes) ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSaving ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        {isNoteSaved ? 'Saved' : 'Save Notes'}
                      </>
                    )}
                  </Button>

                  {isNoteSaved && currentNoteId && (
                    <Button
                      onClick={handleDeleteNote}
                      className="bg-red-500/20 hover:bg-red-500/30 text-red-500 
                                transition-all duration-300 px-6 py-2 rounded-lg 
                                flex items-center gap-2"
                    >
                      <X className="w-4 h-4" />
                      Delete
                    </Button>
                  )}
                </div>
              </div>
              
              
              <div className="prose prose-invert max-w-none">
                {notes}
              </div>
            </div>
          ) : (
            <div className="max-w-3xl w-full mx-auto mt-12 flex flex-col items-center gap-8">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
                <Image
                  src="/microphone.svg" // You'll need to add this icon
                  alt="Microphone"
                  width={128}
                  height={128}
                  className="relative z-10 p-6"
                />
              </div>
              
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-3">
                  Welcome to Scribe
                </h2>
                <p className="text-lg text-white/70 max-w-md">
                  Transform your voice into organized notes instantly
                </p>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <Button
                  onClick={() => {startRecording(); resetNote()}}
                  className="group relative bg-gradient-to-r from-purple-500 to-blue-500 
                            hover:from-violet-600 hover:to-cyan-500 
                            transition-all duration-300 rounded-xl px-8 py-3 
                            text-lg font-medium shadow-lg
                            hover:shadow-[0_0_2rem_-0.5rem_rgba(139,92,246,0.8)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    Start Recording
                  </span>
                </Button>
              </div>

              <div className="mt-8 flex items-center gap-4 text-white/50">
                <div className="w-12 h-px bg-white/20"></div>
                <span>or</span>
                <div className="w-12 h-px bg-white/20"></div>
              </div>

              <p className="text-white/50">
                Access your previous notes from the sidebar →
              </p>
            </div>
          )}
        </div>
      </div>
      
      
      {isRecording && (
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-8 w-96 bg-black/20 backdrop-blur-lg rounded-2xl p-4 border border-white/10">
          <div className="flex flex-col gap-4">
            <AudioVisualizer data={audioData} />
            
            {/* Control buttons */}
            <div className="flex items-center justify-center gap-4">
              {!isPaused ? (
                <button
                  onClick={pauseRecording}
                  className="w-10 h-10 rounded-full bg-yellow-500/20 hover:bg-yellow-500/30 
                           flex items-center justify-center transition-all duration-300
                           hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]"
                >
                  <Pause className="w-4 h-4 text-yellow-500" />
                </button>
              ) : (
                <button
                  onClick={resumeRecording}
                  className="w-10 h-10 rounded-full bg-green-500/20 hover:bg-green-500/30 
                           flex items-center justify-center transition-all duration-300
                           hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                >
                  <Play className="w-4 h-4 text-green-500" />
                </button>
              )}
              
              <button
                onClick={stopRecording}
                className="w-10 h-10 rounded-full bg-red-500/20 hover:bg-red-500/30 
                         flex items-center justify-center transition-all duration-300
                         hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]"
              >
                <Square className="w-4 h-4 text-red-500" />
              </button>
            </div>
          </div>
        </div>
      )}
      <NotesHistory 
        ref={notesHistoryRef}
        onSelectNote={handleSelectNote} 
        currentNoteId={currentNoteId}
        onDeleteNote={handleDeleteNote}
      />
    </div>
  )
}
export default ScribePage

