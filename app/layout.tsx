import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import StructuredData from "@/components/StructuredData";
import { SITE_CONFIG, SITE_URL } from "@/lib/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "500", "700"],
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_CONFIG.title,
    template: "%s · Felipe Becerra",
  },
  description: SITE_CONFIG.description,
  applicationName: "Felipe Becerra · Desarrollo Web e IA",
  authors: [{ name: "Felipe Becerra", url: SITE_URL }],
  creator: "Felipe Becerra",
  publisher: "Felipe Becerra",
  generator: "Next.js",
  keywords: [
    "desarrollo web Buenos Aires",
    "diseño web Argentina",
    "desarrollador web freelance",
    "landing page Argentina",
    "ecommerce Argentina",
    "Next.js Argentina",
    "agente IA WhatsApp",
    "automatización WhatsApp con IA",
    "chatbot WhatsApp Argentina",
    "ManyChat consultor",
    "consultoría financiera emprendedores",
    "finanzas para PyMEs",
    "punto de equilibrio negocio",
    "Felipe Becerra",
    "jesusfelipeb",
  ],
  category: "Servicios profesionales",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    url: SITE_URL,
    siteName: "Felipe Becerra",
    title: SITE_CONFIG.title,
    description:
      "Desarrollo web freelance en Buenos Aires. Sitios profesionales desde $80, agentes de IA para WhatsApp y consultoría financiera para emprendedores y pymes.",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    creator: "@jesusfelipeb",
    site: "@jesusfelipeb",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    // Cuando verifiques en Google Search Console, pegá acá el valor del meta tag.
    // Ejemplo: google: "abc123def456..."
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
