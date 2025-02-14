import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="relative min-h-[50vh] w-full">
      <Navbar />
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero.jpg"
          fill
          priority
          className="object-cover"
          alt="hero image"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative mx-auto max-w-screen-lg w-full min-h-[50vh] flex flex-col justify-center items-center text-white text-center px-4 pt-10">
        <h1 className="text-4xl font-bold">ABOUT OUR STORY</h1>
      </div>
    </section>
  );
};

export default About;
