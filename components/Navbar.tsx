"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full bg-transparent absolute top-0 z-10 h-32 px-6 md:px-0">
      <div className="w-full max-w-screen-sm h-full mx-auto">
        <div className="w-full flex justify-between items-center h-full text-white">
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-x-10 text-xl">
            <li>
              <Link
                href="/"
                className={`${pathname == "/" ? "text-[#d4b78f]" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className={`${pathname == "/menu" ? "text-[#d4b78f]" : ""}`}
              >
                Menu
              </Link>
            </li>
          </ul>

          {/* Logo */}
          <a href="/">
            <Image
              src="/rajdootlogo.png"
              height={150}
              width={150}
              alt="Rajdoot Logo"
            />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-x-10 text-xl">
            <li>
              <Link
                href="/about"
                className={`${pathname == "/about" ? "text-[#d4b78f]" : ""}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className={`${pathname == "/gallery" ? "text-[#d4b78f]" : ""}`}
              >
                Gallery
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-8 w-8" /> : <Menu />}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed z-40 top-0 right-0 h-full w-64 bg-[#faf7f2] text-black p-6 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end">
            <X onClick={() => setIsOpen(false)} />
          </div>
          <ul className="flex flex-col gap-y-4 text-2xl mt-6">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`${pathname == "/" ? "text-[#d4b78f]" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                onClick={() => setIsOpen(false)}
                className={`${pathname == "/menu" ? "text-[#d4b78f]" : ""}`}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className={`${pathname == "/about" ? "text-[#d4b78f]" : ""}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={`${pathname == "/contact" ? "text-[#d4b78f]" : ""}`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                onClick={() => setIsOpen(false)}
                className={`${pathname == "/gallery" ? "text-[#d4b78f]" : ""}`}
              >
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
