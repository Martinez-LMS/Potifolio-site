"use client";
import React from "react";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      color: "from-blue-500 to-purple-600",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "JavaScript", icon: "🟨" },
        { name: "TypeScript", icon: "🔷" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "HTML/CSS", icon: "🌐" },
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      color: "from-green-500 to-teal-600",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Python", icon: "🐍" },
        { name: "C#", icon: "🔷" },
        { name: "Express.js", icon: "🚀" },
        { name: "REST APIs", icon: "🔗" },
        { name: "GraphQL", icon: "📊" },
      ]
    },
    {
      title: "Banco de Dados",
      icon: "🗄️",
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "MongoDB", icon: "🍃" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MySQL", icon: "🐬" },
        { name: "Firebase", icon: "🔥" },
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: "☁️",
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "Docker", icon: "🐳" },
        { name: "AWS", icon: "☁️" },
        { name: "Git", icon: "📝" },
        { name: "Linux", icon: "🐧" },
      ]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="skills">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-secondary-50/30"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium backdrop-blur-sm">
              🛠️ Minhas Habilidades
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-light-900 mb-6 gradient-text">
            Tecnologias & Ferramentas
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-light-600 text-lg lg:text-xl leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            Domino uma ampla gama de tecnologias modernas para criar 
            <span className="text-primary-400 font-semibold"> soluções completas e escaláveis</span>, 
            desde o frontend até a infraestrutura.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Background glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm border border-light-300 rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-light-900">{category.title}</h3>
                    <p className="text-light-500 text-sm">Tecnologias e ferramentas</p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="group/skill flex items-center gap-3 p-4 bg-light-100 border border-light-300 rounded-xl hover:border-primary-500/50 hover:bg-primary-50/50 transition-all duration-300"
                    >
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-semibold text-light-900 group-hover/skill:text-primary-600 transition-colors duration-300">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
