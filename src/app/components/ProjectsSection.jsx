"use client";
import React, { useState, useRef } from "react";
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
    description: "Site institucional moderno para barbearia com sistema de agendamento, galeria de trabalhos e apresentação de serviços.",
    image: "/images/projects/barbeariaPolidoro.png",
    gradient: "from-amber-600 to-orange-500",
    tag: ["All", "Front"],
    gitUrl: "https://github.com/Martinez-LMS/barbearia-polidoro",
    previewUrl: "https://barbeariapolidoro.com/",
  },
  {
    id: 2,
    title: "MOVIEFLIX",
    description: "Plataforma de filmes com consumo de API de terceiros, busca, listagem e detalhes de filmes em tempo real.",
    image: "/images/projects/mvflix.png",
    gradient: "from-red-600 to-rose-500",
    tag: ["All", "Front"],
    gitUrl: "https://github.com/Martinez-LMS/movieflix_react_vite",
    previewUrl: "https://movieflix-plum.vercel.app/",
  },
  {
    id: 3,
    title: "Q&A System",
    description: "Sistema completo de perguntas e respostas com autenticação, votação, categorização e sistema de reputação de usuários.",
    image: "/images/projects/projetoQA.png",
    gradient: "from-indigo-600 to-violet-500",
    tag: ["All", "Front", "Back"],
    gitUrl: "https://github.com/Martinez-LMS/Projeto-Full-Stack.git",
    previewUrl: "https://qasyystem.netlify.app/",
  },
  {
    id: 4,
    title: "CertSim",
    description: "Plataforma web para estudos e preparação para certificações profissionais, com simulados interativos e acompanhamento de desempenho.",
    image: "/images/certsim.jpeg",
    gradient: "from-blue-600 to-cyan-500",
    tag: ["All", "Front"],
    gitUrl: "https://certsim.io/app",
    previewUrl: "https://certsim.io/app",
  },
  {
    id: 5,
    title: "Farmácia",
    description: "Sistema de gestão para farmácia com controle de estoque, cadastro de produtos e gerenciamento de vendas.",
    image: "/images/Descontofacil.jpeg",
    gradient: "from-emerald-600 to-teal-500",
    tag: ["All", "Front", "Back"],
    gitUrl: "https://github.com/Martinez-LMS/Farmacia",
    previewUrl: "https://github.com/Martinez-LMS/Farmacia",
  },
  {
    id: 6,
    title: "W Festival",
    description: "Landing de festival com streaming ao vivo, line-up, conteúdo exclusivo e Watch Again. React, Vite e Tailwind, com carrosséis e layout responsivo.",
    image: "/images/W%20festival.jpeg",
    gradient: "from-orange-600 to-rose-500",
    tag: ["All", "Front"],
    gitUrl: "https://github.com/Martinez-LMS/W-festiva",
    previewUrl: "https://w-festiva.netlify.app/",
  },
];

const ProjectModal = ({ project, currentIndex, totalProjects, onNavigate, onClose }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setIsTransitioning(true);
      setTimeout(() => { onNavigate(currentIndex - 1); setIsTransitioning(false); }, 150);
    }
  };

  const goToNext = () => {
    if (currentIndex < totalProjects - 1) {
      setIsTransitioning(true);
      setTimeout(() => { onNavigate(currentIndex + 1); setIsTransitioning(false); }, 150);
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      else if (e.key === 'ArrowRight') goToNext();
      else if (e.key === 'Escape') onClose();
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
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {currentIndex > 0 && (
          <motion.button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 p-4 bg-slate-800/95 backdrop-blur-xl border border-slate-700 rounded-2xl hover:bg-slate-700 transition-all duration-300 z-10 shadow-2xl"
            whileHover={{ scale: 1.1, x: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeftIcon className="w-7 h-7 text-white" />
          </motion.button>
        )}

        {currentIndex < totalProjects - 1 && (
          <motion.button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 p-4 bg-slate-800/95 backdrop-blur-xl border border-slate-700 rounded-2xl hover:bg-slate-700 transition-all duration-300 z-10 shadow-2xl"
            whileHover={{ scale: 1.1, x: 4 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRightIcon className="w-7 h-7 text-white" />
          </motion.button>
        )}

        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 40 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-slate-900 border border-slate-700 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image / Gradient */}
          <div className="relative h-72 overflow-hidden">
            {project.image ? (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
            ) : (
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}>
                <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.15) 0%, transparent 60%)'}} />
                <div className="absolute bottom-6 left-8 text-white/10 text-9xl font-black select-none">&lt;/&gt;</div>
              </div>
            )}
            <div className="absolute inset-0 bg-black/50" />

            <motion.button
              onClick={onClose}
              className="absolute top-6 right-6 p-3 bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-xl hover:bg-slate-800 transition-all duration-300 shadow-2xl"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <XMarkIcon className="w-6 h-6 text-white" />
            </motion.button>

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-5 py-2 bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-full text-white text-sm font-black shadow-2xl">
              {currentIndex + 1} / {totalProjects}
            </div>
          </div>

          {/* Content */}
          <motion.div
            className="p-10"
            key={project.id}
            initial={{ opacity: 0, x: isTransitioning ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-4xl font-black text-white mb-4">{project.title}</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 font-medium">{project.description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={project.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 border border-slate-700 hover:border-blue-500/50 text-white rounded-2xl font-black transition-all duration-300 hover:scale-105 shadow-xl text-base"
              >
                <CodeBracketIcon className="w-5 h-5" />
                Ver Código
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </Link>

              <Link
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 text-white rounded-2xl font-black transition-all duration-300 hover:scale-105 shadow-2xl shadow-primary-500/20 text-base"
              >
                <EyeIcon className="w-5 h-5" />
                Ver Projeto
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
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

  const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

  const openModal = (projectIndex) => {
    setCurrentProjectIndex(projectIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
      {/* Background decorators */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-600/10 dark:bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 dark:bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="px-6 py-3 bg-blue-500/15 dark:bg-blue-500/10 border border-blue-500/40 dark:border-blue-500/30 rounded-full text-primary-600 dark:text-blue-400 text-sm font-black tracking-widest inline-block mb-6">
            PROJETOS
          </span>

          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6">
            Meus <span className="gradient-text">Projetos</span>
          </h2>

          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto font-medium">
            Projetos desenvolvidos com as mais <span className="font-black text-primary-600 dark:text-blue-400">modernas tecnologias</span> do mercado
          </p>
        </motion.div>

        {/* Filter Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-row justify-center items-center gap-3 mb-16"
        >
          {["All", "Front", "Back"].map((t) => (
            <ProjectTag key={t} onClick={setTag} name={t} isSelected={tag === t} />
          ))}
        </motion.div>

        {/* Projects Grid */}
        <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gradient={project.gradient}
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
            onNavigate={setCurrentProjectIndex}
            onClose={closeModal}
          />
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
