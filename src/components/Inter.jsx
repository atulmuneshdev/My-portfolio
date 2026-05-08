import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Inter() {
    const [showCert, setShowCert] = useState(false)

    const skills = [
        { name: 'React', color: 'bg-blue-500' },
        { name: 'Node.js', color: 'bg-green-600' },
        { name: 'Express', color: 'bg-gray-600' },
        { name: 'MongoDB', color: 'bg-green-500' },
        { name: 'Tailwind CSS', color: 'bg-cyan-500' },
        { name: 'JavaScript', color: 'bg-yellow-500' },
        { name: 'Git', color: 'bg-orange-600' },
        { name: 'REST API', color: 'bg-purple-500' }
    ]

    return (
        <div className='flex flex-col gap-6 h-full'>
            {/* Internship Box */}
            <div className='flex-1 border border-white/10 rounded-3xl p-8 backdrop-blur-xl bg-white/5 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500'>
                <div className='flex items-center justify-between mb-6'>
                    <div className='flex items-center gap-3'>
                        <div className='p-3 bg-blue-500/20 rounded-xl'>
                            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h2 className='text-2xl font-bold text-white'>Internship</h2>
                    </div>

                    {/* View Certificate Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowCert(true)}
                        className='px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-xl text-blue-400 text-xs font-bold transition-colors'
                    >
                        View Certificate
                    </motion.button>
                </div>

                <div className='flex items-center gap-4 mb-6'>
                    <img src="inter.webp" alt="Internship" className='h-12 w-12 object-contain rounded-lg' />
                    <div>
                        <h3 className='text-lg font-semibold text-white'>MERN Stack Developer</h3>
                        <p className='text-blue-400 text-sm font-medium'>Appwars Technologies</p>
                    </div>
                </div>

                <p className='text-gray-300 text-sm leading-relaxed mb-4'>
                    Completed an <span className='text-white font-semibold'>8-month internship</span>, gaining hands-on experience in building scalable web applications.
                </p>

                <ul className='space-y-3'>
                    {[
                        'Built full-stack applications using MERN stack',
                        'Developed responsive and dynamic user interfaces',
                        'Integrated REST APIs and backend logic',
                        'Optimized application performance'
                    ].map((item, index) => (
                        <li key={index} className='flex items-start gap-3 text-gray-400 text-sm'>
                            <span className='mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0'></span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Skills Box */}
            <div className='border border-white/10 rounded-3xl p-8 backdrop-blur-xl bg-white/5 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500'>
                <div className='flex items-center gap-3 mb-6'>
                    <div className='p-3 bg-blue-500/20 rounded-xl'>
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h2 className='text-2xl font-bold text-white'>Core Skills</h2>
                </div>

                <div className='flex flex-wrap gap-2'>
                    {skills.map((skill, index) => (
                        <motion.span
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className={`px-4 py-2 rounded-xl text-white text-xs font-semibold ${skill.color} bg-opacity-20 border border-white/10 backdrop-blur-md`}
                        >
                            {skill.name}
                        </motion.span>
                    ))}
                </div>
            </div>

            {/* Certificate Modal */}
            <AnimatePresence>
                {showCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowCert(false)}
                        className='fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm'
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className='relative max-w-4xl w-full bg-white/5 border border-white/10 p-2 rounded-2xl shadow-2xl'
                        >
                            <button
                                onClick={() => setShowCert(false)}
                                className='absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors'
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <img
                                src="certificate.jpeg"
                                alt="Internship Certificate"
                                className='w-full h-auto rounded-xl shadow-inner'
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Inter