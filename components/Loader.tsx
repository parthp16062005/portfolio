 "use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center transition-opacity duration-500">
      <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-8">
        Initializing Visual System
      </p>
      <div className="w-64 h-[1px] bg-gray-800 relative">
        <div
          className="absolute top-0 left-0 h-full bg-white transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs text-gray-600 mt-4">{progress}%</p>
    </div>
  );
}
