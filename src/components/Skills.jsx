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


const skills = [
    {
      category: 'Web Development',
      technologies: [
        { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
        { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
        { name: 'Sass', icon: <DiSass className='text-pink-600' /> },
        { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
        { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
        { name: 'React', icon: <DiReact className='text-blue-500' /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className='text-teal-500' /> },
        { name: 'Node Js', icon: <DiNodejsSmall className='text-green-500' /> },
        { name: 'MongoDB', icon: <DiMongodb className='text-green-600' /> },
        { name: 'React', icon: <DiReact className='text-blue-500' /> },
      ],
    },
    {
      category: 'Languages and Tools',
      technologies: [
        { name: 'C++', icon: <SiCplusplus className='text-blue-600' /> },
        { name: 'Java', icon: <DiJava className='text-red-600' /> },
        { name: 'Python', icon: <DiPython className='text-yellow-600' /> },
        { name: 'Node Js', icon: <DiNodejsSmall className='text-green-500' /> },
        { name: 'MongoDB', icon: <DiMongodb className='text-green-600' /> },
        { name: 'React', icon: <DiReact className='text-blue-500' /> },
        { name: 'GitHub', icon: <DiGithubBadge className='text-gray-600' /> },
        { name: 'NumPy', icon: <SiNumpy className='text-blue-500' /> },
        { name: 'TensorFlow', icon: <SiTensorflow className='text-orange-500' /> },
        { name: 'Figma', icon: <SiFigma className='text-purple-600' /> },
        { name: 'Git', icon: <DiGit className='text-red-600' /> },
      ],
    },
  ]

const Skills = () => {
  return (
    <div className="max-w-[750px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
        <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
            I worked on various tech stack and languages. Check them <a href="https://github.com/CyberBoyAyush" className="underline">there</a>.
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
            {skills.map((skill, index) => (
                <div key={index} className="skill-card relative overflow-hidden border border-purple-500/30 p-6 rounded-lg 
                                bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm
                                w-full md:w-1/2 transition-all duration-300 ease-in-out
                                hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:border-purple-500/60
                                group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-purple-900/0 
                                  group-hover:from-purple-600/10 group-hover:to-purple-900/20 transition-all duration-300"/>
                    <h3 className="text-xl font-bold mb-4 text-center relative z-10">{skill.category}</h3>
                    <div className="grid grid-cols-2 gap-4 relative z-10">
                        {skill.technologies.map((tech, idx) => (
                            <div key={idx} 
                                 className="flex items-center space-x-2 p-2 rounded-md 
                                          transition-all duration-300 hover:bg-purple-700/20
                                          transform hover:translate-x-1 hover:scale-105">
                                <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
                                    {tech.icon}
                                </span>
                                <span className="text-xl">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        </Reveal>
    </div>
  )
}

export default Skills
