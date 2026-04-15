"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  LAST_FIRED_CONVERSION_KEY,
  PENDING_CONVERSION_KEY,
  trackGoogleAdsConversion,
} from "@/lib/tracking";

export default function GraciasPage() {
  const router = useRouter();
  const [count, setCount] = useState(5);

  useEffect(() => {
    let cancelled = false;
    let attempts = 0;
    const maxAttempts = 12;
    const delayMs = 400;

    const tryTrack = () => {
      if (cancelled) return;

      const pendingConversion = sessionStorage.getItem(PENDING_CONVERSION_KEY);
      const lastTrackedConversion = sessionStorage.getItem(LAST_FIRED_CONVERSION_KEY);

      if (!pendingConversion || pendingConversion === lastTrackedConversion) return;

      const didTrack = trackGoogleAdsConversion();
      if (didTrack) {
        sessionStorage.setItem(LAST_FIRED_CONVERSION_KEY, pendingConversion);
        sessionStorage.removeItem(PENDING_CONVERSION_KEY);
        return;
      }

      attempts += 1;
      if (attempts < maxAttempts) {
        window.setTimeout(tryTrack, delayMs);
      }
    };

    tryTrack();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (count === 0) {
      router.push("/");
      return;
    }
    const t = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [count, router]);

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          maxWidth: "480px",
        }}
      >
        {/* Check icon */}
        <div
          style={{
            width: "5rem",
            height: "5rem",
            borderRadius: "50%",
            border: "2px solid var(--color-accent)",
            boxShadow: "0 0 32px rgba(255,214,0,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 12l5 5.5L20 6"
              stroke="var(--color-accent)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 8vw, 5rem)",
            letterSpacing: "0.04em",
            color: "var(--color-text)",
            lineHeight: 1,
            margin: 0,
          }}
        >
          ¡GRACIAS!
        </h1>

        {/* Message */}
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1.125rem",
            color: "var(--color-muted-light)",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          Recibimos tu consulta. Te contactamos en menos de 48 horas con un diagnóstico real de tu cuenta.
        </p>

        {/* Countdown */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            color: "var(--color-muted)",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Volviendo al inicio en {count}...
        </p>
      </div>
    </main>
  );
}
