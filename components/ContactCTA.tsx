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
    fontSize: "0.75rem",
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

        {/* ── 2-col grid: left = headline + trust, right = form ── */}
        <div
          className="cta-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(2rem, 6vw, 5rem)",
            alignItems: "start",
          }}
        >
          {/* Left: headline + body + trust */}
          <div className="cta-left">
            <div className="cta-headline" style={{ marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
              <SectionLabel>[08] — Empezá Hoy</SectionLabel>
              <h2 className="headline">
                ¿LISTO PARA ESCALAR<br />
                <em style={{ fontStyle: "normal", color: "var(--color-accent)" }}>TU CUENTA?</em>
              </h2>
            </div>

            <p
              className="body-lg"
              style={{ marginBottom: "2.5rem", maxWidth: "400px" }}
            >
              Pedí tu diagnóstico gratis hoy. Sin compromiso, sin contrato largo.
              En menos de 48 horas tenés un análisis real de tu cuenta.
            </p>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {["Sin compromiso", "Respuesta en 48 horas", "Diagnóstico a medida"].map((label, i, arr) => (
                <div key={label}>
                  <div
                    className="cta-trust-row"
                    style={{ padding: "1rem 0" }}
                  >
                    <span style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-text)" }}>
                      {label}
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
              padding: "1.25rem clamp(1.75rem, 3vw, 2.25rem) clamp(1.75rem, 3vw, 2.25rem)",
              display: "flex",
              flexDirection: "column",
              gap: "1.125rem",
            }}
          >
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
          </form>
        </div>
      </div>
    </section>
  );
}
