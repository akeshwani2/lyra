import { Button } from "@/components/ui/button";
import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import Header from "./section/Header";


// Async makes it a server component
export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;

  if (isAuth) {
    redirect("/dashboard")
  }

  return (
    <div className="w-screen min-h-screen bg-gradient-to-t from-gray-700 via-gray-900 to-black relative overflow-hidden">
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

          {/* Navigation Button */}
          <Link href="/sign-in">
            <Button className="text-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-2 rounded-xl mr-4">
              Get Started
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Existing background elements */}
      <div className="absolute inset-0 w-full h-full">
        {/* Large hexagon shape */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-purple-500/20 rotate-[45deg] rounded-[100px]"></div>
        
        {/* Smaller decorative shapes */}
        <div className="absolute top-[20%] left-[20%] w-[200px] h-[200px] border border-purple-500/20 rotate-12 rounded-3xl"></div>
        <div className="absolute bottom-[20%] right-[20%] w-[300px] h-[300px] border border-purple-500/20 -rotate-12 rounded-3xl"></div>
        <div className="absolute top-[60%] right-[30%] w-[150px] h-[150px] border border-purple-500/20 rotate-45 rounded-3xl"></div>
        
        {/* Glow effects */}
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-purple-500/5 blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-blue-500/5 blur-[100px]"></div>
      </div>

      {/* Main content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
              Welcome to Muse!
            </h1>
          </div>

          <p className="max-w-xl mt-6 text-lg text-muted-foreground">
            Muse is a place to write, think, and plan.
            <br />
            Enhance your productivity using cutting edge AI, at your fingertips.
            <br />
            Join a community of people who want to get things done.
          </p>

          <div className="flex flex-row mt-8">
            <Link href="/sign-in">
              <Button className="text-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-5 rounded-xl">
                Let's get started
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
