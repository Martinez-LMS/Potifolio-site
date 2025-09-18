"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  GlobeAltIcon, 
  CodeBracketIcon, 
  TrophyIcon, 
  DevicePhoneMobileIcon, 
  RocketLaunchIcon, 
  CloudIcon,
  StarIcon
} from "@heroicons/react/24/outline";

const AboutSection = () => {
  const certificates = [
    {
      title: "Certificado de Desenvolvimento Web Completo",
      url: "https://www.udemy.com/certificate/UC-c9607b2d-884f-4618-80f0-44b957be98d6/",
      platform: "Udemy",
      icon: <GlobeAltIcon className="w-6 h-6" />,
      year: "2023"
    },
    {
      title: "Certificação em Desenvolvimento de Aplicações React",
      url: "https://www.udemy.com/certificate/UC-aa515fa6-6f81-4cd4-824b-00312b79b729/",
      platform: "Udemy",
      icon: <CodeBracketIcon className="w-6 h-6" />,
      year: "2023"
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      url: "#",
      platform: "freeCodeCamp",
      icon: <TrophyIcon className="w-6 h-6" />,
      year: "2024"
    },
    {
      title: "Responsive Web Design",
      url: "#",
      platform: "freeCodeCamp",
      icon: <DevicePhoneMobileIcon className="w-6 h-6" />,
      year: "2024"
    },
    {
      title: "Node.js Backend Development",
      url: "#",
      platform: "Coursera",
      icon: <RocketLaunchIcon className="w-6 h-6" />,
      year: "2024"
    },
    {
      title: "AWS Cloud Practitioner",
      url: "#",
      platform: "Amazon Web Services",
      icon: <CloudIcon className="w-6 h-6" />,
      year: "2024"
    }
  ];

  return (
    <section className="text-light-900 py-20 relative overflow-hidden" id="about">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-secondary-50/30"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium backdrop-blur-sm">
              Sobre mim
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-light-900 mb-6 gradient-text">
            Desenvolvedor Full-Stack
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-light-600 text-lg lg:text-xl leading-relaxed mb-12 max-w-4xl mx-auto"
          >
            Sou um desenvolvedor full-stack apaixonado por criar soluções inovadoras que moldam o futuro digital. 
            <span className="text-primary-400 font-semibold"> Transformo ideias complexas em experiências simples e eficientes</span>, 
            sempre buscando superar expectativas através de código limpo e design moderno.
          </motion.p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-light-900 mb-4">🎓 Formação Acadêmica</h3>
            <p className="text-light-600 text-lg">Minha jornada educacional em tecnologia</p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500">
              <div className="flex items-center gap-6">
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-light-900 mb-2">Análise e Desenvolvimento de Sistemas</h4>
                  <p className="text-primary-600 text-lg font-semibold mb-1">Universidade Positivo (UP)</p>
                  <p className="text-light-500">2022 - 2024</p>
                  <p className="text-light-600 mt-3">
                    Formação completa em desenvolvimento de sistemas, com foco em programação, 
                    banco de dados, arquitetura de software e metodologias ágeis.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-light-900 mb-4">🏆 Certificações</h3>
            <p className="text-light-600 text-lg">Certificados e cursos que validam meu conhecimento</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.a
                key={cert.title}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group block bg-white/80 backdrop-blur-sm border border-light-300 rounded-2xl p-6 hover:border-primary-500/50 hover:bg-primary-50/50 transition-all duration-300 shadow-card hover:shadow-card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-light-900 font-semibold group-hover:text-primary-600 transition-colors duration-300 mb-2 line-clamp-2">
                      {cert.title}
                    </h4>
                    <p className="text-light-500 text-sm mb-1">{cert.platform}</p>
                    <p className="text-primary-600 text-xs font-medium">{cert.year}</p>
                  </div>
                  <motion.span
                    className="text-primary-600 group-hover:translate-x-1 transition-transform duration-300 text-lg"
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-light-900 mb-4">
              🚀 Experiência Prática
            </h3>
            <p className="text-light-600 text-lg leading-relaxed max-w-4xl mx-auto">
              Com mais de <span className="text-primary-600 font-semibold">2 anos de experiência</span> em desenvolvimento, 
              já trabalhei em diversos projetos que vão desde aplicações web simples até sistemas complexos. 
              <span className="text-secondary-600 font-semibold"> Sempre focado em aprender novas tecnologias</span> e 
              <span className="text-secondary-600 font-semibold"> melhorar continuamente</span> minhas habilidades.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;