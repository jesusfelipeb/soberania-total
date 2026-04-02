"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const redes = [
  {
    name: "Instagram",
    handle: "@jesusfelipeb",
    href: "https://instagram.com/jesusfelipeb",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    handle: "@jesusfelipebr",
    href: "https://tiktok.com/@jesusfelipebr",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78c.27 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 10.86 4.46V12.8a8.28 8.28 0 0 0 4.77 1.5V10.9a4.85 4.85 0 0 1-.81.07 4.85 4.85 0 0 1-.38-.02V6.69z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    handle: "@jesusfelipeb",
    href: "https://youtube.com/@jesusfelipeb",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.3-1.9.5-3.8.5-5.8s-.2-3.9-.5-5.8zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z" />
      </svg>
    ),
  },
  {
    name: "Kick",
    handle: "@jesusfelipeb",
    href: "https://kick.com/jesusfelipeb",
    icon: (
      <span className="flex h-5 w-5 items-center justify-center rounded bg-current text-[10px] font-black leading-none">
        <span className="text-midnight">K</span>
      </span>
    ),
  },
  {
    name: "Telegram",
    handle: "Canal de Telegram",
    href: "https://t.me/canaljesusfelipeb",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M22.05 1.58a1.6 1.6 0 0 0-1.63-.15L1.94 9.97a1.2 1.2 0 0 0 .1 2.2l4.54 1.4 1.76 5.64a1.1 1.1 0 0 0 1.8.46l2.56-2.1 4.97 3.67a1.4 1.4 0 0 0 2.17-.85L22.6 3.02a1.6 1.6 0 0 0-.55-1.44zM9.77 14.3l-.36 3.3-1.35-4.36 10.5-7.13L9.77 14.3z" />
      </svg>
    ),
  },
];

const productos = [
  {
    title: "Newsletter Semanal",
    description:
      "Una carta para mentes libres. Análisis, filosofía y estrategia financiera.",
    precio: "Gratis para empezar",
    cta: "Suscribirme",
    href: "#newsletter",
    badge: null,
    badgeColor: "",
  },
  {
    title: "Comunidad Privada",
    description:
      "Telegram exclusivo. Sesiones en vivo, análisis y comunidad de soberanos.",
    precio: "Próximamente",
    cta: "Quiero entrar",
    href: "#newsletter",
    badge: "PRÓXIMAMENTE",
    badgeColor: "border-copper/40 text-copper",
  },
  {
    title: "Mentoría 1-1",
    description:
      "90 minutos para rediseñar tu estrategia financiera y de vida desde cero.",
    precio: "Consultar disponibilidad",
    cta: "Agendar sesión",
    href: "#",
    badge: "LIMITADO",
    badgeColor: "border-gold/40 text-gold",
  },
];

export default function LinksProductos() {
  return (
    <section className="bg-midnight-card py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* Redes Sociales */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-20"
        >
          <motion.span
            variants={fadeInUp}
            custom={0}
            className="mb-4 block text-center font-display text-xs font-medium uppercase tracking-[0.3em] text-silver/60"
          >
            Encontrame en
          </motion.span>

          <motion.div
            variants={fadeInUp}
            custom={1}
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
          >
            {redes.map((red) => (
              <a
                key={red.name}
                href={red.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-full border border-silver/10 bg-midnight/50 px-5 py-2.5 text-sm text-silver/70 transition-all duration-300 hover:border-silver/30 hover:text-bone"
              >
                {red.icon}
                <span className="hidden sm:inline">{red.handle}</span>
                <span className="sm:hidden">{red.name}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Productos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2
            variants={fadeInUp}
            custom={0}
            className="mb-4 text-center font-display text-3xl font-semibold tracking-tight text-bone sm:text-4xl"
          >
            Cómo trabajar conmigo
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={0}
            className="mx-auto mb-12 max-w-lg text-center text-bone/40"
          >
            Tres niveles de profundidad. Elegí dónde empezar.
          </motion.p>

          <div className="grid gap-5 sm:grid-cols-3">
            {productos.map((prod, i) => (
              <motion.div
                key={prod.title}
                custom={i + 1}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="group relative flex flex-col rounded-2xl border border-silver/10 bg-midnight/60 p-7 transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(168,168,179,0.06)]"
              >
                {prod.badge && (
                  <span
                    className={`mb-4 inline-block self-start rounded-full border px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${prod.badgeColor}`}
                  >
                    {prod.badge}
                  </span>
                )}
                <h3 className="mb-2 font-display text-xl font-semibold text-bone">
                  {prod.title}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-bone/40">
                  {prod.description}
                </p>
                <p className="mb-4 text-xs font-medium uppercase tracking-wider text-silver/50">
                  {prod.precio}
                </p>
                <a
                  href={prod.href}
                  className="inline-block rounded-full border border-silver/20 px-6 py-2.5 text-center text-sm font-medium text-bone/70 transition-all duration-300 hover:border-bone/40 hover:text-bone"
                >
                  {prod.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
