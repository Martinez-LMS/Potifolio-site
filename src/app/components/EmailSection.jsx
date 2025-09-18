"use client";

import React, { useState, useRef } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import WhatsappIcon from "../../../public/whatsapp-logo.svg";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Mensagem enviada com sucesso!");
        setEmailSubmitted(true);
        e.target.reset(); // Limpa o formulário
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

  return (
    <section
      ref={ref}
      id="contact"
      className="py-20 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-secondary-50/30"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium backdrop-blur-sm">
               Vamos conversar?
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-light-900 mb-6 gradient-text">
            Entre em Contato
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-light-600 text-lg lg:text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Pronto para transformar sua ideia em realidade? 
            <span className="text-primary-400 font-semibold"> Vamos criar algo incrível juntos!</span>
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-light-900 mb-4">
                Conecte-se Comigo
              </h3>
              <p className="text-light-600 mb-8">
                Siga-me nas redes sociais para acompanhar meus projetos e novidades.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <motion.a
                href="https://github.com/Martinez-LMS"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 p-4 bg-light-100 border border-light-300 rounded-xl hover:border-primary-500/50 hover:bg-primary-50/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <Image src={GithubIcon} alt="GitHub" width={24} height={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-light-900 font-semibold group-hover:text-primary-600 transition-colors duration-300">
                    GitHub
                  </h4>
                  <p className="text-light-500 text-sm">Veja meus projetos</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/leonardo-martinez-santos-b8a9b9208/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 p-4 bg-light-100 border border-light-300 rounded-xl hover:border-primary-500/50 hover:bg-primary-50/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <Image src={LinkedinIcon} alt="LinkedIn" width={24} height={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-light-900 font-semibold group-hover:text-primary-600 transition-colors duration-300">
                    LinkedIn
                  </h4>
                  <p className="text-light-500 text-sm">Conecte-se profissionalmente</p>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/5541995746610"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 p-4 bg-light-100 border border-light-300 rounded-xl hover:border-primary-500/50 hover:bg-primary-50/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <Image src={WhatsappIcon} alt="WhatsApp" width={24} height={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-light-900 font-semibold group-hover:text-primary-600 transition-colors duration-300">
                    WhatsApp
                  </h4>
                  <p className="text-light-500 text-sm">Conversa rápida</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-10"></div>
            
            <div className="relative bg-white/80 backdrop-blur-sm border border-light-300 rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500">
              {emailSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✅</span>
                  </div>
                  <h3 className="text-2xl font-bold text-light-900 mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-light-600">
                    Obrigado pelo contato. Responderei em breve!
                  </p>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 border border-red-200 rounded-xl p-4"
                    >
                      <p className="text-red-600 text-sm">{error}</p>
                    </motion.div>
                  )}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-light-900 mb-2"
                    >
                      Seu Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 bg-light-100 border border-light-300 rounded-xl text-light-900 placeholder-light-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 hover:border-primary-500/50"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-light-900 mb-2"
                    >
                      Assunto
                    </label>
                    <input
                      name="subject"
                      type="text"
                      id="subject"
                      required
                      className="w-full px-4 py-3 bg-light-100 border border-light-300 rounded-xl text-light-900 placeholder-light-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 hover:border-primary-500/50"
                      placeholder="Comece dizendo Oi"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-light-900 mb-2"
                    >
                      Mensagem
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-light-100 border border-light-300 rounded-xl text-light-900 placeholder-light-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 hover:border-primary-500/50 resize-none"
                      placeholder="Vamos falar sobre..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    className={`w-full font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                        : "bg-primary-500 text-white shadow-glow hover:shadow-glow-lg"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <span>Enviar Mensagem</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
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
