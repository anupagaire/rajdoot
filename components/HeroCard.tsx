import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroCard = () => {
  return (
    <section className="w-full max-w-screen-lg mx-auto -mt-36 absolute left-1/2 transform -translate-x-1/2 z-20">
      {/* top right  */}
      <div className="bg-[#faf7f2] h-full w-full p-6 rounded-lg shadow-md relative ">
        <div className="hidden h-24 w-24 md:h-32 md:w-32 bg-[#d4b78f] absolute rounded-full -top-10 -right-5 shadow-lg lg:flex flex-col justify-center items-center hover:border-2 border-green-500 hover:shadow-md hover:shadow-green-500">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl text-white font-serif">
              <span className="text-lg font-light italic block mb-1">
                <Link href="/contact">Contact Us</Link>
              </span>
            </h2>
          </div>
        </div>

        <div className="border-2 border-[#d4b78f] h-full rounded-lg p-8">
          <div className="w-full flex justify-between items-center flex-col space-y-6">
            {/* Logo and Headline */}
            <div className="flex flex-col items-center space-y-2">
              <Image
                src="/logo.png"
                height={100}
                width={100}
                alt="rajdoot logo"
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

            <div className="w-full">
              <div className="bg-[#f0e9db] p-4 rounded-md text-lg text-center text-[#513c28]">
                [Rajdoot Indian , Western & Nepalese Cuisines – Authentic
                Flavors, Unforgettable Taste!]
              </div>
            </div>

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
                  {/* <h4 className="font-serif text-[#513c28]">
                  </h4> */}
                  <p className="text-[#513c28] font-serif">11 AM to 11 PM</p>
                  <span className="font-medium text-[#776552]">
                    Lunch 11:00 AM - 4:00 PM
                  </span>
                  <br />
                  <span className="font-medium text-[#776552]">
                    Dinner 4:00 PM- 12:00 PM
                  </span>
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider">
                  Location
                </h3>
                <div className="border-t border-[#d4b78f] pt-2 mt-1">
                  {/* <h4 className="font-serif text-[#513c28]">
                    G/F,Rear Portion,
                  </h4> */}
                  <p className="text-[#513c28] font-serif">
                    G/F, 1J WATER STREET,SAI YING PUN,HONG KONG
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider">
                  Contact
                </h3>
                <div className="border-t border-[#d4b78f] pt-2 mt-1">
                  <a
                    href="tel:+852 59567426"
                    className="font-serif text-[#513c28]"
                  >
                    +852 59567426
                  </a>
                  <br />
                  <a href="tel:+852 59567426" className="text-[#776552]">
                    +852 59567426
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2 mt-4 text-center md:text-left">
  <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider">
    Order Online
  </h3>
  <div className="flex gap-4 mt-1">
    <Link href="https://url.mykeeta.com/xzhpRcQz" target="_blank">
      <Image src="/keeta.webp" width={60} height={40} alt="Keeta"   className="rounded-full object-cover"
 />
    </Link>
    <Link href="https://foodpanda.go.link/gVZxa" target="_blank">
      <Image src="/foodpanda.png" width={60} height={40} alt="Foodmandu"   className="rounded-full object-cover"
 />
    </Link>
  </div>
</div>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroCard;
