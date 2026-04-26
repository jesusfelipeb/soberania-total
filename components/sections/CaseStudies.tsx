const cases = [
  {
    client: "Kim Cedeño",
    role: "Life Coach & Tarotista",
    before: "Sin presencia web, dependía solo de boca a boca y redes sociales.",
    after: "Sitio profesional con agenda online. Aumento de consultas en el primer mes.",
    result: "+10 clientes nuevos/mes",
    service: "Desarrollo Web",
  },
  {
    client: "Finara",
    role: "SaaS de Salud Financiera",
    before: "Idea en papel, sin producto funcional, sin validación.",
    after: "MVP completo con dashboard, autenticación y base de datos en producción.",
    result: "De idea a producto en 3 semanas",
    service: "Desarrollo Web",
  },
  {
    client: "Banana Express",
    role: "Verdulería con delivery en Palermo, Buenos Aires",
    before: "Sin presencia online, dependía solo del local físico y boca a boca.",
    after: "Sitio web con catálogo de boxes, pedidos directos por WhatsApp y entrega el mismo día.",
    result: "Pedidos online desde el día 1",
    service: "Desarrollo Web",
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
          Lo que ya hice para otros
        </h2>
        <p className="mx-auto mb-14 max-w-lg text-center text-muted">
          No prometo — muestro. Estos son proyectos reales con resultados medibles.
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
                  <span className="font-medium text-neon">Después: </span>
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
