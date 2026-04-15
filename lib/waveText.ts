import { gsap } from "@/lib/gsap";

const WAVE_TOTAL = 0.52; // total wave duration — constant across all text lengths
const CHAR_DUR   = 0.36; // per-character tween duration

export function initWave(el: HTMLElement): void {
  if (el.dataset.waveReady === "1") return;
  el.dataset.waveReady = "1"; 
  

  // Only split direct text nodes — leaves SVG / img children untouched
  const textNodes: Text[] = [];
  el.childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
      textNodes.push(node as Text);
    }
  });
  if (!textNodes.length) return;

  const fullText = textNodes.map(n => n.textContent ?? "").join("").trim();
  if (!fullText) return;

  const chars = Array.from(fullText);
  const stagger = chars.length > 1 ? (WAVE_TOTAL - CHAR_DUR) / (chars.length - 1) : 0;

  // Build wrapper: each character gets its own overflow:hidden clip slot
  const wrapper = document.createElement("span");
  wrapper.style.cssText = "display:inline-flex;";

  chars.forEach(char => {
    const slot = document.createElement("span");
    slot.style.cssText = "display:inline-block;overflow:hidden;position:relative;line-height:inherit;";

    const a = document.createElement("span");
    a.className = "wt-a";
    a.style.cssText = "display:block;will-change:transform;";
    a.textContent = char === " " ? "\u00A0" : char;

    const b = document.createElement("span");
    b.className = "wt-b";
    b.style.cssText = "display:block;position:absolute;top:0;left:0;right:0;transform:translateY(100%);will-change:transform;";
    b.textContent = char === " " ? "\u00A0" : char;

    slot.appendChild(a);
    slot.appendChild(b);
    wrapper.appendChild(slot);
  });

  // Replace text nodes with the split wrapper
  textNodes[0].parentNode?.insertBefore(wrapper, textNodes[0]);
  textNodes.forEach(n => n.parentNode?.removeChild(n));

  // Hover events on the full element (covers padding area too)
  // overwrite: true cancels any in-progress tween on the same targets without a gap frame
  el.addEventListener("mouseenter", () => {
    const a = el.querySelectorAll(".wt-a");
    const b = el.querySelectorAll(".wt-b");
    gsap.to(a, { y: "-100%", duration: CHAR_DUR, ease: "power2.inOut", stagger, overwrite: true });
    gsap.fromTo(b, { y: "100%" }, { y: "0%", duration: CHAR_DUR, ease: "power2.inOut", stagger, overwrite: true });
  });

  el.addEventListener("mouseleave", () => {
    const a = el.querySelectorAll(".wt-a");
    const b = el.querySelectorAll(".wt-b");
    gsap.to(b, { y: "100%", duration: CHAR_DUR, ease: "power2.inOut", stagger, overwrite: true });
    gsap.fromTo(a, { y: "-100%" }, { y: "0%", duration: CHAR_DUR, ease: "power2.inOut", stagger, overwrite: true });
  });
}
