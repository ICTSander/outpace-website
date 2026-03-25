"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { TrendingUp } from "lucide-react";

const BARS = [28, 42, 35, 58, 44, 67, 52, 74, 61, 85, 70, 92, 78, 100];

const HEADLINE_WORDS = [
  { text: "Meer", color: "text-navy" },
  { text: "klanten", color: "text-accent" },
  { text: "voor", color: "text-navy" },
  { text: "jouw", color: "text-navy" },
  { text: "bedrijf.", color: "text-navy" },
];

function GeometricDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const rotateY = useTransform(scrollYProgress, [0, 1], [-4, 22]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [2, -14]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const rotateYSpring = useSpring(rotateY, { stiffness: 80, damping: 20 });
  const rotateXSpring = useSpring(rotateX, { stiffness: 80, damping: 20 });

  return (
    <div ref={ref} style={{ perspective: "1200px" }} className="w-full max-w-[500px]">
      <motion.div
        style={{ rotateY: rotateYSpring, rotateX: rotateXSpring, translateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, x: 50, rotateY: -10 }}
        animate={{ opacity: 1, x: 0, rotateY: -4 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="relative"
      >
        {/* Drop shadow block */}
        <div className="absolute top-3 left-3 w-full h-full bg-navy/15 -z-10" />

        <div className="border-2 border-navy bg-white relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(10,16,36,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(10,16,36,0.05) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Header */}
          <div className="relative bg-navy px-5 py-3 flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-[0.15em] text-white/50">
              dashboard.outpace.nl
            </span>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 bg-emerald-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-400">Live</span>
            </div>
          </div>
          <div className="h-[3px] bg-yellow" />

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
              <div className="mt-4 flex items-end gap-[3px] h-16">
                {BARS.map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1"
                    style={{ height: 0, backgroundColor: i >= BARS.length - 3 ? "var(--yellow)" : "var(--navy)" }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.04, ease: [0.4, 0, 0.2, 1] }}
                  />
                ))}
              </div>
            </div>

            {/* Two stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="border-l-4 border-accent pl-3">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-navy/40">Leads</p>
                <p className="text-[30px] font-black tracking-tight text-navy leading-none font-[family-name:var(--font-heading)]">184</p>
                <p className="mt-0.5 text-[11px] font-bold text-accent">+28%</p>
              </div>
              <div className="border-l-4 border-yellow pl-3">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-navy/40">Omzet</p>
                <p className="text-[30px] font-black tracking-tight text-navy leading-none font-[family-name:var(--font-heading)]">€12.4k</p>
                <p className="mt-0.5 text-[11px] font-bold text-yellow-dark">+52%</p>
              </div>
            </div>
          </div>
          <div className="h-1 bg-accent" />
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden pt-[68px] bg-white">
      {/* Parallax grid background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 line-grid"
      />

      {/* Yellow + navy corner blocks — parallax offset */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -40]) }}
        className="absolute top-[68px] right-0 w-[180px] h-[180px] bg-yellow hidden lg:block"
      />
      <div className="absolute top-[68px] right-[180px] w-[6px] h-[180px] bg-navy hidden lg:block" />

      <div className="relative mx-auto max-w-[1240px] px-6 sm:px-8">
        <div className="flex flex-col gap-12 py-16 sm:py-20 lg:flex-row lg:items-center lg:gap-20 lg:py-24">

          {/* Left */}
          <div className="flex-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
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

            {/* Headline — word by word stagger */}
            <h1 className="text-[52px] font-black leading-[1.0] tracking-[-2px] sm:text-[68px] lg:text-[80px] font-[family-name:var(--font-heading)] uppercase">
              {HEADLINE_WORDS.map((word, i) => (
                <motion.span
                  key={i}
                  className={`inline-block mr-[0.2em] last:mr-0 ${word.color}`}
                  initial={{ opacity: 0, y: 32, rotateX: -20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  style={{ transformPerspective: 600 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.09, ease: [0.4, 0, 0.2, 1] }}
                >
                  {word.text}
                  {/* Force line breaks for layout */}
                  {(i === 1 || i === 3) && <br />}
                </motion.span>
              ))}
            </h1>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.4, 0, 0.2, 1] }}
              className="mt-8 mb-6 flex items-center origin-left"
            >
              <div className="h-[4px] w-8 bg-yellow" />
              <div className="h-[4px] w-16 bg-navy" />
            </motion.div>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="max-w-[460px] text-[16px] leading-[1.7] text-navy/60 font-medium"
            >
              Wij bouwen websites die converteren, zorgen dat je gevonden wordt
              in Google en brengen een constante stroom aan leads binnen.
              Volledig ontzorgd.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
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

          {/* Right — 3D dashboard */}
          <div className="flex flex-1 justify-center lg:justify-end">
            <GeometricDashboard />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-navy" />
    </section>
  );
}
