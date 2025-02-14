// Hero.jsx
import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <>
      <main className="relative min-h-[165vh] w-full mx-auto">
        <Navbar />
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/hero.jpg"
            fill
            priority
            className="object-cover fixed"
            alt="hero image"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative h-screen w-full max-w-screen-lg mx-auto flex flex-col justify-center items-center text-white px-4 py-32 gap-y-5">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold mb-4 text-center">
            Enjoy Delicious Nepali & Indian Foods
          </h1>
          <p className="text-base md:text-xl text-center max-w-2xl">
            A place where every plate of sushi becomes a real work of art that
            you can enjoy on your lips.
          </p>
          <div className="flex gap-x-5">
            <button className="px-6 py-4 border">View Menu</button>
            <button className="px-6 py-4 border">Book a seat</button>
          </div>
        </div>
        <HeroCard />
      </main>
    </>
  );
};

export default Hero;
