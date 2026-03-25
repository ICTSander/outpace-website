"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  x?: number;
  y?: number;
  scale?: number;
  rotateX?: number;
  duration?: number;
}

export default function AnimateIn({
  children,
  className = "",
  delay = 0,
  x = 0,
  y = 40,
  scale = 1,
  rotateX = 0,
  duration = 0.6,
}: AnimateInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x, y, scale, rotateX }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.4, 0, 0.2, 1] }}
      style={{ transformPerspective: rotateX !== 0 ? 900 : undefined }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
