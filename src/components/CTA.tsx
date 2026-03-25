"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimateIn from "./AnimateIn";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

const CTA_WORDS = ["Start", "vandaag", "gratis", "met", "Outpace."];

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  // Staggered geometric blocks build up as you scroll in
  const block1Y = useTransform(scrollYProgress, [0.2, 0.7], [80, 0]);
  const block2Y = useTransform(scrollYProgress, [0.3, 0.8], [80, 0]);
  const block3Y = useTransform(scrollYProgress, [0.4, 0.9], [80, 0]);

  return (
    <section ref={ref} className="relative bg-white overflow-hidden py-24 sm:py-32 border-t-2 border-navy">
      <motion.div style={{ y: bgY }} className="absolute inset-[-60px] line-grid" />

      <div className="relative mx-auto max-w-[1240px] px-6 sm:px-8">
        <AnimateIn y={28} duration={0.45}>
          <div className="max-w-[720px]">
            <span className="text-[11px] font-black uppercase tracking-[0.18em] text-accent">
              Klaar om te groeien?
            </span>

            {/* Word-by-word headline */}
            <h2 className="mt-3 text-[44px] font-black leading-[0.95] tracking-[-2px] sm:text-[60px] lg:text-[72px] font-[family-name:var(--font-heading)] uppercase">
              {CTA_WORDS.map((word, i) => (
                <motion.span
                  key={i}
                  className={`inline-block mr-[0.18em] last:mr-0 ${word === "gratis" ? "text-accent" : "text-navy"}`}
                  initial={{ opacity: 0, y: 24, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  style={{ transformPerspective: 600 }}
                  transition={{ duration: 0.45, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }}
                >
                  {word}
                  {(i === 1) && <br />}
                </motion.span>
              ))}
            </h2>

            {/* Tri-color divider */}
            <div className="mt-8 mb-6 flex items-center gap-0">
              <div className="h-[4px] w-8 bg-yellow" />
              <div className="h-[4px] w-8 bg-accent" />
              <div className="h-[4px] w-16 bg-navy" />
            </div>

            <p className="max-w-[520px] text-[16px] leading-[1.7] text-navy/55 font-medium">
              Plan een gratis kennismakingsgesprek en ontdek hoe wij jouw bedrijf
              online laten groeien. Geen verplichtingen, wel direct inzicht.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 border-2 border-navy bg-navy px-8 py-4 text-[13px] font-black uppercase tracking-[0.1em] text-white transition-all duration-150 hover:bg-accent hover:border-accent active:scale-[0.97]"
              >
                Gratis gesprek inplannen
                <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
              </Link>
              <a
                href="mailto:sander@outpace.cloud"
                className="inline-flex items-center gap-2 text-[13px] font-bold text-navy/50 transition-colors hover:text-navy"
              >
                <Mail className="h-4 w-4" />
                sander@outpace.cloud
              </a>
            </div>
          </div>
        </AnimateIn>
      </div>

      {/* Scroll-driven geometric corner blocks */}
      <div className="absolute right-0 top-0 bottom-0 w-[240px] hidden lg:flex flex-col overflow-hidden">
        <div className="flex-1 bg-surface/80 border-l-2 border-navy/10" />
        <motion.div style={{ y: block1Y }} className="h-[110px] bg-yellow border-l-2 border-t-2 border-navy" />
        <motion.div style={{ y: block2Y }} className="h-[80px] bg-accent border-l-2 border-t-2 border-navy" />
        <motion.div style={{ y: block3Y }} className="h-[80px] bg-navy border-l-2 border-t-2 border-accent" />
      </div>
    </section>
  );
}
