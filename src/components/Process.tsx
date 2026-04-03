"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import AnimateIn from "./AnimateIn";
import useIsMobile from "@/hooks/useIsMobile";
import { MessageCircle, Monitor, Rocket } from "lucide-react";

const steps = [
  {
    number: "01", icon: MessageCircle,
    title: "Gratis kennismaking",
    description: "We bespreken jouw doelen, huidige situatie en kansen. Vrijblijvend en zonder verplichtingen.",
    time: "Dag 0", color: "bg-yellow", textColor: "text-navy",
  },
  {
    number: "02", icon: Monitor,
    title: "Demo binnen 24 uur",
    description: "Je ontvangt een concreet voorstel met een live demo van jouw nieuwe website of campagne.",
    time: "Dag 1", color: "bg-accent", textColor: "text-white",
  },
  {
    number: "03", icon: Rocket,
    title: "Live binnen 1 week",
    description: "Na goedkeuring gaat alles live. Wij monitoren, optimaliseren en rapporteren maandelijks.",
    time: "Dag 7", color: "bg-navy", textColor: "text-white",
  },
];

function ProgressBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="hidden lg:block absolute top-[26px] left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-[3px] bg-navy/10">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="absolute inset-0 origin-left bg-accent"
      />
    </div>
  );
}

export default function Process() {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <section ref={ref} id="werkwijze" className="relative bg-surface overflow-hidden py-16 sm:py-32">
      {isMobile ? (
        <div className="absolute inset-0 line-grid" />
      ) : (
        <motion.div style={{ y: bgY }} className="absolute inset-[-60px] line-grid" />
      )}

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <AnimateIn y={14} duration={0.4}>
          <div className="mb-12 sm:mb-20 border-l-4 border-accent pl-5 sm:pl-6">
            <span className="text-[11px] font-black uppercase tracking-[0.18em] text-accent">Werkwijze</span>
            <h2 className="mt-2 text-[28px] font-black leading-[1.0] tracking-[-1px] text-navy sm:text-[48px] font-[family-name:var(--font-heading)] uppercase">
              In 3 stappen
              <br />
              online groeien
            </h2>
            <p className="mt-3 sm:mt-4 max-w-[440px] text-[14px] sm:text-[15px] leading-[1.7] text-navy/55 font-medium">
              Geen lange trajecten of ingewikkelde processen. Wij maken het simpel.
            </p>
          </div>
        </AnimateIn>

        <div className="relative">
          <ProgressBar />
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, i) => (
              <AnimateIn key={step.number} delay={i * 0.12} y={20} rotateX={8} duration={0.4}>
                <motion.div
                  whileHover={isMobile ? undefined : { y: -3, transition: { duration: 0.18, ease: [0.4, 0, 0.2, 1] } }}
                  className="relative"
                >
                  <div className={`flex h-[48px] w-[48px] sm:h-[52px] sm:w-[52px] items-center justify-center ${step.color} ${step.textColor} mb-5 sm:mb-6 relative`}>
                    <step.icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.8} />
                    <span className="absolute -top-2.5 -right-2.5 bg-navy text-yellow text-[10px] font-black px-1.5 py-0.5 leading-none">
                      {step.number}
                    </span>
                  </div>

                  <span className="inline-block text-[11px] font-black uppercase tracking-[0.15em] text-navy/40 mb-3">
                    {step.time}
                  </span>
                  <h3 className="text-[18px] sm:text-[20px] font-black tracking-tight text-navy uppercase font-[family-name:var(--font-heading)]">
                    {step.title}
                  </h3>
                  <div className="mt-3 h-[2px] w-8 bg-navy/15" />
                  <p className="mt-3 sm:mt-4 text-[13px] sm:text-[14px] leading-[1.7] text-navy/55 font-medium">
                    {step.description}
                  </p>
                </motion.div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
