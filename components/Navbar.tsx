import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent absolute top-0 z-10 h-32 px-6 md:px-0">
      <div className="w-full max-w-screen-sm h-full mx-auto">
        <div className="w-full flex justify-between items-center h-full text-white">
          <ul className="hidden md:flex gap-x-10 text-xl">
            <li>Home</li>
            <li>Menu</li>
          </ul>
          <Image
            src="/rajdootlogo.png"
            height={150}
            width={150}
            alt="Rajdoot Logo"
          />
          <ul className="hidden md:flex gap-x-10 text-xl">
            <li>About</li>
            <li>Contact</li>
          </ul>
          {/* mobile menu */}
          <div className="md:hidden">
            <Menu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
