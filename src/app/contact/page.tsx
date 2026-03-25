import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact — Outpace",
  description:
    "Neem contact op met Outpace. Plan een gratis kennismakingsgesprek of stuur ons een bericht.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
