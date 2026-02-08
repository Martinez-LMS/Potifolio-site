import React from "react";
import { motion } from "framer-motion";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(name)}
      className={`relative rounded-full border-2 px-6 py-3 text-lg font-semibold cursor-pointer transition-all duration-300 overflow-hidden ${
        isSelected
          ? "text-light-900 border-primary-500 bg-primary-500/10 shadow-glow"
          : "text-light-600 border-light-300 hover:border-primary-500/50 hover:text-primary-600 hover:bg-primary-50"
      }`}
    >
      <span className="relative z-10">{name}</span>
      
      {/* Background color for selected state */}
      {isSelected && (
        <motion.div
          className="absolute inset-0 bg-primary-500 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      {/* Hover effect */}
      <motion.div
        className="absolute inset-0 bg-primary-500 opacity-0"
        whileHover={{ opacity: 0.1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default ProjectTag;
