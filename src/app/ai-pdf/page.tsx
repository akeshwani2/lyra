'use client'
import { Button } from '@/components/ui/button';
import UserSection from '@/components/ui/UserSection';
import { ArrowUpRight, Upload } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import FileUpload from '@/components/ui/FileUpload';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function AiPdf() {
    const router = useRouter();
    const [hasChats, setHasChats] = useState<boolean>(false);
    const [firstChatId, setFirstChatId] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkChats = async () => {
            try {
                const response = await fetch('/api/check-chats');
                if (!response.ok) {
                    throw new Error('Failed to fetch chats');
                }
                const data = await response.json();
                setHasChats(data.hasChats);
                setFirstChatId(data.firstChatId);
            } catch (error) {
                console.error('Error checking chats:', error);
                setHasChats(false);
                setFirstChatId(null);
            } finally {
                setIsLoading(false);
            }
        };

        checkChats();
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
                <h1 className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text text-5xl font-bold">Chat with any PDF</h1>
                <div className="flex mt-2">
                    <Button 
                        className='bg-gradient-to-r from-purple-500 to-blue-500 hover:from-violet-600 cursor-default hover:to-cyan-500 transition-[background,transform,shadow] duration-300 ease-in-out hover:shadow-[0_0_2rem_-0.5rem_rgba(139,92,246,0.8)]' 
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
                <p className="text-xl text-gray-400 mt-4 [text-shadow:0_0_15px_rgba(255,255,255,0.5)]">
                    <TypeAnimation 
                        sequence={[
                            'Effortlessly Chat with Your PDFs Using Advanced AI Technology',
                            2000,
                        ]}
                        wrapper="span"
                        speed={75}
                        repeat={Infinity}
                    />         
                </p>
                <div className='w-full mt-4'>
                    <FileUpload />
                </div>
            </div>
        </>
    );
}