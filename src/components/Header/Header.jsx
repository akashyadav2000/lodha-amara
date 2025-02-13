import React, { useState } from "react";
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
  Menu,
  X,
} from "lucide-react";

const Header = ({ openModal }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const activePath = location.hash.replace("#", "") || "home";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center bg-white shadow-md h-14 border-b x-2 md:px-4 z-50">
      {/* Logo and Navigation Links */}
      <div className="flex items-center space-x-0 md:space-x-5">
        <img src="/logo.svg" alt="Lodha Preferred Partner" className="h-8 md:h-11  w-auto" />

        <ul className="flex space-x-4 text-primary text-sm font-medium max-xl:space-x-0 max-[1100px]:hidden">
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
                className={`flex items-center gap-1 px-2 py-1 rounded-md transition-all duration-300 
                  ${activePath === item.id ? "bg-[#0230201e] text-primary" : "text-primary"}
                  hover:bg-[#0230201e] hover:text-primary`}
              >
                {item.icon}
                <span className="text-sm">{item.label}</span>
              </Link>
              <div className={`h-[2px] w-full bg-green-900 rounded-full transition-all duration-300 ${activePath === item.id ? "opacity-100" : "opacity-0"}`} />
            </li>
          ))}
        </ul>
      </div>

      {/* Right-side elements: Download button + Hamburger menu */}
      <div className="flex items-center space-x-2 ml-auto">
        <button
          className="relative bg-primary text-white px-4 py-1.5 rounded text-sm font-medium flex items-center space-x-2 shine-container overflow-hidden cursor-pointer"
          onClick={() => openModal("download-brochure")}
        >
          <div className="shine-effect"></div>
          <div className="flex items-center animate-textSize">
            <Download size={18} />
            <span>Download Brochure</span>
          </div>
        </button>
        <button
          className="hidden max-[1100px]:block text-primary text-sm font-medium px-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={16} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-14 right-0 w-[250px] bg-white shadow-lg rounded-md p-4 flex flex-col space-y-4">
          {[
            { id: "home", label: "Home", icon: <HomeIcon size={16} /> },
            { id: "pricing", label: "Price", icon: <IndianRupee size={16} /> },
            { id: "site-floor-plan", label: "Site & Floor Plan", icon: <LayoutPanelTop size={16} /> },
            { id: "amenities", label: "Amenities", icon: <Trees size={16} /> },
            { id: "gallery", label: "Gallery", icon: <Image size={16} /> },
            { id: "location", label: "Location", icon: <MapPin size={16} /> },
            { id: "site-visit", label: "Virtual Site Visit", icon: <Video size={16} /> },
          ].map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={400}
              offset={-50}
              spy={true}
              isDynamic={true}
              onClick={() => {
                navigate(`#${item.id}`, { replace: true });
                setMenuOpen(false);
              }}
              className="flex items-center space-x-2 text-primary text-sm py-2 hover:bg-[#0230201e] rounded-md transition-all duration-300"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
