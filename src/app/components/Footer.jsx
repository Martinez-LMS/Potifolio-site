"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import WhatsappIcon from "../../../public/whatsapp-logo.svg";
import { FaCode, FaRocket } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t-2 border-light-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-primary-500 rounded-3xl flex items-center justify-center text-white shadow-2xl"
              >
                <FaCode className="w-8 h-8" />
              </motion.div>
              <div>
                <h2 className="text-3xl font-black text-light-900">Leonardo Martinez</h2>
                <p className="text-sm text-primary-600 font-black">Full-Stack Developer</p>
              </div>
            </div>
            <p className="text-lg text-light-600 leading-relaxed font-medium">
              Transformando ideias em <span className="font-black text-primary-600">experiências digitais</span> através de código limpo e design moderno.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-black text-light-900">Links Rápidos</h3>
            <div className="space-y-4">
              {[
                { href: "/#about", label: "Sobre Mim" },
                { href: "/#skills", label: "Tecnologias" },
                { href: "/#projects", label: "Projetos" },
                { href: "/#contact", label: "Contato" },
                { href: "/api/curriculo?v=2", label: "Currículo", external: true },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3 text-lg font-bold text-light-600 hover:text-primary-600 transition-all duration-300"
                >
                  <span className="w-2 h-2 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span>{link.label}</span>
                  <motion.span
                    className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                    animate={{ x: 0 }}
                  >
                    →
                  </motion.span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-black text-light-900">Conecte-se</h3>
            <div className="flex gap-4">
              {[
                { href: "https://github.com/Martinez-LMS", icon: GithubIcon, alt: "GitHub", bg: "bg-gray-900" },
                { href: "https://www.linkedin.com/in/leonardo-martinez-santos-b8a9b9208/", icon: LinkedinIcon, alt: "LinkedIn", bg: "bg-blue-600" },
                { href: "https://wa.me/5541995746610", icon: WhatsappIcon, alt: "WhatsApp", bg: "bg-green-500" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -8, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-16 h-16 ${social.bg} rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300`}
                >
                  <Image src={social.icon} alt={social.alt} width={28} height={28} className="text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-12 border-t-2 border-light-300"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <p className="text-lg font-black text-light-900">
              © 2024 Leonardo Martinez. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-lg text-light-600 font-bold">
              <span>Feito com</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-red-500"
              >
                ❤️
              </motion.span>
              <span>usando</span>
              <span className="text-primary-600 font-black">Next.js</span>
              <span>e</span>
              <span className="text-primary-600 font-black">Tailwind CSS</span>
              <FaRocket className="w-5 h-5 text-secondary-500" />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;