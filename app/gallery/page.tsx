import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const foodItems = [
  { id: 1, src: "/foods/1.png", title: "Chicken Tikka BBQ" },
  { id: 2, src: "/foods/2.png", title: "Chicken Chilly" },
  { id: 3, src: "/foods/3.png", title: "Butter Chicken" },
  { id: 4, src: "/foods/4.png", title: "Vegetable Samosa" },
  { id: 5, src: "/foods/5.png", title: "Chicken Momo" },
  { id: 6, src: "/foods/6.png", title: "Pani Puri" },
  { id: 7, src: "/foods/7.png", title: "Paneer Makhani" },
  { id: 8, src: "/foods/8.png", title: "Margherita Pizza" },
  { id: 9, src: "/foods/9.png", title: "Cheese Naan" },
  { id: 10, src: "/foods/10.png", title: "Grilled Chicken Burger with Chips" },
  { id: 11, src: "/foods/11.png", title: "Spaghetti with Tomato Sauce" },
  { id: 12, src: "/foods/12.png", title: "Lamb Curry" },
  { id: 13, src: "/foods/13.jpg", title: "Yellow Rice" },
  { id: 14, src: "/foods/14.jpg", title: "Pulavf" },
  { id: 15, src: "/foods/15.jpg", title: "Ice Cream" },
  { id: 16, src: "/foods/16.jpg", title: "Rasvari" },
  { id: 17, src: "/foods/17.jpg", title: "White Rice with Green Curry" },
  { id: 18, src: "/foods/18.jpg", title: "Nepali Khana Set" },
  { id: 19, src: "/foods/19.jpg", title: "Grlled Chicken Breast" },
  { id: 20, src: "/foods/20.jpg", title: "French Fries" },
  { id: 21, src: "/foods/21.png", title: "Chow Mein" },
  { id: 22, src: "/foods/22.png", title: "Chicken Drumstick" },
  { id: 23, src: "/foods/23.png", title: "Veg Roll" },
  { id: 24, src: "/foods/24.jpg", title: "Panner Tika" },
  { id: 25, src: "/foods/25.jpg", title: "Chana Masala" },
  { id: 26, src: "/foods/26.jpg", title: "Shrimp Curry" },
  { id: 27, src: "/foods/27.jpg", title: "Lamb Curry" },
  { id: 28, src: "/foods/28.jpg", title: "Shrimp Butter Masala" },
  { id: 29, src: "/foods/29.jpg", title: "Fish" },
  { id: 30, src: "/foods/30.jpg", title: "Beef Masala" },
  { id: 31, src: "/foods/31.jpg", title: "Chicken Curry" },
  { id: 32, src: "/foods/32.jpg", title: "Lal Mohan" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen w-full bg-[#fcfbf9]">
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
              Our Gallery
            </h1>
            <div className="w-20 h-1 bg-amber-500 mt-6 mb-4 rounded-full"></div>
            <p className="text-gray-200 text-lg md:text-xl italic font-light tracking-wide">
              &quot;A visual journey through our culinary heritage&quot;
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-[1600px] mx-auto px-4 py-8 md:py-12 lg:px-8">
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {foodItems.map((item) => (
            <div
              key={item.id}
              className="group break-inside-avoid relative overflow-hidden rounded-2xl bg-black border border-[#d4b78f]/30 shadow-lg cursor-pointer"
            >
              <div className="relative w-full">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-4 text-center space-y-3"
                >
                  <h3 className="text-xl font-serif text-white tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
