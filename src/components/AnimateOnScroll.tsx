"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

type MotionState = { opacity: number; x?: number; y?: number };

export default function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const offsets: Record<string, MotionState> = {
    up: { opacity: 0, y: 40 },
    down: { opacity: 0, y: -40 },
    left: { opacity: 0, x: 40 },
    right: { opacity: 0, x: -40 },
    none: { opacity: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={offsets[direction]}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : offsets[direction]}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
