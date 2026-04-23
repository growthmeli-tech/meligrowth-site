import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import { CalendlyTracker } from "@/components/CalendlyTracker";
import CustomCursor from "@/components/CustomCursor";
import WaveInit from "@/components/WaveInit";
import { GOOGLE_ADS_ID } from "@/lib/tracking";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://meligrowth.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Meli Growth | Operamos y escalamos tu negocio en Mercado Libre",
  description:
    "Partner operativo para cuentas de Mercado Libre. Operamos, optimizamos y escalamos el canal con foco en facturación, conversión y rentabilidad.",
  keywords: [
    "Mercado Libre",
    "gestión de cuenta",
    "e-commerce",
    "marketplace",
    "Meli Growth",
    "partner operativo Mercado Libre",
    "Product Ads",
    "logística e-commerce",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: "Meli Growth",
    images: [
      {
        url: "/images/opengraph-meli-g.png",
        width: 1514,
        height: 801,
        alt: "Meli Growth — Partner operativo para Mercado Libre",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Meli Growth",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.svg`,
      },
      description:
        "Partner operativo especializado en Mercado Libre. Operamos, optimizamos y escalamos cuentas con foco en facturación, conversión y rentabilidad.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+54-9-11-3573-1465",
        contactType: "customer support",
        availableLanguage: "Spanish",
        areaServed: "AR",
      },
      sameAs: [],
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service`,
      name: "Gestión de cuentas Mercado Libre",
      provider: { "@id": `${SITE_URL}/#organization` },
      serviceType: "Partner operativo Mercado Libre",
      areaServed: { "@type": "Country", name: "Argentina" },
      description:
        "Servicio integral para operar, optimizar y escalar cuentas de Mercado Libre Argentina. Incluye gestión diaria, publicidad, conversión, logística y reportes de rentabilidad.",
      offers: {
        "@type": "Offer",
        description: "Modelo a medida según facturación, complejidad operativa y margen de mejora.",
        areaServed: { "@type": "Country", name: "Argentina" },
        availability: "https://schema.org/InStock",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Modelos Meli Growth",
        itemListElement: [
          { "@type": "Offer", name: "Operación", description: "Para cuentas con facturación mensual de $10M a $20M" },
          { "@type": "Offer", name: "Growth", description: "Para cuentas con facturación mensual de $20M a $70M" },
          { "@type": "Offer", name: "Escala", description: "Para cuentas con facturación mensual mayor a $70M" },
        ],
      },
    },
    {
      "@type": "HowTo",
      "@id": `${SITE_URL}/#howto`,
      name: "Cómo empezar con Meli Growth",
      description: "El proceso para empezar a operar Mercado Libre con Meli Growth.",
      totalTime: "P1W",
      step: [
        { "@type": "HowToStep", position: 1, name: "Diagnóstico", text: "Analizamos cuenta, catálogo y estructura de costos para detectar desvíos y oportunidades.", url: `${SITE_URL}/#precios` },
        { "@type": "HowToStep", position: 2, name: "Toma de control", text: "Ordenamos la operación y ejecutamos las primeras mejoras sin interrumpir ventas.", url: `${SITE_URL}/#precios` },
        { "@type": "HowToStep", position: 3, name: "Escala", text: "Optimizamos de forma continua y medimos cada decisión por impacto en resultados.", url: `${SITE_URL}/#precios` },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_ID}', {
  allow_enhanced_conversions: true
});`,
          }}
        />
      </head>
      <body className="antialiased">
        <CalendlyTracker />
        <a href="#main-content" className="skip-link">
          Ir al contenido principal
        </a>
        <CustomCursor />
        <WaveInit />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
