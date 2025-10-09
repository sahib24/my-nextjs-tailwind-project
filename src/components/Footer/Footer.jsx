"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#EEF1F6] ">
      <div className="container">
        <div className="flex flex-wrap pb-10 pt-10 xl:justify-between gap-y-6">
          <div className="order-1 w-full sm:w-1/2 xl:w-1/5 flex sm:items-center xl:items-start justify-center sm:justify-start">
            <Image
              src="/logo.png"
              alt="logo"
              width={400}
              height={400}
              className="w-55 h-50"
            />
          </div>
          {/* Quick Links */}
          <div className="order-3 w-full sm:w-1/2 xl:w-1/5 text-center sm:text-left">
            <h3 className="text-[18px] md:text-[22px] 2xl:text-[28px] font-semibold text-[#222E48] mb-2 ">
              Quick Links
            </h3>
            <div className="space-y-2 text-[14px] md:text-[16px]">
              <div>
                <Link href="/#about">
                  <p className="text-[#7F8490] hover:text-[#5f626b] cursor-pointer">
                    About Us
                  </p>
                </Link>
              </div>

              <div>
                <Link href="/#our_vision">
                  <p className="text-[#7F8490] hover:text-[#5f626b] cursor-pointer">
                    Our Vision
                  </p>
                </Link>
              </div>

              <div>
                <Link href="/pricing">
                  <p className="text-[#7F8490] hover:text-[#5f626b] cursor-pointer">
                    Pricing
                  </p>
                </Link>
              </div>
              <div>
                <Link href="/contact-us">
                  <p className="text-[#7F8490] hover:text-[#5f626b] cursor-pointer">
                    Contact Us
                  </p>
                </Link>
              </div>
            </div>
          </div>
          {/* Contact Us */}
          <div className="order-4 w-full sm:w-1/2 xl:w-1/5 text-center sm:text-left">
            <h3 className="text-[18px] md:text-[22px] 2xl:text-[28px] font-semibold text-[#222E48] mb-2">
              Contact Us
            </h3>
            <div className="space-y-3 text-[14px] md:text-[16px]">
              <p className="text-[#7F8490] max-w-[220px] mx-auto sm:mx-0">
                138/1, Level 4, Tejgaon I/A Dhaka 1208, Bangladesh
              </p>
              <div>
                <Link
                  href="https://wa.me/8801844608278"
                  target="_blank"
                  className="text-[#7F8490] hover:text-[#5f626b] cursor-pointer"
                >
                  +88 01844 608278
                </Link>
              </div>
              <p className="text-[#7F8490] hover:text-[#5f626b] cursor-pointer">
                hello@leadsbox.com
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="order-2 xl:order-4 w-full sm:w-1/2 xl:w-2/5 xl:pl-20 max-w-[450px] mx-auto sm:mx-0">
            <div className="flex flex-col sm:items-start  sm:text-left items-center">
              <h5 className="text-[18px] md:text-[22px] 2xl:text-[26px] font-semibold  mb-2 text-[#222E48] ">
                FOLLOW US
              </h5>

              <p className="text-[#7F8490] text-[14px] md:text-[16px] mb-3">
                Receive exclusive offers in your mailbox
              </p>
            </div>

            <div className="flex items-center gap-2 w-full">
              <div className="flex items-center bg-white px-3 py-3 rounded w-full border border-gray-300">
                <input
                  type="email"
                  placeholder="Enter Your email"
                  className="bg-transparent outline-none text-black placeholder-gray-400 w-full"
                />
              </div>
              <button className="bg-gradient-to-r from-[#FFBA26]  to-[#FF9A0E]  hover:from-[#ea8e0d] hover:to-[#FFBA26] cursor-pointer  text-white font-semibold md:px-4 px-3 py-3 rounded transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
