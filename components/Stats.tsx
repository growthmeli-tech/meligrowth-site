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
      <div className="stats-band" style={{ background: "var(--color-accent)" }}>
        <div className="container" style={{ paddingBlock: "clamp(3rem, 6vw, 5rem)" }}>
          <div
            className="stats-band-inner"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(2rem, 6vw, 5rem)",
              alignItems: "center",
            }}
          >
            {/* Left: headline */}
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
                fontWeight: 400,
                color: "var(--color-bg)",
                lineHeight: 1,
                letterSpacing: "0.01em",
                margin: 0,
              }}
            >
              RESULTADOS QUE<br />HABLAN POR SÍ SOLOS
            </h2>

            {/* Right: 2×2 stat grid */}
            <div
              className="stats-cells"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "2px",
                background: "rgba(0,0,0,0.15)",
              }}
            >
              {stats.map((s) => (
                <div
                  key={s.value}
                  className="stat-cell"
                  style={{ background: "var(--color-accent)" }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                      fontWeight: 400,
                      color: "var(--color-bg)",
                      lineHeight: 1,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "rgba(0,0,0,0.6)",
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
          </div>
        </div>
      </div>
    </section>
  );
}
