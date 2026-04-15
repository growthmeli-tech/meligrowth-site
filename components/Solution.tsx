"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureList from "@/components/ui/FeatureList";
import { pillars } from "@/lib/data";

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

        <SectionHeader
          label="[02] — La Solución"
          title={<>TODO LO QUE NECESITA<br /><em className="text-accent">TU CUENTA,</em>{" "}EN UN SOLO LUGAR</>}
          maxWidth="560px"
          className="solution-header"
        />

        <div className="pillars-grid grid-3">
          {pillars.map((p) => (
            <div key={p.num} className="pillar-card" style={{ background: "var(--color-bg)", display: "flex", flexDirection: "column" }}>
              <div
                className="img-scan"
                style={{ borderBottom: "1px solid var(--color-border)", height: "200px", overflow: "hidden" }}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  width={1200}
                  height={700}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div style={{ padding: "clamp(1.25rem, 2.5vw, 1.75rem)", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <div className="svc-icon" style={{ color: "var(--color-accent)" }}>{p.icon}</div>
                  <span className="mono-label">{p.num}</span>
                </div>

                <h3 className="heading-h3" style={{ marginBottom: "0.875rem" }}>{p.title.toUpperCase()}</h3>

                <p className="body-regular" style={{ marginBottom: "1.25rem" }}>{p.description}</p>

                <FeatureList items={p.bullets} hasDivider />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
