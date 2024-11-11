import Header from '@/app/section/Header';
import { SignIn } from '@clerk/nextjs'
import { dark } from '@clerk/themes';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <div className='min-h-screen flex items-center justify-center p-5 bg-gradient-to-t from-gray-700 via-gray-900 to-black relative overflow-hidden'>
      {/* Header/Navigation */}
      <div className="absolute top-0 left-0 w-full z-20 px-12 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex flex-row items-center">
            <Image src="/logo.svg" alt="Muse Logo" width={60} height={60} />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text pl-4">
              Muse
            </h1>
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
      <div className='flex gap-20 items-center relative z-10'>
        {/* Left side welcome section */}
        <div className='flex flex-col gap-5 max-w-md'>
          <h1 className="text-6xl text-center font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text pb-2">
            Sign in to Muse!
          </h1>
          <p className="text-muted-foreground text-md text-center">
            Your AI-powered academic companion. Create, collaborate, and explore new academic possibilities.
          </p>
        </div>

        {/* Right side sign-in section */}
        <div className='flex flex-col gap-4'>
          <SignIn 
            afterSignInUrl={"/dashboard"}
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
    </div>
  )
}

