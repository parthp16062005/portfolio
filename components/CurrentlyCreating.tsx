"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { label: "Currently Filming", title: "Automotive Reel", status: "In Production" },
  { label: "Currently Editing", title: "Fashion Campaign", status: "Post Production" },
  { label: "Coming Soon", title: "Cinematic Travel Film", status: "Pre Production" },
];

export default function CurrentlyCreating() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".creating-card");
    cards?.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          delay: i * 0.15,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-black py-32 px-8 border-t border-white/10" ref={sectionRef}>
      <div className="max-w-6xl mx-auto mb-20">
        <p className="text-xs uppercase tracking-[0.5em] text-gray-600 mb-4">
          Live Updates
        </p>
        <h2 className="text-5xl md:text-7xl font-black uppercase text-white">
          Currently <br />
          <span className="text-white/20">Creating</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.title}
            className="creating-card border border-white/10 p-8 hover:border-white/30 transition-all duration-500"
          >
            {/* Blinking dot */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <p className="text-xs uppercase tracking-widest text-gray-500">
                {item.label}
              </p>
            </div>

            <h3 className="text-2xl font-black uppercase text-white mb-4">
              {item.title}
            </h3>

            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-xs uppercase tracking-widest text-gray-600">
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}