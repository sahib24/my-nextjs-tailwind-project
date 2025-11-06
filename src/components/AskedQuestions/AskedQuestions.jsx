"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="container py-10 ">
      <div className="text-center md:text-left space-y-24">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-[34px] font-semibold text-D_Grey mb-8 text-center">
            Asked Questions
          </h1>
        </motion.div>
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => {
          const isOpen = activeIndex === index;

          const direction = index % 2 === 0 ? -50 : 50;

          return (
            <motion.div
              key={index}
              initial={{ x: direction, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.02,
                x: direction > 0 ? -3 : 3,
              }}
              className={`px-5 mb-4 transition-all duration-300 ease-in-out rounded-[40px] border-[2px] border-b-6 cursor-pointer ${
                isOpen
                  ? "bg-gradient-to-r from-green-400 to-blue-500 shadow-lg"
                  : "bg-gradient-to-r from-[#FFBA26] to-[#FF9A0E] hover:from-[#ea8e0d] hover:to-[#FFBA26] shadow-md"
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <motion.div
                className="flex justify-between items-center py-10"
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4 max-w-[350px]">
                  <motion.h2
                    className="font-bold text-[18px] text-white"
                    whileHover={{ x: direction > 0 ? -5 : 5 }}
                  >
                    {step.title}
                  </motion.h2>
                </div>

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={isOpen ? "/minus.png" : "/plus.png"}
                    alt={isOpen ? "Collapse" : "Expand"}
                    width={32}
                    height={32}
                    className="w-6 h-6"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={false}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="overflow-hidden"
              >
                <motion.div
                  className="pl-[72px] border-t border-white pt-4 pb-6"
                  initial={{ x: direction }}
                  animate={{ x: isOpen ? 0 : direction }}
                  transition={{ delay: isOpen ? 0.1 : 0 }}
                >
                  <p className="text-white text-[16px] leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
