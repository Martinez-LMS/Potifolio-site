"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { DocumentArrowDownIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { FaCode, FaRocket, FaStar, FaTrophy, FaUsers, FaLightbulb } from "react-icons/fa";

const HeroSection = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400/3 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-primary-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-primary-700 font-black text-sm">Disponível para projetos</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl sm:text-7xl lg:text-8xl font-black text-light-900 leading-[1.1]"
              >
                <span className="block mb-4">Olá, eu sou</span>
                <span className="block text-primary-500">
                  <TypeAnimation
                    sequence={[
                      "Leonardo",
                      2500,
                      "Full-Stack Developer",
                      2500,
                      "React Specialist",
                      2500,
                      "Next.js Expert",
                      2500,
                    ]}
                    wrapper="span"
                    speed={25}
                    repeat={Infinity}
                  />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl lg:text-2xl text-light-600 leading-relaxed max-w-2xl font-medium"
              >
                Transformando ideias em <span className="font-black text-primary-600">experiências digitais</span> excepcionais através de código limpo, design moderno e inovação constante.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/#contact"
                className="group relative px-8 py-5 bg-primary-500 text-white font-black text-lg rounded-2xl shadow-2xl shadow-primary-500/40 hover:shadow-primary-500/60 hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Vamos conversar
                  <FaRocket className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              
              <a
                href="/api/curriculo?v=2"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-5 border-2 border-light-300 bg-white text-light-900 font-black text-lg rounded-2xl hover:border-primary-500 hover:bg-primary-50 hover:shadow-xl transition-all duration-300 flex items-center gap-3"
              >
                <DocumentArrowDownIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Baixar CV</span>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t-2 border-light-300"
            >
              {[
                { number: "4+", label: "Anos de Experiência", icon: <FaStar className="w-6 h-6 text-yellow-500" /> },
                { number: "10+", label: "Projetos Concluídos", icon: <FaCode className="w-6 h-6 text-primary-500" /> },
                { number: "100%", label: "Satisfação", icon: <SparklesIcon className="w-6 h-6 text-secondary-500" /> },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-3xl lg:text-4xl font-black text-light-900 mb-1 group-hover:text-primary-600 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-light-600 font-bold">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.9 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Glow Effects */}
              <div className="absolute inset-0 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Main Card */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-3xl p-6 shadow-2xl border border-light-200"
              >
                {/* Flip Card Container */}
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="relative w-full preserve-3d"
                  style={{ transformStyle: 'preserve-3d', aspectRatio: '1' }}
                >
                  {/* Front - Photo */}
                  <div 
                    className="absolute inset-0 backface-hidden cursor-pointer rounded-2xl overflow-hidden"
                    onClick={handleFlip}
                  >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-primary-200 shadow-xl">
                      <Image
                        src="/images/Perfil nova.jpg"
                        alt="Leonardo - Full Stack Developer"
                        className="w-full h-full object-cover"
                        width={500}
                        height={500}
                        quality={95}
                        priority
                      />
                      <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                  </div>

                  {/* Back - Info */}
                  <div 
                    className="absolute inset-0 backface-hidden cursor-pointer bg-primary-500 rounded-2xl p-8 flex flex-col justify-center items-center text-white shadow-xl"
                    style={{ transform: 'rotateY(180deg)' }}
                    onClick={handleFlip}
                  >
                    <h3 className="text-3xl font-black mb-8">Sobre Mim</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm w-full">
                      <div className="space-y-3">
                        <p><span className="opacity-80">Idade:</span> <span className="font-black">22 anos</span></p>
                        <p><span className="opacity-80">Localização:</span> <span className="font-black">Curitiba, PR</span></p>
                        <p><span className="opacity-80">Paixão:</span> <span className="font-black">Desenvolver</span></p>
                        <p><span className="opacity-80">Experiência:</span> <span className="font-black">4+ anos</span></p>
                      </div>
                      <div className="space-y-3">
                        <p><span className="opacity-80">Hobby:</span> <span className="font-black">Academia</span></p>
                        <p><span className="opacity-80">Objetivo:</span> <span className="font-black">Impactar</span></p>
                        <p><span className="opacity-80">Formação:</span> <span className="font-black">ADS</span></p>
                        <p><span className="opacity-80">Status:</span> <span className="font-black">Disponível</span></p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Flip Button */}
                <motion.button
                  onClick={handleFlip}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-6 py-3 bg-primary-500 text-white font-black rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Sobre Mim
                </motion.button>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 w-20 h-20 bg-primary-500 rounded-2xl shadow-2xl flex items-center justify-center text-white text-3xl font-black rotate-12"
              >
                ✓
              </motion.div>

              <motion.div
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-8 -left-8 w-16 h-16 bg-secondary-500 rounded-2xl shadow-2xl flex items-center justify-center text-white text-2xl font-black"
              >
                &lt;/&gt;
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;