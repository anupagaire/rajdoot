"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const HeroCard = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative"
      >
        <div className="bg-gradient-to-br from-[#faf7f2] to-[#f5f0e6] rounded-2xl shadow-2xl hover:shadow-[#d4b78f]/30 transition-all duration-500 hover:scale-[1.02] overflow-hidden">
         
          
          <div className="border-2 border-[#d4b78f] rounded-xl m-3 sm:m-4 lg:m-6 p-6 sm:p-8 lg:p-12 bg-white/30 backdrop-blur-sm">
            <div className="w-full flex flex-col items-center space-y-6 sm:space-y-8">
              
              <div className="flex flex-col items-center space-y-4 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/logo.png"
                    height={100}
                    width={100}
                    alt="Indian, western and nepalese cuisine"
                    className="drop-shadow-lg"
                  />
                </motion.div>
                
                <div className="space-y-2">
                  <h2 className="text-lg sm:text-xl md:text-xl text-[#8c6d46] italic font-light tracking-wide">
                    for the best memories
                  </h2>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#513c28] font-serif font-bold tracking-tight leading-tight">
                    A Cuisine Journey
                  </h1>
                </div>
              </div>

              <div className="w-full max-w-3xl">
                <div className="bg-gradient-to-r from-[#f0e9db] via-[#f5f0e6] to-[#f0e9db] rounded-lg shadow-inner border border-[#d4b78f]/30">
                  <p className="text-sm sm:text-base md:text-lg text-center text-[#513c28] font-medium leading-relaxed">
                    Rajdoot Indian, Western & Nepalese Cuisines – Authentic Flavors, Unforgettable Taste!
                  </p>
                </div>
              </div>

              <div className="py-2">
                <Image
                  src="/decoration.png"
                  height={80}
                  width={280}
                  alt="Indian, western and nepalese cuisine"
                  className="opacity-70 max-w-full h-auto"
                />
              </div>

              <div className="w-full max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                  
                  <div className="flex flex-col space-y-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-[#8c6d46] font-bold uppercase text-sm tracking-widest text-center md:text-left border-b-2 border-[#d4b78f] pb-2">
                      Opening Time
                    </h3>
                    <div className="space-y-2">
                      <p className="text-[#513c28] font-serif text-base sm:text-lg font-semibold">
                        9 AM to 12 PM
                      </p>
                      <div className="space-y-1.5 text-sm sm:text-base">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-[#8c6d46] rounded-full"></span>
                          <span className="text-[#776552]">
                            <strong>Breakfast:</strong> 9:00 AM - 11:00 AM
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-[#8c6d46] rounded-full"></span>
                          <span className="text-[#776552]">
                            <strong>Lunch:</strong> 11:00 AM - 4:00 PM
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-[#8c6d46] rounded-full"></span>
                          <span className="text-[#776552]">
                            <strong>Dinner:</strong> 4:00 PM - 12:00 PM
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-3 bg-white/50 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-[#8c6d46] font-bold uppercase text-sm tracking-widest text-center md:text-left border-b-2 border-[#d4b78f] pb-2">
                      Location
                    </h3>
                    <div>
                      <p className="text-[#513c28] font-serif text-sm sm:text-base leading-relaxed">
                        G/F, 1J WATER STREET, SAI YING PUN, HONG KONG
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-3 bg-white/50 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-[#8c6d46] font-bold uppercase text-sm tracking-widest text-center md:text-left border-b-2 border-[#d4b78f] pb-2">
                      Contact
                    </h3>
                    <div className="space-y-2">
                      <a 
                        href="tel:+85259567426" 
                        className="font-serif text-[#513c28] text-base sm:text-lg font-semibold hover:text-[#8c6d46] transition-colors block"
                      >
                        +852 59567426
                      </a>
                      <a 
                        href="tel:+85259567426" 
                        className="text-[#776552] text-sm sm:text-base hover:text-[#8c6d46] transition-colors block"
                      >
                        +852 59567426
                      </a>
                    </div>
                  </div>
                  
                </div>
              </div>

              {/* Order Online Section */}
              <div className="flex flex-col items-center space-y-4 pt-4 border-t-2 border-[#d4b78f]/30 w-full max-w-md">
                <h3 className="text-[#8c6d46] font-bold uppercase text-sm tracking-widest">
                  Order Online
                </h3>
                <div className="flex gap-4 sm:gap-6">
                  <Link 
                    href="https://url.mykeeta.com/xzhpRcQz" 
                    target="_blank"
                    className="transform hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-lg rounded-full"
                  >
                    <Image 
                      src="/keeta.webp" 
                      width={56} 
                      height={56} 
                      alt="Keeta" 
                      className="rounded-full object-cover border-2 border-[#d4b78f]" 
                    />
                  </Link>
                  <Link 
                    href="https://foodpanda.go.link/gVZxa" 
                    target="_blank"
                    className="transform hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-lg rounded-full"
                  >
                    <Image 
                      src="/foodpanda.png" 
                      width={56} 
                      height={56} 
                      alt="Foodpanda" 
                      className="rounded-full object-cover border-2 border-[#d4b78f]" 
                    />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroCard;