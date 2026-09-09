"use client";

import { useEffect } from "react";
import { GOOGLE_ADS_CONVERSION_SEND_TO } from "@/lib/tracking";

const CONVERSION_LOCK_KEY = "meli-growth-calendly-event-scheduled";

let conversionSent = false;

function isCalendlyOrigin(origin: string) {
  try {
    const { hostname, protocol } = new URL(origin);
    return protocol === "https:" && (hostname === "calendly.com" || hostname.endsWith(".calendly.com"));
  } catch {
    return false;
  }
}

function getCalendlyEventName(data: unknown) {
  if (!data || typeof data !== "object" || !("event" in data)) return "";
  return typeof data.event === "string" ? data.event : "";
}

function hasConversionLock() {
  if (conversionSent) return true;
  try {
    return sessionStorage.getItem(CONVERSION_LOCK_KEY) === "1";
  } catch {
    return false;
  }
}

function setConversionLock() {
  conversionSent = true;
  try {
    sessionStorage.setItem(CONVERSION_LOCK_KEY, "1");
  } catch {
    // sessionStorage puede fallar en modo privado; el lock en memoria alcanza en esta carga.
  }
}

export function CalendlyTracker() {
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (!isCalendlyOrigin(e.origin)) return;
      if (getCalendlyEventName(e.data) !== "calendly.event_scheduled") return;
      if (hasConversionLock()) return;
      if (typeof window.gtag !== "function") {
        console.warn("[Ads] gtag no disponible");
        return;
      }

      setConversionLock();
      window.gtag("event", "conversion", {
        send_to: GOOGLE_ADS_CONVERSION_SEND_TO,
        value: 1.0,
        currency: "ARS",
      });
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return null;
}
