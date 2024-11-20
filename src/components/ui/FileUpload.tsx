'use client'
import { uploadToS3 } from '@/app/lib/s3'
import { useMutation } from '@tanstack/react-query'
import { Inbox, Loader2 } from 'lucide-react'
import axios from 'axios'
import { toast } from 'react-hot-toast'

import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useRouter } from 'next/navigation'
import { FileIcon } from 'lucide-react';
const FileUpload = () => {
    const router = useRouter()
    const [uploading, setUploading] = React.useState(false)

    // Here, we create a mutation. A mutation is a function that allows us to create, update, or delete data in the database
    const {mutate, isPending} = useMutation({
        mutationFn: async ({file_key, file_name}: {file_key: string, file_name: string}) => {
            const response = await axios.post('/api/create-chat', {
                file_key,
                file_name
            })
            return response.data
        }
    })

    // useDropzone is a hook that allows us to create a dropzone for file uploads and the getRootProps and getInputProps are used to connect the dropzone to the input element
    const {getRootProps, getInputProps} = useDropzone({
        // We can pass in some parameters to tell it how to behave for example we can tell it to accept only pdf files
        accept: {
            'application/pdf': ['.pdf']
        },
        // We can add a maxFiles parameter to tell it how many files we want to upload
        maxFiles: 1,
        // We can also add an onDrop function to handle the files that are dropped
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
                // This checks if for some reason the file_key or file_name is not returned, if so, we alert the user
                if (!data?.file_key || !data?.file_name) {
                    toast.error('Something went wrong')
                    return
                }
                mutate(data, {
                    onSuccess: ({chat_id}) => {
                        toast.success('File uploaded successfully', {
                            duration: 4000, // Duration in milliseconds
                            icon: '🎉',     // Custom icon
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
                        setUploading(false)  // Reset uploading state on error
                    }
                    
                })
            } catch (error) {
                toast.error('Error uploading file to S3')
                console.error('Error uploading file to S3:', error)
                setUploading(false)  // Reset uploading state on error
            }
        }
    })

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
                <FileIcon className="w-12 h-12 text-gray-300" />
                <p>Drop PDF Here</p>
            </div>
        )}
    </div>
  )
}

export default FileUpload