"use client";

import { useState, useEffect, useRef } from "react";
import {
  FaChevronDown,
  FaGlobe,
  FaUsers,
  FaMoneyBill,
  FaChartBar,
  FaLink,
  FaCogs,
  FaCube,
  FaHandshake,
  FaUserTie,
  FaPassport,
  FaLightbulb,
  FaHeart,
  FaPeopleCarry,
  FaFileAlt,
  FaBookOpen,
  FaNewspaper,
  FaPlayCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdQuestionAnswer, MdPhone, MdExplore } from "react-icons/md";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target)
      ) {
        setMobileMenuOpen(false);
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1536) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`w-full bg-gray-100 shadow-sm fixed left-0 z-50 transition-all duration-300 ${
        scrollY > 100 ? "top-0" : "top-10"
      }`}
    >
      <div className="px-16 flex justify-between items-center py-5 ">
        <div className="font-bold text-[44px] text-gray-800">Oyster</div>

        <ul className="hidden 2xl:flex items-center space-x-8 text-gray-700 font-medium relative cursor-pointer">
          <li
            className="relative group cursor-pointer"
            onMouseEnter={() => setActiveMenu("products")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="flex items-center gap-2 hover:text-black text-xl cursor-pointer">
              Products <FaChevronDown size={14} />
            </button>

            <div
              className={`absolute left-0 top-full mt-2 w-[1100px] h-[350px] bg-white rounded-3xl shadow-lg border border-gray-200 p-14 flex justify-between text-sm transition-all duration-300 ${
                activeMenu === "products"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-3"
              }`}
            >
              <div>
                <h3 className="text-gray-500 text-xs font-semibold mb-7 uppercase tracking-wide text-[15px]">
                  Global Employment
                </h3>
                <ul className="space-y-8">
                  <li className="flex items-center gap-3 hover:text-black cursor-pointer text-lg">
                    <FaGlobe /> Employer of Record
                  </li>
                  <li className="flex items-center gap-3 hover:text-black cursor-pointer text-lg">
                    <FaUsers /> Global Contractors
                  </li>
                  <li className="flex items-center gap-3 hover:text-black cursor-pointer text-lg">
                    <FaMoneyBill /> Global Payroll
                  </li>
                  <li className="flex items-center gap-3 hover:text-black cursor-pointer text-lg">
                    <FaChartBar /> Salary Insights
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-gray-500 text-xs font-semibold mb-7 uppercase tracking-wide text-[15px]">
                  Platform
                </h3>
                <ul className="space-y-8">
                  <li className="flex items-center gap-2 hover:text-black cursor-pointer text-lg">
                    <FaLink /> Integrations
                  </li>
                  <li className="flex items-center gap-2 hover:text-black cursor-pointer text-lg">
                    <FaCogs /> API
                  </li>
                  <li className="flex items-center gap-2 hover:text-black cursor-pointer text-lg">
                    <FaCube /> Oyster Embedded
                  </li>
                  <li className="flex items-center gap-2 hover:text-black cursor-pointer text-lg">
                    <FaHandshake /> Oyster Partners
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-gray-500 text-xs font-semibold mb-7 uppercase tracking-wide text-[15px]">
                  Add-ons
                </h3>
                <ul className="space-y-8">
                  <li className="flex items-center gap-2 hover:text-black cursor-pointer text-lg">
                    <FaUserTie /> Employee Benefits
                  </li>
                  <li className="flex items-center gap-2 hover:text-black cursor-pointer text-lg">
                    <FaPassport /> Visa Sponsorship
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li className="hover:text-black text-xl cursor-pointer ">
            Solutions
          </li>

          <li
            className="relative"
            onMouseEnter={() => setActiveMenu("why")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="flex items-center gap-1 hover:text-black font-medium text-xl cursor-pointer">
              Why Oyster <FaChevronDown size={14} />
            </button>

            <div
              className={`absolute left-0 top-full mt-2 w-[700px] bg-white rounded-3xl shadow-lg border border-gray-200 p-16 flex justify-between text-sm transition-all duration-300 origin-top ${
                activeMenu === "why"
                  ? "opacity-100 visible translate-y-0 scale-100"
                  : "opacity-0 invisible -translate-y-3 scale-95"
              } z-50`}
            >
              <div>
                <h3 className="text-gray-500 text-xs font-semibold mb-5 uppercase tracking-wide text-[15px]">
                  Why Choose Oyster
                </h3>
                <ul className="space-y-8">
                  <li className="flex items-center gap-2 hover:text-black cursor-pointer text-xl">
                    <FaLightbulb /> Our Mission
                  </li>
                  <li className="flex items-center gap-2 hover:text-black cursor-pointer text-xl">
                    <FaHeart /> Our Values
                  </li>
                  <li className="flex items-center gap-2 hover:text-black cursor-pointer text-xl">
                    <FaPeopleCarry /> Our Team
                  </li>
                  <li className="flex items-center gap-2 hover:text-black cursor-pointer text-xl">
                    <FaHandshake /> Partner Program
                  </li>
                </ul>
              </div>

              <div className="flex flex-col justify-between gap-3 p-8  rounded-2xl w-[280px] h-[160px]">
                <h4 className="font-semibold text-gray-700 text-[22px]">
                  Learn More
                </h4>
                <p className="text-gray-500 text-[19px] ">
                  Discover why Oyster is the best choice for your business.
                </p>
                <button className="px-3 py-3.5 bg-black text-white rounded-xl text-[14px] font-medium shadow-md hover:bg-gray-900 hover:shadow-lg transition-all duration-300 ease-in-out">
                  Get Started
                </button>
              </div>
            </div>
          </li>

          <li
            className="relative group"
            onMouseEnter={() => setActiveMenu("resources")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="flex items-center gap-1 hover:text-black text-xl cursor-pointer">
              Resources <FaChevronDown size={14} />
            </button>

            <div
              className={`absolute left-0 top-full mt-2 w-[600px] bg-white rounded-3xl shadow-lg border border-gray-200 p-15 flex justify-between text-sm transition-all duration-300 ${
                activeMenu === "resources"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-3"
              }`}
            >
              <div>
                <h3 className="text-gray-500  font-semibold mb-5 uppercase tracking-wide text-[15px]">
                  Learn & Explore
                </h3>
                <ul className="space-y-8">
                  <li className="flex items-center gap-2 hover:text-black cursor-pointer text-xl">
                    <FaBookOpen /> Documentation
                  </li>
                  <li className="flex items-center gap-2 hover:text-black cursor-pointer text-xl">
                    <FaFileAlt /> Case Studies
                  </li>
                  <li className="flex items-center gap-2 hover:text-black cursor-pointer text-xl">
                    <FaNewspaper /> Blog
                  </li>
                  <li className="flex items-center gap-2 hover:text-black cursor-pointer text-xl">
                    <FaPlayCircle /> Video Tutorials
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-gray-500  font-semibold mb-5 uppercase tracking-wide text-[15px]">
                  Help & Support
                </h3>
                <ul className="space-y-8">
                  <li className="flex items-center gap-2 hover:text-black cursor-pointer text-xl">
                    <MdQuestionAnswer className="text-gray-500" />
                    FAQs
                  </li>
                  <li className="flex items-center gap-2 hover:text-black cursor-pointer text-xl">
                    <MdPhone className="text-gray-500" />
                    Contact Support
                  </li>
                  <li className="flex items-center gap-2 hover:text-black cursor-pointer text-xl">
                    <MdExplore className="text-gray-500" />
                    Getting Started
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li className="hover:text-black text-xl cursor-pointer">Pricing</li>
        </ul>

        <div className="hidden 2xl:flex items-center space-x-7">
          <button className="text-gray-700 font-medium hover:text-black text-xl cursor-pointer">
            Log In
          </button>
          <button className="text-gray-700 font-medium hover:text-black text-xl cursor-pointer">
            Sign Up
          </button>
          <div className="relative group w-max">
            <button className="relative overflow-hidden bg-black text-[18px] text-white px-7 hover:text-black py-4 rounded-[10px] font-bold transition flex items-center justify-center">
              <span
                className="absolute left-1/2 bottom-0 w-[350px] h-[350px] rounded-full 
                 bg-green-300
                 -translate-x-1/2 translate-y-full
                 group-hover:translate-y-1/2
                 transition-all duration-700 ease-in-out
                 z-0"
              ></span>

              <span className="relative z-10">Book a Demo</span>
            </button>
          </div>
        </div>

        <div className="2xl:hidden cursor-pointer">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <FaTimes size={28} className="cursor-pointer" />
            ) : (
              <FaBars size={28} className="cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      <div
        ref={mobileMenuRef}
        className={`fixed top-0 left-0 z-50 h-full w-80 max-w-sm bg-white shadow-xl transform transition-transform duration-300 cursor-pointer ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <div className="font-bold text-2xl">Menu</div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full cursor-pointer"
            >
              <FaTimes size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            <ul className="space-y-4">
              <li>
                <button
                  className="flex justify-between w-full items-center text-lg font-medium cursor-pointer"
                  onClick={() =>
                    setActiveMenu(activeMenu === "products" ? null : "products")
                  }
                >
                  Products <FaChevronDown />
                </button>
                {activeMenu === "products" && (
                  <ul className="mt-2 pl-4 space-y-2">
                    <h3 className="text-gray-500 text-xs font-semibold mb-3 mt-6 uppercase tracking-wide text-[15px]">
                      Global Employment
                    </h3>

                    <li className="flex items-center gap-2 cursor-pointer">
                      <FaGlobe /> Employer of Record
                    </li>
                    <li className="flex items-center gap-2 cursor-pointer">
                      <FaUsers /> Global Contractors
                    </li>
                    <li className="flex items-center gap-2 cursor-pointer">
                      <FaMoneyBill /> Global Payroll
                    </li>
                    <li className="flex items-center gap-2 cursor-pointer">
                      <FaChartBar /> Salary Insights
                    </li>
                    <h3 className="text-gray-500 text-xs font-semibold mb-3 mt-7 uppercase tracking-wide text-[15px]">
                      Platform
                    </h3>
                    <li className="flex items-center gap-2 cursor-pointer">
                      <FaLink /> Integrations
                    </li>
                    <li className="flex items-center gap-2 cursor-pointer">
                      <FaCogs /> API
                    </li>
                    <li className="flex items-center gap-2 cursor-pointer">
                      <FaCube /> Oyster Embedded
                    </li>
                    <li className="flex items-center gap-2 cursor-pointer">
                      <FaHandshake /> Oyster Partners
                    </li>
                    <h3 className="text-gray-500 text-xs font-semibold mb-3 mt-7 uppercase tracking-wide text-[15px]">
                      Add-ones
                    </h3>
                    <li className="flex items-center gap-2 cursor-pointer">
                      <FaUserTie /> Employee Benefits
                    </li>
                    <li className="flex items-center gap-2 cursor-pointer">
                      <FaPassport /> Visa Sponsorship
                    </li>
                  </ul>
                )}
              </li>

              <li className="hover:text-black text-xl cursor-pointer  font-medium">
                Solutions
              </li>

              <li>
                <button
                  className="flex justify-between w-full items-center text-lg font-medium cursor-pointer"
                  onClick={() =>
                    setActiveMenu(activeMenu === "why" ? null : "why")
                  }
                >
                  Why Oyster <FaChevronDown />
                </button>
                {activeMenu === "why" && (
                  <ul className="mt-2 pl-4 space-y-2 cursor-pointer">
                    <h3 className="text-gray-500 text-xs font-semibold mb-3 mt-7 uppercase tracking-wide text-[15px] cursor-pointer">
                      Why Chose Oyster
                    </h3>
                    <li className="flex items-center gap-2 cursor-pointer">
                      <FaLightbulb /> Our Mission
                    </li>
                    <li className="flex items-center gap-2 cursor-pointer">
                      <FaHeart /> Our Values
                    </li>
                    <li className="flex items-center gap-2 cursor-pointer">
                      <FaPeopleCarry /> Our Team
                    </li>
                    <li className="flex items-center gap-2 cursor-pointer">
                      <FaHandshake /> Partner Program
                    </li>

                    <li className="font-semibold text-[18px] mt-10 ">
                      Learn More
                    </li>
                    <li className=" ">
                      Discover why Oyster is the best choice for your business.
                    </li>
                    <li className="mb-3 px-4">
                      <button className="px-3 py-3 bg-black text-white rounded-xl text-[14px] font-medium shadow-md hover:bg-gray-900 hover:shadow-lg transition-all duration-300 ease-in-out">
                        Get Started
                      </button>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <button
                  className="flex justify-between w-full items-center text-lg font-medium cursor-pointer"
                  onClick={() =>
                    setActiveMenu(
                      activeMenu === "resources" ? null : "resources"
                    )
                  }
                >
                  Resources <FaChevronDown />
                </button>
                {activeMenu === "resources" && (
                  <ul className="mt-2 pl-4 space-y-2">
                    <h3 className="text-gray-500 text-xs font-semibold mb-3 mt-7 uppercase tracking-wide text-[15px]">
                      Learn & Explore
                    </h3>
                    <li className="flex items-center gap-2 cursor-pointer">
                      <FaBookOpen /> Documentation
                    </li>
                    <li className="flex items-center gap-2 cursor-pointer">
                      <FaFileAlt /> Case Studies
                    </li>
                    <li className="flex items-center gap-2 cursor-pointer">
                      <FaNewspaper /> Blog
                    </li>
                    <li className="flex items-center gap-2 cursor-pointer">
                      <FaPlayCircle /> Video Tutorials
                    </li>
                    <h3 className="text-gray-500 text-xs font-semibold mb-3 mt-7 uppercase tracking-wide text-[15px]">
                      Help & Support
                    </h3>
                    <li className="flex items-center gap-2 cursor-pointer">
                      <MdQuestionAnswer /> FAQs
                    </li>
                    <li className="flex items-center gap-2 cursor-pointer">
                      <MdPhone /> Contact Support
                    </li>
                    <li className="flex items-center gap-2 cursor-pointer">
                      <MdExplore /> Getting Started
                    </li>
                  </ul>
                )}
              </li>
              <li className="hover:text-black  font-medium text-xl cursor-pointer">
                Pricing
              </li>

              <div className="flex flex-col  gap-4 items-center pt-10">
                <button className="text-gray-700 font-medium hover:text-black text-[18px] cursor-pointer">
                  Log In
                </button>
                <button className="text-gray-700 font-medium hover:text-black text-[18px] cursor-pointer">
                  Sign Up
                </button>
                <div className="relative group w-max mt-4">
                  <button className="relative overflow-hidden bg-black text-[15px] text-white px-4 hover:text-black py-3.5 rounded-[10px] font-bold transition flex items-center justify-center">
                    <span
                      className="absolute left-1/2 bottom-0 w-[350px] h-[350px] rounded-full 
                 bg-green-300
                 -translate-x-1/2 translate-y-full
                 group-hover:translate-y-1/2
                 transition-all duration-700 ease-in-out
                 z-0"
                    ></span>

                    <span className="relative z-10">Book a Demo</span>
                  </button>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
