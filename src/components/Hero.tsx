"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { TrendingUp } from "lucide-react";

const BARS = [28, 42, 35, 58, 44, 67, 52, 74, 61, 85, 70, 92, 78, 100];

function GeometricDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [-4, 22]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [2, -12]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <div ref={ref} style={{ perspective: "1200px" }} className="w-full max-w-[500px]">
      <motion.div
        style={{ rotateY, rotateX, translateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, x: 40, rotateY: -8 }}
        animate={{ opacity: 1, x: 0, rotateY: -4 }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className="relative"
      >
        {/* Drop shadow */}
        <div className="absolute top-3 left-3 w-full h-full bg-navy/15 -z-10" />

        {/* Outer border frame */}
        <div className="border-2 border-navy bg-white relative overflow-hidden">
          {/* Grid lines background */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(10,16,36,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(10,16,36,0.05) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Header bar — solid navy */}
          <div className="relative bg-navy px-5 py-3 flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-[0.15em] text-white/50">
              dashboard.outpace.nl
            </span>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 bg-emerald-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-400">
                Live
              </span>
            </div>
          </div>

          {/* Yellow accent strip */}
          <div className="h-[3px] bg-yellow" />

          {/* Dashboard content */}
          <div className="relative p-5 space-y-5">
            {/* Primary stat */}
            <div className="border-b-2 border-navy/10 pb-5">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-navy/40">
                Bezoekers deze maand
              </p>
              <div className="flex items-end justify-between mt-1">
                <p className="text-[52px] font-black tracking-[-3px] text-navy leading-none font-[family-name:var(--font-heading)]">
                  2.847
                </p>
                <div className="flex items-center gap-1 bg-accent px-3 py-1.5">
                  <TrendingUp className="h-3 w-3 text-white" />
                  <span className="text-[12px] font-black text-white">+34%</span>
                </div>
              </div>

              {/* Chart */}
              <div className="mt-4 flex items-end gap-[3px] h-16">
                {BARS.map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1"
                    style={{
                      height: 0,
                      backgroundColor: i >= BARS.length - 3 ? "var(--yellow)" : "var(--navy)",
                    }}
                    animate={{ height: `${h}%` }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + i * 0.04,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Two stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="border-l-4 border-accent pl-3">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-navy/40">
                  Leads
                </p>
                <p className="text-[30px] font-black tracking-tight text-navy leading-none font-[family-name:var(--font-heading)]">
                  184
                </p>
                <p className="mt-0.5 text-[11px] font-bold text-accent">+28%</p>
              </div>
              <div className="border-l-4 border-yellow pl-3">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-navy/40">
                  Omzet
                </p>
                <p className="text-[30px] font-black tracking-tight text-navy leading-none font-[family-name:var(--font-heading)]">
                  €12.4k
                </p>
                <p className="mt-0.5 text-[11px] font-bold text-yellow-dark">+52%</p>
              </div>
            </div>
          </div>

          {/* Bottom accent strip */}
          <div className="h-1 bg-accent" />
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-[68px] bg-white line-grid">
      {/* Yellow geometric accent — top right corner block */}
      <div className="absolute top-[68px] right-0 w-[180px] h-[180px] bg-yellow hidden lg:block" />
      {/* Navy vertical stripe */}
      <div className="absolute top-[68px] right-[180px] w-[6px] h-[180px] bg-navy hidden lg:block" />

      <div className="relative mx-auto max-w-[1240px] px-6 sm:px-8">
        <div className="flex flex-col gap-12 py-16 sm:py-20 lg:flex-row lg:items-center lg:gap-20 lg:py-24">

          {/* Left copy */}
          <div className="flex-1">
            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              className="inline-flex items-center gap-3 border-l-4 border-yellow pl-4 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping bg-accent/60" />
                <span className="relative inline-flex h-2 w-2 bg-accent" />
              </span>
              <span className="text-[11px] font-black uppercase tracking-[0.15em] text-navy/60">
                Nu beschikbaar — Zuid-Limburg
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="text-[52px] font-black leading-[0.95] tracking-[-2px] text-navy sm:text-[68px] lg:text-[80px] font-[family-name:var(--font-heading)] uppercase"
            >
              Meer
              <br />
              <span className="text-accent">klanten</span>
              <br />
              voor jouw
              <br />
              bedrijf.
            </motion.h1>

            {/* Divider with yellow block */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.55, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="mt-8 mb-6 flex items-center gap-0 origin-left"
            >
              <div className="h-[4px] w-8 bg-yellow" />
              <div className="h-[4px] w-16 bg-navy" />
            </motion.div>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="max-w-[460px] text-[16px] leading-[1.7] text-navy/60 font-medium"
            >
              Wij bouwen websites die converteren, zorgen dat je gevonden wordt
              in Google en brengen een constante stroom aan leads binnen.
              Volledig ontzorgd.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42, ease: [0.4, 0, 0.2, 1] }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-navy bg-navy px-8 py-4 text-[13px] font-black uppercase tracking-[0.1em] text-white transition-all duration-150 hover:bg-accent hover:border-accent active:scale-[0.97]"
              >
                Gratis gesprek inplannen
              </Link>
              <a
                href="/#prijzen"
                className="inline-flex items-center justify-center border-2 border-navy px-8 py-4 text-[13px] font-black uppercase tracking-[0.1em] text-navy transition-all duration-150 hover:bg-navy hover:text-white active:scale-[0.97]"
              >
                Bekijk prijzen
              </a>
            </motion.div>
          </div>

          {/* Right — 3D Geometric dashboard */}
          <div className="flex flex-1 justify-center lg:justify-end">
            <GeometricDashboard />
          </div>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-navy" />
    </section>
  );
}
