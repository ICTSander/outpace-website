import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DienstenContent from "./DienstenContent";

export const metadata: Metadata = {
  title: "Diensten — Outpace",
  description:
    "Ontdek onze diensten: websites, lokale SEO, Google Ads, social media, automatiseringen en het Groei Compleet pakket.",
};

export default function DienstenPage() {
  return (
    <>
      <Navbar />
      <main>
        <DienstenContent />
      </main>
      <Footer />
    </>
  );
}
