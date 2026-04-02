"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const pills = [
  "4+ años en mercados",
  "Bitcoin desde 2019",
  "Buenos Aires → Mundo",
];

export default function SobreMi() {
  return (
    <section className="bg-midnight-card py-20 sm:py-28">
      <motion.div
        className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 md:flex-row md:items-start md:gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {/* Photo */}
        <motion.div variants={fadeInUp} className="w-full flex-shrink-0 md:w-[40%]">
          <div className="relative mx-auto aspect-[3/4] w-64 overflow-hidden rounded-lg border border-gold/20 sm:w-72 md:mx-0 md:w-full">
            <Image
              src="/assets/felipe.jpg"
              alt="Felipe"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 288px, 40vw"
            />
          </div>
        </motion.div>

        {/* Text */}
        <div className="w-full md:w-[60%]">
          <motion.span
            variants={fadeInUp}
            className="mb-4 inline-block font-display text-xs font-medium uppercase tracking-[0.3em] text-bone/40"
          >
            Quién soy
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="mb-6 font-display text-3xl font-semibold tracking-tight text-bone sm:text-4xl"
          >
            Venezolano. Testigo del colapso.
          </motion.h2>

          <motion.div variants={fadeInUp} className="space-y-4 text-base leading-relaxed text-bone/60 sm:text-lg">
            <p>
              Vi colapsar una moneda entera desde adentro. No en las noticias —
              en la heladera vacía, en los ahorros de mi familia que valían
              menos cada semana.
            </p>
            <p>
              Eso me enseñó lo que ningún libro de finanzas puede: cuando el
              sistema falla, solo sobrevive quien entiende las reglas. Hoy
              construyo mi soberanía — y te muestro cómo hacerlo.
            </p>
          </motion.div>

          {/* Pills */}
          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-3">
            {pills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-bone/10 bg-bone/5 px-4 py-1.5 text-xs font-medium text-bone/50 sm:text-sm"
              >
                {pill}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
