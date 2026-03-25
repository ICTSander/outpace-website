import Link from "next/link";

const footerLinks = [
  { label: "Diensten", href: "/diensten" },
  { label: "Over ons", href: "/over" },
  { label: "Werkwijze", href: "/#werkwijze" },
  { label: "Prijzen", href: "/#prijzen" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy border-t-2 border-white/10">
      <div className="mx-auto max-w-[1240px] px-6 py-12 sm:px-8 sm:py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-[22px] font-black tracking-tight text-white uppercase font-[family-name:var(--font-heading)]"
            >
              Outpace
            </Link>
            <div className="mt-2 h-[2px] w-8 bg-accent" />
            <p className="mt-4 max-w-[240px] text-[13px] leading-[1.7] text-white/40 font-medium">
              Online groei voor lokale ondernemers in Zuid-Limburg.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap items-start gap-x-8 gap-y-2">
            {footerLinks.map((link) =>
              link.href.startsWith("/#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[12px] font-bold uppercase tracking-[0.08em] text-white/40 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[12px] font-bold uppercase tracking-[0.08em] text-white/40 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/08 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-white/25">
            &copy; 2026 Outpace. Alle rechten voorbehouden.
          </p>
          <a
            href="mailto:autogarageflows@outlook.com"
            className="text-[11px] font-bold text-white/35 transition-colors hover:text-white"
          >
            autogarageflows@outlook.com
          </a>
        </div>
      </div>
    </footer>
  );
}
