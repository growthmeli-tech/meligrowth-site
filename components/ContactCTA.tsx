"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [calendlyHeight, setCalendlyHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.origin !== "https://calendly.com") return;
      const height = e.data?.payload?.height;
      if (height && height > 0) {
        setCalendlyHeight(height);
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  useGSAP(
    () => {
      const trigger = { trigger: sectionRef.current, start: "top 72%" };

      gsap.from(".cta-headline", {
        y: 30, opacity: 0, duration: 0.8, ease: "power3.out", scrollTrigger: trigger,
      });
      gsap.from(".cta-calendly", {
        y: 24, opacity: 0, duration: 0.75, ease: "power3.out",
        scrollTrigger: trigger, delay: 0.25,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="contacto"
      style={{
        backgroundColor: "var(--color-surface)",
        backgroundImage: "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        padding: "clamp(48px, 10vw, 140px) 0",
      }}
    >
      <div className="container">
        <div style={{ marginBottom: "2rem" }}>
          <SectionHeader
            label="[09] — Empezá Hoy"
            title={<>¿LISTO PARA ESCALAR<br /><em className="text-accent">TU CUENTA?</em></>}
            className="cta-headline"
          />
        </div>

        <p className="body-lg" style={{ marginBottom: "2.5rem", maxWidth: "560px", color: "var(--color-muted)" }}>
          Elegí el día y horario que mejor te quede. La reunión es por videollamada y dura 30 minutos. Sin costo, sin compromiso.
        </p>

        <div className="cta-calendly" style={{ overflow: "hidden", height: calendlyHeight ?? "auto" }}>
          <iframe
            src="https://calendly.com/growthmeli/30min?primary_color=ffda00&hide_gdpr_banner=1&locale=es"
            width="100%"
            height={calendlyHeight ?? "100%"}
            scrolling="no"
            frameBorder={0}
            style={{ border: "none", borderRadius: "2px", display: "block", minHeight: "600px" }}
            title="Agendá una llamada con Meli Growth"
          />
        </div>
      </div>
    </section>
  );
}
