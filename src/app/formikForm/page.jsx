"use client";
import { useState } from "react";

export default function TradeLicenseForm() {
  const [activeSection, setActiveSection] = useState("consignee");

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? "" : section));
  };

  return (
    <div className="w-full bg-white min-h-screen   ">
      <div className="w-full   px-6   ">
        <div className=" bg-[#1A8E63] text-white px-6 py-4  mt-14 ">
          <p className="text-xl  font-semibold">
            Trade License Registration Form
          </p>
        </div>
        <div className="">
          <div className="bg-white  p-6">
            <div className="mb-5">
              <label className="block text-sm font-medium mb-1">
                Company / Firm Name <span className="text-red-500">*</span>
              </label>
              <input className="w-full border rounded-lg px-3 py-2  focus:ring-[#0B854A]" />
            </div>

            <p className="font-semibold text-[15px] mb-2">Company Address :</p>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Country <span className="text-red-500">*</span>
                </label>
                <select className="w-full border rounded-lg px-3 py-2 bg-white">
                  <option>Bangladesh</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Division <span className="text-red-500">*</span>
                </label>
                <select className="w-full border rounded-lg px-3 py-2 bg-white">
                  <option>Dhaka</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  District <span className="text-red-500">*</span>
                </label>
                <select className="w-full border rounded-lg px-3 py-2 bg-white">
                  <option>Dhaka</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Thana/Upazila <span className="text-red-500">*</span>
                </label>
                <select className="w-full border rounded-lg px-3 py-2 bg-white">
                  <option>Select Thana / Upazila</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Post Office <span className="text-red-500">*</span>
                </label>
                <select className="w-full border rounded-lg px-3 py-2 bg-white">
                  <option></option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Road/Area/House <span className="text-red-500">*</span>
                </label>
                <input className="w-full border rounded-lg px-3 py-2" />
              </div>
            </div>

            <p className="font-semibold text-[15px] mt-6 mb-2">
              Factory Address :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Country <span className="text-red-500">*</span>
                </label>
                <select className="w-full border rounded-lg px-3 py-2 bg-white">
                  <option>Bangladesh</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Division <span className="text-red-500">*</span>
                </label>
                <select className="w-full border rounded-lg px-3 py-2 bg-white">
                  <option>Dhaka</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  District <span className="text-red-500">*</span>
                </label>
                <select className="w-full border rounded-lg px-3 py-2 bg-white">
                  <option>Dhaka</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Thana/Upazila <span className="text-red-500">*</span>
                </label>
                <select className="w-full border rounded-lg px-3 py-2 bg-white">
                  <option>Select Thana / Upazila</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Post Office <span className="text-red-500">*</span>
                </label>
                <select className="w-full border rounded-lg px-3 py-2 bg-white">
                  <option></option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Road/Area/House <span className="text-red-500">*</span>
                </label>
                <input className="w-full border rounded-lg px-3 py-2" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
              <div>
                <p className="text-sm mb-1 text-gray-700">
                  Signature Image dimension should be in width=50px, height=50px
                  and JPEG/PNG*
                </p>
                <div
                  className="flex border
                "
                >
                  <input type="file" className=" px-3 py-2  w-full" />
                  <button className=" px-4 py-2  bg-[#EDEDED] border-l cursor-pointer">
                    Attach
                  </button>
                </div>
              </div>

              <div>
                <p className="text-sm mb-1 text-gray-700">
                  Seal Image dimension should be in width=100px, height=50px and
                  JPEG/PNG*
                </p>
                <div className="flex border  ">
                  <input type="file" className=" px-3 py-2  w-full" />
                  <button className=" px-4 py-2  bg-[#EDEDED] border-l cursor-pointer">
                    Attach
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  CONSIGNEE INFO */}
        <div className="mt-10">
          <div
            className="bg-[#1A8E63] text-white px-4 py-3  flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("consignee")}
          >
            <h3 className="font-medium">Consignee Info</h3>
            <span className="text-xl">
              {activeSection === "consignee" ? "−" : "+"}
            </span>
          </div>

          {activeSection === "consignee" && (
            <div className="bg-white p-6  ">
              {/* Company / Firm Name */}
              <div className="mb-5">
                <label className="block mb-1 text-sm font-medium">
                  Company / Firm Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#1A8E63]"
                />
              </div>

              {/* Company Address */}
              <div className="mb-5">
                <label className="block mb-1 text-sm font-medium">
                  Company Address <span className="text-red-500">*</span>
                </label>
                <textarea className="w-full border rounded-lg px-3 py-2 h-20 focus:ring-2 focus:ring-[#1A8E63]"></textarea>
              </div>

              {/* Destination Address */}
              <div className="mb-5">
                <label className="block mb-1 text-sm font-medium">
                  Destination Address <span className="text-red-500">*</span>
                </label>
                <textarea className="w-full border rounded-lg px-3 py-2 h-20 focus:ring-2 focus:ring-[#1A8E63]"></textarea>
              </div>

              {/* Particular of Transport */}
              <div className="mb-5">
                <label className="block mb-1 text-sm font-medium">
                  Particular of Transport (Optional Declaration)
                </label>
                <textarea className="w-full border rounded-lg px-3 py-2 h-20 focus:ring-2 focus:ring-[#1A8E63]"></textarea>
              </div>

              {/* Currency Dropdown */}
              <div className="mb-5">
                <label className="block mb-1 text-sm font-medium">
                  Currency <span className="text-red-500">*</span>
                </label>
                <select className="w-full border rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-[#1A8E63]">
                  <option value="">Select Currency</option>
                  <option>USD</option>
                  <option>EUR</option>
                  <option>BDT</option>
                  <option>INR</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/*  DESCRIPTION OF GOODS */}
        <div className="mt-10">
          <div
            className="bg-[#1A8E63] text-white px-4 py-3  flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("goods")}
          >
            <h3 className="font-medium">Description of Goods</h3>
            <span className="text-xl">
              {activeSection === "goods" ? "−" : "+"}
            </span>
          </div>

          {activeSection === "goods" && (
            <div className="bg-white p-6  ">
              {/* GOODS INPUTS GRID */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
                {/* Marks */}
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    Marks <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#1A8E63]"
                  />
                </div>

                {/* Quantity */}
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    Quantity <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#1A8E63]"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#1A8E63]"
                  />
                </div>

                {/* HS Code */}
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    H.S Code <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full border rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-[#1A8E63]">
                    <option value="">Select HS Code</option>
                    <option>090210</option>
                    <option>300490</option>
                  </select>
                </div>

                {/* Weight */}
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    Weight (E.g.-1kg) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="1kg"
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#1A8E63]"
                  />
                </div>

                {/* Value */}
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    Value <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    className="  border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#1A8E63]"
                  />
                </div>
              </div>

              {/* Add More Goods */}
              <div className="w-full flex justify-end mt-6">
                <button className="bg-[#1A8E63] text-white px-5 py-2 rounded-lg shadow hover:bg-[#157A55]">
                  Add More Goods
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-end pt-10 pr-7 pb-10">
        <button
          type="submit"
          className="bg-[#6dda6d] hover:bg-[#44a744] text-white px-6 py-2.5 rounded-full cursor-pointer"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
}
