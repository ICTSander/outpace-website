import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OverContent from "./OverContent";

export const metadata: Metadata = {
  title: "Over ons — Outpace",
  description:
    "Leer meer over Outpace: wie we zijn, waarom we lokale ondernemers helpen groeien en wat ons drijft.",
};

export default function OverPage() {
  return (
    <>
      <Navbar />
      <main>
        <OverContent />
      </main>
      <Footer />
    </>
  );
}
