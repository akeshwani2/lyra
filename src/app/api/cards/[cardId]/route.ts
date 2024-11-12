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
        const { cardId } = params;
        const { columnId, targetCardId, position, content } = await request.json();

        // Get all cards in the target column to calculate new order
        const columnCards = await prisma.card.findMany({
            where: { columnId },
            orderBy: { order: 'asc' }
        });

        let newOrder = 0;
        
        if (targetCardId) {
            const targetCard = columnCards.find(card => card.id === targetCardId);
            if (targetCard) {
                if (position === 'top') {
                    newOrder = targetCard.order - 1;
                } else {
                    newOrder = targetCard.order + 1;
                }
            }
        } else {
            // If no target card, place at beginning or end of column
            newOrder = position === 'top' ? 0 : columnCards.length;
        }

        // Update the card
        const updatedCard = await prisma.card.update({
            where: { id: cardId },
            data: {
                columnId,
                order: newOrder,
                content: content?.trim() || undefined
            }
        });

        // Reorder other cards if necessary
        await prisma.card.updateMany({
            where: {
                columnId,
                NOT: { id: cardId },
                order: { gte: newOrder }
            },
            data: {
                order: { increment: 1 }
            }
        });

        return NextResponse.json(updatedCard);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Error updating card" }, { status: 500 });
    }
}