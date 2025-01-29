import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import 'boxicons';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => setNav(!nav);
    const closeNav = () => setNav(false);

    // Manual scroll fix
    const handleScroll = (section) => {
        closeNav();
        setTimeout(() => {
            const target = document.getElementById(section);
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 300);
    };

    return (
        <div className='fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50'>
            <div className='max-w-[1300px] mx-auto flex justify-between text-gray-200 text-xl items-center px-12 h-20'>

                {/* Logo */}
                <a href="#" className="hover:text-purple-500 transition duration-300 flex items-center">
                    <box-icon name='code-alt' color='#ffffff'></box-icon>
                    <span className="ml-2">CyberBoyAyush</span>
                </a>

                {/* Desktop Menu */}
                <ul className='hidden md:flex gap-12 cursor-pointer'>
                    {["about", "portfolio", "contact"].map((section) => (
                        <li key={section}>
                            <ScrollLink
                                to={section}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => handleScroll(section)}
                                className="hover:text-purple-500 transition duration-300"
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </ScrollLink>
                        </li>
                    ))}
                    <li>
                        <a href="https://me.cyberboyayush.in/" target="_blank" rel="noopener noreferrer" className="border border-purple-500 rounded-xl p-4 hover:bg-purple-500 hover:text-white transition duration-300">
                            Visit Profiles
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <div onClick={toggleNav} className='md:hidden z-50 text-gray-200'>
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>

                {/* Mobile Menu */}
                <motion.div
                    initial={false}
                    animate={nav ? { x: 0 } : { x: '-100%' }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className={`fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40 transition-transform ${nav ? "translate-x-0" : "-translate-x-full"}`}
                    style={{ pointerEvents: nav ? 'auto' : 'none' }}
                >
                    <ul className='font-semibold text-4xl space-y-8 mt-24 text-center'>
                        {["about", "portfolio", "contact"].map((section) => (
                            <li key={section}>
                                <ScrollLink
                                    to={section}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={() => handleScroll(section)}
                                    className="hover:text-purple-500 transition duration-300"
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </ScrollLink>
                            </li>
                        ))}
                        <li>
                            <a href="https://me.cyberboyayush.in/" target="_blank" rel="noopener noreferrer" onClick={closeNav} className="border border-purple-500 p-2 rounded-xl hover:bg-purple-500 hover:text-white transition duration-300">
                                Visit Profiles
                            </a>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};

export default Navbar;