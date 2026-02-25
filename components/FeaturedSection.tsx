"use client"

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FeaturedSection = () => {
  return (
    <section className="mt-0">
      <div className="w-full">
        {/* Indian Cuisine */}
        <div className="flex flex-col lg:flex-row min-h-[500px] ">
          <div className="w-full lg:w-1/2">
            <Image
              src="/prochef.jpg"
              alt="Indian Cuisine western and nepalese cuisine"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-start p-8 md:p-12 xl:p-24 min-h-[50vh] lg:min-h-full bg-[#011659]">
            <div className="relative z-10 max-w-2xl">
              
              
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-light text-white leading-[1.1] mb-8"
              >
                Indian Cuisine; <br /> Rich, Bold & Aromatic
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="text-base md:text-lg lg:text-xl text-white leading-relaxed font-light mb-8"
              >
                Indian cuisine is known for the depth of flavor and the consideration taken in the use of spices. At Rajdoot, our Indian dishes are inspired by the traditional ingredients and slow-cooked methods that add warmth and individual aromas to our dishes. These special spices and rich gravies add bold flavors that complement the palate without dominating it.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white"
              >
                {[
                  "Use of spices such as turmeric, cumin, coriander, and cardamom",
                  "Slow-cooked curries and rich gravies",
                  "A balance of spicy, tangy, sweet, and savory flavors"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4b78f]  group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="font-light tracking-wide italic">{item}</span>
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>

        {/* Nepalese Cuisine */}
        <div className="flex flex-col-reverse lg:flex-row min-h-[600px]">
          <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-start p-8 md:p-12 xl:p-24 min-h-[50vh] lg:min-h-full bg-white">
            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-8">
                <motion.div 
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: "3rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="h-[1px] bg-[#d4b78f]"
                ></motion.div>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-[#8c6d46] text-xs tracking-[0.3em] uppercase font-medium"
                >
                  Nepalese Cuisine
                </motion.span>
              </div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-light text-[#011659] leading-[1.1] mb-8"
              >
                Nepalese Cuisine;<br />
                <span className=" font-serif text-[#d4b78f]">Simple, Wholesome & Comforting</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="text-base md:text-lg lg:text-xl text-[#011659] leading-relaxed font-light mb-8"
              >
                Nepalese cuisine is a reflection of the simplicity and wholesome nature of the Himalayan culture. Nepalese dishes are known for the natural flavors they provide, the minimal oil used in the recipes, and the comforting dishes they offer. Momos, dal bhat, and thukpa are some of the dishes that represent the heart and soul of Nepalese cuisine.          
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#011659]"
              >
                {[
                  "Minimal use of oil and artificial flavoring",
                  "Preference for steamed and grilled cooking methods",
                  "Influences from Tibetan and Indian culinary traditions"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 group">
                    <span className="w-1 h-1 rounded-full bg-[#d4b78f]  group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="font-light tracking-wide italic">{item}</span>
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src="/foodtable.jpg"
              alt="Nepalese Cuisine western and nepalese cuisine"
              width={1200}
              height={1600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row min-h-[600px]">
          <div className="w-full lg:w-1/2">
            <Image
              src="/foods/29.jpg"
              alt="Western Cuisine"
              width={1200}
              height={1600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-start p-8 md:p-12 xl:p-24 min-h-[50vh] lg:min-h-full bg-[#faf7f2]">
            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-8">
                <motion.div 
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: "3rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="h-[1px] bg-[#d4b78f]"
                ></motion.div>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-[#8c6d46] text-xs tracking-[0.3em] uppercase font-medium"
                >
                  Western Cuisine;
                </motion.span>
              </div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-light text-[#011659] leading-[1.1] mb-8  tracking-tighter"
              >
                Familiar & Comforting <br />
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="text-base md:text-lg lg:text-xl text-[#011659] leading-relaxed font-light mb-8"
              >
                Western cuisine brings familiarity, balance, and comfort to the table. 
                Known for its refined techniques and focus on presentation, it emphasizes quality ingredients and carefully executed cooking methods.
                <br/><br/>
                These dishes often appeal to diners who prefer mild yet flavorful options, making Western food an essential component of a diverse menu.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#011659]"
              >
                {[
                  "Grilled meats & seasonal vegetables",
                  "Cream-based & slow-simmered sauces",
                  "Oven-baked dishes prepared with care",
                  "Balanced seasoning & natural flavors"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 group">
                    <span className="w-1 h-1 rounded-full bg-[#d4b78f]  group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="font-light tracking-wide italic">{item}</span>
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;