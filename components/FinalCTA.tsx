"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const FinalCTA = () => {
  return (
    <section className="relative py-8 md:py-12 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <Image src="/decoration2.png" alt="Indian, western and nepalese cuisine" fill className="object-contain" />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#011659] leading-[1.2]"
          >
            Experience Authentic <br />
            <span className="italic font-serif text-[#d4b78f]">Flavors Today</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="max-w-3xl mx-auto text-base md:text-lg text-[#011659]/90 leading-relaxed font-light"
          >
            Your destination for authentic multi-cuisine dining begins here. Experience flavors that connect cultures, traditions, and people through carefully prepared dishes and warm hospitality. Book your table today and enjoy Indian, Western and Nepalese cuisine crafted with care and passion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-4"
          >
            <Link href="/contact">
              <button className="px-10 py-4 bg-[#d4b78f] text-[#011659] hover:bg-[#011659] hover:text-white transition-all duration-300 font-bold text-base uppercase tracking-[0.2em] shadow-xl rounded-full">
                Book Your Table Today
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
