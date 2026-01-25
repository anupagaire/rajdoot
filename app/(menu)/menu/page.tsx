"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const foods = Array.from({ length: 11 }, (_, i) => i + 1);

const Foods = () => {
  const [activeTab, setActiveTab] = useState("main");

  const tabs = [
    { id: "main", label: "Main Menu", time: "" },
    { id: "breakfast", label: "Breakfast", time: "9:00 AM to 11:00 AM" },
    { id: "lunch", label: "Lunch", time: "11:00 AM to 4:00 PM" },
    { id: "dinner", label: "Dinner", time: "4:00 PM to 12:00 PM" },
    { id: "drink", label: "Drink", time: "" },
  ];

  return (
    <div className="min-h-screen w-full font-light text-[#011659]">
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
                    A LA CARTE MENU
                  </h1>
                  <div className="w-20 h-1 bg-amber-500 mt-6 mb-4 rounded-full"></div>
                  
                </div>
              </div>
            </section>

      <section className="max-w-screen-xl w-full mx-auto p-4">
        <div className="max-w-4xl mx-auto mt-3">
          <div className="relative border-b border-gray-200">
            {/* Horizontal scroll indicators/fade for mobile */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none md:hidden"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none md:hidden"></div>
            
            <div className="flex items-center overflow-x-auto space-x-1 pb-4 scrollbar-hide md:pb-0 px-4">
              {tabs.map((tab) => (
                <div key={tab.id} className="relative group flex items-center px-2 py-6 shrink-0">
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex flex-col items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-t-xl transition-all duration-300 ease-in-out min-w-max
                    ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-white to-gray-50 text-[#011659] border-t border-r border-l border-gray-200 shadow-md"
                        : "text-gray-500 hover:text-[#011659] hover:bg-gray-100 hover:shadow-sm"
                    }`}
                  >
                    <span className="whitespace-nowrap tracking-wide">{tab.label}</span>
                    {tab.time && (
                      <span
                        className={`text-[10px] sm:text-xs mt-1 transition-colors duration-300 ${
                          activeTab === tab.id ? "text-gray-900 font-medium" : "text-gray-400"
                        }`}
                      >
                        {tab.time}
                      </span>
                    )}
                  </button>

                  {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#d4b78f] rounded-full"></div>
                )}
              </div>
              ))}
            </div>
          </div>

          <div className="mt-4">
            {activeTab === "main" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 lg:p-8">
                {foods.map((number) => (
                  <div key={number} className="flex justify-center">
                    <Image
                      src={`/menu/${number}.png`}
                      height={400}
                      width={400}
                      alt={`Menu item ${number}`}
                      className="object-contain w-full h-auto max-w-full"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            )}

            {activeTab === "breakfast" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 lg:p-8">
                <Image
                  src="/menu/breakfast/breakfast.jpg"
                  height={400}
                  width={400}
                  alt="Breakfast set"
                  className="object-contain w-full h-auto max-w-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}

            {activeTab === "lunch" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 lg:p-8">
                <Image
                  src="/menu/lunch/lunchset1.jpg"
                  height={400}
                  width={400}
                  alt="Lunch set"
                  className="object-contain w-full h-auto max-w-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}

            {activeTab === "dinner" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 lg:p-8">
                <Image
                  src="/menu/dinner/dinnerset1.jpg"
                  height={400}
                  width={400}
                  alt="Dinner set 1"
                  className="object-contain w-full h-auto max-w-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <Image
                  src="/menu/dinner/dinnerset2.jpg"
                  height={400}
                  width={400}
                  alt="Dinner set 2"
                  className="object-contain w-full h-auto max-w-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}
            {activeTab === "drink" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 lg:p-8">
                <Image
                  src="/menu/drinks/drinks.jpg"
                  height={400}
                  width={400}
                  alt="Drinks menu"
                  className="object-contain w-full h-auto max-w-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Foods;
