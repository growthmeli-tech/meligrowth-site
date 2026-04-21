"use client";

import { useRef, useState, useEffect } from "react";
import Script from "next/script";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import SectionHeader from "@/components/ui/SectionHeader";
import { GOOGLE_ADS_CONVERSION_SEND_TO } from "@/lib/tracking";

const CALENDLY_URL = "https://calendly.com/growthmeli/30min?primary_color=ffda00&hide_gdpr_banner=1&locale=es";

export default function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const calendlyConversionSentRef = useRef(false);
  const calendlyConversionPendingRef = useRef(false);
  const [calendlyHeight, setCalendlyHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const isCalendlyScheduledEvent = (event: MessageEvent) => {
      return (
        event.origin === "https://calendly.com" &&
        event.data &&
        typeof event.data === "object" &&
        event.data.event === "calendly.event_scheduled"
      );
    };

    const sendGoogleAdsConversion = (attempt = 0) => {
      if (calendlyConversionSentRef.current) return;

      if (typeof window.gtag !== "function") {
        if (attempt < 10) {
          window.setTimeout(() => sendGoogleAdsConversion(attempt + 1), 300);
          return;
        }

        calendlyConversionPendingRef.current = false;
        console.warn("[Calendly Conversion] gtag no está disponible");
        return;
      }

      calendlyConversionSentRef.current = true;
      calendlyConversionPendingRef.current = false;

      window.gtag("event", "conversion", {
        send_to: GOOGLE_ADS_CONVERSION_SEND_TO,
        value: 1.0,
        currency: "ARS",
      });

      console.log("[Calendly Conversion] Conversión enviada a Google Ads");
    };

    const handler = (e: MessageEvent) => {
      if (e.origin !== "https://calendly.com") return;

      const height = Number.parseInt(e.data?.payload?.height, 10);
      if (height > 0) {
        setCalendlyHeight(height);
      }

      if (isCalendlyScheduledEvent(e)) {
        console.log("[Calendly Conversion] Evento calendly.event_scheduled recibido");
        if (calendlyConversionPendingRef.current || calendlyConversionSentRef.current) {
          console.log("[Calendly Conversion] Conversión ya enviada o en proceso; se evita duplicado");
          return;
        }

        calendlyConversionPendingRef.current = true;
        sendGoogleAdsConversion();
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

        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
        <div className="cta-calendly" style={{ overflow: "hidden" }}>
          <div
            className="calendly-inline-widget"
            data-url={CALENDLY_URL}
            data-resize="true"
            style={{ minWidth: "320px", height: calendlyHeight ?? 700, minHeight: "700px", borderRadius: "2px" }}
          />
        </div>
      </div>
    </section>
  );
}
