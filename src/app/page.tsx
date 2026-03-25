import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import ForWho from "@/components/ForWho";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <SocialProof />
        <Services />
        <ForWho />
        <Process />
        <Pricing />
        <CTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
