import React from 'react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "React Portfolio",
      description: "Personal Portfolio Website using React Js",
      links: {
        site: "https://cyberboyayush.in/",
        github: "https://github.com/cyberboyayush/React-Portfolio",
      },
    },
    {
      img: project2,
      title: "Zarina Bot",
      description: "An AI Based Group Chat Bot for Telegram",
      links: {
        site: "https://github.com/CyberBoyAyush/ZarinaBot",
        github: "https://github.com/CyberBoyAyush/ZarinaBot",
      },
    },
    {
      img: project3,
      title: "Simple Portfolio",
      description: "A simple easy to deploy portfolio for beginners.",
      links: {
        site: "https://cyberboyayush.github.io/Simple-Portfolio/",
        github: "https://github.com/CyberBoyAyush/Simple-Portfolio",
      },
    },
    {
      img: project4,
      title: "GP Links Bot",
      description: "Link Shortner Bot Works On GPLinks API.",
      links: {
        site: "https://github.com/CyberBoyAyush/GPLinksBot",
        github: "https://github.com/CyberBoyAyush/GPLinksBot",
      },
    },
    {
      img: project5,
      title: "JS-Portfolio",
      description: "Portfolio made with node js single page with projects page. (Easy to deploy) -> Uses Github Api to Fetch Projects",
      links: {
        site: "https://js-portfolio-demo.netlify.app/",
        github: "https://github.com/CyberBoyAyush/JS-Portfolio",
      },
    },
  ]

const Portfolio = () => {
  return (
    <div className="relative overflow-hidden w-full">
      <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-4xl font-bold text-gray-200 mb-8 justify-center text-center 
                     bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>
            Portfolio
        </h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
                className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} 
                           mb-12 group relative rounded-xl overflow-hidden
                           bg-gradient-to-br from-purple-900/30 to-purple-800/20 
                           border border-purple-500/30 backdrop-blur-sm
                           hover:shadow-[0_0_25px_rgba(147,51,234,0.3)] 
                           transition-all duration-300 ease-in-out`}>
                <div className='w-full md:w-1/2 p-4 transform transition-transform duration-300 
                              group-hover:scale-105'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg 
                                 hover:shadow-purple-500/50'
                    />
                </div>
                <div className='w-full md:w-1/2 p-8 flex flex-col justify-center relative z-10'>
                    <div className='absolute inset-0 bg-gradient-to-br from-purple-600/0 to-purple-900/0 
                                  group-hover:from-purple-600/10 group-hover:to-purple-900/20 
                                  transition-all duration-300'/>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4 
                                 transform transition-all duration-300 
                                 group-hover:translate-x-2'>{project.title}</h3>
                    <p className='text-gray-300 mb-6 transform transition-all duration-300 
                                group-hover:translate-x-2'>{project.description}</p>
                    <div className='flex space-x-4 transform transition-all duration-300 
                                  group-hover:translate-x-2'>
                        <a href={project.links.site}
                            className='px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 
                                     text-gray-200 rounded-lg 
                                     hover:from-purple-700 hover:to-purple-900
                                     transform hover:scale-105 hover:-translate-y-1
                                     transition-all duration-300 ease-in-out
                                     shadow-lg hover:shadow-purple-500/50
                                     flex items-center space-x-2'>
                            <span className='text-white'>Live Demo</span>
                        </a>
                        <a href={project.links.github}
                            className='p-3 bg-gradient-to-r from-purple-600 to-purple-800 
                                     text-gray-200 rounded-lg
                                     hover:from-purple-700 hover:to-purple-900
                                     transform hover:scale-105 hover:-translate-y-1
                                     transition-all duration-300 ease-in-out
                                     shadow-lg hover:shadow-purple-500/50
                                     flex items-center text-xl'>
                            <AiOutlineGithub/>
                        </a>
                    </div>
                </div>
            </div>
            </Reveal>
        ))}
      </div>
    </div>
  )
}

export default Portfolio