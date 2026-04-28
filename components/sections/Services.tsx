"use client";

import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/config";

const services = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
      </svg>
    ),
    title: "Desarrollo Web",
    subtitle: "Sitios que convierten visitantes en clientes",
    features: [
      "Landing pages, ecommerce y sitios a medida",
      "Diseño mobile-first y carga <2s",
      "Integración con WhatsApp, redes y pagos",
      "Panel de administración si lo necesitas",
    ],
    price: "Desde $80 USD",
    time: "Entrega en 5-14 días",
    cta: "Quiero mi sitio web",
    whatsappMsg: WHATSAPP_MESSAGES.web,
    highlight: true,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <rect x="5" y="7" width="14" height="12" rx="2" />
        <path d="M12 4v3M9 11h.01M15 11h.01M9 15h6" />
        <path d="M3 13v2M21 13v2" />
      </svg>
    ),
    title: "Automatización con IA",
    subtitle: "Agentes de IA que atienden y venden 24/7",
    features: [
      "Agentes de IA para atención al público y ventas",
      "Respuestas automáticas en WhatsApp",
      "Captura de leads y agendamiento de citas",
      "Integración con ManyChat + Claude",
    ],
    price: "Desde $600 USD",
    time: "Setup en 3-5 días",
    cta: "Quiero automatizar",
    whatsappMsg: WHATSAPP_MESSAGES.automation,
    highlight: false,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 3 3 5-6" />
        <path d="M14 7h5v5" />
      </svg>
    ),
    title: "Consultoría Financiera",
    subtitle: "Entiende tus números. Toma tus propias decisiones.",
    features: [
      "Diagnóstico financiero personal o de tu negocio",
      "Cómo funciona la inflación y cómo cubrirte",
      "Estructura para pymes: márgenes, precios y punto de equilibrio",
      "Material de estudio + seguimiento por WhatsApp",
    ],
    price: "$70 USD / sesión",
    time: "60 min + recursos personalizados",
    cta: "Agendar consultoría",
    whatsappMsg: WHATSAPP_MESSAGES.advisory,
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,136,0.04),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <p className="mb-4 text-center text-xs font-medium uppercase tracking-luxury text-neon sm:text-sm">
          Servicios
        </p>
        <h2 className="mb-4 text-center text-4xl font-light tracking-tight sm:text-5xl">
          Tres formas de{" "}
          <span className="font-black text-neon">trabajar</span> conmigo
        </h2>
        <p className="mx-auto mb-16 max-w-lg text-center text-white/50">
          Cada servicio está diseñado para darte resultados rápidos y medibles.
          Sin contratos largos, sin letra chica.
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className={`group relative flex flex-col rounded-2xl p-8 ${
                s.highlight ? "glass-card-accent" : "glass-card glass-card-hover"
              }`}
            >
              {s.highlight && (
                <span className="absolute -top-3 left-8 rounded-full border border-neon/30 bg-dark px-3 py-1 text-[10px] font-bold uppercase tracking-luxury text-neon">
                  Más popular
                </span>
              )}

              <div
                className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 ${
                  s.highlight ? "text-neon" : "text-white/90"
                } transition-colors duration-500 group-hover:text-neon`}
              >
                {s.icon}
              </div>

              <h3 className="mb-2 text-2xl font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mb-6 text-sm text-white/50">{s.subtitle}</p>

              <ul className="mb-8 flex-1 space-y-3">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-white/70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.75}
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-neon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 10.5l4 4 8-9"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mb-6 border-t border-white/5 pt-6">
                <p className="text-2xl font-bold tracking-tight text-white">
                  {s.price}
                </p>
                <p className="mt-1 text-xs uppercase tracking-luxury text-white/40">
                  {s.time}
                </p>
              </div>

              <a
                href={getWhatsAppLink(s.whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-semibold transition-all duration-500 active:scale-[0.98] ${
                  s.highlight
                    ? "bg-neon text-dark shadow-[0_0_25px_rgba(0,255,136,0.25)] hover:scale-[1.02] hover:bg-neon-bright hover:shadow-[0_0_40px_rgba(0,255,136,0.4)]"
                    : "border border-white/10 bg-white/[0.02] text-white hover:border-neon/40 hover:bg-white/[0.04] hover:text-neon"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
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
