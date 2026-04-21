"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const year = new Date().getFullYear();

  useGSAP(
    () => {
      gsap.from(".footer-inner", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 90%" },
      });
    },
    { scope: ref }
  );

  return (
    <footer
      ref={ref}
      style={{
        borderTop: "1px solid var(--color-border)",
        padding: "3rem 0 2rem",
        background: "var(--color-bg)",
      }}
    >
      <div className="container">
        <div className="footer-inner">
          <div
            className="footer-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.5fr 1fr 1fr",
              gap: "2rem",
              marginBottom: "2.5rem",
            }}
          >
            {/* Brand */}
            <div>
              <img
                src="/images/logo.svg"
                alt="Meli Growth"
                style={{ height: "18px", width: "auto", display: "block", marginBottom: "0.75rem" }}
              />
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.875rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-muted)",
                  lineHeight: 1.65,
                  maxWidth: "260px",
                  margin: "0 0 0.75rem",
                }}
              >
                Operamos. Escalamos. Resultados.
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--color-muted-light)",
                  lineHeight: 1.65,
                  maxWidth: "240px",
                  margin: 0,
                  fontWeight: 300,
                }}
              >
                Full-service agency para vendedores en Mercado Libre Argentina.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.875rem",
                  fontWeight: 400,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-muted)",
                  marginBottom: "0.4rem",
                }}
              >
                Contacto
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <a href="mailto:growthmeli@gmail.com" className="footer-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                  growthmeli@gmail.com
                </a>
                <a href="https://wa.me/5491135731465" target="_blank" rel="noreferrer" className="footer-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.875rem",
                  fontWeight: 400,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-muted)",
                  marginBottom: "0.4rem",
                }}
              >
                Redes
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                {[
                  { name: "Instagram", href: "https://www.instagram.com/meligrowth_?igsh=MXNuejB6NTEwY2hhYQ%3D%3D&utm_source=qr" },
                  { name: "LinkedIn", href: "#" },
                ].map((s) => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="footer-link">
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid var(--color-border)",
              paddingTop: "1.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "0.75rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                color: "var(--color-muted)",
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              © {year} Meli Growth · Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}
