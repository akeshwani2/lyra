import React from 'react'
import { Message } from 'ai'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

type Props = {
    messages: Message[]
    isLoading: boolean
}

const MessageList = ({messages, isLoading}: Props) => {
    if (isLoading) return <div className='flex flex-col gap-2 px-4'><Loader2 className='w-4 h-4 animate-spin' /></div>
    if (!messages) return <></>

    return (
        <div className='flex flex-col gap-2 px-4'>
            {messages.map((message) => {
                const isUser = message.role === 'user'
                return (
                    <div key={message.id}
                        className={cn('flex', {
                            'justify-end': isUser,
                            'justify-start': !isUser,
                        })}
                    >
                        <div className={
                            cn('rounded-lg px-3 text-sm py-1 shadow-md ring-1 ring-gray-900/10', {
                                'bg-gradient-to-r from-purple-500 to-blue-500 text-white': isUser,
                                'bg-gray-800 text-white': !isUser,
                            })
                        }>
                            <p>{message.content}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MessageList