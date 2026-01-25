import React from "react";
import Image from "next/image";

const Features = () => {
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

  return (
    <section className="w-full py-10 lg:py-10 relative overflow-hidden bg-gradient-to-b from-white to-[#faf7f2]">
      <div className="hidden lg:block absolute -right-20 -top-5 opacity-10">
        <Image
          src="/decoration2.png"
          alt=""
          width={400}
          height={400}
        />
      </div>

      <div className="hidden lg:block absolute -left-28 -bottom-16 opacity-10">
        <Image
          src="/decoration1.png"
          alt=""
          width={400}
          height={400}
        />
      </div>

      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-6 mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Why people choose us?
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl text-center">
            Experience the perfect blend of taste, ambiance, and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-10 rounded-xl bg-white/10 backdrop-blur border border-[#e5d3b8] shadow-md hover:shadow-xl hover:translate-y-[-4px] hover:bg-white/20 transition-all duration-300"
            >
             <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"> 
                <div className="w-28 h-28 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#f5e9d6] to-white shadow-inner">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={80}
                    height={80} 
                    className="object-contain"
                  />
                </div>
              </div>

              <h2 className="text-xl md:text-2xl font-semibold text-[#8c6d46] mb-3 tracking-wide">
                {feature.title}
              </h2>
              <p className="text-gray-500 text-center leading-relaxed max-w-sm">
                {feature.description}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
