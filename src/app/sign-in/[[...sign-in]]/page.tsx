'use client'

import Header from '@/app/section/Header';
import { SignIn, useAuth } from '@clerk/nextjs'
import { dark } from '@clerk/themes';
import Link from 'next/link';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, User } from 'lucide-react';

export default function Page() {
  return (
    <div className='min-h-screen flex items-center justify-center p-5 bg-gradient-to-t from-gray-700 via-gray-900 to-black relative overflow-hidden'>
      {/* Header/Navigation */}
      <div className="absolute top-0 left-0 w-full z-20 px-12 py-6">
      <div className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4  z-50">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="Muse Logo" width={65} height={65} />
            <span className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text pl-4">
              Muse
            </span>
          </Link>
        </div>
      </div>

      {/* Decorative background lines */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] border border-purple-500/20 rotate-45 rounded-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] border border-purple-500/20 -rotate-12 rounded-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] border border-purple-500/20 rotate-45 rounded-3xl"></div>
        {/* Add subtle glow effect */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/5 blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className='flex flex-col md:flex-row gap-20 items-center relative z-10'>
        {/* Left side welcome section */}
        <div className='flex flex-col gap-5 w-[500px]'>
          <h1 className="text-6xl text-center font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text pb-2">
            Sign in to Muse!
          </h1>
          <div className="h-24">
          <p className="text-muted-foreground text-lg text-center [text-shadow:0_0_15px_rgba(255,255,255,0.3)]">              
            <TypeAnimation 
                sequence={[
                  'Your AI-powered academic companion to help you create and explore new academic possibilities',
                  2000,
                  'Transform your research journey with intelligent insights and personalized guidance',
                  2000,
                  'Let AI amplify your academic potential and streamline your workflow',
                  2000
                ]}
                wrapper="span"
                speed={70}
                repeat={Infinity}
              />
            </p>
          </div>
        </div>

        {/* Right side sign-in section */}
        <div className='flex flex-col gap-4 min-w-[400px]'>
          <SignIn 
            // afterSignInUrl={"/"}
            afterSignInUrl={"/tasks"}
            appearance={{
              baseTheme: dark,
              variables: {
                colorPrimary: "#8B5CF6", // Purple accent
              },
              elements: {
                // Option 1: Glassmorphism with purple accent
                card: "bg-gray-900/40 backdrop-blur-xl border border-purple-500/20 shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]",
                headerTitle: "text-white",
                headerSubtitle: "text-purple-200",
                socialButtonsBlockButton: "bg-gray-800/60 hover:bg-gray-700/60 border border-purple-500/20",
                formButtonPrimary: "bg-gradient-to-r from-blue-600 to-black-400 hover:from-blue-800 hover:to-black-600",
                footerActionLink: "text-blue-300 hover:text-purple-200",
                footerAction: "hidden",
                footer: "hidden",
              }
            }}
          />
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 right-0 text-center text-muted-foreground space-y-1 pb-4">
        <div className="absolute left-4 flex gap-4">
        <a 
            href="https://github.com/akeshwani2/muse" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-400 p-2 rounded-lg hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 
                       transition-all duration-300 
                       [filter:drop-shadow(0_0_15px_rgba(139,92,246,0.5))_drop-shadow(0_0_15px_rgba(59,130,246,0.5))] 
                       hover:[filter:drop-shadow(0_0_20px_rgba(139,92,246,0.8))_drop-shadow(0_0_20px_rgba(59,130,246,0.8))]"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://linkedin.com/in/arhaan-keshwani" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 p-2 rounded-lg hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 
                       transition-all duration-300 
                       [filter:drop-shadow(0_0_15px_rgba(59,130,246,0.5))] 
                       hover:[filter:drop-shadow(0_0_20px_rgba(59,130,246,0.8))_drop-shadow(0_0_20px_rgba(34,211,238,0.8))]"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://ak-port.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-amber-400 p-2 rounded-lg hover:text-white hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 
                       transition-all duration-300 
                       [filter:drop-shadow(0_0_15px_rgba(245,158,11,0.5))] 
                       hover:[filter:drop-shadow(0_0_20px_rgba(245,158,11,0.8))_drop-shadow(0_0_20px_rgba(249,115,22,0.8))]"
          >
            <User size={20} />
          </a>
        </div>
        <div className="flex items-center justify-center pb-1">
        <p>© 2024 Muse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

