"use client";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/videos/reel.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" />

      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{ backgroundImage: "url('/images/grain.png')", backgroundSize: "200px" }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <p className="text-sm uppercase tracking-[0.4em] text-gray-400 mb-4">
          Filmmaker — Pune
        </p>
        <h1
          className="text-6xl md:text-8xl font-black uppercase tracking-tight leading-none mb-6"
          style={{ fontFamily: "var(--font-bebas), sans-serif" }}
        >
          I Create Content <br />
          <span className="text-white/30">People Remember.</span>
        </h1>
        <p className="text-gray-400 text-sm uppercase tracking-widest mb-8">
          Filmmaking. Social Media. Visual Storytelling.
        </p>
        
          <a href="#work"
          className="border border-white/30 text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500"
        >
          View Selected Frames
        </a>
      </div>
    </section>
  );
}