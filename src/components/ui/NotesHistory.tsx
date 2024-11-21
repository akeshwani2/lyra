import React, { forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import { format } from 'date-fns';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Trash2 } from 'lucide-react';
import { Note } from '@/types';

const NotesHistory = forwardRef(({ 
  onSelectNote, 
  currentNoteId,
  onDeleteNote 
}: { 
  onSelectNote: (note: Note) => void;
  currentNoteId?: string;
  onDeleteNote: (noteId: string) => void;
}, ref) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadNotes = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/notes');
      if (!response.ok) throw new Error('Failed to load notes');
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error('Error loading notes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Expose loadNotes function through ref
  useImperativeHandle(ref, () => ({
    loadNotes
  }));

  useEffect(() => {
    loadNotes();
  }, []);

  const handleDelete = async (noteId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (!confirm('Are you sure you want to delete this note?')) {
      return;
    }

    try {
      const response = await fetch('/api/notes/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ noteId }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete note');
      }

      const deletedIndex = notes.findIndex(note => note.id === noteId);
      
      if (noteId === currentNoteId) {
        if (deletedIndex < notes.length - 1) {
          onSelectNote(notes[deletedIndex + 1]);
        } 
        else if (deletedIndex > 0) {
          onSelectNote(notes[deletedIndex - 1]);
        } 
        else {
          onDeleteNote(noteId);
        }
      }

      loadNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const handleNoteSelect = (note: Note) => {
    onSelectNote(note);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/5 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/10 
                   backdrop-blur-md p-2 rounded-l-lg z-50"
      >
        <div className="rotate-180 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text hover:text-amber-500 transition-all duration-300 ease-in-out" style={{ writingMode: 'vertical-rl' }}>
          Notes
        </div>
      </button>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: isOpen ? 300 : 0 }}
        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        className="fixed right-0 top-0 h-full bg-white/5 backdrop-blur-2xl 
                   border-l border-white/10 overflow-hidden z-50"
      >
        <div className="p-4 h-full overflow-y-auto">
          <h2 className="text-xl font-bold text-white/90 mb-4">History</h2>
          <div className="space-y-2">
            {notes.map((note) => (
              <div
                key={note.id}
                onClick={() => handleNoteSelect(note)}
                className={`w-full text-left p-3 rounded-lg transition-all relative group cursor-pointer
                          ${note.id === currentNoteId
                            ? 'bg-purple-500/20 border-purple-500'
                            : 'bg-white/5 hover:bg-white/10'}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-white/90 max-w-[200px] truncate">
                    {note.title}
                  </h3>
                  <button
                    onClick={(e) => handleDelete(note.id, e)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200
                              text-red-400 hover:text-red-300"
                    aria-label="Delete note"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-white/60">
                  {format(new Date(note.createdAt), 'MMM d, yyyy h:mm a')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
});

NotesHistory.displayName = 'NotesHistory';

export default NotesHistory;