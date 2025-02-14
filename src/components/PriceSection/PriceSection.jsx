import React, { useState } from "react";
import { Download, ChevronUp, ChevronDown } from "lucide-react";

const PriceSection = ({ openModal }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const pricingPlans = [
    { type: "1 BHK", area: "446 Sq.ft.", price: "₹ 79 Lacs" },
    { type: "2 BHK LUXE", area: "618 Sq.ft.", price: "₹ 1.05 Cr" },
    { type: "2 BHK Deck", area: "666 Sq.ft.", price: "₹ 1.17 Cr" },
    { type: "2 BHK Deck", area: "722 Sq.ft.", price: "₹ 1.26 Cr" },
    { type: "3 BHK", area: "830 Sq.ft.", price: "₹ 1.57 Cr" },
    { type: "3 BHK Deck", area: "958 Sq.ft.", price: "₹ 1.82 Cr" },
  ];

  return (
    <>
      {/* <div className="w-full pt-10 pl-12 pr-12 pb-12"> */}
      <div className="w-full p-6 lg:px-10 lg:pt-10 lg:pb-4">


        {/* Heading with line below */}
        {/* Heading with Dynamic Line Below */}
        <div className="w-fit">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Welcome To Lodha Amara Thane
          </h1>

          <div className="h-1 bg-primary mt-1 w-full"></div>
        </div>

        {/* Description with Read More / Read Less */}
        <p className={`text-ms text-gray-600 text-justify mt-4 ${isExpanded ? "" : "line-clamp-4 overflow-hidden"}`}>
          Nestled in the lush environs of Kolshet road, Lodha Amara stands as a premium residential destination in Thane, coveted by discerning homebuyers. Expanding across 40 acres, Amara unfolds in three distinct phases, with the inaugural phase nearing its fulfillment. Presenting an array of 1 to 3 BHK configurations, each meticulously crafted floor plan maximizes space utility and elevates resident convenience. Complementing contemporary lifestyles, the project features tailored amenities including dedicated clubhouses for every zone, an invigorating swimming pool, and more. For those in pursuit of a meticulously planned development by a trusted developer in a prime locale, Amara emerges as the quintessential choice. Live in a home with optimal space planning. Presenting thoughtfully designed Air Conditioned^ homes at Amara with superior design to ensure more privacy. With spacious residences in the lush locale of Thane, Lodha Amara bridges the gap between city and nature and gives you a life replete with both!
        </p>

        {/* Read More / Read Less Button */}
        <button
          className="text-ms text-gray-600 flex items-center mt-2 focus:outline-none cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Read Less" : "Read More"}
          {isExpanded ? <ChevronUp className="ml-1" size={18} /> : <ChevronDown className="ml-1" size={18} />}
        </button>

        {/* Download Brochure Button - Aligned Right */}
        <div className="flex justify-end mt-4">
          <button className="bg-primary text-white font-medium text-sm px-4 py-2 rounded flex items-center cursor-pointer" onClick={() => openModal("download-brochure")} >
            <Download size={18} className="mr-2" /> Download Brochure
          </button>
        </div>

      </div>
      <div className=" py-4 px-6 lg:px-10">
        {/* Pricing Section with line below */}
        <div className="w-fit">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 inline-block">
            Pricing Plans
          </h2>

          <div className="h-1 bg-primary mt-1 w-full"></div>
        </div>

        {/* Updated Pricing Plan Description */}
        <p className="text-ms text-gray-600 text-justify mt-1">
          Choose from our range of luxurious 2, 3 & 4 BHK residences, each designed to offer the perfect blend of comfort and sophistication.
        </p>

        {/* Responsive Pricing Table */}
        <div className="mt-4 mb-8">
          <div className="hidden sm:block overflow-hidden rounded-lg shadow-md shadow-gray-300">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 hover:bg-[#e7fdf5d6] transition-colors duration-300 bg-opacity-50">
                  <th className="font-semibold text-sm align-middle text-left px-2 h-10 text-muted-foreground">Type</th>
                  <th className="font-semibold text-sm align-middle text-left px-2 h-10 text-muted-foreground">Carpet Area</th>
                  <th className="font-semibold text-sm align-middle text-left px-2 h-10 text-muted-foreground">Price</th>
                  <th className="font-semibold text-sm align-middle text-left px-2 h-10 text-muted-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                {pricingPlans.map((plan, index) => (
                  <tr key={index} className="bg-white border-t-[1px] green-border hover:bg-gray-50">
                    <td className="text-sm align-middle p-2">{plan.type}</td>
                    <td className="text-sm align-middle p-2">{plan.area}</td>
                    <td className="text-sm align-middle p-2">{plan.price}<span className=" text-gray-500 pl-1"> Onwards</span></td>
                    <td className="p-2">
                      <button className="text-xs px-3 bg-primary text-primary-foreground whitespace-nowrap gap-2 justify-center items-center h-8 inline-flex rounded-md cursor-pointer"
                        onClick={() => openModal("price-breakup")}>
                        Price Breakup
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="sm:hidden space-y-4">
            {pricingPlans.map((plan, index) => (
              <div key={index} className=" rounded-lg shadow-lg p-4 grid grid-cols-2 ">

                {/* Left Side: Type & Area */}
                < div >
                  <h3 className="font-semibold text-base text-gray-900">{plan.type}</h3>
                  <p className="text-sm text-gray-600">{plan.area}</p>
                </div>

                {/* Right Side: Price, Onwards & Button */}
                <div className="text-right">
                  <p className="text-lg text-gray-900">{plan.price}</p>
                  <p className="text-gray-500 text-sm">Onwards</p>
                  <button
                    className="mt-2 text-xs px-3 bg-primary text-primary-foreground whitespace-nowrap gap-2 justify-center items-center h-8 inline-flex rounded-md cursor-pointer"
                    onClick={() => openModal("price-breakup")}
                  >
                    Price Breakup
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div >

        {/* Costing Section */}

        <div className="p-6 rounded-lg mx-auto flex items-center gap-6 shadow-md shadow-gray-300">
          {/* Costing Image (Fixed Width, Hidden on Small Screens < 768px) */}
          <div className="relative cursor-pointer overflow-hidden rounded-md group hidden md:block flex-shrink-0">
            <img
              src="/costing.webp"
              alt="Costing Details"
              className="w-[280px] min-w-[280px] h-[210px] object-cover transition-all duration-500 blur-[1px] group-hover:blur-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Text & Button */}
          <div className="md:text-left text-center flex flex-col items-center md:items-start">
            <h2 className="text-gray-900 font-semibold text-xl mb-2">
              Need Complete Costing Details?
            </h2>
            <p className="text-gray-600 mb-4 text-base">
              Download our detailed cost breakdown including all charges and payment plans.
            </p>
            <button
              className="text-primary-foreground text-sm font-medium py-2 px-4 bg-primary rounded-md justify-center items-center h-9 inline-flex cursor-pointer"
              onClick={() => openModal("get-price-details")} // Correct enquiryType
            >
              Get Price Details
            </button>
          </div>

        </div>


      </div >
    </>
  );
};

export default PriceSection;
