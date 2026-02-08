"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaRocket } from "react-icons/fa";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const experiences = [
    {
      id: 1,
      company: "ZT Consulting",
      role: "Desenvolvimento WEB",
      location: "Curitiba, PR",
      period: "2024 - 2026",
      activities: [
        "Arquitetura de aplicações robustas garantindo segurança de tipos, redução de bugs e alta escalabilidade do código",
        "Implementação de fluxos de dados complexos para gestão de estado global e roteamento dinâmico e performático",
        "Criação de interfaces responsivas, modernas e padronizadas focando em agilidade do desenvolvimento e fidelidade visual (Pixel Perfect)",
        "Integração de APIs RESTful garantindo comunicações assíncronas eficientes entre frontend e serviços de backend",
        "Gerenciamento de serviços em nuvem e automação de deploys e hospedagem",
        "Garantia de estabilidade através de testes unitários e de integração, participação ativa em revisões de código e controle de versão rigoroso",
        "Atuação em projetos multidisciplinares sob metodologias ágeis, contribuindo com refinamentos técnicos e documentação de requisitos"
      ],
      technologies: ["React", "TypeScript", "Redux", "React Router", "Tailwind CSS", "Axios", "Firebase", "AWS", "Netlify", "Jest", "Git", "Jira"]
    },
    {
      id: 2,
      company: "Grupo Muffato",
      role: "Infraestrutura de Rede",
      location: "Curitiba, PR",
      period: "2023 - 2024",
      activities: [
        "Responsável pela manutenção e configuração de redes locais (LAN) dedicadas, garantindo baixa latência e fluxo contínuo de dados entre dispositivos e servidores",
        "Administração e suporte técnico a hardware e software de segurança, incluindo DVRs, NVRs e Servidores, assegurando integridade das gravações e acesso em tempo real",
        "Implementação de rotinas de manutenção preventiva e corretiva para mitigar falhas de sistema, mantendo indicadores de disponibilidade (uptime) em níveis críticos para a operação"
      ],
      technologies: ["Redes LAN", "DVR", "NVR", "Servidores", "Monitoramento"]
    },
    {
      id: 3,
      company: "Maya Protese Dentaria",
      role: "Desenvolvimento WEB",
      location: "Curitiba, PR",
      period: "2021 - 2022",
      activities: [
        "Criação de interfaces modernas, responsivas e de alta fidelidade priorizando componentização e reutilização de código",
        "Construção e manutenção de APIs RESTful robustas aplicando princípios de Clean Code e padrões de projeto para garantir APIs performáticas",
        "Responsável pela ponte entre front-end e back-end, garantindo integridade dos dados, tratamento de exceções e otimização do consumo de recursos",
        "Manipulação de bancos de dados e implementação de soluções em nuvem garantindo disponibilidade contínua dos sistemas",
        "Execução de testes automatizados, controle de versão rigoroso e participação ativa em ritos de agilidade e refinamentos técnicos"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "C#", "ASP.NET Core", "SQL", "Axios", "Firebase", "AWS", "Netlify", "Jest", "Git"]
    }
  ];

  return (
    <section ref={ref} className="py-32 relative overflow-hidden bg-white" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
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
              EXPERIÊNCIAS
            </span>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-black text-light-900 mb-6">
            Experiências Profissionais
          </h2>
          
          <p className="text-2xl lg:text-3xl text-light-600 leading-relaxed max-w-4xl mx-auto font-medium">
            Trajetória profissional com <span className="font-black text-primary-600">projetos desafiadores</span> e soluções inovadoras
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-primary-500 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative pl-20 md:pl-0"
              >
                <div className={`flex flex-col md:flex-row md:items-start gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-xl transform md:-translate-x-1/2 z-10"></div>

                  <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                    <div className="space-y-4 text-left">
                      <div>
                        <h3 className="text-2xl font-black text-light-900 mb-1">
                          {experience.company}
                        </h3>
                        <p className="text-lg font-black text-primary-600 mb-3">
                          {experience.role}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-light-600 font-semibold">
                          <span className="flex items-center gap-2">
                            <FaMapMarkerAlt className="w-3 h-3" />
                            {experience.location}
                          </span>
                          <span className="flex items-center gap-2">
                            <FaCalendarAlt className="w-3 h-3" />
                            {experience.period}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <p className="text-xs font-black text-light-700 uppercase tracking-wide">
                          Principais Atividades
                        </p>
                        <ul className="space-y-2">
                          {experience.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="flex items-start gap-3 text-light-600 leading-relaxed text-sm font-medium">
                              <span className="text-primary-500 font-black mt-1 flex-shrink-0">•</span>
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2">
                        <p className="text-xs font-black text-light-700 mb-2 uppercase tracking-wide">
                          Tecnologias Utilizadas
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1.5 bg-primary-50 border border-primary-200 rounded-lg text-primary-700 font-bold text-xs hover:bg-primary-100 transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary-500 text-white font-black text-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
          >
            <span>Vamos trabalhar juntos?</span>
            <FaRocket className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;