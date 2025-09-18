"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section ref={ref} className="lg:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-secondary-50/30"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="grid grid-cols-1 sm:grid-cols-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-8 py-4 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-lg font-semibold backdrop-blur-sm">
              Olá, bem-vindo ao meu portfólio
            </span>
          </motion.div>

          <h1 className="text-light-900 mb-6 text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block"
            >
              <span className="text-primary-600">
                Olá! Eu sou{" "}
              </span>
            </motion.span>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="min-h-[1.2em] flex items-center"
            >
              <TypeAnimation
                sequence={[
                  "Leonardo",
                  2000,
                  "Full-Stack Developer",
                  2000,
                  "React Specialist",
                  2000,
                  "Next.js Expert",
                  2000,
                ]}
                wrapper="span"
                speed={30}
                repeat={Infinity}
                className="gradient-text"
                style={{ display: 'inline-block' }}
              />
            </motion.div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-light-600 text-lg sm:text-xl mb-8 lg:text-2xl max-w-2xl leading-relaxed"
          >
            Desenvolvedor apaixonado por criar experiências digitais incríveis. 
            <span className="text-primary-400 font-semibold"> Transformando ideias em realidade</span> através de código limpo e design moderno.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/#contact"
              className="group relative px-8 py-4 bg-primary-500 rounded-full text-white font-semibold text-lg hover-lift hover-glow transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Vamos conversar</span>
              <div className="absolute inset-0 bg-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link
              href="Curriculo DEV ok.pdf"
              target="_blank"
              className="group relative px-8 py-4 border-2 border-primary-500/30 rounded-full text-primary-500 font-semibold text-lg hover:border-primary-500 hover:bg-primary-50 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                📄 Baixar CV
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </Link>
          </motion.div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="col-span-4 place-self-center mt-8 lg:mt-0"
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 animate-pulse-glow"></div>
            
            {/* Flip Card Container */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-[280px] h-[280px] lg:w-[450px] lg:h-[450px] perspective-1000"
              style={{ perspective: '1000px' }}
            >
              {/* Flip Card */}
              <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="relative w-full h-full preserve-3d"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front Side - Photo */}
                <div className="absolute inset-0 backface-hidden cursor-pointer" onClick={handleFlip}>
                  <div className="relative rounded-full bg-white w-full h-full border-4 border-primary-200 shadow-card hover:shadow-glow transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-white rounded-full"></div>
                    <Image
                      src="/images/FotoPerfil.jpg"
                      alt="Leonardo - Full Stack Developer"
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full object-cover w-full h-full"
                      width={500}
                      height={500}
                      quality={95}
                      priority
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />
                    
                    {/* Click hint */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 hover:opacity-100 transition-opacity duration-300">
                      Clique para saber mais
                    </div>
                  </div>
                </div>

                {/* Back Side - Personal Info */}
                <div 
                  className="absolute inset-0 backface-hidden cursor-pointer"
                  style={{ transform: 'rotateY(180deg)' }}
                  onClick={handleFlip}
                >
                  <div className="relative rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 w-full h-full border-4 border-primary-200 shadow-card hover:shadow-glow transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/90 to-secondary-500/90 rounded-full p-6 flex flex-col justify-center items-center text-white">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center"
                      >
                        <div className="text-4xl mb-4"></div>
                        <h3 className="text-xl lg:text-2xl font-bold mb-3">Sobre Mim</h3>
                        <br />
                        <div className="space-y-2 text-sm lg:text-base">
                          <div className="space-y-1">
                            <p className="text-white/95 text-center"><span className="text-white/70">Idade:</span> <span className="font-semibold">22 anos</span></p>
                            <p className="text-white/95 text-center"><span className="text-white/70">Localização:</span> <span className="font-semibold">Curitiba, PR</span></p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-white/95 text-center"><span className="text-white/70">Paixão:</span> <span className="font-semibold">Desenvolver soluções</span></p>
                            <p className="text-white/95 text-center"><span className="text-white/70">Hobby:</span> <span className="font-semibold">Academia e games</span></p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-white/95 text-center"><span className="text-white/70">Objetivo:</span> <span className="font-semibold">Impactar o mundo</span></p>
                            <p className="text-white/95 text-center"><span className="text-white/70">Experiência:</span> <span className="font-semibold">2+ anos</span></p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Elements - Only show when not flipped */}
              {!isFlipped && (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white text-lg font-bold shadow-glow"
                  >
                    ⚡
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center text-white text-xl shadow-glow"
                  >
                    💻
                  </motion.div>
                </>
              )}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-8 -left-8 w-10 h-10 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-glow"
              >
                🚀
              </motion.div>
              
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-glow"
              >
                ✨
              </motion.div>

              {/* Status indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-8 right-4 lg:bottom-4 lg:right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg"
              >
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                Disponível
              </motion.div>

            </motion.div>

            {/* Decorative rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-primary-200/30 rounded-full"
              style={{ width: 'calc(100% + 40px)', height: 'calc(100% + 40px)', top: '-20px', left: '-20px' }}
            ></motion.div>
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-secondary-200/20 rounded-full"
              style={{ width: 'calc(100% + 60px)', height: 'calc(100% + 60px)', top: '-30px', left: '-30px' }}
            ></motion.div>
          </div>

          {/* About Me Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 lg:mt-8 text-center"
          >
            <motion.button
              onClick={handleFlip}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-full shadow-lg hover:shadow-glow transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              <span>Sobre Mim</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
