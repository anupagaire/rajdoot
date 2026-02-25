"use client";

import React from "react";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <section className="py-24 bg-[#faf7f2] overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col items-start space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#011659] leading-[1.1]"
            >A True 
              <span className="italic font-serif text-[#d4b78f]">Multi-Cuisine Experience</span>
            </motion.h2>

            <div className="space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="text-lg md:text-xl text-[#011659]/80 leading-relaxed font-light"
              >
                Our menu is designed for guests who enjoy variety without compromise. From the combination of Indian, Western, and Nepalese cuisines, we offer something for every taste-whether one likes rich flavors, mild comfort food, or a well-balanced traditional meal.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                className="pl-6 border-l border-[#d4b78f]"
              >
                <p className="text-base md:text-lg text-[#011659]/70 font-light italic leading-relaxed">
                  &ldquo;This thoughtful combination of amenities makes Rajdoot an especially appropriate choice for families, groups, and overseas guests.&rdquo;
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;