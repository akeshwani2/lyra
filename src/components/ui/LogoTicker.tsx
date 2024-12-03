"use client";
import React from "react";
import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import quantumLogo from "@/assets/logo-quantum.png";
import pulseLogo from "@/assets/logo-pulse.png";
import echoLogo from "@/assets/logo-echo.png";
import denverlogo from "@/assets/duLogo.png";
import berkleylogo from "@/assets/berk2-removebg-preview.png";
import harvardlogo from "@/assets/harvardtest.png";

import { motion } from "framer-motion";
const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2>Revolutionizing productivity for users around the world</h2>
          </div>
          <div className="flex flex-1 overflow-hidden items-center [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div 
            initial={{ translateX: '-50%'}}
            animate={{translateX: '0'}}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear'
            }}
              className="flex flex-none gap-14 pr-14 -translate-x-1/2 items-center"
            >
              {[
                berkleylogo,

                acmeLogo,
                apexLogo,
                celestialLogo,
                quantumLogo,
                pulseLogo,
                echoLogo,
                denverlogo,
                berkleylogo,

                acmeLogo,
                apexLogo,
                celestialLogo,
                quantumLogo,
                pulseLogo,
                echoLogo,
                denverlogo,
              ].map((logo, index) => (
                <img
                  src={logo.src}
                  key={`${logo.src}-${index}`}
                  alt=""
                  className={`w-auto ${logo === berkleylogo ? 'h-20 pt-1' : 'h-6'} my-auto`}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
