"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  CALENDLY_INTENT_KEY,
  GOOGLE_ADS_CONVERSION_SEND_TO,
  trackGoogleEvent,
} from "@/lib/tracking";

export default function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const calendlyConversionSentRef = useRef(false);
  const [calendlyHeight, setCalendlyHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const isCalendlyScheduledEvent = (event: MessageEvent) => (
      event.origin === "https://calendly.com" &&
      event.data &&
      typeof event.data === "object" &&
      event.data.event === "calendly.event_scheduled"
    );

    const sendGoogleAdsConversion = () => {
      if (calendlyConversionSentRef.current) return;

      if (typeof window.gtag !== "function") {
        console.warn("[Calendly Conversion] gtag no está disponible");
        return;
      }

      calendlyConversionSentRef.current = true;

      window.gtag("event", "conversion", {
        send_to: GOOGLE_ADS_CONVERSION_SEND_TO,
      });

      console.log("[Calendly Conversion] Conversión enviada a Google Ads");
    };

    const handler = (e: MessageEvent) => {
      if (e.origin !== "https://calendly.com") return;

      const height = e.data?.payload?.height;
      if (height && height > 0) {
        setCalendlyHeight(height);
      }

      const calendlyEvent = e.data?.event;
      if (calendlyEvent === "calendly.date_and_time_selected") {
        const alreadyTracked = sessionStorage.getItem(CALENDLY_INTENT_KEY);
        if (!alreadyTracked) {
          trackGoogleEvent("calendly_date_time_selected", {
            event_category: "engagement",
            event_label: "embedded_calendly",
          });
          sessionStorage.setItem(CALENDLY_INTENT_KEY, "true");
        }
      }

      if (isCalendlyScheduledEvent(e)) {
        sendGoogleAdsConversion();
        sessionStorage.removeItem(CALENDLY_INTENT_KEY);
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
            label="[06] — CTA Final"
            title={<>SI TU CUENTA YA FACTURA,<br />EL PRÓXIMO PASO ES HACERLA{" "}<em className="text-accent">MÁS RENTABLE.</em></>}
            className="cta-headline"
          />
        </div>

        <p className="body-lg" style={{ marginBottom: "2.5rem", maxWidth: "560px", color: "var(--color-muted)" }}>
          Coordiná una reunión de diagnóstico.
          <br />
          Analizamos tu cuenta y definimos si hay potencial real de mejora.
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
