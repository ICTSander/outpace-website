"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Diensten", href: "/#diensten" },
  { label: "Werkwijze", href: "/#werkwijze" },
  { label: "Prijzen", href: "/#prijzen" },
  { label: "Over ons", href: "/over" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-white border-b-2 border-navy" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        <div className="flex h-[68px] items-center justify-between">
          {/* Wordmark */}
          <Link
            href="/"
            className="text-[20px] font-black tracking-tight text-navy uppercase font-[family-name:var(--font-heading)]"
          >
            Outpace
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-0 md:flex">
            {navLinks.map((link) =>
              link.href.startsWith("/#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-[12px] font-bold uppercase tracking-[0.08em] text-navy/50 transition-colors duration-150 hover:text-navy"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-[12px] font-bold uppercase tracking-[0.08em] text-navy/50 transition-colors duration-150 hover:text-navy"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center border-2 border-navy bg-navy px-6 py-2 text-[11px] font-black uppercase tracking-[0.1em] text-white transition-all duration-150 hover:bg-accent hover:border-accent active:scale-[0.97]"
            >
              Gratis gesprek
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center text-navy md:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden border-t-2 border-navy bg-white md:hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-0">
              {navLinks.map((link) =>
                link.href.startsWith("/#") ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="border-b border-navy/10 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-navy/60 min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="border-b border-navy/10 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-navy/60 min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 flex items-center justify-center border-2 border-navy bg-navy py-3.5 text-[12px] font-black uppercase tracking-[0.1em] text-white min-h-[44px]"
              >
                Gratis gesprek
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
