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
          ? "text-primary-700 dark:text-white border-primary-500 bg-primary-500/15 dark:bg-primary-500/20 shadow-glow"
          : "text-slate-600 dark:text-slate-300 border-slate-300 dark:border-slate-600 hover:border-primary-500/50 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-500/10"
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
