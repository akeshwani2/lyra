'use client'
import { uploadToS3 } from '@/app/lib/s3'
import { useMutation } from '@tanstack/react-query'
import { Inbox, Loader2 } from 'lucide-react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import React, { forwardRef } from 'react'
import { useDropzone } from 'react-dropzone'
import { useRouter } from 'next/navigation'
import { FileIcon } from 'lucide-react'

type FileUploadRef = {
  click: () => void;
};

const FileUpload = forwardRef<FileUploadRef>((_, ref) => {
    const router = useRouter()
    const [uploading, setUploading] = React.useState(false)

    const {mutate, isPending} = useMutation({
        mutationFn: async ({file_key, file_name}: {file_key: string, file_name: string}) => {
            const response = await axios.post('/api/create-chat', {
                file_key,
                file_name
            })
            return response.data
        }
    })

    const {getRootProps, getInputProps, open} = useDropzone({
        accept: {
            'application/pdf': ['.pdf']
        },
        maxFiles: 1,
        onDrop: async (acceptedFiles) => {
            console.log(acceptedFiles)
            const file = acceptedFiles[0]
            if (file.size > 10 * 1024 * 1024) {
                toast.error('File is too large. Please upload a smaller file.')
                return
            }

            try {
                setUploading(true)
                const data = await uploadToS3(file)
                if (!data?.file_key || !data?.file_name) {
                    toast.error('Something went wrong')
                    return
                }
                mutate(data, {
                    onSuccess: ({chat_id}) => {
                        toast.success('File uploaded successfully', {
                            duration: 4000,
                            icon: '🎉',
                            style: {
                                background: '#4B0082',
                                color: '#fff',
                            },
                        

                        })
                        router.push(`/chat/${chat_id}`)
                    },
                    onError: (error) => {
                        toast.error('Error creating chat')
                        console.log('Error creating chat', error)
                        setUploading(false)
                    }
                    
                })
            } catch (error) {
                toast.error('Error uploading file to S3')
                console.error('Error uploading file to S3:', error)
                setUploading(false)
            }
        }
    })

    React.useImperativeHandle(ref, () => ({
        click: open
    }))

    return (
        <div 
            {...getRootProps({
                className: 'h-full w-full flex items-center justify-center cursor-pointer'
            })}
        >
            <input {...getInputProps()} />
            {(uploading || isPending) ? (
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="h-12 w-12 animate-spin text-purple-500" />
                    <div className="flex flex-col items-center gap-1">
                        <p className="text-lg font-medium bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                            Spilling tea to AI...
                        </p>
                        <p className="text-sm text-gray-500">
                            Analyzing your PDF with our advanced AI
                        </p>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center gap-2 text-gray-500">
                    
                    <p></p>
                </div>
            )}
        </div>
    )
})

FileUpload.displayName = 'FileUpload'

export default FileUpload