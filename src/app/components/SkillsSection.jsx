"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaReact, FaNode, FaPython, FaJs, FaHtml5, FaDocker, FaAws, FaGitAlt, FaLinux, FaDatabase, FaServer, FaCode, FaCog, FaCloud, FaLaptop } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiGraphql, SiFirebase } from 'react-icons/si';
import { GiElephantHead } from 'react-icons/gi';

const SkillsSection = ({ curriculoType = "front" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  
  const skillCategoriesFront = [
    {
      title: "Frontend",
      icon: <FaLaptop className="w-8 h-8" />,
      skills: [
        { name: "React", icon: <FaReact className="w-7 h-7" />, color: "text-blue-500" },
        { name: "Next.js", icon: <SiNextdotjs className="w-7 h-7" />, color: "text-black" },
        { name: "JavaScript", icon: <FaJs className="w-7 h-7" />, color: "text-yellow-500" },
        { name: "TypeScript", icon: <SiTypescript className="w-7 h-7" />, color: "text-blue-600" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-7 h-7" />, color: "text-cyan-500" },
        { name: "HTML/CSS", icon: <FaHtml5 className="w-7 h-7" />, color: "text-orange-500" },
      ]
    },
    {
      title: "Backend",
      icon: <FaCog className="w-8 h-8" />,
      skills: [
        { name: "Node.js", icon: <FaNode className="w-7 h-7" />, color: "text-green-600" },
        { name: "Python", icon: <FaPython className="w-7 h-7" />, color: "text-blue-500" },
        { name: "C#", icon: <FaCode className="w-7 h-7" />, color: "text-purple-600" },
        { name: "Express.js", icon: <SiExpress className="w-7 h-7" />, color: "text-gray-800" },
        { name: "REST APIs", icon: <FaServer className="w-7 h-7" />, color: "text-indigo-600" },
        { name: "GraphQL", icon: <SiGraphql className="w-7 h-7" />, color: "text-pink-600" },
      ]
    },
    {
      title: "Banco de Dados",
      icon: <FaDatabase className="w-8 h-8" />,
      skills: [
        { name: "MongoDB", icon: <FaDatabase className="w-7 h-7" />, color: "text-green-600" },
        { name: "PostgreSQL", icon: <GiElephantHead className="w-7 h-7" />, color: "text-blue-700" },
        { name: "MySQL", icon: <FaDatabase className="w-7 h-7" />, color: "text-blue-600" },
        { name: "Firebase", icon: <SiFirebase className="w-7 h-7" />, color: "text-orange-500" },
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <FaCloud className="w-8 h-8" />,
      skills: [
        { name: "Docker", icon: <FaDocker className="w-7 h-7" />, color: "text-blue-600" },
        { name: "AWS", icon: <FaAws className="w-7 h-7" />, color: "text-orange-600" },
        { name: "Git", icon: <FaGitAlt className="w-7 h-7" />, color: "text-red-600" },
        { name: "Linux", icon: <FaLinux className="w-7 h-7" />, color: "text-yellow-600" },
      ]  
    }
  ];

  const skillCategoriesSAP = [
    {
      title: "SAP Fiori & UI5",
      icon: <FaLaptop className="w-8 h-8" />,
      skills: [
        { name: "SAP Fiori", icon: <FaCode className="w-7 h-7" />, color: "text-blue-600" },
        { name: "SAPUI5", icon: <FaCode className="w-7 h-7" />, color: "text-blue-500" },
        { name: "Fiori Elements", icon: <FaCode className="w-7 h-7" />, color: "text-indigo-600" },
        { name: "JavaScript", icon: <FaJs className="w-7 h-7" />, color: "text-yellow-500" },
        { name: "TypeScript", icon: <SiTypescript className="w-7 h-7" />, color: "text-blue-600" },
        { name: "XML Views", icon: <FaCode className="w-7 h-7" />, color: "text-gray-600" },
      ]
    },
    {
      title: "ABAP & Backend",
      icon: <FaCog className="w-8 h-8" />,
      skills: [
        { name: "ABAP", icon: <FaCode className="w-7 h-7" />, color: "text-orange-600" },
        { name: "RAP", icon: <FaCode className="w-7 h-7" />, color: "text-purple-600" },
        { name: "CDS Views", icon: <FaDatabase className="w-7 h-7" />, color: "text-blue-700" },
        { name: "OData", icon: <FaServer className="w-7 h-7" />, color: "text-indigo-600" },
        { name: "Gateway", icon: <FaServer className="w-7 h-7" />, color: "text-green-600" },
        { name: "BAPI", icon: <FaCode className="w-7 h-7" />, color: "text-gray-800" },
      ]
    },
    {
      title: "SAP BTP & Cloud",
      icon: <FaCloud className="w-8 h-8" />,
      skills: [
        { name: "SAP BTP", icon: <FaCloud className="w-7 h-7" />, color: "text-blue-600" },
        { name: "Cloud Foundry", icon: <FaCloud className="w-7 h-7" />, color: "text-cyan-500" },
        { name: "Git", icon: <FaGitAlt className="w-7 h-7" />, color: "text-red-600" },
        { name: "CI/CD", icon: <FaCode className="w-7 h-7" />, color: "text-purple-600" },
      ]
    },
    {
      title: "Ferramentas & Metodologias",
      icon: <FaCode className="w-8 h-8" />,
      skills: [
        { name: "Jira", icon: <FaCode className="w-7 h-7" />, color: "text-blue-500" },
        { name: "Scrum", icon: <FaCode className="w-7 h-7" />, color: "text-green-600" },
        { name: "Agile", icon: <FaCode className="w-7 h-7" />, color: "text-orange-600" },
        { name: "SAP Solution Manager", icon: <FaCode className="w-7 h-7" />, color: "text-indigo-600" },
      ]
    }
  ];

  const skillCategories = curriculoType === "sap" ? skillCategoriesSAP : skillCategoriesFront;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section ref={ref} className="py-32 relative overflow-hidden bg-white" id="skills">
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
              TECNOLOGIAS
            </span>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-black text-light-900 mb-6">
            Tecnologias & Ferramentas
          </h2>
          
          <p className="text-2xl lg:text-3xl text-light-600 leading-relaxed max-w-4xl mx-auto font-medium">
            {curriculoType === "sap" ? (
              <>Domínio em tecnologias <span className="font-black text-primary-600">SAP</span> e ferramentas essenciais para desenvolvimento de aplicações corporativas</>
            ) : (
              <>Domino uma ampla gama de tecnologias modernas para criar <span className="font-black text-primary-600">soluções completas e escaláveis</span>, desde o frontend até a infraestrutura.</>
            )}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative bg-white border-2 border-light-300 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
            >
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-20 h-20 bg-primary-500 rounded-3xl flex items-center justify-center text-white shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-4xl font-black text-light-900 mb-1">{category.title}</h3>
                    <p className="text-light-500 text-sm font-semibold">Tecnologias e ferramentas</p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -6 }}
                      className="group/skill flex flex-col items-center gap-3 p-6 bg-white border-2 border-light-300 rounded-2xl hover:border-primary-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
                    >
                      <div className={`${skill.color} group-hover/skill:scale-125 transition-transform duration-300`}>
                        {skill.icon}
                      </div>
                      <span className="font-black text-light-900 group-hover/skill:text-primary-600 transition-colors duration-300 text-base text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;