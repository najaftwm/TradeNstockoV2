import React, { useState } from 'react';
import assets from '../assets/assets';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav className="fixed h-17  top-6 z-50 bg-[#f3f3f3] shadow-xl border-black rounded-xl max-w-6xl mx-auto left-0 right-0 px-6">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo (Left) */}
                <div className="flex items-center">
                    <img
                        src={assets.logo}
                        alt="Logo"
                        className="h-10 w-auto"
                    />
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg
                            className="w-6 h-6"
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

                {/* Navigation Links for Desktop (Centered) */}
                <div className="hidden md:flex flex-1 justify-center space-x-10 items-center">
                    <a
                        href="#"
                        className="relative text-gray-700 hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="relative text-gray-700 hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        About Us
                    </a>
                    <a
                        href="#"
                        className="relative text-gray-700 hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Services
                    </a>
                    <a
                        href="#"
                        className="relative text-gray-700 hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Cases
                    </a>
                </div>


                {/* Contact Us Button (Right) */}
                <div className="hidden md:flex items-center">
                    <a
                        href="#"
                        className="group relative overflow-hidden bg-white text-black px-4 py-1 rounded-xl font-semibold transition-colors duration-500"
                    >
                        {/* Background fill */}
                        <span className="absolute bottom-0 left-0 w-full h-full bg-blue-900 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></span>

                        {/* Button text */}
                        <span className="relative z-10 group-hover:text-white">Register</span>
                    </a>
                </div>

            </div>

            {/* Mobile Sidebar Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
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
                        className="text-gray-700 hover:text-blue-500 text-lg"
                        onClick={toggleMenu}
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="text-gray-700 hover:text-blue-500 text-lg"
                        onClick={toggleMenu}
                    >
                        About Us
                    </a>
                    <a
                        href="#"
                        className="text-gray-700 hover:text-blue-500 text-lg"
                        onClick={toggleMenu}
                    >
                        Services
                    </a>
                    <a
                        href="#"
                        className="text-gray-700 hover:text-blue-500 text-lg"
                        onClick={toggleMenu}
                    >
                        Cases
                    </a>
                    <a
                        href="#"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        onClick={toggleMenu}
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;