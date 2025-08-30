import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <header className="nav">
        <div className="container nav-inner">
          <Navbar />
        </div>
      </header>

      <main className="container">
        <section id="home" className="hero">
          <Hero />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="skills" className="section">
          <Skills />
        </section>
        <section id="experience" className="section">
          <Experience />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Zaw Ye Htut — Digital Marketing & Content Creator
      </footer>
    </div>
  );
}
