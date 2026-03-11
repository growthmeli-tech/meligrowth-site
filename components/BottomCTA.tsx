"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Button from "@/components/ui/Button";

export default function BottomCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".bottom-cta-inner", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        padding: "clamp(60px, 8vw, 100px) 0",
        textAlign: "center",
      }}
    >
      <div className="container bottom-cta-inner">
        <h2
          className="headline"
          style={{ marginBottom: "1.25rem" }}
        >
          ¿CUÁNTO ESTÁS DEJANDO DE{" "}
          <em style={{ fontStyle: "normal", color: "var(--color-accent)" }}>
            FACTURAR?
          </em>
        </h2>

        <p
          className="body-regular"
          style={{ margin: "0 auto 2rem", maxWidth: "420px" }}
        >
          Descubrilo con un diagnóstico gratuito. 48 horas, sin costo, sin compromiso.
        </p>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button href="#contacto">Pedí tu diagnóstico gratis</Button>
        </div>
      </div>
    </section>
  );
}
