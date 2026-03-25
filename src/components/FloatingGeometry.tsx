"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

function makeFaceTransforms(h: number): string[] {
  return [
    `translateZ(${h}px)`,
    `rotateY(180deg) translateZ(${h}px)`,
    `rotateY(90deg) translateZ(${h}px)`,
    `rotateY(-90deg) translateZ(${h}px)`,
    `rotateX(90deg) translateZ(${h}px)`,
    `rotateX(-90deg) translateZ(${h}px)`,
  ];
}

function SpinningCube({
  size,
  faceColors,
  duration = 8,
}: {
  size: number;
  faceColors: [string, string, string];
  duration?: number;
}) {
  const h = size / 2;
  const colors = [faceColors[0], faceColors[1], faceColors[2], faceColors[1], faceColors[0], faceColors[2]];
  const faces = makeFaceTransforms(h);

  return (
    <motion.div
      animate={{ rotateX: 360, rotateY: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      style={{
        width: size,
        height: size,
        position: "relative",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {faces.map((transform, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            background: colors[i],
            border: "1px solid rgba(255,255,255,0.14)",
            transform,
          }}
        />
      ))}
    </motion.div>
  );
}

const SERVICES = [
  { n: "01", label: "Website & Leads" },
  { n: "02", label: "Lokale SEO" },
  { n: "03", label: "Google Ads" },
  { n: "04", label: "Social Media" },
  { n: "05", label: "Automatiseringen" },
  { n: "06", label: "Groei Compleet" },
];

export default function FloatingGeometry() {
  return (
    <div className="relative bg-navy overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 line-grid-dark" />

      {/* 3D scene — desktop only to reduce GPU load on mobile */}
      <div
        className="hidden lg:block absolute inset-0 pointer-events-none"
        style={{ perspective: "700px", perspectiveOrigin: "70% 50%" }}
      >
        <div style={{ position: "absolute", top: "50%", right: "12%", marginTop: -80 }}>
          <SpinningCube size={160} faceColors={["#FFD100", "#0066FF", "#0A1024"]} duration={7} />
        </div>
        <div style={{ position: "absolute", top: "28%", right: "34%", marginTop: -50 }}>
          <SpinningCube size={100} faceColors={["#0066FF", "#131B33", "#FFD100"]} duration={11} />
        </div>
        <div style={{ position: "absolute", top: "72%", right: "22%", marginTop: -36 }}>
          <SpinningCube size={72} faceColors={["#131B33", "#FFD100", "#0066FF"]} duration={5} />
        </div>
      </div>

      {/* Text content */}
      <div className="relative mx-auto max-w-[1240px] px-6 sm:px-8">
        <AnimateIn y={24} duration={0.45}>
          <div className="max-w-[380px]">
            <span className="text-[11px] font-black uppercase tracking-[0.18em] text-yellow">
              Onze aanpak
            </span>
            <h2 className="mt-3 text-[40px] font-black leading-[0.95] tracking-[-2px] text-white sm:text-[52px] font-[family-name:var(--font-heading)] uppercase">
              Groei in
              <br />
              beweging
            </h2>
            <div className="mt-5 h-[3px] w-8 bg-yellow" />
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3">
              {SERVICES.map((s) => (
                <div key={s.n} className="flex items-center gap-2">
                  <span className="text-[10px] font-black text-yellow">{s.n}</span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-white/60">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
