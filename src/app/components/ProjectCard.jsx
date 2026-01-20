import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaReact, FaNode } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

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
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: currentIndex * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
      whileHover={{ y: -16, scale: 1.02 }}
    >
      <div className="bg-white border-2 border-light-300 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
        {/* Image Container */}
        <div
          className="h-72 md:h-80 relative overflow-hidden bg-light-100"
          style={{
            background: `url(${imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
          onClick={openModal}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-500"></div>
          
          {/* Action Buttons */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-2xl font-black shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300"
            >
              <CodeBracketIcon className="w-6 h-6" />
              <span>Código</span>
            </Link>
            
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-2xl font-black shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300"
            >
              <EyeIcon className="w-6 h-6" />
              <span>Visualizar</span>
            </Link>
          </div>

          {/* Tech Badges */}
          <div className="absolute top-6 left-6 flex gap-3">
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="px-4 py-2 bg-white/90 backdrop-blur-sm text-primary-600 text-xs font-black rounded-xl shadow-xl flex items-center gap-2"
            >
              <FaReact className="w-4 h-4" />
              React
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="px-4 py-2 bg-white/90 backdrop-blur-sm text-black text-xs font-black rounded-xl shadow-xl flex items-center gap-2"
            >
              <SiNextdotjs className="w-4 h-4" />
              Next.js
            </motion.span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-8 space-y-5">
          <h5 className="text-3xl font-black text-light-900 group-hover:text-primary-600 transition-colors duration-300">
            {title}
          </h5>
          <p className="text-light-600 leading-relaxed text-lg font-medium">
            {description}
          </p>
          
          <div className="flex gap-3 pt-2">
            <span className="px-5 py-2 bg-primary-50 text-primary-700 text-sm font-black rounded-xl border-2 border-primary-300">
              Frontend
            </span>
            <span className="px-5 py-2 bg-primary-50 text-primary-700 text-sm font-black rounded-xl border-2 border-primary-300">
              Responsive
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;