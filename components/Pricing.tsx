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
    fee: "USD 500",
    share: "Fee fijo + 10% sell-out",
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
    fee: "USD 750",
    share: "Fee fijo + 8% sell-out",
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
    fee: "USD 1000",
    share: "Fee fijo + 7% sell-out",
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
          <h2 className="headline" style={{ maxWidth: "600px" }}>
            PLANES QUE SE ADAPTAN{" "}
            <em style={{ fontStyle: "normal", color: "var(--color-accent)" }}>
              A TU ESCALA
            </em>
          </h2>
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
              {/* Plan name + badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.75rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.18em",
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

              {/* Price — hero element */}
              <div style={{ marginBottom: "0.625rem" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(3rem, 5vw, 4rem)",
                    fontWeight: 400,
                    color: tier.featured ? "var(--color-accent)" : "var(--color-text)",
                    lineHeight: 1,
                    letterSpacing: "0.02em",
                  }}
                >
                  {tier.fee}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginTop: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--color-muted)",
                    }}
                  >
                    /mes
                  </span>
                  <span style={{ color: "var(--color-border-bright)" }}>·</span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--color-muted)",
                    }}
                  >
                    {tier.share}
                  </span>
                </div>
              </div>

              <hr className="row-divider" style={{ margin: "1.25rem 0" }} />

              {/* Volume range */}
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-muted-light)",
                  marginBottom: "1.5rem",
                }}
              >
                Facturación {tier.range}
              </div>

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


      </div>
    </section>
  );
}
