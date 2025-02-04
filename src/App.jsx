import { Scrollbars } from "react-custom-scrollbars-2";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Cursor from "./components/Cursor";
import CodingStats from './components/CodingStats'
import { motion, useScroll, useSpring } from "framer-motion";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-purple-600 origin-left z-50"
        style={{ scaleX }}
      />
      <div className="site-background relative min-h-screen w-full overflow-hidden">
        <div className="gradient-overlay" />
        <Cursor />
        <Navbar />
        <div className="content-wrapper relative z-10">
          <section id="about">
            <Hero />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="portfolio">
            <Portfolio />
          </section>
          <section id="coding-stats">
            <CodingStats />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}