import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const Drinks = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[30vh] w-full">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/hero.jpg"
            fill
            priority
            className="object-cover"
            alt="Rajdoot restaurant ambiance"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative mx-auto max-w-screen-lg w-full min-h-[40vh] md:min-h-[50vh] flex flex-col justify-center items-center text-white text-center px-4 pt-10">
          <h1 className="text-4xl font-bold mb-4">DRINKS MENU</h1>
          {/* <p className="text-lg italic">
            Experience the finest Indian & Nepali cuisine in Hong Kong
          </p> */}
        </div>
      </section>

      <section className="max-w-screen-xl w-full mx-auto p-4">
        <div className="flex justify-center items-center">
        <Image src="/drinks/1.png" height={600} width={600} alt="menu item" />

        </div>
      </section>
    </div>
  );
};

export default Drinks;
