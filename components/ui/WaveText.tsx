"use client";

import { useRef, useCallback, useImperativeHandle, forwardRef } from "react";
import { gsap } from "@/lib/gsap";

export interface WaveTextHandle {
  animIn: () => void;
  animOut: () => void;
}

const WaveText = forwardRef<WaveTextHandle, { children: string }>(
  ({ children }, ref) => {
    const innerRef = useRef<HTMLSpanElement>(null);
    const chars = Array.from(children);

    // Total wave duration is constant regardless of char count
    const WAVE_TOTAL = 0.52; // seconds — same for every button/link
    const CHAR_DUR   = 0.36;
    const stagger = chars.length > 1 ? (WAVE_TOTAL - CHAR_DUR) / (chars.length - 1) : 0;

    const animIn = useCallback(() => {
      if (!innerRef.current) return;
      const a = innerRef.current.querySelectorAll(".wt-a");
      const b = innerRef.current.querySelectorAll(".wt-b");
      gsap.killTweensOf([...a, ...b]);
      gsap.to(a, { y: "-100%", duration: CHAR_DUR, ease: "power2.inOut", stagger });
      gsap.fromTo(b, { y: "100%" }, { y: "0%", duration: CHAR_DUR, ease: "power2.inOut", stagger });
    }, [stagger]);

    const animOut = useCallback(() => {
      if (!innerRef.current) return;
      const a = innerRef.current.querySelectorAll(".wt-a");
      const b = innerRef.current.querySelectorAll(".wt-b");
      gsap.killTweensOf([...a, ...b]);
      gsap.to(b, { y: "100%", duration: CHAR_DUR, ease: "power2.inOut", stagger });
      gsap.fromTo(a, { y: "-100%" }, { y: "0%", duration: CHAR_DUR, ease: "power2.inOut", stagger });
    }, [stagger]);

    useImperativeHandle(ref, () => ({ animIn, animOut }), [animIn, animOut]);

    return (
      <span
        ref={innerRef}
        aria-label={children}
        style={{ display: "inline-flex", alignItems: "flex-start" }}
      >
        {chars.map((char, i) => (
          // Per-character clip wrapper — each char clips independently, zero overlap
          <span
            key={i}
            style={{
              display: "inline-block",
              overflow: "hidden",
              position: "relative",
              lineHeight: "inherit",
            }}
          >
            {/* Layer A — visible at rest */}
            <span
              className="wt-a"
              style={{ display: "block" }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
            {/* Layer B — hidden below at rest */}
            <span
              className="wt-b"
              aria-hidden="true"
              style={{
                display: "block",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                transform: "translateY(100%)",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          </span>
        ))}
      </span>
    );
  }
);

WaveText.displayName = "WaveText";
export default WaveText;
