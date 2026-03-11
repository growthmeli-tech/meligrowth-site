"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    detail: "Analizamos tu cuenta, tus productos y tus números. En 48 horas tenés un informe real con oportunidades concretas.",
    tag: "48 horas",
  },
  {
    num: "02",
    title: "Onboarding",
    detail: "Te integramos, tomamos el control y activamos las primeras mejoras. Sin fricción, sin interrupción de operación.",
    tag: "1 semana",
  },
  {
    num: "03",
    title: "Operación",
    detail: "Gestionamos todo: ADS, publicaciones, preguntas, logística, salud de cuenta. Cada día, sin excepción.",
    tag: "365 días/año",
  },
  {
    num: "04",
    title: "Reportes",
    detail: "Comunicación directa y reporte quincenal. Sabés exactamente qué se hizo, cómo fue y qué viene.",
    tag: "Transparencia total",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".process-header", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });
      gsap.from(".step-card", {
        y: 36,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".steps-grid", start: "top 80%" },
        delay: 0.1,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="section-padding bg-dots" id="como-funciona">
      <div className="container">
        {/* Header */}
        <div className="process-header" style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
          <SectionLabel>[03] — El Proceso</SectionLabel>
          <h2 className="headline">
            EMPEZAR ES{" "}
            <em style={{ fontStyle: "normal", color: "var(--color-accent)" }}>SIMPLE</em>
          </h2>
        </div>

        {/* Steps grid — 4 columns with 2px gaps */}
        <div
          className="steps-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2px",
            background: "var(--color-border)",
          }}
        >
          {steps.map((s) => (
            <div
              key={s.num}
              className="step-card"
              style={{ display: "flex", flexDirection: "column" }}
            >
              {/* Ghost number background */}
              <div
                className="ghost-num"
                aria-hidden="true"
                style={{ position: "absolute", bottom: "-0.5rem", right: "0.5rem" }}
              >
                {s.num}
              </div>

              {/* Step content */}
              <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      letterSpacing: "0.16em",
                      color: "var(--color-muted)",
                    }}
                  >
                    {s.num}
                  </span>
                  <span className="step-tag">{s.tag}</span>
                </div>

                <h3 className="heading-h3" style={{ marginBottom: "0.875rem" }}>
                  {s.title.toUpperCase()}
                </h3>

                <p className="body-regular">
                  {s.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
