"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import SectionHeader from "@/components/ui/SectionHeader";
import { checkpoints } from "@/lib/data";

const DOT_SIZE = "2.5rem";
const LINE_DUR = 2.4;
const DOT_OFFSETS = [0, LINE_DUR / 3, (LINE_DUR * 2) / 3, LINE_DUR];

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".cp-dot", { scale: 0, opacity: 0 });
      gsap.set(".cp-content", { y: 36, opacity: 0 });

      checkpoints.forEach((cp, i) => {
        if (cp.counterTo !== null) {
          const el = sectionRef.current?.querySelector(`.cp-value-${i}`) as HTMLElement | null;
          if (el) el.textContent = cp.prefix + "0" + cp.suffix;
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });

      tl.from(".stats-header", { y: 24, opacity: 0, duration: 0.6, ease: "power3.out" });

      tl.add("lineStart", "+=0.1");
      tl.to(
        ".stats-line-fill",
        { scaleX: 1, duration: LINE_DUR, ease: "power2.inOut", transformOrigin: "left center" },
        "lineStart"
      );

      DOT_OFFSETS.forEach((offset, i) => {
        const t = `lineStart+=${offset}`;
        const cp = checkpoints[i];

        tl.to(`.cp-dot-${i}`, { scale: 1, opacity: 1, duration: 0.35, ease: "back.out(2.5)" }, t);
        tl.to(`.cp-dot-${i}`, { boxShadow: "0 0 60px rgba(255,214,0,1), 0 0 100px rgba(255,214,0,0.55)", duration: 0.2, ease: "power2.out" }, `lineStart+=${offset + 0.1}`);
        tl.to(`.cp-dot-${i}`, { boxShadow: "0 0 28px rgba(255,214,0,0.4)", duration: 0.55, ease: "power2.in" }, `lineStart+=${offset + 0.3}`);
        tl.to(`.cp-content-${i}`, { y: 0, opacity: 1, duration: 0.55, ease: "power3.out" }, `lineStart+=${offset + 0.18}`);

        if (cp.counterTo !== null) {
          const el = sectionRef.current?.querySelector(`.cp-value-${i}`) as HTMLElement | null;
          if (el) {
            const obj = { val: 0 };
            tl.to(obj, {
              val: cp.counterTo,
              duration: 0.85,
              ease: "power2.out",
              onUpdate() { el.textContent = cp.prefix + Math.round(obj.val) + cp.suffix; },
            }, `lineStart+=${offset + 0.22}`);
          }
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="section-padding bg-grid" id="estadisticas" aria-label="Resultados">
      <div className="container">

        <SectionHeader
          label="[04] — Resultados"
          title={<>RESULTADOS QUE{" "}<em className="text-accent">HABLAN POR SÍ SOLOS</em></>}
          centered
          className="stats-header"
        />

        <div className="stats-timeline-wrapper" aria-hidden="true" style={{ position: "relative", marginBottom: "clamp(1.5rem, 3vw, 2.25rem)" }}>
          <div style={{ position: "absolute", top: "1.25rem", left: "12.5%", right: "12.5%", height: "1px", background: "var(--color-border-bright)", transform: "translateY(-50%)", pointerEvents: "none" }} />
          <div
            className="stats-line-fill"
            style={{ position: "absolute", top: "1.25rem", left: "12.5%", right: "12.5%", height: "3px", background: "var(--color-accent)", boxShadow: "0 0 16px rgba(255,214,0,0.45)", transform: "translateY(-50%) scaleX(0)", transformOrigin: "left center", pointerEvents: "none" }}
          />

          <div className="stats-dots-row grid-4" style={{ background: "transparent", position: "relative", zIndex: 1 }}>
            {checkpoints.map((cp, i) => (
              <div key={cp.step} style={{ display: "flex", justifyContent: "center" }}>
                <div
                  className={`cp-dot cp-dot-${i}`}
                  style={{ width: DOT_SIZE, height: DOT_SIZE, borderRadius: "50%", background: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 28px rgba(255,214,0,0.4)", flexShrink: 0 }}
                >
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", fontWeight: 700, color: "#000", letterSpacing: "0.06em" }}>
                    {cp.step}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cp-content-grid grid-4" style={{ background: "transparent" }}>
          {checkpoints.map((cp, i) => (
            <div key={cp.step} className={`cp-content cp-content-${i}`} style={{ textAlign: "center", padding: "0 clamp(0.5rem, 2vw, 1.5rem)" }}>
              <div className={`cp-value-${i}`} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.25rem, 5.5vw, 5.5rem)", fontWeight: 400, color: "var(--color-accent)", lineHeight: 1, letterSpacing: "0.02em", marginBottom: "0.5rem" }}>
                {cp.value}
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1rem, 1.5vw, 1.375rem)", fontWeight: 400, color: "var(--color-text)", letterSpacing: "0.06em", marginBottom: "0.625rem", lineHeight: 1.1 }}>
                {cp.label}
              </div>
              <p className="body-regular" style={{ margin: 0, lineHeight: 1.5 }}>{cp.detail}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
