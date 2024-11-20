import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { text } = await request.json();

    if (text.split(' ').length < 20) {
      return NextResponse.json({
        notes: `Quick Recording:\n\n${text}\n\n(Note: For best results, try recording at least a few sentences of lecture content)`
      });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a highly skilled assistant that transforms lecture transcriptions into concise, well-structured notes for study and reference. Follow these guidelines:

                        Organize Notes Effectively:
                        - Use proper headings and subheadings to structure the content logically.
                        - Break down information into bullet points or numbered lists when appropriate.
                        - Create sections for "Key Concepts," "Definitions," "Examples," and "Important Takeaways" if the content allows.

                        Highlight Key Ideas:
                        - Use bold text for critical points or key terms.
                        - Summarize and prioritize essential information.

                        Maintain Clarity:
                        - Rewrite and simplify complex sentences for better understanding.
                        - Remove filler or redundant phrases while keeping the meaning intact.

                        Be Flexible:
                        - If the transcription is very short, format the content clearly and concisely without forcing unnecessary sections.
                        - Adapt the structure to match the flow of the lecture.

                        Enhance Readability:
                        - Ensure grammar, punctuation, and formatting are professional and consistent.
                        - Use a neutral, academic tone unless instructed otherwise.
                        - Format the notes in a clean, readable format, with minimal distractions.

                        Consider Context:
                        - Retain the speaker's intent while improving clarity.
                        - Avoid altering technical or factual information.`
        },
        {
          role: "user",
          content: text
        }
      ],
    });

    return NextResponse.json({ notes: completion.choices[0].message.content });
  } catch (error) {
    console.error('Notes processing error:', error);
    return NextResponse.json({ error: 'Notes processing failed' }, { status: 500 });
  }
}