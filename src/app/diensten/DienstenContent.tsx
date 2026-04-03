"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimateIn from "@/components/AnimateIn";
import useIsMobile from "@/hooks/useIsMobile";
import Link from "next/link";
import {
  Globe, Search, Megaphone, Smartphone, Zap, Rocket, ArrowRight, Check,
} from "lucide-react";

const services = [
  {
    icon: Globe, iconBg: "bg-accent",
    title: "Website & Leadgeneratie",
    description: "Een professionele, snelle website die jouw bedrijf online vertegenwoordigt en bezoekers omzet in klanten. Inclusief contactformulieren, click-to-call knoppen en geoptimaliseerde landingspagina's.",
    features: ["Responsive design voor alle apparaten", "Conversie-geoptimaliseerd", "Snelle laadtijden (< 2 seconden)", "SSL-certificaat & hosting", "Contactformulier & WhatsApp-integratie"],
  },
  {
    icon: Search, iconBg: "bg-yellow",
    title: "Lokale SEO",
    description: "Word gevonden door klanten in jouw regio wanneer ze zoeken naar jouw diensten. Wij optimaliseren je Google Business-profiel, lokale zoekwoorden en zorgen voor consistente bedrijfsvermeldingen.",
    features: ["Google Business-profiel optimalisatie", "Onderzoek naar lokale zoekwoorden", "Bedrijfsvermeldingen (NAW-consistentie)", "Reviewstrategie & beheer", "Maandelijkse voortgangsrapportage"],
  },
  {
    icon: Megaphone, iconBg: "bg-navy",
    title: "Google Ads",
    description: "Direct bovenaan in Google verschijnen met gerichte advertenties. Wij maken, beheren en optimaliseren je Google Ads-campagnes zodat elke euro rendeert.",
    features: ["Campagne-opzet & structuur", "Zoekwoordenonderzoek & selectie", "Schrijven van advertentieteksten", "Conversietracking instellen", "Wekelijkse optimalisatie & rapportage"],
  },
  {
    icon: Smartphone, iconBg: "bg-accent",
    title: "Social Media Beheer",
    description: "Consistent zichtbaar zijn op Instagram, Facebook en andere platforms. Wij maken content, plannen posts en beheren je community zodat jij je kunt focussen op je vak.",
    features: ["Content creatie & planning", "3–5 posts per week", "Communitybeheer", "Maandelijkse contentkalender", "Prestatieoverzicht"],
  },
  {
    icon: Zap, iconBg: "bg-yellow",
    title: "Automatiseringen",
    description: "Bespaar uren per week met slimme automatiseringen. Van automatische leadopvolging tot het inplannen van afspraken en het versturen van reviewverzoeken — wij automatiseren de repetitieve taken.",
    features: ["Automatische leadopvolging via e-mail", "Online afsprakensysteem", "Automatische reviewverzoeken", "CRM-integratie", "WhatsApp-automatiseringen"],
  },
  {
    icon: Rocket, iconBg: "bg-navy",
    title: "Groei Compleet",
    description: "Het totaalpakket voor maximale groei. Website, SEO, Google Ads, social media en automatiseringen — alles in één pakket met een vaste specialist die jouw bedrijf door en door kent.",
    features: ["Alles van bovenstaande diensten", "Vaste accountmanager", "Maandelijkse strategiesessies", "Prioriteit support", "Kwartaalreviews met groeistrategie"],
  },
];

const iconColors: Record<string, string> = {
  "bg-yellow": "text-navy",
  "bg-accent": "text-white",
  "bg-navy": "text-white",
};

