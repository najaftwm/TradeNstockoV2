import React, { useState } from "react";
import { Menu, XCircle } from "lucide-react";
import { motion } from "framer-motion";
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
      className="fixed top-7 z-50 bg-[#1E4A44] shadow-xl border-gray-300 rounded-xl max-w-7xl mx-auto left-0 right-0 px-6"
    >
      <div className="flex items-center justify-between py-4">
        {/* === Logo === */}
        <div className="flex items-center ml-1 h-12 bg-[#F8F1E9] p-2 rounded-lg group">
          <img
            src={assets.logo}
            alt="Logo"
            className="h-16 w-auto transform transition-transform duration-500 ease-in-out group-hover:scale-125"
          />
        </div>

        {/* === Desktop Navigation === */}
        <div className="hidden md:flex items-center space-x-8 mr-6">
          {["Home", "About Us", "Features"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/\s/g, "")}`}
              className="relative text-lg text-[#F8F1E9] hover:text-[#D67F3C] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#D67F3C] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}

          {/* Register Button */}
          <a
            href="#register"
            className="group relative overflow-hidden bg-[#F8F1E9] text-[#1E4A44] px-5 py-2 rounded-xl font-semibold"
          >
            <span className="absolute bottom-0 left-0 w-full h-full bg-[#D67F3C] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Register
            </span>
          </a>
        </div>

        {/* === Mobile Menu Toggle === */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#F8F1E9] focus:outline-none p-2 bg-[#2A4D44] rounded-full z-60"
        >
          {isOpen ? <XCircle size={30} color="#F8F1E9" /> : <Menu size={30} color="#F8F1E9" />}
        </button>
      </div>

      {/* === Mobile Drawer === */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-[#F8F1E9] shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-10`}
      >
        <div className="flex flex-col items-start p-6 space-y-6 mt-16">
          {["Home", "About Us", "Services"].map((item, index) => (
            <a
              key={index}
              href="#"
              onClick={toggleMenu}
              className="text-[#1E4A44] hover:text-[#D67F3C] text-lg"
            >
              {item}
            </a>
          ))}
          <a
            href="#register"
            onClick={toggleMenu}
            className="bg-[#D67F3C] text-[#F8F1E9] px-4 py-2 rounded-md hover:bg-[#D87A3A]"
          >
            Register
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
