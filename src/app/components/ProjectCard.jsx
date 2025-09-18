import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({ 
  imgUrl, 
  title, 
  description, 
  gitUrl, 
  previewUrl, 
  currentIndex, 
  onOpenModal 
}) => {
  const openModal = () => onOpenModal(currentIndex);

  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={openModal}
    >
      <div
        className="h-52 md:h-72 rounded-t-xl relative overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-500"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Color overlay */}
        <div className="absolute inset-0 bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Hover overlay */}
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/60 to-white/50 backdrop-blur-sm bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-60 transition-all duration-500">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex gap-12"
            >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Link
                href={gitUrl}
                target="_blank"
                className="h-24 w-24 border-2 relative rounded-full border-primary-500/60 hover:border-primary-500 bg-white hover:bg-primary-500 backdrop-blur-sm group/link transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <CodeBracketIcon className="h-12 w-12 text-primary-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white transition-colors duration-300" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Link
                href={previewUrl}
                target="_blank"
                className="h-24 w-24 border-2 relative rounded-full border-secondary-500/60 hover:border-secondary-500 bg-white hover:bg-secondary-500 backdrop-blur-sm group/link transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <EyeIcon className="h-12 w-12 text-secondary-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white transition-colors duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating tech badges */}
        <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <motion.span 
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="px-3 py-1 bg-primary-500 border border-primary-400 rounded-full text-white text-xs font-semibold backdrop-blur-sm shadow-lg"
          >
            React
          </motion.span>
          <motion.span 
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="px-3 py-1 bg-secondary-500 border border-secondary-400 rounded-full text-white text-xs font-semibold backdrop-blur-sm shadow-lg"
          >
            Next.js
          </motion.span>
        </div>
      </div>
      
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-light-900 rounded-b-xl mt-3 bg-gradient-to-br from-white to-light-50 p-6 border border-light-300 hover:border-primary-500/50 hover:shadow-lg transition-all duration-500"
      >
        <motion.h5 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="text-xl font-bold mb-3 gradient-text"
        >
          {title}
        </motion.h5>
        <p className="text-light-600 leading-relaxed group-hover:text-light-700 transition-colors duration-300">{description}</p>
        
        {/* Project tags */}
        <motion.div 
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex gap-2 mt-4"
        >
          <motion.span 
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.2 }}
            className="px-3 py-1 bg-primary-100 border border-primary-300 rounded-full text-primary-700 text-sm font-medium hover:bg-primary-200 transition-all duration-300"
          >
            Frontend
          </motion.span>
          <motion.span 
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.2 }}
            className="px-3 py-1 bg-secondary-100 border border-secondary-300 rounded-full text-secondary-700 text-sm font-medium hover:bg-secondary-200 transition-all duration-300"
          >
            Responsive
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
    </>
  );
};

export default ProjectCard;
