"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureList from "@/components/ui/FeatureList";
import Button from "@/components/ui/Button";
import { steps, tiers } from "@/lib/data";

export default function OfferModel() {
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
      gsap.from(".process-timeline-item", {
        y: 26,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".process-timeline", start: "top 82%" },
        delay: 0.1,
      });
      gsap.from(".pricing-card", {
        y: 28,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".pricing-grid", start: "top 82%" },
        delay: 0.15,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="section-padding bg-grid" id="precios">
      <div className="container">
        <div className="pricing-header">
          <SectionHeader
            label="[04] — Oferta / Modelo"
            title={<>PARTNER OPERATIVO PARA CUENTAS<br /><em className="text-accent">QUE BUSCAN ESCALAR CON ESTRUCTURA.</em></>}
            maxWidth="820px"
          />
          <p className="body-regular" style={{ marginTop: "-1.5rem", marginBottom: "clamp(1.5rem, 3vw, 2.25rem)", maxWidth: "620px" }}>
            No vendemos asesoría por hora.
            <br />
            Asumimos responsabilidad operativa sobre el canal
            <br />
            y trabajamos sobre un modelo alineado a resultados.
          </p>
        </div>

        <div style={{ marginBottom: "clamp(1.75rem, 4vw, 3rem)" }}>
          <h3 className="heading-h3" style={{ marginBottom: "clamp(1.25rem, 3vw, 2rem)" }}>
            CÓMO EMPEZAMOS A TRABAJAR
          </h3>

          <div className="process-timeline">
            {steps.map((step, i) => (
              <div key={step.title} className="process-timeline-item">
                <div className="process-dot" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="heading-h3-sm" style={{ marginBottom: "0.65rem" }}>
                  {step.title.toUpperCase()}
                </h4>
                <p className="body-regular" style={{ margin: 0 }}>
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "clamp(1rem, 2vw, 1.5rem)" }}>
          <h3 className="heading-h3">PLANES</h3>
        </div>

        <div className="pricing-grid grid-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="pricing-card card-base"
              style={{ borderTop: tier.featured ? "3px solid var(--color-accent)" : "3px solid transparent", display: "flex", flexDirection: "column" }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", marginBottom: "1.25rem" }}>
                <h4 className="heading-h3-sm" style={{ margin: 0, color: tier.featured ? "var(--color-accent)" : "var(--color-text)" }}>
                  {tier.name}
                </h4>
                {tier.featured && <span className="tag tag-accent">Recomendado</span>}
              </div>

              <p className="body-regular" style={{ margin: "0 0 1rem", color: "var(--color-text)" }}>
                {tier.description}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
                <span className="tag tag-outline">A medida</span>
                <span className="mono-label">{tier.range}</span>
              </div>

              <p className="body-regular" style={{ margin: 0, color: "var(--color-muted)" }}>
                Fee y variable definidos por operación, categoría y objetivo comercial.
              </p>

              <hr className="row-divider" style={{ margin: "1.25rem 0" }} />

              <div style={{ flex: 1 }}>
                <FeatureList items={tier.features} />
              </div>

              <div style={{ marginTop: "1.5rem" }}>
                <Button variant={tier.ctaVariant} href="#contacto" full>Agendar diagnóstico</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
