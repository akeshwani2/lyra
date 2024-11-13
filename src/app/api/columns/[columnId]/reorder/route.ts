import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import { auth } from '@clerk/nextjs/server';

export async function PATCH(
    request: Request,
    { params }: { params: { columnId: string } }
) {
    try {
        const { userId } = await auth();
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { sourceIndex, targetIndex } = await request.json();

        // Get all columns for the board
        const sourceColumn = await prisma.column.findUnique({
            where: { id: params.columnId },
            select: { boardId: true }
        });

        if (!sourceColumn) {
            return NextResponse.json({ error: 'Source column not found' }, { status: 404 });
        }

        // Get all columns for the board
        const columns = await prisma.column.findMany({
            where: { boardId: sourceColumn.boardId },
            orderBy: { order: 'asc' }
        });

        // Create updates array
        const updates = [];

        // First, move all affected columns out of the way
        if (sourceIndex < targetIndex) {
            // Moving right
            updates.push(
                ...columns
                    .filter(col => col.order > sourceIndex && col.order <= targetIndex)
                    .map(col => 
                        prisma.column.update({
                            where: { id: col.id },
                            data: { order: col.order - 1 }
                        })
                    )
            );
        } else {
            // Moving left
            updates.push(
                ...columns
                    .filter(col => col.order >= targetIndex && col.order < sourceIndex)
                    .map(col => 
                        prisma.column.update({
                            where: { id: col.id },
                            data: { order: col.order + 1 }
                        })
                    )
            );
        }

        // Then move the source column to its new position
        updates.push(
            prisma.column.update({
                where: { id: params.columnId },
                data: { order: targetIndex }
            })
        );

        // Execute all updates in a transaction
        await prisma.$transaction(updates);

        // Return the updated columns
        const updatedColumns = await prisma.column.findMany({
            where: { boardId: sourceColumn.boardId },
            orderBy: { order: 'asc' },
            include: {
                cards: {
                    orderBy: { order: 'asc' }
                }
            }
        });

        return NextResponse.json(updatedColumns);

    } catch (error) {
        console.error('Error reordering column:', error);
        return NextResponse.json({ error: 'Failed to reorder column' }, { status: 500 });
    }
}