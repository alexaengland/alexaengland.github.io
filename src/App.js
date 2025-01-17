import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import ExperienceAndSkills from './components/ExperienceAndSkills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content pt-5">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="experience-and-skills">
          <ExperienceAndSkills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer className="bg-dark text-white p-4 text-center">
        <p>© 2025 Alexa England</p>
      </footer>
    </div>
  );
}

export default App;


