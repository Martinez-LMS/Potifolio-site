"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCode, FaRocket, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-200/30 dark:bg-black/50 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-primary-500/5 dark:bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
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
                className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-primary-500/20"
              >
                <FaCode className="w-7 h-7" />
              </motion.div>
              <div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">Leonardo Martinez</h2>
                <p className="text-sm text-primary-600 dark:text-blue-400 font-black">Desenvolvedor Frontend</p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Transformando ideias em <span className="font-black text-primary-600 dark:text-blue-400">experiências digitais</span> através de código limpo e design moderno.
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
            <h3 className="text-xl font-black text-slate-900 dark:text-white">Links Rápidos</h3>
            <div className="space-y-3">
              {[
                { href: "/#about", label: "Sobre Mim" },
                { href: "/#skills", label: "Tecnologias" },
                { href: "/#projects", label: "Projetos" },
                { href: "/#contact", label: "Contato" },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="group flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-300 text-sm font-semibold"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                </Link>
              ))}
              <div className="pt-3 border-t border-slate-300 dark:border-slate-800 space-y-2">
                <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Currículos:</p>
                {[
                  { href: "/?curriculo=front", label: "Frontend CV" },
                  { href: "/?curriculo=sap", label: "SAP/Fiori CV" },
                ].map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="group flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-blue-400 transition-all duration-300 text-sm font-semibold"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </Link>
                ))}
              </div>
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
            <h3 className="text-xl font-black text-slate-900 dark:text-white">Conecte-se</h3>
            <div className="flex gap-4">
              {[
                { href: "https://github.com/Martinez-LMS", icon: <FaGithub className="w-6 h-6" />, bg: "bg-gray-800 hover:bg-gray-700", shadow: "hover:shadow-gray-900/40" },
                { href: "https://www.linkedin.com/in/leonardo-martinez-santos-b8a9b9208/", icon: <FaLinkedin className="w-6 h-6" />, bg: "bg-blue-700 hover:bg-blue-600", shadow: "hover:shadow-blue-700/30" },
                { href: "https://wa.me/5541995746610", icon: <FaWhatsapp className="w-6 h-6" />, bg: "bg-green-700 hover:bg-green-600", shadow: "hover:shadow-green-700/30" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -6 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-14 h-14 ${social.bg} rounded-2xl flex items-center justify-center text-white shadow-xl ${social.shadow} transition-all duration-300`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <div className="glass-card rounded-2xl p-5 space-y-2">
              <p className="text-xs font-black text-slate-500 dark:text-slate-500 uppercase tracking-widest">Disponível para</p>
              <div className="flex flex-wrap gap-2">
                {["Freelance", "CLT", "PJ", "Remoto"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-primary-500/10 dark:bg-blue-500/10 border border-primary-500/25 dark:border-blue-500/20 rounded-full text-primary-600 dark:text-blue-400 text-xs font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-10 border-t border-slate-300 dark:border-slate-800"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 dark:text-slate-400 text-sm font-bold">
              © 2025 Leonardo Martinez. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 font-bold">
              <span>Feito com</span>
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-red-400"
              >
                ❤️
              </motion.span>
              <span>usando</span>
              <span className="text-blue-400 font-black">Next.js</span>
              <span>&</span>
              <span className="text-cyan-400 font-black">Tailwind CSS</span>
              <FaRocket className="w-4 h-4 text-blue-400" />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
