import Image from "next/image";

const facts = [
  "Estudios de economía en la Universidad de Los Andes (Venezuela), interrumpidos por la crisis del país",
  "Viví 2 colapsos económicos — Venezuela y Argentina 2020",
  "4+ años estudiando mercados financieros y cripto",
  "Desarrollo web profesional con Next.js y TypeScript",
  "Automatización con IA para negocios reales",
];

export default function Credibility() {
  return (
    <section className="bg-dark py-16 sm:py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 md:flex-row md:gap-16">
        {/* Photo */}
        <div className="flex-shrink-0">
          <div className="relative h-72 w-72 overflow-hidden rounded-2xl border border-dark-border sm:h-80 sm:w-80">
            <Image
              src="/assets/fotoperfil.jpg"
              alt="Felipe"
              fill
              className="object-cover"
              sizes="320px"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-neon">
            Quién soy
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Construí resiliencia porque
            <br />
            <span className="text-neon">no me quedó otra opción.</span>
          </h2>

          <p className="mb-6 max-w-lg text-base leading-relaxed text-muted">
            Nací en Venezuela. Vi cómo el dinero dejaba de funcionar, cómo los
            ahorros se evaporaban, cómo un país entero perdía la soberanía sobre
            su propia vida. Emigré a Argentina buscando estabilidad y me encontré
            con una pandemia. Aprendí por necesidad, no por teoría.
          </p>
          <p className="mb-8 max-w-lg text-base leading-relaxed text-muted">
            Hoy uso esa experiencia para construir herramientas reales: sitios web
            que generan clientes, automatización que ahorra tiempo, y conocimiento
            financiero que protege tu dinero.
          </p>

          <ul className="space-y-3">
            {facts.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-white/70">
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
        </div>
      </div>
    </section>
  );
}
