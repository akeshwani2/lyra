'use client'
import { uploadToS3 } from '@/app/lib/s3'
import { useMutation } from '@tanstack/react-query'
import { Inbox, Loader2 } from 'lucide-react'
import axios from 'axios'
import { toast } from 'react-hot-toast'

import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useRouter } from 'next/navigation'

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
        // We can also add a maxFiles parameter to tell it how many files we want to upload
        maxFiles: 1,
        // We can also add a onDrop function to handle the files that are dropped
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
                    }
                    
                })
            } catch (error) {
                toast.error('Error uploading file to S3')
                console.error('Error uploading file to S3:', error)
            } finally {
                setUploading(false)
            }
        }
    })

  return (
    <div className='p-2 rounded-xl'>
        <div {...getRootProps({
            className: "border-dashed border-2 border-muted-foreground hover:border-purple-400 rounded-xl cursor-pointer bg-transparent p-8 flex flex-col items-center justify-center"
        })}>
            <input {...getInputProps()} />
            {(uploading || isPending) ? (
                <>
                <Loader2 className='w-10 h-10 text-purple-400 animate-spin' />
                <p className='mt-2 text-sm text-muted-foreground'>Spilling Tea to AI...</p>
                </>
            ) : (
                <>
                    <Inbox className='w-10 h-10 text-purple-400' />
                    <p className='mt-2 text-sm text-muted-foreground'>Drop PDF Here</p>
                </>
            )}
        </div>
    </div>
  )
}

export default FileUpload