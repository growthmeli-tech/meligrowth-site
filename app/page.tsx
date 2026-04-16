import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Proof from "@/components/Proof";
import OfferModel from "@/components/OfferModel";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <>
      <Header />
      <StickyCTA />
      <main id="main-content">
        <Hero />
        <div className="section-divider" />
        <Problem />
        <div className="section-divider" />
        <Solution />
        <div className="section-divider" />
        <Proof />
        <div className="section-divider" />
        <OfferModel />
        <div className="section-divider" />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
