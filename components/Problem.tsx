"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import SectionHeader from "@/components/ui/SectionHeader";
import CTAFooter from "@/components/ui/CTAFooter";
import { problems } from "@/lib/data";

export default function Problem() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".problem-header", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });
      gsap.from(".problem-card", {
        y: 28,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".problem-grid", start: "top 80%" },
        delay: 0.15,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="section-padding bg-grid" id="problema">
      <div className="container">

        <SectionHeader
          label="[01] — El Problema"
          title={<>VENDER EN MERCADO LIBRE<br />PARECE FÁCIL.{" "}<em className="text-accent">ESCALAR, NO.</em></>}
          maxWidth="640px"
          className="problem-header"
        />

        <div className="problem-grid grid-4">
          {problems.map((p) => (
            <div
              key={p.num}
              className="problem-card card-base"
              style={{ position: "relative", overflow: "hidden" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  fontWeight: 400,
                  color: "var(--color-accent)",
                  lineHeight: 1,
                  letterSpacing: "0.02em",
                  marginBottom: "1.25rem",
                }}
              >
                {p.num}
              </div>

              <h3 className="heading-h3-sm" style={{ marginBottom: "0.875rem" }}>
                {p.title.toUpperCase()}
              </h3>

              <p className="body-regular" style={{ flex: 1, position: "relative", zIndex: 1 }}>
                {p.detail}
              </p>

              <div
                className="ghost-num"
                aria-hidden="true"
                style={{ position: "absolute", bottom: "-0.5rem", right: "-0.25rem", zIndex: 0 }}
              >
                {p.num}
              </div>
            </div>
          ))}
        </div>

        <CTAFooter disclaimer="Sin costo ni compromiso" />

      </div>
    </section>
  );
}
