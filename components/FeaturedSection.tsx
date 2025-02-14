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
              src="https://images.unsplash.com/photo-1620641606872-f9641b65adab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwY2hlZnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Professional chef"
              width={600}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-20 text-center">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/hero.jpg"
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="z-0"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            <div className="relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Tasty dish from our professional chefs
              </h1>
              <p className="text-lg md:text-xl mt-4 text-white">
                Enjoy the local food taste
              </p>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row h-screen">
          <div className="relative w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-20 text-center">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/hero.jpg"
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="z-0"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            <div className="relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Experience the taste of tradition
              </h1>
              <p className="text-lg md:text-xl mt-4 text-white">
                Enjoy delicious meals from top chefs
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-1/2 md:h-full">
            <Image
              src="https://images.unsplash.com/photo-1620641606872-f9641b65adab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwY2hlZnxlbnwwfHwwfHx8MA%3D%3D"
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
