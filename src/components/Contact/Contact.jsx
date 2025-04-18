import React, { useState } from "react";
import { PhoneCall, Loader2 } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./customPhoneInput.css";

const Contact = ({ enquiryType, onFormSubmit, required = false }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    countryCode: "+91",
    email: "",
    enquiryType: enquiryType || "defaultType",
  });

  const [errors, setErrors] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      phoneNumber: "",
      email: "",
    };

    if (required && !formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (required && !formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
      valid = false;
    } else if (required && formData.phoneNumber.length < 10) {
      newErrors.phoneNumber = "Phone number must be at least 10 digits";
      valid = false;
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handlePhoneChange = (value, country) => {
    setFormData({
      ...formData,
      phoneNumber: value.replace(`+${country.dialCode}`, "").trim(),
      countryCode: `+${country.dialCode}`,
    });
    if (errors.phoneNumber) {
      setErrors({ ...errors, phoneNumber: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form and return if invalid
    if (!validateForm()) {
      return; // This prevents form submission
    }

    setLoading(true);

    const fullPhoneNumber = formData.countryCode + formData.phoneNumber;

    try {
      const response = await fetch("https://lodha-amara-backend.onrender.com/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, phone: fullPhoneNumber }),
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
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-1">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 py-1 h-9 text-sm mt-4 rounded border ${errors.name ? "border-red-500" : "border-gray-300"} focus:border-primary focus:ring focus:ring-bg-primary outline-none shadow-sm`}
            required={required}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        {/* Phone Field */}
        <div className="mb-1">
          <div className={`flex items-center border ${errors.phoneNumber ? "border-red-500" : "border-gray-300"} rounded px-2 py-1 mt-4 h-9`}>
            <div className="flex items-center justify-center w-15 h-9">
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
              value={formData.phoneNumber}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setFormData({ ...formData, phoneNumber: value });
                if (errors.phoneNumber) {
                  setErrors({ ...errors, phoneNumber: "" });
                }
              }}
              inputMode="numeric"
              pattern="[0-9]*"
              className="w-full outline-none text-sm h-9"
              required={required}
              maxLength="15"
            />
          </div>
          {errors.phoneNumber && (
            <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-1">
          <input
            type="email"
            name="email"
            placeholder="Enter your email (optional)"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-1 text-sm mt-4 rounded border ${errors.email ? "border-red-500" : "border-gray-300"} focus:border-primary focus:ring focus:ring-bg-primary outline-none shadow-sm h-9`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

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