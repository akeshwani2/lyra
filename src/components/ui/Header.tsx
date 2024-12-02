"use client";
import React, { useEffect } from "react";
import LogoIcon from "@/assets/logo.svg";
import { useRouter } from "next/navigation";
import { useAuth, useUser } from "@clerk/nextjs";
import MenuIcon from "@/assets/icon-menu.svg";

const Header = () => {
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const handleNavigation = (path: string) => {
    if (!isSignedIn) {
      sessionStorage.setItem("redirectPath", path);
      router.push("/sign-in");
      return;
    }
    router.push(path);
  };

  useEffect(() => {
    if (isSignedIn) {
      const redirectPath = sessionStorage.getItem("redirectPath");
      if (redirectPath) {
        router.push(redirectPath);
        sessionStorage.removeItem("redirectPath");
      }
    }
  }, [isSignedIn, router]);

  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10 backdrop-blur md:backdrop-blur-none">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur">
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex items-center justify-center border-white/15">
              <LogoIcon className="w-8 h-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex text-white/70 gap-8 text-sm">
              <a href="/" className="hover:text-white transition">
                Features
              </a>
              <a href="/" className="hover:text-white transition">
                Developer
              </a>
              <a href="/" className="hover:text-white transition">
                Changelog
              </a>
              <a href="/" className="hover:text-white transition">
                Contact
              </a>
            </nav>
          </div>

          {/* Menu */}
          <div className="flex items-center gap-4">
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
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
