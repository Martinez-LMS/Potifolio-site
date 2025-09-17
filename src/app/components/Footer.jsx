"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import WhatsappIcon from "../../../public/whatsapp-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-light-50 border-t border-light-300 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 via-transparent to-secondary-50/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 mb-10">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 lg:pr-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-xl">&lt;/&gt;</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-light-900">Leonardo Martinez</h2>
                <p className="text-sm text-primary-600 font-medium">Full-Stack Developer</p>
              </div>
            </div>
            <p className="text-light-600 leading-relaxed text-base">
              Desenvolvedor Full-Stack apaixonado por criar soluções inovadoras que transformam ideias em realidade digital.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6 lg:px-4"
          >
            <h3 className="text-xl font-bold text-light-900 whitespace-nowrap">Links Rápidos</h3>
            <div className="space-y-3">
              <Link href="/#about" className="group block text-light-600 hover:text-primary-600 transition-all duration-300 text-base font-medium px-3 py-2 rounded-lg hover:bg-primary-50 hover:shadow-md">
                <span className="relative z-10">Sobre Mim</span>
              </Link>
              <Link href="/#skills" className="group block text-light-600 hover:text-primary-600 transition-all duration-300 text-base font-medium px-3 py-2 rounded-lg hover:bg-primary-50 hover:shadow-md">
                <span className="relative z-10">Tecnologias</span>
              </Link>
              <Link href="/#projects" className="group block text-light-600 hover:text-primary-600 transition-all duration-300 text-base font-medium px-3 py-2 rounded-lg hover:bg-primary-50 hover:shadow-md">
                <span className="relative z-10">Projetos</span>
              </Link>
              <Link href="/#contact" className="group block text-light-600 hover:text-primary-600 transition-all duration-300 text-base font-medium px-3 py-2 rounded-lg hover:bg-primary-50 hover:shadow-md">
                <span className="relative z-10">Contato</span>
              </Link>
              <Link href="Curriculo DEV ok.pdf" target="_blank" className="group block text-light-600 hover:text-primary-600 transition-all duration-300 text-base font-medium px-3 py-2 rounded-lg hover:bg-primary-50 hover:shadow-md">
                <span className="relative z-10">Currículo</span>
              </Link>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 lg:pl-8"
          >
            <h3 className="text-xl font-bold text-light-900 whitespace-nowrap">Conecte-se</h3>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/Martinez-LMS"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center shadow-lg hover:shadow-glow hover:shadow-2xl transition-all duration-300"
              >
                <Image src={GithubIcon} alt="GitHub" width={24} height={24} className="text-white" />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/leonardo-martinez-santos-b8a9b9208/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-glow hover:shadow-2xl transition-all duration-300"
              >
                <Image src={LinkedinIcon} alt="LinkedIn" width={24} height={24} className="text-white" />
              </motion.a>
              
              <motion.a
                href="https://wa.me/5541995746610"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg hover:shadow-glow hover:shadow-2xl transition-all duration-300"
              >
                <Image src={WhatsappIcon} alt="WhatsApp" width={24} height={24} className="text-white" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-light-300"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-center lg:text-left">
              <p className="text-light-700 text-base font-medium">
                © 2024 Leonardo Martinez. Todos os direitos reservados.
              </p>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-light-600 text-base">
                Feito com <span className="text-red-500">❤️</span> usando 
                <span className="text-primary-600 font-semibold"> Next.js</span> e 
                <span className="text-primary-600 font-semibold"> Tailwind CSS</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
