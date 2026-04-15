"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import SectionHeader from "@/components/ui/SectionHeader";
import CTAFooter from "@/components/ui/CTAFooter";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".faq-header", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });
      gsap.from(".faq-card", {
        y: 28,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ".faq-grid", start: "top 80%" },
        delay: 0.15,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      id="faq"
      style={{
        backgroundColor: "var(--color-surface)",
        backgroundImage: "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }}
    >
      <div className="container">

        <SectionHeader
          label="[08] — FAQ"
          title={<>PREGUNTAS{" "}<em className="text-accent">FRECUENTES</em></>}
          maxWidth="600px"
          className="faq-header"
        />

        <div className="faq-grid grid-2">
          {faqs.map((item, i) => (
            <div key={i} className="faq-card card-base-bg">
              <h3 className="heading-h3-sm" style={{ marginBottom: "0.75rem" }}>{item.q}</h3>
              <p className="body-regular">{item.a}</p>
            </div>
          ))}
        </div>

        <CTAFooter disclaimer="Sin costo ni compromiso" />

      </div>
    </section>
  );
}
