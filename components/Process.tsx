 "use client";

const steps = [
  {
    number: "01",
    title: "Strategy",
    desc: "Understanding your brand, audience, and creative goals before anything else.",
  },
  {
    number: "02",
    title: "Shoot",
    desc: "Cinematic production with intentional framing, lighting, and movement.",
  },
  {
    number: "03",
    title: "Edit",
    desc: "Color grading, sound design, and motion — crafted frame by frame.",
  },
  {
    number: "04",
    title: "Deliver",
    desc: "Final exports optimized for every platform. Ready to perform.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-black py-32 px-8 border-t border-white/10">

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-20">
        <p className="text-xs uppercase tracking-[0.5em] text-gray-600 mb-4">
          How I Work
        </p>
        <h2 className="text-5xl md:text-7xl font-black uppercase text-white">
          Creative <br />
          <span className="text-white/20">Process</span>
        </h2>
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {steps.map((step) => (
          <div key={step.number} className="group">
            <p className="text-xs text-gray-600 mb-4">{step.number}</p>
            <div className="w-full h-[1px] bg-white/10 mb-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" />
            </div>
            <h3 className="text-xl font-black uppercase text-white mb-3">
              {step.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
