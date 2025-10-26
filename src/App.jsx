// src/App.jsx
import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex">
          {/* LEFT: fixed/sticky half */}
          <aside
            className="w-1/2 h-screen sticky top-0 flex flex-col justify-between p-8"
            style={{ backgroundColor: "#0b283c" }}
          >
            <div>
              <h1 className="text-4xl font-bold">Your Name</h1>
              <p className="mt-4 text-brand-soft">A bit about you — short tagline or role</p>

              {/* Tabs (visual placeholders for now) */}
              <nav className="mt-8 space-y-3">
                <button className="block text-left w-full py-2 text-lg">About</button>
                <button className="block text-left w-full py-2 text-lg">Experience</button>
                <button className="block text-left w-full py-2 text-lg">Projects</button>
                <button className="block text-left w-full py-2 text-lg">Resume</button>
              </nav>
            </div>

            {/* Social icons placeholder */}
            <div className="flex space-x-4">
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-md bg-brand-deep">in</a>
              <a href="#" aria-label="LeetCode" className="p-2 rounded-md bg-brand-deep">lc</a>
              <a href="#" aria-label="GFG" className="p-2 rounded-md bg-brand-deep">gfg</a>
            </div>
          </aside>

          {/* RIGHT: scrollable content */}
          <main className="w-1/2 h-screen overflow-y-auto p-12">
            {/* We'll place sections stacked vertically so scrolling the right part moves through them */}
            <section id="about" className="min-h-[100vh]">
              <h2 className="text-3xl font-semibold mb-4">About</h2>
              <p className="text-brand-soft">Longer about content goes here...</p>
            </section>

            <section id="experience" className="min-h-[100vh]">
              <h2 className="text-3xl font-semibold mb-4">Experience</h2>
              <p className="text-brand-soft">Experience details...</p>
            </section>

            <section id="projects" className="min-h-[100vh]">
              <h2 className="text-3xl font-semibold mb-4">Projects</h2>
              <p className="text-brand-soft">Project cards / demos...</p>
            </section>

            <section id="resume" className="min-h-[100vh]">
              <h2 className="text-3xl font-semibold mb-4">Resume</h2>
              <p className="text-brand-soft">Link or embed resume PDF later.</p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
