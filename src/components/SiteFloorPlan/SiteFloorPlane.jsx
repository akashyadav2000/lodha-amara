import { Eye, XCircle } from "lucide-react"; // Import icons
import React, { useState } from "react";

const floorPlans = [
  { id: 1, type: "1 BHK", size: "446 Sq.ft", image: "/floor-1.webp" },
  { id: 2, type: "2 BHK", size: "618 Sq.ft", image: "/floor-2.webp" },
  { id: 3, type: "2 BHK", size: "722 Sq.ft", image: "/floor-3.webp" },
  { id: 4, type: "3 BHK", size: "958 Sq.ft", image: "/floor-4.webp" },
];

const SiteFloorPlan = ({ openModal }) => {
  const [selectedType, setSelectedType] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  const filteredPlans =
    selectedType === "All"
      ? floorPlans
      : floorPlans.filter((plan) => plan.type === selectedType);

  return (
    <div className="w-full px-10 py-4 flex flex-col items-center">
      {/* Master Plan Section */}
      <div className="w-full pb-8">

        <div className="w-fit">
          <h2 className="text-gray-900 text-3xl font-bold">Site & Floor Plan</h2>
          <div className="h-1 bg-primary mt-1 w-full"></div>
        </div>
        <p className="text-sm text-gray-600 mt-1">Explore our thoughtfully designed layouts that maximize space and comfort</p>
      </div>

      {/* Master Plan Image */}
      <div className=" mb-8">
        <h2 className="text-gray-900 font-bold text-xl mb-4">Master Plan</h2>
        <div
          className="w-full max-w-[672px] aspect-[16/9] relative mt-4 mx-auto cursor-pointer overflow-hidden rounded-lg flex items-center justify-center group"
          onClick={() => setIsModalOpen(true)}
        >
          {/* Master Plan Image */}
          <img
            src="/master-plan.webp"
            alt="Master Plan"
            className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-[3px]"
          />

          {/* Dark Overlay (Always Visible) */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* View Button (Always Visible) */}
          <div className="absolute flex justify-center items-center gap-2 px-8 py-2 bg-white text-gray-900 rounded-lg shadow-md">
            <Eye className="w-5 h-5 text-gray-900" />
            <span className="text-gray-900 pl-2 font-medium text-sm rounded-md">
              View Master Plan
            </span>
          </div>
        </div>
      </div>

      {/* MODAL (Popup) */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
          <div className="bg-[#e5fff6] p-5 rounded-lg shadow-lg w-188 relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-700 cursor-pointer hover:text-red-600"
              onClick={() => setIsModalOpen(false)}
            >
              <XCircle className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <h2 className="text-gray-900 font-semibold text-lg mb-1">Master Plan</h2>
            <img src="/master-plan.webp" alt="Master Plan" className="w-full h-auto px-5 py-3" />
          </div>
        </div>
      )}

      {/* Floor Plan & Filters (Aligned Left & Right) */}
      <div className="w-full flex justify-between items-center mb-6">
        <h2 className="text-gray-900 font-bold text-xl">Floor Plan</h2>
        <div className="flex gap-2 font-medium text-xs">
          {["All", "1 BHK", "2 BHK", "3 BHK"].map((type) => (
            <button
              key={type}
              className={`px-3 h-8 font-medium rounded-md border transition-all duration-300 cursor-pointer
          ${selectedType === type ? "bg-primary text-white" : "bg-[#e5fff6] text-gray-900"}
          hover:bg-[rgb(189,219,189)] hover:text-white`}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>


      {/* Floor Plans Grid */}
      {/* Floor Plans Grid */}
      <div className="grid grid-cols-3 gap-4 w-full">
        {filteredPlans.map((plan) => (
          <div key={plan.id} className="flex flex-col shadow-lg rounded-lg overflow-hidden h-auto group cursor-pointer">
            <div className="relative overflow-hidden">
              {/* Image */}
              <img
                src={plan.image}
                alt={plan.type}
                className="w-full h-auto object-cover aspect-[15/10] transition-transform duration-500 ease-in-out blur-[1px] group-hover:scale-105"
              />

              {/* Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>

              {/* Enquire Now Button (Appears on Hover) */}
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <button
                  className="flex items-center gap-2 px-6 py-2 bg-white text-gray-900 font-medium rounded-lg shadow-md cursor-pointer"
                  onClick={() => {
                    let enquiryType = "";
                    if (plan.size.includes("446")) enquiryType = "enquire-1bhk";
                    else if (plan.size.includes("618")) enquiryType = "enquire-2bhk-618";
                    else if (plan.size.includes("722")) enquiryType = "enquire-2bhk-722";
                    else if (plan.size.includes("958")) enquiryType = "enquire-3bhk";

                    openModal(enquiryType);
                  }}
                >
                  <Eye className="w-5 h-5 text-gray-900" />
                  <span className="text-gray-900 text-sm">Enquire Now</span>
                </button>
              </div>
            </div>

            {/* Bottom Label */}
            <div className="bg-primary text-white text-center h-7 text-xs flex items-center justify-center rounded-b-lg">
              {plan.type} - {plan.size}
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default SiteFloorPlan;
