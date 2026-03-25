"use client";

import { useState } from "react";
import AnimateIn from "@/components/AnimateIn";
import { Mail, Phone, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "E-mail",
    value: "sander@outpace.cloud",
    href: "mailto:sander@outpace.cloud",
  },
  {
    icon: Phone,
    label: "Telefoon",
    value: "+31 6 18233970",
    href: "tel:+31618233970",
  },
  {
    icon: Clock,
    label: "Reactietijd",
    value: "Binnen 24 uur",
    href: null,
  },
];

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    await fetch("https://formspree.io/f/xlgorzpl", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <div className="pt-[68px]">
      {/* Hero */}
      <section className="relative bg-navy line-grid-dark overflow-hidden py-20 sm:py-28 border-b-2 border-white/10">
        <div className="absolute top-0 left-0 right-0 h-[4px] bg-yellow" />
        <div className="relative mx-auto max-w-[1240px] px-6 sm:px-8">
          <AnimateIn y={24} duration={0.45}>
            <div className="border-l-4 border-yellow pl-6">
              <span className="text-[11px] font-black uppercase tracking-[0.18em] text-yellow">
                Contact
              </span>
              <h1 className="mt-2 text-[40px] font-black leading-[1.0] tracking-[-2px] text-white sm:text-[52px] font-[family-name:var(--font-heading)] uppercase">
                Laten we
                <br />
                kennismaken
              </h1>
              <p className="mt-4 max-w-[480px] text-[15px] leading-[1.7] text-white/55 font-medium">
                Vul het formulier in of stuur ons een e-mail. We nemen binnen 24
                uur contact op voor een gratis kennismakingsgesprek.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 sm:py-28 bg-white line-grid">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">

            {/* Form */}
            <AnimateIn className="lg:col-span-3" y={28} duration={0.45}>
              {submitted ? (
                <div className="border-2 border-accent p-10">
                  <div className="h-[4px] w-16 bg-yellow mb-6" />
                  <h2 className="text-[28px] font-black uppercase tracking-tight text-navy font-[family-name:var(--font-heading)]">
                    Bericht ontvangen!
                  </h2>
                  <p className="mt-3 text-[15px] leading-[1.7] text-navy/60 font-medium">
                    Bedankt voor je bericht. We nemen binnen 24 uur contact met
                    je op.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="naam" className="mb-2 block text-[11px] font-black uppercase tracking-[0.12em] text-navy">
                        Naam *
                      </label>
                      <input
                        type="text"
                        id="naam"
                        name="naam"
                        required
                        className="w-full border-2 border-navy/20 bg-white px-4 py-3.5 text-[14px] font-medium text-navy outline-none transition-all duration-150 placeholder:text-navy/30 focus:border-accent"
                        placeholder="Jouw naam"
                      />
                    </div>
                    <div>
                      <label htmlFor="bedrijf" className="mb-2 block text-[11px] font-black uppercase tracking-[0.12em] text-navy">
                        Bedrijfsnaam
                      </label>
                      <input
                        type="text"
                        id="bedrijf"
                        name="bedrijf"
                        className="w-full border-2 border-navy/20 bg-white px-4 py-3.5 text-[14px] font-medium text-navy outline-none transition-all duration-150 placeholder:text-navy/30 focus:border-accent"
                        placeholder="Jouw bedrijf"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-[11px] font-black uppercase tracking-[0.12em] text-navy">
                      E-mailadres *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full border-2 border-navy/20 bg-white px-4 py-3.5 text-[14px] font-medium text-navy outline-none transition-all duration-150 placeholder:text-navy/30 focus:border-accent"
                      placeholder="naam@bedrijf.nl"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefoon" className="mb-2 block text-[11px] font-black uppercase tracking-[0.12em] text-navy">
                      Telefoonnummer
                    </label>
                    <input
                      type="tel"
                      id="telefoon"
                      name="telefoon"
                      className="w-full border-2 border-navy/20 bg-white px-4 py-3.5 text-[14px] font-medium text-navy outline-none transition-all duration-150 placeholder:text-navy/30 focus:border-accent"
                      placeholder="06 - 1234 5678"
                    />
                  </div>

                  <div>
                    <label htmlFor="bericht" className="mb-2 block text-[11px] font-black uppercase tracking-[0.12em] text-navy">
                      Bericht *
                    </label>
                    <textarea
                      id="bericht"
                      name="bericht"
                      rows={5}
                      required
                      className="w-full resize-none border-2 border-navy/20 bg-white px-4 py-3.5 text-[14px] font-medium text-navy outline-none transition-all duration-150 placeholder:text-navy/30 focus:border-accent"
                      placeholder="Vertel ons over je bedrijf en wat je zoekt..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex items-center gap-2.5 border-2 border-navy bg-navy px-8 py-4 text-[12px] font-black uppercase tracking-[0.1em] text-white transition-all duration-150 hover:bg-accent hover:border-accent active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Versturen..." : "Verstuur bericht"}
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </form>
              )}
            </AnimateIn>

            {/* Contact info */}
            <AnimateIn delay={0.15} y={28} duration={0.45} className="lg:col-span-2">
              <div className="border-2 border-navy p-8">
                {/* Yellow top strip */}
                <div className="-mt-8 -mx-8 mb-6 h-[4px] bg-yellow" />

                <h2 className="text-[16px] font-black uppercase tracking-[0.08em] text-navy font-[family-name:var(--font-heading)]">
                  Contactgegevens
                </h2>
                <div className="mt-2 h-[2px] w-8 bg-accent mb-6" />

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-navy text-white">
                        <info.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.15em] text-navy/40">
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

                <div className="mt-10 border-t-2 border-navy/10 pt-8">
                  <div className="h-[3px] w-8 bg-yellow mb-4" />
                  <h3 className="text-[14px] font-black uppercase tracking-tight text-navy font-[family-name:var(--font-heading)]">
                    Gratis kennismaking
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.7] text-navy/55 font-medium">
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
