"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  strength = 0.38,
}: {
  children: React.ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      style={{ display: "inline-block" }}
      onMouseMove={(e) => {
        const el = ref.current!;
        const rect = el.getBoundingClientRect();
        setPos({
          x: (e.clientX - (rect.left + rect.width / 2)) * strength,
          y: (e.clientY - (rect.top + rect.height / 2)) * strength,
        });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
    >
      <motion.div
        animate={pos}
        transition={{ type: "spring", stiffness: 200, damping: 18, mass: 0.4 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
