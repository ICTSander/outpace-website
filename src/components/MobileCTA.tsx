"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-navy px-4 py-3 transition-transform duration-200 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link
        href="/contact"
        className="flex w-full items-center justify-center border-2 border-navy bg-navy py-3.5 text-[12px] font-black uppercase tracking-[0.1em] text-white transition-colors hover:bg-accent hover:border-accent"
      >
        Gratis gesprek inplannen
      </Link>
    </div>
  );
}
