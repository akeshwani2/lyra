import { db } from '@/app/lib/db'
import { chats, messages } from '@/app/lib/db/schema'
import { eq } from 'drizzle-orm'
import { auth } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

export async function DELETE(
    request: NextRequest,
    { params }: { params: { chatId: string } }
) {
    try {
        const { userId } = await auth();
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const chatId = parseInt(params.chatId);
        
        // First delete all messages associated with this chat
        await db.delete(messages).where(eq(messages.chatId, chatId));
        
        // Then delete the chat itself
        await db.delete(chats).where(eq(chats.id, chatId));
        
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error deleting chat:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

