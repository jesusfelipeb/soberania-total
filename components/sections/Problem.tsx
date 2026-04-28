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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 15.75h.007v.008H12v-.008z"
          />
        </svg>
      ),
      text: "Tu negocio es invisible online",
      sub: "La gente busca en Google y no te encuentra. Tus competidores sí aparecen.",
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
      text: "Pierdes horas respondiendo mensajes",
      sub: "Preguntas repetitivas, citas sin confirmar, leads que se enfrían.",
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
            d="M3 3v18h18M7 14l4-4 3 3 5-6"
          />
        </svg>
      ),
      text: "Sabes que necesitas crecer, pero no sabes cómo",
      sub: "Información hay de sobra. Lo que falta es una estrategia clara.",
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
          Si tu negocio tiene alguno de estos problemas, puedo ayudarte a
          resolverlo esta semana.
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
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
      </div>
    </section>
  );
}
