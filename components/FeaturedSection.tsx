import React from "react";
import Image from "next/image";

const FeaturedSection = () => {
  return (
    <section className="min-h-screen">
      <div className="min-h-screen w-full">
        {/* First Section */}
        <div className="flex flex-col-reverse md:flex-row h-screen">
          <div className="w-full md:w-1/2 h-1/2 md:h-full">
            <Image
              src="/prochef.jpg"
              alt="Professional chef"
              width={600}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative w-full md:w-1/2 flex flex-col justify-center items-start p-8 md:p-20">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/reservation.jpg"
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="z-0"
              />
              <div className="absolute inset-0 bg-black/80"></div>
            </div>
            <div className="relative z-10 flex flex-col gap-y-3">
              <h1 className="text-3xl md:text-4xl font-bold text-yellow-300">
                (Reservation)
              </h1>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Events & Functions
              </h1>
              <div className="bg-yellow-300 h-2 w-24"></div>
              <p className="text-lg md:text-xl text-white">
                We accept reservations for Private parties, Group Events,
                Catering, Birthday Celebrations, Family Dining, or Group Dining
              </p>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row h-screen">
          <div className="relative w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-20">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/hero.jpg"
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="z-0"
              />
              <div className="absolute inset-0 bg-black/80"></div>
            </div>
            <div className="relative z-10 flex flex-col gap-y-3">
              <h1 className="text-3xl md:text-4xl font-bold text-yellow-300"></h1>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Authentic Indian & Nepali Cuisines
              </h1>
              <div className="bg-yellow-300 h-2 w-24"></div>
              <p className="text-lg md:text-xl text-white">
                Experience the rich flavors of Indian and Nepali cuisine,
                perfect for private parties, group events, catering, and family
                gatherings.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-1/2 md:h-full">
            <Image
              src="/foodtable.jpg"
              alt="Professional chef"
              width={600}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
