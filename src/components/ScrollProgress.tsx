"use client";

import { useScroll, useSpring, motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX, background: "linear-gradient(to right, #FFD100, #FFB800, #FF6B00)" }}
      className="fixed top-0 left-0 right-0 h-[4px] origin-left z-[60] pointer-events-none"
    />
  );
}
