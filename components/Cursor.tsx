 "use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      if (dot.current) {
        dot.current.style.left = x + "px";
        dot.current.style.top = y + "px";
      }
      if (ring.current) {
        ring.current.style.left = x + "px";
        ring.current.style.top = y + "px";
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Small dot */}
      <div
        ref={dot}
        className="fixed z-[999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "6px",
          height: "6px",
          background: "white",
          borderRadius: "50%",
          transition: "left 0.05s, top 0.05s",
        }}
      />
      {/* Outer ring */}
      <div
        ref={ring}
        className="fixed z-[999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "36px",
          height: "36px",
          border: "1px solid rgba(255,255,255,0.4)",
          borderRadius: "50%",
          transition: "left 0.12s ease, top 0.12s ease",
        }}
      />
    </>
  );
}
