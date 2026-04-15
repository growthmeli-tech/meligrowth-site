// ─── Site content data ────────────────────────────────────
// All section data arrays live here for single-source-of-truth editing.

// ── Hero ──────────────────────────────────────────────────

export const TICKER_ITEMS = [
  "Operación diaria", "Product Ads", "Brand Ads", "Full + Flex",
  "Colecta diaria", "Salud de cuenta", "Repricing", "Reportes quincenales",
  "+200% crecimiento en ventas", "Reputación Platinum",
  "Operación diaria", "Product Ads", "Brand Ads", "Full + Flex",
  "Colecta diaria", "Salud de cuenta", "Repricing", "Reportes quincenales",
  "+200% crecimiento en ventas", "Reputación Platinum",
];

// ── Problem ───────────────────────────────────────────────

export const problems = [
  {
    num: "01",
    title: "Tu cuenta existe, pero no crece",
    detail: "Sin estrategia ni datos claros, tus publicaciones compiten sin dirección. El catálogo crece en volumen pero no en rentabilidad.",
  },
  {
    num: "02",
    title: "Gestionás el día a día en vez de escalar",
    detail: "Preguntas, reclamos, stock, publicaciones — todo cae sobre vos. No te queda tiempo para pensar en crecer.",
  },
  {
    num: "03",
    title: "Los ADS consumen plata sin retorno",
    detail: "ACOS disparado, campañas sin optimización, presupuesto que se va sin saber exactamente a dónde.",
  },
  {
    num: "04",
    title: "No sabés si realmente ganás dinero",
    detail: "Sin reportes claros ni análisis de rentabilidad, tomás decisiones a ciegas. El número de ventas no dice toda la verdad.",
  },
];

// ── Solution ──────────────────────────────────────────────

export const pillars = [
  {
    num: "01",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Operación",
    description: "Nos hacemos cargo del día a día para que vos puedas enfocarte en lo que importa: crecer.",
    bullets: [
      "Atención al cliente 7 días",
      "Gestión de publicaciones y stock",
      "Salud de cuenta y métricas de reputación",
      "Respuesta a reclamos y mediaciones",
    ],
    image: "/images/operacion.avif",
  },
  {
    num: "02",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Crecimiento",
    description: "Estrategia de publicidad y contenido orientada a resultados medibles, no a vanity metrics.",
    bullets: [
      "Product Ads y Brand Ads gestionados",
      "Optimización de ACOS / ROAS",
      "Contenido visual de producto",
      "Catálogo y fichas optimizadas",
    ],
    image: "/images/dash4.avif",
  },
  {
    num: "03",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="1" y="3" width="15" height="13" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 8l4 2v5h-4V8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="5.5" cy="18.5" r="1.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="18.5" cy="18.5" r="1.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    title: "Infraestructura",
    description: "Full, Flex y contabilidad operando en sincronía. Sin cuellos de botella, sin sorpresas.",
    bullets: [
      "Depósito especializado para Full",
      "Colecta diaria · Flex integrado",
      "Reportes quincenales de rentabilidad",
      "Contabilidad e informes de gestión",
    ],
    image: "/images/Gemini_Generated_Image_f9lp2sf9lp2sf9lp.avif",
  },
];

// ── Process ───────────────────────────────────────────────

export const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    detail: "Analizamos tu cuenta, tus productos y tus números. En 48 horas tenés un informe real con oportunidades concretas.",
    tag: "48 horas",
  },
  {
    num: "02",
    title: "Onboarding",
    detail: "Te integramos, tomamos el control y activamos las primeras mejoras. Sin fricción, sin interrupción de operación.",
    tag: "1 semana",
  },
  {
    num: "03",
    title: "Operación",
    detail: "Gestionamos todo: ADS, publicaciones, preguntas, logística, salud de cuenta. Cada día, sin excepción.",
    tag: "365 días/año",
  },
  {
    num: "04",
    title: "Reportes",
    detail: "Comunicación directa y reporte quincenal. Sabés exactamente qué se hizo, cómo fue y qué viene.",
    tag: "Transparencia total",
  },
];

// ── Stats ─────────────────────────────────────────────────

