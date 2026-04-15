import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import Script from "next/script";
import CustomCursor from "@/components/CustomCursor";
import WaveInit from "@/components/WaveInit";
import { faqs } from "@/lib/data";
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
    "Gestión integral de cuentas Mercado Libre: operación diaria, marketing, logística y crecimiento estratégico. Más ventas, mejor rentabilidad.",
  keywords: [
    "Mercado Libre",
    "gestión de cuenta",
    "e-commerce",
    "marketplace",
    "Meli Growth",
    "agencia Mercado Libre",
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
        alt: "Meli Growth — Agencia full-service para Mercado Libre",
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
        "Agencia full-service especializada en Mercado Libre. Operamos, escalamos y hacemos crecer tu cuenta con resultados reales.",
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
      serviceType: "Agencia full-service Mercado Libre",
      areaServed: { "@type": "Country", name: "Argentina" },
      description:
        "Servicio integral de operación, publicidad y logística para vendedores en Mercado Libre Argentina. Incluye gestión diaria de cuenta, Product Ads y Brand Ads, logística Full y Flex, atención al cliente 7 días y reportes quincenales de rentabilidad.",
      offers: {
        "@type": "Offer",
        description: "Precio a consultar según facturación mensual de la cuenta.",
        areaServed: { "@type": "Country", name: "Argentina" },
        availability: "https://schema.org/InStock",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Planes Meli Growth",
        itemListElement: [
          { "@type": "Offer", name: "Plan Starter", description: "Para cuentas con facturación menor a $10M mensuales" },
          { "@type": "Offer", name: "Plan Growth", description: "Para cuentas con facturación entre $10M y $70M mensuales" },
          { "@type": "Offer", name: "Plan Scale", description: "Para cuentas con facturación mayor a $70M mensuales" },
        ],
      },
    },
    {
      "@type": "HowTo",
      "@id": `${SITE_URL}/#howto`,
      name: "Cómo empezar con Meli Growth",
      description: "El proceso para comenzar a trabajar con nuestra agencia de Mercado Libre.",
      totalTime: "P1W",
      step: [
        { "@type": "HowToStep", position: 1, name: "Diagnóstico", text: "Analizamos tu cuenta, tus productos y tus números. En 48 horas tenés un informe real con oportunidades concretas.", url: `${SITE_URL}/#como-funciona` },
        { "@type": "HowToStep", position: 2, name: "Onboarding", text: "Te integramos, tomamos el control y activamos las primeras mejoras. Sin fricción, sin interrupción de operación.", url: `${SITE_URL}/#como-funciona` },
        { "@type": "HowToStep", position: 3, name: "Operación", text: "Gestionamos todo: ADS, publicaciones, preguntas, logística, salud de cuenta. Cada día, sin excepción.", url: `${SITE_URL}/#como-funciona` },
        { "@type": "HowToStep", position: 4, name: "Reportes", text: "Comunicación directa y reporte quincenal. Sabés exactamente qué se hizo, cómo fue y qué viene.", url: `${SITE_URL}/#como-funciona` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_ID}');`}
        </Script>
      </head>
      <body className="antialiased">
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
