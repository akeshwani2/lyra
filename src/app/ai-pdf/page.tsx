'use client'
import { Button } from '@/components/ui/button';
import UserSection from '@/components/ui/UserSection';
import { ArrowUpRight, Upload } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import FileUpload from '@/components/ui/FileUpload';
import ChatPreview from '@/components/ui/ChatPreview';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Message } from 'ai';
import toast from 'react-hot-toast';
import PreviousSessionPreview from '@/components/ui/PreviousSessionPreview';

export default function AiPdf() {
    const router = useRouter();
    const [hasChats, setHasChats] = useState<boolean>(false);
    const [firstChatId, setFirstChatId] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [previewMessages, setPreviewMessages] = useState<Message[]>([]);
    const [pdfName, setPdfName] = useState<string>('');
    const [pdfUrl, setPdfUrl] = useState<string>('');
    const [refreshKey, setRefreshKey] = useState(0);

    useEffect(() => {
        const fetchPreview = async () => {
            try {
                const response = await fetch('/api/check-chats');
                const data = await response.json();
                console.log('API Response from /api/check-chats:', data);

                if (data.hasChats) {
                    const messagesResponse = await fetch('/api/get-messages', {
                        method: 'POST',
                        body: JSON.stringify({ chatId: data.firstChatId }),
                    });
                    const messages = await messagesResponse.json();
                    console.log('Messages from /api/get-messages:', messages);

                    setPreviewMessages(messages);
                    setPdfName(data.pdfName || '');
                    setPdfUrl(data.pdfUrl || '');
                } else {
                    setPreviewMessages([]);
                    setPdfName('');
                    setPdfUrl('');
                }

                setHasChats(data.hasChats);
                setFirstChatId(data.firstChatId);
            } catch (error) {
                console.error('Error fetching preview:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPreview();
    }, [refreshKey]);

    useEffect(() => {
        console.log('State after fetching:', { hasChats, previewMessages, pdfName, pdfUrl });
    }, [hasChats, previewMessages, pdfName, pdfUrl]);

    useEffect(() => {
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'chat-deleted') {
                setRefreshKey(prev => prev + 1);
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const handleChatNavigation = () => {
        if (!hasChats || !firstChatId) {
            toast.error('Please upload a PDF below!', {
                duration: 3000,
                style: {
                    background: '#4B0082',
                    color: '#fff',
                }
            });
            return;
        }
        router.push(`/chat/${firstChatId}`);
    };

    return (
        <>
            <UserSection />
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text text-5xl font-bold" style={{ lineHeight: '1.2' }}>
                    Chat with any PDF
                </h1>
                <p className="text-xl text-gray-400 mt-4 mb-4 [text-shadow:0_0_15px_rgba(255,255,255,0.5)]">
                    <TypeAnimation 
                        sequence={[
                            'Effortlessly Chat with Your PDFs Using Advanced AI Technology',
                            2000,
                            'Ask Questions, Get Answers, and Explore Your PDFs with Ease',
                            2000,
                        ]}
                        wrapper="span"
                        speed={75}
                        repeat={Infinity}
                    />         
                </p>
                
                {hasChats && previewMessages.length > 0 ? (
                    <PreviousSessionPreview 
                        messages={previewMessages}
                        pdfName={pdfName}
                        pdfUrl={pdfUrl}
                    />
                ) : (
                    <></>
                )}

                <div className="flex mt-10 mb-6">
                    <Button 
                        className='bg-gradient-to-r from-purple-500 to-blue-500 hover:from-violet-600 hover:to-cyan-500 transition-[background,transform,shadow] duration-300 ease-in-out hover:shadow-[0_0_2rem_-0.5rem_rgba(139,92,246,0.8)]' 
                        onClick={handleChatNavigation}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            'Loading...'
                        ) : hasChats ? (
                            <>
                                Go to Chats
                                <ArrowUpRight className="w-4 h-4 ml-1" />
                            </>
                        ) : (
                            <>
                            
                                Upload Your First PDF
                                <Upload className="w-4 h-4 ml-1 cursor-default" />
                            </>
                        )}
                    </Button>
                </div>

                <div className='w-full mt-4'>
                    <FileUpload />
                </div>
            </div>
        </>
    );
}