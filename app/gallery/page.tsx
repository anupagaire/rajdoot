import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const foodItems = [
  { id: 1, src: "/thali.jpg", title: "Spicy Curry" },
  { id: 2, src: "/thali.jpg", title: "Tandoori Chicken" },
  { id: 3, src: "/thali.jpg", title: "Paneer Tikka" },
  { id: 4, src: "/thali.jpg", title: "Biryani" },
  { id: 5, src: "/thali.jpg", title: "Naan & Butter Chicken" },
  { id: 6, src: "/thali.jpg", title: "Samosa Platter" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[20vh] lg:min-h-[50vh] w-full">
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
        <div className="relative mx-auto max-w-screen-lg w-full min-h-[50vh] flex flex-col justify-center items-center text-white text-center px-4 pt-10">
          <h1 className="text-4xl font-bold mb-4">Gallery</h1>
          <p className="text-lg italic">
            "A Taste of India & Nepal, Right in Hong Kong!"
          </p>
        </div>
      </section>

      <div className="p-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Food Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {foodItems.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={item.src}
                alt={item.title}
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-full"
              />
              <p className="text-center mt-2 font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
