"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { TICKER_ITEMS } from "@/lib/data";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.1 });
      tl.from(".hero-eyebrow", { y: 12, opacity: 0, duration: 0.45 })
        .from(".hero-h1", { y: 36, opacity: 0, duration: 0.8 }, "-=0.2")
        .from(".hero-sub", { y: 16, opacity: 0, duration: 0.5 }, "-=0.4")
        .from(".hero-ctas", { y: 12, opacity: 0, duration: 0.4 }, "-=0.3")
        .from(".hero-right", { x: 40, opacity: 0, duration: 0.85, ease: "power2.out" }, "-=0.7")
        .from(".hero-chip", { y: 10, opacity: 0, duration: 0.4, stagger: 0.12 }, "-=0.4");
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="hero-section"
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0a0a0a",
        backgroundImage: "linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        borderBottom: "1px solid #1e1e1e",
        overflow: "hidden",
      }}
    >
      {/* Main content — fills remaining height after ticker */}
      <div
        className="container"
        id="hero-main"
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          paddingTop: "clamp(80px, 9vw, 108px)",
          paddingBottom: "clamp(2rem, 4vw, 3rem)",
        }}
      >
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(2rem, 5vw, 4.5rem)",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* ── LEFT ─────────────────────────────────────── */}
          <div>
            {/* Eyebrow */}
            <div className="sec-label hero-eyebrow">AGENCIA FULL-SERVICE · MERCADO LIBRE</div>

            {/* H1 */}
            <h1
              className="heading-h1 hero-h1"
              style={{ marginBottom: "1.25rem" }}
            >
              <span className="hero-mobile-line">OPERAMOS Y</span>{" "}
              <span className="hero-mobile-line">ESCALAMOS TU CUENTA</span>{" "}
              <span className="hero-mobile-line">DE MERCADO LIBRE</span>
              <br className="hero-desktop-break" />
              <span className="hero-mobile-line">CON FOCO EN</span>{" "}
              <em className="text-accent"><span className="hero-mobile-line hero-profit-line">RENTABILIDAD.</span></em>
            </h1>

            {/* Sub */}
            <p
              className="body-lg hero-sub"
              style={{ maxWidth: "460px", marginBottom: "2rem" }}
            >
              Para marcas y vendedores que ya facturan y necesitan{" "}
              <br className="hero-sub-break" />
              más ventas, mejor conversión y control real del margen,
              {" "}
              <br className="hero-sub-break" />
              sin sumar carga operativa.
            </p>

            {/* CTAs */}
            <div
              className="hero-ctas"
              style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
            >
              <Button href="#contacto">Agendar diagnóstico</Button>
              <Button variant="ghost" href="#resultados-reales">Ver resultados</Button>
            </div>
          </div>

          {/* ── RIGHT ────────────────────────────────────── */}
          <div className="hero-right" style={{ position: "relative" }}>
            <div
              className="img-scan"
              style={{
                width: "100%",
                border: "1px solid #1e1e1e",
                borderTop: "3px solid var(--color-accent)",
                lineHeight: 0,
              }}
            >
              <Image
                src="/images/photo-hero.avif"
                alt="Panel de ventas en Mercado Libre"
                width={815}
                height={414}
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>

            {/* Chip: Revenue */}
            <div
              className="hero-chip"
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "-0.75rem",
                background: "rgba(10,10,10,0.97)",
                border: "1px solid var(--color-border-bright)",
                borderLeft: "2px solid var(--color-accent)",
                padding: "0.875rem 1rem",
                minWidth: "130px",
              }}
            >
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.25rem",
                color: "var(--color-accent)",
                lineHeight: 1,
                letterSpacing: "0.02em",
              }}>+200%</div>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.875rem",
                color: "var(--color-muted-light)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginTop: "0.375rem",
              }}>Crecimiento en ventas</div>
            </div>

            {/* Chip: Growth */}
            <div
              className="hero-chip"
              style={{
                position: "absolute",
                bottom: "1.5rem",
                left: "-0.75rem",
                background: "rgba(10,10,10,0.97)",
                border: "1px solid var(--color-border-bright)",
                borderLeft: "2px solid var(--color-accent)",
                padding: "0.875rem 1rem",
                minWidth: "130px",
              }}
            >
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.25rem",
                color: "var(--color-accent)",
                lineHeight: 1,
                letterSpacing: "0.02em",
              }}>$47M</div>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.875rem",
                color: "var(--color-muted-light)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginTop: "0.375rem",
              }}>En un mes · 1 SKU</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Ticker — sits at bottom of 100vh ─────────────── */}
      <span className="sr-only">Servicios: Operación diaria, Product Ads, Brand Ads, Full y Flex, Colecta diaria, Salud de cuenta, Repricing, Reportes quincenales.</span>
      <div className="ticker-bar" aria-hidden="true">
        <div className="ticker-inner">
          {TICKER_ITEMS.map((item, i) => (
            <span key={i} className="ticker-item">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
