import {
  Globe,
  Search,
  Megaphone,
  Smartphone,
  Zap,
  Rocket,
} from "lucide-react";

const items = [
  { label: "Website & Leads", icon: Globe, accent: "text-accent" },
  { label: "Google Ads", icon: Megaphone, accent: "text-yellow-dark" },
  { label: "Lokale SEO", icon: Search, accent: "text-accent" },
  { label: "Social Media", icon: Smartphone, accent: "text-yellow-dark" },
  { label: "Automatiseringen", icon: Zap, accent: "text-accent" },
  { label: "Groei Compleet", icon: Rocket, accent: "text-yellow-dark" },
];

function MarqueeContent() {
  return (
    <>
      {items.map((item) => (
        <span
          key={item.label}
          className="inline-flex items-center gap-3 px-8 text-[11px] font-black uppercase tracking-[0.15em] text-navy/50 whitespace-nowrap"
        >
          <item.icon className={`h-3.5 w-3.5 ${item.accent}`} strokeWidth={2} />
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
