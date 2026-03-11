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
      gsap.from(".transform-row", {
        y: 28,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".features-list", start: "top 80%" },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="section-padding bg-grid" id="beneficios">
      <div className="container">
        <div className="benefits-header" style={{ marginBottom: "clamp(3rem, 5vw, 5rem)" }}>
          <SectionLabel>[05] — Lo Que Cambia</SectionLabel>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
            <h2 className="headline">
              ANTES Y DESPUÉS DE<br />TRABAJAR CON{" "}
              <em style={{ fontStyle: "normal", color: "var(--color-accent)" }}>NOSOTROS</em>
            </h2>
            <p className="body-regular" style={{ maxWidth: "340px", margin: 0 }}>
              Cada servicio que entregamos se traduce en un cambio real y medible para tu cuenta.
            </p>
          </div>
        </div>

        <div className="features-list">
          {features.map((f, i) => (
            <div key={f.num}>
              <div className="transform-row" style={{ padding: "clamp(2rem, 3.5vw, 3rem) 0" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto 1.6fr",
                    gap: "clamp(1.5rem, 3vw, 3rem)",
                    alignItems: "center",
                  }}
                >
                  {/* ── BEFORE ── */}
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "var(--color-muted)",
                        marginBottom: "0.875rem",
                      }}
                    >
                      {f.num} · Antes
                    </div>
                    <p
                      className="body-regular"
                      style={{
                        margin: 0,
                        lineHeight: 1.5,
                        textDecoration: "line-through",
                        textDecorationColor: "var(--color-muted)",
                      }}
                    >
                      {f.before}
                    </p>
                  </div>

                  {/* ── ARROW ── */}
                  <div
                    className="arrow-sep"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "2.5rem",
                      height: "2.5rem",
                      border: "1px solid var(--color-border-bright)",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* ── AFTER ── */}
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "var(--color-accent)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Con ML Growth
                    </div>
                    <h3 className="heading-h3" style={{ marginBottom: "0.75rem" }}>
                      {f.after}
                    </h3>
                    <p
                      className="body-regular"
                      style={{ maxWidth: "420px", margin: 0 }}
                    >
                      {f.detail}
                    </p>
                  </div>
                </div>
              </div>
              {i < features.length - 1 && <hr className="row-divider" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
