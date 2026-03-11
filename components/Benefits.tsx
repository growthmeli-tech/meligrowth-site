"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import SectionLabel from "@/components/ui/SectionLabel";

const features = [
  {
    num: "01",
    before: "Perdías tiempo en el día a día",
    after: "TE ENFOCÁS EN TU NEGOCIO",
    detail: "Operación diaria delegada: preguntas, reclamos, publicaciones, stock. Todo cubierto.",
  },
  {
    num: "02",
    before: "Los ADS gastaban sin retorno claro",
    after: "ROAS OPTIMIZADO Y TRANSPARENTE",
    detail: "Campañas gestionadas con foco en ACOS real. Sabés exactamente cuánto gastás y cuánto ganás.",
  },
  {
    num: "03",
    before: "Logística como cuello de botella",
    after: "FULL + FLEX SIN FRICCIÓN",
    detail: "Depósito especializado, colecta diaria y gestión de envíos integrada. Sin excusas.",
  },
  {
    num: "04",
    before: "Sin datos para tomar decisiones",
    after: "REPORTES CLAROS CADA 15 DÍAS",
    detail: "Performance de ventas, publicidad y rentabilidad en un solo reporte. Sin cajas negras.",
  },
];

export default function Benefits() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".benefits-header", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });
      gsap.from(".benefit-card", {
        y: 32,
        opacity: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".benefits-grid", start: "top 80%" },
        delay: 0.1,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="section-padding bg-grid" id="beneficios">
      <div className="container">

        <div className="benefits-header" style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
          <SectionLabel>[05] — Lo Que Cambia</SectionLabel>
          <h2 className="headline">
            ANTES Y DESPUÉS DE<br />TRABAJAR CON{" "}
            <em style={{ fontStyle: "normal", color: "var(--color-accent)" }}>NOSOTROS</em>
          </h2>
        </div>

        <div
          className="benefits-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2px",
            background: "var(--color-border)",
          }}
        >
          {features.map((f) => (
            <div
              key={f.num}
              className="benefit-card"
              style={{
                background: "var(--color-surface)",
                padding: "clamp(1.75rem, 3vw, 2.5rem)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Before block */}
              <div
                style={{
                  marginBottom: "1.75rem",
                  paddingBottom: "1.75rem",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                {/* Antes label */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                  <div style={{
                    width: "1.25rem", height: "1.25rem", borderRadius: "50%",
                    background: "rgba(239,68,68,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1 1l6 6M7 1L1 7" stroke="#ef4444" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: "0.75rem",
                    letterSpacing: "0.16em", textTransform: "uppercase",
                    color: "var(--color-muted-light)",
                  }}>
                    Antes
                  </span>
                </div>
                <p style={{
                  margin: 0, fontFamily: "var(--font-sans)",
                  fontSize: "0.9375rem", color: "var(--color-muted)", lineHeight: 1.5,
                }}>
                  {f.before}
                </p>
              </div>

              {/* Ahora label */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                <div style={{
                  width: "1.25rem", height: "1.25rem", borderRadius: "50%",
                  background: "rgba(255,214,0,0.12)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1 4l2 2.5L7 1.5" stroke="var(--color-accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: "0.75rem",
                  letterSpacing: "0.16em", textTransform: "uppercase",
                  color: "var(--color-muted-light)",
                }}>
                  Ahora
                </span>
              </div>

              {/* After — hero */}
              <h3 className="heading-h3" style={{ marginBottom: "0.875rem", position: "relative", zIndex: 1 }}>
                {f.after}
              </h3>

              {/* Detail */}
              <p
                className="body-regular"
                style={{
                  margin: 0,
                  flex: 1,
                  maxWidth: "480px",
                  position: "relative",
                  zIndex: 1,
                  color: "var(--color-muted-light)",
                }}
              >
                {f.detail}
              </p>

              {/* Ghost number */}
              <div
                className="ghost-num"
                aria-hidden="true"
                style={{ position: "absolute", bottom: "-0.5rem", right: "-0.25rem", zIndex: 0 }}
              >
                {f.num}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
