"use client";

import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [waVisible, setWaVisible] = useState(true);

  useEffect(() => {
    let heroGone = false;
    let footerVisible = false;
    let contactVisible = false;

    const update = () => {
      const show = heroGone && !footerVisible && !contactVisible;
      setVisible(show);
      setWaVisible(!contactVisible && !footerVisible);
    };

    const heroObserver = new IntersectionObserver(
      ([entry]) => { heroGone = !entry.isIntersecting; update(); },
      { threshold: 0.15 }
    );

    const footerObserver = new IntersectionObserver(
      ([entry]) => { footerVisible = entry.isIntersecting; update(); },
      { threshold: 0.1 }
    );

    const contactObserver = new IntersectionObserver(
      ([entry]) => { contactVisible = entry.isIntersecting; update(); },
      { threshold: 0.15 }
    );

    const hero = document.querySelector("#hero");
    const footer = document.querySelector("footer");
    const contact = document.querySelector("#contacto");

    if (hero) heroObserver.observe(hero);
    if (footer) footerObserver.observe(footer);
    if (contact) contactObserver.observe(contact);

    return () => { heroObserver.disconnect(); footerObserver.disconnect(); contactObserver.disconnect(); };
  }, []);

  return (
    <>
    {/* WhatsApp float — always visible, bottom right */}
    <a
      href="https://wa.me/5491135731465"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      style={{
        position: "fixed",
        bottom: "clamp(1.25rem, 3vw, 2rem)",
        right: "clamp(1rem, 3vw, 1.75rem)",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "52px",
        height: "52px",
        borderRadius: "50%",
        background: "#25D366",
        boxShadow: "0 4px 20px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.3)",
        color: "#fff",
        opacity: waVisible ? 1 : 0,
        pointerEvents: waVisible ? "auto" : "none",
        transition: "transform 0.2s ease, box-shadow 0.2s ease, opacity 0.35s ease",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(37,211,102,0.6), 0 2px 8px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.3)";
      }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>

    {/* Sticky CTA bar — center bottom, appears after hero, desktop only */}
    <div
      aria-hidden={!visible}
      className="sticky-cta-bar"
      style={{
        position: "fixed",
        bottom: "clamp(1.25rem, 3vw, 2rem)",
        left: "50%",
        transform: `translateX(-50%) translateY(${visible ? "0" : "calc(100% + 2rem)"})`,
        transition: "transform 0.45s cubic-bezier(0.34, 1.4, 0.64, 1)",
        zIndex: 40,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <a
        href="#contacto"
        data-wave
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.6rem",
          fontFamily: "var(--font-sans)",
          fontSize: "0.8rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          textDecoration: "none",
          color: "#000",
          background: "var(--color-accent)",
          padding: "0.875rem 2rem",
          borderRadius: "2px",
          whiteSpace: "nowrap",
          boxShadow: "0 8px 32px rgba(255,214,0,0.35), 0 2px 8px rgba(0,0,0,0.4)",
        }}
      >
        Agendar diagnóstico
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
    </>
  );
}
