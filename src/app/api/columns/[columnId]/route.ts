import { prisma } from '@/app/lib/prisma'
import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'

export async function DELETE(
    request: Request,
    { params }: { params: { columnId: string } }  // Add this parameter
) {
    try {
        const { userId } = await auth();
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { columnId } = params;  // Get columnId from params instead of URL

        if (!columnId) {
            return NextResponse.json({ error: "Column ID not provided" }, { status: 400 });
        }

        // Delete the column (and all its cards due to cascade delete)
        await prisma.column.delete({
            where: { id: columnId }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Error deleting column" }, { status: 500 });
    }
}
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
        const { title } = await request.json();

        const updatedColumn = await prisma.column.update({
            where: { id: columnId },
            data: { title }
        });

        return NextResponse.json(updatedColumn);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Error updating column" }, { status: 500 });
    }
}