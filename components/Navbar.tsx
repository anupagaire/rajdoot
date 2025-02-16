"use client"

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent absolute top-0 z-10 h-32 px-6 md:px-0">
      <div className="w-full max-w-screen-sm h-full mx-auto">
        <div className="w-full flex justify-between items-center h-full text-white">
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-x-10 text-xl">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/menu">Menu</Link>
            </li>
          </ul>
          
          {/* Logo */}
          <a href="/">
            <Image src="/rajdootlogo.png" height={150} width={150} alt="Rajdoot Logo" />
          </a>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-x-10 text-xl">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-[#faf7f2] text-black p-6 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex justify-end">
            <X onClick={() => setIsOpen(false)} />
          </div>
          <ul className="flex flex-col gap-y-4 text-2xl mt-6">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
