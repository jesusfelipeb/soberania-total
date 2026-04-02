"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const benefits = [
  "Análisis financiero sin filtros",
  "Reflexiones sobre Bitcoin y soberanía",
  "El proceso real — sin postureo",
];

type Status = "idle" | "loading" | "success" | "error";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Error al suscribir. Intentá de nuevo.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Error de conexión. Intentá de nuevo.");
    }
  }

  return (
    <section id="newsletter" className="dot-texture bg-midnight-deep py-20 sm:py-28">
      <motion.div
        className="mx-auto max-w-2xl px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.span
          variants={fadeInUp}
          custom={0}
          className="mb-6 inline-block font-display text-xs font-medium uppercase tracking-[0.3em] text-gold/50"
        >
          Newsletter
        </motion.span>

        <motion.h2
          variants={fadeInUp}
          custom={0}
          className="mb-4 font-display text-3xl font-semibold tracking-tight text-bone sm:text-4xl"
        >
          Una carta semanal para mentes libres.
        </motion.h2>

        <motion.p variants={fadeInUp} custom={1} className="mb-8 text-bone/45">
          Sin algoritmos. Sin spam. Solo pensamiento real sobre dinero,
          consciencia y libertad.
        </motion.p>

        {/* Benefits */}
        <motion.ul
          variants={fadeInUp}
          custom={2}
          className="mx-auto mb-10 max-w-sm space-y-3 text-left"
        >
          {benefits.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-bone/60 sm:text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {item}
            </li>
          ))}
        </motion.ul>

        {/* Form / Success */}
        {status === "success" ? (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg font-medium text-gold"
          >
            ¡Bienvenido! Revisá tu email para confirmar.
          </motion.p>
        ) : (
          <motion.form
            variants={fadeInUp}
            custom={3}
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="tu@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-full border border-gold/15 bg-midnight px-6 py-3.5 text-sm text-bone placeholder-bone/25 outline-none transition-colors focus:border-gold/40"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-midnight transition-colors hover:bg-gold-bright disabled:opacity-50"
            >
              {status === "loading" ? "Uniéndome..." : "Unirme"}
            </button>
          </motion.form>
        )}

        {/* Error message */}
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-sm text-red-400"
          >
            {errorMsg}
          </motion.p>
        )}

        <motion.p
          variants={fadeInUp}
          custom={4}
          className="mt-6 text-xs text-bone/25"
        >
          Podés darte de baja cuando quieras.
        </motion.p>
      </motion.div>
    </section>
  );
}