export const checkpoints = [
  {
    step: "01",
    value: "72hs",
    label: "ONBOARDING",
    detail: "Activamos tu cuenta y arrancamos a operar sin fricción.",
    counterTo: 72,
    prefix: "",
    suffix: "hs",
  },
  {
    step: "02",
    value: "100%",
    label: "OPTIMIZACIÓN",
    detail: "Optimización total de tus publicaciones: títulos, fotos y fichas técnicas.",
    counterTo: 100,
    prefix: "",
    suffix: "%",
  },
  {
    step: "03",
    value: "+200%",
    label: "VENTAS",
    detail: "Incremento de ventas en 5 meses en cuentas activas.",
    counterTo: 200,
    prefix: "+",
    suffix: "%",
  },
  {
    step: "04",
    value: "Platinum",
    label: "REPUTACIÓN",
    detail: "Objetivo alcanzado. Sin reclamos, sin demoras.",
    counterTo: null,
    prefix: "",
    suffix: "",
  },
];

// ── Benefits ──────────────────────────────────────────────

export const features = [
  {
    num: "01",
    before: "Pérdidas de tiempo en el día a día",
    after: "TE ENFOCÁS EN TU NEGOCIO",
    detail: "Operación diaria delegada: preguntas, reclamos, publicaciones, stock. Todo cubierto.",
  },
  {
    num: "02",
    before: "Gastos en ADS sin retorno claro",
    after: "ROAS OPTIMIZADO Y TRANSPARENTE",
    detail: "Campañas gestionadas con foco en ACOS real. Sabés exactamente cuánto gastás y cuánto ganás.",
  },
  {
    num: "03",
    before: "Logística como cuello de botella",
    after: "FULL + FLEX SIN FRICCIÓN",
    detail: "Depósito especializado, colecta diaria y gestión de envíos integrada. Sin excusas.",
  },
  {
    num: "04",
    before: "Falta de datos para tomar decisiones",
    after: "REPORTES CLAROS CADA 15 DÍAS",
    detail: "Performance de ventas, publicidad y rentabilidad en un solo reporte. Sin cajas negras.",
  },
];

// ── FAQ ───────────────────────────────────────────────────

export const faqs: { q: string; a: string }[] = [
  {
    q: "Cuando empiezo a ver resultados",
    a: "Los primeros indicadores mejoran entre la semana 2 y 4, tras optimizar publicaciones y reestructurar campañas. Resultados de escala real: 3 a 6 meses.",
  },
  {
    q: "¿Necesitan acceso a mi cuenta?",
    a: "Sí. Operamos con acceso colaborador desde el panel oficial de Mercado Libre. No hay transferencia de titularidad ni riesgo para tu cuenta.",
  },
  {
    q: "¿Hay permanencia mínima?",
    a: "No. Operamos sin contratos largos. Si no estás conforme con los resultados, podés cortar cuando quieras.",
  },
  {
    q: "¿Con qué categorías trabajan?",
    a: "Electrónica, hogar, deportes, herramientas, indumentaria y más. La metodología aplica a cualquier categoría de Mercado Libre Argentina.",
  },
  {
    q: "¿Cómo son los reportes?",
    a: "Cada 15 días recibís un informe completo: ventas, publicidad, rentabilidad por producto y plan de acción. Sin cajas negras.",
  },
  {
    q: "Mi cuenta ya factura bien, ¿vale la pena?",
    a: "Más facturación significa más potencial de optimización. Las cuentas grandes suelen tener el mayor margen de mejora en ADS y expansión de catálogo.",
  },
];

// ── Pricing ───────────────────────────────────────────────

export const tiers = [
  {
    id: "starter",
    name: "STARTER",
    range: "$10M – $20M / mes",
    fee: "USD 500",
    share: "Fee fijo + 10% sell-out",
    featured: false,
    features: [
      "Operación diaria completa",
      "Gestión de publicaciones",
      "Atención al cliente 7 días",
      "Reporte quincenal",
      "Salud de cuenta",
    ],
    ctaVariant: "ghost" as const,
  },
  {
    id: "growth",
    name: "GROWTH",
    range: "$20M – $70M / mes",
    fee: "USD 750",
    share: "Fee fijo + 8% sell-out",
    featured: true,
    features: [
      "Todo lo del plan Starter",
      "Product Ads y Brand Ads",
      "Optimización ACOS / ROAS",
      "Contenido visual de producto",
      "Repricing dinámico",
      "Análisis de rentabilidad por SKU",
    ],
    ctaVariant: "primary" as const,
  },
  {
    id: "scale",
    name: "SCALE",
    range: "+$70M / mes",
    fee: "USD 1000",
    share: "Fee fijo + 7% sell-out",
    featured: false,
    features: [
      "Todo lo del plan Growth",
      "Account manager dedicado",
      "Expansión de catálogo",
      "Full + Flex gestionado",
      "Forecasting y proyecciones",
      "Soporte prioritario",
    ],
    ctaVariant: "ghost" as const,
  },
];
