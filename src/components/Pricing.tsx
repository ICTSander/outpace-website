"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, type MotionValue } from "framer-motion";
import AnimateIn from "./AnimateIn";
import Link from "next/link";
import { Check } from "lucide-react";

function makeFaceTransforms(h: number): string[] {
  return [
    `translateZ(${h}px)`, `rotateY(180deg) translateZ(${h}px)`,
    `rotateY(90deg) translateZ(${h}px)`, `rotateY(-90deg) translateZ(${h}px)`,
    `rotateX(90deg) translateZ(${h}px)`, `rotateX(-90deg) translateZ(${h}px)`,
  ];
}

function PricingCube({ size, rotY, rotX }: { size: number; rotY: MotionValue<number>; rotX: MotionValue<number> }) {
  const h = size / 2;
  const faces = makeFaceTransforms(h);
  const colors = ["#FFD100", "#131B33", "#FFD100", "#131B33", "#0066FF", "#0066FF"];
  return (
    <motion.div style={{ width: size, height: size, rotateY: rotY, rotateX: rotX, transformStyle: "preserve-3d", position: "relative" }}>
      {faces.map((transform, i) => (
        <div key={i} style={{ position: "absolute", inset: 0, background: colors[i], transform, border: "1px solid rgba(255,255,255,0.12)", opacity: 0.7 }} />
      ))}
    </motion.div>
  );
}

const plans = [
  {
    name: "Start", oneTime: "499", monthly: "99",
    description: "Perfect om online zichtbaar te worden",
    features: ["Professionele website", "SEO-basis inrichting", "Contactformulier", "Mobiel geoptimaliseerd", "SSL-certificaat"],
    highlighted: false, bg: "bg-navy-light", priceBorder: "border-white/15", checkColor: "text-accent",
    hoverRotate: -2,
  },
  {
    name: "Groei", oneTime: "799", monthly: "149",
    description: "Voor ondernemers die willen groeien",
    features: ["Alles van Start", "Google Ads setup & beheer", "Geavanceerde SEO", "Maandelijkse rapportage", "Prioriteit support"],
    highlighted: true, bg: "bg-accent", priceBorder: "border-white/20", checkColor: "text-yellow",
    hoverRotate: 2,
  },
];

export default function Pricing() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 40, damping: 16 });
  const bgY = useTransform(smooth, [0, 1], [-20, 20]);

  const rotY1 = useTransform(smooth, [0, 1], [0, -720]);
  const rotX1 = useTransform(smooth, [0, 1], [30, 390]);
  const y1    = useTransform(smooth, [0, 1], [-60, 60]);

  const rotY2 = useTransform(smooth, [0, 1], [0, 600]);
  const rotX2 = useTransform(smooth, [0, 1], [0, -360]);
  const y2    = useTransform(smooth, [0, 1], [80, -80]);

  return (
    <section ref={ref} id="prijzen" className="relative bg-navy overflow-hidden py-24 sm:py-32">
      <motion.div style={{ y: bgY }} className="absolute inset-[-60px] line-grid-dark" />
      <div className="absolute top-0 left-0 right-0 h-[4px] bg-yellow relative" />

      {/* 3D cube — top right, counter-rotates on scroll */}
      <motion.div
        style={{ y: y1, position: "absolute", top: "10%", right: "-60px", perspective: "700px" }}
        className="pointer-events-none"
      >
        <PricingCube size={240} rotY={rotY1} rotX={rotX1} />
      </motion.div>

      {/* 3D cube — bottom left, rotates opposite direction */}
      <motion.div
        style={{ y: y2, position: "absolute", bottom: "8%", left: "-50px", perspective: "700px" }}
        className="pointer-events-none"
      >
        <PricingCube size={160} rotY={rotY2} rotX={rotX2} />
      </motion.div>

      <div className="relative mx-auto max-w-[1240px] px-6 sm:px-8">
        <AnimateIn y={20} duration={0.45}>
          <div className="mb-16 border-l-4 border-yellow pl-6">
            <span className="text-[11px] font-black uppercase tracking-[0.18em] text-yellow">Prijzen</span>
            <h2 className="mt-2 text-[36px] font-black leading-[1.0] tracking-[-1.5px] text-white sm:text-[48px] font-[family-name:var(--font-heading)] uppercase">
              Transparant,
              <br />
              geen verrassingen
            </h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-white/50 font-medium">
              Maandelijks opzegbaar. Geen langlopende contracten.
            </p>
          </div>
        </AnimateIn>

        <div className="grid gap-4 sm:grid-cols-2 max-w-[900px]">
          {plans.map((plan, i) => (
            <AnimateIn key={plan.name} delay={i * 0.14} y={36} rotateX={16} duration={0.5}>
              <motion.div
                whileHover={{
                  rotateY: plan.hoverRotate,
                  rotateX: -2,
                  scale: 1.02,
                  transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
                }}
                style={{ transformPerspective: 900 }}
                className={`relative flex h-full flex-col p-10 border-2 border-white/10 ${plan.bg}`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-px right-8 bg-yellow px-4 py-1.5">
                    <span className="text-[10px] font-black uppercase tracking-[0.15em] text-navy">Populairst</span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-[13px] font-black uppercase tracking-[0.15em] text-white/60">{plan.name}</h3>
                  <p className="mt-1 text-[13px] font-medium text-white/45">{plan.description}</p>
                </div>

                {/* Price — giant for high contrast */}
                <div className={`border-t-2 ${plan.priceBorder} pt-6 mb-8`}>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[76px] font-black tracking-[-4px] text-white leading-none font-[family-name:var(--font-heading)]">
                      €{plan.oneTime}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[13px] font-bold text-white/55">eenmalig</p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-[34px] font-black tracking-[-1.5px] text-white leading-none font-[family-name:var(--font-heading)]">
                      €{plan.monthly}
                    </span>
                    <span className="text-[13px] font-bold text-white/55">/maand</span>
                  </div>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.1em] text-white/35">
                    Maandelijks opzegbaar
                  </p>
                </div>

                <ul className="flex-1 space-y-3 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.checkColor}`} strokeWidth={2.5} />
                      <span className="text-[14px] font-medium text-white/75">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`flex items-center justify-center py-4 text-[12px] font-black uppercase tracking-[0.1em] transition-all duration-150 active:scale-[0.97] border-2 ${
                    plan.highlighted
                      ? "border-yellow bg-yellow text-navy hover:bg-white hover:border-white"
                      : "border-white/25 text-white hover:bg-white hover:text-navy hover:border-white"
                  }`}
                >
                  Start nu
                </Link>
              </motion.div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.3} y={16} duration={0.4}>
          <p className="mt-10 text-[13px] font-medium text-white/30">
            Meer nodig? Vraag naar onze add-ons voor social media, automatiseringen en Google Ads beheer.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
