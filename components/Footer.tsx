"use client";

import { Facebook, Mail, MapPin, PhoneCall, Instagram } from "lucide-react";
import Image from "next/image";
import React from "react";
import Map from "./Map";

const Footer = () => {
  return (
    <footer className="w-full py-16">
      <Map />
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          <div className="flex flex-col space-y-2 text-center lg:text-left">
            <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider">
              Opening Time
            </h3>
            <div className="border-t border-[#d4b78f] pt-2 mt-1">
              <h4 className="font-serif text-[#513c28]">Opening Hours</h4>
              <p className="text-[#776552]">9 am to 12 pm</p>
              <p className="text-[#776552]">Breakfast 9:00 AM - 11:00 AM</p>
              <p className="text-[#776552]">Lunch 11:00 AM - 4:00 PM</p>
              <p className="text-[#776552]">Dinner 4:00 PM - 12:00 PM</p>
            </div>
          </div>
 
          {/* Contact Us */}
          <div className="flex flex-col space-y-2 text-center lg:text-left">
            <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider">
              Contact Us
            </h3>
            <div className="border-t border-[#d4b78f] pt-2 mt-1">
              <h4 className="font-serif text-[#513c28]">Opening Hours</h4>
              <a
                href="tel:+85259567426"
                className="text-[#776552] flex items-center justify-center lg:justify-start gap-x-2"
              >
                <PhoneCall className="h-5 w-5" />
                +852 59567426
              </a>
              <a
                href="mailto:rajdoot0909@gmail.com"
                className="text-[#776552] flex items-center justify-center lg:justify-start gap-x-2"
              >
                <Mail className="h-5 w-5" />
                rajdoot0909@gmail.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col space-y-2 text-center lg:text-left">
            <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider">
              Location
            </h3>
            <div className="border-t border-[#d4b78f] pt-2 mt-1">
              <h4 className="font-serif text-[#513c28]">G/F, 1J WATER STREET,</h4>
              <p className="text-[#776552]">SAI YING PUN, HONG KONG</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center border-gray-200 pt-16">
          <Image
            src="/logo.png"
            height={120}
            width={120}
            alt="Rajdoot Logo"
            className="mb-8"
          />


          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8">
            <a
              href="https://www.facebook.com/share/15xV7Y6atb/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="transition"
            >
              <Facebook className="h-7 w-7 text-gray-700 hover:fill-blue-700 transition-all duration-300" />
            </a>
            <a
              href="https://www.instagram.com/rajdootresturant?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw=="
              target="_blank"
              rel="noopener noreferrer"
              className="transition"
            >
              <Instagram className="h-7 w-7" />
            </a>
            <a
              href="https://www.google.com/maps/dir//Shop+1J+Hong+Kong..."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="h-7 w-7" />
            </a>
            <a
              href="https://www.tripadvisor.com/Restaurant_Review-g294217-d34089372..."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/tripadvisor.png"
                width={36}
                height={36}
                alt="Tripadvisor"
              />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm lg:text-base text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Rajdoot Indian, Western & Nepalese Cuisine + Bar. All Rights Reserved.
            <br />
            <span>
              With By{" "}
              <a
                target="_blank"
                href="https://squarelabs.com.np/"
                className="hover:text-green-700"
              >
                SquareLabs
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;