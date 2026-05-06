"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { motion } from "framer-motion";
import { FaCode, FaRocket } from "react-icons/fa";

const navLinks = [
  { title: "Sobre", path: "#about" },
  { title: "Experiências", path: "#experience" },
  { title: "Tecnologias", path: "#skills" },
  { title: "Projetos", path: "#projects" },
  { title: "Contato", path: "#contact" },
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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white border-b border-light-200 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center text-white shadow-lg transition-all duration-300"
            >
              <FaCode className="w-6 h-6" />
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-black text-light-900 group-hover:text-primary-500 transition-colors duration-300">
                Leonardo Martinez
              </h1>
              <p className="text-xs text-light-500 font-bold">Desenvolvedor Frontend</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <NavLink href={link.path} title={link.title} />
              </motion.div>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 text-sm"
            >
              <FaRocket className="w-4 h-4" />
              <span>Contato</span>
            </motion.a>
          </div>

          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setNavbarOpen(true)}
              className="p-3 bg-primary-500 rounded-xl text-white shadow-lg transition-all duration-300"
            >
              <Bars3Icon className="h-6 w-6" />
            </motion.button>
          </div>
        </div>
      </div>

      <MenuOverlay links={navLinks} isOpen={navbarOpen} onClose={() => setNavbarOpen(false)} />
    </motion.nav>
  );
};

export default Navbar;
