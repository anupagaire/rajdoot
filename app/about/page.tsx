"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const features = [
  {
    image: "/features1.png",
    title: "Menu for every taste",
    description:
      "Discover our diverse menu featuring both classic favorites and innovative culinary creations.",
  },
  {
    image: "/features2.png",
    title: "Fresh Ingredients",
    description:
      "We source the finest local ingredients to ensure every dish exceeds your expectations.",
  },
  {
    image: "/features3.png",
    title: "Expert Chefs",
    description:
      "Our skilled chefs bring years of experience to create memorable dining experiences.",
  },
];

const vibes = Array.from({ length: 11 }, (_, i) => i + 1);

const responsiveVibes = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1536 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1536, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const About = () => {
  return (
    <div className="min-h-screen w-full bg-[#faf7f2] text-[#011659] font-light">
      <Navbar />

      <section className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/hero.jpg"
                  fill
                  priority
                  className="object-cover"
                  alt="Rajdoot restaurant ambiance"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-16">
                <div className="flex flex-col items-center">
                  <h1 className="text-4xl md:text-6xl font-serif text-white tracking-[0.1em] drop-shadow-xl uppercase">
                    About our Story
                  </h1>
                  <div className="w-20 h-1 bg-amber-500 mt-6 mb-4 rounded-full"></div>
                  <p className="text-gray-200 text-lg md:text-xl italic font-light tracking-wide">
                    &quot;Experience the finest Indian, Western & Nepali Cuisine in Hong Kong.&quot;
                  </p>
                </div>
              </div>
            </section>

      <section className="py-8 md:py-12 bg-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative h-[400px] md:h-[600px] w-full z-10 rounded-tl-[2.5rem] rounded-br-[2.5rem] overflow-hidden shadow-2xl shadow-[#8c6d46]/10 border border-[#e5d3b8]/20">
                <Image
                  src="/place/1.jpg"
                  fill
                  className="object-cover"
                  alt="Rajdoot Interior"
                />
              </div>
             
            </motion.div>

            <div className="order-1 lg:order-2 space-y-10 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-6"
              >                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#011659] leading-[1.15]">
                  Welcome to <br />
                  <span className=" font-serif text-[#d4b78f]">Rajdoot</span>
                </h2>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="space-y-6 text-lg text-[#011659]/80 font-light leading-relaxed"
              >
                <p>
                  In today&apos;s evolving food culture, diners seek more than just a meal — they look for an experience. 
                  Indian, Western and Nepalese cuisine together create a harmonious blend of flavors that appeal to diverse tastes while maintaining cultural integrity. 
                  This combination allows guests to explore multiple culinary traditions in a single, welcoming setting.                </p>
                <p className=" text-[#011659]/70 ">
                  Our approach to multi-cuisine dining focuses on preserving authenticity while ensuring comfort and familiarity. 
                  Whether you enjoy bold spices, subtle flavors, or classic comfort food, our offerings are designed to satisfy every palate.                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-black px-6 py-8 md:py-12 lg:px-20 relative">
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-10 z-10">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-4"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#011659] leading-[1.15]">
                  Our Commitment<br /> 
                  <span className=" font-serif text-[#d4b78f]">to Authenticity</span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-[#011659]/80 font-light leading-relaxed"
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
                      <span className="text-lg font-light text-[#011659]/70">
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
                className="pt-8 text-sm tracking-widest uppercase font-extralight text-[#011659]/40"
              >
                This commitment ensures that Indian, Western and Nepalese cuisine is presented in its truest and most respectful form.
              </motion.p>
          </div>

            <div className="lg:col-span-1 hidden lg:block"></div>
            <div className="lg:col-span-6 relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
                 <div className="relative h-full w-full p-4 flex flex-col items-center justify-center gap-3 ">
                  <div className="flex gap-3 w-full h-1/2 items-end">
                    <div className="relative overflow-hidden h-full w-[55%] bg-gray-400 rounded-tr-[100px] rounded-bl-[100px]">
                      <Image 
                        src="/place/7.jpg"
                        fill
                        className="object-cover"
                        alt="Rajdoot Kitchen Area"
                      />
                    </div>
                    <div className="relative overflow-hidden h-2/3 w-[45%] bg-gray-400 rounded-tl-[50px] rounded-br-[50px]">
                      <Image 
                        src="/place/11.jpg"
                        fill
                        className="object-cover"
                        alt="Rajdoot sitting area"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3 w-full h-1/2 items-start">
                    <div className="relative overflow-hidden h-2/3 w-[45%] bg-gray-400 rounded-tl-[50px] rounded-br-[50px]">
                      <Image 
                        src="/place/10.jpg"
                        fill
                        className="object-cover"
                        alt="Rajdoot Dining area"
                      />
                    </div>
                    <div className="relative overflow-hidden h-full w-[55%] bg-gray-400 rounded-tr-[100px] rounded-bl-[100px]">
                      <Image 
                        src="/place/8.jpg"
                        fill
                        className="object-cover"
                        alt="Rajdoot Bar area"
                      />
                    </div>
                  </div>
                 </div>  
            </div>
        </div>
      </section>

      

      <section className="py-8 md:py-12 bg-[#faf7f2]">
        <div className="max-w-screen-2xl w-full mx-auto px-6 md:px-12">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-light text-[#011659]">
                Vibes at <span className=" font-serif text-[#d4b78f]">Rajdoot</span>
              </h2> 
          </div>
            
            <div className="w-full">
              <Carousel
                responsive={responsiveVibes}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="transform 500ms ease-in-out"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="px-2"
              >
                {vibes.map((number, index) => (
                  <div 
                    key={index}
                    className="relative overflow-hidden rounded-2xl group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500 h-[400px] w-full"
                  >
                    <Image 
                      src={`/place/${number}.jpg`} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      alt="Rajdoot Ambience" 
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
                  </div>
                ))}
              </Carousel>
            </div>
        </div>
      </section>

       <section className="w-full py-8 md:py-12 relative overflow-hidden bg-[#faf7f2]">
            <div className="hidden lg:block absolute -right-20 -top-5 opacity-10">
              <Image
                src="/decoration2.png"
                alt=""
                width={400}
                height={400}
              />
            </div>
      
            <div className="hidden lg:block absolute -left-28 -bottom-16 opacity-10">
              <Image
                src="/decoration1.png"
                alt=""
                width={400}
                height={400}
              />
            </div>
      
            <div className="w-full max-w-screen-xl mx-auto px-4">      
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group flex flex-col items-center p-10 rounded-xl bg-white/10 backdrop-blur border border-[#e5d3b8] shadow-md hover:shadow-xl hover:translate-y-[-4px] hover:bg-white/20 transition-all duration-300"
                  >
                   <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"> 
                      <div className="w-28 h-28 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#f5e9d6] to-white shadow-inner">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          width={80}
                          height={80} 
                          className="object-contain"
                        />
                      </div>
                    </div>
      
                    <h2 className="text-xl md:text-2xl font-medium text-[#d4b78f] mb-3 tracking-wide">
                      {feature.title}
                    </h2>
                    <p className="text-gray-500 text-center leading-relaxed max-w-sm">
                      {feature.description}
                    </p>
      
                  </div>
                ))}
              </div>
            </div>
          </section>
    </div>
  );
};

export default About;
