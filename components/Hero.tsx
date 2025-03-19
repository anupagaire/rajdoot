// Hero.jsx
import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import HeroCard from "./HeroCard";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <main className="relative min-h-[170vh] w-full mx-auto">
        <Navbar />
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/indianfood.jpg"
            fill
            priority
            className="hidden lg:block object-cover fixed"
            alt="hero image"
          />
          <Image
            src="/indianfood.jpg"
            fill
            priority
            className="lg:hidden fixed"
            alt="hero image"
            style={{ objectFit: "cover", objectPosition: "left" }}
          />

          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative h-screen w-full max-w-screen-lg mx-auto flex flex-col justify-center items-center text-white px-6 sm:px-8 py-24 gap-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-center leading-tight">
            Enjoy Delicious Nepali & Indian Foods
          </h1>
          <p className="text-lg sm:text-xl text-center max-w-2xl leading-relaxed italic">
            &quot;A place where every plate of dishes becomes a real work of art that
            you can enjoy on your lips.&quot;
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-4 text-lg border">
              <Link href="/menu">View Menu</Link>
            </button>
            <button className="px-6 py-4 text-lg border">
              <Link href="/contact">Book a seat</Link>
            </button>
          </div>
        </div>
        <HeroCard />
      </main>
    </>
  );
};

export default Hero;
