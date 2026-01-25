"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const HeroCard = () => {
  return (
    <section className="w-full max-w-screen-lg mx-auto mt-[-40px] sm:mt-10 lg:-mt-68 relative lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 z-20 hover:shadow-xl hover:shadow-gray-500/50 hover:scale-105 transition-all duration-300 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-gradient-to-br from-[#faf7f2] to-[#f5f0e6] 
        p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg relative 
        h-auto overflow-visible"
      >
        <div className="border-2 border-[#d4b78f] rounded-lg p-4 sm:p-6 lg:p-8">
          <div className="w-full flex flex-col items-center space-y-4 sm:space-y-6">
            
            <div className="flex flex-col items-center space-y-2">
              <Image
                src="/logo.png"
                height={80}
                width={80}
                alt="rajdoot logo"
              />
              <div className="text-center">
                <h2 className="text-base sm:text-xl md:text-2xl text-[#8c6d46] italic font-light">
                  for the best memories
                </h2>
                <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl text-[#513c28] font-serif mt-2">
                  A Cuisine Journey
                </h1>
              </div>
            </div>

            <div className="w-full">
              <div className="bg-[#f0e9db] p-2 sm:p-4 rounded-md text-sm sm:text-lg text-center text-[#513c28]">
                [Rajdoot Indian , Western & Nepalese Cuisines – Authentic Flavors, Unforgettable Taste!]
              </div>
            </div>

            <div className="my-2 sm:my-4">
              <Image
                src="/decoration.png"
                height={100}
                width={300}
                alt="decoration svg"
                className="opacity-80"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4 sm:gap-8 mt-2 sm:mt-4 text-center md:text-left">
              <div className="flex flex-col space-y-1">
                <h3 className="text-[#8c6d46] font-semibold uppercase text-xs sm:text-sm tracking-wider">
                  Opening Time
                </h3>
                <div className="border-t border-[#d4b78f] pt-1 sm:pt-2 mt-1">
                  <p className="text-[#513c28] font-serif text-sm">9 AM to 12 PM</p>
                  <span className="font-medium text-[#776552] text-xs sm:text-sm">
                    Breakfast 9:00 AM - 11:00 AM
                  </span>
                  <br />
                  <span className="font-medium text-[#776552] text-xs sm:text-sm">
                    Lunch 11:00 AM - 4:00 PM
                  </span>
                  <br />
                  <span className="font-medium text-[#776552] text-xs sm:text-sm">
                    Dinner 4:00 PM- 12:00 PM
                  </span>
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                <h3 className="text-[#8c6d46] font-semibold uppercase text-xs sm:text-sm tracking-wider">
                  Location
                </h3>
                <div className="border-t border-[#d4b78f] pt-1 sm:pt-2 mt-1">
                  <p className="text-[#513c28] font-serif text-sm">
                    G/F, 1J WATER STREET,SAI YING PUN,HONG KONG
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                <h3 className="text-[#8c6d46] font-semibold uppercase text-xs sm:text-sm tracking-wider">
                  Contact
                </h3>
                <div className="border-t border-[#d4b78f] pt-1 sm:pt-2 mt-1">
                  <a href="tel:+852 59567426" className="font-serif text-[#513c28] text-sm">
                    +852 59567426
                  </a>
                  <br />
                  <a href="tel:+852 59567426" className="text-[#776552] text-xs sm:text-sm">
                    +852 59567426
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-2 mt-2 sm:mt-4 text-center md:text-left items-center justify-center">
              <h3 className="text-[#8c6d46] font-semibold uppercase text-xs sm:text-sm tracking-wider">
                Order Online
              </h3>
              <div className="flex gap-2 sm:gap-4 mt-1">
                <Link href="https://url.mykeeta.com/xzhpRcQz" target="_blank">
                  <Image src="/keeta.webp" width={40} height={30} alt="Keeta" className="rounded-full object-cover" />
                </Link>
                <Link href="https://foodpanda.go.link/gVZxa" target="_blank">
                  <Image src="/foodpanda.png" width={40} height={30} alt="Foodmandu" className="rounded-full object-cover" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroCard;