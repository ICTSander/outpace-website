import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Outpace — Meer klanten voor jouw lokale bedrijf",
  description:
    "Outpace helpt lokale ondernemers groeien met websites, SEO, Google Ads, social media en automatiseringen. Gevestigd in Zuid-Limburg.",
  keywords: [
    "lokale marketing",
    "website laten maken",
    "Google Ads",
    "SEO",
    "social media",
    "leadgeneratie",
    "Zuid-Limburg",
  ],
  authors: [{ name: "Outpace" }],
  openGraph: {
    title: "Outpace — Meer klanten voor jouw lokale bedrijf",
    description:
      "Outpace helpt lokale ondernemers groeien met websites, SEO, Google Ads, social media en automatiseringen. Gevestigd in Zuid-Limburg.",
    url: "https://outpace.nl",
    siteName: "Outpace",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Outpace — Meer klanten voor jouw lokale bedrijf",
    description:
      "Professionele websites, Google Ads, SEO en automatiseringen voor lokale ondernemers.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${sora.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@700,800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Outpace",
              description:
                "Online groei voor lokale ondernemers: websites, Google Ads, SEO, social media en automatiseringen.",
              email: "sander@outpace.cloud",
              telephone: "+31618233970",
              url: "https://outpace.nl",
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 50.8514,
                  longitude: 5.6909,
                },
                geoRadius: "50000",
              },
              serviceType: [
                "Webdesign",
                "SEO",
                "Google Ads",
                "Social Media Marketing",
                "Marketing Automatisering",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-body)]">
        {children}
      </body>
    </html>
  );
}
