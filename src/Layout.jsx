import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import RightContactSection from "./components/RightContactSection/RightContactSection";
import PriceSection from "./components/PriceSection/PriceSection";
import LandingPage from "./components/Home/LandingPage";
import SiteFloorPlan from "./components/SiteFloorPlan/SiteFloorPlane";
import PopUp from "./components/PopUp/PopUp";
import Amenities from "./components/Amenities/Amenities";
import Gallery from "./components/Gallery/Gallery";
import Location from "./components/Location/Location";
import VirtualTour from "./components/VirtualTour/VirtualTour";
import Footer from "./components/Footer/Footer";

function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [popupType, setPopupType] = useState(""); // Stores the type of popup
  const navigate = useNavigate();

  // Show popup after 2 seconds on render & page refresh
  useEffect(() => {
    const timer = setTimeout(() => {
      setPopupType("welcome"); // Set default popup type
      setIsModalOpen(true);
    }, 2000); // 2-second delay

    return () => clearTimeout(timer); // Cleanup to prevent memory leaks
  }, []);

  // Intersection Observer for section-based navigation
  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-section");
    const observerOptions = { root: null, rootMargin: "-50% 0px -50% 0px", threshold: 0 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          navigate(`#${sectionId}`, { replace: true });
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [navigate]);

  // Function to open the popup dynamically
  const openModal = (type) => {
    setPopupType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="relative min-h-screen">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header openModal={openModal} />
      </div>

      {/* Fixed Right Contact Section */}
      <div className="fixed right-0 w-[22.45%] h-auto">
        <RightContactSection openModal={openModal} />
      </div>

      {/* Main Content */}
      <div className="mt-14 ml-0 w-[77.55%]">
        <Element name="home" id="home" className="scroll-section">
          <LandingPage openModal={openModal} />
        </Element>
        <Element name="pricing" id="pricing" className="scroll-section">
          <PriceSection openModal={openModal} />
        </Element>
        <Element name="site-floor-plan" id="site-floor-plan" className="scroll-section">
          <SiteFloorPlan openModal={openModal} />
        </Element>
        <Element name="amenities" id="amenities" className="scroll-section">
          <Amenities openModal={openModal} />
        </Element>
        <Element name="gallery" id="gallery" className="scroll-section">
          <Gallery openModal={openModal} />
        </Element>
        <Element name="location" id="location" className="scroll-section">
          <Location openModal={openModal} />
        </Element>
        <Element name="site-visit" id="site-visit" className="scroll-section">
          <VirtualTour openModal={openModal} />
        </Element>
        <Footer />
      </div>

      {/* PopUp Component (Appears After 2 Seconds) */}
      <PopUp isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} popupType={popupType} />
    </div>
  );
}

export default Layout;
