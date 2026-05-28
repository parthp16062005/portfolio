"use client";

export default function CTA() {
  return (
    <section id="contact" className="bg-black py-40 px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

        <p className="text-xs uppercase tracking-[0.5em] text-gray-600 mb-8">
          Lets Work Together
        </p>

        <h2 className="text-5xl md:text-8xl font-black uppercase text-white leading-none mb-12">
          Lets Create <br />
          <span className="text-white/20">Something Cinematic.</span>
        </h2>

        <p className="text-gray-500 text-sm max-w-md mb-12 leading-relaxed">
          Available for brand films, commercial reels, fashion campaigns, and creative direction.
        </p>

        
          <a href="mailto:you@email.com"
          className="border border-white text-white px-12 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500"
        >
          Start a Project
        </a>

        <div className="mt-32 flex items-center justify-between w-full border-t border-white/10 pt-8">
          <p className="text-xs text-gray-600 uppercase tracking-widest">
            YourName 2024
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-gray-600 uppercase tracking-widest hover:text-white transition-colors duration-300">Instagram</a>
            <a href="#" className="text-xs text-gray-600 uppercase tracking-widest hover:text-white transition-colors duration-300">YouTube</a>
            <a href="#" className="text-xs text-gray-600 uppercase tracking-widest hover:text-white transition-colors duration-300">LinkedIn</a>
          </div>
        </div>

      </div>
    </section>
  );
}