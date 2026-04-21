"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const lastY = useRef(0);

  useEffect(() => {
    if (!ref.current) return;
    gsap.from(ref.current, {
      y: -20,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      delay: 0.1,
    });
  }, []);

  useEffect(() => {
    const fn = () => {
      const y = window.scrollY;
      const isMobile = window.matchMedia("(max-width: 860px)").matches;
      setScrolled(y > 40);
      if (isMobile) {
        setHidden(false);
      } else if (y > 80) {
        setHidden(y > lastY.current);
      } else {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      ref={ref}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
        background: scrolled ? "rgba(10,10,10,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid #1e1e1e" : "1px solid transparent",
      }}
    >
      <div className="container">
        <div
          className="header-inner"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "68px",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img
              src="/images/logo.svg"
              alt="Meli Growth"
              className="header-logo"
              style={{ height: "22px", width: "auto", display: "block" }}
            />
          </a>

          <a href="#contacto" className="header-mobile-cta">
            Agendar diagnóstico
          </a>

          <nav className="header-nav" aria-label="Navegación principal" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {[
              { label: "Dolores", href: "#problema" },
              { label: "Solución", href: "#solucion" },
              { label: "Resultados", href: "#resultados-reales" },
              { label: "Modelo", href: "#precios" },
              { label: "Agendar", href: "#contacto" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="header-link"
                data-wave
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-muted-light)",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
