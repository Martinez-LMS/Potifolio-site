import React from "react";
import { motion } from "framer-motion";

const TabButton = ({ active, selectTab, children }) => {
  return (
    <motion.button
      onClick={selectTab}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <p className={`px-4 py-2 font-semibold transition-all duration-300 ${
        active 
          ? "text-light-900" 
          : "text-light-600 hover:text-primary-600"
      }`}>
        {children}
      </p>
      
      {/* Animated underline */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-primary"
        initial={{ width: 0 }}
        animate={{ width: active ? "100%" : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      
      {/* Background glow for active state */}
      {active && (
        <motion.div
          className="absolute inset-0 bg-gradient-primary opacity-10 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );
};

export default TabButton;
