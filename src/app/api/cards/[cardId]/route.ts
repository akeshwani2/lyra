import { prisma } from '@/app/lib/prisma'
import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'

export async function DELETE(
    request: Request,
    { params }: { params: { cardId: string } }
) {
    try {
        const { userId } = await auth();
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { cardId } = params;

        if (!cardId) {
            return NextResponse.json({ error: "Card ID not provided" }, { status: 400 });
        }
        
        // Delete the card
        await prisma.card.delete({
            where: { id: cardId }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Error deleting card" }, { status: 500 });
    }
}

// Add PATCH handler to existing file
export async function PATCH(
    request: Request,
    { params }: { params: { cardId: string } }
) {
    try {
        const { userId } = await auth();
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { cardId } = params;
        const { content } = await request.json();

        const updatedCard = await prisma.card.update({
            where: { id: cardId },
            data: { content }
        });

        return NextResponse.json(updatedCard);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Error updating card" }, { status: 500 });
    }
}