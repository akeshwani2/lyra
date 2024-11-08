import { Button } from "@/components/ui/button";
import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowBigRightDash, ArrowDownRightSquareIcon, ArrowRight, ArrowUpRight, ArrowUpRightFromCircleIcon } from "lucide-react";


// Async makes it a server component
export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;

  if (isAuth) {
    redirect("/dashboard")
  }
  return (
    <div className="w-screen min-h-screen bg-gradient-to-t from-gray-700 via-gray-900 to-black">

      {/* This makes everything inside the div centered */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
              
              Welcome to Muse!
            </h1>
          </div>



          <p className="max-w-xl mt-2 text-lg text-slate-600">
            Muse is a place to write, think, and plan.
            <br />
            Enhance your productivity using cutting edge AI, at your fingertips.
            <br />
            Join a community of people who want to get things done.
          </p>
          <div className="flex flex-row mt-2">
            <Link href="/sign-in">
            <Button className="text-md bg-gradient-to-r from-blue-600 to-black-400 hover:from-blue-800 hover:to-black-600">
              Let's get started
              <ArrowUpRight className="w-4 h-4" />
            </Button>
            </Link>
          </div>
          </div>
        </div>
      </div>
  );
}
