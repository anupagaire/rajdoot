import Image from "next/image";
import React from "react";

const HeroCard = () => {
  return (
    <section className="w-full max-w-screen-lg mx-auto -mt-36 absolute left-1/2 transform -translate-x-1/2  z-20">
      {/* top right  */}
      <div className="bg-[#faf7f2] h-full w-full p-6 rounded-lg shadow-md relative">
        <div className="hidden h-24 w-24 md:h-32 md:w-32 bg-[#d4b78f] absolute rounded-full -top-10 -right-5 shadow-lg lg:flex flex-col justify-center items-center">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl text-white font-serif">
              <span className="text-sm md:text-base font-light italic block mb-1">
                Est.
              </span>
              1930
            </h2>
          </div>
        </div>

        <div className="border-2 border-[#d4b78f] h-full rounded-lg p-8">
          <div className="w-full flex justify-between items-center flex-col space-y-6">
            {/* Logo and Headline */}
            <div className="flex flex-col items-center space-y-2">
              <Image
                src="/rajdootlogo.png"
                height={100}
                width={100}
                alt="rajdoot logo"
                className="filter invert grayscale"
              />
              <div className="text-center">
                <h2 className="text-xl md:text-2xl text-[#8c6d46] italic font-light">
                  for the best memories
                </h2>
                <h1 className="text-2xl md:text-3xl lg:text-5xl text-[#513c28] font-serif mt-2">
                  A Cuisine Journey
                </h1>
              </div>
            </div>

            {/* Carousel Placeholder */}
            <div className="w-full">
              <div className="bg-[#f0e9db] p-4 rounded-md text-center text-[#513c28]">
                [Carousel goes here]
              </div>
            </div>

            {/* Decorative Element */}
            <div className="my-4">
              <Image
                src="/decoration.png"
                height={160}
                width={600}
                alt="decoration svg"
                className="opacity-80"
              />
            </div>

            {/* Restaurant Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 mt-4 text-center md:text-left">
              <div className="flex flex-col space-y-1">
                <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider">
                  Opening Time
                </h3>
                <div className="border-t border-[#d4b78f] pt-2 mt-1">
                  <h4 className="font-serif text-[#513c28]">
                    Monday to Sunday
                  </h4>
                  <p className="text-[#776552]">
                    11:00 am- 5:00 pm <br />
                    6:00 pm - 11:00 pm
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider">
                  Location
                </h3>
                <div className="border-t border-[#d4b78f] pt-2 mt-1">
                  <h4 className="font-serif text-[#513c28]">
                    G/F,Rear Portion,
                  </h4>
                  <p className="text-[#776552]">
                    425Q Queen's Road West Shek <br /> Tong Tsui, Hong Kong
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider">
                  Booking Request
                </h3>
                <div className="border-t border-[#d4b78f] pt-2 mt-1">
                  <p className="font-serif text-[#513c28]">+852 2803 0095</p>
                  <p className="text-[#776552]">+852 2803 0095</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCard;
