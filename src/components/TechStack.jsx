import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiSocketdotio
} from "react-icons/si";

const TechStack = () => {
  const technologies = [
    { name: "React.js", icon: <SiReact />, color: "text-[#61DAFB]" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "text-[#339933]" },
    { name: "Express.js", icon: <SiExpress />, color: "text-white" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-[#47A248]" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-[#F7DF1E]" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-[#06B6D4]" },
    { name: "WebSocket", icon: <SiSocketdotio />, color: "text-white" },
    { name: "Git & GitHub", icon: <SiGithub />, color: "text-white" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Tech <span className="text-blue-400">Identity</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Leveraging a modern and powerful tech stack to build high-performance applications
            that scale and provide exceptional user experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{
                y: -10,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(59, 130, 246, 0.5)"
              }}
              style={{ willChange: "transform, opacity" }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-300 group flex flex-col items-center justify-center gap-4"
            >
              <div className={`text-5xl ${tech.color} transition-transform duration-500 group-hover:scale-110`}>
                {tech.icon}
              </div>
              <span className="text-white font-bold tracking-wide uppercase text-xs opacity-70 group-hover:opacity-100 transition-opacity">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
