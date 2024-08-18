"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C#</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Analise e Desenvolvimento de Sistemas | UP</li>
      </ul>
    ),
  },
  {
    title: "Certificados",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <a 
            href="https://www.udemy.com/certificate/UC-c9607b2d-884f-4618-80f0-44b957be98d6/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Certificado de Desenvolvimento Web Completo
          </a>
        </li>
        <li>
          <a 
            href="https://www.udemy.com/certificate/UC-aa515fa6-6f81-4cd4-824b-00312b79b729/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Certificação em Desenvolvimento de Aplicações React
          </a>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <Image src="/images/hero.jpeg" width={500} height={500} className="rounded-lg" alt="heroImage"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 ">Sobre mim</h2>
          <p className="text-base lg:text-lg">
          Sou um desenvolvedor full-stack, explorando para criar soluções que moldam novos padrões. Estou empenhado em simplificar o complexo e desenvolver soluções que superam expectativas. Minha jornada é dedicada a desbravar o território digital, trazendo criatividade e eficiência a cada projeto.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Educação{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Certificados{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
