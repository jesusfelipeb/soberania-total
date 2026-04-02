"use client";

import { motion } from "framer-motion";

const pilares = [
  {
    numeral: "I",
    title: "El Sistema Expuesto",
    description:
      "Cómo fluye el dinero, por qué el fiat colapsa y qué no te cuentan sobre el sistema que controla tu vida.",
  },
  {
    numeral: "II",
    title: "Bitcoin como filosofía",
    description:
      "Soberanía monetaria como acto de resistencia. No especulación — un cambio de paradigma.",
  },
  {
    numeral: "III",
    title: "Consciencia y Realidad",
    description:
      "Condicionamiento, percepción y lo que significa realmente despertar del piloto automático.",
  },
  {
    numeral: "IV",
    title: "Vida Diseñada",
    description:
      "El proceso real de construir una vida en tus propios términos. Sin gurús. Sin fórmulas.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function Pilares() {
  return (
    <section className="bg-midnight py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <motion.span
            variants={cardVariants}
            custom={0}
            className="mb-4 inline-block font-display text-xs font-medium uppercase tracking-[0.3em] text-copper"
          >
            Filosofía
          </motion.span>
          <motion.h2
            variants={cardVariants}
            custom={0}
            className="font-display text-3xl font-semibold tracking-tight text-bone sm:text-4xl"
          >
            Cuatro lentes. Una misma pregunta.
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid gap-5 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {pilares.map((pilar, i) => (
            <motion.div
              key={pilar.title}
              custom={i}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="group rounded-2xl border border-copper/15 bg-midnight-light p-7 transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(184,115,51,0.1)] sm:p-8"
            >
              <span className="mb-4 inline-block font-display text-3xl font-bold text-copper/60 transition-colors group-hover:text-copper sm:text-4xl">
                {pilar.numeral}
              </span>
              <h3 className="mb-2 font-display text-xl font-semibold text-bone">
                {pilar.title}
              </h3>
              <p className="text-sm leading-relaxed text-bone/45 sm:text-base">
                {pilar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
