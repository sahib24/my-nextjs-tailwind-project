"use client";
import React from "react";
import { motion } from "framer-motion";

const CardsPage = () => {
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

  return (
    <div className="container mx-auto py-8">
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, type: "just" }}
      >
        <h1 className="text-[40px] font-bold text-center mb-3 ">Card Layout</h1>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 scale-95">
        {cards.map((card, index) => (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              type: "spring",
              damping: 15,
            }}
            key={index}
            className="bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-50 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardsPage;
