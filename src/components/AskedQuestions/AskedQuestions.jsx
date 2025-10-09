"use client";

import { useState } from "react";
import Image from "next/image";

const steps = [
  {
    title: "Are there any additional fees or charges that may apply?",
    description:
      "Our pricing plans include a wide range of digital marketing services, including website design and development, SEO, PPC advertising, social media marketing, content marketing, and more. Custom packages can be tailored to meet the specific needs of a business.",
  },
  {
    title: "Can I change or cancel my plan at any time?",
    description:
      "Our pricing plans include a wide range of digital marketing services, including website design and development, SEO, PPC advertising, social media marketing, content marketing, and more. Custom packages can be tailored to meet the specific needs of a business.",
  },
  {
    title: "Do you offer a free trial or consultation?",
    description:
      "Our pricing plans include a wide range of digital marketing services, including website design and development, SEO, PPC advertising, social media marketing, content marketing, and more. Custom packages can be tailored to meet the specific needs of a business.",
  },
  {
    title: "How do you bill and invoice your clients?",
    description:
      "Our pricing plans include a wide range of digital marketing services, including website design and development, SEO, PPC advertising, social media marketing, content marketing, and more. Custom packages can be tailored to meet the specific needs of a business.",
  },
  {
    title: "Are your services guaranteed to deliver results?",
    description:
      "Our pricing plans include a wide range of digital marketing services, including website design and development, SEO, PPC advertising, social media marketing, content marketing, and more. Custom packages can be tailored to meet the specific needs of a business.",
  },
  {
    title: "Do you offer contract-based or monthly retainer-based pricing?",
    description:
      "Our pricing plans include a wide range of digital marketing services, including website design and development, SEO, PPC advertising, social media marketing, content marketing, and more. Custom packages can be tailored to meet the specific needs of a business.",
  },
];

export default function OurWorking() {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className="container py-10">
      <div className="text-center md:text-left space-y-24">
        <h1 className="text-[34px] font-semibold text-D_Grey   mb-8 text-center">
          Asked Questions
        </h1>
      </div>
      {steps.map((step, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={index}
            className={`px-8 mb-4 transition-all duration-300 ease-in-out rounded-[40px] border-[2px] border-b-6 transform  hover:scale-[1.03] hover:-translate-y-1 ${
              isOpen
                ? "bg-gradient-to-r from-green-400 to-blue-500"
                : " bg-gradient-to-r from-[#FFBA26]  to-[#FF9A0E]  hover:from-[#ea8e0d] hover:to-[#FFBA26] "
            }`}
          >
            <div
              className="flex justify-between items-center py-10 cursor-pointer"
              onClick={() => setActiveIndex(isOpen ? -1 : index)}
            >
              <div className="flex items-center gap-4">
                <h2 className="font-bold text-[18px]">{step.title}</h2>
              </div>

              <Image
                src={isOpen ? "/minus.png" : "/plus.png"}
                alt={isOpen ? "Collapse" : "Expand"}
                width={24}
                height={24}
                className={`w-8 h-8 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-[72px] border-t border-black pt-4 pb-6">
                <p>{step.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
