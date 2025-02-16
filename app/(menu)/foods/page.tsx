import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

// Create array of numbers from 1 to 11 for image mapping
const foods = Array.from({ length: 11 }, (_, i) => i + 1);

const Foods = () => {
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
          <h1 className="text-4xl font-bold mb-4">A LA CARTE MENU</h1>
        </div>
      </section>

      {/* Menu Images Grid */}
      <section className="max-w-screen-xl w-full mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 lg:p-8">
          {foods.map((number) => (
            <div key={number} className="flex justify-center">
              <Image
                src={`/foods/${number}.png`}
                height={500}
                width={500}
                alt={`Menu item ${number}`}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Foods;