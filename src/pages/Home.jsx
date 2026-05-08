import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import {
  FiArrowRight,
  FiGithub,
  FiExternalLink,
  FiCode,
  FiLayers,
  FiCpu,
  FiGlobe,
  FiActivity,
  FiUsers,
  FiAward,
  FiBox,
  FiLayout,
  FiDatabase,
  FiLinkedin,
  FiTwitter
} from "react-icons/fi";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stats = [
    { label: "Years Experience", value: "3+", icon: <FiActivity /> },
    { label: "Projects Completed", value: "20+", icon: <FiBox /> },
    { label: "Satisfied Clients", value: "15+", icon: <FiUsers /> },
    { label: "Awards Won", value: "5+", icon: <FiAward /> },
  ];

  const miniSkills = [
    { name: "Frontend", icon: <FiLayout className="text-blue-400" />, level: "90%" },
    { name: "Backend", icon: <FiCpu className="text-purple-400" />, level: "85%" },
    { name: "Database", icon: <FiDatabase className="text-green-400" />, level: "80%" },
    { name: "DevOps", icon: <FiGlobe className="text-cyan-400" />, level: "70%" },
  ];

  return (
    <div className="relative min-h-screen bg-[#030014] text-white selection:bg-blue-500/30 overflow-hidden">

      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px]"
          style={{
            left: mousePosition.x - 300,
            top: mousePosition.y - 300,
            transition: "left 0.3s ease-out, top 0.3s ease-out"
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.svg')] opacity-20" />
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

       
     

        {/* Bento Grid - Skills & Experience */}
        <section className="py-20 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Main Skills Card - Large */}
            <div className="md:col-span-2 p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] -mr-32 -mt-32" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <FiCode className="text-blue-400" /> Technical Mastery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {miniSkills.map((skill) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-2 font-bold text-gray-300">
                          {skill.icon} {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">{skill.level}</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.level }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability Status Card */}
            <div className="p-10 rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 backdrop-blur-xl flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                  <FiGlobe className="text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Open for Collaboration</h2>
                <p className="text-gray-400 leading-relaxed">
                  Currently seeking innovative projects and high-impact teams.
                </p>
              </div>
              <Link to="/contact">
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-8 flex items-center gap-2 text-blue-400 font-bold"
                >
                  Let's Talk <FiArrowRight />
                </motion.button>
              </Link>
            </div>

            {/* Experience Card */}
            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl group">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FiLayers className="text-purple-400" /> Architecture
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Building scalable systems with clean code and modern design patterns.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Microservices', 'RESTful', 'GraphQL', 'AWS'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub Contributions Styled Card */}
            <div className="md:col-span-2 p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <FiGithub className="text-gray-400" /> Open Source
                </h2>
                <a href="https://github.com" className="text-sm font-bold text-blue-400 flex items-center gap-2 hover:underline">
                  View Contributions <FiExternalLink />
                </a>
              </div>
              <div className="flex gap-2 h-24 items-end">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${Math.random() * 100}%` }}
                    transition={{ delay: i * 0.05, duration: 1 }}
                    className="flex-1 bg-gradient-to-t from-blue-500/50 to-purple-500/50 rounded-t-sm"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </section>


        {/* Call To Action */}
        <section className="py-32 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-16 rounded-[4rem] bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] -z-10" />
            <h2 className="text-5xl md:text-7xl font-black mb-8">Ready to start?</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Whether you have a fully-fledged idea or just a spark of inspiration, let's build something extraordinary together.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 rounded-2xl bg-white text-black font-black text-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </section>

       
      </main>
    </div>
  );
};

export default Home;
