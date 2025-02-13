import { CircleCheckBig, House } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ThankYou() {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          navigate("/"); // Redirect to home page
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [navigate]);

  return (
    <div className="bg-white shadow-lg shadow-gray-300 rounded-lg p-6 md:p-8 w-full max-w-md text-center relative">
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
        Redirecting to home page in <span className="font-bold">{countdown}</span> seconds...
      </p>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-300 mt-2 rounded-md overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-1000 ease-linear"
          style={{ width: `${(countdown / 10) * 100}%` }}
        ></div>
      </div>

      <button
        className="bg-primary text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 mx-auto mt-4 text-sm"
        onClick={() => navigate("/")}
      >
        <House size={16} /> Back to Home
      </button>

      <div className="mt-6 border-t pt-4 text-gray-600 text-sm p-3 bg-gray-100">
        <p>For immediate assistance, contact us at</p>
        <p className="text-primary font-bold text-lg">+91 96190 95795</p>
      </div>
    </div>
  );
}

export default ThankYou;
