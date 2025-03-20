import Navbar from "@/components/Navbar";
import { Mail, PhoneCall } from "lucide-react";
import Image from "next/image";
import React from "react";

const Contact = () => {
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
        <div className="relative mx-auto max-w-screen-sm w-full min-h-[50vh] flex flex-col justify-center items-center text-white text-center px-4 pt-10">
          <h1 className="text-4xl font-bold mb-4">CONTACT US</h1>
          <p className="text-lg italic">
            We&apos;d love to hear from you. Visit us for an unforgettable
            dining experience or reach out through any of our contact channels.
          </p>
        </div>
      </section>

      {/* section */}

      <section className="w-full max-w-screen-xl mx-auto px-4 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Opening Time */}
          <div className="group bg-white p-8 border border-[#d4b78f] hover:border-[#8c6d46] transition-colors duration-300">
            <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider mb-4">
              Opening Time
            </h3>
            <div className="border-t border-[#d4b78f] pt-4">
              <h4 className="font-serif text-[#513c28] text-lg mb-2">
                Opening Hours
              </h4>
              <div className="text-[#776552] space-y-2">
                <div className="flex justify-between">
                  <span>11 AM to 11 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Lunch</span>
                  <span>11:00 AM - 3:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Dinner</span>
                  <span>5:00 PM- 11:30 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="group bg-white p-8 border border-[#d4b78f] hover:border-[#8c6d46] transition-colors duration-300">
            <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider mb-4">
              Contact Us
            </h3>
            <div className="border-t border-[#d4b78f] pt-4">
              <h4 className="font-serif text-[#513c28] text-lg mb-4">
                Get in Touch
              </h4>
              <div className="space-y-4">
                <a
                  href="tel:+852 2803 0095"
                  className="text-[#776552] flex items-center gap-x-3 hover:text-[#8c6d46] transition-colors duration-300"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>+852 59567426</span>
                </a>
                <a
                  href="mailto:info@rajdoot.com.hk"
                  className="text-[#776552] flex items-center gap-x-3 hover:text-[#8c6d46] transition-colors duration-300"
                >
                  <Mail className="h-4 w-4" />
                  <span>rajdoot0909@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="group bg-white p-8 border border-[#d4b78f] hover:border-[#8c6d46] transition-colors duration-300">
            <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider mb-4">
              Location
            </h3>
            <div className="border-t border-[#d4b78f] pt-4">
              <h4 className="font-serif text-[#513c28] text-lg mb-2">
                Restaurant Address
              </h4>
              <div className="text-[#776552] space-y-1">
                <p className="font-medium">G/F, 1J WATER STREET</p>
                <p>SAI YING PUN,HONG KONG</p>
              </div>
            </div>
          </div>

          {/* Booking Request */}
          <div className="group bg-white p-8 border border-[#d4b78f] hover:border-[#8c6d46] transition-colors duration-300">
            <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider mb-4">
              Booking Request
            </h3>
            <div className="border-t border-[#d4b78f] pt-4">
              <h4 className="font-serif text-[#513c28] text-lg mb-2">
                Reservations
              </h4>
              <div className="text-[#776552] space-y-2">
                <p>For table reservations:</p>
                <a
                  href="tel:+852 2803 0095"
                  className="text-[#776552] flex items-center gap-x-3 hover:text-[#8c6d46] transition-colors duration-300"
                >
                  <p className="font-medium">+852 59567426</p>
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
