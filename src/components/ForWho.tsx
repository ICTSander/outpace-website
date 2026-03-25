"use client";

import AnimateIn from "./AnimateIn";
import { Wrench, Scissors, TreePine } from "lucide-react";

const branches = [
  {
    icon: Wrench,
    title: "Garages &\nAutobedrijven",
    description:
      "Meer APK-afspraken, onderhoudsklanten en reparatieverzoeken via Google. Wij zorgen dat lokale automobilisten jou als eerste vinden.",
    accent: "bg-accent",
    textColor: "text-white",
  },
  {
    icon: Scissors,
    title: "Kappers &\nBarbershops",
    description:
      "Vul je agenda met nieuwe klanten. Online boeken, zichtbaar worden op Google Maps en een stijlvolle website die bij je salon past.",
    accent: "bg-navy",
    textColor: "text-white",
  },
  {
    icon: TreePine,
    title: "Hoveniers &\nTuinbedrijven",
    description:
      "Van tuinaanleg tot onderhoud — wij brengen de juiste klanten bij jou. Seizoensgebonden campagnes en lokale vindbaarheid.",
    accent: "bg-white",
    textColor: "text-navy",
  },
];

export default function ForWho() {
  return (
    <section className="relative bg-navy border-t-2 border-white/10 overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 py-24 sm:py-32">
        {/* Header */}
        <AnimateIn y={20} duration={0.4}>
          <div className="mb-16 border-l-4 border-accent pl-6">
            <span className="text-[11px] font-black uppercase tracking-[0.18em] text-accent">
              Voor wie
            </span>
            <h2 className="mt-2 text-[36px] font-black leading-[1.0] tracking-[-1.5px] text-white sm:text-[48px] font-[family-name:var(--font-heading)] uppercase">
              Gebouwd voor
              <br />
              lokale ondernemers
            </h2>
            <p className="mt-4 max-w-[480px] text-[15px] leading-[1.7] text-white/50 font-medium">
              Wij kennen de uitdagingen van lokale bedrijven en weten precies
              hoe we klanten naar jou toe brengen.
            </p>
          </div>
        </AnimateIn>

        {/* Cards — solid color blocks */}
        <div className="grid gap-0 sm:grid-cols-3 border-2 border-white/15">
          {branches.map((branch, i) => (
            <AnimateIn key={branch.title} delay={i * 0.1} y={0} x={0} duration={0.35}>
              <div
                className={`${branch.accent} flex flex-col p-10 border-b-2 sm:border-b-0 sm:border-r-2 border-white/15 h-full`}
              >
                {/* Icon square */}
                <div
                  className={`flex h-12 w-12 items-center justify-center mb-6 ${
                    branch.accent === "bg-white"
                      ? "bg-navy text-white"
                      : "bg-white/10 text-white"
                  }`}
                >
                  <branch.icon className="h-6 w-6" strokeWidth={1.8} />
                </div>

                <h3
                  className={`text-[20px] font-black leading-[1.1] tracking-tight ${branch.textColor} uppercase font-[family-name:var(--font-heading)] whitespace-pre-line`}
                >
                  {branch.title}
                </h3>
                <div
                  className={`mt-4 mb-5 h-[2px] w-8 ${
                    branch.accent === "bg-white" ? "bg-accent" : "bg-white/30"
                  }`}
                />
                <p
                  className={`text-[14px] leading-[1.7] font-medium ${
                    branch.accent === "bg-white"
                      ? "text-navy/60"
                      : "text-white/60"
                  }`}
                >
                  {branch.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
