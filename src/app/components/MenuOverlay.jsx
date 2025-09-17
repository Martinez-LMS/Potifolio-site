"use client";
import React from "react";
import NavLink from "./NavLink";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";

const MenuOverlay = ({ links, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-white/95 backdrop-blur-md z-50 flex flex-col py-8 items-center"
          onClick={onClose}
        >
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white hover:shadow-glow transition-all duration-300"
          >
            <XMarkIcon className="h-6 w-6" />
          </motion.button>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
              <span className="text-white font-bold text-xl">&lt;/&gt;</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-light-900">Leonardo</h1>
              <p className="text-sm text-light-500">Full-Stack Developer</p>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col space-y-6"
          >
            {links.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <NavLink href={link.path} title={link.title} />
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-primary text-white font-semibold rounded-xl hover:shadow-glow transition-all duration-300 flex items-center gap-2"
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;
