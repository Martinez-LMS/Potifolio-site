"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { CodeBracketIcon, EyeIcon, XMarkIcon, ArrowTopRightOnSquareIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const projectsData = [
  {
    id: 1,
    title: "Barbearia Polidoro",
    description: "Site institucional moderno para barbearia com sistema de agendamento, galeria de trabalhos e apresentação de serviços",
    image: "/images/projects/barbeariaPolidoro.png",
    tag: ["All","Front"],
    gitUrl: "https://github.com/Martinez-LMS/barbearia-polidoro",
    previewUrl: "https://barbeariapolidoro.com/",
  },
  {
    id: 2,
    title: "MOVIEFLIX",
    description: "Plataforma de filmes, com a utilização de uma api de terceiros",
    image: "/images/projects/mvflix.png",
    tag: ["All", "Front"],
    gitUrl: "https://github.com/Martinez-LMS/movieflix_react_vite",
    previewUrl: "https://movieflix-plum.vercel.app/",
  },
  {
    id: 3,
    title: "SneakStreet",
    description: "Projeto nextJS com aplicação de multiplos filtros de pesquisa",
    image: "/images/projects/SneakStreet.png",
    tag: ["All", "Front"],
    gitUrl: "https://sneaker-e-commerce-rjlt9zyxl-Leonardo-projects.vercel.app/",
    previewUrl: "https://github.com/Martinez-LMS/SneakerE-commerce",
  },
  // {
  //   id: 4,
  //   title: "Food Ordering Application",
  //   description: "Project 4 description",
  //   image: "/images/projects/4.png",
  //   tag: ["All", "Mobile"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

// ProjectModal Component
const ProjectModal = ({ project, currentIndex, totalProjects, onNavigate, onClose }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        onNavigate(currentIndex - 1);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const goToNext = () => {
    if (currentIndex < totalProjects - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        onNavigate(currentIndex + 1);
        setIsTransitioning(false);
      }, 150);
    }
  };

  // Keyboard navigation, scroll lock and navbar hide
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      } else if (event.key === 'Escape') {
        onClose();
      }
    };

    // Lock scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Hide navbar on mobile when modal is open
    const navbar = document.querySelector('nav');
    if (navbar) {
      navbar.style.display = 'none';
    }
    
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      // Unlock scroll when modal is closed
      document.body.style.overflow = 'unset';
      // Show navbar again when modal is closed
      if (navbar) {
        navbar.style.display = 'block';
      }
    };
  }, [currentIndex, totalProjects, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Navigation arrows outside the modal */}
        {currentIndex > 0 && (
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-12 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 z-10 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </motion.button>
        )}

        {currentIndex < totalProjects - 1 && (
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-12 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 z-10 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </motion.button>
        )}

        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] md:max-h-[90vh] overflow-hidden shadow-2xl mx-2 md:mx-0"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="relative">
            <motion.div
              className="h-64 md:h-80 bg-cover bg-center"
              style={{
                backgroundImage: `url(${project.image})`,
              }}
              key={project.id}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Close button */}
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <XMarkIcon className="w-6 h-6 text-white" />
              </motion.button>

              {/* Project counter */}
              <motion.div 
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {currentIndex + 1} / {totalProjects}
              </motion.div>
            </motion.div>
          </div>

          {/* Modal Content */}
          <motion.div 
            className="p-4 md:p-8"
            key={project.id}
            initial={{ opacity: 0, x: isTransitioning ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-2xl md:text-4xl font-bold text-light-900 mb-3 md:mb-4 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {project.title}
            </motion.h2>

            <motion.p 
              className="text-light-600 text-base md:text-lg leading-relaxed mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {project.description}
            </motion.p>

            {/* Technologies */}
            <motion.div 
              className="mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3 className="text-lg md:text-xl font-semibold text-light-900 mb-3 md:mb-4">Tecnologias Utilizadas</h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                <motion.span 
                  className="px-3 md:px-4 py-1 md:py-2 bg-primary-100 border border-primary-300 rounded-full text-primary-700 text-xs md:text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  React
                </motion.span>
                <motion.span 
                  className="px-3 md:px-4 py-1 md:py-2 bg-secondary-100 border border-secondary-300 rounded-full text-secondary-700 text-xs md:text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  Next.js
                </motion.span>
                <motion.span 
                  className="px-3 md:px-4 py-1 md:py-2 bg-blue-100 border border-blue-300 rounded-full text-blue-700 text-xs md:text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  JavaScript
                </motion.span>
                <motion.span 
                  className="px-3 md:px-4 py-1 md:py-2 bg-green-100 border border-green-300 rounded-full text-green-700 text-xs md:text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  Tailwind CSS
                </motion.span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col gap-3 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <Link
                href={project.gitUrl}
                target="_blank"
                className="flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base"
              >
                <CodeBracketIcon className="w-4 h-4 md:w-5 md:h-5" />
                Ver Código
                <ArrowTopRightOnSquareIcon className="w-3 h-3 md:w-4 md:h-4" />
              </Link>

              <Link
                href={project.previewUrl}
                target="_blank"
                className="flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-secondary-500 hover:bg-secondary-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base"
              >
                <EyeIcon className="w-4 h-4 md:w-5 md:h-5" />
                Ver Projeto
                <ArrowTopRightOnSquareIcon className="w-3 h-3 md:w-4 md:h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const handleNavigate = (newIndex) => {
    setCurrentProjectIndex(newIndex);
  };

  const openModal = (projectIndex) => {
    setCurrentProjectIndex(projectIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-light-900 mt-4 mb-8 md:mb-12">
        Meus Projetos
      </h2>
      <div className="text-light-900 flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Front"
          isSelected={tag === "Front"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Back"
          isSelected={tag === "Back"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              currentIndex={index}
              totalProjects={filteredProjects.length}
              onNavigate={handleNavigate}
              onOpenModal={openModal}
            />
          </motion.li>
        ))}
      </ul>

      {/* Centralized Modal */}
      {isModalOpen && (
        <ProjectModal
          project={filteredProjects[currentProjectIndex]}
          currentIndex={currentProjectIndex}
          totalProjects={filteredProjects.length}
          onNavigate={handleNavigate}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
