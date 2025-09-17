"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { motion } from "framer-motion";

const navLinks = [
  {
    title: "Sobre",
    path: "#about",
  },
  {
    title: "Habilidades",
    path: "#skills",
  },
  {
    title: "Projetos",
    path: "#projects",
  },
  {
    title: "Contato",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed mx-auto top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-primary-200 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-50/20 via-transparent to-secondary-50/20 opacity-50"></div>
      
      <div className="relative flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-3">
        {/* Logo/Brand Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center shadow-glow">
            <span className="text-white font-bold text-lg">&lt;/&gt;</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-light-900">Leonardo</h1>
            <p className="text-xs text-light-500">Full-Stack Developer</p>
          </div>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu block md:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setNavbarOpen(true)}
            className="flex items-center px-3 py-2 bg-primary-500 rounded-lg text-white shadow-md hover:shadow-glow transition-all duration-300"
          >
            <Bars3Icon className="h-4 w-4" />
          </motion.button>
        </div>

        {/* Desktop Navigation */}
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-2 mt-0">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              >
                <NavLink href={link.path} title={link.title} />
              </motion.li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden md:block"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-primary-500 text-white font-medium rounded-lg shadow-md hover:shadow-glow transition-all duration-300 flex items-center gap-2 text-sm"
          >
            <span>Vamos conversar</span>
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
      
      <MenuOverlay links={navLinks} isOpen={navbarOpen} onClose={() => setNavbarOpen(false)} />
    </motion.nav>
  );
};

export default Navbar;