export default function DienstenContent() {
  const isMobile = useIsMobile();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 30]);

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
        <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-accent hidden lg:block" />

        <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
          <AnimateIn y={18} duration={0.4}>
            <div className="border-l-4 border-yellow pl-5 sm:pl-6 max-w-[680px]">
              <span className="text-[11px] font-black uppercase tracking-[0.18em] text-yellow">
                Onze diensten
              </span>
              <h1 className="mt-2 text-[30px] font-black leading-[1.0] tracking-[-1.5px] text-white sm:text-[56px] font-[family-name:var(--font-heading)] uppercase">
                Alles wat je nodig
                <br />
                hebt om online
                <br />
                <span className="text-accent">te groeien</span>
              </h1>
              <p className="mt-4 sm:mt-5 max-w-[500px] text-[14px] sm:text-[15px] leading-[1.7] text-white/55 font-medium">
                Van een professionele website tot een volledige marketingmachine.
                Wij helpen lokale ondernemers met bewezen strategieën.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-14 sm:py-28 bg-white line-grid">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="space-y-0 border-t-2 border-navy">
            {services.map((service, i) => {
              const isEven = i % 2 === 0;
              return (
                <AnimateIn key={service.title} delay={0.06} y={20} rotateX={6} duration={0.4}>
                  <div className={`flex flex-col gap-0 lg:flex-row border-b-2 border-navy ${isEven ? "" : "lg:flex-row-reverse"}`}>

                    {/* Icon + title side */}
                    <div className="flex-1 p-6 sm:p-10 lg:p-12 border-b-2 border-navy lg:border-b-0 lg:border-r-2">
                      <div className={`flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center mb-5 sm:mb-6 ${service.iconBg} ${iconColors[service.iconBg]}`}>
                        <service.icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
                      </div>
                      <span className="text-[11px] font-black uppercase tracking-[0.15em] text-navy/35">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="mt-2 text-[22px] font-black tracking-tight text-navy sm:text-[30px] font-[family-name:var(--font-heading)] uppercase leading-[1.1]">
                        {service.title}
                      </h2>
                      <div className="mt-3 sm:mt-4 h-[2px] w-8 bg-navy/20" />
                      <p className="mt-3 sm:mt-4 text-[13px] sm:text-[14px] leading-[1.7] text-navy/60 font-medium">
                        {service.description}
                      </p>
                      <Link
                        href="/contact"
                        className="group mt-5 sm:mt-6 inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-[0.1em] text-accent transition-colors hover:text-navy"
                      >
                        Meer informatie
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>

                    {/* Features side */}
                    <div className="flex-1 p-6 sm:p-10 lg:p-12 bg-surface">
                      <h3 className="mb-5 sm:mb-6 text-[11px] font-black uppercase tracking-[0.15em] text-navy/40">
                        Wat je krijgt
                      </h3>
                      <ul className="space-y-3 sm:space-y-4">
                        {service.features.map((feature, fi) => (
                          isMobile ? (
                            <li
                              key={feature}
                              className="flex items-start gap-3 text-[13px] sm:text-[14px] font-medium text-navy"
                            >
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />
                              {feature}
                            </li>
                          ) : (
                            <motion.li
                              key={feature}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true, margin: "-40px" }}
                              transition={{ duration: 0.28, delay: fi * 0.04, ease: [0.4, 0, 0.2, 1] }}
                              className="flex items-start gap-3 text-[14px] font-medium text-navy"
                            >
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />
                              {feature}
                            </motion.li>
                          )
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-navy overflow-hidden py-14 sm:py-24 border-t-2 border-white/10">
        <div className="absolute top-0 left-0 right-0 h-[4px] bg-yellow" />
        <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
          <AnimateIn y={16} duration={0.4}>
            <div className="border-l-4 border-yellow pl-5 sm:pl-6 max-w-[600px]">
              <span className="text-[11px] font-black uppercase tracking-[0.18em] text-yellow">
                Interesse?
              </span>
              <h2 className="mt-2 text-[26px] font-black tracking-[-1px] text-white sm:text-[40px] font-[family-name:var(--font-heading)] uppercase leading-[1.0]">
                Benieuwd wat wij
                <br />
                voor jou kunnen doen?
              </h2>
              <p className="mt-3 sm:mt-4 text-[14px] sm:text-[15px] text-white/50 font-medium leading-[1.7]">
                Plan een gratis kennismakingsgesprek en ontdek de mogelijkheden.
              </p>
              <Link
                href="/contact"
                className="group mt-6 sm:mt-8 inline-flex items-center gap-3 border-2 border-white bg-transparent px-6 sm:px-8 py-3.5 sm:py-4 text-[12px] sm:text-[13px] font-black uppercase tracking-[0.1em] text-white transition-all duration-150 hover:bg-yellow hover:border-yellow hover:text-navy active:scale-[0.97]"
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
