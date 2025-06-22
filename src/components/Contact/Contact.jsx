import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./customPhoneInput.css";
import emailjs from "emailjs-com";

const Contact = ({ enquiryType, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    countryCode: "+91",
    email: "",
    enquiryType: enquiryType || "defaultType",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value, country) => {
    setFormData({
      ...formData,
      phoneNumber: value.replace(`+${country.dialCode}`, "").trim(),
      countryCode: `+${country.dialCode}`,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const fullPhoneNumber = formData.countryCode + formData.phoneNumber;

    const templateParams = {
      name: formData.name,
      phone: fullPhoneNumber,
      email: formData.email,
      // enquiryType: formData.enquiryType,
      enquiryType: getEnquiryLabel(formData.enquiryType),
    };

    try {
      const result = await emailjs.send(
        "service_dmiptfv",     // 🔁 Replace with your EmailJS service ID
        "template_no3c7uh",    // 🔁 Replace with your EmailJS template ID
        templateParams,
        "zY-h3O7sfR2I2C1Ne"      // 🔁 Replace with your EmailJS public key
      );

      console.log("SUCCESS!", result.text);

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
    } catch (error) {
      console.error("FAILED...", error);
    } finally {
      setLoading(false);
    }
  };

  const getEnquiryLabel = (type) => {
    switch (type) {
      case "download-brochure":
        return "Download Brochure";
      case "site-visit":
        return "Book Site Visit";
      case "price-breakup":
      case "get-price-details":
        return "Request Price Breakup";
      case "enquire-1bhk":
        return "Enquiry About 1BHK";
      case "enquire-2bhk-618":
        return "Enquiry About 2BHK (618 sqft)";
      case "enquire-2bhk-722":
        return "Enquiry About 2BHK (722 sqft)";
      case "enquire-3bhk":
        return "Enquiry About 3BHK";
      case "download-amenities":
        return "Download Amenities";
      case "download-gallery":
        return "Download Gallery";
      case "get-location":
        return "Request Location";
      case "request-virtual-tour":
        return "Request Virtual Tour";
      default:
        return "General Inquiry";
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-1 h-9 text-sm mt-4 rounded border border-gray-300 focus:border-primary focus:ring focus:ring-bg-primary outline-none shadow-sm"
        />

        <div className="flex items-center border border-gray-300 rounded px-2 py-1 mt-4 h-9">
          <div className=" flex items-center justify-center w-15 h-9">
            <PhoneInput
              country={"in"}
              enableSearch={true}
              disableDropdown={false}
              disableCountryCode={true}
              inputStyle={{ display: "none" }}
              buttonClass="phone-dropdown"
              containerClass="phone-container"
              onChange={handlePhoneChange}
              inputClass="phone-input"
              searchClass="phone-search"
              dropdownClass="phone-dropdown-list"
            />
          </div>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Enter phone number"
            required
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({
                ...formData,
                phoneNumber: e.target.value.replace(/\D/g, ""),
              })
            }
            inputMode="numeric"
            pattern="[0-9]*"
            className="w-full outline-none text-sm h-9"
          />
        </div>

        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email (optional)"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-1 text-sm mt-4 rounded border border-gray-300 focus:border-primary focus:ring focus:ring-bg-primary outline-none shadow-sm h-9"
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
