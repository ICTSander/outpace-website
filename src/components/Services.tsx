"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimateIn from "./AnimateIn";
import {
  Globe, Search, Megaphone, Smartphone, Zap, Rocket,
} from "lucide-react";

const services = [
  { number: "01", icon: Globe, title: "Website & Leadgeneratie", description: "Professionele websites die bezoekers omzetten in klanten. Geoptimaliseerd voor conversie en mobiel gebruik.", iconBg: "bg-accent" },
  { number: "02", icon: Search, title: "Lokale SEO", description: "Word gevonden door klanten in jouw regio. Google Business optimalisatie, lokale zoekwoorden en meer.", iconBg: "bg-navy" },
  { number: "03", icon: Megaphone, title: "Google Ads", description: "Gerichte advertenties die direct klanten opleveren. Wij beheren je campagnes en optimaliseren continu.", iconBg: "bg-yellow" },
  { number: "04", icon: Smartphone, title: "Social Media Beheer", description: "Consistent aanwezig op social media. Content creatie, planning en community management voor jouw merk.", iconBg: "bg-accent" },
  { number: "05", icon: Zap, title: "Automatiseringen", description: "Bespaar tijd met slimme automatiseringen. Automatische opvolging, afspraken plannen en meer.", iconBg: "bg-navy" },
  { number: "06", icon: Rocket, title: "Groei Compleet", description: "Het totaalpakket: website, SEO, ads, social media en automatiseringen. Alles wat je nodig hebt.", iconBg: "bg-yellow" },
];

function SectionHeader() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end center"] });
  const x = useTransform(scrollYProgress, [0, 1], [-40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <motion.div ref={ref} style={{ x, opacity }} className="flex items-start gap-6 mb-16 border-l-4 border-yellow pl-6">
      <div>
        <span className="text-[11px] font-black uppercase tracking-[0.18em] text-navy/40">Diensten</span>
        <h2 className="mt-2 text-[36px] font-black leading-[1.0] tracking-[-1.5px] text-navy sm:text-[48px] font-[family-name:var(--font-heading)] uppercase">
          Alles voor jouw
          <br />
          online groei
        </h2>
        <p className="mt-4 max-w-[440px] text-[15px] leading-[1.7] text-navy/55 font-medium">
          Van website tot volledige marketingmachine — wij regelen het.
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="diensten" className="relative bg-white line-grid py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        <SectionHeader />

        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3 border-t-2 border-l-2 border-navy">
          {services.map((service, i) => (
            <AnimateIn key={service.title} delay={i * 0.07} y={0} rotateX={12} duration={0.42}>
              <motion.div
                whileHover={{ backgroundColor: "var(--navy)", transition: { duration: 0.15 } }}
                className="group border-b-2 border-r-2 border-navy p-8 bg-white cursor-default h-full flex flex-col"
              >
                <span className="text-[11px] font-black uppercase tracking-[0.18em] text-navy/25 group-hover:text-white/25 transition-colors duration-150">
                  {service.number}
                </span>

                <div className={`mt-4 mb-5 flex h-11 w-11 items-center justify-center ${service.iconBg} ${service.iconBg === "bg-yellow" ? "text-navy" : "text-white"}`}>
                  <service.icon className="h-5 w-5" strokeWidth={2} />
                </div>

                <h3 className="text-[16px] font-black tracking-tight text-navy group-hover:text-white transition-colors duration-150 font-[family-name:var(--font-heading)] uppercase">
                  {service.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-navy/50 group-hover:text-white/55 transition-colors duration-150 flex-1">
                  {service.description}
                </p>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
