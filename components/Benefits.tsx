"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import SectionHeader from "@/components/ui/SectionHeader";
import CTAFooter from "@/components/ui/CTAFooter";
import { features } from "@/lib/data";

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

        <SectionHeader
          label="[06] — Lo Que Cambia"
          title={<>ANTES Y DESPUÉS DE<br />TRABAJAR CON{" "}<em className="text-accent">NOSOTROS</em></>}
          className="benefits-header"
        />

        <div className="benefits-grid grid-2">
          {features.map((f) => (
            <div
              key={f.num}
              className="benefit-card card-base"
              style={{ padding: "clamp(1.75rem, 3vw, 2.5rem)", position: "relative", overflow: "hidden" }}
            >
              {/* Before block */}
              <div style={{ marginBottom: "1.75rem", paddingBottom: "1.75rem", borderBottom: "1px solid var(--color-border)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                  <div className="icon-badge icon-badge-error">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1 1l6 6M7 1L1 7" stroke="#ef4444" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="mono-label">Antes</span>
                </div>
                <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-muted)", lineHeight: 1.5 }}>
                  {f.before}
                </p>
              </div>

              {/* Ahora label */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                <div className="icon-badge icon-badge-accent">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1 4l2 2.5L7 1.5" stroke="var(--color-accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="mono-label">Ahora</span>
              </div>

              <h3 className="heading-h3" style={{ marginBottom: "0.875rem", position: "relative", zIndex: 1 }}>{f.after}</h3>

              <p className="body-regular" style={{ margin: 0, flex: 1, maxWidth: "480px", position: "relative", zIndex: 1, color: "var(--color-muted-light)" }}>
                {f.detail}
              </p>

              <div className="ghost-num" aria-hidden="true" style={{ position: "absolute", bottom: "-0.5rem", right: "-0.25rem", zIndex: 0 }}>
                {f.num}
              </div>
            </div>
          ))}
        </div>

        <CTAFooter disclaimer="Sin costo ni compromiso" />

      </div>
    </section>
  );
}
