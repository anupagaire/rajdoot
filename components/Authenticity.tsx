"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Authenticity = () => {
  return (
    <section className="py-8 md:py-12 bg-white text-[#011659] relative overflow-hidden">

      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full h-[80vh] lg:w-1/2 aspect-square p-4">
            <div className="flex h-full gap-6 ">
              <div className="flex flex-col gap-6 w-1/2 translate-y-[10%]">
                <div className="bg-gray-200 w-full h-[45%] rounded-3xl relative overflow-hidden">
                  <Image src="/place/7.jpg" alt="Indian, western and nepalese cuisine" fill className="object-cover" />
                </div>
                <div className="bg-gray-200 w-full h-[45%] rounded-3xl relative overflow-hidden">
                  <Image src="/RiceMeat.jpg" alt="Indian, western and nepalese cuisine" fill className="object-cover" />
                </div>
              </div>

              <div className="flex flex-col gap-6 w-1/2 -translate-y-[10%]">
                <div className="bg-gray-200 w-full h-[45%] rounded-3xl relative overflow-hidden">
                  <Image src="/MOMO.jpg" alt="Indian, western and nepalese cuisine" fill className="object-cover" />
                </div>
                <div className="bg-gray-200 w-full h-[45%] rounded-3xl relative overflow-hidden">
                  <Image src="/place/11.jpg" alt="Indian, western and nepalese cuisine" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-4 z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-4"
            >
              <h2 className="text-[#011659] text-4xl md:text-5xl font-serif leading-tight">
                Our Commitment<br /> to Authenticity
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-[#011659] font-light leading-relaxed"
            >
              
              Authenticity is the foundation of our kitchen. Our chefs respect traditional recipes while carefully 
              adapting them to modern expectations without losing their original essence. Every dish reflects cultural 
              respect, craftsmanship, and attention to detail.            
            
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 pt-6"
            >
              <h3 className="text-[#011659] text-xl font-medium italic">
                How We Maintain Authentic Taste
              </h3>
              <div className="grid grid-cols-1 gap-4 ">
                {[
                  "Traditional cooking techniques",
                  "Fresh, high-quality ingredients",
                  "Skilled chefs with cultural and culinary expertise",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-[#d4b78f] group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-lg font-light text-[#011659]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="pt-8 text-sm tracking-widest uppercase font-extralight text-[#011659]"
            >
              This commitment ensures that Indian, Western and Nepalese cuisine is presented in its truest and most respectful form.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authenticity;
