"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";
import { ArrowRight, Target, Heart, Zap, MapPin } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Resultaatgericht",
    description: "Geen mooie praatjes, maar meetbare resultaten. Elke actie die we ondernemen is gericht op meer klanten voor jouw bedrijf.",
    color: "bg-accent",
  },
  {
    icon: Heart,
    title: "Persoonlijke aanpak",
    description: "Geen standaardtemplates of one-size-fits-all oplossingen. Elke strategie wordt op maat gemaakt voor jouw branche en doelen.",
    color: "bg-yellow",
  },
  {
    icon: Zap,
    title: "Snelheid",
    description: "Demo in 24 uur, live in 1 week. Wij begrijpen dat je geen maanden wilt wachten. Snelheid zit in ons DNA.",
    color: "bg-navy",
  },
  {
    icon: MapPin,
    title: "Lokaal verbonden",
    description: "Gevestigd in Zuid-Limburg kennen wij de lokale markt als geen ander. Wij spreken de taal van jouw klanten.",
    color: "bg-accent",
  },
];

const storyParagraphs = [
  "Elke dag zijn er lokale ondernemers — garages, kappers, hoveniers — die fantastisch werk leveren, maar online onzichtbaar zijn. Ondertussen lopen de klanten naar concurrenten die wél gevonden worden op Google.",
  "Dat vinden wij oneerlijk. Daarom hebben we Outpace opgericht: om lokale bedrijven de online aanwezigheid te geven die ze verdienen. Zonder omwegen, zonder langlopende contracten, zonder gedoe.",
  "Ons team combineert expertise in webdesign, SEO, Google Ads en automatiseringen tot één gestroomlijnd systeem dat klanten naar jouw bedrijf brengt. Wij geloven in transparantie, snelheid en meetbare resultaten.",
];

export default function OverContent() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroScroll, [0, 1], [0, 60]);

  const valuesRef = useRef<HTMLElement>(null);
  const { scrollYProgress: valuesScroll } = useScroll({ target: valuesRef, offset: ["start end", "end start"] });
  const valuesBgY = useTransform(valuesScroll, [0, 1], [-20, 20]);

  return (
    <div className="pt-[68px]">

      {/* Hero */}
      <section ref={heroRef} className="relative bg-navy overflow-hidden py-20 sm:py-28">
        <div className="absolute top-0 left-0 right-0 h-[4px] bg-yellow" />
        <motion.div style={{ y: heroY }} className="absolute inset-[-60px] line-grid-dark" />

        {/* Yellow corner block */}
        <div className="absolute top-0 right-0 w-[140px] h-[140px] bg-yellow hidden lg:block" />

        <div className="relative mx-auto max-w-[1240px] px-6 sm:px-8">
          <AnimateIn y={28} duration={0.45}>
            <div className="border-l-4 border-yellow pl-6 max-w-[700px]">
              <span className="text-[11px] font-black uppercase tracking-[0.18em] text-yellow">
                Over Outpace
              </span>
              <h1 className="mt-2 text-[40px] font-black leading-[1.0] tracking-[-2px] text-white sm:text-[56px] font-[family-name:var(--font-heading)] uppercase">
                Wij helpen lokale
                <br />
                ondernemers
                <br />
                <span className="text-accent">online groeien</span>
              </h1>
              <p className="mt-5 max-w-[520px] text-[15px] leading-[1.7] text-white/55 font-medium">
                Outpace is ontstaan vanuit een simpele frustratie: lokale
                ondernemers verdienen betere marketing. Geen dure bureaus met
                lange contracten, maar een eerlijke partner die resultaat levert.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 sm:py-28 bg-white line-grid">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">

            {/* Left: heading */}
            <AnimateIn y={28} duration={0.45}>
              <div className="border-l-4 border-accent pl-6">
                <span className="text-[11px] font-black uppercase tracking-[0.18em] text-accent">
                  Ons verhaal
                </span>
                <h2 className="mt-2 text-[32px] font-black tracking-[-1px] text-navy sm:text-[40px] font-[family-name:var(--font-heading)] uppercase leading-[1.0]">
                  Waarom
                  <br />
                  Outpace?
                </h2>
                <div className="mt-6 flex gap-0">
                  <div className="h-[4px] w-8 bg-yellow" />
                  <div className="h-[4px] w-8 bg-accent" />
                  <div className="h-[4px] w-8 bg-navy" />
                </div>
              </div>
            </AnimateIn>

            {/* Right: text */}
            <div className="space-y-5">
              {storyParagraphs.map((p, i) => (
                <AnimateIn key={i} delay={i * 0.12} y={20} duration={0.42}>
                  <p className="text-[15px] leading-[1.8] text-navy/65 font-medium">{p}</p>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="relative bg-navy overflow-hidden py-20 sm:py-28">
        <motion.div style={{ y: valuesBgY }} className="absolute inset-[-60px] line-grid-dark" />

        <div className="relative mx-auto max-w-[1240px] px-6 sm:px-8">
          <AnimateIn y={20} duration={0.45}>
            <div className="mb-16 border-l-4 border-yellow pl-6">
              <span className="text-[11px] font-black uppercase tracking-[0.18em] text-yellow">
                Onze waarden
              </span>
              <h2 className="mt-2 text-[32px] font-black tracking-[-1px] text-white sm:text-[40px] font-[family-name:var(--font-heading)] uppercase leading-[1.0]">
                Wat ons drijft
              </h2>
              <p className="mt-4 text-[15px] leading-[1.7] text-white/50 font-medium">
                Waarom klanten voor ons kiezen.
              </p>
            </div>
          </AnimateIn>

          <div className="grid gap-4 sm:grid-cols-2 border-t-2 border-l-2 border-white/10">
            {values.map((value, i) => (
              <AnimateIn key={value.title} delay={i * 0.1} y={0} rotateX={12} duration={0.45}>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.18 } }}
                  className="border-b-2 border-r-2 border-white/10 p-8 bg-navy-light flex flex-col gap-5"
                >
                  {/* Colored icon square */}
                  <div className={`flex h-11 w-11 items-center justify-center ${value.color} ${value.color === "bg-yellow" ? "text-navy" : "text-white"}`}>
                    <value.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-black uppercase tracking-tight text-white font-[family-name:var(--font-heading)]">
                      {value.title}
                    </h3>
                    <p className="mt-2.5 text-[14px] leading-[1.7] text-white/50 font-medium">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-white line-grid border-t-2 border-navy">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <AnimateIn y={24} duration={0.45}>
            <div className="border-l-4 border-yellow pl-6 max-w-[600px]">
              <span className="text-[11px] font-black uppercase tracking-[0.18em] text-accent">
                Zullen we kennismaken?
              </span>
              <h2 className="mt-2 text-[32px] font-black tracking-[-1px] text-navy sm:text-[40px] font-[family-name:var(--font-heading)] uppercase leading-[1.0]">
                Een vrijblijvend gesprek
                <br />
                kost je niets.
              </h2>
              <p className="mt-4 text-[15px] text-navy/55 font-medium leading-[1.7]">
                In 15 minuten bespreken we jouw situatie en hoe wij je kunnen helpen.
              </p>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-3 border-2 border-navy bg-navy px-8 py-4 text-[13px] font-black uppercase tracking-[0.1em] text-white transition-all duration-150 hover:bg-accent hover:border-accent active:scale-[0.97]"
              >
                Neem contact op
                <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
