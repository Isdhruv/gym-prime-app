"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Testimonial", href: "#testimonial" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-deep-purple/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between md:justify-center">
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center space-x-6 bg-gradient-to-r from-primary-purple/20 to-accent-pink/20 backdrop-blur-sm rounded-full px-6 py-3 border border-primary-purple/30">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex items-center space-x-2"
            >
              <Sparkles className="w-6 h-6 text-accent-pink" />
            </motion.div>

            <nav className="flex space-x-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{
                    scale: 1.15,
                    color: "#e0aaff",
                    textShadow: "0px 0px 8px #e0aaff",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-gym-white font-medium transition-colors duration-200 cursor-pointer"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-gym-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gradient-to-r from-primary-purple/30 to-accent-pink/30 backdrop-blur-md border-t border-white/10 px-6 py-4"
        >
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.05, color: "#e0aaff" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-gym-white font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)} // close menu on click
              >
                {link.name}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
