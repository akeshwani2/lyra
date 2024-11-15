import { db } from '@/app/lib/db';
import { chats } from '@/app/lib/db/schema';
import { eq } from 'drizzle-orm';
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const { userId } = await auth();
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const userChats = await db.select().from(chats).where(eq(chats.userId, userId));
        
        return NextResponse.json({ 
            hasChats: userChats.length > 0,
            firstChatId: userChats.length > 0 ? userChats[0].id : null
        });
    } catch (error) {
        console.error('Error checking chats:', error);
        return NextResponse.json({ 
            hasChats: false,
            firstChatId: null,
            error: "Failed to fetch chats"
        }, { 
            status: 500 
        });
    }
}