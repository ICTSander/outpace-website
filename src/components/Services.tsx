"use client";

import AnimateIn from "./AnimateIn";
import {
  Globe,
  Search,
  Megaphone,
  Smartphone,
  Zap,
  Rocket,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Globe,
    title: "Website & Leadgeneratie",
    description:
      "Professionele websites die bezoekers omzetten in klanten. Geoptimaliseerd voor conversie en mobiel gebruik.",
  },
  {
    number: "02",
    icon: Search,
    title: "Lokale SEO",
    description:
      "Word gevonden door klanten in jouw regio. Google Business optimalisatie, lokale zoekwoorden en meer.",
  },
  {
    number: "03",
    icon: Megaphone,
    title: "Google Ads",
    description:
      "Gerichte advertenties die direct klanten opleveren. Wij beheren je campagnes en optimaliseren continu.",
  },
  {
    number: "04",
    icon: Smartphone,
    title: "Social Media Beheer",
    description:
      "Consistent aanwezig op social media. Content creatie, planning en community management voor jouw merk.",
  },
  {
    number: "05",
    icon: Zap,
    title: "Automatiseringen",
    description:
      "Bespaar tijd met slimme automatiseringen. Automatische opvolging, afspraken plannen en meer.",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Groei Compleet",
    description:
      "Het totaalpakket: website, SEO, ads, social media en automatiseringen. Alles wat je nodig hebt.",
  },
];

export default function Services() {
  return (
    <section id="diensten" className="relative bg-white line-grid py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        {/* Section header */}
        <AnimateIn y={20} duration={0.4}>
          <div className="flex items-start gap-6 mb-16 border-l-4 border-accent pl-6">
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.18em] text-accent">
                Diensten
              </span>
              <h2 className="mt-2 text-[36px] font-black leading-[1.0] tracking-[-1.5px] text-navy sm:text-[48px] font-[family-name:var(--font-heading)] uppercase">
                Alles voor jouw
                <br />
                online groei
              </h2>
              <p className="mt-4 max-w-[440px] text-[15px] leading-[1.7] text-navy/55 font-medium">
                Van website tot volledige marketingmachine — wij regelen het.
              </p>
            </div>
          </div>
        </AnimateIn>

        {/* Services grid */}
        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3 border-t-2 border-l-2 border-navy">
          {services.map((service, i) => (
            <AnimateIn key={service.title} delay={i * 0.07} y={0} x={0} duration={0.35}>
              <div className="group border-b-2 border-r-2 border-navy p-8 bg-white transition-colors duration-150 hover:bg-navy cursor-default">
                {/* Number */}
                <span className="text-[11px] font-black uppercase tracking-[0.18em] text-navy/30 group-hover:text-white/30 transition-colors duration-150">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="mt-4 mb-5 flex h-11 w-11 items-center justify-center bg-accent text-white">
                  <service.icon className="h-5 w-5" strokeWidth={2} />
                </div>

                <h3 className="text-[17px] font-black tracking-tight text-navy group-hover:text-white transition-colors duration-150 font-[family-name:var(--font-heading)] uppercase">
                  {service.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-navy/55 group-hover:text-white/60 transition-colors duration-150">
                  {service.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
