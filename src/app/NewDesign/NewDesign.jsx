"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillDashboard,
  AiFillHeart,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import {
  BsBellFill,
  BsFillPersonFill,
  BsSearch,
  BsGrid3X3Gap,
} from "react-icons/bs";

import {
  IoSettings,
  IoMail,
  IoPeople,
  IoCube,
  IoBarChart,
  IoMenu,
  IoClose,
  IoChevronForward,
  IoChevronDown,
} from "react-icons/io5";

const cards = [
  {
    title: "Premium Headphones",
    description: "High-quality sound with noise cancellation",
    image: "/flex/1.png",
    price: "$129.99",
    category: "Electronics",
    rating: 4.5,
  },
  {
    title: "Smart Watch",
    description: "Track your fitness and stay connected",
    image: "/flex/2.png",
    price: "$199.99",
    category: "Wearables",
    rating: 4.2,
  },
  {
    title: "Camera Pro",
    description: "Professional photography made easy",
    image: "/flex/3.png",
    price: "$599.99",
    category: "Electronics",
    rating: 4.8,
  },
  {
    title: "Gaming Console",
    description: "Next-gen gaming experience",
    image: "/flex/4.png",
    price: "$499.99",
    category: "Gaming",
    rating: 4.7,
  },
  {
    title: "Laptop Elite",
    description: "Powerful performance for professionals",
    image: "/flex/5.png",
    price: "$1299.99",
    category: "Computers",
    rating: 4.6,
  },
  {
    title: "Wireless Earbuds",
    description: "True wireless freedom",
    image: "/flex/6.png",
    price: "$79.99",
    category: "Electronics",
    rating: 4.3,
  },
  {
    title: "Smartphone X",
    description: "Latest technology in your hands",
    image: "/flex/7.png",
    price: "$899.99",
    category: "Mobile",
    rating: 4.4,
  },
  {
    title: "Tablet Pro",
    description: "Perfect for work and entertainment",
    image: "/flex/8.png",
    price: "$699.99",
    category: "Tablets",
    rating: 4.5,
  },
  {
    title: "Laptop Elite",
    description: "Powerful performance for professionals",
    image: "/flex/5.png",
    price: "$1299.99",
    category: "Computers",
    rating: 4.6,
  },
];

const categories = [
  "All",
  "Electronics",
  "Mobile",
  "Computers",
  "Wearables",
  "Gaming",
  "Tablets",
];

const NewLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState(0);
  const [notifications, setNotifications] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredCards = cards.filter((card) => {
    const matchesCategory =
      selectedCategory === "All" || card.category === selectedCategory;
    const matchesSearch =
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) {
        setShowSearch(false);
        setShowMobileFilters(false);
      }
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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const addToCart = (item) => {
    setCartItems((prev) => prev + 1);
  };

  const toggleFavorite = (item) => {
    if (favorites.includes(item.title)) {
      setFavorites(favorites.filter((fav) => fav !== item.title));
    } else {
      setFavorites([...favorites, item.title]);
    }
  };

  // Enhanced Sidebar Component
  const Sidebar = ({ isMobile = false }) => (
    <div
      className={`
        ${
          isMobile
            ? `fixed inset-y-0 left-0 bg-gradient-to-b from-gray-800 to-gray-900 text-white p-4 z-50 transform transition-transform duration-300 w-80 ${
                mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`
            : `fixed left-0 top-0 bottom-0 bg-gradient-to-b from-gray-800 to-gray-900 text-white z-40 transition-all duration-300 ${
                sidebarCollapsed ? "w-16" : "w-64"
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

      {/* Logo Section */}
      <div
        className={`flex items-center ${
          sidebarCollapsed && !isMobile ? "justify-center p-4" : "p-4"
        } border-b border-gray-700`}
      >
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
          <span className="text-white font-bold text-sm p-1">LTE</span>
        </div>
        {(!sidebarCollapsed || isMobile) && (
          <h2 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AdminLTE
          </h2>
        )}
      </div>

      {/* User Profile - Hidden on collapsed sidebar */}
      {(!sidebarCollapsed || isMobile) && (
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src="/BG.png"
                alt="Profile Picture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Sahib Ahmed</p>
              <p className="text-xs text-gray-400 truncate">Administrator</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Menu */}
      <nav className="mt-4">
        <ul className="space-y-1">
          {[
            { icon: AiFillDashboard, label: "Dashboard", active: true },
            { icon: IoBarChart, label: "Analytics", active: false },
            { icon: IoPeople, label: "Users", active: false },
            { icon: IoCube, label: "Products", active: false },
            { icon: IoMail, label: "Messages", badge: false },
            { icon: IoSettings, label: "Settings", active: false },
          ].map((item, index) => (
            <li key={index}>
              <button
                className={`w-full flex items-center px-3 py-3 text-left transition-all duration-200 rounded-lg mx-1 ${
                  item.active
                    ? " text-white hover:bg-blue-600"
                    : "text-gray-300 hover:bg-blue-600 hover:text-white"
                } ${
                  sidebarCollapsed && !isMobile
                    ? "justify-center"
                    : "justify-start"
                }`}
              >
                <item.icon
                  className={`text-lg ${
                    sidebarCollapsed && !isMobile ? "" : "mr-3"
                  }`}
                />
                {(!sidebarCollapsed || isMobile) && (
                  <span className="flex-1 text-sm truncate">{item.label}</span>
                )}
                {item.badge && (!sidebarCollapsed || isMobile) && (
                  <span className=" text-black text-xs px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                    {item.badge}
                  </span>
                )}
                {(!sidebarCollapsed || isMobile) && (
                  <IoChevronForward className="text-gray-400 text-xs flex-shrink-0 ml-1" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Quick Stats - Only show on expanded sidebar */}
      {(!sidebarCollapsed || isMobile) && (
        <div className="absolute bottom-2 left-2 right-2 p-3 bg-gray-700 rounded-lg">
          <p className="text-xs text-gray-400">Storage</p>
          <div className="w-full bg-gray-600 rounded-full h-1.5 mt-1">
            <div className="bg-blue-500 h-1.5 rounded-full w-3/4"></div>
          </div>
          <p className="text-xs text-gray-400 mt-1 truncate">
            15.2 GB of 20 GB used
          </p>
        </div>
      )}
    </div>
  );

  return (
    <div
      className={`flex h-screen bg-gray-50 ${
        darkMode ? "dark bg-gray-900" : ""
      }`}
    >
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
          isMobile ? "ml-0" : sidebarCollapsed ? "ml-16" : "ml-64"
        }`}
      >
        {/* Enhanced Header */}
        <header
          className={`fixed top-0 right-0 bg-white dark:bg-gray-800 shadow-sm z-30 transition-all duration-300 ${
            isMobile ? "left-0" : sidebarCollapsed ? "left-16" : "left-64"
          }`}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 p-3">
            <div className="flex items-center w-full lg:w-auto justify-between">
              <div className="flex items-center">
                <button
                  onClick={toggleSidebar}
                  className="text-gray-600 dark:text-gray-300 transition duration-200 text-xl p-2 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <IoMenu className="text-[30px]" />
                </button>
                <div className="text-lg lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center pl-1">
                  TechStore
                </div>
              </div>

              {/* Mobile Search Toggle */}
              {isMobile && (
                <div className="flex items-center gap-1 lg:hidden">
                  <button
                    onClick={() => setShowSearch(!showSearch)}
                    className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition duration-200"
                  >
                    <AiOutlineSearch className="text-lg" />
                  </button>
                  <button
                    onClick={() => setShowMobileFilters(!showMobileFilters)}
                    className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition duration-200"
                  >
                    <BsGrid3X3Gap className="text-lg" />
                  </button>
                </div>
              )}
            </div>

            {/* Search Bar - Desktop */}
            {!isMobile && (
              <div className="relative flex-1 lg:flex-none min-w-[300px] max-w-[500px]">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <BsSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Search products..."
                />
              </div>
            )}

            {/* Search Bar - Mobile (Conditional) */}
            {isMobile && showSearch && (
              <div className="w-full lg:hidden">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BsSearch className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Search products..."
                  />
                  <button
                    onClick={() => setShowSearch(false)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    <IoClose />
                  </button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div
              className={`flex items-center gap-1 ${
                isMobile ? "w-full lg:w-auto justify-between" : ""
              }`}
            >
              {!isMobile && (
                <>
                  <button
                    onClick={toggleDarkMode}
                    className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition duration-200"
                  >
                    {darkMode ? "☀️" : "🌙"}
                  </button>

                  <button className="relative p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition duration-200">
                    <BsBellFill className="text-xl" />
                    {notifications > 0 && (
                      <span className="absolute -top-1 -right-1  text-black text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                        {notifications}
                      </span>
                    )}
                  </button>
                </>
              )}

              <button className="relative p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition duration-200">
                <AiOutlineShoppingCart className="text-2xl" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1  text-black text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                    {cartItems}
                  </span>
                )}
              </button>

              <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition duration-200">
                <BsFillPersonFill className="text-2xl" />
              </button>

              {/* Mobile Dark Mode Toggle */}
              {isMobile && (
                <button
                  onClick={toggleDarkMode}
                  className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition duration-200"
                >
                  {darkMode ? "☀️" : "🌙"}
                </button>
              )}
            </div>
          </div>
        </header>

        <div className="flex-1 flex flex-col mt-16 lg:mt-0">
          <main
            className={`flex-1 p-3 lg:p-6 bg-gray-50 dark:bg-gray-900 overflow-auto transition-all duration-300 pt-20 lg:pt-24`}
          >
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl lg:rounded-2xl p-4 lg:p-8 text-white mb-4 lg:mb-8 shadow-lg">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3, type: "just" }}
              >
                <h1 className="text-xl lg:text-3xl font-bold mb-2">
                  Welcome back, Sahib!
                </h1>
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3, type: "just" }}
              >
                <p className="text-blue-100 text-sm lg:text-base">
                  Here's what's happening with your store today.
                </p>
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3, type: "just" }}
              >
                <div className="flex items-center mt-3 lg:mt-4 gap-2 lg:gap-4 flex-wrap">
                  <button className="bg-white text-blue-600 px-4 lg:px-6 py-1.5 lg:py-2 rounded-lg font-semibold hover:bg-blue-50 transition duration-200 text-sm lg:text-base">
                    View Reports
                  </button>
                  <button className="border border-white text-white px-4 lg:px-6 py-1.5 lg:py-2 rounded-lg font-semibold hover:bg-white hover:text-black hover:bg-opacity-10 transition duration-200 text-sm lg:text-base">
                    Add Product
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mb-4 lg:mb-8">
              {[
                {
                  title: "Total Revenue",
                  value: "$12,456",
                  change: "+12%",
                  color: "green",
                },
                {
                  title: "New Orders",
                  value: "567",
                  change: "+8%",
                  color: "blue",
                },
                {
                  title: "Customers",
                  value: "1,234",
                  change: "+5%",
                  color: "purple",
                },
                {
                  title: "Pending",
                  value: "23",
                  change: "-2%",
                  color: "orange",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 120,
                    damping: 12,
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
                  }}
                  className="bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-500 dark:text-gray-400 text-xs lg:text-sm truncate">
                        {stat.title}
                      </p>
                      <p className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white mt-1 lg:mt-2 truncate">
                        {stat.value}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full flex-shrink-0 ml-2 ${
                        stat.color === "green"
                          ? "bg-green-100 text-green-800"
                          : stat.color === "blue"
                          ? "bg-blue-100 text-blue-800"
                          : stat.color === "purple"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-orange-100 text-orange-800"
                      }`}
                    >
                      {stat.change}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Category Filter */}
            <div className="mb-4 lg:mb-8">
              <div className="flex flex-wrap gap-1 lg:gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-2 lg:px-4 py-1.5 lg:py-2 rounded-lg transition duration-200 text-xs lg:text-sm ${
                      selectedCategory === category
                        ? "bg-blue-500 text-white shadow-lg"
                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Filter Toggle */}
            {isMobile && (
              <div className="mb-4">
                <button
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="w-full bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-between"
                >
                  <span className="text-sm font-medium">Filter Categories</span>
                  <IoChevronDown
                    className={`transform transition-transform ${
                      showMobileFilters ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {showMobileFilters && (
                  <div className="mt-2 bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => {
                            setSelectedCategory(category);
                            setShowMobileFilters(false);
                          }}
                          className={`px-3 py-2 rounded transition duration-200 text-sm ${
                            selectedCategory === category
                              ? "bg-blue-500 text-white"
                              : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Products Grid with Enhanced Motion */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3, type: "just" }}
                >
                  <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                    Featured Products
                  </h2>
                </motion.div>

                <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  {filteredCards.length} items
                </span>
              </div>

              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 lg:gap-6">
                {filteredCards.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 50, opacity: 0, scale: 0.9 }}
                    whileInView={{ y: 0, opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-100 dark:border-gray-700"
                  >
                    <div className="relative overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={card.image}
                          alt={card.title}
                          width={400}
                          height={300}
                          className="w-full h-32 sm:h-36 lg:h-48 object-cover"
                        />
                      </motion.div>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleFavorite(card)}
                        className="absolute top-2 right-2 p-1.5 bg-white dark:bg-gray-800 rounded-full shadow-lg transition duration-200"
                      >
                        <AiFillHeart
                          className={`text-base ${
                            favorites.includes(card.title)
                              ? "text-red-500"
                              : "text-gray-400 hover:text-red-500"
                          }`}
                        />
                      </motion.button>

                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        className="absolute top-2 left-2"
                      >
                        <span className="bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                          {card.category}
                        </span>
                      </motion.div>
                    </div>

                    <div className="p-3 lg:p-4">
                      <div className="flex items-center justify-between mb-2">
                        <motion.h3
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                          className="font-semibold text-gray-900 dark:text-white text-sm lg:text-base truncate flex-1 mr-2"
                        >
                          {card.title}
                        </motion.h3>
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.4 }}
                          className="flex items-center text-xs lg:text-sm text-yellow-500 flex-shrink-0"
                        >
                          ⭐ {card.rating}
                        </motion.div>
                      </div>

                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                        className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm mb-2 lg:mb-3 line-clamp-2"
                      >
                        {card.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.6 }}
                        className="flex items-center justify-between"
                      >
                        <span className="text-base lg:text-lg font-bold text-gray-900 dark:text-white">
                          {card.price}
                        </span>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => addToCart(card)}
                          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white cursor-pointer px-2 lg:px-4 py-1.5 lg:py-2 rounded-lg hover:shadow-lg transition duration-200 flex items-center gap-1 lg:gap-2 text-xs lg:text-sm"
                        >
                          <AiOutlineShoppingCart className="text-xs lg:text-base" />
                          <span className="hidden xs:inline">Add to Cart</span>
                          <span className="xs:hidden">Add</span>
                        </motion.button>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Empty State with Motion */}
              {filteredCards.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-8 lg:py-12"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="text-gray-400 dark:text-gray-500 text-4xl mb-4"
                  >
                    🔍
                  </motion.div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm lg:text-base">
                    Try adjusting your search or filter criteria
                  </p>
                </motion.div>
              )}
            </motion.div>
          </main>

          <footer className="bg-gray-900">
            <div className="px-4 sm:px-6 lg:px-8">
              {/* Main Footer Content */}
              <div className="py-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                {/* Product Column */}
                <div className="lg:col-span-1 items-center text-center">
                  <h3 className="text-lg font-bold text-white tracking-wider uppercase mb-4">
                    Product
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <ul className="space-y-1">
                        <li>
                          <Link
                            href="#"
                            className="text-sm text-white hover:text-gray-400"
                          >
                            Landing Page
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-sm text-white hover:text-gray-400"
                          >
                            Popup Builder
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-sm text-white hover:text-gray-400"
                          >
                            Web-design
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-sm text-white hover:text-gray-400"
                          >
                            Content
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-sm text-white hover:text-gray-400"
                          >
                            Integrations
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                {/* Use Cases Column */}
                <div className="lg:col-span-1 items-center text-center">
                  <h3 className="text-lg font-bold text-white tracking-wider uppercase mb-4">
                    Use Cases
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="#"
                        className="text-sm text-white hover:text-gray-400"
                      >
                        Web-designers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-sm text-white hover:text-gray-400"
                      >
                        Marketers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-sm text-white hover:text-gray-400"
                      >
                        Small Business
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-sm text-white hover:text-gray-400"
                      >
                        Website Builder
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Resources Column */}
                <div className="lg:col-span-1 items-center text-center">
                  <h3 className="text-lg font-bold text-white tracking-wider uppercase mb-4">
                    Resources
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="#"
                        className="text-sm text-white hover:text-gray-400"
                      >
                        Academy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-sm text-white hover:text-gray-400"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-sm text-white hover:text-gray-400"
                      >
                        Themes
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-sm text-white hover:text-gray-400"
                      >
                        Hosting
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-sm text-white hover:text-gray-400"
                      >
                        Developers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-sm text-white hover:text-gray-400"
                      >
                        Support
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Contact Column */}
                <div className="lg:col-span-1 items-center text-center">
                  <h3 className="text-lg font-bold text-white tracking-wider uppercase mb-4">
                    Contact Us
                  </h3>
                  <address className="not-italic text-sm text-white">
                    <p>Wisconsin Ave, Suite 700</p>
                    <p>Chevy Chase, Maryland 20815</p>
                    <p className="mt-2">support@figma.com</p>
                  </address>
                </div>
              </div>

              <div className="border-t border-gray-700"></div>

              {/* Bottom Section */}
              <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 py-6 text-center">
                <p className="text-sm text-white">© 2025 All Rights Reserved</p>
                <div className="flex flex-wrap justify-center space-x-4">
                  <Link
                    href="#"
                    className="text-sm text-white hover:text-gray-400"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="#"
                    className="text-sm text-white hover:text-gray-400"
                  >
                    Terms of Use
                  </Link>
                  <Link
                    href="#"
                    className="text-sm text-white hover:text-gray-400"
                  >
                    Legal
                  </Link>
                  <Link
                    href="#"
                    className="text-sm text-white hover:text-gray-400"
                  >
                    Site Map
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default NewLayout;
