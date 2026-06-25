import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import {
    SiMongodb,
    SiExpress,
    SiReact,
    SiNodedotjs,
    SiJavascript,
    SiTailwindcss,
    SiRedux,
    SiSocketdotio,
    SiGit,
    SiGithub,
    SiJsonwebtokens,
    SiFirebase,
    SiVercel,
    SiRender,
    SiTypescript,
    SiNextdotjs
} from 'react-icons/si';
import { FaLaptopCode, FaDatabase, FaServer, FaTools, FaCloudUploadAlt, FaBrain, FaHtml5, FaCss3Alt, FaJava } from 'react-icons/fa';
import { MdOutlineScreenshotMonitor } from 'react-icons/md';

const skillData = [
    {
        category: "Frontend",
        icon: <FaLaptopCode className="text-blue-400" />,
        color: "from-blue-500/20 to-cyan-500/20",
        skills: [
            { name: "React.js", icon: <SiReact className="text-[#61DAFB]" />, level: "Expert", desc: "Building complex SPAs with Hooks and Context API." },
            { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, level: "Advanced", desc: "ES6+, Async/Await, and Functional Programming." },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, level: "Expert", desc: "Utility-first CSS for rapid UI development." },
            { name: "Redux Toolkit", icon: <SiRedux className="text-[#764ABC]" />, level: "Intermediate", desc: "Global state management and RTK Query." },
            { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" />, level: "Expert", desc: "Semantic structure and modern web standards." },
            { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" />, level: "Expert", desc: "Flexbox, Grid, and complex animations." },
            { name: "Responsive Design", icon: <MdOutlineScreenshotMonitor className="text-emerald-400" />, level: "Expert", desc: "Mobile-first approach for all screen sizes." },
        ]
    },
    {
        category: "Backend",
        icon: <FaServer className="text-purple-400" />,
        color: "from-purple-500/20 to-pink-500/20",
        skills: [
            { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" />, level: "Advanced", desc: "Scalable server-side logic and API development." },
            { name: "Express.js", icon: <SiExpress className="text-white" />, level: "Advanced", desc: "Fast, unopinionated web framework for Node." },
            { name: "REST API", icon: <FaServer className="text-orange-400" />, level: "Expert", desc: "Designing robust and secure API endpoints." },
            { name: "Socket.io", icon: <SiSocketdotio className="text-white" />, level: "Intermediate", desc: "Real-time bi-directional communication." },
            { name: "JWT Auth", icon: <SiJsonwebtokens className="text-[#d63aff]" />, level: "Advanced", desc: "Secure token-based user authentication." },
            { name: "Java", icon: <FaJava className="text-[#ED8B00]" />, level: "Intermediate", desc: "Learning OOP, DSA, and backend development with Java." },
        ]
    },
    {
        category: "Database",
        icon: <FaDatabase className="text-green-400" />,
        color: "from-green-500/20 to-emerald-500/20",
        skills: [
            { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, level: "Advanced", desc: "NoSQL database management and aggregation." },
            { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" />, level: "Intermediate", desc: "Real-time DB, Auth, and Cloud Functions." },
        ]
    },
    {
        category: "Tools & Git",
        icon: <FaTools className="text-gray-400" />,
        color: "from-gray-500/20 to-slate-500/20",
        skills: [
            { name: "Git & GitHub", icon: <SiGithub className="text-white" />, level: "Advanced", desc: "Version control and collaborative workflow." },
        ]
    },
    {
        category: "Deployment & Specialization",
        icon: <FaCloudUploadAlt className="text-orange-400" />,
        color: "from-orange-500/20 to-red-500/20",
        skills: [
            { name: "Vercel", icon: <SiVercel className="text-white" />, level: "Advanced", desc: "Seamless frontend deployment and CI/CD." },
            { name: "Render", icon: <SiRender className="text-[#46E3B7]" />, level: "Intermediate", desc: "Hosting web services and full-stack apps." },
            { name: "Full Stack Dev", icon: <FaLaptopCode className="text-yellow-400" />, level: "Expert", desc: "End-to-end development of modern web applications." },
        ]
    }
];

const learningData = [
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "System Design", icon: <FaBrain className="text-yellow-400" /> },
    { name: "Spring Boot", icon: <FaJava className="text-[#6DB33F]" /> },
    { name: "Hibernate", icon: <FaDatabase className="text-[#A8201A]" /> },
    { name: "Maven", icon: <FaTools className="text-[#C71A36]" /> },
];

const SkillCard = ({ skill }) => {
    const cardRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="group relative rounded-xl md:rounded-3xl border border-white/10 bg-[#0a0a10]/60 p-3.5 md:p-6 lg:p-8 backdrop-blur-2xl transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] overflow-hidden"
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl md:rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        ([x, y]) => `radial-gradient(350px circle at ${x}px ${y}px, rgba(59,130,246,0.1), transparent 80%)`
                    ),
                }}
            />

            {/* Futuristic "Operating System" Details */}
            <div className="absolute top-0 right-0 p-2 md:p-4 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex gap-0.5 md:gap-1">
                    <div className="w-0.5 md:w-1 h-2 md:h-3 bg-blue-500 rounded-full" />
                    <div className="w-0.5 md:w-1 h-2 md:h-3 bg-blue-500/50 rounded-full" />
                    <div className="w-0.5 md:w-1 h-2 md:h-3 bg-blue-500/20 rounded-full" />
                </div>
            </div>

            <div className="relative z-10">
                <div className="flex items-start justify-between mb-3 md:mb-6">
                    <div className="relative">
                        <div className="absolute -inset-2 bg-blue-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative p-2 md:p-3.5 rounded-lg md:rounded-2xl bg-[#12121a] border border-white/5 text-xl md:text-3xl lg:text-4xl shadow-2xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                            {skill.icon}
                        </div>
                    </div>

                    <div className="flex flex-col items-end gap-1 md:gap-2">
                        <span className="text-[8px] md:text-[10px] font-black px-1.5 py-0.5 md:px-3 md:py-1 rounded-md md:rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-[0.1em] md:tracking-[0.2em] shadow-lg">
                            {skill.level}
                        </span>
                        {/* Status dot */}
                        <div className="flex items-center gap-1 px-1 py-0.5 rounded-md bg-white/5 border border-white/5">
                            <div className="w-0.5 md:w-1 h-0.5 md:h-1 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[6px] md:text-[8px] text-gray-500 uppercase font-bold tracking-tighter">Live</span>
                        </div>
                    </div>
                </div>

                <h3 className="text-sm md:text-xl lg:text-2xl font-black text-white mb-1 md:mb-3 group-hover:text-blue-400 transition-colors tracking-tight">
                    {skill.name}
                </h3>
                <p className="text-[10px] md:text-xs lg:text-sm text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors font-medium line-clamp-2 md:line-clamp-none">
                    {skill.desc}
                </p>

                {/* Dashboard Progress bar simulation */}
                <div className="mt-3 md:mt-6 h-0.5 md:h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 opacity-30 group-hover:opacity-100 transition-opacity"
                    />
                </div>
            </div>

            {/* Decorative OS elements */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] md:h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
        </motion.div>
    );
};

