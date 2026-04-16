"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import SectionHeader from "@/components/ui/SectionHeader";

const proofCards = [
  {
    stat: "9.62x",
    counterTo: 9.62, prefix: "", suffix: "x", decimals: 2,
    label: "ROAS",
    copy: "Inversión publicitaria decidida por retorno y margen.",
  },
  {
    stat: "59.2%",
    counterTo: 59.2, prefix: "", suffix: "%", decimals: 1,
    label: "CONVERSIÓN",
    copy: "Más ventas con el tráfico que la cuenta ya recibe.",
  },
  {
    stat: "+28,9%",
    counterTo: 28.9, prefix: "+", suffix: "%", decimals: 1,
    label: "CRECIMIENTO",
    copy: "Crecimiento sostenido con gestión diaria del canal.",
  },
  {
    stat: "$47M",
    counterTo: 47, prefix: "$", suffix: "M", decimals: 0,
    label: "EN UN MES",
    copy: "Publicación, pricing, tráfico y logística alineados.",
  },
];

/* Bills effect removed — replaced by global CustomCursor */

export default function Proof() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Set initial counter values
      proofCards.forEach((card, i) => {
        const el = sectionRef.current?.querySelector(`.proof-stat-${i}`) as HTMLElement | null;
        if (el) el.textContent = card.prefix + "0" + card.suffix;
      });

      gsap.from(".proof-header", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });

      gsap.from(".proof-card", {
        y: 32,
        opacity: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".proof-grid", start: "top 80%" },
        delay: 0.1,
      });

      // Counter-up for each stat
      proofCards.forEach((card, i) => {
        const el = sectionRef.current?.querySelector(`.proof-stat-${i}`) as HTMLElement | null;
        if (!el) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: card.counterTo,
          duration: 1.4,
          ease: "power2.out",
          delay: 0.2 + i * 0.1,
          scrollTrigger: { trigger: ".proof-grid", start: "top 80%" },
          onUpdate() {
            el.textContent = card.prefix + obj.val.toFixed(card.decimals) + card.suffix;
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      id="resultados-reales"
      style={{
        backgroundColor: "var(--color-surface)",
        backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      <div className="container">

        <div className="proof-header">
          <SectionHeader
            label="[03] — Prueba / Resultados"
            title={<>RESULTADOS.<br /><em className="text-accent">NO PROMESAS.</em></>}
            maxWidth="640px"
          />
          <p className="body-regular" style={{ marginTop: "-1.5rem", marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
            Métricas obtenidas en cuentas operadas.
            <br />
            El enfoque: crecimiento con rentabilidad.
          </p>
        </div>

        <div className="proof-grid grid-4">
          {proofCards.map((card, i) => (
            <div
              key={card.label}
              className="proof-card card-base-bg"
              style={{ borderTop: "3px solid var(--color-accent)", minHeight: "100%" }}
            >
              <div className={`stat-num proof-stat-${i}`} style={{ marginBottom: "0.35rem" }}>
                {card.stat}
              </div>
              <div className="mono-label">{card.label}</div>
              <hr className="row-divider" style={{ margin: "1rem 0" }} />
              <p className="body-regular" style={{ margin: 0 }}>{card.copy}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
