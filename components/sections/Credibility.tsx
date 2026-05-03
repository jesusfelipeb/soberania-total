export default function Benefits() {
  const benefits = [
    {
      title: "Más clientes sin trabajar más",
      desc: "El sistema atiende, filtra y convierte por ti. Tu única tarea es recibir a los prospectos calificados y cerrar el trato.",
    },
    {
      title: "Respuesta inmediata 24/7",
      desc: "Mientras descansas o estás en consulta, el agente responde en segundos y nunca deja a un prospecto esperando.",
    },
    {
      title: "No pierdes oportunidades",
      desc: "Si alguien tiene interés, el sistema captura sus datos y le da seguimiento antes de que busque a tu competencia.",
    },
    {
      title: "Escalar sin contratar empleados",
      desc: "Maneja el volumen de 5 agentes de ventas sin pagar sueldos, cargas sociales ni tener que entrenar personal.",
    },
  ];

  return (
    <section className="bg-dark py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-4 text-center text-xs font-medium uppercase tracking-luxury text-neon sm:text-sm">
          Beneficios
        </p>
        <h2 className="mb-16 text-center text-3xl font-light tracking-tight sm:text-4xl">
          El resultado: <span className="font-black text-neon">Tranquilidad y Crecimiento</span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {benefits.map((b) => (
            <div key={b.title} className="glass-card flex flex-col rounded-2xl p-8">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neon/10 text-neon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white/90">{b.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
