"use client";

import AnimateIn from "@/components/AnimateIn";
import { Mail, MapPin, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "E-mail",
    value: "autogarageflows@outlook.com",
    href: "mailto:autogarageflows@outlook.com",
  },
  {
    icon: MapPin,
    label: "Regio",
    value: "Zuid-Limburg, Nederland",
    href: null,
  },
  {
    icon: Clock,
    label: "Reactietijd",
    value: "Binnen 24 uur",
    href: null,
  },
];

export default function ContactContent() {
  return (
    <div className="pt-[76px]">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28 dot-grid">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,102,255,0.06),transparent)]" />
        <div className="relative mx-auto max-w-[1240px] px-6 sm:px-8">
          <AnimateIn className="mx-auto max-w-3xl text-center">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-accent">
              Contact
            </span>
            <h1 className="mt-4 text-[40px] font-extrabold leading-[1.08] tracking-[-2px] text-navy sm:text-[52px] font-[family-name:var(--font-heading)]">
              Laten we{" "}
              <span className="gradient-text">kennismaken</span>
            </h1>
            <p className="mt-5 text-[17px] leading-[1.7] text-text-secondary">
              Vul het formulier in of stuur ons een e-mail. We nemen binnen 24
              uur contact op voor een gratis kennismakingsgesprek.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Form */}
            <AnimateIn className="lg:col-span-3">
              <form
                action="https://formspree.io/f/xpwzgqkl"
                method="POST"
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="naam"
                      className="mb-1.5 block text-[13px] font-semibold text-navy"
                    >
                      Naam
                    </label>
                    <input
                      type="text"
                      id="naam"
                      name="naam"
                      required
                      className="w-full rounded-xl border border-border bg-white/80 px-4 py-3.5 text-[14px] text-navy outline-none transition-all duration-200 placeholder:text-text-secondary/40 focus:border-accent focus:ring-2 focus:ring-accent/10 focus:shadow-[0_0_20px_rgba(0,102,255,0.08)]"
                      placeholder="Jouw naam"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="bedrijf"
                      className="mb-1.5 block text-[13px] font-semibold text-navy"
                    >
                      Bedrijfsnaam
                    </label>
                    <input
                      type="text"
                      id="bedrijf"
                      name="bedrijf"
                      className="w-full rounded-xl border border-border bg-white/80 px-4 py-3.5 text-[14px] text-navy outline-none transition-all duration-200 placeholder:text-text-secondary/40 focus:border-accent focus:ring-2 focus:ring-accent/10 focus:shadow-[0_0_20px_rgba(0,102,255,0.08)]"
                      placeholder="Jouw bedrijf"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-[13px] font-semibold text-navy"
                  >
                    E-mailadres
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-border bg-white/80 px-4 py-3.5 text-[14px] text-navy outline-none transition-all duration-200 placeholder:text-text-secondary/40 focus:border-accent focus:ring-2 focus:ring-accent/10 focus:shadow-[0_0_20px_rgba(0,102,255,0.08)]"
                    placeholder="naam@bedrijf.nl"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefoon"
                    className="mb-1.5 block text-[13px] font-semibold text-navy"
                  >
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    id="telefoon"
                    name="telefoon"
                    className="w-full rounded-xl border border-border bg-white/80 px-4 py-3.5 text-[14px] text-navy outline-none transition-all duration-200 placeholder:text-text-secondary/40 focus:border-accent focus:ring-2 focus:ring-accent/10 focus:shadow-[0_0_20px_rgba(0,102,255,0.08)]"
                    placeholder="06 - 1234 5678"
                  />
                </div>

                <div>
                  <label
                    htmlFor="bericht"
                    className="mb-1.5 block text-[13px] font-semibold text-navy"
                  >
                    Bericht
                  </label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    rows={5}
                    required
                    className="w-full resize-none rounded-xl border border-border bg-white/80 px-4 py-3.5 text-[14px] text-navy outline-none transition-all duration-200 placeholder:text-text-secondary/40 focus:border-accent focus:ring-2 focus:ring-accent/10 focus:shadow-[0_0_20px_rgba(0,102,255,0.08)]"
                    placeholder="Vertel ons over je bedrijf en wat je zoekt..."
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-b from-accent to-accent-hover px-8 py-3.5 text-[14px] font-semibold text-white shadow-[0_4px_20px_rgba(0,102,255,0.3)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,102,255,0.45)] active:scale-[0.97]"
                >
                  Verstuur bericht
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            </AnimateIn>

            {/* Contact info */}
            <AnimateIn delay={0.2} x={40} y={0} className="lg:col-span-2">
              <div className="glass-card rounded-2xl p-8">
                <h2 className="text-[18px] font-bold tracking-[-0.3px] text-navy font-[family-name:var(--font-heading)]">
                  Contactgegevens
                </h2>
                <p className="mt-2 text-[14px] leading-[1.7] text-text-secondary">
                  Liever direct contact? Stuur ons een e-mail.
                </p>

                <div className="mt-8 space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-blue-400/10 text-accent">
                        <info.icon className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-text-secondary">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="mt-0.5 text-[14px] font-medium text-navy transition-colors hover:text-accent"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="mt-0.5 text-[14px] font-medium text-navy">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 rounded-xl border border-accent/10 bg-gradient-to-br from-accent/[0.04] to-blue-400/[0.02] p-5">
                  <h3 className="text-[15px] font-bold text-navy font-[family-name:var(--font-heading)]">
                    Gratis kennismaking
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.7] text-text-secondary">
                    In een kort gesprek van ~15 minuten bespreken we jouw
                    situatie, doelen en hoe wij je kunnen helpen. Geheel
                    vrijblijvend.
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </div>
  );
}
