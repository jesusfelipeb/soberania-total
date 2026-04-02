export default function Problem() {
  const problems = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75h.007v.008H12v-.008z" />
        </svg>
      ),
      text: "Tu negocio es invisible online",
      sub: "La gente busca en Google y no te encuentra. Tus competidores sí aparecen.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "Perdés horas respondiendo mensajes",
      sub: "Preguntas repetitivas, citas sin confirmar, leads que se enfrían.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      ),
      text: "Sabés que necesitás crecer, pero no sabés cómo",
      sub: "Información hay de sobra. Lo que falta es una estrategia clara.",
    },
  ];

  return (
    <section className="bg-dark-card py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          ¿Te suena familiar?
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-muted">
          Si tu negocio tiene alguno de estos problemas, puedo ayudarte a resolverlo esta semana.
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.text}
              className="rounded-2xl border border-dark-border bg-dark p-6 transition-colors hover:border-neon/20"
            >
              <div className="mb-4 inline-flex rounded-lg bg-neon/10 p-3 text-neon">
                {p.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{p.text}</h3>
              <p className="text-sm leading-relaxed text-muted">{p.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
