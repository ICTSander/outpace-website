"use client";

import AnimateIn from "./AnimateIn";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative bg-white line-grid overflow-hidden py-24 sm:py-32 border-t-2 border-navy">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        <AnimateIn y={28} duration={0.45}>
          <div className="max-w-[720px]">
            <span className="text-[11px] font-black uppercase tracking-[0.18em] text-accent">
              Klaar om te groeien?
            </span>

            <h2 className="mt-3 text-[44px] font-black leading-[0.95] tracking-[-2px] text-navy sm:text-[60px] lg:text-[72px] font-[family-name:var(--font-heading)] uppercase">
              Start vandaag
              <br />
              <span className="text-accent">gratis</span> met
              <br />
              Outpace.
            </h2>

            {/* Bauhaus divider: yellow + navy bars */}
            <div className="mt-8 mb-6 flex items-center gap-0">
              <div className="h-[4px] w-8 bg-yellow" />
              <div className="h-[4px] w-8 bg-accent" />
              <div className="h-[4px] w-16 bg-navy" />
            </div>

            <p className="max-w-[520px] text-[16px] leading-[1.7] text-navy/55 font-medium">
              Plan een gratis kennismakingsgesprek en ontdek hoe wij jouw bedrijf
              online laten groeien. Geen verplichtingen, wel direct inzicht.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 border-2 border-navy bg-navy px-8 py-4 text-[13px] font-black uppercase tracking-[0.1em] text-white transition-all duration-150 hover:bg-accent hover:border-accent active:scale-[0.97]"
              >
                Gratis gesprek inplannen
                <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
              </Link>
              <a
                href="mailto:autogarageflows@outlook.com"
                className="inline-flex items-center gap-2 text-[13px] font-bold text-navy/50 transition-colors hover:text-navy"
              >
                <Mail className="h-4 w-4" />
                autogarageflows@outlook.com
              </a>
            </div>
          </div>
        </AnimateIn>
      </div>

      {/* Geometric corner blocks — navy, yellow, accent */}
      <div className="absolute right-0 top-0 bottom-0 w-[240px] hidden lg:flex flex-col">
        <div className="flex-1 bg-surface border-l-2 border-navy/10" />
        <div className="h-[120px] bg-yellow border-l-2 border-t-2 border-navy" />
        <div className="h-[80px] bg-accent border-l-2 border-t-2 border-navy" />
        <div className="h-[80px] bg-navy border-l-2 border-t-2 border-accent" />
      </div>
    </section>
  );
}
