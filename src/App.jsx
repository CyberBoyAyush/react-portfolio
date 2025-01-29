import { Scrollbars } from "react-custom-scrollbars-2"; // Import the library
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

export default function App() {
  return (
    <Scrollbars
      style={{ height: "100vh" }}
      autoHide
      autoHideTimeout={500}
      autoHideDuration={200}
      renderThumbVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{
            ...style,
            backgroundColor: "#6c63ff", // Scrollbar color
            borderRadius: "8px", // Rounded edges
          }}
        />
      )}
    >
      <Navbar />
      <section id="about">
        <Hero />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      {/* <section id="experience">
        <Experience />
      </section> */}
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </Scrollbars>
  );
}