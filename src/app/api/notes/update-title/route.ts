import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/app/lib/prisma';

export async function PATCH(request: Request) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { title } = await request.json();

    if (!title) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    // Get the most recent note for this user
    const note = await prisma.genNotes.findFirst({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    if (!note) {
      return NextResponse.json({ error: 'No note found' }, { status: 404 });
    }

    // Update the title
    const updatedNote = await prisma.genNotes.update({
      where: { id: note.id },
      data: { title },
    });

    return NextResponse.json(updatedNote);
  } catch (error) {
    console.error('Update title error:', error);
    return NextResponse.json(
      { error: 'Failed to update title' }, 
      { status: 500 }
    );
  }
}