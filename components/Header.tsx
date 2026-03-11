"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import Button from "@/components/ui/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.from(ref.current, {
      y: -20,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      delay: 0.1,
    });
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
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
        transition: "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
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
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.75rem",
                fontWeight: 400,
                letterSpacing: "0.04em",
                color: "var(--color-text)",
                lineHeight: 1,
              }}
            >
              ML <span style={{ color: "var(--color-accent)" }}>GROWTH</span>
            </span>
          </a>

          <nav className="header-nav" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {[
              { label: "Servicios", href: "#solucion" },
              { label: "Proceso", href: "#como-funciona" },
              { label: "Resultados", href: "#estadisticas" },
              { label: "Precios", href: "#precios" },
              { label: "FAQ", href: "#faq" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="header-link"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-muted-light)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
              >
                {link.label}
              </a>
            ))}
            <Button href="#contacto">Diagnóstico gratis</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
