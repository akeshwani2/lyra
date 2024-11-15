import {Configuration, OpenAIApi} from 'openai-edge'
import {Message, OpenAIStream, StreamingTextResponse} from 'ai'
import { getContext } from '@/app/lib/context'
import { db } from '@/app/lib/db'
import { chats, messages as _messages } from '@/app/lib/db/schema'
import { eq } from 'drizzle-orm'
import { NextResponse } from 'next/server'
export const runtime = 'edge'

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(config)
export async function POST(req: Request) {
    try {
        const {messages, chatId} = await req.json()
        const _chats = await db.select().from(chats).where(eq(chats.id, chatId))
        if (!_chats.length) {
            return NextResponse.json({error: 'Chat not found'}, {status: 404})
        }
        const file_key = _chats[0].fileKey
        const lastMessage = messages[messages.length - 1]
        const context = await getContext(lastMessage.content, file_key)

        const prompt = {
            role: 'system',
            content: `You are a knowledgeable AI assistant that provides accurate and helpful responses based on the following context:

${context}

Only provide information that can be directly derived from the given context. Give all the information you have in a detailed and comprehensive manner. Format information in bullet points if necessary. If the context doesn't contain the answer, respond with "I don't have enough information to answer that question."`,
        }
        const response = await openai.createChatCompletion({
            model: 'gpt-4o-mini',
            messages: [
                prompt, 
                ...messages.filter((message: Message) => message.role === 'user'),
            ],
            stream: true, // This is so that the moment it starts generating, it sends the response back to the client instead of waiting for the whole response
        })
        const stream = OpenAIStream(response, {
            onStart: async() => {
                // save user message into db
                await db.insert(_messages).values({
                    chatId,
                    content: lastMessage.content,
                    role: 'user',
                })
            },
            onCompletion: async (completion) => {
                // save completion into db
                await db.insert(_messages).values({
                    chatId,
                    content: completion,
                    role: 'system',
                })
            }
        })
        return new StreamingTextResponse(stream)
    } catch (error) {
        console.log('[CHAT_ERROR]', error)
        return new Response('Error', {status: 500})
    }
}