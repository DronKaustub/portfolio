// src/App.jsx
import React from "react";
import "./index.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white flex flex-col md:flex-row justify-center">
        <div className="w-full max-w-[1440px] flex flex-col md:flex-row">
      {/* LEFT (desktop) / TOP (mobile) */}
      <aside className="md:w-[40%] w-full md:h-screen flex flex-col justify-between p-8 bg-brand-dark md:sticky md:top-0">
        {/* Top section */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Dron Kaustub</h1>
          <p className="mt-2 text-brand-soft md:mt-4">
            Software Developer • UI/UX Designer
          </p>

          {/* Tabs */}
          <nav className="mt-6 md:mt-8 space-y-1 md:space-y-3">
            <a href="#about" className="block text-left w-full py-1 md:py-2 text-lg hover:text-brand-light transition">
              About
            </a>
            <a href="#experience" className="block text-left w-full py-1 md:py-2 text-lg hover:text-brand-light transition">
              Experience
            </a>
            <a href="#projects" className="block text-left w-full py-1 md:py-2 text-lg hover:text-brand-light transition">
              Projects
            </a>
            <a href="#resume" className="block text-left w-full py-1 md:py-2 text-lg hover:text-brand-light transition">
              Resume
            </a>
          </nav>

        </div>

        {/* Social icons (move to bottom in mobile too) */}
        <div className="flex space-x-4 mt-8 justify-center md:justify-start">
          <a href="#" className="p-2 rounded-md bg-brand-deep hover:bg-brand-light transition">in</a>
          <a href="#" className="p-2 rounded-md bg-brand-deep hover:bg-brand-light transition">lc</a>
          <a href="#" className="p-2 rounded-md bg-brand-deep hover:bg-brand-light transition">gfg</a>
        </div>
      </aside>

            {/* Right side */}
      <main className="md:w-[60%] w-full px-6 md:p-12">
        <About />
        <Experience />
        <Projects />
        <Resume />
      </main>

</div>

    </div>
  );
}
