"use client";

import { useEffect } from "react";
import { GOOGLE_ADS_CONVERSION_SEND_TO } from "@/lib/tracking";

export function CalendlyTracker() {
  useEffect(() => {
    let fired = false;

    const handler = (e: MessageEvent) => {
      if (e.origin !== "https://calendly.com") return;
      if (e.data?.event !== "calendly.event_scheduled") return;
      if (fired) return;
      if (typeof window.gtag !== "function") {
        console.warn("[Ads] gtag no disponible");
        return;
      }

      fired = true;
      window.gtag("event", "conversion", {
        send_to: GOOGLE_ADS_CONVERSION_SEND_TO,
        value: 1.0,
        currency: "ARS",
      });
      console.log("[Ads] Conversión Calendly disparada correctamente");
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return null;
}
