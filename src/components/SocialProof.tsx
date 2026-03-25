"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimateIn from "./AnimateIn";
import CountUp from "./CountUp";

const stats = [
  { end: 50, suffix: "+", label: "Lokale ondernemers geholpen", color: "bg-accent" },
  { end: 3, suffix: "x", label: "Gemiddelde groei in leads", color: "bg-yellow" },
  { end: 7, suffix: "", prefix: "<", label: "Dagen van start tot live", color: "bg-accent" },
  { end: 4.9, suffix: "/5", label: "Klanttevredenheid", decimals: 1, color: "bg-yellow" },
];

export default function SocialProof() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section ref={ref} className="relative bg-navy overflow-hidden">
      {/* Parallax background pattern */}
      <motion.div style={{ y: bgY }} className="absolute inset-[-60px] line-grid-dark" />

      <div className="h-[4px] bg-yellow w-full relative" />

      <div className="relative mx-auto max-w-[1240px] px-6 sm:px-8 py-16 sm:py-20">
        <AnimateIn y={0} duration={0.4}>
          <p className="mb-12 text-[11px] font-black uppercase tracking-[0.2em] text-white/30 text-center">
            Vertrouwd door lokale ondernemers in Zuid-Limburg
          </p>
        </AnimateIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 border-t-2 border-l-2 border-white/10">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 0.1} y={28} rotateX={14} duration={0.45}>
              <div className="border-b-2 border-r-2 border-white/10 flex flex-col items-center justify-center py-10 px-6 text-center">
                <p className="text-[58px] font-black tracking-[-3px] text-white leading-none font-[family-name:var(--font-heading)] sm:text-[64px]">
                  {stat.prefix && <span>{stat.prefix}</span>}
                  <CountUp end={stat.end} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
                </p>
                <div className={`mt-3 h-[3px] w-8 ${stat.color}`} />
                <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white/40">
                  {stat.label}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      <div className="h-[3px] bg-white/08 w-full relative" />
    </section>
  );
}
