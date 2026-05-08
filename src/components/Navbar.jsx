import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiSend, FiHome, FiUser, FiCode, FiBriefcase, FiMail, FiCpu } from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();
    const location = useLocation();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    const navItems = [
        { name: 'Home', href: '/', icon: <FiHome /> },
        { name: 'About', href: '/about', icon: <FiUser /> },
        { name: 'Skills', href: '/skills', icon: <FiCpu /> },
        { name: 'Projects', href: '/projects', icon: <FiCode /> },
        { name: 'Contact', href: '/contact', icon: <FiMail /> }
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled
                    ? 'py-3 bg-[#030014]/70 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
                    : 'py-6 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-black text-xl shadow-[0_0_15px_rgba(37,99,235,0.3)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] transition-all duration-300">
                            A
                        </div>
                        <span className="text-xl font-black text-white tracking-tighter uppercase hidden sm:block">
                            Atul<span className="text-blue-500">.</span>Dev
                        </span>
                    </Link>
                </motion.div>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex items-center px-2 py-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            className={({ isActive }) => `
                                relative px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300
                                ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}
                            `}
                        >
                            {({ isActive }) => (
                                <>
                                    {item.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-white/10 rounded-xl -z-10"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="flex items-center gap-4">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:block"
                    >
                        <Link
                            to="/contact"
                            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white text-black text-sm font-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
                        >
                            Hire Me <FiSend />
                        </Link>
                    </motion.div>

                    {/* Mobile Toggle */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white text-xl"
                    >
                        {isOpen ? <FiX /> : <FiMenu />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[-1] lg:hidden"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-screen w-[300px] bg-[#0a0a1a] border-l border-white/10 z-[100] lg:hidden shadow-2xl"
                        >
                            <div className="flex flex-col p-8 h-full">
                                <div className="flex items-center justify-between mb-12">
                                    <span className="text-xl font-black text-white">MENU</span>
                                    <button onClick={() => setIsOpen(false)} className="text-2xl text-gray-400"><FiX /></button>
                                </div>

                                <div className="flex flex-col gap-2">
                                    {navItems.map((item, idx) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                        >
                                            <NavLink
                                                to={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className={({ isActive }) => `
                                                    flex items-center gap-4 p-4 rounded-2xl text-lg font-bold transition-all
                                                    ${isActive
                                                        ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20'
                                                        : 'text-gray-400 hover:bg-white/5'
                                                    }
                                                `}
                                            >
                                                <span className="text-xl">{item.icon}</span>
                                                {item.name}
                                            </NavLink>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-auto">
                                    <Link
                                        to="/contact"
                                        onClick={() => setIsOpen(false)}
                                        className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black shadow-lg"
                                    >
                                        Let's Talk <FiSend />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
