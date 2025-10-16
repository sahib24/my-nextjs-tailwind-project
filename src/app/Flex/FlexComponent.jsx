"use client";
import React from "react";

export default function FlexPage() {
  return (
    <div className="flex flex-col items-center gap-6 pt-20  mb-10">
      <div className="flex flex-row gap-6 w-full px-10">
        <div className="bg-blue-300 px-4 py-4 rounded-lg shadow-lg hover:scale-105 cursor-pointer grow h-[220px]">
          <h2 className="text-2xl font-bold text-center text-white">
            Section 1
          </h2>
        </div>

        <div className="bg-green-300 px-4 py-4 rounded-lg shadow-lg hover:scale-105 cursor-pointer flex-none h-[180px]">
          <h2 className="text-2xl font-bold text-center text-white">
            Section 2
          </h2>
        </div>

        <div className="bg-yellow-300 px-4 py-4 rounded-lg shadow-lg hover:scale-105 cursor-pointer grow h-[200px]">
          <h2 className="text-2xl font-bold text-center text-white">
            Section 3
          </h2>
        </div>
      </div>

      <div className="flex flex-row gap-6 w-full px-10">
        <div className="bg-red-300 p-8 rounded-lg shadow-lg hover:scale-105 cursor-pointer basis-64 h-[250px]">
          <h2 className="text-2xl font-bold text-center text-white">
            Section 4
          </h2>
        </div>

        <div className="bg-purple-300 p-8 rounded-lg shadow-lg hover:scale-105 cursor-pointer basis-128 h-[210px]">
          <h2 className="text-2xl font-bold text-center text-white">
            Section 5
          </h2>
        </div>

        <div className="bg-pink-300 p-8 rounded-lg shadow-lg hover:scale-105 cursor-pointer basis-256 h-[230px]">
          <h2 className="text-2xl font-bold text-center text-white">
            Section 6
          </h2>
        </div>
      </div>

      <div className="flex flex-row gap-6 w-full px-10">
        <div className="bg-indigo-300 p-8 rounded-lg shadow-lg hover:scale-105 cursor-pointer flex-none h-[190px]">
          <h2 className="text-2xl font-bold text-center text-white">
            Section 7
          </h2>
        </div>

        <div className="bg-teal-300 p-8 rounded-lg shadow-lg hover:scale-95 cursor-pointer grow h-[240px]">
          <h2 className="text-2xl font-bold text-center text-white">
            Section 8
          </h2>
        </div>

        <div className="bg-gray-300 p-8 rounded-lg shadow-lg hover:scale-105 cursor-pointer flex-none h-[200px]">
          <h2 className="text-2xl font-bold text-center text-white">
            Section 9
          </h2>
        </div>
      </div>

      <div className="flex flex-row gap-6 w-full px-10">
        <div className="bg-red-500 py-10 rounded-lg shadow-lg hover:scale-105 cursor-pointer flex-none basis-128 h-[260px]">
          <h2 className="text-2xl font-bold text-center text-white">
            Section 10
          </h2>
        </div>

        <div className="bg-yellow-500 py-10 rounded-lg shadow-lg hover:scale-105 cursor-pointer basis-512 h-[280px]">
          <h2 className="text-2xl font-bold text-center text-white">
            Section 11
          </h2>
        </div>

        <div className="bg-green-700 p-8 rounded-lg shadow-lg hover:scale-105 cursor-pointer basis-32 h-[230px]">
          <h2 className="text-2xl font-bold text-center text-white">
            Section 12
          </h2>
        </div>
      </div>

      <div className="flex flex-row gap-6 w-full px-10">
        <div className="bg-red-400 py-10 rounded-lg shadow-lg hover:scale-105 cursor-pointer flex-none basis-64 h-[250px]">
          <h2 className="text-2xl font-bold text-center text-white">
            Section 13
          </h2>
        </div>

        <div className="bg-yellow-400 py-10 rounded-lg shadow-lg hover:scale-105 cursor-pointer basis-128 h-[210px]">
          <h2 className="text-2xl font-bold text-center text-white">
            Section 14
          </h2>
        </div>

        <div className="bg-green-400 p-8 rounded-lg shadow-lg hover:scale-105 cursor-pointer basis-32 h-[220px]">
          <h2 className="text-2xl font-bold text-center text-white">
            Section 15
          </h2>
        </div>

        <div className="bg-red-400 py-10 rounded-lg shadow-lg hover:scale-105 cursor-pointer flex-none basis-64 h-[240px]">
          <h2 className="text-2xl font-bold text-center text-white">
            Section 16
          </h2>
        </div>

        <div className="bg-yellow-400 p-8 rounded-lg shadow-lg hover:scale-105 cursor-pointer basis-16 h-[180px]">
          <h2 className="text-2xl font-bold text-center text-white">
            Section 17
          </h2>
        </div>
      </div>

      <div className="flex flex-row gap-6 w-full px-10">
        <div className="bg-blue-300 px-4 py-8 rounded-lg shadow-lg hover:scale-105 cursor-pointer grow h-[210px]">
          <h2 className="text-2xl font-bold text-center text-white">
            Section 18
          </h2>
        </div>

        <div className="bg-green-300 px-4 py-8 rounded-lg shadow-lg hover:scale-105 cursor-pointer flex-none h-[230px]">
          <h2 className="text-2xl font-bold text-center text-white">
            Section 19
          </h2>
        </div>

        <div className="bg-yellow-300 px-4 py-8 rounded-lg shadow-lg hover:scale-105 cursor-pointer grow h-[240px]">
          <h2 className="text-2xl font-bold text-center text-white">
            Section 20
          </h2>
        </div>
      </div>
    </div>
  );
}
