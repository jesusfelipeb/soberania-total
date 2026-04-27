// ============================================
// CONFIGURACIÓN CENTRAL DEL SITIO
// Cambia estos valores según tus datos reales
// ============================================

export const WHATSAPP_NUMBER = "5491132924310";

// La URL final viene de NEXT_PUBLIC_SITE_URL (Vercel env var).
// El fallback se usa solo si la env var no está cargada.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://jesusfelipeb.vercel.app";

export const SITE_CONFIG = {
  name: "Felipe Becerra",
  title: "Felipe Becerra — Desarrollo Web, IA y Consultoría Financiera",
  description:
    "Desarrollo web freelance en Buenos Aires. Sitios web profesionales desde $80, agentes de IA para WhatsApp, y consultoría financiera para emprendedores y pymes.",
  url: SITE_URL,
  locale: "es_AR",
  city: "Buenos Aires",
  region: "Ciudad Autónoma de Buenos Aires",
  country: "AR",
};

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/jesusfelipeb",
  tiktok: "https://tiktok.com/@jesusfelipebr",
  youtube: "https://youtube.com/@jesusfelipeb",
  telegram: "https://t.me/canaljesusfelipeb",
  linkedin: "https://linkedin.com/in/jesusfelipeb",
};

export const WHATSAPP_MESSAGES = {
  general: "Hola Felipe, vi tu sitio web y me interesa saber más sobre tus servicios.",
  web: "Hola Felipe, necesito un sitio web profesional para mi negocio. ¿Podemos hablar?",
  automation: "Hola Felipe, me interesa automatizar respuestas con IA para mi negocio.",
  advisory: "Hola Felipe, quiero agendar una sesión de consultoría financiera.",
};

export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
