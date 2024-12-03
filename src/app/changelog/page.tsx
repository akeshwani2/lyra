"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/Header";
import starsBg from "@/assets/stars.png";
import bgImage from "@/assets/new-bg-image.png";
import scribeImage from "@/assets/scribe.png";
import noteImage from "@/assets/notemate.png";
import Footer from "@/components/ui/Footer";
import Logo from "@/assets/logo.svg";
import userImage from "@/assets/users.png";
export default function ChangelogPage() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <motion.div
      ref={sectionRef}
      className="min-h-screen bg-black text-white"
      style={{
        backgroundImage: `url(${starsBg.src})`,
        backgroundSize: "2000px",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        backgroundPositionY,
      }}
      animate={{
        backgroundPositionX: [0, -2000],
      }}
      transition={{
        duration: 60,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
    >
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-8 py-24">
        <div className="mx-auto space-y-40">
          {/* Header */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-6xl font-medium">Changelog</h1>
            <p className="text-xl text-white/70">
              New updates and improvements to Lyra.
            </p>
          </div>

          {/* Changelog Entries */}
          <div className="space-y-40">
            <article className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <time className="block text-base text-white/50">
                  December 3, 2024
                </time>
                <h2 className="text-3xl font-medium">
                  Redesigned landing page
                </h2>
                <p className="text-white/70 leading-relaxed">
                  This week I improved a few features that weren't quite living
                  up to their potential. They each had small limitations that
                  were annoying and prevented me and some users from using them
                  well, or at all. I decided to give the landing page a makeover
                  to make it more modern and user-friendly.
                </p>
              </div>
              <div className="border border-white/20 p-4 rounded-xl mt-3 lg:mt-0">
                <img src={bgImage.src} alt="bgImage" />
              </div>
            </article>
            <hr className="border-t border-white/20 my-12" />

            <article className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <time className="block text-base text-white/50">
                  December 2, 2024
                </time>
                <h2 className="text-3xl font-medium">
                  A Heartfelt Thank You to the Users
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Thank you to all of you incredible users who have embraced
                  Lyra! Your support and feedback have been invaluable in
                  shaping our journey. I am committed to continuously improving
                  and enhancing your experience, and I couldn't have done it
                  without you. Your enthusiasm inspires me every day to innovate
                  and create a better platform for everyone.
                </p>
              </div>
              <div className="border border-white/20 p-4 rounded-xl mt-3 lg:mt-0">
                <img src={userImage.src} alt="userImage" />
              </div>
            </article>

            <hr className="border-t border-white/20 my-12" />

            <article className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <time className="text-base text-white/50">
                  November 29, 2024
                </time>
                <h2 className="text-3xl font-semibold tracking-tight">
                  AI-powered note-taking
                </h2>
                <p className="text-white/70 leading-relaxed">
                  I have added a new feature that allows you to take notes using
                  AI. When stuck on a topic or don't have time to take notes,
                  you can use the AI to enhance your notes for you simply by
                  clicking a button.
                </p>
              </div>
              <div className="border border-white/20 p-4 rounded-xl mt-3 lg:mt-0">
                <img src={noteImage.src} alt="noteImage" />
              </div>
            </article>

            <hr className="border-t border-white/20 my-12" />

            <article className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <time className="text-base text-white/50">
                  November 20, 2024
                </time>
                <h2 className="text-3xl font-semibold tracking-tight">
                  Introducing Scribe
                </h2>
                <p className="text-white/70 leading-relaxed">
                  I have added a new feature called Scribe. Scribe is a tool
                  that allows you to summarize/transcribe your lectures into a
                  single document. This is a great tool for students who want to
                  quickly summarize their lectures for review or for note-taking
                  and when they don't have time to take notes during class.
                </p>
              </div>
              <div className="border border-white/20 p-4 rounded-xl mt-3 lg:mt-0">
                <img src={scribeImage.src} alt="scribeImage" />
              </div>
            </article>
          </div>
        </div>
        <div className="flex justify-center items-center pt-12">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Logo className="h-6 w-6" />
            </Link>
            <div className="">Lyra. All Rights Reserved.</div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
