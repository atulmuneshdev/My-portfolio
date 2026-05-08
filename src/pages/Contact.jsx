import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiSend,
  FiCopy,
  FiCheckCircle,
  FiMessageSquare,
  FiUser,
  FiBriefcase,
  FiTerminal
} from "react-icons/fi";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Development",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  // Mouse follow effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const shadowX = useSpring(mouseX, springConfig);
  const shadowY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  // Typing animation state
  const [displayText, setDisplayText] = useState("");
  const fullText = "Something Amazing";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { name: "GitHub", icon: <FiGithub className="w-5 h-5" />, link: "https://github.com", color: "hover:text-purple-400" },
    { name: "LinkedIn", icon: <FiLinkedin className="w-5 h-5" />, link: "https://linkedin.com", color: "hover:text-blue-400" },
    // { name: "Twitter", icon: <FiTwitter className="w-5 h-5" />, link: "https://twitter.com", color: "hover:text-cyan-400" },
    { name: "Email", icon: <FiMail className="w-5 h-5" />, link: "mailto:hello@example.com", color: "hover:text-rose-400" },
  ];

  const techBadges = [
    "React", "Node.js", "Express", "MongoDB", "Socket.io", "Redux", "Tailwind"
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@atul.dev");
    setCopied(true);
    toast.success("Email copied to clipboard!", {
      style: {
        background: "#1e1b4b",
        color: "#fff",
        border: "1px solid #4f46e5",
      },
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("Message sent successfully! I'll get back to you soon.", {
      duration: 5000,
      icon: '🚀',
      style: {
        background: "#1e1b4b",
        color: "#fff",
        border: "1px solid #4f46e5",
      },
    });

    setFormData({ name: "", email: "", projectType: "Full-Stack Development", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 overflow-hidden bg-[#030014]"
      onMouseMove={handleMouseMove}
    >
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/20 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                Available for Freelance & Full-Time
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight h-[150px] md:h-[200px]">
                Let's Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 min-h-[1em] inline-block">
                  {displayText}
                  <span className="animate-pulse ml-1">|</span>
                </span> <br />
                Together
              </h2>

              <p className="text-gray-400 text-lg max-w-md">
                Have a project in mind? I'm always open to discussing new projects,
                creative ideas or opportunities to be part of your visions.
              </p>
            </div>

            {/* Email Copy Section */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl group hover:border-purple-500/50 transition-all duration-300 max-w-sm">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                <FiMail className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500 uppercase tracking-wider">Email Me</p>
                <p className="text-white font-medium">atulmuneshdev@gmail.com</p>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                {copied ? <FiCheckCircle className="w-5 h-5 text-green-400" /> : <FiCopy className="w-5 h-5" />}
              </button>
            </div>

            {/* Social Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className={`flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 group hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]`}
                >
                  <div className={`p-2 rounded-lg bg-white/5 ${social.color} transition-colors`}>
                    {social.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-white">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative group">
              {/* Animated Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative p-8 md:p-10 rounded-3xl bg-[#0a0a1a]/80 backdrop-blur-2xl border border-white/10 overflow-hidden">
                {/* Mouse Follow Glow */}
                <motion.div
                  className="absolute pointer-events-none -z-10 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full"
                  style={{ x: shadowX, y: shadowY, translateX: "-50%", translateY: "-50%" }}
                />

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
                      <div className="relative">
                        <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          required
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                      <div className="relative">
                        <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          required
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Project Type</label>
                    <div className="relative">
                      <FiBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all appearance-none cursor-pointer"
                      >
                        <option className="bg-[#0a0a1a]">Full-Stack Development</option>
                        <option className="bg-[#0a0a1a]">Mobile App Development</option>
                        <option className="bg-[#0a0a1a]">UI/UX Design</option>
                        <option className="bg-[#0a0a1a]">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Your Message</label>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-500" />
                      <textarea
                        required
                        rows="4"
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all resize-none"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 p-px font-semibold text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] disabled:opacity-50"
                  >
                    <div className="relative flex items-center justify-center gap-2 py-4 px-8 rounded-xl bg-[#0a0a1a]/40 group-hover:bg-transparent transition-all duration-300">
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Send Message</span>
                          <FiSend className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </div>
                  </button>
                </form>

                {/* Tech Badges */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-2 mb-4 text-gray-400">
                    <FiTerminal className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-widest">Stack Expertise</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {techBadges.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300 hover:border-purple-500/50 hover:text-purple-400 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
