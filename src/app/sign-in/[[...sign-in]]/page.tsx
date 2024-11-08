import { SignIn } from '@clerk/nextjs'
import { dark } from '@clerk/themes';

export default function Page() {
  return (
    <div className='min-h-screen flex items-center justify-center p-5 bg-gradient-to-t from-gray-700 via-gray-900 to-black'>
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
  )
}

