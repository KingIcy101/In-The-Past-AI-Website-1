"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

// Restrained fade + rise entrance. Animates on MOUNT (not whileInView) so a
// slow/occluded IntersectionObserver can never leave a section stuck at
// opacity:0 — a real defect for users and screenshot proof alike (repo retro:
// "preview stalls Framer entrances"). Under prefers-reduced-motion it renders
// instantly with no transform (validation amendment 2).
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
