"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const cards = [
  {
    title: "Card 1",
    description: "Description for card 1",
    image: "/flex/1.png",
  },
  {
    title: "Card 2",
    description: "Description for card 2",
    image: "/flex/2.png",
  },
  {
    title: "Card 3",
    description: "Description for card 3",
    image: "/flex/3.png",
  },
  {
    title: "Card 4",
    description: "Description for card 4",
    image: "/flex/4.png",
  },
  {
    title: "Card 5",
    description: "Description for card 5",
    image: "/flex/5.png",
  },
  {
    title: "Card 6",
    description: "Description for card 6",
    image: "/flex/6.png",
  },
  {
    title: "Card 7",
    description: "Description for card 7",
    image: "/flex/7.png",
  },
  {
    title: "Card 8",
    description: "Description for card 8",
    image: "/flex/8.png",
  },
];

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <div className="flex h-auto bg-green-300">
        <div
          className={`${
            sidebarOpen ? "block" : "hidden"
          } md:block w-40 sm:w-60 bg-blue-400 text-white p-3 text-center `}
        >
          <div className="md:text-[26px] text-[20px] mt-4 mb-6 text-purple-600 font-bold">
            <Link href="#">Dashboard</Link>
          </div>
          <ul className="text-[14.5px] md:text-[19px]">
            <li className="mb-4 hover:text-black hover:underline">
              <Link href="#">Home</Link>
            </li>
            <li className="mb-4 hover:text-black hover:underline">
              <Link href="#">Settings</Link>
            </li>
            <li className="mb-4 hover:text-black hover:underline">
              <Link href="#">Profile</Link>
            </li>

            <li className="mb-4 hover:text-black hover:underline">
              <Link href="#">Blog</Link>
            </li>
            <li className="mb-4 hover:text-black hover:underline">
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
          <div className="mt-10 block md:hidden">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-1  text-black  bg-white rounded-full w-full placeholder:text-[12px] focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-red-400 p-3 sm:p-4 flex items-center justify-between">
            <button
              className="text-white pl-4 md:pl-0 text-[20px] md:hidden cursor-pointer"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              ☰
            </button>

            <div className="flex-1 flex justify-end">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2  bg-white rounded-full hidden md:block w-[400px] focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </header>

          <main className="flex-1 p-2 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 scale-95">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={400}
                    height={400}
                    className="w-full h-50 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-red-500 text-sm">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      <footer className="bg-yellow-100 text-black py-8 ">
        <div className="flex flex-col container md:flex-row justify-between items-center  gap-8">
          <div className="text-[24px] font-bold  md:mb-0">
            <Link href="#">Logo</Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 ">
            <Link href="#" className="hover:text-green-600 hover:underline">
              Home
            </Link>
            <Link href="#" className="hover:text-green-600 hover:underline">
              Settings
            </Link>
            <Link href="#" className="hover:text-green-600 hover:underline">
              Profile
            </Link>

            <Link href="#" className="hover:text-green-600 hover:underline">
              Blog
            </Link>
            <Link href="#" className="hover:text-green-600 hover:underline">
              Contact Us
            </Link>
          </div>

          <div className="flex gap-2.5 flex-col sm:flex-row">
            <Link href="#" className="hover:text-green-600">
              Facebook
            </Link>
            <Link href="#" className="hover:text-green-600">
              Twitter
            </Link>
            <Link href="#" className="hover:text-green-600">
              Instagram
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
