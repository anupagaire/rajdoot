"use client";

import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import HeroCard from "./HeroCard";
import Link from "next/link";


const Hero = () => {
  return (
    <>
      <main className="relative min-h-screen lg:min-h-[180vh] w-full mx-auto pb-10 lg:pb-0">
        <Navbar />
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/indianfood.jpg"
            fill
            priority
            className="hidden lg:block object-cover"
            alt="Indian, western and nepalese cuisine"
          />
          <Image
            src="/indianfood.jpg"
            fill
            priority
            className="lg:hidden object-cover"
            alt="Indian, western and nepalese cuisine"
            style={{ objectFit: "cover", objectPosition: "left" }}
          />

          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative h-screen w-full max-w-screen-xl mx-auto flex items-center px-8 sm:px-12 lg:px-6 py-24 ">
          <div className="w-full h-full flex items-center gap-8 mt-10">
            <div className="w-full lg:w-3/5 flex flex-col justify-center">
              <div className="max-w-4xl space-y-8">
                <h1 className="font-bold text-white leading-[1.05]">
                <span className="block text-2xl sm:text-4xl lg:text-5xl xl:text-6xl">
                  An Unforgettable
                </span>
                <span className="block text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-light mt-2 italic">
                  Journey of Indian,
                </span>
                <span className="block text-xl sm:text-3xl lg:text-4xl xl:text-5xl text-[#d4b78f] mt-3 uppercase tracking-tighter">
                  Western & Nepalese
                </span>
                <span className="block text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif mt-2 leading-tight">
                  Cuisine
                </span>
              </h1>

                <div className="flex items-start gap-6 mt-12">
                  <div className="hidden sm:block w-[1px] h-20 bg-white/30 mt-2"></div>
                  <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed font-light italic">
                    &quot;Food is more than nourishment; it is culture, memory, and emotion served on a plate. At the heart of our dining philosophy lies a deep respect for tradition and a passion for bringing people together through authentic flavors.&quot;
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-5 pt-4">
                  <Link href="/menu" className="w-full sm:w-auto">
                    <button className="w-full px-10 py-4 bg-white text-black hover:bg-[#d4b78f] hover:text-white transition-all duration-300 rounded-full font-medium text-base uppercase tracking-wider">
                      View Menu
                    </button>
                  </Link>
                  <Link href="/contact" className="w-full sm:w-auto">
                    <button className="w-full px-10 rounded-full py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium text-base uppercase tracking-wider">
                      Book a seat
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex w-2/5 h-full justify-center items-center relative">
              <div className="relative w-[420px] h-[500px] flex items-center justify-center">
                <div className="absolute top-12 right-0 w-8 h-8 rounded-full bg-[#d4b78f]/20 blur-sm"></div>
                <div className="absolute top-32 -left-6 w-12 h-12 rounded-full bg-[#d4b78f]/30 blur-md"></div>
                
                <div className="relative w-[400px] h-[480px] rounded-t-full overflow-hidden bg-gradient-to-br from-gray-300 to-gray-400 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <Image src="/place/11.jpg" alt="Indian, western and nepalese cuisine" fill className="object-cover" />
                  
                </div>
                
                <div className="h-32 w-32 bg-gradient-to-tr from-[#d4b78f] to-[#c9a36d] absolute rounded-tl-[60px] rounded-br-[60px] -bottom-6 -right-6 shadow-xl flex justify-center items-center hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 cursor-pointer group">
                  <Link href="/contact" className="text-white font-serif text-xl italic group-hover:scale-110 transition-transform duration-300">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HeroCard />
      </main>
    </>
  );
};

export default Hero;
