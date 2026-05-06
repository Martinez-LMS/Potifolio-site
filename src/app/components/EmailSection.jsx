"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { EnvelopeIcon, CheckCircleIcon, PaperAirplaneIcon, UserIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin, FaWhatsapp, FaRocket } from "react-icons/fa";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const data = {
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      };

      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setEmailSubmitted(true);
        e.target.reset();
        setTimeout(() => setEmailSubmitted(false), 5000);
      } else {
        setError(result.error || "Erro ao enviar mensagem. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro:", error);
      setError("Erro de conexão. Verifique sua internet e tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Martinez-LMS",
      icon: <FaGithub className="w-7 h-7" />,
      color: "bg-gray-900",
      description: "Veja meus projetos",
      hoverColor: "hover:bg-gray-800"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/leonardo-martinez-santos-b8a9b9208/",
      icon: <FaLinkedin className="w-7 h-7" />,
      color: "bg-blue-600",
      description: "Conecte-se profissionalmente",
      hoverColor: "hover:bg-blue-700"
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/5541995746610",
      icon: <FaWhatsapp className="w-7 h-7" />,
      color: "bg-green-500",
      description: "Conversa rápida",
      hoverColor: "hover:bg-green-600"
    }
  ];

  return (
    <section ref={ref} id="contact" className="py-32 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
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
              CONTATO
            </span>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-black text-light-900 mb-6">
            Entre em Contato
          </h2>

          <p className="text-2xl lg:text-3xl text-light-600 leading-relaxed max-w-4xl mx-auto font-medium">
            Pronto para transformar sua ideia em realidade?
            <span className="block mt-4 font-black text-primary-600">
              Vamos criar algo incrível juntos!
            </span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-4xl font-black text-light-900 mb-4">Conecte-se Comigo</h3>
              <p className="text-xl text-light-600 leading-relaxed mb-10 font-medium">
                Siga-me nas redes sociais para acompanhar meus projetos e novidades.
              </p>
            </div>

            <div className="space-y-5">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 12, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group flex items-center gap-6 p-6 ${social.color} ${social.hoverColor} rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 text-white`}
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                    {social.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-black mb-1">{social.name}</h4>
                    <p className="text-white/80 text-sm font-semibold">{social.description}</p>
                  </div>
                  <motion.span
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-2xl font-black"
                  >
                    →
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white border-2 border-light-300 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500">
              {emailSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
                  >
                    <CheckCircleIcon className="w-14 h-14 text-white" />
                  </motion.div>
                  <h3 className="text-4xl font-black text-light-900 mb-4">Mensagem Enviada!</h3>
                  <p className="text-xl text-light-600 font-medium">
                    Obrigado pelo contato. Responderei em breve!
                  </p>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 border-2 border-red-200 rounded-2xl p-5"
                    >
                      <p className="text-red-600 text-sm font-black">{error}</p>
                    </motion.div>
                  )}

                  <div>
                    <label htmlFor="email" className="block text-lg font-black text-light-900 mb-3 flex items-center gap-2">
                      <EnvelopeIcon className="w-5 h-5 text-primary-600" />
                      Seu Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      id="email"
                      required
                      className="w-full px-6 py-4 bg-light-50 border-2 border-light-300 rounded-2xl text-light-900 placeholder-light-500 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 hover:border-primary-500/50"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-lg font-black text-light-900 mb-3 flex items-center gap-2">
                      <DocumentTextIcon className="w-5 h-5 text-primary-600" />
                      Assunto
                    </label>
                    <input
                      name="subject"
                      type="text"
                      id="subject"
                      required
                      className="w-full px-6 py-4 bg-light-50 border-2 border-light-300 rounded-2xl text-light-900 placeholder-light-500 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 hover:border-primary-500/50"
                      placeholder="Comece dizendo Olá"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-lg font-black text-light-900 mb-3 flex items-center gap-2">
                      <UserIcon className="w-5 h-5 text-primary-600" />
                      Mensagem
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={6}
                      className="w-full px-6 py-4 bg-light-50 border-2 border-light-300 rounded-2xl text-light-900 placeholder-light-500 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 hover:border-primary-500/50 resize-none"
                      placeholder="Vamos falar sobre..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02, y: -4 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    className={`w-full font-black py-6 px-10 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-2xl hover:shadow-3xl ${
                      isSubmitting
                        ? "bg-light-400 text-light-700 cursor-not-allowed"
                        : "bg-primary-500 hover:bg-primary-600 text-white"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                        />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <PaperAirplaneIcon className="w-6 h-6" />
                        <span>Enviar Mensagem</span>
                        <FaRocket className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
