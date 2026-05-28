"use client";
import { useEffect, useState } from "react";

const logs = [
  "Initializing creative system...",
  "Loading visual assets...",
  "Calibrating color engine...",
  "Syncing project timeline...",
  "Rendering selected frames...",
  "Creative system online.",
];

export default function Dashboard() {
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    logs.forEach((log, i) => {
      setTimeout(() => {
        setVisibleLogs((prev) => [...prev, log]);
        setProgress(Math.round(((i + 1) / logs.length) * 100));
      }, i * 600);
    });
  }, []);

  return (
    <section className="bg-black py-32 px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto mb-20">
        <p className="text-xs uppercase tracking-[0.5em] text-gray-600 mb-4">
          System
        </p>
        <h2 className="text-5xl md:text-7xl font-black uppercase text-white">
          Creative <br />
          <span className="text-white/20">Dashboard</span>
        </h2>
      </div>

      {/* OS Window */}
      <div className="max-w-6xl mx-auto border border-white/10 bg-white/[0.02]">

        {/* Title Bar */}
        <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10">
          <div className="w-3 h-3 rounded-full bg-white/20" />
          <div className="w-3 h-3 rounded-full bg-white/20" />
          <div className="w-3 h-3 rounded-full bg-white/20" />
          <p className="text-xs text-gray-600 uppercase tracking-widest ml-4">
            visual.system — terminal
          </p>
        </div>

        {/* Terminal Logs */}
        <div className="p-8 font-mono min-h-[300px]">
          {visibleLogs.map((log, i) => (
            <div key={i} className="flex items-center gap-4 mb-3">
              <span className="text-gray-600 text-xs">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`text-xs ${
                  i === visibleLogs.length - 1 ? "text-white" : "text-gray-500"
                }`}
              >
                {log}
              </span>
            </div>
          ))}
          {visibleLogs.length < logs.length && (
            <span className="text-white animate-pulse">_</span>
          )}
        </div>

        {/* Progress Bar */}
        <div className="px-8 pb-8">
          <div className="flex justify-between mb-2">
            <p className="text-xs text-gray-600 uppercase tracking-widest">
              System Load
            </p>
            <p className="text-xs text-gray-600">{progress}%</p>
          </div>
          <div className="w-full h-[1px] bg-white/10">
            <div
              className="h-full bg-white transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 border-t border-white/10">
          {[
            { label: "Projects", value: "24+" },
            { label: "Brands", value: "12+" },
            { label: "Hours of Footage", value: "500+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="px-8 py-6 border-r border-white/10 last:border-r-0"
            >
              <p className="text-3xl font-black text-white mb-1">{stat.value}</p>
              <p className="text-xs text-gray-600 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}