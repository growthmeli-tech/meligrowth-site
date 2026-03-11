"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

const pillars = [
  {
    num: "01",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Operación",
    subtitle: "Tu cuenta, en manos expertas",
    description: "Nos hacemos cargo del día a día para que vos puedas enfocarte en lo que importa: crecer.",
    bullets: [
      "Atención al cliente 7 días",
      "Gestión de publicaciones y stock",
      "Salud de cuenta y métricas de reputación",
      "Respuesta a reclamos y mediaciones",
    ],
    image: "/images/dashboard2.png",
  },
  {
    num: "02",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Crecimiento",
    subtitle: "Más ventas, más rentabilidad",
    description: "Estrategia de publicidad y contenido orientada a resultados medibles, no a vanity metrics.",
    bullets: [
      "Product Ads y Brand Ads gestionados",
      "Optimización de ACOS / ROAS",
      "Contenido visual de producto",
      "Catálogo y fichas optimizadas",
    ],
    image: "/images/dashboard3-v2.png",
  },
  {
    num: "03",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="1" y="3" width="15" height="13" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 8l4 2v5h-4V8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="5.5" cy="18.5" r="1.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="18.5" cy="18.5" r="1.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    title: "Infraestructura",
    subtitle: "Logística y números claros",
    description: "Full, Flex y contabilidad operando en sincronía. Sin cuellos de botella, sin sorpresas.",
    bullets: [
      "Depósito especializado para Full",
      "Colecta diaria · Flex integrado",
      "Reportes quincenales de rentabilidad",
      "Contabilidad e informes de gestión",
    ],
    image: "/images/dashboard4.png",
  },
];

export default function Solution() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".solution-header", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });
      gsap.from(".pillar-card", {
        y: 40,
        opacity: 0,
        duration: 0.65,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".pillars-grid", start: "top 80%" },
        delay: 0.1,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      id="solucion"
      style={{
        backgroundColor: "var(--color-surface)",
        backgroundImage: "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="solution-header" style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
          <SectionLabel>[02] — La Solución</SectionLabel>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            <h2 className="headline" style={{ maxWidth: "560px" }}>
              TODO LO QUE NECESITA<br />
              <em style={{ fontStyle: "normal", color: "var(--color-accent)" }}>
                TU CUENTA,
              </em>{" "}
              EN UN SOLO LUGAR
            </h2>
            <p className="body-regular" style={{ maxWidth: "320px", margin: 0 }}>
              Un equipo completo operando tu cuenta en Mercado Libre — sin que tengas que coordinar nada.
            </p>
          </div>
        </div>

        {/* 3-pillar grid */}
        <div
          className="pillars-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
            background: "var(--color-border)",
          }}
        >
          {pillars.map((p) => (
            <div
              key={p.num}
              className="pillar-card"
              style={{
                background: "var(--color-bg)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Card image */}
              <div
                className="img-scan"
                style={{
                  borderBottom: "1px solid var(--color-border)",
                  height: "200px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  width={1200}
                  height={700}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Card body */}
              <div style={{ padding: "clamp(1.25rem, 2.5vw, 1.75rem)", flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Icon + num row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div className="svc-icon" style={{ color: "var(--color-accent)" }}>
                    {p.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.55rem",
                      letterSpacing: "0.2em",
                      color: "var(--color-muted)",
                    }}
                  >
                    {p.num}
                  </span>
                </div>

                {/* Title */}
                <h3 className="heading-h3" style={{ marginBottom: "0.35rem" }}>
                  {p.title.toUpperCase()}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.12em",
                    color: "var(--color-accent)",
                    textTransform: "uppercase",
                    marginBottom: "0.875rem",
                  }}
                >
                  {p.subtitle}
                </p>

                {/* Description */}
                <p className="body-regular" style={{ marginBottom: "1.25rem" }}>
                  {p.description}
                </p>

                {/* Bullet list */}
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    marginTop: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    borderTop: "1px solid var(--color-border)",
                    paddingTop: "1rem",
                  }}
                >
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="body-regular"
                      style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}
                    >
                      <span
                        style={{
                          color: "var(--color-accent)",
                          flexShrink: 0,
                          marginTop: "0.15rem",
                          fontSize: "0.75rem",
                        }}
                      >
                        ▸
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
