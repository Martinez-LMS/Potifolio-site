"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaReact, FaNodeJs, FaNode, FaPython, FaJs, FaHtml5, FaDocker, FaAws, FaGitAlt, FaLinux, FaFirebase, FaDatabase, FaServer, FaCloud, FaCode, FaLayerGroup } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiGraphql, SiCsharp, SiPastebin, SiCodeigniter } from 'react-icons/si';
import { GiElephantHead } from 'react-icons/gi';
import { ComputerDesktopIcon, CogIcon, CircleStackIcon, CloudIcon } from '@heroicons/react/24/outline';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const skillCategories = [
    {
      title: "Frontend",
      icon: <ComputerDesktopIcon className="w-6 h-6" />,
      color: "from-blue-500 to-purple-600",
      skills: [
        { name: "React", icon: <FaReact className="w-5 h-5" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5" /> },
        { name: "JavaScript", icon: <FaJs className="w-5 h-5" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-5 h-5" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5" /> },
        { name: "HTML/CSS", icon: <FaHtml5 className="w-5 h-5" /> },
      ]
    },
    {
      title: "Backend",
      icon: <CogIcon className="w-6 h-6" />,
      color: "from-green-500 to-teal-600",
      skills: [
        { name: "Node.js", icon: <FaNode className="w-5 h-5" /> },
        { name: "Python", icon: <FaPython className="w-5 h-5" /> },
        { name: "C#", icon: <FaCode className="w-5 h-5" /> },
        { name: "Express.js", icon: <FaServer className="w-5 h-5" /> },
        { name: "REST APIs", icon: <FaCode className="w-5 h-5" /> },
        { name: "GraphQL", icon: <FaCode className="w-5 h-5" /> },
      ]
    },
    {
      title: "Banco de Dados",
      icon: <CircleStackIcon className="w-6 h-6" />,
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "MongoDB", icon: <FaLayerGroup className="w-5 h-5" /> },
        { name: "PostgreSQL", icon: <GiElephantHead className="w-5 h-5" /> },
        { name: "MySQL", icon: <SiPastebin className="w-5 h-5" /> },
        { name: "Firebase", icon: <SiCodeigniter className="w-5 h-5" /> },
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <CloudIcon className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "Docker", icon: <FaDocker className="w-5 h-5" /> },
        { name: "AWS", icon: <FaAws className="w-5 h-5" /> },
        { name: "Git", icon: <FaGitAlt className="w-5 h-5" /> },
        { name: "Linux", icon: <FaLinux className="w-5 h-5" /> },
      ]
    }
  ];

  return (
    <section ref={ref} className="py-20 relative overflow-hidden" id="skills">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-secondary-50/30"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium backdrop-blur-sm">
               Minhas Tecnologias
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-light-900 mb-6 gradient-text">
            Tecnologias & Ferramentas
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-light-600 text-lg lg:text-xl leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            Domino uma ampla gama de tecnologias modernas para criar 
            <span className="text-primary-400 font-semibold"> soluções completas e escaláveis</span>, 
            desde o frontend até a infraestrutura.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="relative group"
            >
              {/* Background glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm border border-light-300 rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-light-900">{category.title}</h3>
                    <p className="text-light-500 text-sm">Tecnologias e ferramentas</p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                      className="group/skill flex items-center gap-3 p-3 sm:p-4 bg-light-100 border border-light-300 rounded-xl hover:border-primary-500/50 hover:bg-primary-50/50 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 text-primary-600 group-hover/skill:text-primary-700 transition-colors duration-300">
                        {skill.icon}
                      </div>
                      <span className="font-semibold text-light-900 group-hover/skill:text-primary-600 transition-colors duration-300 text-sm sm:text-base whitespace-nowrap overflow-hidden text-ellipsis">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
