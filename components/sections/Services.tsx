"use client";

import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/config";

const services = [
  {
    emoji: "🌐",
    title: "Desarrollo Web",
    subtitle: "Sitios que convierten visitantes en clientes",
    features: [
      "Diseño profesional y mobile-first",
      "Optimizado para velocidad (carga <2s)",
      "Integración con WhatsApp y redes",
      "Panel de administración si lo necesitás",
    ],
    price: "Desde $300 USD",
    time: "Entrega en 1-2 semanas",
    cta: "Quiero mi sitio web",
    whatsappMsg: WHATSAPP_MESSAGES.web,
    highlight: true,
  },
  {
    emoji: "🤖",
    title: "Automatización con IA",
    subtitle: "Chatbots que trabajan por vos 24/7",
    features: [
      "Respuestas automáticas en WhatsApp",
      "Captura de leads inteligente",
      "Agendamiento automático de citas",
      "Integración con ManyChat + IA",
    ],
    price: "Desde $200 USD",
    time: "Setup en 3-5 días",
    cta: "Quiero automatizar",
    whatsappMsg: WHATSAPP_MESSAGES.automation,
    highlight: false,
  },
  {
    emoji: "💰",
    title: "Asesoría Financiera",
    subtitle: "Entendé tu dinero. Protegé tu futuro.",
    features: [
      "Análisis personalizado de tu situación",
      "Estrategia de protección contra inflación",
      "Inversiones reales, no especulación",
      "Seguimiento post-sesión incluido",
    ],
    price: "$150 USD / sesión",
    time: "1 hora + plan de acción",
    cta: "Agendar sesión",
    whatsappMsg: WHATSAPP_MESSAGES.advisory,
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-dark py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-3 text-center text-sm font-medium uppercase tracking-widest text-neon">
          Servicios
        </p>
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Tres formas de trabajar conmigo
        </h2>
        <p className="mx-auto mb-14 max-w-lg text-center text-muted">
          Cada servicio está diseñado para darte resultados rápidos y medibles.
          Sin contratos largos, sin letra chica.
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all duration-200 ${
                s.highlight
                  ? "border-neon/30 bg-neon/[0.03] shadow-[0_0_40px_rgba(0,255,136,0.08)]"
                  : "border-dark-border bg-dark-card hover:border-neon/15"
              }`}
            >
              {s.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-neon px-3 py-1 text-xs font-bold text-dark">
                  MÁS POPULAR
                </span>
              )}

              <div className="mb-4 text-4xl">{s.emoji}</div>
              <h3 className="mb-1 text-xl font-bold">{s.title}</h3>
              <p className="mb-5 text-sm text-muted">{s.subtitle}</p>

              <ul className="mb-6 flex-1 space-y-3">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-neon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mb-5 border-t border-dark-border pt-5">
                <p className="text-2xl font-bold text-neon">{s.price}</p>
                <p className="text-xs text-muted">{s.time}</p>
              </div>

              <a
                href={getWhatsAppLink(s.whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold transition-all duration-200 active:scale-[0.98] ${
                  s.highlight
                    ? "bg-neon text-dark hover:bg-neon-bright hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]"
                    : "border border-neon/30 text-neon hover:bg-neon/10"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {s.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
