import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Carousel from "./sections/Carousel";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import "./styles/global.css";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section);
  };

  return (
    <div style={{ backgroundColor: "#111111", color: "white" }}>
      <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />
      <section id="about">
        <About />
      </section>
      <section id="carousel">
        <Carousel />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="certificates">
        <Certificates />
      </section>
    </div>
  );
}

export default App;
