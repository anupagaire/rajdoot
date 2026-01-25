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
            >
              A Harmonious <br />
              <span className="italic font-serif text-[#d4b78f]">Blend of Flavors</span>
            </motion.h2>

            <div className="space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="text-lg md:text-xl text-[#011659]/80 leading-relaxed font-light"
              >
                In today&apos;s evolving food culture, diners seek more than just a meal — they look for an experience. 
                Indian, Western and Nepalese cuisine together create a harmonious blend of flavors that appeal to diverse tastes while maintaining cultural integrity. 
                This combination allows guests to explore multiple culinary traditions in a single, welcoming setting.              
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                className="pl-6 border-l border-[#d4b78f]"
              >
                <p className="text-base md:text-lg text-[#011659]/70 font-light italic leading-relaxed">
                  &ldquo;Our approach to multi-cuisine dining focuses on preserving authenticity while ensuring comfort and familiarity. 
                  Whether you enjoy bold spices, subtle flavors, or classic comfort food, our offerings are designed to satisfy every palate.&rdquo;
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