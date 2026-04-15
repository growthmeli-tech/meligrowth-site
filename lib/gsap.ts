import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // Respect prefers-reduced-motion — complete all animations instantly
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.defaults({ duration: 0.001, ease: "none" });
    ScrollTrigger.config({ limitCallbacks: true });
  }
}

export { gsap, ScrollTrigger };
