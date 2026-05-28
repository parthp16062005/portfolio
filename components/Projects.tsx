"use client";

const projects = [
  { id: "01", title: "Automotive Reel", category: "Commercial", year: "2024" },
  { id: "02", title: "Fashion Campaign", category: "Editorial", year: "2024" },
  { id: "03", title: "Cinematic Travel Film", category: "Documentary", year: "2023" },
  { id: "04", title: "Brand Identity Film", category: "Corporate", year: "2023" },
];

export default function Projects() {
  return (
    <section id="work" className="bg-black py-32 px-8">
      <div className="max-w-6xl mx-auto mb-20">
        <p className="text-xs uppercase tracking-[0.5em] text-gray-600 mb-4">
          Portfolio
        </p>
        <h2 className="text-5xl md:text-7xl font-black uppercase text-white">
          Selected <br />
          <span className="text-white/20">Frames</span>
        </h2>
      </div>
      <div className="max-w-6xl mx-auto divide-y divide-white/10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group flex items-center justify-between py-8 cursor-pointer hover:px-4 transition-all duration-500"
          >
            <div className="flex items-center gap-8">
              <span className="text-xs text-gray-600">{project.id}</span>
              <h3 className="text-2xl md:text-4xl font-black uppercase text-white group-hover:text-white/60 transition-colors duration-300">
                {project.title}
              </h3>
            </div>
            <div className="flex items-center gap-8">
              <span className="text-xs uppercase tracking-widest text-gray-500">
                {project.category}
              </span>
              <span className="text-xs text-gray-600">{project.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}