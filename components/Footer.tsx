import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  PhoneCall,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-16">
      <div className="mt-12 w-full max-w-screen-xl mx-auto my-20 rounded-lg h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.943919616855!2d114.13578962847058!3d22.286485698725762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403ff891ad130e3%3A0x85d6a2c67c48bd30!2sRajdoot%20Indian%20%26%20Nepalese%20Restaurant!5e0!3m2!1sen!2snp!4v1739695401427!5m2!1sen!2snp"
          className="w-full h-full border-none px-5"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="max-w-screen-lg mx-auto px-6">
        {/* Contact & Info Section */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-8 mt-4 text-center md:text-left">
          <div className="flex flex-col space-y-1">
            <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider">
              Opening Time
            </h3>
            <div className="border-t border-[#d4b78f] pt-2 mt-1">
              <h4 className="font-serif text-[#513c28]">Opening Hours</h4>
              <p className="text-[#776552]">
                11:00 am- 5:00 pm <br /> 6:00 pm - 11:00 pm
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider">
              Contact us
            </h3>
            <div className="border-t border-[#d4b78f] pt-2 mt-1">
              <h4 className="font-serif text-[#513c28]">Opening Hours</h4>
              {/* <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-4 sm:justify-start justify-center items-center"> */}
              <a
                href="tel:+852 2803 0095"
                className="text-[#776552] flex items-center justify-center lg:justify-normal gap-x-2"
              >
                <PhoneCall className="h-5 w-5" />
                +852 2803 0095
              </a>
              <a
                href="mailto:info@rajdoot.com.hk"
                className="text-[#776552] flex items-center justify-center lg:justify-normal gap-x-2"
              >
                <Mail className="h-5 w-5" />
                info@rajdoot.com.hk
              </a>
              {/* </div> */}
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <h3 className="text-[#8c6d46] font-semibold uppercase text-sm tracking-wider">
              Location
            </h3>
            <div className="border-t border-[#d4b78f] pt-2 mt-1">
              <h4 className="font-serif text-[#513c28]">G/F,Rear Portion,</h4>
              <p className="text-[#776552]">
                425Q Queen's Road West Shek Tong Tsui, Hong Kong
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

        {/* Logo & Social Media */}
        <div className="flex flex-col items-center border-gray-200 pt-16">
          <Image
            src="/rajdootlogo.png"
            height={120}
            width={120}
            alt="Rajdoot Logo"
            className="mb-8 filter grayscale invert"
          />

          {/* Social Media Links */}
          <div className="flex gap-8 mb-8">
            <a
              href="https://www.facebook.com/rajdoothk/"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition"
            >
              <Facebook className="h-7 w-7" />
            </a>
            <a
              href="https://www.instagram.com/rajdoothk/"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition"
            >
              <Instagram className="h-7 w-7" />
            </a>
            <a
              href="https://www.google.com/maps/place//@22.2860534,114.1361719,20z?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="h-7 w-7" />
            </a>
            <a
              href="https://en.tripadvisor.com.hk/Restaurant_Review-g294217-d21229105-Reviews-Rajdoot_Restaurant_Bar-Hong_Kong.html"
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
            <a
              href="https://www.openrice.com/en/hongkong/r-rajdoot-indian-nepalese-restaurant-western-district-indian-curry-r679321"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/openrice.png"
                width={36}
                height={36}
                alt="OpenRice"
                className="rounded-full"
              />
            </a>
          </div>

          {/* Copyright Notice */}
          <p className="text-sm lg:text-base text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Rajdoot Indian & Nepali Cuisine +
            Bar. All Rights Reserved.
            <br />
            <span>
              By{" "}
              <a
                target="_blank"
                href="https://squarelabs.com.np/"
                className="hover:text-green-700 italic"
              >
                SquareLabs Pvt.Ltd
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
