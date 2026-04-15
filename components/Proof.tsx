"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

const proofCards = [
  {
    num: "01",
    image: "/images/section5-1.avif",
    stat: "9.62x",
    counterTo: 9.62, prefix: "", suffix: "x", decimals: 2,
    label: "ROAS",
    copy: "Tu publicidad con nosotros sí tiene ROI. ACOS 10.39% — cada peso invertido en ads trabaja.",
    alt: "Dashboard de publicidad — ROAS 9.62x, ACOS 10.39%, febrero 2026",
  },
  {
    num: "02",
    image: "/images/section5-2.avif",
    stat: "59.2%",
    counterTo: 59.2, prefix: "", suffix: "%", decimals: 1,
    label: "CONVERSIÓN",
    copy: "De intención de compra a venta efectiva. Publicaciones optimizadas para que quien llega, compre.",
    alt: "Embudo de conversión — 59.2% de tasa de cierre",
  },
  {
    num: "03",
    image: "/images/section5-3.avif",
    stat: "+28,9%",
    counterTo: 28.9, prefix: "+", suffix: "%", decimals: 1,
    label: "CRECIMIENTO",
    copy: "Crecimiento de ventas brutas respecto al período anterior. Es el resultado de optimización y gestión constante.",
    alt: "Resumen de desempeño — crecimiento +5.760% en ventas brutas",
  },
  {
    num: "04",
    image: "/images/section5-4.avif",
    stat: "$47M",
    counterTo: 47, prefix: "$", suffix: "M", decimals: 0,
    label: "EN UN MES",
    copy: "Un único SKU, un único mes, bien operado. Así se ve una publicación optimizada al máximo. No es promesa son datos.",
    alt: "Dashboard de ventas — $47M en febrero 2026",
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
            label="[05] — Resultados Reales"
            title={<>NÚMEROS QUE HABLAN{" "}<em className="text-accent">POR SÍ SOLOS</em></>}
            maxWidth="640px"
          />
          <p className="body-regular" style={{ marginTop: "-1.5rem", marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
            Datos reales de una cuenta que gestionamos. Sin filtros.
          </p>
        </div>

        <div className="proof-grid grid-2">
          {proofCards.map((card, i) => (
            <div
              key={card.num}
              className="proof-card"
              style={{ background: "var(--color-bg)", display: "flex", flexDirection: "column" }}
            >
              <div style={{ borderBottom: "1px solid var(--color-border)" }}>
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={1482}
                  height={804}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>

              <div style={{ padding: "clamp(1.25rem, 2.5vw, 1.75rem)" }}>
                <span className="mono-label">{card.num}</span>
                <div className={`stat-num proof-stat-${i}`} style={{ marginTop: "0.5rem", marginBottom: "0.25rem" }}>
                  {card.stat}
                </div>
                <div className="mono-label">{card.label}</div>
                <hr className="row-divider" style={{ margin: "1.25rem 0" }} />
                <p className="body-regular" style={{ margin: 0 }}>{card.copy}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
