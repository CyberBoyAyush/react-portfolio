import React from 'react'
import { FaGithubSquare, FaInstagram, FaLinkedin, FaMailBulk, FaMailchimp} from 'react-icons/fa'
import { SiGmail, SiX } from 'react-icons/si'

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            <h3 className='text-2xl text-gray-200 font-semibold'>Ayush Sharma</h3>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a href="https://github.com/CyberBoyAyush"><FaGithubSquare /></a>
                <a href="https://linkedin.com/in/cyberboyayush"><FaLinkedin /></a>
                <a href="mailto:cseayushayush@gmail.com"><SiGmail /></a>
                <a href="https://x.com/cyberboyayush"><SiX /></a>

            </div>

        </div>

        <p className='text-gray-400'>@2025 Ayush Sharma</p>
        
    </div>
  )
}

export default Footer