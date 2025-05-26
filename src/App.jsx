import React from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Lang from "./components/Lang";
import TechIcons from "./components/TechIcons";

function App() {
  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6 space-y-12">
      <div className="max-w-4xl mx-auto">
        <header className="text-center">
          <h1 className="text-5xl font-extrabold text-indigo-500 mb-2">Sakshi Sirgan</h1>
          <p className="text-indigo-200 text-lg">MERN Stack Developer | Solapur</p>
          <div className="flex justify-center mt-2"><TechIcons /></div>
          <div className="flex flex-wrap justify-center gap-6 mt-4 text-indigo-400">
            <a
              href="https://linkedin.com/in/sakshi-sirgan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sakshisirgan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
            <a href="mailto:sakshisirgan03@gmail.com" className="hover:underline">
              sakshisirgan03@gmail.com
            </a>
            <a href="tel:+917350086934" className="hover:underline">
              +91 73500 86934
            </a>
            <a
              href="/Sakshi_Sirgan.pdf"
              download
              className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700"
            >
              Resume
            </a>
          </div>
        </header>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Lang />
      </div>
    </div>
  );
}

export default App;
