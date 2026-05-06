import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({
  imgUrl,
  gradient,
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
      transition={{ duration: 0.7, delay: currentIndex * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
      whileHover={{ y: -12 }}
    >
      <div className="glass-card glow-border rounded-3xl overflow-hidden transition-all duration-500">
        {/* Image / Gradient Container */}
        <div
          className="h-64 relative overflow-hidden"
          onClick={openModal}
        >
          {imgUrl ? (
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${imgUrl})` }}
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient || "from-blue-600 to-cyan-500"} transition-transform duration-700 group-hover:scale-105`}>
              <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.15) 0%, transparent 60%)'}} />
              <div className="absolute bottom-6 left-6 text-white/20 text-8xl font-black select-none">&lt;/&gt;</div>
            </div>
          )}

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-500" />

          {/* Action Buttons */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-400">
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-6 py-3 bg-white/95 backdrop-blur-sm text-slate-900 rounded-xl font-black shadow-2xl hover:scale-105 transition-all duration-300 text-sm"
            >
              <CodeBracketIcon className="w-5 h-5" />
              <span>Código</span>
            </Link>

            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-blue-600 text-white rounded-xl font-black shadow-2xl hover:scale-105 transition-all duration-300 text-sm"
            >
              <EyeIcon className="w-5 h-5" />
              <span>Ver Projeto</span>
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="p-7 space-y-4">
          <h5 className="text-xl font-black text-white group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h5>
          <p className="text-slate-400 leading-relaxed text-sm font-medium line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
