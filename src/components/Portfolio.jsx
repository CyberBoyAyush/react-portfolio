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
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            Working Version
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio