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
    <div className="min-h-screen w-full">
      <Navbar />

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

      <section className="max-w-screen-xl w-full mx-auto p-4">
        <div className="max-w-4xl mx-auto mt-3">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto space-x-1 pb-4 scrollbar-hide md:pb-0">
              {tabs.map((tab) => (
                <div key={tab.id} className="relative group flex-shrink-0">
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex flex-col items-center px-4 py-3 text-sm font-medium rounded-t-lg transition-colors min-w-max ${
                      activeTab === tab.id
                        ? "bg-white text-black border-t border-r border-l border-gray-200 shadow-sm"
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span className="whitespace-nowrap">{tab.label}</span>
                    <span
                      className={`text-xs mt-1 ${
                        activeTab === tab.id ? "text-black" : "text-gray-400"
                      }`}
                    >
                      {tab.time}
                    </span>
                  </button>
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></div>
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