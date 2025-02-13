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
  const [popupType, setPopupType] = useState("");
  const [showThankYou, setShowThankYou] = useState(false); // State for ThankYou visibility
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopupType("welcome");
      setIsModalOpen(true);
    }, 2000);

    // useEffect(() => {
    //   console.log("showThankYou state:", showThankYou);
    // }, [showThankYou]);


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
    setPopupType(type);
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
      <div className="fixed top-0 left-0 w-full z-50">
        <Header openModal={openModal} />
      </div>

      <div className="fixed right-0 w-[22.45%] h-auto">
        <RightContactSection openModal={openModal} popupType={popupType} onFormSubmit={handleFormSubmit} />

      </div>


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

        {showThankYou && (
          <div className="fixed inset-0 w-[77.55%] z-11 flex items-center justify-center min-h-screen bg-white p-4">
            <ThankYou />
          </div>
        )}

        <Footer />
      </div>

      <PopUp isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} popupType={popupType} />
    </div>
  );
}

export default Layout;
