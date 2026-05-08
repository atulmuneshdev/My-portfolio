import React from 'react'
import Inter from '../components/Inter'
import { motion } from 'framer-motion'

function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  }

  return (
    <section id='about' className='min-h-screen bg-linear-to-t from-black/95 to-blue-950/90 py-20 px-4'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className='flex flex-col items-center gap-12'
        >
          {/* Section Heading */}
          <motion.div variants={itemVariants} className='text-center'>
            <h2 className='text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight'>
              About <span className='text-blue-400'>Me</span>
            </h2>
            <div className='h-1 w-20 bg-blue-500 mx-auto rounded-full'></div>
          </motion.div>

          <div className='flex flex-col lg:flex-row gap-8 w-full items-stretch justify-center'>
            {/* Experience/Internship Part */}
            <motion.div variants={itemVariants} className='flex-1'>
              <Inter />
            </motion.div>

            {/* Education Part */}
            <motion.div
              variants={itemVariants}
              className='flex-1 rounded-3xl border border-white/10 p-8 backdrop-blur-xl bg-white/5 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500'
            >
              <div className='flex items-center gap-3 mb-8'>
                <div className='p-3 bg-blue-500/20 rounded-xl'>
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h3 className='text-2xl font-bold text-white'>Education</h3>
              </div>

              <div className='space-y-8'>
                {/* Degree 1 */}
                <div className='relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[2px] before:bg-blue-500/30'>
                  <div className='absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]'></div>
                  <div className='mb-1 flex flex-col sm:flex-row sm:justify-between sm:items-center'>
                    <h4 className='text-lg font-semibold text-white'>Bachelor of Technology in CSE</h4>
                    <span className='text-sm font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full'>2022 - 2026</span>
                  </div>
                  <p className='text-blue-200/70 font-medium mb-2'>Dr kn modi institute of engineering and technology</p>
                  <p className='text-gray-400 text-sm leading-relaxed'>
                    Focused on software engineering, data structures, algorithms, and full-stack web development.
                    Maintained a strong academic record while participating in various tech workshops.
                  </p>
                </div>

                {/* Degree 2 */}
                <div className='relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[2px] before:bg-blue-500/30'>
                  <div className='absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]'></div>
                  <div className='mb-1 flex flex-col sm:flex-row sm:justify-between sm:items-center'>
                    <h4 className='text-lg font-semibold text-white'>Intermediate (XII)</h4>
                    <span className='text-sm font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full'>2020 - 2021</span>
                  </div>
                  <p className='text-blue-200/70 font-medium mb-2'>CBSE Board</p>
                  <p className='text-gray-400 text-sm leading-relaxed'>
                    Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics.
                  </p>
                </div>
              </div>

              {/* Personal Info / Summary */}
              <div className='mt-12 pt-8 border-t border-white/10'>
                <p className='text-gray-300 italic leading-relaxed'>
                  "Passionate about building scalable web applications and solving complex problems through clean, efficient code. Always eager to learn new technologies and stay updated with industry trends."
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About