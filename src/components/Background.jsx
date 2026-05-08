import React, { useMemo } from "react";
import { motion } from "framer-motion";

const Background = () => {
    const particles = useMemo(() => [...Array(15)].map((_, i) => ({
        id: i,
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 10
    })), []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#030014]">
            {/* Animated Gradients - Optimized with will-change */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.3, 0.2],
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{ willChange: "transform, opacity" }}
                    className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-blue-600/15 blur-[100px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.15, 0.25, 0.15],
                        x: [0, -50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{ willChange: "transform, opacity" }}
                    className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-purple-600/15 blur-[100px] rounded-full"
                />
            </div>

            {/* Grid Pattern - Static CSS for better performance */}
            <div
                className="absolute inset-0 opacity-[0.1] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, #4f4f4f 1px, transparent 1px), linear-gradient(to bottom, #4f4f4f 1px, transparent 1px)`,
                    backgroundSize: '4rem 4rem',
                    maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
                    transform: 'translateZ(0)'
                }}
            />

            {/* Floating Glowing Elements - Memoized and simplified */}
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    initial={{
                        opacity: 0,
                        x: p.left,
                        y: p.top
                    }}
                    animate={{
                        opacity: [0, 0.2, 0],
                        y: ["-5%", "105%"],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear",
                    }}
                    style={{ willChange: "transform, opacity" }}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full blur-[1px]"
                />
            ))}

            {/* Noise Texture */}
            <div
                className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
                style={{
                    backgroundImage: "url('/noise.svg')",
                    transform: 'translateZ(0)'
                }}
            />
        </div>
    );
};



export default Background;
