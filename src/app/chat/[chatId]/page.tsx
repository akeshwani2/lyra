import { db } from '@/app/lib/db'
import { chats } from '@/app/lib/db/schema'
import { eq } from 'drizzle-orm'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'
import ChatSideBar from '@/components/ui/ChatSideBar'
import PDFViewer from '@/components/ui/PDFViewer'
import ChatComponent from '@/components/ui/ChatComponent'
import QueryClientProviderWrapper from '@/components/ui/QueryClientProviderWrapper'

type Props = {
    params: {
        chatId: string
    }
}

const ChatPage = async ({params: {chatId}}: Props) => {
    const {userId} = await auth()
    if (!userId) {
        return redirect('/sign-in')
    }
    
    const _chats = await db.select().from(chats).where(eq(chats.userId, userId))
    if (!_chats) {
        return redirect('/ai-pdf')
    }
    if (!_chats.find(chat => chat.id === parseInt(chatId))) {
        return redirect('/ai-pdf')
    }

    const currentChat = _chats.find(chat => chat.id === parseInt(chatId))

    return (
        <div className="min-h-screen bg-gradient-to-t from-gray-700 via-gray-900 to-black overflow-hidden flex">
            {/* Chat Sidebar */}
            <div className="w-64 border-r border-gray-800">
                <ChatSideBar chats={_chats} chatId={parseInt(chatId)}/>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex">
                {/* PDF Viewer */}
                <div className="flex-[5] p-4 overflow-y-auto">
                    <PDFViewer pdfUrl={currentChat?.pdfUrl || ''} />
                </div>

                {/* Chat Section */}
                <div className="flex-[3] border-l border-gray-800 bg-gray-900/50">
                    <QueryClientProviderWrapper>
                        <ChatComponent chatId={parseInt(chatId)} />
                    </QueryClientProviderWrapper>
                </div>
            </div>
        </div>
    )
}

export default ChatPage

