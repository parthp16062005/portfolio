"use client";
import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    let lenis: any;

    async function initLenis() {
      const LenisModule = await import("lenis");
      const Lenis = LenisModule.default;
      lenis = new Lenis({
        duration: 1.2,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }

    initLenis();

    return () => lenis?.destroy();
  }, []);

  return null;
}