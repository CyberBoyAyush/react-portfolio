import React from "react"
import { AiFillLinkedin, AiFillGithub, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai"
import { motion } from "framer-motion"
import { Particles } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

const StatsCard = ({ number, label }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 }
    }}
    whileHover={{ scale: 1.05 }}
    className="bg-gradient-to-br from-purple-900/40 to-purple-800/30
             border border-purple-500/30 p-6 rounded-xl text-center
             hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]
             transition-all duration-300"
  >
    <h4 className="text-3xl font-bold text-white mb-1">{number}</h4>
    <p className="text-purple-300 text-sm">{label}</p>
  </motion.div>
);

const FormInput = ({ type, placeholder, name }) => (
  <motion.input
    whileFocus={{ scale: 1.02 }}
    type={type}
    placeholder={placeholder}
    name={name}
    className="w-full rounded-xl border border-purple-500/50 bg-purple-900/20
             py-3 px-4 text-gray-100 placeholder:text-gray-400
             focus:border-purple-400 focus:outline-none focus:ring-2 
             focus:ring-purple-500/20 transition-all duration-300"
  />
);

const FormTextarea = ({ placeholder, name }) => (
  <motion.textarea
    whileFocus={{ scale: 1.02 }}
    placeholder={placeholder}
    name={name}
    rows="4"
    className="w-full rounded-xl border border-purple-500/50 bg-purple-900/20
             py-3 px-4 text-gray-100 placeholder:text-gray-400
             focus:border-purple-400 focus:outline-none focus:ring-2 
             focus:ring-purple-500/20 transition-all duration-300
             resize-none"
  />
);

const Contact = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const particlesConfig = {
    particles: {
      color: { value: "#6b21a8" },
      links: {
        enable: true,
        color: "#6b21a8",
        opacity: 0.1,
      },
      move: {
        enable: true,
        speed: 0.6,
      },
      opacity: {
        value: 0.3,
      },
      size: {
        value: 2,
      },
    },
  };

  return (
    <div className="relative min-h-screen py-20 px-4" id="contact">
      <Particles
        id="contactParticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0 -z-10"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-[1200px] mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/30 backdrop-blur-md
                          border border-purple-500/30 p-8 rounded-2xl
                          transform hover:-translate-y-1 transition-all duration-300
                          hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]"
            >
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Feel free to reach out for opportunities, collaborations, or just a tech chat! 
                Always excited to explore new ideas and build amazing things together.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {[
                { icon: <AiFillGithub />, href: "https://github.com/cyberboyayush", label: "GitHub" },
                { icon: <AiFillLinkedin />, href: "https://linkedin.com/in/cyberboyayush", label: "LinkedIn" },
                { icon: <AiOutlineTwitter />, href: "https://twitter.com/cyberboyayush", label: "Twitter" },
                { icon: <AiOutlineMail />, href: "mailto:contact@cyberboyayush.in", label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gradient-to-br from-purple-900/40 to-purple-800/30
                           border border-purple-500/30 p-4 rounded-xl
                           text-purple-400 text-2xl
                           hover:text-purple-300 transition-all duration-300
                           hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
              initial="hidden"
              whileInView="show"
            >
              <StatsCard number="20+" label="Projects" />
              <StatsCard number="5+" label="Years Experience" />
            </motion.div>
          </motion.div>

          <motion.form
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            action="https://formspree.io/f/xanwyqok"
            method="POST"
            className="bg-gradient-to-br from-purple-900/40 to-purple-800/30 backdrop-blur-md
                     border border-purple-500/30 p-8 rounded-2xl
                     hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]
                     transition-all duration-300"
          >
            <div className="space-y-6">
              <FormInput type="text" placeholder="Your Name" name="name" />
              <FormInput type="email" placeholder="Your Email" name="email" />
              <FormTextarea placeholder="Your Message" name="message" />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 rounded-xl text-white font-semibold
                         bg-gradient-to-r from-purple-600 to-pink-600
                         hover:from-purple-700 hover:to-pink-700
                         transform transition-all duration-300
                         shadow-lg hover:shadow-purple-500/50"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;