export default function Skills() {
    const containerRef = useRef(null);
    const sectionMouseX = useMotionValue(0);
    const sectionMouseY = useMotionValue(0);

    function handleSectionMouseMove({ clientX, clientY }) {
        if (!containerRef.current) return;
        const { left, top } = containerRef.current.getBoundingClientRect();
        sectionMouseX.set(clientX - left);
        sectionMouseY.set(clientY - top);
    }

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.1], [0.8, 1]);

    return (
        <section
            id="skills"
            ref={containerRef}
            onMouseMove={handleSectionMouseMove}
            className="relative min-h-screen bg-[#020205] py-16 px-4 md:py-24 md:px-6 overflow-hidden"
        >
            {/* Dynamic Background Spotlight */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-0 opacity-30"
                style={{
                    background: useTransform(
                        [sectionMouseX, sectionMouseY],
                        ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(59,130,246,0.1), transparent 80%)`
                    ),
                }}
            />

            {/* Floating background tech badges */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-[10%] left-[5%] text-9xl"><SiReact /></motion.div>
                <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-[15%] right-[8%] text-8xl"><SiNodedotjs /></motion.div>
                <motion.div animate={{ x: [0, 15, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-[40%] right-[5%] text-7xl"><SiMongodb /></motion.div>
            </div>

            {/* Background Particles / Nebula Simulation */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] animate-pulse [animation-delay:2s]" />
            </div>

            <motion.div
                style={{ opacity, scale }}
                className="max-w-7xl mx-auto relative z-10"
            >
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 md:px-4 md:py-1.5 mb-4 md:mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
                    >
                        <span className="text-[10px] md:text-xs font-bold text-blue-400 uppercase tracking-[0.2em] md:tracking-[0.4em]">Expertise</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-4 md:mb-6 tracking-tighter uppercase italic"
                    >
                        Crafting Scalable <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                            Full Stack Experiences
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg lg:text-xl font-medium px-4"
                    >
                        Building modern, real-time, and production-ready web applications with the MERN ecosystem.
                    </motion.p>
                </div>

                {/* Categories Grid */}
                <div className="space-y-10 md:space-y-20">
                    {skillData.map((category, catIdx) => (
                        <div key={category.category}>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10 group"
                            >
                                <div className={`p-2.5 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br ${category.color} border border-white/10 text-lg md:text-2xl`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-lg md:text-2xl lg:text-3xl font-black text-white uppercase tracking-tighter group-hover:tracking-widest transition-all duration-500">
                                    {category.category}
                                </h3>
                                <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent ml-2 md:ml-4" />
                            </motion.div>

                            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
                                {category.skills.map((skill, skillIdx) => (
                                    <SkillCard key={skill.name} skill={skill} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Currently Learning Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 md:mt-24 p-6 md:p-10 lg:p-12 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-2xl text-center relative overflow-hidden"
                >
                    {/* OS-like grid pattern background */}
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] md:bg-[size:30px_30px]" />

                    <h3 className="text-lg md:text-2xl lg:text-3xl font-black text-white mb-6 md:mb-10 uppercase tracking-tighter relative z-10">
                        Currently <span className="text-blue-400 italic">Expanding</span> The Horizon
                    </h3>

                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-6 relative z-10">
                        {learningData.map((item, idx) => (
                            <motion.div
                                key={item.name}
                                whileHover={{ scale: 1.1, rotate: 2 }}
                                className="flex items-center gap-2 md:gap-3 px-3 py-1.5 md:px-5 md:py-2.5 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
                            >
                                <span className="text-lg md:text-2xl">{item.icon}</span>
                                <span className="text-xs md:text-base lg:text-lg font-bold text-white tracking-tight">{item.name}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Floating tech badges decoration */}
                    <div className="absolute top-10 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-bounce" />
                    <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                </motion.div>
            </motion.div>

            {/* Global OS-like decorative lines */}
            <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent mr-12 hidden lg:block" />
            <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent ml-12 hidden lg:block" />

            <style>{`
        @keyframes pan-x {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
        </section>
    );
}
