import Navbar from "@/components/Navbar";
import { Mail, PhoneCall, Clock, MapPin, Coffee } from "lucide-react";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen w-full">
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
              Contact Us
            </h1>
            <div className="w-20 h-1 bg-amber-500 mt-6 mb-4 rounded-full"></div>
            <p className="text-gray-200 text-lg md:text-xl italic font-light tracking-wide">
              We&apos;d love to hear from you. Visit us for an unforgettable dining experience or <br /> 
              reach out through any of our contact channels. 
            </p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-screen-xl mx-auto px-4 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Opening Time */}
          <div className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-xl 
            border border-[#d4b78f]/40 shadow-lg hover:shadow-2xl hover:-translate-y-2 
            transition-all duration-500 ease-out p-8">

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
              bg-gradient-to-br from-[#d4b78f]/10 to-transparent transition-opacity" />

            <div className="relative flex items-center gap-x-3 mb-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full 
                bg-gradient-to-br from-[#d4b78f] to-[#8c6d46] text-white shadow-lg">
                <Clock className="h-5 w-5" />
              </span>
              <h3 className="text-[#d4b78f] font-medium uppercase text-sm tracking-widest">
                Opening Time
              </h3>
            </div>

            <div className="relative border-t border-[#d4b78f]/40 pt-5 space-y-4">
              <h4 className="font-serif italic text-[#011659] text-lg">Opening Hours</h4>
              <div className="text-gray-600 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">9 AM to 12 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Breakfast</span>
                  <span>9:00 AM - 11:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Lunch</span>
                  <span>11:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Dinner</span>
                  <span>4:00 PM - 12:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-xl 
            border border-[#d4b78f]/40 shadow-lg hover:shadow-2xl hover:-translate-y-2 
            transition-all duration-500 ease-out p-8">

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
              bg-gradient-to-br from-[#d4b78f]/10 to-transparent transition-opacity" />

            <div className="relative flex items-center gap-x-3 mb-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full 
                bg-gradient-to-br from-[#d4b78f] to-[#8c6d46] text-white shadow-lg">
                <PhoneCall className="h-5 w-5" />
              </span>
              <h3 className="text-[#d4b78f] font-medium uppercase text-sm tracking-widest">
                Contact Us
              </h3>
            </div>

            <div className="relative border-t border-[#d4b78f]/40 pt-5 space-y-4">
              <h4 className="font-serif italic text-[#011659] text-lg">Get in Touch</h4>

              <div className="space-y-4 text-sm">
                <a
                  href="tel:+85259567426"
                  className="flex items-center gap-x-3 text-gray-600 hover:text-[#8c6d46] transition-colors"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full 
                    bg-[#d4b78f]/20 text-[#8c6d46]">
                    <PhoneCall className="h-4 w-4" />
                  </span>
                  <span className="font-medium">+852 59567426</span>
                </a>

                <a
                  href="mailto:rajdoot0909@gmail.com"
                  className="flex items-center gap-x-3 text-gray-600 hover:text-[#8c6d46] transition-colors"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full 
                    bg-[#d4b78f]/20 text-[#8c6d46]">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="font-medium">rajdoot0909@gmail.com</span> 
                </a>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-xl 
            border border-[#d4b78f]/40 shadow-lg hover:shadow-2xl hover:-translate-y-2 
            transition-all duration-500 ease-out p-8">

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
              bg-gradient-to-br from-[#d4b78f]/10 to-transparent transition-opacity" />

            <div className="relative flex items-center gap-x-3 mb-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full 
                bg-gradient-to-br from-[#d4b78f] to-[#8c6d46] text-white shadow-lg">
                <MapPin className="h-5 w-5" />
              </span>
              <h3 className="text-[#d4b78f] font-medium uppercase text-sm tracking-widest">
                Location
              </h3>
            </div>

            <div className="relative border-t border-[#d4b78f]/40 pt-5 space-y-3">
              <h4 className="font-serif italic text-[#011659] text-lg">Restaurant Address</h4>
              <div className="text-gray-600 text-sm space-y-1">
                <p className="font-medium">G/F, 1J WATER STREET</p>
                <p>SAI YING PUN, HONG KONG</p>
              </div>
            </div>
          </div>

          {/* Booking Request */}
          <div className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-xl 
            border border-[#d4b78f]/40 shadow-lg hover:shadow-2xl hover:-translate-y-2 
            transition-all duration-500 ease-out p-8">

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
              bg-gradient-to-br from-[#d4b78f]/10 to-transparent transition-opacity" />

            <div className="relative flex items-center gap-x-3 mb-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full 
                bg-gradient-to-br from-[#d4b78f] to-[#8c6d46] text-white shadow-lg">
                <Coffee className="h-5 w-5" />
              </span>
              <h3 className="text-[#d4b78f] font-medium uppercase text-sm tracking-widest">
                Booking Request
              </h3>
            </div>

            <div className="relative border-t border-[#d4b78f]/40 pt-5 space-y-3">
              <h4 className="font-serif italic text-[#011659] text-lg">Reservations</h4>
              <div className="text-[#776552] text-sm space-y-2">
                <p>For table reservations:</p>
                <a
                  href="tel:+852 2803 0095"
                  className="hover:text-[#8c6d46] transition-colors font-medium"
                >
                  +852 59567426
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
