import { prisma } from '@/app/lib/prisma';
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function PATCH(
    request: Request,
    { params }: { params: { columnId: string } }
) {
    try {
        const { userId } = await auth();
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { columnId } = params;
        const { targetColumnId } = await request.json();

        // Get both columns to swap their orders
        const [sourceColumn, targetColumn] = await Promise.all([
            prisma.column.findUnique({ where: { id: columnId } }),
            prisma.column.findUnique({ where: { id: targetColumnId } })
        ]);

        if (!sourceColumn || !targetColumn) {
            return NextResponse.json({ error: "Column not found" }, { status: 404 });
        }

        // Get all columns to handle reordering
        const allColumns = await prisma.column.findMany({
            where: { boardId: sourceColumn.boardId },
            orderBy: { order: 'asc' }
        });

        // Calculate new orders
        const sourceOrder = sourceColumn.order;
        const targetOrder = targetColumn.order;
        const minOrder = Math.min(sourceOrder, targetOrder);
        const maxOrder = Math.max(sourceOrder, targetOrder);

        // Update all affected columns
        await prisma.$transaction([
            // Move source column to target position
            prisma.column.update({
                where: { id: columnId },
                data: { order: targetOrder }
            }),
            // Shift other columns
            prisma.column.updateMany({
                where: {
                    boardId: sourceColumn.boardId,
                    NOT: { id: columnId },
                    order: {
                        gte: minOrder,
                        lte: maxOrder
                    }
                },
                data: {
                    order: {
                        increment: sourceOrder < targetOrder ? -1 : 1
                    }
                }
            })
        ]);

        // Get updated board with new column order
        const updatedBoard = await prisma.board.findFirst({
            where: { userId },
            include: { 
                columns: {
                    include: {
                        cards: {
                            orderBy: { order: 'asc' }
                        }
                    },
                    orderBy: { order: 'asc' }
                }
            }
        });

        return NextResponse.json(updatedBoard);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            { error: "Error reordering columns" },
            { status: 500 }
        );
    }
}