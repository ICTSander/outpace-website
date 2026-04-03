"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { TrendingUp } from "lucide-react";
import useIsMobile from "@/hooks/useIsMobile";

const BARS = [28, 42, 35, 58, 44, 67, 52, 74, 61, 85, 70, 92, 78, 100];

const HEADLINE_WORDS = [
  { text: "Meer", accent: false },
  { text: "klanten", accent: true },
  { text: "voor", accent: false },
  { text: "jouw", accent: false },
  { text: "bedrijf.", accent: false },
];

function DashboardPanel() {
  return (
    <div className="w-full max-w-[480px]">
      <div className="relative">
        <div className="absolute top-4 left-4 w-full h-full bg-navy/20" />

        <div className="relative border-2 border-navy bg-white overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(10,16,36,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(10,16,36,0.05) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative bg-navy px-4 py-2.5 sm:px-5 sm:py-3 flex items-center justify-between">
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] text-white/50">
              dashboard.outpace.nl
            </span>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 bg-emerald-400" />
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-400">Live</span>
            </div>
          </div>
          <div className="h-[3px] bg-yellow" />

          <div className="relative p-4 space-y-4 sm:p-5 sm:space-y-5">
            <div className="border-b-2 border-navy/10 pb-4 sm:pb-5">
              <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.18em] text-navy/40">
                Bezoekers deze maand
              </p>
              <div className="flex items-end justify-between mt-1">
                <p className="text-[36px] sm:text-[52px] font-black tracking-[-3px] text-navy leading-none font-[family-name:var(--font-heading)]">
                  2.847
                </p>
                <div className="flex items-center gap-1 bg-accent px-2.5 py-1 sm:px-3 sm:py-1.5">
                  <TrendingUp className="h-3 w-3 text-white" />
                  <span className="text-[11px] sm:text-[12px] font-black text-white">+34%</span>
                </div>
              </div>
              <div className="mt-3 sm:mt-4 flex items-end gap-[3px] h-12 sm:h-16">
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
                      duration: 0.4,
                      delay: 0.6 + i * 0.03,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="border-l-4 border-accent pl-3">
                <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] text-navy/40">Leads</p>
                <p className="text-[24px] sm:text-[30px] font-black tracking-tight text-navy leading-none font-[family-name:var(--font-heading)]">184</p>
                <p className="mt-0.5 text-[11px] font-bold text-accent">+28%</p>
              </div>
              <div className="border-l-4 border-yellow pl-3">
                <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] text-navy/40">Omzet</p>
                <p className="text-[24px] sm:text-[30px] font-black tracking-tight text-navy leading-none font-[family-name:var(--font-heading)]">€12.4k</p>
                <p className="mt-0.5 text-[11px] font-bold text-yellow-dark">+52%</p>
              </div>
            </div>
          </div>
          <div className="h-1 bg-accent" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 55, damping: 20 });

  // Desktop: reduced animation distances
  const dashRotateY = useTransform(smooth, [0, 0.55, 0.85, 1], [-40, 0, 5, 14]);
  const dashRotateX = useTransform(smooth, [0, 0.55, 0.85, 1], [12, 0, -2, -6]);
  const dashZ      = useTransform(smooth, [0, 0.55, 0.85, 1], [-280, 0, 40, 80]);
  const dashScale  = useTransform(smooth, [0, 0.45, 0.75, 1], [0.6, 1, 1.02, 0.88]);

  const textX      = useTransform(smooth, [0, 0.55, 0.82, 1], [0, 0, -30, -80]);
  const textOpacity = useTransform(smooth, [0, 0.55, 0.8, 1], [1, 1, 0.4, 0]);

  const gridScale  = useTransform(smooth, [0, 1], [1, 1.08]);
  const cornerY    = useTransform(smooth, [0, 1], [0, -30]);

  return (
    <div ref={containerRef} style={{ height: isMobile ? "auto" : "220vh" }} className="relative">
      <div className={`${isMobile ? "relative" : "sticky top-0 h-screen"} pt-[68px] bg-white overflow-hidden`}>

        {/* Parallax grid — static on mobile */}
        {isMobile ? (
          <div className="absolute inset-0 line-grid" />
        ) : (
          <motion.div style={{ scale: gridScale }} className="absolute inset-0 line-grid origin-center" />
        )}

        {/* Yellow + navy corner accent */}
        {!isMobile && (
          <motion.div style={{ y: cornerY }} className="absolute top-[68px] right-0 hidden lg:block">
            <div className="w-[180px] h-[180px] bg-yellow" />
            <div className="w-[6px] h-[180px] bg-navy absolute top-0 -left-[6px]" />
          </motion.div>
        )}

        {/* Main layout */}
        <div className={`relative ${isMobile ? "" : "h-full flex items-center"}`}>
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8 w-full">
            <div className="flex flex-col gap-8 py-8 sm:gap-12 lg:flex-row lg:items-center lg:gap-16">

              {/* Left text */}
              {isMobile ? (
                <div className="flex-1">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-3 border-l-4 border-yellow pl-4 mb-6">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping bg-accent/60" />
                      <span className="relative inline-flex h-2 w-2 bg-accent" />
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.15em] text-navy/60">
                      Nu beschikbaar — Zuid-Limburg
                    </span>
                  </div>

                  <h1 className="text-[36px] font-black leading-[1.0] tracking-[-1.5px] sm:text-[52px] lg:text-[80px] font-[family-name:var(--font-heading)] uppercase">
                    {HEADLINE_WORDS.map((word, i) => (
                      <span
                        key={i}
                        className={`inline-block mr-[0.2em] last:mr-0 ${word.accent ? "text-accent" : "text-navy"}`}
                      >
                        {word.text}
                        {(i === 1 || i === 3) && <br />}
                      </span>
                    ))}
                  </h1>

                  <div className="mt-6 mb-5 flex items-center origin-left">
                    <div className="h-[4px] w-8 bg-yellow" />
                    <div className="h-[4px] w-16 bg-navy" />
                  </div>

                  <p className="max-w-[460px] text-[15px] leading-[1.7] text-navy/60 font-medium">
                    Wij bouwen websites die converteren, zorgen dat je gevonden
                    wordt in Google en brengen een constante stroom leads binnen.
                    Volledig ontzorgd.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center border-2 border-navy bg-navy px-6 py-3.5 text-[12px] font-black uppercase tracking-[0.1em] text-white transition-all duration-150 hover:bg-accent hover:border-accent active:scale-[0.97]"
                    >
                      Gratis gesprek inplannen
                    </Link>
                    <a
                      href="/#prijzen"
                      className="inline-flex items-center justify-center border-2 border-navy px-6 py-3.5 text-[12px] font-black uppercase tracking-[0.1em] text-navy transition-all duration-150 hover:bg-navy hover:text-white active:scale-[0.97]"
                    >
                      Bekijk prijzen
                    </a>
                  </div>
                </div>
              ) : (
                <motion.div style={{ x: textX, opacity: textOpacity }} className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
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

                  <h1 className="text-[52px] font-black leading-[1.0] tracking-[-2px] sm:text-[68px] lg:text-[80px] font-[family-name:var(--font-heading)] uppercase">
                    {HEADLINE_WORDS.map((word, i) => (
                      <motion.span
                        key={i}
                        className={`inline-block mr-[0.2em] last:mr-0 ${word.accent ? "text-accent" : "text-navy"}`}
                        initial={{ opacity: 0, y: 20, rotateX: -12 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        style={{ transformPerspective: 600 }}
                        transition={{ duration: 0.4, delay: 0.08 + i * 0.07, ease: [0.4, 0, 0.2, 1] }}
                      >
                        {word.text}
                        {(i === 1 || i === 3) && <br />}
                      </motion.span>
                    ))}
                  </h1>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.45, delay: 0.45, ease: [0.4, 0, 0.2, 1] }}
                    className="mt-8 mb-6 flex items-center origin-left"
                  >
                    <div className="h-[4px] w-8 bg-yellow" />
                    <div className="h-[4px] w-16 bg-navy" />
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="max-w-[460px] text-[16px] leading-[1.7] text-navy/60 font-medium"
                  >
                    Wij bouwen websites die converteren, zorgen dat je gevonden
                    wordt in Google en brengen een constante stroom leads binnen.
                    Volledig ontzorgd.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
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
                </motion.div>
              )}

              {/* Right — dashboard */}
              <div
                className="flex flex-1 justify-center lg:justify-end"
                style={isMobile ? undefined : { perspective: "1200px" }}
              >
                {isMobile ? (
                  <DashboardPanel />
                ) : (
                  <motion.div
                    style={{
                      rotateY: dashRotateY,
                      rotateX: dashRotateX,
                      z: dashZ,
                      scale: dashScale,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <DashboardPanel />
                  </motion.div>
                )}
              </div>

            </div>
          </div>
        </div>

        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-navy" />
      </div>
    </div>
  );
}
