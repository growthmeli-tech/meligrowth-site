import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import BottomCTA from "@/components/BottomCTA";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="section-divider" />
        <Problem />
        <div className="section-divider" />
        <Solution />
        <div className="section-divider" />
        <Process />
        <Stats />
        <div className="section-divider" />
        <Benefits />
        <div className="section-divider" />
        <Pricing />
        <div className="section-divider" />
        <FAQ />
        <BottomCTA />
        <div className="section-divider" />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
