"use client";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  maxTilt?: number;
}

export default function TiltCard({ children, className, style, maxTilt = 10 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springCfg = { stiffness: 180, damping: 22, mass: 0.4 };
  const sx = useSpring(rawX, springCfg);
  const sy = useSpring(rawY, springCfg);

  const rotateY = useTransform(sx, [-0.5, 0.5], [-maxTilt, maxTilt]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const glareX = useTransform(sx, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(sy, [-0.5, 0.5], [0, 100]);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(224,136,60,0.14) 0%, transparent 55%)`;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    rawX.set((e.clientX - r.left) / r.width - 0.5);
    rawY.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { rawX.set(0); rawY.set(0); };

  return (
    <div style={{ perspective: "1200px" }}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, position: "relative", ...style }}
        className={className}
      >
        {children}
        <motion.div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            background: glareBg,
            pointerEvents: "none",
            zIndex: 1,
            mixBlendMode: "screen",
          }}
        />
      </motion.div>
    </div>
  );
}
