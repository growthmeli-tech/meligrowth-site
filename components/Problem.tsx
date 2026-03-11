"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import SectionLabel from "@/components/ui/SectionLabel";

const problems = [
  {
    num: "01",
    title: "Tu cuenta existe, pero no crece",
    detail: "Sin estrategia ni datos claros, tus publicaciones compiten sin dirección. El catálogo crece en volumen pero no en rentabilidad.",
    tag: "Estancamiento",
  },
  {
    num: "02",
    title: "Gestionás el día a día en vez de escalar",
    detail: "Preguntas, reclamos, stock, publicaciones — todo cae sobre vos. No te queda tiempo para pensar en crecer.",
    tag: "Operación caótica",
  },
  {
    num: "03",
    title: "Los ADS consumen plata sin retorno",
    detail: "ACOS disparado, campañas sin optimización, presupuesto que se va sin saber exactamente a dónde.",
    tag: "ROAS negativo",
  },
  {
    num: "04",
    title: "No sabés si realmente ganás dinero",
    detail: "Sin reportes claros ni análisis de rentabilidad, tomás decisiones a ciegas. El número de ventas no dice toda la verdad.",
    tag: "Caja negra",
  },
];

export default function Problem() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".problem-label", {
        y: 16,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });
      gsap.from(".problem-headline", {
        y: 32,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        delay: 0.1,
      });
      gsap.from(".problem-card", {
        y: 28,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".problem-grid", start: "top 80%" },
        delay: 0.15,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="section-padding bg-grid" id="problema">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
          <SectionLabel className="problem-label">[01] — El Problema</SectionLabel>
          <h2 className="headline problem-headline" style={{ maxWidth: "640px" }}>
            VENDER EN MERCADO LIBRE<br />
            PARECE FÁCIL.{" "}
            <em style={{ fontStyle: "normal", color: "var(--color-accent)" }}>
              ESCALARLO, NO.
            </em>
          </h2>
        </div>

        {/* 4-column uniform grid */}
        <div
          className="problem-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2px",
            background: "var(--color-border)",
          }}
        >
          {problems.map((p) => (
            <div
              key={p.num}
              className="problem-card"
              style={{
                background: "var(--color-surface)",
                padding: "clamp(1.5rem, 2.5vw, 2rem)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Number */}
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  fontWeight: 400,
                  color: "var(--color-accent)",
                  lineHeight: 1,
                  letterSpacing: "0.02em",
                  marginBottom: "1.25rem",
                }}
              >
                {p.num}
              </div>

              {/* Title */}
              <h3 className="heading-h3-sm" style={{ marginBottom: "0.875rem" }}>
                {p.title.toUpperCase()}
              </h3>

              {/* Detail */}
              <p
                className="body-regular"
                style={{ flex: 1, position: "relative", zIndex: 1 }}
              >
                {p.detail}
              </p>

              {/* Ghost number background */}
              <div
                className="ghost-num"
                aria-hidden="true"
                style={{ position: "absolute", bottom: "-0.5rem", right: "-0.25rem", zIndex: 0 }}
              >
                {p.num}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
