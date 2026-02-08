"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { CodeBracketIcon, EyeIcon, XMarkIcon, ArrowTopRightOnSquareIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FaRocket } from "react-icons/fa";

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
    title: "Q&A System",
    description: "Sistema completo de perguntas e respostas com autenticação, votação, categorização e sistema de reputação de usuários",
    image: "/images/projects/projetoQA.png",
    tag: ["All", "Front", "Back"],
    gitUrl: "https://github.com/Martinez-LMS/Projeto-Full-Stack.git",
    previewUrl: "https://qasyystem.netlify.app/",
  },
];

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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') goToPrevious();
      else if (event.key === 'ArrowRight') goToNext();
      else if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    const navbar = document.querySelector('nav');
    if (navbar) navbar.style.display = 'none';
    
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
      if (navbar) navbar.style.display = 'block';
    };
  }, [currentIndex, totalProjects, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {currentIndex > 0 && (
          <motion.button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 p-5 bg-white/95 backdrop-blur-xl rounded-2xl hover:bg-white transition-all duration-300 z-10 shadow-2xl"
            whileHover={{ scale: 1.15, x: -8 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeftIcon className="w-8 h-8 text-light-900" />
          </motion.button>
        )}

        {currentIndex < totalProjects - 1 && (
          <motion.button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 p-5 bg-white/95 backdrop-blur-xl rounded-2xl hover:bg-white transition-all duration-300 z-10 shadow-2xl"
            whileHover={{ scale: 1.15, x: 8 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRightIcon className="w-8 h-8 text-light-900" />
          </motion.button>
        )}

        <motion.div
          initial={{ scale: 0.7, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.7, opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-hidden shadow-3xl border-2 border-light-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image */}
          <div className="relative h-96 bg-light-100">
            <motion.div
              className="h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
              key={project.id}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-black/50" />
              
              <motion.button
                onClick={onClose}
                className="absolute top-8 right-8 p-4 bg-white/95 backdrop-blur-xl rounded-2xl hover:bg-white transition-all duration-300 shadow-2xl"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <XMarkIcon className="w-7 h-7 text-light-900" />
              </motion.button>

              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-white/95 backdrop-blur-xl rounded-full text-light-900 text-lg font-black shadow-2xl">
                {currentIndex + 1} / {totalProjects}
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <motion.div 
            className="p-12"
            key={project.id}
            initial={{ opacity: 0, x: isTransitioning ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-5xl font-black text-light-900 mb-6">{project.title}</h2>

            <p className="text-xl text-light-600 leading-relaxed mb-10 font-medium">
              {project.description}
            </p>

            <div className="mb-10">
              <h3 className="text-2xl font-black text-light-900 mb-6">Tecnologias Utilizadas</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: "React", color: "bg-blue-500" },
                  { name: "Next.js", color: "bg-black" },
                  { name: "JavaScript", color: "bg-yellow-500" },
                  { name: "Tailwind CSS", color: "bg-cyan-500" },
                ].map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    className={`px-6 py-3 ${tech.color} text-white text-base font-black rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300`}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href={project.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-10 py-5 bg-primary-500 hover:bg-primary-600 text-white rounded-2xl font-black transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl text-lg"
              >
                <CodeBracketIcon className="w-6 h-6" />
                Ver Código
                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
              </Link>

              <Link
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-10 py-5 bg-primary-500 hover:bg-primary-600 text-white rounded-2xl font-black transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl text-lg"
              >
                <EyeIcon className="w-6 h-6" />
                Ver Projeto
                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
              </Link>
            </div>
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

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-3 bg-primary-50 border-2 border-primary-200 rounded-full text-primary-600 text-sm font-black">
              PROJETOS
            </span>
          </motion.div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-light-900 mb-6">
            Meus Projetos
          </h2>
          
          <p className="text-2xl lg:text-3xl text-light-600 leading-relaxed max-w-4xl mx-auto font-medium">
            Projetos desenvolvidos com as mais <span className="font-black text-primary-600">modernas tecnologias</span> do mercado
          </p>
        </motion.div>
        
        {/* Filter Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-row justify-center items-center gap-4 mb-20"
        >
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
        </motion.div>

        {/* Projects Grid */}
        <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                currentIndex={index}
                onOpenModal={openModal}
              />
            </motion.li>
          ))}
        </ul>

        {isModalOpen && (
          <ProjectModal
            project={filteredProjects[currentProjectIndex]}
            currentIndex={currentProjectIndex}
            totalProjects={filteredProjects.length}
            onNavigate={handleNavigate}
            onClose={closeModal}
          />
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;