import React, { useState } from "react";
import Contact from "../Contact/Contact";
import { PhoneCall } from "lucide-react";

const RightContactSection = ({ openModal, enquiryType, onFormSubmit }) => {


  return (
    <div className="h-full bg-white mx-auto max-w-md p-4 overflow-y-auto">

      <h3 className="text-gray-900 font-semibold text-lg text-center">
        Get The Best Quote
      </h3>

      <button
        className="hidden lg:flex bg-primary text-white w-full items-left gap-2 justify-left px-3 py-3 mt-4 rounded-lg text-sm font-medium cursor-pointer "
        type="button"
      >
        <PhoneCall size={16} className="text-primary bg-white rounded-full h-5  w-5 p-1" />
        Call Us: +91 96190 95795
      </button>

      <Contact enquiryType={enquiryType} onFormSubmit={onFormSubmit} />



      {/* Site Visit Section */}
      <div className="hidden lg:flex items-center bg-gray-100 p-3 rounded-lg mt-7 shadow">
        <img src="/ride.webp" alt="Book a site visit" className="w-14 h-14 rounded-md mr-3" />
        <div>
          <h4 className="text-gray-900 font-medium text-sm">Book A Free Site Visit</h4>
          <p className="text-gray-500 text-xs mt-1">Schedule at your convenience</p>
        </div>
      </div>

      {/* Site Visit Button */}
      <button
        className="hidden lg:flex text-center justify-center bg-primary text-white w-full py-2 mt-4 rounded-lg text-sm font-medium cursor-pointer"
        onClick={() => openModal("site-visit")}
      >
        Book Free Site Visit
      </button>
    </div>
  );
};

export default RightContactSection;
