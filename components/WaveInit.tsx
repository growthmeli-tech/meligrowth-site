"use client";

import { useLayoutEffect } from "react";
import { initWave } from "@/lib/waveText";

export default function WaveInit() {
  useLayoutEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    // Init all elements present at mount
    document.querySelectorAll<HTMLElement>("[data-wave]").forEach(initWave);

    // Re-init any that appear later (e.g. React re-renders)
    const observer = new MutationObserver(() => {
      document.querySelectorAll<HTMLElement>("[data-wave]:not([data-wave-ready])").forEach(initWave);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
