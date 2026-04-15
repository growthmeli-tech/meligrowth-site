"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import SectionHeader from "@/components/ui/SectionHeader";
import { steps } from "@/lib/data";

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".process-header", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });
      gsap.from(".step-card", {
        y: 36,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".steps-grid", start: "top 80%" },
        delay: 0.1,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="section-padding bg-dots" id="como-funciona">
      <div className="container">

        <SectionHeader
          label="[03] — El Proceso"
          title={<>EMPEZAR ES{" "}<em className="text-accent">SIMPLE</em></>}
          className="process-header"
        />

        <div className="steps-grid grid-4">
          {steps.map((s) => (
            <div key={s.num} className="step-card" style={{ display: "flex", flexDirection: "column" }}>
              <div className="ghost-num" aria-hidden="true" style={{ position: "absolute", bottom: "-0.5rem", right: "0.5rem" }}>
                {s.num}
              </div>

              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
                  <span className="mono-label">{s.num}</span>
                  <span className="step-tag">{s.tag}</span>
                </div>

                <h3 className="heading-h3" style={{ marginBottom: "0.875rem" }}>{s.title.toUpperCase()}</h3>

                <p className="body-regular">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
