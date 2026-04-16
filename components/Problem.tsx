"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import SectionHeader from "@/components/ui/SectionHeader";
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
          title={<>TU CUENTA VENDE.<br />PERO NO ESTÁ OPTIMIZADA{" "}<em className="text-accent">COMO NEGOCIO.</em></>}
          maxWidth="720px"
          className="problem-header"
        />

        <div className="problem-grid grid-3">
          {problems.map((p) => (
            <div
              key={p.title}
              className="problem-card card-base"
              style={{ position: "relative", overflow: "hidden" }}
            >
              <h3 className="heading-h3-sm" style={{ marginBottom: "0.75rem" }}>
                {p.title.toUpperCase()}
              </h3>

              <p className="body-regular" style={{ flex: 1, position: "relative", zIndex: 1 }}>
                {p.detail}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
