import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-center py-4 text-sm text-gray-500 bg-gray-100 rounded-md">
      Copyright © 2024 |
      <Link to="/terms-conditions" className="underline px-2">Terms & Conditions</Link> |
      <Link to="/privacy-policy" className="underline px-2">Privacy Policy</Link> |
      <Link to="/cookies-policy" className="underline px-2">Cookies Policy</Link>
    </footer>
  );
}

export default Footer;
