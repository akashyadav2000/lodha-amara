import React, { useState, useEffect } from "react";
import { PhoneCall, CircleCheckBig, House, X } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Contact = ({ popupType }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    popupType: popupType || "defaultType",
  });

  const [showThankYou, setShowThankYou] = useState(false);
  const [countdown, setCountdown] = useState(7);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowThankYou(false); // Reset before new submission

    try {
      const response = await fetch("http://localhost:5000/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowThankYou(true); // Show Thank You modal
        setFormData({ name: "", phone: "", email: "", popupType }); // Reset form fields

        // Start countdown for auto-close
        let counter = 7;
        const timer = setInterval(() => {
          setCountdown(counter);
          if (counter === 1) {
            clearInterval(timer);
            setShowThankYou(false); // Close Thank You modal
          }
          counter -= 1;
        }, 1000);
      } else {
        const result = await response.json();
        alert(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div>
      {/* Show Thank You Modal when form is successfully submitted */}
      {showThankYou && (
        <div className="fixed inset-0 bg-white z-50 flex justify-center items-center">
          <div className="bg-white shadow-gray-400 shadow-lg rounded-lg p-6 md:p-8 w-full max-w-md text-center relative">
            <button
              onClick={() => setShowThankYou(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            >
              <X size={20} />
            </button>

            <div className="flex justify-center">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-green-900/30">
                <CircleCheckBig size={43} className="text-primary" />
              </div>
            </div>
            <h2 className="text-2xl text-gray-900 font-bold mt-4">Thank You</h2>
            <p className="text-gray-600 text-base mt-2">
              Our team will contact you shortly to assist you further.
            </p>
            <p className="text-gray-500 mt-2 text-sm">
              Redirecting to home page in {countdown} seconds...
            </p>

            <button
              onClick={() => setShowThankYou(false)}
              className="bg-primary text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 mx-auto mt-4"
            >
              <House size={16} /> Back to Home
            </button>

            <div className="mt-6 border-t pt-4 text-gray-700 text-sm bg-gray-100">
              <p>For immediate assistance, contact us at</p>
              <p className="text-green-900 font-bold text-lg">+91 96190 95795</p>
            </div>
          </div>
        </div>
      )}

      {/* Contact Form */}
      <form onSubmit={handleSubmit}>
        <h3 className="text-gray-900 font-semibold text-lg text-center">
          Get The Best Quote
        </h3>

        <button
          className="bg-primary text-white w-full flex items-center gap-2 justify-center py-3 mt-4 rounded-lg text-sm font-medium cursor-pointer"
          type="button"
        >
          <PhoneCall size={16} className="text-white" />
          Call Us: +91 96190 95795
        </button>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-1 text-sm mt-4 rounded border border-gray-300 focus:border-primary focus:ring focus:ring-bg-primary outline-none shadow-sm"
        />

        <PhoneInput
          country={"in"}
          value={formData.phone}
          onChange={handlePhoneChange}
          enableSearch={true}
          placeholder="Enter phone number"
          inputClass="!w-full !py-2 !pl-12 !border-gray-300 !rounded focus:!border-primary focus:!ring focus:!ring-bg-primary"
          buttonClass="!border-none !bg-transparent focus:!border-primary focus:!ring focus:!ring-bg-primary"
          containerClass="!w-full mt-4 text-sm shadow-sm"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email (optional)"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-1 text-sm mt-4 rounded border border-gray-300 focus:border-primary focus:ring focus:ring-bg-primary outline-none shadow-sm"
        />

        <button
          type="submit"
          className="bg-primary text-white w-full py-2 mt-6 rounded-lg text-sm font-medium cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
