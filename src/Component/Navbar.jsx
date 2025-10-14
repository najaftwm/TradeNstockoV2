import React, { useState } from "react";
import { Menu, XCircle } from "lucide-react";
import { motion } from "framer-motion"; // eslint-disable-line
import { Link } from "react-router-dom";
import assets from "../assets/assets";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="fixed top-7 z-50 bg-[#1E4A44] shadow-xl border-gray-300 rounded-xl max-w-7xl mx-auto left-0 right-0 px-6 md:px-6 
                 md:mx-auto md:left-0 md:right-0
                 max-md:max-w-sm max-md:mx-0 max-md:left-4 max-md:right-auto"
    >
      <div className="flex items-center justify-between py-4 md:py-4 max-md:py-2">
        {/* === Logo === */}
        <Link to="/" className="flex items-center ml-1 h-12 bg-[#F8F1E9] p-2 rounded-lg group md:h-12 md:p-2 max-md:h-9 max-md:p-1.5">
          <img
            src={assets.logo}
            alt="Logo"
            className="h-16 w-auto transform transition-transform duration-500 ease-in-out group-hover:scale-125 md:h-16 max-md:h-10"
          />
        </Link>

        {/* === Desktop Navigation === */}
        <div className="hidden md:flex items-center space-x-8 mr-6">
          {["Home", "About Us", "Features"].map((item, index) => (
            <Link
              key={index}
              to={`/#${item.toLowerCase().replace(/\s/g, "")}`}
              className="relative text-lg text-[#F8F1E9] hover:text-[#D67F3C] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#D67F3C] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </Link>
          ))}

          {/* Contact Us Link */}
          <Link
            to="/contact-us"
            className="relative text-lg text-[#F8F1E9] hover:text-[#D67F3C] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#D67F3C] after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact Us
          </Link>

          {/* Register Button */}
          <Link
            to="/#register"
            className="group relative overflow-hidden bg-[#F8F1E9] text-[#1E4A44] px-5 py-2 rounded-xl font-semibold"
          >
            <span className="absolute bottom-0 left-0 w-full h-full bg-[#D67F3C] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Register
            </span>
          </Link>
        </div>

        {/* === Mobile Menu Toggle === */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#F8F1E9] focus:outline-none p-2 bg-[#2A4D44] rounded-full z-60 max-md:p-1.5 max-md:ml-2"
        >
          {isOpen ? <XCircle size={24} color="#F8F1E9" className="md:hidden" /> : <Menu size={24} color="#F8F1E9" className="md:hidden" />}
        </button>
      </div>

      {/* === Mobile Drawer === */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-[#F8F1E9] shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-10`}
      >
        <div className="flex flex-col items-start p-6 space-y-6 mt-16">
          {["Home", "About Us", "Features"].map((item, index) => (
            <Link
              key={index}
              to={`/#${item.toLowerCase().replace(/\s/g, "")}`}
              onClick={toggleMenu}
              className="text-[#1E4A44] hover:text-[#D67F3C] text-lg"
            >
              {item}
            </Link>
          ))}
          <Link
            to="/contact-us"
            onClick={toggleMenu}
            className="text-[#1E4A44] hover:text-[#D67F3C] text-lg"
          >
            Contact Us
          </Link>
          <Link
            to="/#register"
            onClick={toggleMenu}
            className="bg-[#D67F3C] text-[#F8F1E9] px-4 py-2 rounded-md hover:bg-[#D87A3A]"
          >
            Register
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
