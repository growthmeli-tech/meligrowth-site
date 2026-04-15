"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureList from "@/components/ui/FeatureList";
import Button from "@/components/ui/Button";
import { tiers } from "@/lib/data";

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".pricing-header", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });
      gsap.from(".pricing-card", {
        y: 28,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".pricing-grid", start: "top 80%" },
        delay: 0.15,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="section-padding bg-grid" id="precios">
      <div className="container">

        <SectionHeader
          label="[07] — Precios"
          title={<>PLANES QUE SE ADAPTAN{" "}<em className="text-accent">A TU ESCALA</em></>}
          maxWidth="600px"
          className="pricing-header"
        />

        <div className="pricing-grid grid-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="pricing-card card-base"
              style={{ borderTop: tier.featured ? "3px solid var(--color-accent)" : "3px solid transparent", display: "flex", flexDirection: "column" }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.75rem" }}>
                <span className="mono-label">{tier.name}</span>
                {tier.featured && <span className="tag tag-accent">Recomendado</span>}
              </div>

              <div style={{ marginBottom: "0.625rem" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 4vw, 3rem)", fontWeight: 400, color: tier.featured ? "var(--color-accent)" : "var(--color-text)", lineHeight: 1, letterSpacing: "0.02em" }}>
                  A CONSULTAR
                </div>
              </div>

              <hr className="row-divider" style={{ margin: "1.25rem 0" }} />

              <div style={{ marginBottom: "1.5rem" }}>
                <div className="mono-label" style={{ marginBottom: "0.3rem" }}>Facturación</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem, 2vw, 1.625rem)", fontWeight: 400, color: "var(--color-text)", lineHeight: 1.1, letterSpacing: "0.02em" }}>{tier.range}</div>
              </div>

              <div style={{ flex: 1 }}>
                <FeatureList items={tier.features} />
              </div>

              <div style={{ marginTop: "2rem" }}>
                <Button variant={tier.ctaVariant} href="#contacto" full>Consultar</Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
