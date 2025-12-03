"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const labelColorClass = "text-[#D35400]"; // screenshot color

// Input wrapper with floating label and error message
const InputWrapper = ({
  name,
  label,
  as = "input",
  type = "text",
  ...rest
}) => (
  <div className="relative mb-2">
    {as === "select" ? (
      <Field
        as="select"
        name={name}
        className={`peer block w-full border border-gray-300 rounded-md px-3 py-2 pt-4 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 transition`}
        {...rest}
      />
    ) : (
      <Field
        name={name}
        type={type}
        className={`peer block w-full border border-gray-300 rounded-md px-3 py-2 pt-4 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 transition`}
        {...rest}
      />
    )}

    <label
      htmlFor={name}
      className={`${labelColorClass} absolute left-3 -top-2 px-1 text-xs font-semibold bg-white`}
    >
      {label}
    </label>

    <ErrorMessage name={name}>
      {(msg) => <div className="text-sm mt-1 text-red-600">{msg}</div>}
    </ErrorMessage>
  </div>
);

export default function DcciForm() {
  const initialValues = {
    companyName: "",
    tradeLicense: "",
    natureOfBusiness: "",
    country: "Bangladesh",
    division: "Dhaka",
    district: "Dhaka",
    thana: "",
    postOffice: "",
    road: "",
    telephone: "",
    mobile: "",
    fax: "",
    email: "",
    m_country: "Bangladesh",
    m_division: "Dhaka",
    m_district: "Dhaka",
    m_thana: "",
    m_postOffice: "",
    m_road: "",
    m_telephone: "",
    m_mobile: "",
    m_fax: "",
    m_email: "",
    sameAsCompany: false,
    rep_name: "",
    rep_gender: "Male",
    rep_mobile: "",
    rep_designation: "",
    rep_email: "",
    rep_tin: "",
    rep_nid: "",
    app_name: "",
    app_gender: "Male",
    app_mobile: "",
    app_designation: "",
    app_email: "",
    app_tin: "",
    app_nid: "",
    sameAsRepresentative: false,
    isMember: false,
  };

  const schema = Yup.object().shape({
    companyName: Yup.string().required("Company Name required"),
    tradeLicense: Yup.string().required("Trade License required"),
    natureOfBusiness: Yup.string().required("Nature Of Business required"),
    mobile: Yup.string().required("Mobile required"),
    email: Yup.string().email("Invalid email").required("Email required"),
    rep_name: Yup.string().required("Representative name required"),
    rep_mobile: Yup.string().required("Representative mobile required"),
    app_name: Yup.string().required("Applicant name required"),
    app_mobile: Yup.string().required("Applicant mobile required"),
  });

  return (
    <div className="w-full bg-white p-6">
      <h2 className="text-xl font-semibold mb-6">Company Information</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          console.log("FORM SUBMIT:", values);
          actions.setSubmitting(false);
          alert("Form values logged to console");
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            {/* Company Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col">
                <InputWrapper name="companyName" label="Company / Firm Name*" />
                <div className="text-[11px] mt-1 text-gray-500">
                  Company Name as per Trade license
                </div>
              </div>
              <div className="flex flex-col">
                <InputWrapper name="tradeLicense" label="Trade License*" />
                <div className="mt-2 flex items-center gap-2">
                  <button
                    type="button"
                    className="bg-green-700 text-white px-3 py-2 rounded"
                  >
                    Attach
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <InputWrapper
                  name="natureOfBusiness"
                  label="Nature Of Business*"
                />
              </div>
            </div>

            {/* Company Address */}
            <div className="mb-10">
              <div className="text-gray-700 font-semibold block mb-3">
                Company Address :
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 mb-4">
                <InputWrapper name="country" label="Country*" as="select">
                  <option value="Bangladesh">Bangladesh</option>
                </InputWrapper>
                <InputWrapper name="division" label="Division*" as="select">
                  <option value="Dhaka">Dhaka</option>
                </InputWrapper>
                <InputWrapper name="district" label="District*" as="select">
                  <option value="Dhaka">Dhaka</option>
                </InputWrapper>

                <InputWrapper
                  name="thana"
                  label="Thana / Upazila* "
                  as="select"
                >
                  <option value="">Select Thana / Upazila</option>
                </InputWrapper>
                <InputWrapper
                  name="postOffice"
                  label="Post Office*"
                  as="select"
                >
                  <option value="">Select Post Office</option>
                </InputWrapper>
                <div className="">
                  <InputWrapper name="road" label="Road/Area/House*" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <InputWrapper name="telephone" label="Telephone" />
                <div>
                  <InputWrapper name="mobile" label="Mobile*" />
                  <div className="text-[11px] text-gray-500">
                    Use comma separated for multiple mobile.
                  </div>
                </div>
                <div className="">
                  <InputWrapper name="email" label="Email*" />
                </div>
                <div>
                  <InputWrapper name="fax" label="Fax" />
                  <div className="text-[11px] text-gray-500">
                    Use comma separated for multiple fax.
                  </div>
                </div>
              </div>

              {/* Mailing Address */}
              <div className="mt-6">
                <div className="text-gray-700 font-semibold block mb-3">
                  Mailing Address :
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 mb-4">
                  <InputWrapper name="country" label="Country*" as="select">
                    <option value="Bangladesh">Bangladesh</option>
                  </InputWrapper>
                  <InputWrapper name="division" label="Division*" as="select">
                    <option value="Dhaka">Dhaka</option>
                  </InputWrapper>
                  <InputWrapper name="district" label="District*" as="select">
                    <option value="Dhaka">Dhaka</option>
                  </InputWrapper>
                  <InputWrapper
                    name="thana"
                    label="Thana / Upazila* "
                    as="select"
                  >
                    <option value="">Select Thana / Upazila</option>
                  </InputWrapper>
                  <InputWrapper
                    name="postOffice"
                    label="Post Office*"
                    as="select"
                  >
                    <option value="">Select Post Office</option>
                  </InputWrapper>
                  <div className="">
                    <InputWrapper name="road" label="Road/Area/House*" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <InputWrapper name="telephone" label="Telephone" />
                  <div>
                    <InputWrapper name="mobile" label="Mobile*" />
                    <div className="text-[11px] text-gray-500">
                      Use comma separated for multiple mobile.
                    </div>
                  </div>
                  <div className="">
                    <InputWrapper name="email" label="Email*" />
                  </div>
                  <div>
                    <InputWrapper name="fax" label="Fax" />
                    <div className="text-[11px] text-gray-500">
                      Use comma separated for multiple fax.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Representative */}
            <div className="mb-10">
              <h3 className="text-lg font-semibold mb-3">Representative :</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <InputWrapper name="rep_name" label="Name*" />
                <InputWrapper name="rep_gender" label="Gender*" as="select">
                  <option>Male</option>
                  <option>Female</option>
                </InputWrapper>

                <InputWrapper
                  name="rep_designation"
                  label="Designation*"
                  as="select"
                >
                  <option>Select Designation</option>
                </InputWrapper>
                <InputWrapper name="rep_mobile" label="Email*" />
                <InputWrapper name="rep_mobile" label="Mobile No.*" />
                <InputWrapper name="rep_mobile" label="NID No.*" />
                <InputWrapper name="rep_mobile" label="TIN No.*" />
              </div>
            </div>

            {/* Applicant */}
            <div className="mb-10">
              <h3 className="text-lg font-semibold mb-3">Applicant :</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <InputWrapper name="rep_name" label="Name*" />
                <InputWrapper name="rep_gender" label="Gender*" as="select">
                  <option>Male</option>
                  <option>Female</option>
                </InputWrapper>

                <InputWrapper
                  name="rep_designation"
                  label="Designation*"
                  as="select"
                >
                  <option>Select Designation</option>
                </InputWrapper>
                <InputWrapper name="rep_mobile" label="Email*" />
                <InputWrapper name="rep_mobile" label="Mobile No.*" />
                <InputWrapper name="rep_mobile" label="NID No.*" />
                <InputWrapper name="rep_mobile" label="TIN No.*" />
              </div>
              <div className="mt-3">
                <label className="inline-flex items-center gap-2 select-none">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4"
                    checked={values.sameAsRepresentative}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      setFieldValue("sameAsRepresentative", checked);
                      if (checked) {
                        setFieldValue("app_name", values.rep_name);
                        setFieldValue("app_gender", values.rep_gender);
                        setFieldValue("app_mobile", values.rep_mobile);
                        setFieldValue(
                          "app_designation",
                          values.rep_designation
                        );
                        setFieldValue("app_email", values.rep_email);
                        setFieldValue("app_tin", values.rep_tin);
                        setFieldValue("app_nid", values.rep_nid);
                      }
                    }}
                  />
                  <span className="text-sm text-gray-700">
                    Same as Representative
                  </span>
                </label>
              </div>
            </div>

            {/* DCCI member */}
            <div className="mb-6 flex items-center gap-3">
              <label className="inline-flex items-center gap-2 select-none">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5"
                  checked={values.isMember}
                  onChange={(e) => setFieldValue("isMember", e.target.checked)}
                />
                <span className="text-sm text-gray-700">
                  Are you DCCI member?
                </span>
              </label>
            </div>

            {/* Submit */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2 rounded shadow"
              >
                Apply
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
