'use client'
import { UserButton } from '@clerk/nextjs'
import React, { useState } from 'react'
import { dark } from '@clerk/themes'
import { useUser } from '@clerk/nextjs'
import CreatePage from '@/components/ui/CreatePage'

const NyxPage = () => {
  const { isLoaded, isSignedIn, user } = useUser()
  return (
    <div className="relative min-h-screen w-full">
      <div className="flex justify-between items-center p-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Nyx
        </h1>
        <div className="flex items-center gap-2">
          <button className="p-6 py-2.5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg shadow-lg hover:opacity-90 transition-all duration-200 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Create Project
        </button>
        <div className="flex items-center pl-4 gap-2">
        {isLoaded && isSignedIn && (
                        <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text text-lg md:text-xl font-bold">
                            {user?.username || user?.firstName || ''}
                        </span>
                    )}
                    {isLoaded && (
                        <UserButton 
                            afterSignOutUrl="/"
                            appearance={{
                                baseTheme: dark,
                                elements: {
                                    avatarBox: "w-8 h-8 md:w-10 md:h-10",
                                    userButtonTrigger: "p-1 md:p-2",
                                    userButtonPopoverCard: "min-w-[240px]"
                                }
                            }}
                        />
                    )}
                    </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <CreatePage />
      </div>
    </div>
  )
}

export default NyxPage
