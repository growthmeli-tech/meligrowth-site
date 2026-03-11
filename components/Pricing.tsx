"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const tiers = [
  {
    id: "starter",
    name: "STARTER",
    range: "Menos de $2M / mes",
    fee: "Consultar",
    share: "Fee fijo mensual",
    featured: false,
    features: [
      "Operación diaria completa",
      "Gestión de publicaciones",
      "Atención al cliente 7 días",
      "Reporte quincenal",
      "Salud de cuenta",
    ],
    ctaVariant: "ghost" as const,
  },
  {
    id: "growth",
    name: "GROWTH",
    range: "$2M – $10M / mes",
    fee: "Consultar",
    share: "Fee + % del sell-out",
    featured: true,
    features: [
      "Todo lo del plan Starter",
      "Product Ads y Brand Ads",
      "Optimización ACOS / ROAS",
      "Contenido visual de producto",
      "Repricing dinámico",
      "Análisis de rentabilidad por SKU",
    ],
    ctaVariant: "primary" as const,
  },
  {
    id: "scale",
    name: "SCALE",
    range: "Más de $10M / mes",
    fee: "Consultar",
    share: "Fee + % (menor porcentaje)",
    featured: false,
    features: [
      "Todo lo del plan Growth",
      "Account manager dedicado",
      "Expansión de catálogo",
      "Full + Flex gestionado",
      "Forecasting y proyecciones",
      "Soporte prioritario",
    ],
    ctaVariant: "ghost" as const,
  },
];

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

        {/* Header */}
        <div className="pricing-header" style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
          <SectionLabel>[06] — Precios</SectionLabel>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            <h2 className="headline" style={{ maxWidth: "600px" }}>
              PLANES QUE SE ADAPTAN{" "}
              <em style={{ fontStyle: "normal", color: "var(--color-accent)" }}>
                A TU ESCALA
              </em>
            </h2>
            <p className="body-regular" style={{ maxWidth: "320px", margin: 0 }}>
              Sin contratos largos ni estructuras fijas. El modelo de trabajo se ajusta a tu volumen de ventas.
            </p>
          </div>
        </div>

        {/* 3-column pricing grid */}
        <div
          className="pricing-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
            background: "var(--color-border)",
          }}
        >
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="pricing-card"
              style={{
                background: "var(--color-surface)",
                padding: "clamp(1.5rem, 2.5vw, 2rem)",
                display: "flex",
                flexDirection: "column",
                borderTop: tier.featured
                  ? "3px solid var(--color-accent)"
                  : "3px solid transparent",
              }}
            >
              {/* Tier label row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--color-muted-light)",
                  }}
                >
                  {tier.name}
                </span>
                {tier.featured && (
                  <span className="tag tag-accent">Recomendado</span>
                )}
              </div>

              {/* Volume range */}
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-muted-light)",
                  marginBottom: "0.5rem",
                }}
              >
                Volumen
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)",
                  fontWeight: 400,
                  color: "var(--color-accent)",
                  lineHeight: 1,
                  letterSpacing: "0.02em",
                  marginBottom: "0.75rem",
                }}
              >
                {tier.range}
              </div>

              <hr className="row-divider" style={{ marginBottom: "1.25rem" }} />

              {/* Fee + model */}
              <div style={{ marginBottom: "1.5rem" }}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--color-muted-light)",
                    marginBottom: "0.4rem",
                  }}
                >
                  Inversión
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                    fontWeight: 400,
                    color: "var(--color-text)",
                    lineHeight: 1,
                    letterSpacing: "0.02em",
                    marginBottom: "0.35rem",
                  }}
                >
                  {tier.fee}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--color-muted)",
                  }}
                >
                  {tier.share}
                </div>
              </div>

              <hr className="row-divider" style={{ marginBottom: "1.25rem" }} />

              {/* Feature list */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  flex: 1,
                  marginBottom: "2rem",
                }}
              >
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--color-accent)",
                        flexShrink: 0,
                        marginTop: "0.15rem",
                        fontSize: "0.6rem",
                      }}
                    >
                      ▸
                    </span>
                    <span className="body-regular">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div>
                <Button
                  variant={tier.ctaVariant}
                  href="#contacto"
                  full
                >
                  Consultar
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer note */}
        <div
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderLeft: "2px solid var(--color-accent)",
            padding: "1rem 1.25rem",
            marginTop: "2px",
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-muted-light)",
          }}
        >
          Todos los planes incluyen diagnóstico gratuito inicial. Sin contratos largos — operamos sin ataduras.
        </div>

      </div>
    </section>
  );
}
