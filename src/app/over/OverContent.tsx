"use client";

import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";
import { ArrowRight, Target, Heart, Zap, MapPin } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Resultaatgericht",
    description:
      "Geen mooie praatjes, maar meetbare resultaten. Elke actie die we ondernemen is gericht op meer klanten voor jouw bedrijf.",
  },
  {
    icon: Heart,
    title: "Persoonlijke aanpak",
    description:
      "Geen standaard templates of one-size-fits-all oplossingen. Elke strategie wordt op maat gemaakt voor jouw branche en doelen.",
  },
  {
    icon: Zap,
    title: "Snelheid",
    description:
      "Demo in 24 uur, live in 1 week. Wij begrijpen dat je geen maanden wilt wachten. Snelheid zit in ons DNA.",
  },
  {
    icon: MapPin,
    title: "Lokaal verbonden",
    description:
      "Gevestigd in Zuid-Limburg, kennen wij de lokale markt als geen ander. Wij spreken de taal van jouw klanten.",
  },
];

export default function OverContent() {
  return (
    <div className="pt-[76px]">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28 dot-grid">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,102,255,0.06),transparent)]" />
        <div className="relative mx-auto max-w-[1240px] px-6 sm:px-8">
          <AnimateIn className="mx-auto max-w-3xl text-center">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-accent">
              Over Outpace
            </span>
            <h1 className="mt-4 text-[40px] font-extrabold leading-[1.08] tracking-[-2px] text-navy sm:text-[52px] font-[family-name:var(--font-heading)]">
              Wij helpen lokale ondernemers{" "}
              <span className="gradient-text">winnen online</span>
            </h1>
            <p className="mt-5 text-[17px] leading-[1.7] text-text-secondary">
              Outpace is ontstaan vanuit een simpele frustratie: lokale
              ondernemers verdienen betere marketing. Geen dure bureaus met lange
              contracten, maar een eerlijke partner die resultaat levert.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <div className="mx-auto max-w-3xl">
            <AnimateIn>
              <h2 className="text-[30px] font-extrabold tracking-[-1px] text-navy sm:text-[36px] font-[family-name:var(--font-heading)]">
                Waarom Outpace?
              </h2>
              <div className="mt-6 space-y-5 text-[15px] leading-[1.8] text-text-secondary">
                <p>
                  Elke dag zijn er lokale ondernemers — garages, kappers,
                  hoveniers — die fantastisch werk leveren, maar online
                  onzichtbaar zijn. Ondertussen lopen de klanten naar
                  concurrenten die wél vindbaar zijn op Google.
                </p>
                <p>
                  Wij vinden dat oneerlijk. Daarom hebben we Outpace opgericht:
                  om lokale bedrijven de online aanwezigheid te geven die ze
                  verdienen. Zonder poespas, zonder lange contracten, zonder
                  onzin.
                </p>
                <p>
                  Ons team combineert expertise in webdesign, SEO, Google Ads en
                  automatiseringen tot één gestroomlijnd systeem dat klanten
                  naar jouw bedrijf brengt. Wij geloven in transparantie,
                  snelheid en meetbare resultaten.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy py-20 sm:py-28 dot-grid-light overflow-hidden">
        <div className="relative mx-auto max-w-[1240px] px-6 sm:px-8">
          <div className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-accent/[0.06] blur-[100px]" />
          <AnimateIn className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-[30px] font-extrabold tracking-[-1px] text-white sm:text-[36px] font-[family-name:var(--font-heading)]">
              Onze waarden
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-white/50">
              Wat ons drijft en waarom klanten voor ons kiezen.
            </p>
          </AnimateIn>

          <div className="relative mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((value, i) => (
              <AnimateIn key={value.title} delay={i * 0.1} x={-30} y={0}>
                <div className="glass-card-dark group rounded-2xl p-7 transition-all duration-400 hover:-translate-y-2 hover:border-accent/15">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-blue-400/10 text-accent">
                    <value.icon className="h-5.5 w-5.5" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-[17px] font-bold tracking-[-0.3px] text-white font-[family-name:var(--font-heading)]">
                    {value.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-[1.7] text-white/50">
                    {value.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 dot-grid">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <AnimateIn className="text-center">
            <h2 className="text-[32px] font-extrabold tracking-[-1px] text-navy sm:text-[40px] font-[family-name:var(--font-heading)]">
              Zullen we kennismaken?
            </h2>
            <p className="mt-4 text-[16px] text-text-secondary">
              Een vrijblijvend gesprek kost je niets — behalve 15 minuten.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-accent to-accent-hover px-8 py-4 text-[15px] font-semibold text-white shadow-[0_4px_20px_rgba(0,102,255,0.3)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,102,255,0.45)] active:scale-[0.97]"
            >
              Neem contact op
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
