import React from 'react';
import { motion } from 'framer-motion';
import { FaGithubSquare, FaLinkedin, FaHeart } from 'react-icons/fa';
import { SiGmail, SiX } from 'react-icons/si';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithubSquare />, href: "https://github.com/CyberBoyAyush", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/cyberboyayush", label: "LinkedIn" },
    { icon: <SiGmail />, href: "mailto:cseayushayush@gmail.com", label: "Email" },
    { icon: <SiX />, href: "https://x.com/cyberboyayush", label: "Twitter" }
  ];

  return (
    <footer className="relative mt-20">
      {/* Gradient Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      
      <div className="max-w-[1300px] mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Ayush Sharma
            </h3>
            <p className="text-gray-400 mt-2 text-sm">
              Building digital experiences with passion
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl md:text-3xl text-purple-400 hover:text-purple-300 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                title={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <p className="text-gray-400 text-sm">
              Made with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block text-purple-500"
              >
                <FaHeart className="inline" />
              </motion.span>
              {' '}by CyberBoyAyush
            </p>
            <p className="text-gray-500 text-xs mt-2">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="h-2 w-full bg-gradient-to-r from-purple-900/20 via-purple-700/20 to-purple-900/20" />
    </footer>
  );
};

export default Footer;