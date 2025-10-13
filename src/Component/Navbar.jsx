import React, { useState } from 'react';
import assets from '../assets/assets';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-7 z-50 bg-[#1E4A44] shadow-xl border-gray-300 rounded-xl max-w-7xl mx-auto left-0 right-0 px-6">
            <div className="flex items-center justify-between py-4">
                {/* Logo (Left, slightly right with ml-4, highlighted with light container) */}
                <div className="flex items-center ml-1 h-12 bg-[#F8F1E9] p-2 rounded-lg group">
                    <img
                        src={assets.logo}
                        alt="Logo"
                        className="h-16 w-auto transform transition-transform duration-500 ease-in-out group-hover:scale-125"
                    />
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg
                            className="w-6 h-6 text-[#F8F1E9]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links + Button wrapped in one parent div (Right aligned) */}
                <div className="hidden md:flex items-center space-x-8 mr-6">
                    <a
                        href="#"
                        className="relative text-lg text-[#F8F1E9] hover:text-[#D67F3C] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#D67F3C] after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="relative text-lg text-[#F8F1E9] hover:text-[#D67F3C] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#D67F3C] after:transition-all after:duration-300 hover:after:w-full"
                    >
                        About Us
                    </a>
                    <a
                        href="#"
                        className="relative text-lg text-[#F8F1E9] hover:text-[#D67F3C] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#D67F3C] after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Services
                    </a>

                    {/* Register Button */}
                    <a
                        href="#"
                        className="group relative overflow-hidden bg-[#F8F1E9] text-[#1E4A44] px-5 py-2 rounded-xl font-semibold"
                    >
                        <span className="absolute bottom-0 left-0 w-full h-full bg-[#D67F3C] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></span>
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                            Register
                        </span>
                    </a>
                </div>
            </div>

            {/* Mobile Sidebar Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-[#F8F1E9] shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out md:hidden`}
            >
                <div className="flex flex-col items-start p-6 space-y-4 mt-16">
                    <img
                        src={assets.logo}
                        alt="Logo"
                        className="h-10 w-auto mb-4"
                    />
                    <a
                        href="#"
                        className="text-[#1E4A44] hover:text-[#D67F3C] text-lg"
                        onClick={toggleMenu}
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="text-[#1E4A44] hover:text-[#D67F3C] text-lg"
                        onClick={toggleMenu}
                    >
                        About Us
                    </a>
                    <a
                        href="#"
                        className="text-[#1E4A44] hover:text-[#D67F3C] text-lg"
                        onClick={toggleMenu}
                    >
                        Services
                    </a>
                    <a
                        href="#"
                        className="bg-[#D67F3C] text-[#F8F1E9] px-4 py-2 rounded-md hover:bg-[#D87A3A]"
                        onClick={toggleMenu}
                    >
                        Register
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;