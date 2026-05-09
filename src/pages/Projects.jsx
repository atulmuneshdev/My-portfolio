import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
    FiGithub, FiExternalLink, FiLayers, FiCode, FiActivity, FiServer,
    FiDatabase, FiLayout, FiShield, FiCpu, FiGlobe, FiX, FiSearch, FiFilter
} from 'react-icons/fi';
import {
    SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss,
    SiRedux, SiSocketdotio, SiJsonwebtokens, SiFirebase, SiVercel,
    SiCloudinary, SiRender, SiTypescript, SiFramer
} from 'react-icons/si';

const projectsData = [
    {
        id: 1,
        title: "School Hub - Management System",
        category: "Frontend",
        thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1600",
        description: "A comprehensive school management portal. Currently focusing on the high-end Frontend experience while Backend is under active development.",
        fullDescription: "School Hub is designed to be a one-stop solution for educational institutions. While the powerful React-based frontend is fully functional, the Node.js backend services are currently being architected to handle large-scale data.",
        techStack: [
            { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
            { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
            { name: "Framer", icon: <SiFramer className="text-white" /> },
            { name: "UI/UX", icon: <FiLayout className="text-emerald-400" /> }
        ],
        details: {
            frontend: ["React 19", "Tailwind CSS v4", "Framer Motion", "Lucide Icons"],
            backend: ["Node.js (Under Development)", "Express.js (Pending)", "REST API (In Progress)"],
            database: ["MongoDB (Planning)"],
            status: ["Frontend: Live", "Backend: Under Working", "System: Development"]
        },
        features: [
            "Modern Student & Teacher Dashboards",
            "Interactive Attendance Tracking UI",
            "Responsive Academic Calendar",
            "Real-time Fee Status (Frontend Simulation)",
            "Dynamic Course Material Viewer"
        ],
        architecture: "Currently a Frontend-heavy architecture using React. The backend is being designed as a microservice to handle different school departments independently.",
        stats: { completion: 60, contribution: 100, complexity: "Medium" },
        github: "https://github.com/atulmuneshdev/School-Management-System",
        live: "https://school-management-system-gray-pi.vercel.app/"
    },

    {
        id: 2,
        title: "Justice Portal - Legal System",
        category: "MERN",
        thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1600",
        description: "A centralized platform for legal case management, providing a secure environment for lawyers, clients, and judicial officers.",
        fullDescription: "Justice Portal is a high-security MERN stack application designed to digitize the legal system. It features automated case tracking, secure document storage with encryption, and a real-time hearing notification system.",
        techStack: [
            { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
            { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
            { name: "Express", icon: <SiExpress className="text-white" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> }
        ],
        details: {
            frontend: ["React 19", "Tailwind CSS", "Redux Toolkit", "Framer Motion"],
            backend: ["Node.js", "Express.js", "Mongoose", "Multer"],
            database: ["MongoDB Atlas", "GridFS (Large Files)"],
            auth: ["JWT Auth", "Role-based Access Control", "MFA"],
            deployment: ["Vercel", "Render", "AWS S3"]
        },
        features: [
            "End-to-End Case Management & Tracking",
            "Secure Legal Document Upload & Storage",
            "Real-time Hearing & Deadline Notifications",
            "Lawyer-Client Private Communication Channel",
            "Electronic Filing System (e-Filing)"
        ],
        architecture: "Highly secure RESTful API architecture following a layered pattern. Implements heavy data validation and encrypted storage to protect sensitive legal information.",
        stats: { completion: 100, contribution: 100, complexity: "High" },
        github: "https://github.com/atulmuneshdev/Justice-Portal",
        live: ""
    },
    // {
    //     id: 3,
    //     title: "TaskSphere - AI Kanban",
    //     category: "AI Projects",
    //     thumbnail: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=1600",
    //     description: "Intelligent project management tool with AI-powered task prioritization, automated scheduling, and team collaboration.",
    //     fullDescription: "TaskSphere redefines productivity by integrating AI into the Kanban workflow. It analyzes team performance and suggests optimal task assignments.",
    //     techStack: [
    //         { name: "Next.js", icon: <SiReact className="text-[#61DAFB]" /> },
    //         { name: "OpenAI", icon: <FiCpu className="text-emerald-400" /> },
    //         { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    //         { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> }
    //     ],
    //     details: {
    //         frontend: ["Next.js 14", "TypeScript", "Dnd-kit", "Zustand"],
    //         backend: ["Next.js API Routes", "OpenAI SDK"],
    //         database: ["Firestore", "PostgreSQL (Prisma)"],
    //         auth: ["NextAuth.js", "Firebase Auth"],
    //         deployment: ["Vercel", "Railway"]
    //     },
    //     features: [
    //         "AI-powered Task Prioritization",
    //         "Drag-and-Drop Kanban Interface",
    //         "Automated Sprint Planning",
    //         "Performance Analytics Charts",
    //         "Real-time Team Collaboration"
    //     ],
    //     architecture: "Serverless architecture using Next.js. Integrates OpenAI's GPT-4 for intelligent task analysis and Firestore for real-time data synchronization.",
    //     stats: { completion: 85, contribution: 100, complexity: "Expert" },
    //     github: "#",
    //     live: "#"
    // },
    {
        id: 3,
        title: "Fin-Track - Finance Dashboard",
        category: "Frontend",
        thumbnail: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1600",
        description: "A professional-grade finance management tool built as part of a high-end company assignment for a Frontend Engineer role.",
        fullDescription: "Fin-Track was developed as a comprehensive response to a premium company's first-round assessment task. It showcases expert-level mastery of data visualization, complex state management, and pixel-perfect UI/UX implementation.",
        techStack: [
            { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
            { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
            { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
            { name: "Chart.js", icon: <FiActivity className="text-emerald-400" /> }
        ],
        details: {
            frontend: ["React 19", "Chart.js / Recharts", "Tailwind CSS", "Framer Motion"],
            backend: [],
            database: [],
            assignment: ["First-Round Task", "Company Assessment", "Frontend-Heavy"]
        },
        features: [
            "Interactive Expense & Income Analytics",
            "Dynamic Budget Tracking System",
            "Real-time Financial Data Visualization",
            "Complex State-driven Transactions List",
            "Mobile-first Responsive Dashboard"
        ],
        architecture: "Highly modular React architecture designed for scalability and performance, following industry-standard patterns for state management and API integration.",
        stats: { completion: 100, contribution: 100, complexity: "High" },
        github: "https://github.com/atulmuneshdev/Fin-Track",
        live: "https://fin-track-three-plum.vercel.app/"
    },
    {
        id: 4,
        title: "Friend's e-Portfolio - Personal Website",
        category: "Frontend",
        thumbnail: "/Adity.png",
        description: "A premium, modern e-Portfolio designed and developed for a friend showcasing professional work, skills, and achievements.",
        fullDescription: "This custom-built e-Portfolio was created to elevate a friend's professional online presence. The design focuses on clean aesthetics, smooth animations, and intuitive navigation to showcase their work in the best possible light.",
        techStack: [
            { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
            { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
            { name: "Framer", icon: <SiFramer className="text-white" /> },
            { name: "Vercel", icon: <SiVercel className="text-white" /> }
        ],
        details: {
            frontend: ["React 19", "Tailwind CSS v4", "Framer Motion", "Lucide Icons"],
            backend: [],
            database: [],
            deployment: ["Vercel", "Responsive Design"]
        },
        features: [
            "Hero Section with Dynamic Typing Effect",
            "About Me & Professional Bio",
            "Skills Showcase with Progress Bars",
            "Project Gallery with Filtering",
            "Contact Form & Social Links",
            "Fully Responsive for All Devices"
        ],
        architecture: "Clean, component-based React architecture with smooth animations powered by Framer Motion. Optimized for performance and accessibility.",
        stats: { completion: 100, contribution: 100, complexity: "Medium" },
        github: "https://github.com/atulmuneshdev/Aditya",
        live: "https://aditya-hazel.vercel.app/"
    },

];

const ProjectCard = ({ project, onClick }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    function handleMouseMove(e) {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative h-[450px] w-full cursor-pointer rounded-3xl bg-[#0a0a12]/80 border border-white/5 p-4 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)]"
            onClick={() => onClick(project)}
        >
            <div style={{ transform: "translateZ(50px)" }} className="relative h-full w-full overflow-hidden rounded-2xl">
                {/* Project Image */}
                <div className="absolute inset-0 z-0">
                    <img src={project.thumbnail} alt={project.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-[#0a0a12]/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <div className="flex items-center gap-2 mb-3">
                        {project.techStack.map((tech, i) => (
                            <span key={i} className="p-2 rounded-lg bg-white/5 border border-white/10 text-lg backdrop-blur-md group-hover:scale-110 transition-transform" title={tech.name}>
                                {tech.icon}
                            </span>
                        ))}
                    </div>

                    <h3 className="text-2xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors tracking-tight">
                        {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2 mb-4 font-medium leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex items-center gap-3">
                        <button className="flex-1 py-3 rounded-xl bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-600/20 text-xs font-black uppercase tracking-widest transition-all">
                            View Details
                        </button>
                        <div className="flex gap-2">
                            <a href={project.github} className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all">
                                <FiGithub size={18} />
                            </a>
                            <a href={project.live} className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-blue-600 hover:border-blue-600 transition-all">
                                <FiExternalLink size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-tighter">{project.category}</span>
                </div>
            </div>

            {/* Spotlight Effect */}
            <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(59,130,246,0.05),transparent_80%)]" />
        </motion.div>
    );
};

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-2xl overflow-y-auto"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-6xl bg-[#0a0a15] border border-white/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl"
            >
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-red-500/20 hover:text-red-400 transition-all">
                    <FiX size={24} />
                </button>

                <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
                    {/* Left: Media & Basic Info */}
                    <div className="lg:w-2/5 relative h-64 lg:h-auto">
                        <img src={project.thumbnail} alt={project.title} className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a15] via-transparent to-transparent" />

                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest">
                                {project.category}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight italic uppercase tracking-tighter">
                                {project.title}
                            </h2>
                            <div className="flex gap-4">
                                <a href={project.github} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-white text-black font-bold text-sm hover:bg-blue-400 hover:text-white transition-all">
                                    <FiGithub /> GitHub
                                </a>
                                <a href={project.live} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20">
                                    <FiExternalLink /> Live Demo
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Detailed Content */}
                    <div className="lg:w-3/5 p-8 md:p-12 overflow-y-auto custom-scrollbar">
                        <div className="space-y-12">
                            {/* Description */}
                            <section>
                                <div className="flex items-center gap-3 mb-6">
                                    <FiLayers className="text-blue-400 text-xl" />
                                    <h3 className="text-xl font-black text-white uppercase tracking-widest">Overview</h3>
                                </div>
                                <p className="text-gray-400 text-lg leading-relaxed font-medium">
                                    {project.fullDescription}
                                </p>
                            </section>

                            {/* Tech Stack Grid */}
                            <section>
                                <div className="flex items-center gap-3 mb-8">
                                    <FiCode className="text-purple-400 text-xl" />
                                    <h3 className="text-xl font-black text-white uppercase tracking-widest">System Architecture</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {Object.entries(project.details).map(([key, techs]) => (
                                        <div key={key} className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
                                            <h4 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                                {key}
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {techs.map(t => (
                                                    <span key={t} className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-[11px] font-bold text-gray-300">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Features */}
                            <section>
                                <div className="flex items-center gap-3 mb-6">
                                    <FiActivity className="text-emerald-400 text-xl" />
                                    <h3 className="text-xl font-black text-white uppercase tracking-widest">Key Features</h3>
                                </div>
                                <div className="space-y-3">
                                    {project.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 text-gray-400 hover:text-white transition-colors group">
                                            <div className="w-2 h-2 rounded-full bg-emerald-400/50 group-hover:bg-emerald-400 transition-colors" />
                                            <span className="text-sm font-semibold tracking-tight">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Stats & Progress */}
                            <section className="grid grid-cols-3 gap-4">
                                <div className="p-6 rounded-3xl bg-blue-500/5 border border-blue-500/10 text-center">
                                    <div className="text-2xl font-black text-blue-400 mb-1">{project.stats.completion}%</div>
                                    <div className="text-[10px] font-black text-gray-500 uppercase">Progress</div>
                                </div>
                                <div className="p-6 rounded-3xl bg-purple-500/5 border border-purple-500/10 text-center">
                                    <div className="text-2xl font-black text-purple-400 mb-1">{project.stats.contribution}%</div>
                                    <div className="text-[10px] font-black text-gray-500 uppercase">Workload</div>
                                </div>
                                <div className="p-6 rounded-3xl bg-orange-500/5 border border-orange-500/10 text-center">
                                    <div className="text-xl font-black text-orange-400 mb-1 uppercase italic tracking-tighter">{project.stats.complexity}</div>
                                    <div className="text-[10px] font-black text-gray-500 uppercase">Scale</div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default function Projects() {
    const [filter, setFilter] = useState('All');
    const [search, setSearch] = useState('');
    const [selectedProject, setSelectedProject] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const categories = ['All', 'MERN', 'Frontend', 'AI Projects', 'Real-Time Apps'];

    const filteredProjects = projectsData.filter(project => {
        const matchesFilter = filter === 'All' || project.category === filter;
        const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) ||
            project.description.toLowerCase().includes(search.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <section id="projects" ref={containerRef} className="relative min-h-screen bg-[#020205] py-24 px-6 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px] animate-pulse [animation-delay:2s]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
                    >
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-[0.4em]">Portfolio</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase italic"
                    >
                        Engineering Digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                            Masterpieces
                        </span>
                    </motion.h2>

                    {/* Controls: Filter only */}
                    <div className="flex justify-center max-w-5xl mx-auto px-4">
                        {/* Category Filter */}
                        <div className="relative p-1.5 bg-[#0a0a15]/80 border border-white/10 rounded-2xl backdrop-blur-2xl flex items-center gap-1 overflow-x-auto no-scrollbar max-w-full">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`relative px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.15em] transition-colors whitespace-nowrap z-10 ${filter === cat ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                                        }`}
                                >
                                    {cat}
                                    {filter === cat && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-blue-600 rounded-xl -z-10 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onClick={setSelectedProject}
                            />
                        ))}
                    </AnimatePresence>
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-24"
                    >
                        <div className="text-6xl mb-6">🔍</div>
                        <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
                        <p className="text-gray-400">Try adjusting your search or filter</p>
                    </motion.div>
                )}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.02);
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(59, 130, 246, 0.2);
                    border-radius: 10px;
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}
