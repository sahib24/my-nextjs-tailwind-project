"use client";

import React, { useState, useEffect } from "react";

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
      </div>
    </div>
  );
};

export default NewLayout;
