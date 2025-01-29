import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { SiGmail, SiX } from 'react-icons/si';

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-center p-4 md:p-8 text-xs md:text-lg mt-12">
      {/* Left Section */}
      <div className="space-y-2 md:space-y-4 text-center md:text-left">
        <h3 className="text-lg md:text-2xl text-gray-200 font-semibold">Ayush Sharma</h3>
        <div className="flex justify-center md:justify-start gap-4 text-gray-400 text-2xl md:text-4xl">
          <a href="https://github.com/CyberBoyAyush"><FaGithubSquare /></a>
          <a href="https://linkedin.com/in/cyberboyayush"><FaLinkedin /></a>
          <a href="mailto:cseayushayush@gmail.com"><SiGmail /></a>
          <a href="https://x.com/cyberboyayush"><SiX /></a>
        </div>
      </div>

      {/* Right Section */}
      <p className="text-gray-400 flex items-center gap-2 text-xs md:text-lg mt-4 md:mt-0">
        <span className="hidden md:inline">💻</span> Ayush Sharma
      </p>
    </div>
  );
};

export default Footer;