"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function AuroraBackground({ className }: { className?: string }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { damping: 30, stiffness: 60 });
  const springY = useSpring(my, { damping: 30, stiffness: 60 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      mx.set(nx);
      my.set(ny);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const blob1X = useTransform(springX, (v) => v * -60);
  const blob1Y = useTransform(springY, (v) => v * -40);
  const blob2X = useTransform(springX, (v) => v * 50);
  const blob2Y = useTransform(springY, (v) => v * 35);
  const blob3X = useTransform(springX, (v) => v * -35);
  const blob3Y = useTransform(springY, (v) => v * 45);

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
    >
      <motion.div
        className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-[60%] rounded-full opacity-45 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, var(--brand-green) 0%, transparent 70%)",
          x: blob1X,
          y: blob1Y,
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-10 right-0 h-[36rem] w-[36rem] translate-x-1/3 rounded-full opacity-40 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, var(--brand-violet) 0%, transparent 70%)",
          x: blob2X,
          y: blob2Y,
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-[30rem] w-[30rem] -translate-x-1/3 translate-y-1/3 rounded-full opacity-35 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, var(--brand-blue) 0%, transparent 70%)",
          x: blob3X,
          y: blob3Y,
        }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  );
}
