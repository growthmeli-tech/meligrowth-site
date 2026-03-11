import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Space_Mono } from "next/font/google";
import ConfettiClick from "@/components/ConfettiClick";
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

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ML Growth | Operamos y escalamos tu negocio en Mercado Libre",
  description:
    "Gestión integral de cuentas Mercado Libre: operación diaria, marketing, logística y crecimiento estratégico. Más ventas, mejor rentabilidad.",
  keywords: [
    "Mercado Libre",
    "gestión de cuenta",
    "e-commerce",
    "marketplace",
    "ML Growth",
    "agencia Mercado Libre",
    "Product Ads",
    "logística e-commerce",
  ],
  openGraph: {
    title: "ML Growth | Operamos y escalamos tu negocio en Mercado Libre",
    description:
      "Equipo especializado que gestiona ventas, logística y marca dentro del marketplace líder de Latinoamérica.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bebasNeue.variable} ${dmSans.variable} ${spaceMono.variable}`}>
      <body className="antialiased">
        <ConfettiClick />
        {children}
      </body>
    </html>
  );
}
