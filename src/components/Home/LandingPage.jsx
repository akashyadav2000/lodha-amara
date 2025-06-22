import React, { useState, useEffect } from "react";
import { IndianRupee } from "lucide-react";
import PopUp from "../PopUp/PopUp"; // Import PopUp Component

const banners = ["/banner-1.png", "/banner-2.png"]; // Image array for slideshow

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [enquiryType, setEnquiryType] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Open Popup Function
  const handleOpenPopup = (type) => {
    setEnquiryType(type);
    setIsModalOpen(true);
  };

  // Auto Slide Effect (Switch images every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidde">
      {/* Image Slider Container */}
      <div className="relative w-full pb-[60.25%]"> {/* 16:9 Aspect Ratio (9/16 = 0.5625 or 56.25%) */}
        {banners.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Banner ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
      </div>

      {/* Information Box (Responsive) */}
      <div className="w-full static px-0 lg:px-4 py:0 lg:py-2 bg-white rounded-lg  lg:absolute lg:left-4 lg:top-4 lg:w-63 mt-0">
        <p className="w-full text-sm pl-4 bg-primary text-white font-semibold py-2 lg:rounded-t-md block lg:absolute lg:top-0 lg:left-0 lg:pl-4">
          Booking Open
        </p>
        <div className="px-4 lg:px-0">
          {/* Booking Open Banner */}




          <h2 className="mt-3 lg:mt-10 text-2xl text-gray-900 font-bold">Lodha Amara</h2>

          <p className="text-sm text-gray-600">At Thane by Lodha Group</p>

          <div className="mt-2 flex">
            {/* Left-aligned Land Parcel and 40 Acres */}
            <div className="w-1/2">
              <p className="text-sm font-semibold text-primary">Land Parcel</p>
              <p className="text-sm text-gray-600">40 Acres</p>
            </div>

            {/* Center-aligned Floors and 40 Storeys */}
            <div className="w-1/2 text-center">
              <p className="text-sm font-semibold text-primary">Floors</p>
              <p className="text-sm text-gray-600">40 Storeys</p>
            </div>
          </div>


          <div className="mt-2">
            <p className="text-sm font-semibold text-primary">Possession</p>
            <p className="text-sm text-gray-600">Dec 2025</p>
          </div>

          <div className="relative gradient-bg p-3 rounded-md mt-4 shine-container overflow-hidden">
            <div className="shine-effect"></div>

            <ul className="space-y-1 relative z-1">
              <li className="text-sm text-primary">• Spot Booking Offers</li>
              <li className="text-sm text-primary">• Avail Festival Offers</li>
              <li className="text-sm text-primary">• Zero Stamp Duty Benefit</li>
            </ul>
          </div>

          <p className="pt-6 text-sm text-gray-600 text-center">Luxurious 1, 2 & 3 BHK Starts from</p>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center space-x-1">
              <IndianRupee size={18} className="text-xl text-gray-900 font-bold" />
              <p className="text-xl text-gray-900 font-bold">79 Lacs</p>
              <p className="text-sm text-gray-600 text-center">Onwards</p>
            </div>
          </div>

          <button
            className="bg-primary text-white w-full py-2 mt-2 mb-1 rounded-md text-sm font-medium cursor-pointer"
            onClick={() => handleOpenPopup("site-visit")}
          >
            Book A Free Site Visit
          </button>
        </div>
      </div>



      {/* PopUp Component */}
      <PopUp isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} enquiryType={enquiryType} />
    </div>
  );
};

export default LandingPage;