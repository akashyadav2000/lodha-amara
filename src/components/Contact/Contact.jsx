import React, { useState } from "react";
import { PhoneCall, Loader2 } from "lucide-react"; // Loader2 for spinning effect
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./customPhoneInput.css"; // Import custom styles

const Contact = ({ enquiryType, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",  // Stores only phone number
    countryCode: "+91",  // Default country code
    email: "",
    enquiryType: enquiryType || "defaultType",
  });

  const [loading, setLoading] = useState(false); // Track form submission state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value, country) => {
    setFormData({
      ...formData,
      phone: value.replace(`+${country.dialCode}`, "").trim(), // Store only the number
      countryCode: country.dialCode, // Store country code separately
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const fullPhoneNumber = formData.countryCode + formData.phoneNumber; // Combine both

    try {
      const response = await fetch("https://lodha-amara-backend.onrender.com/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, phone: fullPhoneNumber }), // Send full number
      });

      if (response.ok) {
        setFormData({
          name: "",
          phoneNumber: "",
          countryCode: "+91",
          email: "",
          enquiryType,
        });

        if (onFormSubmit) {
          onFormSubmit();
        }
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
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
          enableSearch={true}
          disableDropdown={false} // Allow country selection
          disableCountryCode={true} // Hide country code
          inputStyle={{ display: "none" }} // Hides the text input, only flag shows
          buttonClass="phone-dropdown"
          containerClass="phone-container"
          onChange={(value, country) => {
            setFormData((prev) => ({
              ...prev,
              countryCode: `+${country.dialCode}`,  // Save country code in state
            }));
          }}
        />


        <input
          type="tel"
          name="phoneNumber"
          placeholder="Enter phone number"
          value={formData.phoneNumber}
          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
          className="phone-input"
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