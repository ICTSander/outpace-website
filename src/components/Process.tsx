"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimateIn from "./AnimateIn";
import { MessageCircle, Monitor, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Gratis kennismaking",
    description:
      "We bespreken jouw doelen, huidige situatie en kansen. Vrijblijvend en zonder verplichtingen.",
    time: "Dag 0",
  },
  {
    number: "02",
    icon: Monitor,
    title: "Demo binnen 24 uur",
    description:
      "Je ontvangt een concreet voorstel met een live demo van jouw nieuwe website of campagne.",
    time: "Dag 1",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Live binnen 1 week",
    description:
      "Na goedkeuring gaat alles live. Wij monitoren, optimaliseren en rapporteren maandelijks.",
    time: "Dag 7",
  },
];

function ProgressBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="hidden lg:block absolute top-[52px] left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-[3px] bg-navy/10">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="absolute inset-0 origin-left bg-accent"
      />
    </div>
  );
}

export default function Process() {
  return (
    <section id="werkwijze" className="relative bg-surface line-grid py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        {/* Header */}
        <AnimateIn y={20} duration={0.4}>
          <div className="mb-20 border-l-4 border-accent pl-6">
            <span className="text-[11px] font-black uppercase tracking-[0.18em] text-accent">
              Werkwijze
            </span>
            <h2 className="mt-2 text-[36px] font-black leading-[1.0] tracking-[-1.5px] text-navy sm:text-[48px] font-[family-name:var(--font-heading)] uppercase">
              In 3 stappen
              <br />
              online groeien
            </h2>
            <p className="mt-4 max-w-[440px] text-[15px] leading-[1.7] text-navy/55 font-medium">
              Geen lange trajecten of ingewikkelde processen. Wij maken het simpel.
            </p>
          </div>
        </AnimateIn>

        {/* Steps */}
        <div className="relative">
          <ProgressBar />

          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, i) => (
              <AnimateIn key={step.number} delay={i * 0.15} y={24} duration={0.4}>
                <div className="relative">
                  {/* Step number block */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-[52px] w-[52px] items-center justify-center bg-navy text-white relative">
                      <step.icon className="h-6 w-6" strokeWidth={1.8} />
                      {/* Step label */}
                      <span className="absolute -top-3 -right-3 bg-accent text-white text-[10px] font-black px-1.5 py-0.5 leading-none">
                        {step.number}
                      </span>
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-[0.15em] text-accent">
                      {step.time}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-[20px] font-black tracking-tight text-navy uppercase font-[family-name:var(--font-heading)]">
                    {step.title}
                  </h3>
                  <div className="mt-3 h-[2px] w-8 bg-navy/20" />
                  <p className="mt-4 text-[14px] leading-[1.7] text-navy/55 font-medium">
                    {step.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
