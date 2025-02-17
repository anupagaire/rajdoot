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
          We'd love to hear from you. Visit us for an unforgettable dining experience or reach out through any of our contact channels.
          </p>
        </div>
      </section>

      {/* section */}

      <section className="w-full max-w-screen-xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Opening Time */}
        <div className="group bg-white p-8 border border-[#d4b78f] hover:border-[#8c6d46] transition-colors duration-300">
          <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider mb-4">
            Opening Time
          </h3>
          <div className="border-t border-[#d4b78f] pt-4">
            <h4 className="font-serif text-[#513c28] text-lg mb-2">Opening Hours</h4>
            <div className="text-[#776552] space-y-2">
              <div className="flex justify-between">
                <span>Lunch</span>
                <span>11:00 am - 5:00 pm</span>
              </div>
              <div className="flex justify-between">
                <span>Dinner</span>
                <span>6:00 pm - 11:00 pm</span>
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
            <h4 className="font-serif text-[#513c28] text-lg mb-4">Get in Touch</h4>
            <div className="space-y-4">
              <a
                href="tel:+852 2803 0095"
                className="text-[#776552] flex items-center gap-x-3 hover:text-[#8c6d46] transition-colors duration-300"
              >
                <PhoneCall className="h-4 w-4" />
                <span>+852 2803 0095</span>
              </a>
              <a
                href="mailto:info@rajdoot.com.hk"
                className="text-[#776552] flex items-center gap-x-3 hover:text-[#8c6d46] transition-colors duration-300"
              >
                <Mail className="h-4 w-4" />
                <span>info@rajdoot.com.hk</span>
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
            <h4 className="font-serif text-[#513c28] text-lg mb-2">Restaurant Address</h4>
            <div className="text-[#776552] space-y-1">
              <p className="font-medium">G/F, Rear Portion,</p>
              <p>425Q Queen's Road West</p>
              <p>Shek Tong Tsui, Hong Kong</p>
            </div>
          </div>
        </div>

        {/* Booking Request */}
        <div className="group bg-white p-8 border border-[#d4b78f] hover:border-[#8c6d46] transition-colors duration-300">
          <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider mb-4">
            Booking Request
          </h3>
          <div className="border-t border-[#d4b78f] pt-4">
            <h4 className="font-serif text-[#513c28] text-lg mb-2">Reservations</h4>
            <div className="text-[#776552] space-y-2">
              <p>For table reservations:</p>
              <p className="font-medium">+852 2803 0095</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 w-full h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.943919616855!2d114.13578962847058!3d22.286485698725762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403ff891ad130e3%3A0x85d6a2c67c48bd30!2sRajdoot%20Indian%20%26%20Nepalese%20Restaurant!5e0!3m2!1sen!2snp!4v1739695401427!5m2!1sen!2snp"
          className="w-full h-full border-none"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
    </div>
  );
};

export default Contact;
