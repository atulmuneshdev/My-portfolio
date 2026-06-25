import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiDownload,
  FiExternalLink,
  FiZap,
  FiArrowRight,
  FiCode,
  FiCpu,
  FiDatabase,
  FiLayout,
  FiEye
} from "react-icons/fi";

import { Link } from "react-router-dom";
import { FaJava, FaServer, FaTools, FaJava as FaHibernate } from "react-icons/fa";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const roles = [
    "Full Stack Developer ",
    "MERN Stack Engineer",
    "Java Developer Intern (Learning OOP, DSA, JDBC)",
    "Frontend & Backend Developer",
    "Building Modern Web Experiences"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing Effect Logic
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentRole.slice(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  // Mouse Parallax Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 30 });
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(springY, [-300, 300], [10, -10]);
  const rotateY = useTransform(springX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const techBadges = [
    { icon: <FiCode />, name: "React", color: "text-cyan-400" },
    { icon: <FiDatabase />, name: "MongoDB", color: "text-green-400" },
    { icon: <FiCpu />, name: "Node.js", color: "text-emerald-400" },
    { icon: <FiLayout />, name: "Tailwind", color: "text-sky-400" },
    { icon: <FaJava />, name: "Java", color: "text-red-500" },
    { icon: <FaHibernate />, name: "Hibernate", color: "text-yellow-600" },
  
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5 space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium backdrop-blur-sm"
              >
                <FiZap className="animate-pulse" />
                Available for new opportunities
              </motion.div>

              <div className="space-y-2">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-400 text-xl md:text-2xl font-medium tracking-tight"
                >
                  Hello, I'm <span className="text-white font-bold">Kumar Atul Munesh</span>
                </motion.h2>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-5xl md:text-8xl font-black text-white leading-[1.1] tracking-tighter"
                >
                  Architecting <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                    Digital Excellence
                  </span>
                </motion.h1>
              </div>

              <div className="h-10">
                <p className="text-2xl md:text-3xl font-semibold text-gray-300">
                  I specialize in <span className="text-blue-400">{displayText}</span>
                  <span className="animate-pulse ml-1 text-blue-400">|</span>
                </p>
              </div>

              <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                A passionate Software Engineer dedicated to building robust, scalable, and visually stunning web applications that deliver exceptional user experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/projects"
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all"
                >
                  View Projects <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-2xl border border-white/10 text-white font-bold flex items-center gap-2 backdrop-blur-md hover:bg-white/5 transition-all"
                >
                  Hire Me <FiZap className="text-yellow-400" />
                </Link>
              </motion.div>

              <motion.a
                href="/Kumar_Atul_Munesh.pdf"
                download="Kumar_Atul_Munesh_CV.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl border border-white/10 text-white/70 font-bold flex items-center gap-2 backdrop-blur-md hover:bg-white/5 hover:text-white transition-all cursor-pointer"
              >
                Resume <FiDownload />
              </motion.a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              {[
                { icon: <FiGithub />, href: "https://github.com/atulmuneshdev" },
                { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/kumar-atul-munesh-a7a9983aa" },
                { icon: <FiTwitter />, href: "https://twitter.com" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  whileHover={{ y: -5, color: "#60a5fa" }}
                  className="text-2xl text-gray-500 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Content - 3D Card Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="w-full lg:w-2/5 flex justify-center items-center relative"
          >
            {/* Main Profile Image with Glow */}
            <div className="relative group">
              <motion.div
                animate={{
                  boxShadow: ["0 0 20px rgba(59,130,246,0.1)", "0 0 40px rgba(59,130,246,0.2)", "0 0 20px rgba(59,130,246,0.1)"]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                style={{ willChange: "transform, box-shadow" }}
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2rem] overflow-hidden border-2 border-white/10 p-2 bg-white/5 backdrop-blur-sm"
              >
                <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                  <img
                    src="atul1.png"
                    alt="Profile"
                    className="w-full h-full object-cover transition-all duration-700 scale-110 hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60" />
                </div>
              </motion.div>

              {/* Floating Tech Badges */}
              {techBadges.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 8, -8, 0]
                  }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                  style={{ willChange: "transform" }}
                  className={`absolute p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center gap-3 shadow-2xl z-20 ${i === 0 ? "-top-8 -left-12" :
                      i === 1 ? "-bottom-6 -left-8" :
                        i === 2 ? "top-12 -right-16" :
                          i === 3 ? "-bottom-10 -right-6" :
                            i === 4 ? "top-20 -left-10" :
                              i === 5 ? "bottom-20 -right-10" :
                                i === 6 ? "top-40 -left-8" :
                                  "bottom-40 -right-8"
                    }`}
                >
                  <span className={`text-2xl ${tech.color}`}>{tech.icon}</span>
                  <span className="text-sm font-bold text-white/90 hidden md:block">{tech.name}</span>
                </motion.div>
              ))}

              {/* Decorative Elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 blur-[80px] rounded-full animate-pulse" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 blur-[80px] rounded-full animate-pulse" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 bg-blue-400 rounded-full" />
        </div>
        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
