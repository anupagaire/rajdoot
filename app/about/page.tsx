import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

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

const About = () => {
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
          <h1 className="text-4xl font-bold mb-4">ABOUT OUR STORY</h1>
          <p className="text-lg italic">
            Experience the finest Indian & Nepali cuisine in Hong Kong
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-5 lg:py-10 px-4 relative overflow-hidden z-20">
        <img
          className="hidden lg:block absolute -right-60 -top-20 opacity-5 z-10"
          src="/decoration1.png"
          alt=""
        />
        <img
          className="hidden lg:block absolute -left-60 bottom-20 opacity-5 z-10"
          src="/decoration2.png"
          alt=""
        />

        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/place/2.jpg"
                fill
                className="object-cover rounded-lg"
                alt="Rajdoot restaurant interior"
              />
            </div>

            <div className="space-y-3">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                {" "}
                Welcome to Rajdoot
              </h1>
              <div className="bg-yellow-300 h-2 w-24"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nestled in the heart of G/F, 1J WATER STREET,SAI YING PUN, HONG
                KONG, Rajdoot brings you an authentic blend of Indian and
                Nepalese cuisine. Our restaurant is more than just a dining
                establishment – it&apos;s a culinary journey through the rich
                flavors of the Indian subcontinent.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our recipes are a perfect harmony of traditional Indian
                wilderness food and modern cooking techniques. Each dish is
                carefully prepared in its own juices, without any artificial
                additions, allowing the subtle flavors and aromas of our
                hand-selected spices to shine through.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center my-10 md:my-20">
            <div className="space-y-3">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-8 md:mt-0">
                Our Philosophy
              </h1>
              <div className="bg-yellow-300 h-2 w-24"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                At Rajdoot, we believe in creating individual masterpieces. Each
                dish is cooked on gentle heat, allowing the spices to blend
                perfectly and create their own unique character. We are
                committed to providing not just exceptional food, but also
                outstanding service to ensure your dining experience is
                memorable.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/place/1.jpg"
                fill
                className="object-cover rounded-lg"
                alt="Rajdoot restaurant interior"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-10 border border-[#d4b78f] rounded-lg duration-300"
              >
                <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={feature.image}
                    alt="features image"
                    className="h-32 w-auto object-contain"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h2>
                <p className="text-gray-600 text-center leading-relaxed">
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
