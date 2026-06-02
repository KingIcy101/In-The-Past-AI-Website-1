"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
  const pathname = usePathname();
  const disabled = pathname === "/intake" || pathname.startsWith("/intake/");
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const ringX = useSpring(mouseX, { stiffness: 600, damping: 28, mass: 0.2 });
  const ringY = useSpring(mouseY, { stiffness: 600, damping: 28, mass: 0.2 });

  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (disabled) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setActive(true);

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(
        !!t.closest("a, button, [role='button'], input, textarea, select, label")
      );
    };

    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseenter", enter);
    };
  }, [disabled, mouseX, mouseY]);

  if (!active || disabled) return null;

  return (
    <>
      {/* Glowing ring — trails cursor with spring physics */}
      <motion.div
        className="fixed pointer-events-none rounded-full border cursor-glow-ring"
        style={{
          left: ringX,
          top: ringY,
          x: "-50%",
          y: "-50%",
          zIndex: 99998,
          opacity: visible ? 1 : 0,
          borderColor: hovering ? "#f5a850" : "#e0883c",
          transition: "opacity 0.25s",
        }}
        animate={{
          width: clicking ? 18 : hovering ? 46 : 30,
          height: clicking ? 18 : hovering ? 46 : 30,
          scale: clicking ? 0.8 : 1,
          borderColor: hovering ? "#f5a850" : "#e0883c",
        }}
        transition={{ type: "spring", stiffness: 380, damping: 26 }}
      />

      {/* Sharp dot — exact cursor position */}
      <motion.div
        className="fixed pointer-events-none rounded-full"
        style={{
          left: mouseX,
          top: mouseY,
          x: "-50%",
          y: "-50%",
          zIndex: 99999,
          opacity: visible ? 1 : 0,
          background: hovering ? "#f5a850" : "#e0883c",
          boxShadow: hovering
            ? "0 0 8px #f5a850, 0 0 18px rgba(240,217,168,0.7)"
            : "0 0 6px #e0883c, 0 0 14px rgba(224,136,60,0.6)",
          transition: "opacity 0.25s, background 0.12s, box-shadow 0.12s",
        }}
        animate={{
          width: clicking ? 9 : 5,
          height: clicking ? 9 : 5,
        }}
        transition={{ duration: 0.08 }}
      />
    </>
  );
}
