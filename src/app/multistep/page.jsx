"use client";

import { useState } from "react";
import Tabs from "@/components/Tab/Tab";

export default function MultiStepFormPage() {
  const [currentTab, setCurrentTab] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    country: "",
    division: "",
    district: "",
    thana: "",
    postOffice: "",
    address: "",
    // Factory Address
    factoryCountry: "",
    factoryDivision: "",
    factoryDistrict: "",
    factoryThana: "",
    factoryPostOffice: "",
    factoryAddress: "",
    // Consignee Info
    consigneeName: "",
    consigneeAddress: "",
    // Goods Description
    goodsDescription: "",
  });

  // ট্যাব পরিবর্তন
  const handleTabChange = (tabNumber) => {
    setCurrentTab(tabNumber);
  };

  // ফর্ম ফিল্ড আপডেট
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Save & Continue বাটনে ক্লিক করলে
  const handleSaveContinue = () => {
    if (currentTab < 5) {
      setCurrentTab(currentTab + 1);
    }
  };

  // Previous বাটনে ক্লিক করলে
  const handlePrevious = () => {
    if (currentTab > 1) {
      setCurrentTab(currentTab - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 ">
      <Tabs currentTab={currentTab} onTabChange={handleTabChange} />

      {/* মেইন ফর্ম এরিয়া */}
      <div className="max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-lg shadow">
        {/* ট্যাব ১: CO Information */}
        {currentTab === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              1. CO Information
            </h2>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">
                Consignor Info
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-2">
                    Company / Firm Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Bootstrap Limited"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Bangladesh"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">
                Company Address
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-2">Division</label>
                  <input
                    type="text"
                    name="division"
                    value={formData.division}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-3 rounded"
                    placeholder="Dhaka"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">District</label>
                  <input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-3 rounded"
                    placeholder="Dhaka"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">
                    Thana/Upazila
                  </label>
                  <input
                    type="text"
                    name="thana"
                    value={formData.thana}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-3 rounded"
                    placeholder="Select Thana / Up..."
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Post Office</label>
                  <input
                    type="text"
                    name="postOffice"
                    value={formData.postOffice}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-3 rounded"
                    placeholder="Same as Company Address"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block font-medium mb-2">
                    Street/Area/House
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-3 rounded"
                    placeholder="Enter full address"
                  />
                </div>
              </div>
            </div>

            {/* Factory Address - একইভাবে তৈরি করুন */}
          </div>
        )}

        {/* ট্যাব ২: Document Attachment */}
        {currentTab === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              2. Document Attachment
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-700">
                  Signature Image
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Signature Image dimension should be in width=50px, height=50px
                  and JPEG PNG*
                </p>
                <div className="border-2 border-dashed border-gray-300 p-8 text-center rounded-lg hover:border-blue-400 transition-colors">
                  <p className="text-gray-600">Choose file... Attach</p>
                  <button className="mt-4 px-6 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200">
                    Browse Files
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-700">
                  Seal Image
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Seal image dimension should be in width=100px, height=50px and
                  JPEG PNG*
                </p>
                <div className="border-2 border-dashed border-gray-300 p-8 text-center rounded-lg hover:border-blue-400 transition-colors">
                  <p className="text-gray-600">Choose file... Attach</p>
                  <button className="mt-4 px-6 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200">
                    Browse Files
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ট্যাব ৩: CO Quantity */}
        {currentTab === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              3. CO Quantity
            </h2>
            <p className="text-gray-600 mb-6">
              Quantity সম্পর্কিত ফর্ম ফিল্ড এখানে যোগ করুন।
            </p>
            <div className="space-y-4">
              <div>
                <label className="block font-medium mb-2">Total Quantity</label>
                <input
                  type="number"
                  className="w-full border border-gray-300 p-3 rounded"
                  placeholder="Enter quantity"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Unit</label>
                <select className="w-full border border-gray-300 p-3 rounded">
                  <option>Pieces</option>
                  <option>Kg</option>
                  <option>Liter</option>
                  <option>Meter</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* ট্যাব ৪: Preview */}
        {currentTab === 4 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              4. Preview
            </h2>
            <div className="border border-gray-200 rounded-lg p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-700">Company Name:</h3>
                  <p className="text-gray-800">
                    {formData.companyName || "Not provided"}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Country:</h3>
                  <p className="text-gray-800">
                    {formData.country || "Not provided"}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Division:</h3>
                  <p className="text-gray-800">
                    {formData.division || "Not provided"}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">District:</h3>
                  <p className="text-gray-800">
                    {formData.district || "Not provided"}
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t">
                <h3 className="font-semibold text-lg text-gray-700 mb-2">
                  Summary
                </h3>
                <p className="text-gray-600">
                  All information has been collected. Please review before
                  payment.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ট্যাব ৫: Payment */}
        {currentTab === 5 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              5. Payment
            </h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-4">Payment Method</h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input type="radio" name="payment" className="h-5 w-5" />
                    <span>Credit Card</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="radio" name="payment" className="h-5 w-5" />
                    <span>Bank Transfer</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="radio" name="payment" className="h-5 w-5" />
                    <span>bKash / Mobile Banking</span>
                  </label>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Total Amount</h3>
                <p className="text-3xl font-bold text-blue-600">৳ 5,000.00</p>
              </div>
            </div>
          </div>
        )}

        {/* নেভিগেশন বাটন */}
        <div className="flex justify-between mt-12 pt-6 border-t">
          {currentTab > 1 && (
            <button
              onClick={handlePrevious}
              className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition-colors"
            >
              ← Previous
            </button>
          )}
          <button
            onClick={handleSaveContinue}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors ml-auto"
          >
            {currentTab === 5 ? "Submit & Finish" : "Save & Continue →"}
          </button>
        </div>
      </div>

      {/* ফর্ম ডেটা দেখানোর জন্য (ডিবাগিং) */}
      {/* <div className="mt-8 max-w-4xl mx-auto">
        <details className="bg-gray-50 p-4 rounded-lg">
          <summary className="font-medium text-gray-700 cursor-pointer">
            Debug: Current Form Data
          </summary>
          <pre className="mt-2 text-sm text-gray-600 overflow-auto">
            {JSON.stringify(formData, null, 2)}
          </pre>
          <p className="mt-2 text-sm text-gray-500">
            Current Tab: {currentTab}
          </p>
        </details>
      </div> */}
    </div>
  );
}
