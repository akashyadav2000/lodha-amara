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
import ThankYou from "./components/Contact/ThankYou";

function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [enquiryType, setEnquiryType] = useState("");
  const [showThankYou, setShowThankYou] = useState(false); // State for ThankYou visibility
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setEnquiryType("welcome");
      setIsModalOpen(true);
    }, 2000);


    return () => clearTimeout(timer);
  }, []);

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

  const openModal = (type) => {
    setEnquiryType(type);
    setIsModalOpen(true);
  };

  // Function to handle form submission
  const handleFormSubmit = () => {
    console.log("Form submitted! Showing ThankYou popup...");
    setShowThankYou(true);

    setTimeout(() => {
      console.log("Hiding ThankYou popup...");
      setShowThankYou(false);
    }, 10000);
  };


  return (
    <div className="relative min-h-screen">
      {/* Header (Fixed) */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header openModal={openModal} />
      </div>

      <div className="flex flex-col mt-14 lg:flex-row">
        {/* Left Content (Landing Page & Other Sections) */}
        <div className="w-full lg:w-[77.55%]">
          <Element name="home" id="home" className="scroll-section">
            <LandingPage openModal={openModal} />
          </Element>

          {/* Show RightContactSection BELOW LandingPage on `md` screens */}
          <div className="block lg:hidden w-full">
            <RightContactSection openModal={openModal} enquiryType={enquiryType} onFormSubmit={handleFormSubmit} />
          </div>

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

          {showThankYou && (
            <div className="fixed inset-0 w-full z-11 flex items-center justify-center min-h-screen bg-white p-4">
              <ThankYou />
            </div>
          )}

          <Footer />
        </div>

        {/* RightContactSection (Only Visible on Large Screens) */}
        <div className="hidden lg:block fixed right-0 w-[22.45%] h-auto">
          <RightContactSection openModal={openModal} enquiryType={enquiryType} onFormSubmit={handleFormSubmit} />
        </div>
      </div>

      <PopUp isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} enquiryType={enquiryType} />
    </div>

  );
}

export default Layout;
