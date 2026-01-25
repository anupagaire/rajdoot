"use client"

import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const NavTabAnim = `
  relative
  hover:text-[#d4b78f] 
  uppercase
  after:content-[''] after:absolute after:left-0 after:-bottom-1 
  after:w-0 after:h-[2px] after:bg-[#d4b78f] 
  after:transition-all after:duration-300 
  hover:after:w-full
`;


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <nav className="w-full bg-transparent absolute top-0 z-50 h-24 sm:h-32 px-6 lg:px-14">
        <div className="w-full max-w-screen-xl h-full mx-auto">
          <div className="w-full flex justify-between md:justify-center items-center h-full text-white md:gap-x-12 lg:gap-x-24">
            <ul className="hidden md:flex gap-x-10 text-xl font-medium">
              <li>
                <Link href="/contact" className={` ${NavTabAnim}${pathname == "/contact" ? "text-[#d4b78f]" : ""}`}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/menu" className={`${NavTabAnim}${pathname == "/menu" ? "text-[#d4b78f]" : ""}`}>
                  Menu
                </Link>
              </li>
            </ul>

            <Link href="/" className="relative h-20 w-20 sm:h-24 sm:w-24 lg:h-32 lg:w-32 flex-shrink-0">
              <Image src="/logo.png" fill className="object-contain" alt="Rajdoot Logo" priority />
            </Link>

            <ul className="hidden md:flex gap-x-10 text-xl font-medium">
              <li>
                <Link href="/about" className={`${NavTabAnim}${pathname == "/about" ? "text-[#d4b78f]" : ""}`}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/gallery" className={`${NavTabAnim}${pathname == "/gallery" ? "text-[#d4b78f]" : ""}`}>
                  Gallery
                </Link>
              </li>
            </ul>

            <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-8 w-8 text-[#d4b78f]" /> : <Menu className="h-8 w-8" />}
            </div>
          </div>
        </div>
      </nav>

            {isOpen && (
            <div
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998] md:hidden"
            />
            )}

            <div
            className={`fixed z-[9999] top-0 right-0 h-full w-72 bg-[#faf7f2] text-black p-6 transform transition-transform duration-300 ease-in-out shadow-2xl rounded-l-2xl md:hidden ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            >
            <div className="flex justify-end">
                <X
                onClick={() => setIsOpen(false)}
                className="cursor-pointer w-8 h-8 text-gray-600 hover:text-[#d4b78f] transition-transform hover:scale-110"
                />
            </div>
            <ul className="flex flex-col gap-y-5 text-lg font-semibold mt-10">
                <li>
                <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 px-4 rounded-lg transition-colors ${
                    pathname == "/" ? "bg-[#d4b78f] text-white" : "hover:bg-[#f0ebe3] text-gray-700"
                    }`}
                >
                    Home
                </Link>
                </li>
                <li>
                <Link
                    href="/menu"
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 px-4 rounded-lg transition-colors ${
                    pathname == "/menu" ? "bg-[#d4b78f] text-white" : "hover:bg-[#f0ebe3] text-gray-700"
                    }`}
                >
                    Menu
                </Link>
                </li>
                <li>
                <Link
                    href="/about"
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 px-4 rounded-lg transition-colors ${
                    pathname == "/about" ? "bg-[#d4b78f] text-white" : "hover:bg-[#f0ebe3] text-gray-700"
                    }`}
                >
                    About
                </Link>
                </li>
                <li>
                <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 px-4 rounded-lg transition-colors ${
                    pathname == "/contact" ? "bg-[#d4b78f] text-white" : "hover:bg-[#f0ebe3] text-gray-700"
                    }`}
                >
                    Contact
                </Link>
                </li>
                <li>
                <Link
                    href="/gallery"
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 px-4 rounded-lg transition-colors ${
                    pathname == "/gallery" ? "bg-[#d4b78f] text-white" : "hover:bg-[#f0ebe3] text-gray-700"
                    }`}
                >
                    Gallery
                </Link>
                </li>
            </ul>
            </div>
    </>
  )
}

export default Navbar

