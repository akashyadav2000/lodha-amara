import { Car, Phone, CircleX, IndianRupee, PhoneCall } from "lucide-react";
import React, { useEffect } from "react";
import Contact from "../Contact/Contact";

const PopUp = ({ isOpen, onClose, enquiryType }) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Dynamic Content Based on enquiryType
  const getPopupContent = () => {
    switch (enquiryType) {
      case "download-brochure":
        return { title: "Download Brochure", description: "Download the brochure to learn more about Lodha Amara", buttonText: "Download" };
      case "site-visit":
        return { title: "Book A Free Site Visit", description: "Schedule at your convenience", buttonText: "Schedule Visit", icon: <Car className="h-6 w-6 flex-shrink-0" /> };
      case "price-breakup":
      case "get-price-details":
        return { title: "Price Breakup", description: "Request complete pricing information", buttonText: "Request Now" };
      case "enquire-1bhk":
        return { title: "Enquire About 1 BHK-446 Sq.ft.", description: "Explore the layout of Lodha Amara", buttonText: "Enquire Now" };
      case "enquire-2bhk-618":
        return { title: "Enquire About 2 BHK-618 Sq.ft.", description: "Explore the layout of Lodha Amara", buttonText: "Enquire Now" };
      case "enquire-2bhk-722":
        return { title: "Enquire About 2 BHK-722 Sq.ft.", description: "Explore the layout of Lodha Amara", buttonText: "Enquire Now" };
      case "enquire-3bhk":
        return { title: "Enquire About 3 BHK-958 Sq.ft.", description: "Explore the layout of Lodha Amara", buttonText: "Enquire Now" };
      case "download-amenities":
        return { title: "Download Amenities", description: "Download the amenities of Lodha Amara", buttonText: "Download" };
      case "download-gallery":
        return { title: "Download Gallery", description: "Download the gallery of Lodha Amara", buttonText: "Download" };
      case "get-location":
        return { title: "Get Location", description: "Get detailed information about this location", buttonText: "View Location" };
      case "request-virtual-tour":
        return { title: "Request Virtual Tour", description: "Schedule at your convenience", buttonText: "Request Now" };
      default:
        return { title: "Get The Best Quote", description: "Get the best quote for your dream home", buttonText: "Submit", icon: <Phone className="h-6 w-6 flex-shrink-0" /> };
    }
  };


  const { title, description, buttonText, icon } = getPopupContent();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-5">
      <div className="bg-white w-220 flex rounded-lg shadow-lg overflow-hidden border-[1px] green-border">

        {/* Left Section */}
        <div className="hidden md:flex w-1/2 relative flex-col text-white p-6 bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black/80"
          style={{ backgroundImage: "url('/banner-1.png')" }}>

          {/* Lodha Logo */}
          <img src="/logo.svg" alt="Lodha Preferred Partner" className="h-15 w-45 p-2 mb-8 bg-white rounded-md relative" />

          {/* Promise Section */}
          <div className="w-full text-left space-y-6 relative">
            <h3 className="font-semibold text-xl text-white">We Promise</h3>

            {/* Instant Call Back */}
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 flex-shrink-0" />
              <div className="flex flex-col">
                <h4 className="font-medium text-white">Instant Call Back</h4>
                <p className="text-sm text-white/70">Get a call from our experts</p>
              </div>
            </div>

            {/* Free Site Visits */}
            <div className="flex items-center gap-4">
              <Car className="h-6 w-6 flex-shrink-0" />
              <div className="flex flex-col">
                <h4 className="font-medium text-white">Free Site Visit</h4>
                <p className="text-sm text-white/70">Schedule at your convenience</p>
              </div>
            </div>

            {/* Unmatched Price */}
            <div className="flex items-center gap-4">
              <IndianRupee className="h-6 w-6 flex-shrink-0" />
              <div className="flex flex-col">
                <h4 className="font-medium text-white">Unmatched Price</h4>
                <p className="text-sm text-white/70">Best offers guaranteed</p>
              </div>
            </div>
          </div>

          {/* Call Us Section - Positioned at Bottom */}
          <div className="mt-auto pt-6 relative">
            <p className="text-sm text-white/70">Call Us:</p>
            <p className="text-lg text-white font-semibold">+91 96190 95795</p>
          </div>

        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-6 bg-[#e5fff6] relative">
          {/* Close Button */}
          <button onClick={onClose} className="absolute top-3 right-3 text-gray-600 text-2xl">
            <CircleX className="h-8 w-8" />
          </button>

          <h2 className="text-gray-900 text-xl font-semibold">{title}</h2>
          <p className="text-sm text-gray-600 mt-1 pb-3" >{description}</p>

          {/* Quote Form */}

          <div className=" bg-white p-6 shadow-lg">
            <h3 className="text-gray-900 font-semibold text-lg text-center">
              Get The Best Quote
            </h3>

            <button
              className="bg-primary text-white w-full flex items-left gap-2 justify-left px-3 py-3 mt-4 rounded-lg text-sm font-medium cursor-pointer"
              type="button"
            >
              <PhoneCall size={16} className="text-primary bg-white rounded-full h-5  w-5 p-1" />
              Call Us: +91 96190 95795
            </button>

            <Contact enquiryType={enquiryType} />


          </div>

        </div>
      </div>
    </div>
  );
};

export default PopUp;
