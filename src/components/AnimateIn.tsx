"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import useIsMobile from "@/hooks/useIsMobile";

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
  const isMobile = useIsMobile();

  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  // Desktop: subtler values
  const deskY = Math.round(y * 0.5);
  const deskX = Math.round(x * 0.5);
  const deskRotateX = Math.round(rotateX * 0.5);
  const deskDuration = Math.min(duration, 0.45);

  return (
    <motion.div
      initial={{ opacity: 0, x: deskX, y: deskY, scale, rotateX: deskRotateX }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: deskDuration, delay: delay * 0.7, ease: [0.4, 0, 0.2, 1] }}
      style={{ transformPerspective: deskRotateX !== 0 ? 900 : undefined }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
