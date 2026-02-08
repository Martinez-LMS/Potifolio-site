"use client";
// Corrige detecção de parâmetro curriculo com fallback para window.location.search
// Atualizado: 2024 - Adiciona fallback para garantir detecção correta do parâmetro
// Versão: 1.1 - Melhora detecção de parâmetro URL
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import EmailSection from "./EmailSection";
import Footer from "./Footer";

const HomeContent = () => {
  const searchParams = useSearchParams();
  
  // Estado inicial lê o parâmetro da URL diretamente para garantir detecção imediata
  const [curriculoType, setCurriculoType] = useState(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const param = urlParams.get('curriculo');
      return (param === 'sap' || param === 'front') ? param : 'front';
    }
    return 'front';
  });

  useEffect(() => {
    // Lê o parâmetro da URL usando useSearchParams ou window.location como fallback
    const param = searchParams?.get('curriculo') || (typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('curriculo') : null);
    console.log('Parâmetro detectado:', param);
    if (param === 'sap' || param === 'front') {
      setCurriculoType(param);
      console.log('Tipo definido como:', param);
    } else {
      setCurriculoType('front');
    }
  }, [searchParams]);
  
  // Garante que o tipo seja atualizado quando a URL mudar

  return (
    <>
      <Navbar curriculoType={curriculoType} />
      <HeroSection curriculoType={curriculoType} />
      <AboutSection curriculoType={curriculoType} />
      <ExperienceSection curriculoType={curriculoType} />
      <SkillsSection curriculoType={curriculoType} />
      <ProjectsSection curriculoType={curriculoType} />
      <EmailSection />
      <Footer curriculoType={curriculoType} />
    </>
  );
};

export default HomeContent;

