"use client";

import Link from "next/link";
import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const MenuBar = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const pathname = usePathname();

  return (
    <div className="bg-[#EEF1F6] py-2">
      <div className="container  ">
        <div className="flex items-center justify-between ">
          <div className="flex items-center text-white">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                width={200}
                height={200}
                className="w-22 h-18"
              />
            </Link>
          </div>

          <div className="hidden md:flex flex-1 justify-end items-center xl:gap-10 md:gap-6 gap-4">
            <Link
              href="/AboutUs"
              className="text-D_Grey text-[10px] md:text-[17px] group"
            >
              About Us
              <p
                className={`h-[3px] bg-gradient-to-r from-[#FFBA26]  to-[#FF9A0E]  hover:from-[#ea8e0d] hover:to-[#FFBA26 transition-all duration-300 ${
                  pathname === "/AboutUs" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></p>
            </Link>

            <Link
              href="/Services"
              className="text-D_Grey text-[10px] md:text-[17px] group"
            >
              Our Vision
              <p
                className={`h-[3px] bg-gradient-to-r from-[#FFBA26]  to-[#FF9A0E]  hover:from-[#ea8e0d] hover:to-[#FFBA26 transition-all duration-300 ${
                  pathname === "/Services" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></p>
            </Link>

            <Link
              href="/Pricing"
              className="text-D_Grey text-[10px] md:text-[17px] group"
            >
              Pricing
              <p
                className={`h-[3px] bg-gradient-to-r from-[#FFBA26]  to-[#FF9A0E]  hover:from-[#ea8e0d] hover:to-[#FFBA26 transition-all duration-300 ${
                  pathname === "/Pricing" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></p>
            </Link>

            <Link
              href="/Blog"
              className="text-D_Grey text-[10px] md:text-[17px] group"
            >
              Contact Us
              <p
                className={`h-[3px] bg-gradient-to-r from-[#FFBA26]  to-[#FF9A0E]  hover:from-[#ea8e0d] hover:to-[#FFBA26 transition-all duration-300 ${
                  pathname === "/Blog" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></p>
            </Link>

            <button className="text-[17px] font-medium group items-center border py-3 px-4 rounded relative overflow-hidden text-white cursor-pointer bg-black transition-colors duration-500">
              <span className="absolute inset-0 bg-gradient-to-r from-[#FFBA26] to-[#FF9A0E] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></span>
              <p className="relative text-center group-hover:text-white">
                Request a quote
              </p>
            </button>
          </div>

          <button
            className="md:hidden text-gray-800 cursor-pointer"
            onClick={MenuBar}
          >
            {isOpen ? (
              <RiCloseFill size={38} className="text-red-500" />
            ) : (
              <RiMenuFill size={30} />
            )}
          </button>
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 bg-opacity-50 z-40 cursor-pointer"
            onClick={closeMenu}
          />
        )}

        <div
          className={`lg:hidden flex flex-col text-center justify-center   fixed top-0 left-0 h-screen z-50 bg-[#EEF1F6] bg-opacity-50 w-70 transition-transform duration-600 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-center mb-4">
            <Link href="/" onClick={closeMenu}>
              <Image
                src="/logo.png"
                alt="logo"
                width={400}
                height={400}
                className="w-28 h-26"
              />
            </Link>
          </div>

          <div className=" flex flex-col items-center gap-5 ">
            <Link
              href="/AboutUs"
              onClick={closeMenu}
              className="text-D_Grey text-[18px] font-medium group "
            >
              About us
              <p
                className={`h-[3px] bg-gradient-to-r from-[#FFBA26]  to-[#FF9A0E]  hover:from-[#ea8e0d] hover:to-[#FFBA26]  transition-all duration-300 ${
                  pathname === "/AboutUs" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></p>
            </Link>
            <Link
              href="/Services"
              onClick={closeMenu}
              className="text-D_Grey text-[18px] font-medium group"
            >
              Our Vision
              <p
                className={`h-[3px] bg-gradient-to-r from-[#FFBA26]  to-[#FF9A0E]  hover:from-[#ea8e0d] hover:to-[#FFBA26]  transition-all duration-300 ${
                  pathname === "/Services" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></p>
            </Link>
            <Link
              href="/Pricing"
              onClick={closeMenu}
              className="text-D_Grey text-[18px] font-medium group"
            >
              Pricing
              <p
                className={`h-[3px] bg-gradient-to-r from-[#FFBA26]  to-[#FF9A0E]  hover:from-[#ea8e0d] hover:to-[#FFBA26] transition-all duration-300 ${
                  pathname === "/Pricing" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></p>
            </Link>
            <Link
              href="/Blog"
              onClick={closeMenu}
              className="text-D_Grey text-[18px] font-medium group"
            >
              Contact Us
              <p
                className={`h-[3px] bg-gradient-to-r from-[#FFBA26]  to-[#FF9A0E]  hover:from-[#ea8e0d] hover:to-[#FFBA26]  transition-all duration-300 ${
                  pathname === "/Blog" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></p>
            </Link>
            <button className="text-[17px] font-medium group items-center border py-3 px-4 rounded relative overflow-hidden mt-5 text-white cursor-pointer bg-black transition-colors duration-500">
              <span className="absolute inset-0 bg-gradient-to-r from-[#FFBA26] to-[#FF9A0E] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></span>
              <p className="relative text-center group-hover:text-white">
                Request a quote
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
