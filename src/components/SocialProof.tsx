import AnimateIn from "./AnimateIn";
import CountUp from "./CountUp";

const stats = [
  { end: 50, suffix: "+", label: "Lokale ondernemers geholpen", color: "bg-accent" },
  { end: 3, suffix: "x", label: "Gemiddelde groei in leads", color: "bg-yellow" },
  { end: 7, suffix: "", prefix: "<", label: "Dagen van start tot live", color: "bg-accent" },
  { end: 4.9, suffix: "/5", label: "Klanttevredenheid", decimals: 1, color: "bg-yellow" },
];

export default function SocialProof() {
  return (
    <section className="relative bg-navy overflow-hidden">
      <div className="absolute inset-0 line-grid-dark" />

      <div className="h-[4px] bg-yellow w-full relative" />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 py-12 sm:py-20">
        <AnimateIn y={0} duration={0.35}>
          <p className="mb-8 sm:mb-12 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-white/60 text-center">
            Vertrouwd door lokale ondernemers in Zuid-Limburg
          </p>
        </AnimateIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 border-t-2 border-l-2 border-white/10">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 0.07} y={18} rotateX={8} duration={0.38}>
              <div className="border-b-2 border-r-2 border-white/10 flex flex-col items-center justify-center py-6 sm:py-10 px-3 sm:px-6 text-center">
                <p className="text-[36px] sm:text-[58px] lg:text-[64px] font-black tracking-[-2px] sm:tracking-[-3px] text-white leading-none font-[family-name:var(--font-heading)]">
                  {stat.prefix && <span>{stat.prefix}</span>}
                  <CountUp end={stat.end} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
                </p>
                <div className={`mt-2 sm:mt-3 h-[3px] w-6 sm:w-8 ${stat.color}`} />
                <p className="mt-2 sm:mt-3 text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.12em] text-white/60">
                  {stat.label}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      <div className="h-[3px] bg-white/[0.08] w-full relative" />
    </section>
  );
}
