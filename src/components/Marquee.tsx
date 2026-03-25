"use client";

import {
  Globe,
  Search,
  Megaphone,
  Smartphone,
  Zap,
  Rocket,
} from "lucide-react";

const items = [
  { label: "Website & Leads", icon: Globe },
  { label: "Google Ads", icon: Megaphone },
  { label: "Lokale SEO", icon: Search },
  { label: "Social Media", icon: Smartphone },
  { label: "Automatiseringen", icon: Zap },
  { label: "Groei Compleet", icon: Rocket },
];

function MarqueeContent() {
  return (
    <>
      {items.map((item) => (
        <span
          key={item.label}
          className="inline-flex items-center gap-3 px-8 text-[11px] font-black uppercase tracking-[0.15em] text-navy/50 whitespace-nowrap"
        >
          <item.icon className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
          {item.label}
          <span className="w-[4px] h-[4px] bg-navy/20 inline-block" />
        </span>
      ))}
    </>
  );
}

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y-2 border-navy bg-white py-4">
      <div className="animate-marquee flex w-max">
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
}
