"use client";

import AnimateIn from "./AnimateIn";
import { Wrench, Scissors, TreePine } from "lucide-react";

const branches = [
  {
    icon: Wrench,
    title: "Garages & Autobedrijven",
    description:
      "Meer APK-afspraken, onderhoudsklanten en reparatieverzoeken via Google. Wij zorgen dat lokale automobilisten jou als eerste vinden.",
    bg: "bg-accent",
    iconBg: "bg-white/10",
    iconColor: "text-white",
    bar: "bg-yellow",
    titleColor: "text-white",
    bodyColor: "text-white/60",
  },
  {
    icon: Scissors,
    title: "Kappers & Barbershops",
    description:
      "Vul je agenda met nieuwe klanten. Online boeken, zichtbaar worden op Google Maps en een stijlvolle website die bij je salon past.",
    bg: "bg-yellow",
    iconBg: "bg-navy",
    iconColor: "text-white",
    bar: "bg-navy",
    titleColor: "text-navy",
    bodyColor: "text-navy/60",
  },
  {
    icon: TreePine,
    title: "Hoveniers & Tuinbedrijven",
    description:
      "Van tuinaanleg tot onderhoud — wij brengen de juiste klanten bij jou. Seizoensgebonden campagnes en lokale vindbaarheid.",
    bg: "bg-navy-light",
    iconBg: "bg-accent",
    iconColor: "text-white",
    bar: "bg-accent",
    titleColor: "text-white",
    bodyColor: "text-white/55",
  },
];

export default function ForWho() {
  return (
    <section className="relative bg-navy overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 py-24 sm:py-32">
        {/* Header */}
        <AnimateIn y={20} duration={0.45}>
          <div className="mb-16 border-l-4 border-yellow pl-6">
            <span className="text-[11px] font-black uppercase tracking-[0.18em] text-yellow">
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

        {/* Cards — each card is self-bordered, no outer wrapper border conflict */}
        <div className="grid gap-4 sm:grid-cols-3">
          {branches.map((branch, i) => (
            <AnimateIn
              key={branch.title}
              delay={i * 0.1}
              y={32}
              rotateX={14}
              duration={0.45}
            >
              <div className={`${branch.bg} flex flex-col p-10 h-full border-2 border-white/10`}>
                {/* Icon */}
                <div
                  className={`flex h-12 w-12 items-center justify-center mb-6 ${branch.iconBg} ${branch.iconColor}`}
                >
                  <branch.icon className="h-6 w-6" strokeWidth={1.8} />
                </div>

                <h3 className={`text-[20px] font-black leading-[1.15] tracking-tight ${branch.titleColor} uppercase font-[family-name:var(--font-heading)]`}>
                  {branch.title}
                </h3>
                <div className={`mt-4 mb-5 h-[3px] w-8 ${branch.bar}`} />
                <p className={`text-[14px] leading-[1.7] font-medium ${branch.bodyColor} flex-1`}>
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
