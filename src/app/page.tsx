"use client";

import { useAuth, useUser} from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { ArrowUpRight, ListTodo, FileText, Calendar, Brain, Github, Linkedin, User, ArrowRight } from "lucide-react";
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { useEffect } from 'react';

const DashboardPage = () => {
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const { user } = useUser();

  const handleNavigation = (path: string) => {
    if (!isSignedIn) {
      sessionStorage.setItem('redirectPath', path);
      router.push("/sign-in");
      return;
    }
    router.push(path);
  };

  useEffect(() => {
    if (isSignedIn) {
      const redirectPath = sessionStorage.getItem('redirectPath');
      if (redirectPath) {
        router.push(redirectPath);
        sessionStorage.removeItem('redirectPath');
      }
    }
  }, [isSignedIn, router]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-gray-950">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 flex flex-row items-center justify-between px-2 sm:px-6 py-2 sm:py-4 z-50">
        <div className="flex items-center gap-2">
          <Image 
            src="/logo.svg"
            alt="Lyra Logo"
            width={40}
            height={40}
            className="rounded-lg sm:w-[65px] sm:h-[65px]"
          />
          <span className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            Lyra
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={() => isSignedIn ? router.push('/tasks') : router.push('/sign-in')}
            // className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 
            //          text-sm sm:text-base text-white font-medium relative group
            //          hover:from-violet-600 hover:to-cyan-500 transition-all duration-300
            //          transition-[background,transform,shadow] duration-300 ease-in-out
            //            hover:shadow-[0_0_2rem_-0.5rem_rgba(139,92,246,0.8)]"
            className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-violet-600 hover:to-cyan-500
            text-white font-medium relative group
            transition-[background,transform,shadow] duration-300 ease-in-out
            hover:shadow-[0_0_2rem_-0.5rem_rgba(139,92,246,0.8)]"
          >
            <span className="relative z-10">
              {isSignedIn 
                ? `Welcome ${user?.username || user?.firstName ? (user?.username || user?.firstName) : 'back'}!`
                : <>Explore Lyra <ArrowRight className="inline ml-1 w-4 h-4 sm:w-5 sm:h-5" /></>
              }
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 
                          transition-all duration-300 ease-in-out rounded-lg blur-lg -z-10"></div>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-5xl mx-auto text-center space-y-4 sm:space-y-12 z-10 px-2 sm:px-4 overflow-y-auto -mt-8 sm:mt-20">
        {/* Hero Title */}
        <div className="space-y-2 sm:space-y-4 pb-6 sm:pb-0 pt-4 sm:pt-0">
          
          <h1 className="text-2xl sm:text-7xl font-bold">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              Revolutionize Your Workflow
            </span>
          </h1>
          <p className="text-sm sm:text-xl text-gray-400 px-2 sm:pb-0 [text-shadow:0_0_15px_rgba(255,255,255,0.5)]">
            <TypeAnimation 
              sequence={[
                'AI Solutions to Boost Your Productivity and Creativity',
                2000,
                'Seamlessly Integrate AI Technology into Your Daily Workflow',
                2000,
                'Elevate Your Work with Intelligent Automation and Innovation',
                2000,
              ]}
              wrapper="span"
              speed={75}
              repeat={Infinity}
            />         
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-6 px-4 mt-4 sm:px-4 sm:mt-8">
          {/* AI Resume Card */}
          <div 
            onClick={() => handleNavigation("/ai-resume")} 
            className="group cursor-pointer animate-[float_6s_ease-in-out_infinite] [animation-delay:4.5s]"
          >
            <div className="p-4 sm:p-8 rounded-2xl bg-gray-900/50 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.3)] backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute -top-1 -right-1 w-16 h-16 rotate-45 transform translate-x-1/2 -translate-y-1/2 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-500/20 group-hover:to-blue-500/40"></div>
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/20 blur-[2px] group-hover:blur-[4px]"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-400/30 blur-[4px]"></div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                <div className="p-2 sm:p-3 rounded-xl bg-blue-500/10 text-blue-400">
                  <FileText size={24} className="sm:w-6 sm:h-6"/>
                </div>
                <h2 className="sm:text-2xl text-xl font-bold text-white">AI Resume Builder</h2>
              </div>
              <p className="text-gray-400 text-left sm:text-base text-sm mb-2 sm:mb-4 [text-shadow:0_0_15px_rgba(255,255,255,0.5)]">
                Create professional resumes with <span className="text-blue-400 px-1 shadow-[0_0_15px_rgba(129,140,248,0.7)] rounded">AI</span> powered suggestions.
              </p>
              <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors [text-shadow:0_0_15px_rgba(96,165,250,0.7)]">
                Build Resume <ArrowUpRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
          </div>

          {/* Tasks Card */}
          <div 
            onClick={() => handleNavigation("/tasks")} 
            className="group cursor-pointer animate-[float_6s_ease-in-out_infinite] [animation-delay:1.5s]"
          >
            <div className="p-3 sm:p-8 rounded-2xl bg-gray-900/50 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)] backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute -top-1 -right-1 w-16 h-16 bg-gradient-to-br from-transparent to-purple-500/20 rotate-45 transform translate-x-1/2 -translate-y-1/2 group-hover:to-purple-500/40 transition-colors duration-300"></div>
              <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                  <ListTodo size={24} />
                </div>
                <h2 className="sm:text-2xl text-xl font-bold text-white">Kanban Board</h2>
              </div>
              <p className="text-gray-400 text-left sm:text-base text-sm mb-2 sm:mb-4 [text-shadow:0_0_15px_rgba(255,255,255,0.5)]">
                Organize your tasks with our intuitive Kanban board system.
              </p>
              <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors [text-shadow:0_0_15px_rgba(139,92,246,0.7)]">
                Get Started <ArrowUpRight className="ml-2" />
              </div>
            </div>
          </div>

          {/* Scheduler Card */}
          <div 
            onClick={() => handleNavigation("/scheduler")} 
            className="group cursor-pointer animate-[float_6s_ease-in-out_infinite] [animation-delay:3s]"
          >
            <div className="p-3 sm:p-8 rounded-2xl bg-gray-900/50 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)] backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute -top-1 -right-1 w-16 h-16 bg-gradient-to-br from-transparent to-cyan-500/20 rotate-45 transform translate-x-1/2 -translate-y-1/2 group-hover:to-cyan-500/40 transition-colors duration-300"></div>
              <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Calendar size={24} />
                </div>
                <h2 className="sm:text-2xl text-xl font-bold text-white">Scheduler</h2>
              </div>
              <p className="text-gray-400 text-left sm:text-base  text-sm mb-2 sm:mb-4 [text-shadow:0_0_15px_rgba(255,255,255,0.5)]">
                Plan your day with our intelligent scheduling assistant.
              </p>
              <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors [text-shadow:0_0_15px_rgba(34,211,238,0.7)]">
                Schedule Now <ArrowUpRight className="ml-2" />
              </div>
            </div>
          </div>

          {/* AI Chat Card */}
          <div 
            onClick={() => handleNavigation("/ai-pdf")} 
            className="group cursor-pointer animate-[float_6s_ease-in-out_infinite]"
          >
            <div className="p-3 sm:p-8 rounded-2xl bg-gray-900/50 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(129,140,248,0.3)] backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute -top-1 -right-1 w-16 h-16 bg-gradient-to-br from-transparent to-indigo-500/20 rotate-45 transform translate-x-1/2 -translate-y-1/2 group-hover:to-indigo-500/40 transition-colors duration-300"></div>
              <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Brain size={24} />
                </div>
                <h2 className="sm:text-2xl text-xl font-bold text-white">AI PDF Chat</h2>
              </div>
              <p className="text-gray-400 text-left sm:text-base text-sm mb-2 sm:mb-4 [text-shadow:0_0_15px_rgba(255,255,255,0.5)]">
              Engage with Any PDF Seamlessly Using  <span className="text-indigo-400 px-1 shadow-[0_0_15px_rgba(129,140,248,0.7)] rounded">AI</span>


              
              </p>
              <div className="flex items-center text-indigo-400 group-hover:text-indigo-300 transition-colors [text-shadow:0_0_15px_rgba(129,140,248,0.7)]">
                Start Chat <ArrowUpRight className="ml-2" />
              </div>
              {/*           <div 
            onClick={() => handleNavigation("/ai-pdf")} 
            className="group cursor-pointer"
          >
            <div className="p-8 rounded-2xl bg-gray-900/50 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)] backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
                  <Brain size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">AI PDF Chat</h2>
              </div>
              <p className="text-gray-400 text-left mb-4 [text-shadow:0_0_15px_rgba(255,255,255,0.5)]">
                Engage with Any PDF Seamlessly Using <span className="text-amber-400 px-1 shadow-[0_0_15px_rgba(245,158,11,0.7)] rounded">AI</span>
              </p>
              <div className="flex items-center text-amber-400 group-hover:text-amber-300 transition-colors [text-shadow:0_0_15px_rgba(245,158,11,0.7)]">
                Start Chat <ArrowUpRight className="ml-2" />
              </div>
            </div>
          </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 -z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-purple-500/20 rotate-[45deg] rounded-[100px]"></div>
        <div className="absolute top-[20%] left-[20%] w-[200px] h-[200px] border border-purple-500/20 rotate-12 rounded-3xl"></div>
        <div className="absolute bottom-[20%] right-[20%] w-[300px] h-[300px] border border-purple-500/20 -rotate-12 rounded-3xl"></div>
        <div className="absolute top-[60%] right-[30%] w-[150px] h-[150px] border border-purple-500/20 rotate-45 rounded-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-purple-500/5 blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-blue-500/5 blur-[100px]"></div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 pb-1 sm:pb-4 right-0 text-center text-muted-foreground">
        <div className="absolute left-2 sm:left-4 bottom-2 flex gap-2 sm:gap-4">
          <a 
            href="https://github.com/akeshwani2/lyra" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-400 p-1 sm:p-2 rounded-lg hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 
                       transition-all duration-300 
                       [filter:drop-shadow(0_0_15px_rgba(139,92,246,0.5))_drop-shadow(0_0_15px_rgba(59,130,246,0.5))] 
                       hover:[filter:drop-shadow(0_0_20px_rgba(139,92,246,0.8))_drop-shadow(0_0_20px_rgba(59,130,246,0.8))]"
          >
            <Github size={16} className="sm:w-5 sm:h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/arhaan-keshwani" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 p-1 rounded-lg sm:p-2 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 
                       transition-all duration-300 
                       [filter:drop-shadow(0_0_15px_rgba(59,130,246,0.5))] 
                       hover:[filter:drop-shadow(0_0_20px_rgba(59,130,246,0.8))_drop-shadow(0_0_20px_rgba(34,211,238,0.8))]"
          >
            <Linkedin size={16} className="sm:w-5 sm:h-5" />
          </a>
          <a 
            href="https://ak-port.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-amber-400 p-1 sm:p-2 rounded-lg text-amber-400 hover:text-white hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 
                       transition-all duration-300 
                       [filter:drop-shadow(0_0_15px_rgba(245,158,11,0.5))] 
                       hover:[filter:drop-shadow(0_0_20px_rgba(245,158,11,0.8))_drop-shadow(0_0_20px_rgba(249,115,22,0.8))]"
          >
            <User size={16} className="sm:w-5 sm:h-5" />
          </a>
        </div>
        <div className="flex items-center justify-center text-xs sm:text-base pb-1 [text-shadow:0_0_15px_rgba(255,255,255,0.5)]">
          <p>© 2024 Lyra. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default DashboardPage

