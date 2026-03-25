"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Generates the 6 face transforms for a cube of given half-size
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

// Real CSS 3D cube with 6 faces
function SpinningCube({
  size,
  faceColors,
  duration = 8,
}: {
  size: number;
  faceColors: [string, string, string]; // front/back, sides, top/bottom
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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 50, damping: 18 });

  // Big cube (160px): sweeps center → right, then exits left
  const bigX = useTransform(smooth, [0, 0.4, 0.8, 1], [-80, 120, 160, 400]);
  const bigY = useTransform(smooth, [0, 0.5, 1], [60, -20, -120]);
  const bigScale = useTransform(smooth, [0, 0.25, 0.6, 1], [0.4, 1.15, 1.05, 0.5]);

  // Medium cube (100px): comes from behind, moves opposite to big
  const midX = useTransform(smooth, [0, 1], [320, -220]);
  const midY = useTransform(smooth, [0, 0.5, 1], [-40, 60, -80]);
  const midZ = useTransform(smooth, [0, 0.4, 0.8, 1], [-500, 0, 100, -500]);

  // Small cube (70px): high energy / chaotic
  const smlX = useTransform(smooth, [0, 0.25, 0.6, 0.9, 1], [60, -180, 200, -80, 40]);
  const smlY = useTransform(smooth, [0, 0.4, 0.8, 1], [-140, 60, -40, -180]);
  const smlZ = useTransform(smooth, [0, 0.5, 1], [200, -300, 100]);
  const smlScale = useTransform(smooth, [0, 0.5, 1], [0.6, 1, 0.4]);

  // Background grid zooms as you scroll
  const bgScale = useTransform(smooth, [0, 1], [1.0, 1.5]);

  // Text: fades in from 0→0.15, stays, fades out 0.8→0.95
  const textOpacity = useTransform(scrollYProgress, [0, 0.12, 0.75, 0.92], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.12], [50, 0]);

  return (
    <div ref={containerRef} style={{ height: "300vh" }} className="relative">
      <div className="sticky top-0 h-screen bg-navy overflow-hidden">

        {/* Zooming grid background */}
        <motion.div
          style={{ scale: bgScale }}
          className="absolute inset-[-10%] line-grid-dark origin-center"
        />

        {/* 3D Perspective scene */}
        <div
          className="absolute inset-0"
          style={{ perspective: "700px", perspectiveOrigin: "55% 50%" }}
        >
          {/* Big cube — yellow/blue/navy */}
          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              marginLeft: -80,
              marginTop: -80,
              x: bigX,
              y: bigY,
              scale: bigScale,
              transformStyle: "preserve-3d",
            }}
          >
            <SpinningCube
              size={160}
              faceColors={["#FFD100", "#0066FF", "#0A1024"]}
              duration={7}
            />
          </motion.div>

          {/* Medium cube — blue/dark/yellow */}
          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              marginLeft: -50,
              marginTop: -50,
              x: midX,
              y: midY,
              z: midZ,
              transformStyle: "preserve-3d",
            }}
          >
            <SpinningCube
              size={100}
              faceColors={["#0066FF", "#131B33", "#FFD100"]}
              duration={11}
            />
          </motion.div>

          {/* Small cube — dark/yellow/blue */}
          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              marginLeft: -36,
              marginTop: -36,
              x: smlX,
              y: smlY,
              z: smlZ,
              scale: smlScale,
              transformStyle: "preserve-3d",
            }}
          >
            <SpinningCube
              size={72}
              faceColors={["#131B33", "#FFD100", "#0066FF"]}
              duration={5}
            />
          </motion.div>
        </div>

        {/* Text overlay — left aligned */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="absolute inset-0 flex items-center pointer-events-none"
        >
          <div className="mx-auto max-w-[1240px] px-6 sm:px-8 w-full">
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
                    <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-white/55">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
