const cases = [
  {
    client: "Kim Cedeño",
    role: "Life Coach & Tarotista",
    before: "Respondía mensajes a mano, perdiendo horas al día y clientes por demoras.",
    after: "Sistema implementado que recibe a los clientes y agenda sesiones automáticamente sin su intervención.",
    result: "+10 consultas nuevas al mes",
    service: "Captación Automatizada",
  },
  {
    client: "Finara",
    role: "Startup de Salud Financiera",
    before: "No tenían un sistema para capturar ni procesar el interés de nuevos prospectos de forma eficiente.",
    after: "Plataforma instalada que recibe visitantes, captura sus datos y los clasifica listos para la venta.",
    result: "Sistema validado en 3 semanas",
    service: "Plataforma de Leads",
  },
  {
    client: "Banana Express",
    role: "Delivery de Alimentos",
    before: "Tomaban pedidos manuales. Colapso en horas pico y clientes perdidos por la espera en WhatsApp.",
    after: "Proceso donde el cliente elige rápido y el sistema envía la solicitud lista para procesar.",
    result: "Ventas automatizadas desde el día 1",
    service: "Pedidos por WhatsApp",
  },
];

export default function CaseStudies() {
  return (
    <section id="casos" className="bg-dark-card py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-3 text-center text-sm font-medium uppercase tracking-widest text-neon">
          Resultados reales
        </p>
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Sistemas funcionando ahora mismo
        </h2>
        <p className="mx-auto mb-14 max-w-lg text-center text-muted">
          No te hablo de teoría. Estos son negocios reales que hoy dedican su tiempo a trabajar, no a responder mensajes.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <div
              key={c.client}
              className="flex flex-col rounded-2xl border border-dark-border bg-dark p-6"
            >
              <span className="mb-4 inline-block self-start rounded-full bg-neon/10 px-3 py-1 text-xs font-medium text-neon">
                {c.service}
              </span>

              <h3 className="mb-1 text-lg font-bold">{c.client}</h3>
              <p className="mb-4 text-xs text-muted">{c.role}</p>

              <div className="mb-4 flex-1 space-y-3 text-sm">
                <div>
                  <span className="font-medium text-red-400">Antes: </span>
                  <span className="text-white/60">{c.before}</span>
                </div>
                <div>
                  <span className="font-medium text-neon">Con el sistema: </span>
                  <span className="text-white/60">{c.after}</span>
                </div>
              </div>

              <div className="rounded-lg bg-neon/10 px-4 py-3 text-center">
                <p className="text-lg font-bold text-neon">{c.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
