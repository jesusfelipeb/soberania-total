// ============================================
// CONFIGURACIÓN CENTRAL DEL SITIO
// Cambia estos valores según tus datos reales
// ============================================

export const WHATSAPP_NUMBER = "5491132924310";

export const SITE_CONFIG = {
  name: "Felipe",
  title: "Felipe — Desarrollo Web, IA y Consultoría Financiera",
  description:
    "Sitios web que venden, automatización con IA y consultoría financiera. Resultados reales en 2 semanas.",
  url: "https://jesusfelipeb.com",
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
