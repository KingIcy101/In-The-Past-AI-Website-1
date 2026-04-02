"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

const MASK = (x: number, y: number) =>
  `radial-gradient(circle at ${x}px ${y}px, transparent 0%, transparent 80px, black 300px)`;

export default function AuraBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(-600);
  const mouseY = useMotionValue(-600);

  const springX = useSpring(mouseX, { stiffness: 55, damping: 18, mass: 0.9 });
  const springY = useSpring(mouseY, { stiffness: 55, damping: 18, mass: 0.9 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const update = () => {
      const x = springX.get();
      const y = springY.get();
      const mask = MASK(x, y);
      el.style.maskImage = mask;
      el.style.webkitMaskImage = mask;
    };

    const unsubX = springX.on("change", update);
    const unsubY = springY.on("change", update);

    return () => {
      window.removeEventListener("mousemove", onMove);
      unsubX();
      unsubY();
    };
  }, [mouseX, mouseY, springX, springY]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 2, mixBlendMode: "screen", opacity: 0.07 }}
    >
      {/* translateZ(0) pins each orb to its own GPU layer so the blur
          is rasterised once and only the position changes each frame */}

      {/* Orb 1 — top-left */}
      <div
        className="absolute rounded-full"
        style={{
          width: "70vw", height: "70vw",
          top: "-22vh", left: "-14vw",
          background: "radial-gradient(circle, rgba(224,136,60,0.07) 0%, transparent 65%)",
          filter: "blur(160px)",
          transform: "translateZ(0)",
          animation: "aura-drift-1 26s ease-in-out infinite",
        }}
      />

      {/* Orb 2 — top-right */}
      <div
        className="absolute rounded-full"
        style={{
          width: "58vw", height: "58vw",
          top: "-12vh", right: "-18vw",
          background: "radial-gradient(circle, rgba(220,140,80,0.06) 0%, transparent 65%)",
          filter: "blur(170px)",
          transform: "translateZ(0)",
          animation: "aura-drift-2 32s ease-in-out -8s infinite",
        }}
      />

      {/* Orb 3 — centre ellipse */}
      <div
        className="absolute rounded-full"
        style={{
          width: "80vw", height: "55vh",
          top: "28vh", left: "10vw",
          background: "radial-gradient(ellipse, rgba(180,100,45,0.05) 0%, transparent 65%)",
          filter: "blur(180px)",
          transform: "translateZ(0)",
          animation: "aura-drift-3 21s ease-in-out -5s infinite",
        }}
      />

      {/* Orb 4 — bottom-left */}
      <div
        className="absolute rounded-full"
        style={{
          width: "58vw", height: "58vw",
          bottom: "-14vh", left: "-8vw",
          background: "radial-gradient(circle, rgba(190,110,50,0.06) 0%, transparent 65%)",
          filter: "blur(160px)",
          transform: "translateZ(0)",
          animation: "aura-drift-4 28s ease-in-out -12s infinite",
        }}
      />

      {/* Orb 5 — bottom-right */}
      <div
        className="absolute rounded-full"
        style={{
          width: "48vw", height: "48vw",
          bottom: "-8vh", right: "-6vw",
          background: "radial-gradient(circle, rgba(215,140,70,0.05) 0%, transparent 65%)",
          filter: "blur(170px)",
          transform: "translateZ(0)",
          animation: "aura-drift-5 23s ease-in-out -3s infinite",
        }}
      />
    </div>
  );
}
