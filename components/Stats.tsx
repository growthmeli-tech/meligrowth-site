"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import SectionLabel from "@/components/ui/SectionLabel";

const stats = [
  { value: "+38%", label: "Incremento en ventas promedio" },
  { value: "72hs", label: "Tiempo de onboarding" },
  { value: "Platinum", label: "Reputación objetivo" },
  { value: "+120", label: "Publicaciones optimizadas" },
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".stats-band", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
      gsap.from(".stat-cell", {
        scale: 0.93,
        opacity: 0,
        duration: 0.55,
        stagger: 0.1,
        ease: "back.out(1.5)",
        scrollTrigger: { trigger: ".stats-cells", start: "top 80%" },
        delay: 0.1,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="estadisticas" aria-label="Estadísticas">
      {/* Yellow band — full bleed */}
      <div className="stats-band" style={{ background: "var(--color-accent)" }}>
        <div className="container" style={{ paddingBlock: "clamp(2rem, 4vw, 3rem)" }}>
          <div
            className="stats-band-inner"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 400,
                color: "var(--color-bg)",
                lineHeight: 1,
                letterSpacing: "0.01em",
                margin: 0,
              }}
            >
              RESULTADOS QUE<br />HABLAN POR SÍ SOLOS
            </h2>

            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  color: "#0a0a0a",
                  lineHeight: 1,
                  letterSpacing: "0.02em",
                }}
              >
                $1.100.000.000
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "rgba(0,0,0,0.65)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  marginTop: "0.4rem",
                }}
              >
                Facturado en 9 meses
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats grid — constrained to container max */}
      <div
        className="stats-cells"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2px",
          background: "var(--color-border)",
          maxWidth: "var(--container-max)",
          marginInline: "auto",
        }}
      >
        {stats.map((s) => (
          <div key={s.value} className="stat-cell">
            <div className="stat-num">{s.value}</div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                fontWeight: 400,
                color: "var(--color-muted-light)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                lineHeight: 1.5,
                marginTop: "0.4rem",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
