"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";

const CallToAction = () => {
  const router = useRouter();
  const { isSignedIn, user } = useUser();

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative"
          style={{ backgroundImage: `url(${starsBg.src})` }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{ backgroundImage: `url(${gridLines.src})` }}
          ></div>
          <div className="relative ">
          <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium">
          AI-powered productivity for everyone.
          </h2>
          <p className="text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tight">
            Achieve clear, impactful results without the complexity.
          </p>
          <div className="flex justify-center mt-8">
            <button
              className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] transition-all duration-300 hover:scale-105 hover:shadow-[0px_0px_16px_#8c45ff]"
              onClick={() =>
                isSignedIn ? router.push("/tasks") : router.push("/sign-in")
              }
            >
              <div className="absolute inset-0">
                <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>

                <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>

                <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255.7)_inset] rounded-lg"></div>
              </div>
              <span className="relative z-10">
                {isSignedIn ? (
                  `Welcome ${
                    user?.username || user?.firstName
                      ? user?.username || user?.firstName
                      : "back"
                  }!`
                ) : (
                  <>Explore Lyra</>
                )}
              </span>
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
