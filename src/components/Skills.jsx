import React from "react"
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
  DiJava,
  DiPython,
  DiGit,
} from "react-icons/di"
import { SiTailwindcss, SiCplusplus, SiNumpy, SiTensorflow, SiFigma } from "react-icons/si"
import Reveal from "./Reveal"
import { motion } from "framer-motion"

const skills = [
    {
      category: 'Web Development',
      technologies: [
        { name: 'HTML', icon: <DiHtml5 className='text-orange-600' />, level: 90 },
        { name: 'CSS', icon: <DiCss3 className='text-blue-600' />, level: 85 },
        { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' />, level: 88 },
        { name: 'React', icon: <DiReact className='text-blue-500' />, level: 85 },
        { name: 'Node.js', icon: <DiNodejsSmall className='text-green-500' />, level: 80 },
        { name: 'MongoDB', icon: <DiMongodb className='text-green-600' />, level: 75 },
      ],
    },
    {
      category: 'Languages and Tools',
      technologies: [
        { name: 'C++', icon: <SiCplusplus className='text-blue-600' />, level: 85 },
        { name: 'Java', icon: <DiJava className='text-red-600' />, level: 80 },
        { name: 'Python', icon: <DiPython className='text-yellow-600' />, level: 75 },
        { name: 'Git', icon: <DiGit className='text-red-600' />, level: 85 },
        { name: 'TensorFlow', icon: <SiTensorflow className='text-orange-500' />, level: 70 },
        { name: 'Figma', icon: <SiFigma className='text-purple-600' />, level: 75 },
      ],
    },
]

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="perspective-1000"
    >
      <motion.div
        whileHover={{ 
          scale: 1.02,
          rotateX: 5,
          rotateY: 5,
        }}
        className="skill-card relative overflow-hidden p-6 rounded-xl
                   bg-[#0f0f0f] border border-purple-500/30
                   w-full transition-all duration-300 ease-out
                   hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] 
                   hover:border-purple-500/60"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        
        <h3 className="text-2xl font-bold mb-6 text-center text-purple-400">
          {skill.category}
        </h3>

        <div className="grid gap-4">
          {skill.technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              className="relative"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-1">
                <motion.span
                  className="text-2xl"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  {tech.icon}
                </motion.span>
                <span className="text-gray-200 font-medium">{tech.name}</span>
              </div>
              
              <div className="h-2 w-full bg-purple-900/30 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  transition={{ duration: 1, delay: idx * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute bottom-0 right-0 w-20 h-20 
                        bg-gradient-to-t from-purple-500/20 to-transparent 
                        rounded-tl-full transform translate-x-10 translate-y-10" />
      </motion.div>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <div className="relative max-w-[1200px] mx-auto px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-4 text-purple-400"
      >
        Skills & Technologies
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-gray-300 mb-12 max-w-2xl mx-auto"
      >
        Experienced in various technologies and constantly learning new ones.
        Check out my work on{' '}
        <a 
          href="https://github.com/CyberBoyAyush" 
          className="text-purple-400 hover:text-purple-300 underline transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Skills
