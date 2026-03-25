"use client";

import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";
import {
  Globe,
  Search,
  Megaphone,
  Smartphone,
  Zap,
  Rocket,
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website & Leadgeneratie",
    description:
      "Een professionele, snelle website die jouw bedrijf online vertegenwoordigt en bezoekers omzet in klanten. Inclusief contactformulieren, click-to-call knoppen en geoptimaliseerde landingspagina's.",
    features: [
      "Responsive design voor alle apparaten",
      "Conversie-geoptimaliseerd",
      "Snelle laadtijden (< 2 seconden)",
      "SSL-certificaat & hosting",
      "Contactformulier & WhatsApp integratie",
    ],
  },
  {
    icon: Search,
    title: "Lokale SEO",
    description:
      "Word gevonden door klanten in jouw regio wanneer ze zoeken naar jouw diensten. Wij optimaliseren je Google Business profiel, lokale zoekwoorden en zorgen voor consistente bedrijfsvermeldingen.",
    features: [
      "Google Business profiel optimalisatie",
      "Lokale zoekwoorden onderzoek",
      "Bedrijfsvermeldingen (NAW-consistentie)",
      "Review strategie & management",
      "Maandelijkse voortgangsrapportage",
    ],
  },
  {
    icon: Megaphone,
    title: "Google Ads",
    description:
      "Direct bovenaan in Google verschijnen met gerichte advertenties. Wij maken, beheren en optimaliseren je Google Ads campagnes zodat elke euro telt.",
    features: [
      "Campagne setup & structuur",
      "Zoekwoorden onderzoek & selectie",
      "Advertentieteksten schrijven",
      "Conversie tracking instellen",
      "Wekelijkse optimalisatie & rapportage",
    ],
  },
  {
    icon: Smartphone,
    title: "Social Media Beheer",
    description:
      "Consistent zichtbaar zijn op Instagram, Facebook en andere platforms. Wij maken content, plannen posts en beheren je community zodat jij je kunt focussen op je vak.",
    features: [
      "Content creatie & planning",
      "3-5 posts per week",
      "Community management",
      "Maandelijkse content kalender",
      "Performance rapportage",
    ],
  },
  {
    icon: Zap,
    title: "Automatiseringen",
    description:
      "Bespaar uren per week met slimme automatiseringen. Van automatische lead opvolging tot afspraken plannen en review verzoeken — wij automatiseren de repetitieve taken.",
    features: [
      "Automatische lead opvolging via e-mail",
      "Online afspraken systeem",
      "Automatische review verzoeken",
      "CRM integratie",
      "WhatsApp automatiseringen",
    ],
  },
  {
    icon: Rocket,
    title: "Groei Compleet",
    description:
      "Het totaalpakket voor maximale groei. Website, SEO, Google Ads, social media en automatiseringen — alles in één pakket met een dedicated specialist die jouw bedrijf kent.",
    features: [
      "Alles van bovenstaande diensten",
      "Dedicated account manager",
      "Maandelijkse strategie sessies",
      "Prioriteit support",
      "Kwartaalreviews met groeistrategie",
    ],
  },
];

export default function DienstenContent() {
  return (
    <div className="pt-[76px]">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28 dot-grid">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,102,255,0.06),transparent)]" />
        <div className="relative mx-auto max-w-[1240px] px-6 sm:px-8">
          <AnimateIn className="mx-auto max-w-3xl text-center">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-accent">
              Onze diensten
            </span>
            <h1 className="mt-4 text-[40px] font-extrabold leading-[1.08] tracking-[-2px] text-navy sm:text-[52px] font-[family-name:var(--font-heading)]">
              Alles wat je nodig hebt om{" "}
              <span className="gradient-text">online te groeien</span>
            </h1>
            <p className="mt-5 text-[17px] leading-[1.7] text-text-secondary">
              Van een professionele website tot volledige marketingmachine. Wij
              helpen lokale ondernemers met bewezen strategieën.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <div className="space-y-20">
            {services.map((service, i) => (
              <AnimateIn key={service.title} delay={0.1} x={i % 2 === 0 ? -40 : 40} y={0}>
                <div
                  className={`flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16 ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/15 to-blue-400/10 text-accent">
                      <service.icon className="h-7 w-7" strokeWidth={1.6} />
                    </div>
                    <h2 className="text-[30px] font-extrabold tracking-[-1px] text-navy sm:text-[34px] font-[family-name:var(--font-heading)]">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-[15px] leading-[1.7] text-text-secondary">
                      {service.description}
                    </p>
                    <Link
                      href="/contact"
                      className="group mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-accent transition-colors hover:text-accent-hover"
                    >
                      Meer informatie
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                  <div className="flex-1">
                    <div className="glass-card rounded-2xl p-7">
                      <h3 className="mb-4 text-[12px] font-bold uppercase tracking-[0.15em] text-text-secondary">
                        Wat je krijgt
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-[14px] text-navy"
                          >
                            <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 sm:py-24 dot-grid-light">
        <div className="relative mx-auto max-w-[1240px] px-6 sm:px-8">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[500px] rounded-full bg-accent/[0.1] blur-[100px]" />
          <AnimateIn className="relative text-center">
            <h2 className="text-[32px] font-extrabold tracking-[-1px] text-white sm:text-[40px] font-[family-name:var(--font-heading)]">
              Benieuwd wat wij voor jou kunnen doen?
            </h2>
            <p className="mt-4 text-[16px] text-white/50">
              Plan een gratis kennismakingsgesprek en ontdek de mogelijkheden.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-accent to-accent-hover px-8 py-4 text-[15px] font-semibold text-white shadow-[0_4px_20px_rgba(0,102,255,0.4)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,102,255,0.5)] active:scale-[0.97]"
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
