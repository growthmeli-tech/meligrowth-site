"use client";

import { useEffect } from "react";

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function ConfettiClick() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, input, textarea, select, label")) return;

      const count = Math.floor(rand(12, 20));

      for (let i = 0; i < count; i++) {
        const img = document.createElement("img");
        img.src = "/images/bills-1.png";
        img.alt = "";
        img.draggable = false;

        const size = rand(28, 50);
        const angle = rand(0, 360) * (Math.PI / 180);
        const speed = rand(180, 420);
        let vx = Math.cos(angle) * speed;
        let vy = Math.sin(angle) * speed - rand(200, 380); // strong upward bias
        const gravity = 900;
        const rotStart = rand(-45, 45);
        const rotSpeed = rand(-400, 400);
        const lifetime = rand(0.5, 0.8); // seconds — disappear faster

        let x = 0;
        let y = 0;
        let rot = rotStart;
        let opacity = 1;
        let elapsed = 0;
        let lastTime = performance.now();

        Object.assign(img.style, {
          position: "fixed",
          left: `${e.clientX - size / 2}px`,
          top: `${e.clientY - size / 2}px`,
          width: `${size}px`,
          height: `${size}px`,
          objectFit: "contain",
          pointerEvents: "none",
          zIndex: "99999",
          willChange: "transform, opacity",
        });

        document.body.appendChild(img);

        let raf: number;
        const tick = (now: number) => {
          const dt = (now - lastTime) / 1000;
          lastTime = now;
          elapsed += dt;

          vx *= 0.98; // air drag
          vy += gravity * dt; // gravity pulls down
          x += vx * dt;
          y += vy * dt;
          rot += rotSpeed * dt;

          // fade out in the last 30% of lifetime
          const fadeStart = lifetime * 0.7;
          if (elapsed > fadeStart) {
            opacity = Math.max(0, 1 - (elapsed - fadeStart) / (lifetime - fadeStart));
          }

          const scale = 1 - (elapsed / lifetime) * 0.5;

          img.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg) scale(${Math.max(scale, 0.3)})`;
          img.style.opacity = `${opacity}`;

          if (elapsed < lifetime) {
            raf = requestAnimationFrame(tick);
          } else {
            img.remove();
          }
        };

        // stagger start slightly
        const delay = rand(0, 60);
        setTimeout(() => {
          lastTime = performance.now();
          raf = requestAnimationFrame(tick);
        }, delay);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
