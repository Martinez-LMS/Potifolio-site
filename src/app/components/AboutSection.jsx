"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCertificate, FaRocket, FaAward, FaCode, FaDesktop, FaCloud, FaMobile, FaLightbulb, FaUsers, FaChartLine, FaTools, FaHandshake } from "react-icons/fa";

const AboutSection = ({ curriculoType = "front" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const aboutContent = {
    front: {
      title: "Desenvolvedor Full-Stack",
      description: "Transformando ideias complexas em experiências simples e eficientes, sempre buscando superar expectativas através de código limpo e soluções inovadoras.",
      subtitle: "Desenvolvedor com sólida trajetória no ecossistema React, focado na criação de interfaces dinâmicas, escaláveis e de alta performance."
    },
    sap: {
      title: "Desenvolvedor Fiori/UI5 | Aplicações Corporativas SAP",
      description: "Desenvolvendo aplicações corporativas SAP modernas e escaláveis utilizando Fiori Elements, SAPUI5 e implementação de regras de negócio em ABAP.",
      subtitle: "Desenvolvedor Fiori/UI5 especializado em aplicações corporativas SAP, com experiência em Fiori Elements, SAPUI5 e modelo RAP."
    }
  };

  const content = aboutContent[curriculoType] || aboutContent.front;

  const certificates = [
    {
      title: "Certificado de Desenvolvimento Web Completo",
      url: "https://www.udemy.com/certificate/UC-c9607b2d-884f-4618-80f0-44b957be98d6/",
      platform: "Udemy",
      icon: <FaCode className="w-7 h-7" />,
      year: "2023"
    },
    {
      title: "Certificação em Desenvolvimento de Aplicações React",
      url: "https://www.udemy.com/certificate/UC-aa515fa6-6f81-4cd4-824b-00312b79b729/",
      platform: "Udemy",
      icon: <FaDesktop className="w-7 h-7" />,
      year: "2023"
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      url: "#",
      platform: "freeCodeCamp",
      icon: <FaAward className="w-7 h-7" />,
      year: "2024"
    },
    {
      title: "Responsive Web Design",
      url: "#",
      platform: "freeCodeCamp",
      icon: <FaMobile className="w-7 h-7" />,
      year: "2024"
    },
    {
      title: "Node.js Backend Development",
      url: "#",
      platform: "Coursera",
      icon: <FaRocket className="w-7 h-7" />,
      year: "2024"
    },
    {
      title: "AWS Cloud Practitioner",
      url: "#",
      platform: "Amazon Web Services",
      icon: <FaCloud className="w-7 h-7" />,
      year: "2024"
    }
  ];

  const skills = [
    { icon: <FaCode className="w-6 h-6" />, title: "Desenvolvimento Full-Stack", description: "Experiência completa em frontend e backend" },
    { icon: <FaUsers className="w-6 h-6" />, title: "Trabalho em Equipe", description: "Colaboração eficiente em projetos ágeis" },
    { icon: <FaLightbulb className="w-6 h-6" />, title: "Solução de Problemas", description: "Pensamento analítico e criatividade" },
    { icon: <FaChartLine className="w-6 h-6" />, title: "Performance", description: "Otimização e melhoria contínua" },
    { icon: <FaTools className="w-6 h-6" />, title: "Metodologias Ágeis", description: "Scrum, Kanban e práticas ágeis" },
    { icon: <FaHandshake className="w-6 h-6" />, title: "Comunicação", description: "Clara e eficaz com clientes e equipe" },
  ];

  return (
    <section ref={ref} className="py-32 relative overflow-hidden bg-white" id="about">
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
              SOBRE MIM
            </span>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-black text-light-900 mb-6">
            {content.title}
          </h2>
          
          <p className="text-2xl lg:text-3xl text-light-600 leading-relaxed max-w-4xl mx-auto font-medium">
            {content.description.split(' ').map((word, i) => 
              word.includes('ideias') || word.includes('aplicações') || word.includes('Fiori') ? (
                <span key={i} className="font-black text-primary-600">{word} </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </p>
        </motion.div>

        {/* Main Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative bg-white border-2 border-light-300 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50/50 rounded-bl-full"></div>
            
            <div className="relative z-10 flex items-start gap-6 mb-8">
              <div className="w-20 h-20 bg-primary-500 rounded-3xl flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <FaGraduationCap className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-4xl font-black text-light-900 mb-2">Formação Acadêmica</h3>
                <p className="text-light-500 text-sm font-semibold">Educação e Conhecimento</p>
              </div>
            </div>
            
            <div className="relative z-10 space-y-4">
              <div>
                <h4 className="text-2xl font-black text-light-900 mb-3">Análise e Desenvolvimento de Sistemas</h4>
                <p className="text-primary-600 text-xl font-black mb-2">Universidade Positivo (UP)</p>
                <p className="text-light-500 mb-4 font-black">2023 - 2025</p>
                <p className="text-light-600 leading-relaxed text-lg font-medium">
                  Formação completa em desenvolvimento de sistemas, com foco em programação, 
                  banco de dados, arquitetura de software, metodologias ágeis e gestão de projetos. 
                  Aprendizado constante em tecnologias modernas e melhores práticas da indústria.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative bg-white border-2 border-light-300 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50/50 rounded-bl-full"></div>
            
            <div className="relative z-10 flex items-start gap-6 mb-8">
              <div className="w-20 h-20 bg-primary-500 rounded-3xl flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <FaBriefcase className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-4xl font-black text-light-900 mb-2">Experiência Prática</h3>
                <p className="text-light-500 text-sm font-semibold">Trabalho e Projetos</p>
              </div>
            </div>
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-baseline gap-4 mb-4">
                <div className="text-6xl font-black text-primary-600">4+</div>
                <div className="text-xl text-light-600 font-black">Anos de Experiência</div>
              </div>
              <p className="text-light-600 leading-relaxed text-lg font-medium">
                Com mais de 4 anos de experiência em desenvolvimento, já trabalhei em diversos projetos 
                que vão desde aplicações web simples até sistemas complexos e escaláveis. Especializado 
                em React, Next.js e Node.js, sempre focado em aprender novas tecnologias, aplicar melhores 
                práticas e entregar soluções de alta qualidade que agregam valor aos clientes.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skills Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-black text-light-900 mb-4">Minhas Habilidades</h3>
            <p className="text-xl text-light-600 font-medium">Competências técnicas e interpessoais</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group bg-white border-2 border-light-300 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-black text-light-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {skill.title}
                </h4>
                <p className="text-light-600 leading-relaxed font-medium">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <span className="px-6 py-3 bg-primary-50 border-2 border-primary-200 rounded-full text-primary-600 text-sm font-black">
                CERTIFICAÇÕES
              </span>
            </motion.div>
            <h3 className="text-5xl lg:text-6xl font-black text-light-900 mb-4">Certificações</h3>
            <p className="text-xl text-light-600 font-medium">Certificados e cursos que validam meu conhecimento</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group relative bg-white border-2 border-light-300 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
              >
                
                <div className="relative z-10 flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0">
                    {cert.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-black text-light-900 group-hover:text-primary-600 transition-colors duration-300 mb-2 line-clamp-2">
                      {cert.title}
                    </h4>
                    <p className="text-light-500 text-sm font-semibold mb-1">{cert.platform}</p>
                    <p className="text-primary-600 text-xs font-black">{cert.year}</p>
                  </div>
                </div>
                
                <div className="relative z-10 flex items-center text-primary-600 text-sm font-bold group-hover:gap-3 transition-all duration-300">
                  <span>Ver certificado</span>
                  <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;