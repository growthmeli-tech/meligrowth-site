// ─── Site content data ────────────────────────────────────
// All section data arrays live here for single-source-of-truth editing.

// ── Hero ──────────────────────────────────────────────────

export const TICKER_ITEMS = [
  "Más facturación", "Más conversión", "Más rentabilidad", "Operación diaria",
  "Ads con ROAS", "Full + Flex", "Rentabilidad por SKU", "Reputación sana",
  "+200% crecimiento en ventas", "$47M en un mes",
  "Más facturación", "Más conversión", "Más rentabilidad", "Operación diaria",
  "Ads con ROAS", "Full + Flex", "Rentabilidad por SKU", "Reputación sana",
  "+200% crecimiento en ventas", "$47M en un mes",
];

// ── Problem ───────────────────────────────────────────────

export const problems = [
  {
    title: "Facturás, pero no tenés claridad de margen",
    detail: "El canal genera volumen, pero no hay visibilidad real sobre qué productos son rentables una vez considerados comisiones, envíos y publicidad.",
  },
  {
    title: "La operación consume recursos",
    detail: "La cuenta depende de la gestión diaria de urgencias, sin estructura que permita escalar de forma ordenada.",
  },
  {
    title: "La inversión en Ads no es eficiente",
    detail: "Campañas activas sin criterios claros de retorno, con impacto directo en el margen.",
  },
];

// ── Solution ──────────────────────────────────────────────

export const pillars = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Operamos",
    description: "Nos hacemos cargo del funcionamiento diario de la cuenta, ordenando procesos y eliminando dependencia operativa.",
    bullets: [
      "Gestión diaria de la cuenta",
      "Publicaciones, stock y reputación",
      "Atención, reclamos y mediaciones",
    ],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Optimizamos",
    description: "Analizamos el canal como unidad de negocio: precios, conversión, publicidad y margen por producto.",
    bullets: [
      "Ads con foco en ROAS y ACOS",
      "Conversión de publicaciones",
      "Rentabilidad por producto",
    ],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="1" y="3" width="15" height="13" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 8l4 2v5h-4V8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="5.5" cy="18.5" r="1.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="18.5" cy="18.5" r="1.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    title: "Escalamos",
    description: "Transformamos Mercado Libre en un canal predecible, con estructura y lógica de crecimiento.",
    bullets: [
      "Full, Flex y operación coordinada",
      "Reportes de gestión quincenales",
      "Plan de crecimiento por cuenta",
    ],
  },
];

// ── Offer model ───────────────────────────────────────────

export const steps = [
  {
    title: "Diagnóstico",
    detail: "Analizamos cuenta, catálogo y estructura de costos para detectar desvíos y oportunidades.",
  },
  {
    title: "Toma de control",
    detail: "Ordenamos la operación y ejecutamos las primeras mejoras sin interrumpir ventas.",
  },
  {
    title: "Escala",
    detail: "Optimizamos de forma continua y medimos cada decisión por impacto en resultados.",
  },
];

// ── Plans ─────────────────────────────────────────────────

export const tiers = [
  {
    id: "starter",
    name: "OPERACIÓN",
    description: "Operación integral del canal.",
    range: "$10M – $20M / mes",
    featured: false,
    features: [
      "Operación diaria completa",
      "Gestión de publicaciones",
      "Atención al cliente 7 días",
      "Salud de cuenta",
      "Reporte quincenal",
    ],
    ctaVariant: "ghost" as const,
  },
  {
    id: "growth",
    name: "GROWTH",
    description: "Optimización avanzada y crecimiento.",
    range: "$20M – $70M / mes",
    featured: true,
    features: [
      "Todo lo del plan Operación",
      "Product Ads y Brand Ads",
      "Optimización ACOS / ROAS",
      "Análisis de rentabilidad por SKU",
      "Repricing y mejora de conversión",
    ],
    ctaVariant: "primary" as const,
  },
  {
    id: "scale",
    name: "ESCALA",
    description: "Estructura completa para cuentas de alto volumen.",
    range: "+$70M / mes",
    featured: false,
    features: [
      "Todo lo del plan Growth",
      "Account manager dedicado",
      "Expansión de catálogo",
      "Full + Flex gestionado",
      "Forecasting y prioridades comerciales",
      "Soporte prioritario",
    ],
    ctaVariant: "ghost" as const,
  },
];
