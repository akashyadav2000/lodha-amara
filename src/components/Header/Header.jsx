import React from "react";
import { Link } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Download,
  HomeIcon,
  IndianRupee,
  LayoutPanelTop,
  MapPin,
  Image,
  Trees,
  Video,
} from "lucide-react";

const Header = ({ openModal }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current route
  const activePath = location.hash.replace("#", "") || "home"; // Extract hash without '#'

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between bg-white shadow-md h-14 border-b px-4 z-50">
      <div className="flex items-center space-x-5">
        <img src="/logo.svg" alt="Lodha Preferred Partner" className="h-11 w-auto" />

        {/* Navigation Links */}
        <ul className="flex space-x-4 text-primary text-sm font-medium max-xl:space-x-0">


          {[
            { id: "home", label: "Home", icon: <HomeIcon size={16} /> },
            { id: "pricing", label: "Price", icon: <IndianRupee size={16} /> },
            { id: "site-floor-plan", label: "Site & Floor Plan", icon: <LayoutPanelTop size={16} /> },
            { id: "amenities", label: "Amenities", icon: <Trees size={16} /> },
            { id: "gallery", label: "Gallery", icon: <Image size={16} /> },
            { id: "location", label: "Location", icon: <MapPin size={16} /> },
            { id: "site-visit", label: "Virtual Site Visit", icon: <Video size={16} /> },
          ].map((item) => (
            <li key={item.id} className="flex flex-col items-center justify-center space-y-0 cursor-pointer">
              <Link
                to={item.id}
                smooth={true}
                duration={400}
                offset={-50}
                spy={true}
                isDynamic={true}
                onClick={() => navigate(`#${item.id}`, { replace: true })}
                className={`flex items-center justify-center gap-1 px-2 py-1 rounded-md transition-all duration-300 
                ${activePath === item.id ? "bg-[#0230201e] text-primary" : "text-primary"}
                hover:bg-[#0230201e] hover:text-primary`}
              >
                {item.icon}
                <span className="text-sm">{item.label}</span>
              </Link>

              {/* Underline for active link */}
              <div
                className={`h-[2px] w-full bg-green-900 rounded-full transition-all duration-300 ${activePath === item.id ? "opacity-100" : "opacity-0"
                  }`}
              />
            </li>

          ))}
        </ul>
      </div>

      {/* Download Brochure Button */}
      <button
        className="relative bg-primary text-white px-4 py-1.5 rounded text-sm font-medium flex items-center space-x-2 shine-container overflow-hidden cursor-pointer"
        onClick={() => openModal("download-brochure")} // Correct popupType
      >
        {/* Shining Effect */}
        <div className="shine-effect"></div>

        {/* Wrapper to Apply Scaling to Both Icon & Text */}
        <div className="flex items-center space-x-2 animate-textSize">
          <Download size={18} />
          <span>Download Brochure</span>
        </div>
      </button>
    </nav>
  );
};

export default Header;
