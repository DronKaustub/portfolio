// src/App.jsx
import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white flex flex-col md:flex-row">
      {/* LEFT (desktop) / TOP (mobile) */}
      <aside className="md:w-1/2 w-full md:h-screen flex flex-col justify-between p-8 bg-brand-dark md:sticky md:top-0">
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

      {/* RIGHT SIDE CONTENT */}
      <main className="md:w-1/2 w-full p-0 md:p-12">
  {/* About */}
  <section id="about" className="min-h-[100vh] relative">
    <div className="sticky top-0 bg-brand-dark/80 backdrop-blur-md py-3 z-10 block md:hidden w-full">
      <h2 className="text-2xl font-semibold text-center border-b border-brand-light/30 px-4">
        About
      </h2>
    </div>
    <div className="px-6 py-6 md:p-0 text-brand-soft">
      <h2 className="hidden md:block text-3xl font-semibold mb-4">About</h2>
      <p>
        I'm a software developer and UI/UX designer who loves building clean,
        aesthetic web interfaces. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam, tempora.
      </p>
    </div>
  </section>

  {/* Experience */}
  <section id="experience" className="min-h-[100vh] relative">
    <div className="sticky top-0 bg-brand-dark/80 backdrop-blur-md py-3 z-10 block md:hidden w-full">
      <h2 className="text-2xl font-semibold text-center border-b border-brand-light/30 px-4">
        Experience
      </h2>
    </div>
    <div className="px-6 py-6 md:p-0 text-brand-soft">
      <h2 className="hidden md:block text-3xl font-semibold mb-4">Experience</h2>
      <p>
        I’ve worked as a UI/UX Designer and Frontend Developer focusing on
        creating responsive, beautiful interfaces in React and Godot.
      </p>
    </div>
  </section>

  {/* Projects */}
  <section id="projects" className="min-h-[100vh] relative">
    <div className="sticky top-0 bg-brand-dark/80 backdrop-blur-md py-3 z-10 block md:hidden w-full">
      <h2 className="text-2xl font-semibold text-center border-b border-brand-light/30 px-4">
        Projects
      </h2>
    </div>
    <div className="px-6 py-6 md:p-0 text-brand-soft">
      <h2 className="hidden md:block text-3xl font-semibold mb-4">Projects</h2>
      <p>
        Some of my best work includes interactive HMI dashboards and dynamic
        portfolio web apps built with React + Tailwind.
      </p>
    </div>
  </section>

  {/* Resume */}
  <section id="resume" className="min-h-[100vh] relative">
    <div className="sticky top-0 bg-brand-dark/80 backdrop-blur-md py-3 z-10 block md:hidden w-full">
      <h2 className="text-2xl font-semibold text-center border-b border-brand-light/30 px-4">
        Resume
      </h2>
    </div>
    <div className="px-6 py-6 md:p-0 text-brand-soft">
      <h2 className="hidden md:block text-3xl font-semibold mb-4">Resume</h2>
      <p>
        You can view or download my resume here (add PDF link or embed viewer
        later).
      </p>
    </div>
  </section>
</main>


    </div>
  );
}
