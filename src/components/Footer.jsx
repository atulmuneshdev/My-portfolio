import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FiGithub, 
  FiLinkedin, 
  FiTwitter, 
  FiMail, 
  FiArrowUp, 
  FiZap,
  FiChevronRight
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: "https://github.com/atulmuneshdev", label: "GitHub" },
    { icon: <FiLinkedin />, href: "www.linkedin.com/in/kumar-atul-munesh-a7a9983aa", label: "LinkedIn" },
    { icon: <FiTwitter />, href: "https://twitter.com", label: "Twitter" },
    { icon: <FiMail />, href: "atulmuneshdev@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-[#030014]/50 backdrop-blur-xl overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[100px] bg-blue-500/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-[0_0_15px_rgba(37,99,235,0.3)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] transition-all duration-300">
                A
              </div>
              <span className="text-xl font-black text-white tracking-tighter uppercase">
                Atul<span className="text-blue-500">.</span>Dev
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Full Stack Developer | Building modern web experiences with focus on performance and clean design.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
              <FiZap className="animate-pulse" />
              Open for work
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-black uppercase tracking-widest text-sm">Quick Links</h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <FiChevronRight className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-blue-400" />
                    <span className="relative overflow-hidden">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-400 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-6">
            <h3 className="text-white font-black uppercase tracking-widest text-sm">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              Feel free to reach out for collaborations or just a friendly hello.
            </p>
          </div>

          {/* Newsletter/Action Section */}
          <div className="space-y-6">
            <h3 className="text-white font-black uppercase tracking-widest text-sm">Let's Build</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Have an idea? Let's turn it into something extraordinary.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 rounded-2xl bg-white text-black font-black text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300"
              >
                Hire Me Now
              </motion.button>
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
          <p>© {currentYear} Kumar Atul Munesh. All rights reserved.</p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all duration-300"
          >
            Back to Top <FiArrowUp className="text-blue-400" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
