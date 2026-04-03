"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimateIn from "@/components/AnimateIn";
import useIsMobile from "@/hooks/useIsMobile";
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
  const isMobile = useIsMobile();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroScroll, [0, 1], [0, 30]);

  const valuesRef = useRef<HTMLElement>(null);
  const { scrollYProgress: valuesScroll } = useScroll({ target: valuesRef, offset: ["start end", "end start"] });
  const valuesBgY = useTransform(valuesScroll, [0, 1], [-10, 10]);

  return (
    <div className="pt-[68px]">

      {/* Hero */}
      <section ref={heroRef} className="relative bg-navy overflow-hidden py-14 sm:py-28">
        <div className="absolute top-0 left-0 right-0 h-[4px] bg-yellow" />
        {isMobile ? (
          <div className="absolute inset-0 line-grid-dark" />
        ) : (
          <motion.div style={{ y: heroY }} className="absolute inset-[-60px] line-grid-dark" />
        )}

        <div className="absolute top-0 right-0 w-[140px] h-[140px] bg-yellow hidden lg:block" />

        <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
          <AnimateIn y={18} duration={0.4}>
            <div className="border-l-4 border-yellow pl-5 sm:pl-6 max-w-[700px]">
              <span className="text-[11px] font-black uppercase tracking-[0.18em] text-yellow">
                Over Outpace
              </span>
              <h1 className="mt-2 text-[30px] font-black leading-[1.0] tracking-[-1.5px] text-white sm:text-[56px] font-[family-name:var(--font-heading)] uppercase">
                Wij helpen lokale
                <br />
                ondernemers
                <br />
                <span className="text-accent">online groeien</span>
              </h1>
              <p className="mt-4 sm:mt-5 max-w-[520px] text-[14px] sm:text-[15px] leading-[1.7] text-white/55 font-medium">
                Outpace is ontstaan vanuit een simpele frustratie: lokale
                ondernemers verdienen betere marketing. Geen dure bureaus met
                lange contracten, maar een eerlijke partner die resultaat levert.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Story */}
      <section className="py-14 sm:py-28 bg-white line-grid">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="grid gap-10 sm:gap-16 lg:grid-cols-2 lg:gap-24 items-start">

            <AnimateIn y={18} duration={0.4}>
              <div className="border-l-4 border-accent pl-5 sm:pl-6">
                <span className="text-[11px] font-black uppercase tracking-[0.18em] text-accent">
                  Ons verhaal
                </span>
                <h2 className="mt-2 text-[26px] font-black tracking-[-1px] text-navy sm:text-[40px] font-[family-name:var(--font-heading)] uppercase leading-[1.0]">
                  Waarom
                  <br />
                  Outpace?
                </h2>
                <div className="mt-5 sm:mt-6 flex gap-0">
                  <div className="h-[4px] w-8 bg-yellow" />
                  <div className="h-[4px] w-8 bg-accent" />
                  <div className="h-[4px] w-8 bg-navy" />
                </div>
              </div>
            </AnimateIn>

            <div className="space-y-4 sm:space-y-5">
              {storyParagraphs.map((p, i) => (
                <AnimateIn key={i} delay={i * 0.08} y={14} duration={0.38}>
                  <p className="text-[14px] sm:text-[15px] leading-[1.8] text-navy/65 font-medium">{p}</p>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="relative bg-navy overflow-hidden py-14 sm:py-28">
        {isMobile ? (
          <div className="absolute inset-0 line-grid-dark" />
        ) : (
          <motion.div style={{ y: valuesBgY }} className="absolute inset-[-60px] line-grid-dark" />
        )}

        <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
          <AnimateIn y={14} duration={0.4}>
            <div className="mb-10 sm:mb-16 border-l-4 border-yellow pl-5 sm:pl-6">
              <span className="text-[11px] font-black uppercase tracking-[0.18em] text-yellow">
                Onze waarden
              </span>
              <h2 className="mt-2 text-[26px] font-black tracking-[-1px] text-white sm:text-[40px] font-[family-name:var(--font-heading)] uppercase leading-[1.0]">
                Wat ons drijft
              </h2>
              <p className="mt-3 sm:mt-4 text-[14px] sm:text-[15px] leading-[1.7] text-white/50 font-medium">
                Waarom klanten voor ons kiezen.
              </p>
            </div>
          </AnimateIn>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 border-t-2 border-l-2 border-white/10">
            {values.map((value, i) => (
              <AnimateIn key={value.title} delay={i * 0.07} y={0} rotateX={8} duration={0.38}>
                <motion.div
                  whileHover={isMobile ? undefined : { y: -3, transition: { duration: 0.18 } }}
                  className="border-b-2 border-r-2 border-white/10 p-6 sm:p-8 bg-navy-light flex flex-col gap-4 sm:gap-5"
                >
                  <div className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center ${value.color} ${value.color === "bg-yellow" ? "text-navy" : "text-white"}`}>
                    <value.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-[16px] sm:text-[17px] font-black uppercase tracking-tight text-white font-[family-name:var(--font-heading)]">
                      {value.title}
                    </h3>
                    <p className="mt-2 sm:mt-2.5 text-[13px] sm:text-[14px] leading-[1.7] text-white/50 font-medium">
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
      <section className="py-14 sm:py-24 bg-white line-grid border-t-2 border-navy">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <AnimateIn y={16} duration={0.4}>
            <div className="border-l-4 border-yellow pl-5 sm:pl-6 max-w-[600px]">
              <span className="text-[11px] font-black uppercase tracking-[0.18em] text-accent">
                Zullen we kennismaken?
              </span>
              <h2 className="mt-2 text-[26px] font-black tracking-[-1px] text-navy sm:text-[40px] font-[family-name:var(--font-heading)] uppercase leading-[1.0]">
                Een vrijblijvend gesprek
                <br />
                kost je niets.
              </h2>
              <p className="mt-3 sm:mt-4 text-[14px] sm:text-[15px] text-navy/55 font-medium leading-[1.7]">
                In 15 minuten bespreken we jouw situatie en hoe wij je kunnen helpen.
              </p>
              <Link
                href="/contact"
                className="group mt-6 sm:mt-8 inline-flex items-center gap-3 border-2 border-navy bg-navy px-6 sm:px-8 py-3.5 sm:py-4 text-[12px] sm:text-[13px] font-black uppercase tracking-[0.1em] text-white transition-all duration-150 hover:bg-accent hover:border-accent active:scale-[0.97]"
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
