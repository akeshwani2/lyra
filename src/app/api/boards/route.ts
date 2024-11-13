import { prisma } from '@/app/lib/prisma'
import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'

// Helper function to get existing board or create new one
async function getOrCreateBoard(userId: string) {
    let board = await prisma.board.findFirst({
        where: { userId },
        include: { 
            columns: {
                include: {
                    cards: {
                        orderBy: {
                            order: 'asc'  // Order cards within columns
                        }
                    }
                },
                orderBy: {
                    order: 'asc'  // Order columns by position
                }
            }
        }
    });

    if (!board) {
        board = await prisma.board.create({
            data: {
                title: "My First Board!",
                userId,
            },
            include: { 
                columns: {
                    include: {
                        cards: true
                    }
                }
            }
        });
    }

    return board;
}

export async function GET() {
    try {
        const { userId } = await auth();

        if (!userId) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const board = await getOrCreateBoard(userId);
        return NextResponse.json(board);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            { error: "Error loading board" }, 
            { status: 500 }
        );
    }
}

// ... existing imports and getOrCreateBoard function ...

export async function POST() {
    try {
        const { userId } = await auth();

        if (!userId) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const board = await getOrCreateBoard(userId);

        // Create new column and immediately use it in the query
        await prisma.column.create({
            data: {
                title: "New Column",
                order: board.columns.length,
                boardId: board.id
            }
        });

        // Get updated board with all columns and cards
        const updatedBoard = await prisma.board.findUnique({
            where: { id: board.id },
            include: { 
                columns: {
                    include: {
                        cards: {
                            orderBy: {
                                order: 'asc'
                            }
                        }
                    },
                    orderBy: {
                        order: 'asc'
                    }
                }
            }
        });

        return NextResponse.json(updatedBoard);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            { error: "Error creating column" }, 
            { status: 500 }
        );
    }
}

export async function PATCH(
    request: Request
) {
    try {
        const { userId } = await auth();
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { title } = await request.json();

        // Get the current board
        const board = await getOrCreateBoard(userId);

        // Update the board title
        const updatedBoard = await prisma.board.update({
            where: { id: board.id },
            data: { title }
        });

        return NextResponse.json(updatedBoard);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Error updating board" }, { status: 500 });
    }
}