import React, { useState } from 'react';
import { FaInfoCircle, FaCog, FaDollarSign, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'About', icon: FaInfoCircle },
        { name: 'Service', icon: FaCog },
        { name: 'Pricing', icon: FaDollarSign },
        { name: 'Contact', icon: FaEnvelope },
    ];

    const handleLogoClick = () => {
        window.location.reload();
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Backdrop blur when menu is open */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 md:hidden"
                    onClick={toggleMenu}
                />
            )}

            <nav className="sticky top-0 z-50 w-full bg-white shadow-lg">
                <div className="w-full px-4 md:px-8 lg:px-12 py-3 md:py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo - Left */}
                        <button
                            onClick={handleLogoClick}
                            className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                            aria-label="Refresh page"
                        >
                            <img
                                src="/ss.png"
                                alt="Script and Scholars Logo"
                                className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-contain cursor-pointer hover:scale-105 transition-transform duration-200"
                            />
                        </button>

                        {/* Desktop Navigation Links - Right */}
                        <div className="hidden md:flex items-center gap-6 lg:gap-8">
                            {navItems.map((item) => {
                                const IconComponent = item.icon;
                                return (
                                    <a
                                        key={item.name}
                                        href={`#${item.name.toLowerCase()}`}
                                        className="flex items-center gap-2 text-gray-800 text-base lg:text-lg font-medium hover:text-blue-900 transition-colors duration-200 group"
                                    >
                                        <IconComponent className="text-lg lg:text-xl group-hover:scale-110 transition-transform duration-200" />
                                        <span>{item.name}</span>
                                    </a>
                                );
                            })}
                        </div>

                        {/* Hamburger Menu Button - Mobile */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden text-gray-800 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2 transition-colors duration-200"
                            aria-label="Toggle navigation menu"
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? (
                                <FaTimes className="text-2xl" />
                            ) : (
                                <FaBars className="text-2xl" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Drawer */}
                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
                        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="flex flex-col h-full">
                        {/* Close Button */}
                        <div className="flex justify-end p-4">
                            <button
                                onClick={toggleMenu}
                                className="text-gray-800 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
                                aria-label="Close menu"
                            >
                                <FaTimes className="text-2xl" />
                            </button>
                        </div>

                        {/* Mobile Navigation Links */}
                        <nav className="flex flex-col px-6 py-4 space-y-4" role="navigation">
                            {navItems.map((item) => {
                                const IconComponent = item.icon;
                                return (
                                    <a
                                        key={item.name}
                                        href={`#${item.name.toLowerCase()}`}
                                        onClick={handleLinkClick}
                                        className="flex items-center gap-3 text-gray-800 text-lg font-medium hover:text-blue-900 hover:bg-gray-100 p-3 rounded-lg transition-all duration-200"
                                    >
                                        <IconComponent className="text-xl" />
                                        <span>{item.name}</span>
                                    </a>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;