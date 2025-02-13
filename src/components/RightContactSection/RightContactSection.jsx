import React, { useState } from "react";
import Contact from "../Contact/Contact";

const RightContactSection = ({ openModal, enquiryType, onFormSubmit }) => {


  return (
    <div className="h-full bg-white p-4 shadow-lg overflow-y-auto">


      <Contact enquiryType={enquiryType} onFormSubmit={onFormSubmit} />



      {/* Site Visit Section */}
      <div className="flex items-center bg-gray-100 p-3 rounded-lg mt-7 shadow">
        <img src="/ride.webp" alt="Book a site visit" className="w-14 h-14 rounded-md mr-3" />
        <div>
          <h4 className="text-gray-900 font-medium text-sm">Book A Free Site Visit</h4>
          <p className="text-gray-500 text-xs mt-1">Schedule at your convenience</p>
        </div>
      </div>

      {/* Site Visit Button */}
      <button
        className="bg-primary text-white w-full py-2 mt-4 rounded-lg text-sm font-medium cursor-pointer"
        onClick={() => openModal("site-visit")}
      >
        Book Free Site Visit
      </button>
    </div>
  );
};

export default RightContactSection;
