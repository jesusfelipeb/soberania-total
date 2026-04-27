import { SITE_CONFIG, SITE_URL, WHATSAPP_NUMBER } from "@/lib/config";

const PERSON_ID = `${SITE_URL}/#felipe`;
const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export default function StructuredData() {
  const graph = [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: SITE_CONFIG.title,
      description: SITE_CONFIG.description,
      inLanguage: "es-AR",
      publisher: { "@id": BUSINESS_ID },
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Felipe Becerra",
      givenName: "Felipe",
      familyName: "Becerra",
      jobTitle: "Desarrollador Web e Ingeniero de Automatización con IA",
      description:
        "Economista venezolano, desarrollador autodidacta. Construye sitios web, agentes de IA y da consultoría financiera para emprendedores y pymes en Argentina.",
      url: SITE_URL,
      image: `${SITE_URL}/assets/fotoperfil.jpg`,
      nationality: { "@type": "Country", name: "Venezuela" },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Universidad de Los Andes",
        address: { "@type": "PostalAddress", addressCountry: "VE" },
      },
      knowsAbout: [
        "Desarrollo Web",
        "Next.js",
        "React",
        "TypeScript",
        "Inteligencia Artificial",
        "Agentes de IA",
        "Automatización con WhatsApp",
        "Consultoría Financiera",
        "Finanzas para PyMEs",
        "ManyChat",
        "Supabase",
      ],
      sameAs: [
        "https://instagram.com/jesusfelipeb",
        "https://linkedin.com/in/jesusfelipeb",
        "https://github.com/jesusfelipeb",
        "https://tiktok.com/@jesusfelipebr",
      ],
      worksFor: { "@id": BUSINESS_ID },
    },
    {
      "@type": "ProfessionalService",
      "@id": BUSINESS_ID,
      name: "Felipe Becerra · Desarrollo Web e IA",
      description: SITE_CONFIG.description,
      url: SITE_URL,
      image: `${SITE_URL}/assets/fotoperfil.jpg`,
      logo: `${SITE_URL}/icon`,
      founder: { "@id": PERSON_ID },
      priceRange: "$$",
      areaServed: [
        { "@type": "City", name: "Buenos Aires" },
        { "@type": "Country", name: "Argentina" },
        { "@type": "Place", name: "LATAM (remoto)" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE_CONFIG.city,
        addressRegion: SITE_CONFIG.region,
        addressCountry: SITE_CONFIG.country,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: `+${WHATSAPP_NUMBER}`,
        availableLanguage: ["Spanish"],
        areaServed: "AR",
      },
      sameAs: [
        "https://instagram.com/jesusfelipeb",
        "https://linkedin.com/in/jesusfelipeb",
      ],
      knowsLanguage: ["es-AR"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Desarrollo Web",
              description:
                "Landing pages, ecommerce y sitios a medida. Mobile-first, carga rápida, integración con WhatsApp y pagos. Entrega en 5-14 días.",
              serviceType: "Diseño y desarrollo de sitios web",
              provider: { "@id": BUSINESS_ID },
              areaServed: "AR",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "80",
              priceCurrency: "USD",
              minPrice: "80",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Automatización con IA",
              description:
                "Agentes de IA para atención al público y ventas 24/7. Respuestas automáticas en WhatsApp, captura de leads, agendamiento. Setup en 3-5 días.",
              serviceType: "Automatización con inteligencia artificial",
              provider: { "@id": BUSINESS_ID },
              areaServed: "AR",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "600",
              priceCurrency: "USD",
              minPrice: "600",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Consultoría Financiera",
              description:
                "Diagnóstico financiero personal o de negocio. Inflación, márgenes, precios, punto de equilibrio para pymes. Material de estudio incluido.",
              serviceType: "Consultoría financiera educativa",
              provider: { "@id": BUSINESS_ID },
              areaServed: "AR",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "70",
              priceCurrency: "USD",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cuánto cuesta una página web profesional?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Una landing page profesional desde $80 USD, lista en 5-14 días. Incluye diseño mobile-first, carga rápida, e integración con WhatsApp y redes. Sitios más complejos (ecommerce, plataformas a medida) se cotizan según alcance.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué hace un agente de IA para WhatsApp?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un agente de IA atiende y responde a tus clientes en WhatsApp 24/7: contesta preguntas frecuentes, captura datos de leads, agenda turnos y deriva los casos importantes a un humano. El setup arranca desde $600 USD y lleva 3-5 días.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué incluye la consultoría financiera?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sesión de 60 minutos por $70 USD. Diagnóstico financiero personal o de tu negocio: cómo cubrirte de la inflación, estructura de precios para pymes (márgenes, punto de equilibrio), conceptos clave para tomar tus propias decisiones. Es educación financiera, no asesoría regulada.",
          },
        },
        {
          "@type": "Question",
          name: "¿Trabajás solo o con un equipo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trabajo solo. No soy una agencia que subcontrata. El desarrollo lo hago yo, hablás directo conmigo desde la primera consulta hasta la entrega. Eso significa decisiones rápidas, sin intermediarios y precios sin overhead.",
          },
        },
        {
          "@type": "Question",
          name: "¿Desde dónde trabajás?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Desde Buenos Aires, Argentina. Trabajo en español para clientes de Argentina y toda LATAM, de manera remota. Comunicación principal por WhatsApp.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto tarda en estar listo un sitio web?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Una landing page entre 5 y 7 días. Un sitio corporativo o ecommerce simple entre 10 y 14 días. Plataformas a medida se estiman al cotizar. Antes de empezar tenemos una llamada por WhatsApp para alinear alcance y plazos.",
          },
        },
      ],
    },
  ];

  const json = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
