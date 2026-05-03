export default function Problem() {
  const problems = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.25}
          className="h-6 w-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
      text: "Dependes de recomendaciones",
      sub: "No tienes control sobre cuántos clientes llegan cada mes.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.25}
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      text: "Pierdes clientes por responder tarde",
      sub: "Tardas horas en responder y el cliente se va con otra opción.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.25}
          className="h-6 w-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
      text: "No tienes un sistema de ventas",
      sub: "Las ventas son aleatorias. No hay un proceso para convertirlos predeciblemente.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.25}
          className="h-6 w-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      text: "Todo depende de ti",
      sub: "Si no estás contestando mensajes o vendiendo, el negocio se frena.",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.01),transparent)]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <p className="mb-4 text-center text-xs font-medium uppercase tracking-luxury text-neon sm:text-sm">
          El problema
        </p>
        <h2 className="mb-4 text-center text-4xl font-light tracking-tight sm:text-5xl">
          ¿Te suena <span className="font-black text-neon">familiar?</span>
        </h2>
        <p className="mx-auto mb-16 max-w-xl text-center text-white/50">
          Si te identificas con alguna de estas situaciones, tu negocio está atascado.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {problems.map((p) => (
            <div
              key={p.text}
              className="glass-card glass-card-hover group rounded-2xl p-8"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-neon transition-colors duration-500 group-hover:border-neon/40">
                {p.icon}
              </div>
              <h3 className="mb-3 text-lg font-semibold tracking-tight">
                {p.text}
              </h3>
              <p className="text-sm leading-relaxed text-white/55">{p.sub}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="inline-block rounded-xl border border-neon/20 bg-neon/[0.03] px-6 py-4 text-lg font-medium text-white/90">
            Si no tienes un sistema, <span className="font-bold text-neon">estás perdiendo dinero todos los días.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
