import React from "react";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import { Github, Linkedin, User } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex items-center gap-2 lg:flex-1">
            <Logo className="h-6 w-6"/>
            <div className="font-medium">Lyra</div>
          </div>

            <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
              <a href="/" className="text-xs md:text-sm hover:text-white transition text-white/70">
                Features
              </a>
              <a href="/" className="text-xs md:text-sm hover:text-white transition text-white/70">
                Developer
              </a>
              <a href="/" className="text-xs md:text-sm hover:text-white transition text-white/70">
                Changelog
              </a>
              <a href="/" className="text-xs md:text-sm hover:text-white transition text-white/70">
                Contact
              </a>
            </nav>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <Github className=" text-white/40 hover:text-white transition"/>
            <Linkedin className=" text-white/40 hover:text-white transition"/>
            <User className=" text-white/40 hover:text-white transition"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
