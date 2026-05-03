"use client";

import { getWhatsAppLink } from "@/lib/config";

const steps = [
  {
    num: "01",
    title: "Cliente llega",
    desc: "Un prospecto visita tu landing page optimizada.",
  },
  {
    num: "02",
    title: "IA responde",
    desc: "El agente de Inteligencia Artificial le contesta inmediatamente, 24/7.",
  },
  {
    num: "03",
    title: "Filtrado automático",
    desc: "La IA hace las preguntas clave y descarta a los curiosos.",
  },
  {
    num: "04",
    title: "Agenda o Cierre",
    desc: "Recibes al cliente en tu WhatsApp listo para agendar o pagar.",
  },
];

const offerFeatures = [
  "Landing page optimizada para conversión",
  "Integración completa con WhatsApp",
  "Agente de IA que responde y filtra automáticamente",
  "Sistema de seguimiento de clientes",
  "Optimización básica de ventas",
];

export default function Services() {
  return (
    <section id="sistema" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,136,0.04),transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl px-6">
        
        {/* === SOLUCIÓN (PASOS) === */}
        <div className="mb-24">
          <p className="mb-4 text-center text-xs font-medium uppercase tracking-luxury text-neon sm:text-sm">
            La Solución
          </p>
          <h2 className="mb-16 text-center text-3xl font-light tracking-tight sm:text-5xl">
            Tu negocio funcionando como una <br className="hidden sm:block" />
            <span className="font-black text-neon">máquina de clientes</span>
          </h2>

          <div className="grid gap-6 sm:grid-cols-4">
            {steps.map((step) => (
              <div key={step.num} className="relative flex flex-col pt-8">
                <span className="absolute left-0 top-0 text-5xl font-black text-white/[0.03]">
                  {step.num}
                </span>
                <div className="mb-4 h-0.5 w-12 bg-neon/40"></div>
                <h3 className="mb-2 text-lg font-bold text-white/90">{step.title}</h3>
                <p className="text-sm text-white/50">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* === OFERTA === */}
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-center text-3xl font-light tracking-tight sm:text-4xl">
            ¿Qué incluye el <span className="font-black text-neon">sistema?</span>
          </h2>
          
          <div className="glass-card-accent group relative flex flex-col rounded-3xl p-8 sm:p-12">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-neon/30 bg-dark px-4 py-1.5 text-xs font-bold uppercase tracking-luxury text-neon">
              Paquete Único
            </span>

            <ul className="mb-10 mt-4 space-y-5">
              {offerFeatures.map((f) => (
                <li key={f} className="flex items-start gap-4 text-base text-white/80 sm:text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="mt-1 h-5 w-5 flex-shrink-0 text-neon"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 10.5l4 4 8-9" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <div className="text-center">
              <a
                href={getWhatsAppLink("Hola, quiero mi sistema automatizado de captación de clientes con IA.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neon px-8 py-4 text-base font-bold text-dark shadow-[0_0_30px_rgba(0,255,136,0.25)] transition-all duration-500 hover:scale-[1.02] hover:bg-neon-bright hover:shadow-[0_0_40px_rgba(0,255,136,0.4)] active:scale-[0.98] sm:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Quiero mi sistema
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
