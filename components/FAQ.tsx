"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import SectionLabel from "@/components/ui/SectionLabel";

const faqs: { q: string; a: string }[] = [
  {
    q: "¿Cuánto tarda en verse resultados?",
    a: "Los primeros indicadores mejoran entre la semana 2 y 4, tras optimizar publicaciones y reestructurar campañas. Resultados de escala real: 3 a 6 meses.",
  },
  {
    q: "¿Necesitan acceso a mi cuenta?",
    a: "Sí. Operamos con acceso colaborador desde el panel oficial de Mercado Libre. No hay transferencia de titularidad ni riesgo para tu cuenta.",
  },
  {
    q: "¿Hay permanencia mínima?",
    a: "No. Operamos sin contratos largos. Si no estás conforme con los resultados, podés cortar cuando quieras.",
  },
  {
    q: "¿Con qué categorías trabajan?",
    a: "Electrónica, hogar, deportes, herramientas, indumentaria y más. La metodología aplica a cualquier categoría de Mercado Libre Argentina.",
  },
  {
    q: "¿Cómo son los reportes?",
    a: "Cada 15 días recibís un informe completo: ventas, publicidad, rentabilidad por producto y plan de acción. Sin cajas negras.",
  },
  {
    q: "Mi cuenta ya factura bien, ¿vale la pena?",
    a: "Más facturación significa más potencial de optimización. Las cuentas grandes suelen tener el mayor margen de mejora en ADS y expansión de catálogo.",
  },
];

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
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="faq-header" style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
          <SectionLabel>[07] — FAQ</SectionLabel>
          <h2 className="headline" style={{ maxWidth: "600px" }}>
            PREGUNTAS{" "}
            <em style={{ fontStyle: "normal", color: "var(--color-accent)" }}>
              FRECUENTES
            </em>
          </h2>
        </div>

        {/* 2-column grid */}
        <div
          className="faq-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2px",
            background: "var(--color-border)",
          }}
        >
          {faqs.map((item, i) => (
            <div
              key={i}
              className="faq-card"
              style={{
                background: "var(--color-bg)",
                padding: "clamp(1.5rem, 2.5vw, 2rem)",
              }}
            >
              {/* Mono index label */}
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-muted-light)",
                  marginBottom: "1.25rem",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Question */}
              <h3 className="heading-h3-sm" style={{ marginBottom: "0.75rem" }}>
                {item.q}
              </h3>

              {/* Answer */}
              <p className="body-regular">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
