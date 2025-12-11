"use client";
import { useState } from "react";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const TradeLicenseForm = () => {
  const [isMember, setIsMember] = useState(false);

  const formik = useFormik({
    initialValues: {
      companyName: "Bondhon Limited",
      tradeLicense: "",
      natureOfBusiness: "",
      // Company Address
      companyCountry: "Bangladesh",
      companyDivision: "Dhaka",
      companyDistrict: "Dhaka",
      companyThanaUpazila: "",
      companyPostOffice: "",
      companyRoadAreaHouse: "",
      companyTelephone: "",
      companyFax: "",
      companyMobile: "",
      companyEmail: "",
      // Mailing Address
      sameAsCompanyAddress: false,
      mailingCountry: "Bangladesh",
      mailingDivision: "Dhaka",
      mailingDistrict: "Dhaka",
      mailingThanaUpazila: "",
      mailingPostOffice: "",
      mailingRoadAreaHouse: "",
      mailingTelephone: "",
      mailingFax: "",
      mailingMobile: "",
      mailingEmail: "",
      // Representative
      repName: "",
      repGender: "Male",
      repDesignation: "",
      repEmail: "",
      repMobile: "",
      repTIN: "",
      repNID: "",
      // Applicant
      sameAsRepresentative: false,
      appName: "",
      appGender: "Male",
      appDesignation: "",
      appEmail: "",
      appMobile: "",
      appTIN: "",
      appNID: "",
      // DCCI Member
      isDCCIMember: false,
    },
    validationSchema: Yup.object({
      tradeLicense: Yup.string().required(""),
      natureOfBusiness: Yup.string().required(""),
      companyMobile: Yup.string().required(""),
      companyEmail: Yup.string().email("Invalid email").required(""),
      repName: Yup.string().required("Representative name is required"),
      repEmail: Yup.string()
        .email("Invalid email")
        .required("Email is required"),
      repMobile: Yup.string().required("Mobile is required"),
      repNID: Yup.string().required("NID is required"),
      repTIN: Yup.string().required("TIN is required"),
      appName: Yup.string().required("Applicant name is required"),
      appEmail: Yup.string().email("Invalid email").required(""),
      appMobile: Yup.string().required(""),
      appNID: Yup.string().required("NID is required"),
      appTIN: Yup.string().required("TIN is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Values:", values);
      alert("Form submitted successfully! Check console for values.");
    },
  });

  const handleSameAsCompanyAddress = (e) => {
    const checked = e.target.checked;
    formik.setFieldValue("sameAsCompanyAddress", checked);

    if (checked) {
      formik.setFieldValue("mailingCountry", formik.values.companyCountry);
      formik.setFieldValue("mailingDivision", formik.values.companyDivision);
      formik.setFieldValue("mailingDistrict", formik.values.companyDistrict);
      formik.setFieldValue(
        "mailingThanaUpazila",
        formik.values.companyThanaUpazila
      );
      formik.setFieldValue(
        "mailingPostOffice",
        formik.values.companyPostOffice
      );
      formik.setFieldValue(
        "mailingRoadAreaHouse",
        formik.values.companyRoadAreaHouse
      );
      formik.setFieldValue("mailingTelephone", formik.values.companyTelephone);
      formik.setFieldValue("mailingFax", formik.values.companyFax);
      formik.setFieldValue("mailingMobile", formik.values.companyMobile);
      formik.setFieldValue("mailingEmail", formik.values.companyEmail);
    }
  };

  const handleSameAsRepresentative = (e) => {
    const checked = e.target.checked;
    formik.setFieldValue("sameAsRepresentative", checked);

    if (checked) {
      formik.setFieldValue("appName", formik.values.repName);
      formik.setFieldValue("appGender", formik.values.repGender);
      formik.setFieldValue("appDesignation", formik.values.repDesignation);
      formik.setFieldValue("appEmail", formik.values.repEmail);
      formik.setFieldValue("appMobile", formik.values.repMobile);
      formik.setFieldValue("appTIN", formik.values.repTIN);
      formik.setFieldValue("appNID", formik.values.repNID);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className=" bg-white rounded-lg p-8">
        <form onSubmit={formik.handleSubmit}>
          {/* Company/Firm Name Section */}
          <div className="mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company / Firm Name*
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formik.values.companyName}
                  onChange={formik.handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-100"
                  disabled
                />
                <p className="text-xs text-teal-600 mt-1">
                  Company Name as per Trade license
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Trade License*
                </label>
                <div className="flex ">
                  <input
                    type="text"
                    name="tradeLicense"
                    value={formik.values.tradeLicense}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Write number here"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <button
                    type="button"
                    className="px-6 py-2 bg-teal-600 text-white rounded-r-md hover:bg-teal-700 transition-colors cursor-pointer"
                  >
                    Attach
                  </button>
                </div>
                {formik.touched.tradeLicense && formik.errors.tradeLicense && (
                  <p className="text-xs text-red-500 mt-1">
                    {formik.errors.tradeLicense}
                  </p>
                )}
              </div>
              <div className="">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nature Of Business*
                </label>
                <input
                  type="text"
                  name="natureOfBusiness"
                  value={formik.values.natureOfBusiness}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                {formik.touched.natureOfBusiness &&
                  formik.errors.natureOfBusiness && (
                    <p className="text-xs text-red-500 mt-1">
                      {formik.errors.natureOfBusiness}
                    </p>
                  )}
              </div>
            </div>
          </div>

          {/* Company Address Section */}
          <div>
            {" "}
            <h3 className="text-base font-medium text-gray-800 mb-4">
              Company Address :{" "}
              <span className="text-teal-600 text-sm">
                Company Address as per Trade license
              </span>
            </h3>
            <div className="mb-8 grid grid-cols-2 gap-6">
              <div className="grid grid-cols-1  md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country*
                  </label>
                  <select
                    name="companyCountry"
                    value={formik.values.companyCountry}
                    onChange={formik.handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="Bangladesh">Bangladesh</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Division*
                  </label>
                  <select
                    name="companyDivision"
                    value={formik.values.companyDivision}
                    onChange={formik.handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="Dhaka">Dhaka</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    District*
                  </label>
                  <select
                    name="companyDistrict"
                    value={formik.values.companyDistrict}
                    onChange={formik.handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="Dhaka">Dhaka</option>
                  </select>
                </div>
                <div className="col-span-3">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telephone
                  </label>
                  <input
                    type="text"
                    name="companyTelephone"
                    value={formik.values.companyTelephone}
                    onChange={formik.handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="col-span-3">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fax
                  </label>
                  <input
                    type="text"
                    name="companyFax"
                    value={formik.values.companyFax}
                    onChange={formik.handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Thana/Upazila*
                  </label>
                  <select
                    name="companyThanaUpazila"
                    value={formik.values.companyThanaUpazila}
                    onChange={formik.handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Select Thana / Upazila</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Post Office*
                  </label>
                  <select
                    name="companyPostOffice"
                    value={formik.values.companyPostOffice}
                    onChange={formik.handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Select Post Office</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Road/Area/House*
                  </label>
                  <input
                    type="text"
                    name="companyRoadAreaHouse"
                    value={formik.values.companyRoadAreaHouse}
                    onChange={formik.handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="col-span-3">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile*
                  </label>
                  <input
                    type="text"
                    name="companyMobile"
                    value={formik.values.companyMobile}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />

                  {formik.touched.companyMobile &&
                    formik.errors.companyMobile && (
                      <p className="text-xs text-red-500 mt-1">
                        {formik.errors.companyMobile}
                      </p>
                    )}
                </div>
                <div className="col-span-3">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="companyEmail"
                    value={formik.values.companyEmail}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  {formik.touched.companyEmail &&
                    formik.errors.companyEmail && (
                      <p className="text-xs text-red-500 mt-1">
                        {formik.errors.companyEmail}
                      </p>
                    )}
                </div>
              </div>
            </div>
          </div>
          {/* Mailing Address Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-medium text-gray-800">
                Mailing Address :
              </h3>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formik.values.sameAsCompanyAddress}
                  onChange={handleSameAsCompanyAddress}
                  className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                />
                <span className="text-sm text-gray-700">
                  Same as Company Address
                </span>
              </label>
            </div>
            <div className="mb-8 grid grid-cols-2 gap-6">
              <div className="grid grid-cols-1  md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country*
                  </label>
                  <select
                    name="companyCountry"
                    value={formik.values.companyCountry}
                    onChange={formik.handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="Bangladesh">Bangladesh</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Division*
                  </label>
                  <select
                    name="companyDivision"
                    value={formik.values.companyDivision}
                    onChange={formik.handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="Dhaka">Dhaka</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    District*
                  </label>
                  <select
                    name="companyDistrict"
                    value={formik.values.companyDistrict}
                    onChange={formik.handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="Dhaka">Dhaka</option>
                  </select>
                </div>
                <div className="col-span-3">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telephone
                  </label>
                  <input
                    type="text"
                    name="companyTelephone"
                    value={formik.values.companyTelephone}
                    onChange={formik.handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="col-span-3">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fax
                  </label>
                  <input
                    type="text"
                    name="companyFax"
                    value={formik.values.companyFax}
                    onChange={formik.handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Thana/Upazila*
                  </label>
                  <select
                    name="companyThanaUpazila"
                    value={formik.values.companyThanaUpazila}
                    onChange={formik.handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Select Thana / Upazila</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Post Office*
                  </label>
                  <select
                    name="companyPostOffice"
                    value={formik.values.companyPostOffice}
                    onChange={formik.handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Select Post Office</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Road/Area/House*
                  </label>
                  <input
                    type="text"
                    name="companyRoadAreaHouse"
                    value={formik.values.companyRoadAreaHouse}
                    onChange={formik.handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="col-span-3">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile*
                  </label>
                  <input
                    type="text"
                    name="companyMobile"
                    value={formik.values.companyMobile}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />

                  {formik.touched.companyMobile &&
                    formik.errors.companyMobile && (
                      <p className="text-xs text-red-500 mt-1">
                        {formik.errors.companyMobile}
                      </p>
                    )}
                </div>
                <div className="col-span-3">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="companyEmail"
                    value={formik.values.companyEmail}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  {formik.touched.companyEmail &&
                    formik.errors.companyEmail && (
                      <p className="text-xs text-red-500 mt-1">
                        {formik.errors.companyEmail}
                      </p>
                    )}
                </div>
              </div>
            </div>
          </div>

          {/* Representative Section */}
          <div className="mb-8">
            <h3 className="text-base font-medium text-gray-800 mb-4">
              Representative :
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name*
                </label>
                <input
                  type="text"
                  name="repName"
                  value={formik.values.repName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                {formik.touched.repName && formik.errors.repName && (
                  <p className="text-xs text-red-500 mt-1">
                    {formik.errors.repName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender*
                </label>
                <select
                  name="repGender"
                  value={formik.values.repGender}
                  onChange={formik.handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Designation*
                </label>
                <select
                  name="repDesignation"
                  value={formik.values.repDesignation}
                  onChange={formik.handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="">Select Designation</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  name="repEmail"
                  value={formik.values.repEmail}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                {formik.touched.repEmail && formik.errors.repEmail && (
                  <p className="text-xs text-red-500 mt-1">
                    {formik.errors.repEmail}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile No.*
                </label>
                <input
                  type="text"
                  name="repMobile"
                  value={formik.values.repMobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                {formik.touched.repMobile && formik.errors.repMobile && (
                  <p className="text-xs text-red-500 mt-1">
                    {formik.errors.repMobile}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  NID Number*
                </label>
                <input
                  type="text"
                  name="repNID"
                  value={formik.values.repNID}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                {formik.touched.repNID && formik.errors.repNID && (
                  <p className="text-xs text-red-500 mt-1">
                    {formik.errors.repNID}
                  </p>
                )}
              </div>
              <div className="">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  TIN Number*
                </label>
                <input
                  type="text"
                  name="repTIN"
                  value={formik.values.repTIN}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                {formik.touched.repTIN && formik.errors.repTIN && (
                  <p className="text-xs text-red-500 mt-1">
                    {formik.errors.repTIN}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Applicant Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-medium text-gray-800">
                Applicant :
              </h3>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formik.values.sameAsRepresentative}
                  onChange={handleSameAsRepresentative}
                  className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                />
                <span className="text-sm text-gray-700">
                  Same as Representative
                </span>
              </label>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name*
                </label>
                <input
                  type="text"
                  name="repName"
                  value={formik.values.repName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                {formik.touched.repName && formik.errors.repName && (
                  <p className="text-xs text-red-500 mt-1">
                    {formik.errors.repName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender*
                </label>
                <select
                  name="repGender"
                  value={formik.values.repGender}
                  onChange={formik.handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Designation*
                </label>
                <select
                  name="repDesignation"
                  value={formik.values.repDesignation}
                  onChange={formik.handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="">Select Designation</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  name="repEmail"
                  value={formik.values.repEmail}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                {formik.touched.repEmail && formik.errors.repEmail && (
                  <p className="text-xs text-red-500 mt-1">
                    {formik.errors.repEmail}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile No.*
                </label>
                <input
                  type="text"
                  name="repMobile"
                  value={formik.values.repMobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                {formik.touched.repMobile && formik.errors.repMobile && (
                  <p className="text-xs text-red-500 mt-1">
                    {formik.errors.repMobile}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  NID Number*
                </label>
                <input
                  type="text"
                  name="repNID"
                  value={formik.values.repNID}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                {formik.touched.repNID && formik.errors.repNID && (
                  <p className="text-xs text-red-500 mt-1">
                    {formik.errors.repNID}
                  </p>
                )}
              </div>
              <div className="">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  TIN Number*
                </label>
                <input
                  type="text"
                  name="repTIN"
                  value={formik.values.repTIN}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                {formik.touched.repTIN && formik.errors.repTIN && (
                  <p className="text-xs text-red-500 mt-1">
                    {formik.errors.repTIN}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* DCCI Member Section */}
          <div className="mb-6 flex items-center gap-3">
            <label className="relative inline-flex items-center cursor-pointer select-none">
              <input
                type="checkbox"
                className="sr-only"
                checked={isMember}
                onChange={() => setIsMember(!isMember)}
              />
              <div
                className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                  isMember ? "bg-green-500" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  isMember ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
              <span className="ml-3 text-sm text-gray-700">
                Are you DCCI member?
              </span>
            </label>
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#666ee8] hover:bg-[#363fb9] text-white px-5 py-2 rounded cursor-pointer"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TradeLicenseForm;
