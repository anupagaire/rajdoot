"use client";

import React from "react";
import { motion } from "framer-motion";
import NextImage from "next/image";


const Occasion = () => {
  const occasions = [
    {
      title: "Family Dinners",
      image: "/place/7.jpg",
    },
    {
      title: "Business Meetings",
      image: "/place/10.jpg",
    },
    {
      title: "Celebrations",
      image: "/place/11.jpg",
    },
    {
      title: "Visitors & Tourists",
      image: "/place/4.jpg",
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-6 max-w-2xl text-left">            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-light text-[#011659] leading-[1.1]"
            >
              Perfect for <br />
              <span className=" font-serif text-[#d4b78f]">Every Occasion</span>
            </motion.h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md text-lg text-[#011659] font-light leading-relaxed mb-2"
          >
            From casual meals to special celebrations, our restaurant offers a welcoming atmosphere suitable for every occasion. The variety in our menu allows guests to enjoy familiar favorites or explore new flavors comfortably.          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {occasions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-[#ffffff] rounded-3xl overflow-hidden border border-[#e5d3b8]/20 hover:shadow-2xl hover:shadow-[#8c6d46]/10 transition-all duration-500"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <NextImage 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className=" font-serif text-black">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Occasion;
