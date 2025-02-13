import React, { useState } from "react";
import { PhoneCall, Loader2 } from "lucide-react"; // Loader2 for spinning effect
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Contact = ({ popupType, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    popupType: popupType || "defaultType",
  });

  const [loading, setLoading] = useState(false); // Track form submission state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading effect

    try {
      const response = await fetch("https://lodha-amara-backend.onrender.com/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", phone: "", email: "", popupType }); // Reset form

        if (onFormSubmit) {
          onFormSubmit(); // Show Thank You popup
        }
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); // Stop loading effect
    }
  };

  return (
    <div>
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
          className={`w-full py-2 mt-6 rounded-lg text-sm font-medium cursor-pointer transition ${loading
              ? "bg-gray-300 text-gray-700 cursor-not-allowed"
              : "bg-primary text-white"
            } flex items-center justify-center gap-2`}
          disabled={loading}
        >
          {loading && <Loader2 size={18} className="animate-spin" />}
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
