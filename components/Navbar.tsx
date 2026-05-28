"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-40 px-8 py-6 flex items-center justify-between transition-all duration-500"
      style={{
        background: scrolled ? "rgba(0,0,0,0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      <p className="text-white text-sm uppercase tracking-[0.3em] font-bold">
        parth.jpg
      </p>
      <div className="flex gap-8">
        <a href="#work" className="text-gray-400 text-xs uppercase tracking-widest hover:text-white transition-colors duration-300">Work</a>
        <a href="#process" className="text-gray-400 text-xs uppercase tracking-widest hover:text-white transition-colors duration-300">Process</a>
        <a href="#contact" className="text-gray-400 text-xs uppercase tracking-widest hover:text-white transition-colors duration-300">Contact</a>
      </div>
    </nav>
  );
}