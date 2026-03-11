"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

interface FormState {
  nombre: string;
  empresa: string;
  facturacion: string;
  email: string;
  whatsapp: string;
}

const WHATSAPP_NUMBER = "549XXXXXXXXXX";

const perks = [
  {
    value: "Gratis",
    label: "Diagnóstico inicial — sin costo ni obligación",
  },
  {
    value: "0",
    label: "Contratos largos — operamos sin ataduras",
  },
  {
    value: "72hs",
    label: "Tiempo de activación — arrancamos rápido",
  },
];

export default function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState<FormState>({
    nombre: "",
    empresa: "",
    facturacion: "",
    email: "",
    whatsapp: "",
  });

  useGSAP(
    () => {
      const trigger = { trigger: sectionRef.current, start: "top 72%" };

      gsap.from(".cta-headline", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: trigger,
      });
      gsap.from(".cta-perk", {
        y: 16,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: trigger,
        delay: 0.2,
      });
      gsap.from(".cta-left", {
        x: -30,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: trigger,
        delay: 0.35,
      });
      gsap.from(".cta-form", {
        x: 30,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: trigger,
        delay: 0.35,
      });
    },
    { scope: sectionRef }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const msg =
      `Hola! Me interesa el diagnóstico gratuito de ML Growth.\n` +
      `Nombre: ${form.nombre}\n` +
      `Empresa: ${form.empresa || "No especificada"}\n` +
      `Facturación ML: ${form.facturacion}\n` +
      `Email: ${form.email}\n` +
      `WhatsApp: ${form.whatsapp}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-mono)",
    fontSize: "0.65rem",
    color: "var(--color-muted-light)",
    marginBottom: "0.5rem",
    fontWeight: 400,
    textTransform: "uppercase",
    letterSpacing: "0.14em",
  };

  return (
    <section
      ref={sectionRef}
      id="contacto"
      style={{
        backgroundColor: "var(--color-surface)",
        backgroundImage: "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        padding: "clamp(48px, 10vw, 140px) 0",
      }}
    >
      <div className="container">

        {/* ── Headline ─────────────────────────────────────── */}
        <div className="cta-headline" style={{ marginBottom: "clamp(2.5rem, 4vw, 3.5rem)" }}>
          <SectionLabel>[08] — Empezá Hoy</SectionLabel>
          <h2 className="headline">
            ¿LISTO PARA ESCALAR<br />
            <em style={{ fontStyle: "normal", color: "var(--color-accent)" }}>TU CUENTA?</em>
          </h2>
        </div>

        {/* ── Perks strip — full width, 3 cells ───────────── */}
        <div
          className="cta-perks-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
            background: "var(--color-border)",
            marginBottom: "clamp(3rem, 5vw, 4.5rem)",
          }}
        >
          {perks.map((p) => (
            <div
              key={p.value}
              className="cta-perk"
              style={{
                background: "var(--color-bg)",
                borderLeft: "2px solid var(--color-accent)",
                padding: "clamp(1.25rem, 2.5vw, 1.75rem) clamp(1.25rem, 2.5vw, 1.75rem)",
                display: "flex",
                flexDirection: "column",
                gap: "0.375rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  fontWeight: 400,
                  color: "var(--color-accent)",
                  lineHeight: 1,
                  letterSpacing: "0.02em",
                }}
              >
                {p.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  fontWeight: 400,
                  color: "var(--color-muted-light)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  lineHeight: 1.5,
                }}
              >
                {p.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Form grid — 2 col ────────────────────────────── */}
        <div
          className="cta-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(2rem, 6vw, 5rem)",
            alignItems: "start",
          }}
        >
          {/* Left: why / trust */}
          <div className="cta-left">
            <p
              className="body-lg"
              style={{ marginBottom: "2.5rem", maxWidth: "400px" }}
            >
              Pedí tu diagnóstico gratis hoy. Sin compromiso, sin contrato largo.
              En menos de 48 horas tenés un análisis real de tu cuenta.
            </p>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {[
                { label: "Sin compromiso", detail: "100% gratuito, sin contrato" },
                { label: "Respuesta rápida", detail: "En menos de 48 horas hábiles" },
                { label: "A medida", detail: "Diagnóstico personalizado para tu cuenta" },
              ].map((item, i, arr) => (
                <div key={item.label}>
                  <div
                    className="cta-trust-row"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1.5fr",
                      gap: "1rem",
                      padding: "1.125rem 0",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-text)" }}>
                      {item.label}
                    </span>
                    <span className="body-regular">
                      {item.detail}
                    </span>
                  </div>
                  {i < arr.length - 1 && <hr className="row-divider" />}
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form
            className="cta-form"
            onSubmit={handleSubmit}
            style={{
              background: "var(--color-bg)",
              border: "1px solid var(--color-border)",
              borderTop: "3px solid var(--color-accent)",
              borderRadius: "2px",
              padding: "clamp(1.75rem, 3vw, 2.25rem)",
              display: "flex",
              flexDirection: "column",
              gap: "1.125rem",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--color-muted-light)",
                paddingBottom: "0.5rem",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              Formulario de diagnóstico
            </div>

            <div className="cta-form-cols" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label htmlFor="nombre" style={labelStyle}>Nombre *</label>
                <input
                  id="nombre"
                  className="form-input"
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="empresa" style={labelStyle}>Empresa</label>
                <input
                  id="empresa"
                  className="form-input"
                  type="text"
                  name="empresa"
                  placeholder="Nombre empresa"
                  value={form.empresa}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="facturacion" style={labelStyle}>Facturación mensual en ML</label>
              <select
                id="facturacion"
                className="form-input"
                name="facturacion"
                value={form.facturacion}
                onChange={handleChange}
                style={{ cursor: "pointer" }}
              >
                <option value="" disabled>Seleccioná un rango</option>
                <option value="Menos de $500.000">Menos de $500.000</option>
                <option value="$500.000 - $2.000.000">$500.000 - $2.000.000</option>
                <option value="$2.000.000 - $5.000.000">$2.000.000 - $5.000.000</option>
                <option value="$5.000.000 - $15.000.000">$5.000.000 - $15.000.000</option>
                <option value="Más de $15.000.000">Más de $15.000.000</option>
              </select>
            </div>

            <div>
              <label htmlFor="email" style={labelStyle}>Email *</label>
              <input
                id="email"
                className="form-input"
                type="email"
                name="email"
                placeholder="tu@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="whatsapp" style={labelStyle}>WhatsApp *</label>
              <input
                id="whatsapp"
                className="form-input"
                type="tel"
                name="whatsapp"
                placeholder="+54 9 11 0000-0000"
                value={form.whatsapp}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" full style={{ marginTop: "0.25rem" }}>
              Pedí tu diagnóstico gratis
            </Button>

            <p
              style={{
                textAlign: "center",
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--color-muted)",
                margin: 0,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Sin compromiso · Respuesta en menos de 24hs
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
