"use client";

import AnimateIn from "./AnimateIn";
import CountUp from "./CountUp";

const stats = [
  { end: 50, suffix: "+", label: "Lokale ondernemers geholpen" },
  { end: 3, suffix: "x", label: "Gemiddelde groei in leads" },
  { end: 7, suffix: "", prefix: "<", label: "Dagen van start tot live" },
  { end: 4.9, suffix: "/5", label: "Klanttevredenheid", decimals: 1 },
];

export default function SocialProof() {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Top accent */}
      <div className="h-[4px] bg-accent w-full" />

      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 py-16 sm:py-20">
        <AnimateIn y={0} x={0} duration={0.4}>
          <p className="mb-12 text-[11px] font-black uppercase tracking-[0.2em] text-white/30 text-center">
            Vertrouwd door lokale ondernemers in Zuid-Limburg
          </p>
        </AnimateIn>

        <div className="grid grid-cols-2 gap-0 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 0.1} y={20} duration={0.4}>
              <div
                className={`flex flex-col items-center justify-center py-8 px-6 text-center ${
                  i < stats.length - 1 ? "border-b-2 border-white/08 lg:border-b-0 lg:border-r-2" : ""
                } ${i % 2 === 0 && i < stats.length - 1 ? "border-r-2" : ""}`}
              >
                <p className="text-[56px] font-black tracking-[-3px] text-white leading-none font-[family-name:var(--font-heading)] sm:text-[64px]">
                  {stat.prefix && <span>{stat.prefix}</span>}
                  <CountUp
                    end={stat.end}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                  />
                </p>
                <div className="mt-3 h-[2px] w-8 bg-accent" />
                <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white/40">
                  {stat.label}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      {/* Bottom rule */}
      <div className="h-[3px] bg-white/10 w-full" />
    </section>
  );
}
