"use client";

import { useState } from "react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-teal-300">
      <div
        className={`${
          sidebarOpen ? "block" : "hidden"
        } md:block w-64 bg-blue-800 text-white p-4`}
      >
        <div className="text-2xl font-semibold mb-8">Dashboard</div>
        <ul>
          <li className="mb-6">
            <a href="#">Home</a>
          </li>
          <li className="mb-6">
            <a href="#">Settings</a>
          </li>
          <li className="mb-6">
            <a href="#">Profile</a>
          </li>
          <li className="mb-6">
            <a href="#">Messages</a>
          </li>
        </ul>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-md p-4 flex items-center justify-between">
          <button
            className="text-blue-800 md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 border border-gray-300 rounded-full"
            />
          </div>
        </header>

        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Card 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                a interdum orci.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Card 2</h3>
              <p>
                Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                Sed nisi.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Card 3</h3>
              <p>
                Quisque volutpat condimentum velit. Class aptent taciti sociosqu
                ad litora torquent.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
