"use client";
import { useRef, ElementType } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Masked 3D text reveal — each line slides up from below its clip boundary
 * while rotating from a tilted plane. Classic high-end agency heading effect.
 */
function RevealLine({
  children,
  delay,
  active,
}: {
  children: React.ReactNode;
  delay: number;
  active: boolean;
}) {
  return (
    <span style={{ display: "block", overflow: "hidden" }}>
      <motion.span
        initial={{ y: "115%", rotateX: 45, opacity: 0 }}
        animate={active ? { y: "0%", rotateX: 0, opacity: 1 } : {}}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{
          display: "block",
          transformOrigin: "bottom center",
          transformPerspective: 700,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

interface LineConfig {
  text: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

interface Props {
  lines: LineConfig[];
  delay?: number;
  stagger?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: ElementType<any>;
  className?: string;
  style?: React.CSSProperties;
}

export default function ScrollReveal3D({
  lines,
  delay = 0,
  stagger = 0.14,
  as: Tag = "div",
  className,
  style,
}: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Tag ref={ref} className={className} style={style}>
      {lines.map((line, i) => (
        <RevealLine key={i} delay={delay + i * stagger} active={inView}>
          <span className={line.className} style={line.style}>
            {line.text}
          </span>
        </RevealLine>
      ))}
    </Tag>
  );
}
