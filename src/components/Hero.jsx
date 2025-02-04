import React from "react";
import profilepic from "../assets/profile.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineLinkedin,
  AiOutlineX,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiJava,
} from "react-icons/di";

import { SiCplusplus } from "react-icons/si";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -100]);
  const y2 = useTransform(scrollY, [0, 300], [0, 100]);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const particlesConfig = {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 1000 } },
      color: { value: ["#6b21a8", "#581c87", "#3b0764"] }, // Darker purple colors
      shape: { type: "circle" },
      opacity: {
        value: 0.5,
        random: true,
        animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        animation: { enable: true, speed: 2, minimumValue: 0.1, sync: false }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#6b21a8",
        opacity: 0.1, // Reduced opacity for subtler effect
        width: 1,
        triangles: { enable: true, opacity: 0.1 }
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" },
        attract: { enable: true, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        onClick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 140, links: { opacity: 1 } },
        push: { quantity: 4 }
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="relative overflow-hidden bg-[#030014]"> {/* Updated background color */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0 -z-10"
        style={{ width: '100%', position: 'absolute' }}
      />
      
      <motion.div 
        className="mt-24 relative bg-transparent" // Added bg-transparent
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-[1200px] mx-auto px-4 bg-transparent"> {/* Added bg-transparent */}
          <div className="grid md:grid-cols-2 place-items-center gap-8">
            <motion.div 
              style={{ y: y1 }} 
              className="relative z-20"
              variants={itemVariants}
            >
              <div className="relative">
                <TypeAnimation
                  sequence={["Coder", 1000, "Developer", 1000, "Programmer", 1000]}
                  speed={50}
                  repeat={Infinity}
                  className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-400 
                           text-xl md:text-5xl italic mb-4 relative z-10"
                />
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-purple-800 to-purple-600 rounded-lg blur opacity-20"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                />
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-gray-200 md:text-7xl text-4xl tracking-tight mb-4"
              >
                Hello Ji, Myself<br />
                <span className="text-purple-500">Ayush Sharma</span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-base mb-6"
              >
                A code ninja and problem-solving enthusiast! Whether it’s cracking tough algorithms or crafting sleek web apps with React and JavaScript, I’m always up for a challenge. Currently honing my tech skills at Manipal University Jaipur, I thrive on learning, building, and turning ideas into reality. Let’s make something awesome together!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex flex-row items-center gap-6 my-4 md:mb-0"
              >
                <motion.a
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4
                          bg-gradient-to-r from-purple-800/20 to-purple-600/20 
                          border border-purple-700 rounded-xl
                          hover:bg-gradient-to-r hover:from-purple-800/30 hover:to-purple-600/30
                          transition-all duration-300"
                  href="https://me.cyberboyayush.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Profiles
                </motion.a>

                <motion.div className="flex gap-6 flex-row text-4xl md:text-6xl z-20">
                  {[
                    { icon: <AiOutlineGithub />, href: "https://github.com/cyberboyayush" },
                    { icon: <AiOutlineLinkedin />, href: "https://linkedin.com/in/cyberboyayush" },
                    { icon: <AiOutlineX />, href: "https://twitter.com/cyberboyayush" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="text-purple-600 hover:text-purple-400"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: [0, -10, 10, -10, 0],
                        filter: "brightness(1.3)",
                        transition: { duration: 0.5 }
                      }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              className="relative perspective-1000 w-full flex justify-center"
              variants={itemVariants}
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img 
                  src={profilepic}
                  className="w-[280px] md:w-[400px] relative z-10 rounded-xl shadow-2xl"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 10,
                    filter: "brightness(1.1) contrast(1.1)",
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-purple-800 via-purple-700 to-purple-800 rounded-full blur-2xl opacity-20 z-0"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="relative py-16 mt-8 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-6 md:gap-8"
              animate={{ 
                y: [0, -8, 0],
                filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              {[
                { icon: <DiHtml5 className="text-orange-600" />, name: "HTML5" },
                { icon: <DiCss3 className="text-blue-600" />, name: "CSS3" },
                { icon: <DiJavascript1 className="text-yellow-500" />, name: "JavaScript" },
                { icon: <DiReact className="text-blue-500" />, name: "React" },
                { icon: <DiNodejsSmall className="text-green-500" />, name: "Node.js" },
                { icon: <SiCplusplus className="text-blue-600" />, name: "C++" },
                { icon: <DiJava className="text-red-600" />, name: "Java" }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  whileHover={{ 
                    scale: 1.2,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <div className="text-5xl md:text-7xl">{tech.icon}</div>
                  <span className="text-sm text-gray-400 mt-2">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute inset-0 hidden md:block">
          <ShinyEffect left={0} top={0} size={1400} />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
