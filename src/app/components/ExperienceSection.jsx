"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaRocket } from "react-icons/fa";

const ExperienceSection = ({ curriculoType = "front" }) => {
  const ref = useRef(null);
  useInView(ref, { margin: "-100px" });

  const experiencesFront = [
    {
      id: 1,
      company: "ZT Consulting",
      role: "Desenvolvimento WEB",
      location: "Curitiba, PR",
      period: "2024 – 2026",
      activities: [
        "Arquitetura de aplicações robustas com React + TypeScript, garantindo segurança de tipos, redução de bugs e alta escalabilidade",
        "Implementação de fluxos de dados complexos com Redux para gestão de estado global e React Router para roteamento performático",
        "Criação de interfaces responsivas e padronizadas com Tailwind CSS, focando em agilidade e fidelidade visual (Pixel Perfect)",
        "Integração de APIs RESTful com Axios, garantindo comunicações assíncronas eficientes entre frontend e backend",
        "Gerenciamento de serviços em nuvem com Firebase e AWS, além de automação de deploys via Netlify",
        "Garantia de estabilidade com testes unitários e de integração com Jest, code review ativo e controle de versão com Git",
        "Atuação em projetos multidisciplinares com metodologias ágeis, refinamentos técnicos e documentação no Jira"
      ],
      technologies: ["React", "TypeScript", "Redux", "React Router", "Tailwind CSS", "Axios", "Firebase", "AWS", "Netlify", "Jest", "Git", "Jira"]
    },
    {
      id: 2,
      company: "CertSim",
      role: "Desenvolvimento FrontEnd",
      location: "Curitiba, PR",
      period: "2023 – 2024",
      activities: [
        "Desenvolvimento e evolução de plataforma web voltada para estudos e preparação para certificações profissionais",
        "Criação de interfaces onde os usuários podiam acessar conteúdos, realizar simulados e acompanhar seu desempenho",
        "Construção de componentes reutilizáveis e organização da aplicação em arquitetura escalável com React",
        "Integração com APIs REST garantindo correta comunicação entre o front-end e os serviços de backend"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "Git"]
    },
    {
      id: 3,
      company: "Maya Protese Dentaria",
      role: "Desenvolvimento WEB",
      location: "Curitiba, PR",
      period: "2021 – 2022",
      activities: [
        "Criação de interfaces modernas, responsivas e de alta fidelidade priorizando componentização e reutilização de código",
        "Construção e manutenção de APIs RESTful com C# e ASP.NET Core, aplicando Clean Code e padrões de projeto",
        "Ponte entre front-end e back-end, garantindo integridade dos dados, tratamento de exceções e otimização com Axios",
        "Manipulação de bancos de dados e implementação de soluções em nuvem garantindo disponibilidade contínua",
        "Execução de testes automatizados com Jest, controle de versão com Git e participação em ritos ágeis"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "C#", "ASP.NET Core", "SQL", "Axios", "Firebase", "AWS", "Netlify", "Jest", "Git"]
    }
  ];

  const experiencesSAP = [
    {
      id: 1,
      company: "ZT Consulting",
      role: "Desenvolvimento SAP Fiori/UI5",
      location: "Curitiba, PR",
      period: "2024 – 2026",
      activities: [
        "Desenvolvimento SAPUI5 Freestyle & UX Strategy: Design e arquitetura de aplicações customizadas seguindo as diretrizes de UX da SAP",
        "Implementação com Fiori Elements: Desenvolvimento de aplicações utilizando List Report, Object Page e Overview Page",
        "Desenvolvimento ABAP e RAP: Implementação de regras de negócio robustas criando APIs OData performáticas e escaláveis",
        "CDS Views e OData Services: Criação e otimização de CDS Views complexas para exposição de dados via Gateway",
        "Integração e Extensibilidade: Desenvolvimento de extensões em aplicações padrão SAP e customizações de UI",
        "Metodologias Ágeis e Colaboração: Atuação em projetos com metodologias ágeis e documentação no Jira"
      ],
      technologies: ["SAP Fiori", "SAPUI5", "ABAP", "Fiori Elements", "CDS Views", "OData", "Gateway", "RAP", "SAP BTP", "Git", "Jira"]
    }
  ];

  const experiences = curriculoType === "sap" ? experiencesSAP : experiencesFront;

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
            {curriculoType === "sap" ? (
              <>Desenvolvendo aplicações corporativas SAP com <span className="font-black text-primary-600">Fiori Elements e SAPUI5</span></>
            ) : (
              <>Trajetória com <span className="font-black text-primary-600">projetos desafiadores</span> e soluções inovadoras</>
            )}
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
                        <h3 className="text-2xl font-black text-light-900 mb-1">{experience.company}</h3>
                        <p className="text-lg font-black text-primary-600 mb-3">{experience.role}</p>
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
                        <p className="text-xs font-black text-light-700 uppercase tracking-wide">Principais Atividades</p>
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
                        <p className="text-xs font-black text-light-700 mb-2 uppercase tracking-wide">Tecnologias Utilizadas</p>
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
