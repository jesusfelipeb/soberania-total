import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Felipe — Sitios Web, Automatización IA y Asesoría Financiera",
  description:
    "Hago sitios web que venden, automatizo tu negocio con IA, y te enseño a proteger tu dinero. Resultados reales en 2 semanas.",
  openGraph: {
    title: "Felipe — Desarrollo Web, IA y Asesoría Financiera",
    description:
      "Sitios web profesionales, chatbots con IA y asesoría financiera 1-a-1. Contactame por WhatsApp.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
