import React from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"
import Reveal from "./Reveal"

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
        <Reveal>
        <div className="grid md:grid-cols-2 place-items-center gap-8">
            <div className="w-full">
                <div className="text-gray-300 my-3">
                    <h3 className="text-4xl font-semibold mb-5">About <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Me</span></h3>
                    <p className="text-justify leading-7 w-11/12 mx-auto">
                    Feel free to reach out to me for any opportunities, collaborations, or just to have a tech chat! You can connect with me on LinkedIn, shoot me an email, or drop a message on my social handles (@cyberboyayush). I’m always excited to discuss projects, brainstorm ideas, or explore creative solutions together. Let’s connect and build something amazing!
                    </p>
                </div>

                <div className="flex mt-10 items-center gap-7">
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm
                                 border border-purple-500/30 p-4 rounded-lg
                                 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]
                                 transition-all duration-300">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">20
                            <span className="text-purple-400">+</span>
                        </h3>
                        <p className="text-xs md:text-base text-purple-200">Projects</p>
                    </motion.div>

                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm
                                 border border-purple-500/30 p-4 rounded-lg
                                 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]
                                 transition-all duration-300">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">5
                            <span className="text-purple-400">+</span>
                        </h3>
                        <p className="text-xs md:text-base text-purple-200">years of experience</p>
                    </motion.div>

                </div>

            </div>

            <form
                action="https://formspree.io/f/xanwyqok"
                method="POST"
                className="w-full bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm
                         border border-purple-500/30 p-8 rounded-xl
                         hover:shadow-[0_0_30px_rgba(147,51,234,0.2)]
                         transition-all duration-300"
                id="form"
            >
            <p className="text-gray-100 font-bold text-2xl mb-6 
                         bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Let's connect!
            </p>
            <div className="space-y-4">
                <input
                    type="text"
                    id="name"
                    placeholder="Your Name ..."
                    name="name"
                    className="w-full rounded-lg border border-purple-500/50 bg-purple-900/20
                           py-3 px-4 text-gray-100 placeholder:text-gray-400
                           focus:border-purple-500 focus:outline-none focus:ring-2 
                           focus:ring-purple-500/20 transition-all duration-300
                           hover:border-purple-400"
                />
                <input
                    type="email"
                    id="email"
                    placeholder="Your Email ..."
                    name="email"
                    className="w-full rounded-lg border border-purple-500/50 bg-purple-900/20
                           py-3 px-4 text-gray-100 placeholder:text-gray-400
                           focus:border-purple-500 focus:outline-none focus:ring-2 
                           focus:ring-purple-500/20 transition-all duration-300
                           hover:border-purple-400"
                />
                <textarea
                    name="textarea"
                    id="textarea"
                    cols="30"
                    rows="4"
                    placeholder="Your Message ..."
                    className="w-full rounded-lg border border-purple-500/50 bg-purple-900/20
                           py-3 px-4 text-gray-100 placeholder:text-gray-400
                           focus:border-purple-500 focus:outline-none focus:ring-2 
                           focus:ring-purple-500/20 transition-all duration-300
                           hover:border-purple-400"
                />
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3 rounded-lg text-gray-100 font-semibold text-xl
                           bg-gradient-to-r from-purple-600 to-purple-800
                           hover:from-purple-700 hover:to-purple-900
                           transform hover:-translate-y-0.5
                           transition-all duration-300
                           shadow-lg hover:shadow-purple-500/50"
                >
                    Send Message
                </motion.button>
            </div>
          </form>

        </div>
        
        </Reveal>
    </div>
  )
}

export default Contact