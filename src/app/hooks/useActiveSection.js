import { useState, useEffect } from 'react';

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset maior para melhor detecção
      
      let currentSection = 'about'; // Seção padrão

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            currentSection = section;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Verificar seção ativa no carregamento inicial
    const timer = setTimeout(handleScroll, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return activeSection;
};

export default useActiveSection;
