import { prisma } from '@/app/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST() {
    try {
        const board = await prisma.board.create({
            data: {
                title: "My First Board",
                userId: "test-user",
                columns: {
                    create: {
                        title: "New Column",
                        order: 0
                    }
                }
            },
            include: {
                columns: true
            }
        });

        return NextResponse.json(board);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Error creating board" }, { status: 500 });
    }
}