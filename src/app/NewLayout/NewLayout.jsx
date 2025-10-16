"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillDashboard } from "react-icons/ai";
import {
  IoSettings,
  IoMail,
  IoPeople,
  IoCube,
  IoBarChart,
  IoMenu,
  IoClose,
} from "react-icons/io5";

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
    title: "Card 4",
    description: "Description for card 4",
    image: "/flex/4.png",
  },
  {
    title: "Card 5",
    description: "Description for card 5",
    image: "/flex/5.png",
  },
];

const NewLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const filteredCards = cards;

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileSidebarOpen(!mobileSidebarOpen);
    } else {
      setSidebarCollapsed(!sidebarCollapsed);
    }
  };

  const closeMobileSidebar = () => {
    setMobileSidebarOpen(false);
  };

  // Sidebar component for reusability
  const Sidebar = ({ isMobile = false }) => (
    <div
      className={`
        ${
          isMobile
            ? `fixed inset-0 bg-gray-800 text-white p-4 z-50 transform transition-transform duration-300 w-[300px] ${
                mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`
            : `fixed left-0 top-0 bottom-0 bg-gray-800 text-white  z-40 transition-all duration-300 ${
                sidebarCollapsed ? "w-16" : "w-[200px]"
              }`
        }
      `}
    >
      {/* Close button for mobile */}
      {isMobile && (
        <button
          onClick={closeMobileSidebar}
          className="absolute top-4 right-4 text-2xl p-2 hover:bg-gray-700 rounded-lg transition duration-200"
        >
          <IoClose />
        </button>
      )}

      <h2
        className={`text-2xl  font-bold mt-10 transition-all p-4 duration-300 ${
          sidebarCollapsed && !isMobile ? "text-xs" : "text-xl"
        }`}
      >
        {sidebarCollapsed && !isMobile ? "LTE" : "AdminLTE"}
      </h2>
      <ul>
        <li
          className={`mb-4 p-2 hover:bg-gray-700 rounded cursor-pointer transition duration-200 flex items-center ${
            sidebarCollapsed && !isMobile
              ? "justify-center text-xs"
              : "justify-start"
          }`}
        >
          <AiFillDashboard className="text-[26px] text-white mr-3" />
          {(!sidebarCollapsed || isMobile) && (
            <span className="flex items-center">Dashboard</span>
          )}
        </li>
        <li
          className={`mb-4 p-2 hover:bg-gray-700 rounded cursor-pointer transition duration-200 flex items-center ${
            sidebarCollapsed && !isMobile
              ? "justify-center text-xs"
              : "justify-start"
          }`}
          title="Settings"
          onClick={isMobile ? closeMobileSidebar : undefined}
        >
          <IoSettings className="text-xl mr-3" />
          {(!sidebarCollapsed || isMobile) && (
            <span className="flex items-center">Settings</span>
          )}
        </li>
        <li
          className={`mb-4 p-2 hover:bg-gray-700 rounded cursor-pointer transition duration-200 flex items-center ${
            sidebarCollapsed && !isMobile
              ? "justify-center text-xs"
              : "justify-start"
          }`}
          title="Messages"
          onClick={isMobile ? closeMobileSidebar : undefined}
        >
          <IoMail className="text-xl mr-3" />
          {(!sidebarCollapsed || isMobile) && (
            <span className="flex items-center">Messages</span>
          )}
        </li>
        <li
          className={`mb-4 p-2 hover:bg-gray-700 rounded cursor-pointer transition duration-200 flex items-center ${
            sidebarCollapsed && !isMobile
              ? "justify-center text-xs"
              : "justify-start"
          }`}
          title="Reports"
          onClick={isMobile ? closeMobileSidebar : undefined}
        >
          <IoBarChart className="text-xl mr-3" />
          {(!sidebarCollapsed || isMobile) && (
            <span className="flex items-center">Reports</span>
          )}
        </li>
        <li
          className={`mb-4 p-2 hover:bg-gray-700 rounded cursor-pointer transition duration-200 flex items-center ${
            sidebarCollapsed && !isMobile
              ? "justify-center text-xs"
              : "justify-start"
          }`}
          title="Users"
          onClick={isMobile ? closeMobileSidebar : undefined}
        >
          <IoPeople className="text-xl mr-3" />
          {(!sidebarCollapsed || isMobile) && (
            <span className="flex items-center">Users</span>
          )}
        </li>
        <li
          className={`mb-4 p-2 hover:bg-gray-700 rounded cursor-pointer transition duration-200 flex items-center ${
            sidebarCollapsed && !isMobile
              ? "justify-center text-xs"
              : "justify-start"
          }`}
          title="Products"
          onClick={isMobile ? closeMobileSidebar : undefined}
        >
          <IoCube className="text-xl mr-3" />
          {(!sidebarCollapsed || isMobile) && (
            <span className="flex items-center">Products</span>
          )}
        </li>
      </ul>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Desktop Sidebar */}
      {!isMobile && <Sidebar />}

      {/* Mobile Sidebar */}
      {isMobile && <Sidebar isMobile={true} />}

      {/* Mobile Sidebar Overlay */}
      {isMobile && mobileSidebarOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-40"
          onClick={closeMobileSidebar}
        />
      )}

      <div
        className={`flex-1 flex flex-col min-h-0 transition-all duration-300 ${
          isMobile ? "ml-0" : sidebarCollapsed ? "ml-16" : "ml-[200px]"
        }`}
      >
        <header
          className={`fixed top-0 right-0 bg-gray-300 p-4 z-30 transition-all duration-300 ${
            isMobile ? "left-0" : sidebarCollapsed ? "left-16" : "left-[200px]"
          }`}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                className="text-gray-800 transition duration-200 text-2xl p-2 cursor-pointer rounded-lg hover:bg-gray-400"
                title={
                  isMobile
                    ? mobileSidebarOpen
                      ? "Close Menu"
                      : "Open Menu"
                    : sidebarCollapsed
                    ? "Expand Sidebar"
                    : "Collapse Sidebar"
                }
              >
                {isMobile ? "☰" : "☰"}
              </button>
              <div className="text-[28px] font-bold text-red-600 flex items-center pl-4">
                My Design
              </div>
            </div>

            <div className="flex items-center gap-4 w-full lg:w-auto">
              <div className="rounded-xl flex items-center border border-black overflow-hidden w-full lg:w-auto min-w-[300px]">
                <input
                  type="text"
                  className="py-2 px-4 w-full focus:outline-none focus:ring-2 bg-white focus:ring-blue-400 rounded-l-md"
                  placeholder="Search..."
                />
                <button className="bg-black text-white py-2 px-6 rounded-r-md hover:bg-blue-600 transition duration-200 cursor-pointer font-medium">
                  Search
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 flex flex-col mt-16 lg:mt-6">
          <main
            className={`flex-1 p-6 bg-gray-50 overflow-auto transition-all duration-300 pt-24`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-gray-600 text-sm">Total Users</h3>
                <p className="text-2xl font-bold">1,234</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-gray-600 text-sm">Revenue</h3>
                <p className="text-2xl font-bold">$12,456</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-gray-600 text-sm">Orders</h3>
                <p className="text-2xl font-bold">567</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-gray-600 text-sm">Pending</h3>
                <p className="text-2xl font-bold">23</p>
              </div>
            </div>

            <div className="mb-6">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3, type: "just" }}
              >
                <h2 className="text-[26px] font-bold text-gray-800 text-center py-8">
                  All Items
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {filteredCards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-gray-100"
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={400}
                      height={400}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2 text-gray-800">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {card.description}
                      </p>
                      <div className="mt-3 flex justify-between items-center">
                        <span className="text-blue-500 font-medium">
                          $29.99
                        </span>
                        <button className="bg-red-400 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition duration-200 text-sm">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>

          <footer className="bg-gray-300 text-black py-8">
            <div className="flex flex-col px-6 md:flex-row justify-between items-center gap-8">
              <div className="text-[28px] text-red-600 font-bold md:mb-0">
                <Link href="#" className="transition duration-200">
                  Logo
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 text-center">
                <Link
                  href="#"
                  className="hover:text-red-600 hover:underline transition duration-200"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="hover:text-red-600 hover:underline transition duration-200"
                >
                  Settings
                </Link>
                <Link
                  href="#"
                  className="hover:text-red-600 hover:underline transition duration-200"
                >
                  Profile
                </Link>
                <Link
                  href="#"
                  className="hover:text-red-600 hover:underline transition duration-200"
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="hover:text-red-600 hover:underline transition duration-200"
                >
                  Contact Us
                </Link>
              </div>

              <div className="flex gap-6 flex-col sm:flex-row">
                <Link
                  href="#"
                  className="hover:text-red-600 transition duration-200 font-medium"
                >
                  Facebook
                </Link>
                <Link
                  href="#"
                  className="hover:text-red-600 transition duration-200 font-medium"
                >
                  Twitter
                </Link>
                <Link
                  href="#"
                  className="hover:text-red-600 transition duration-200 font-medium"
                >
                  Instagram
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default NewLayout;
