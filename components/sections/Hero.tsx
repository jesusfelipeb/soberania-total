"use client";

import Image from "next/image";
import { getWhatsAppLink } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 py-24">
      {/* === Background layers === */}

      {/* Aurora drifting blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-[480px] w-[480px] rounded-full bg-neon/20 opacity-30 blur-[120px] animate-drift-a" />
        <div className="absolute -right-32 bottom-0 h-[520px] w-[520px] rounded-full bg-neon/10 opacity-40 blur-[140px] animate-drift-b" />
      </div>

      {/* Radial gradient base */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(0,255,136,0.08),transparent_70%)]" />

      {/* Grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Decorative browser mockup — desktop only */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-[-8%] hidden w-[640px] opacity-[0.05] blur-[1px] lg:block"
      >
        <div className="rounded-2xl border border-white/30 bg-white/[0.02]">
          <div className="flex items-center gap-1.5 border-b border-white/15 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
          </div>
          <div className="space-y-3 p-6">
            <div className="h-3 w-1/3 rounded bg-neon/50" />
            <div className="h-2 w-full rounded bg-white/25" />
            <div className="h-2 w-5/6 rounded bg-white/25" />
            <div className="h-2 w-2/3 rounded bg-white/25" />
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="h-20 rounded-lg bg-white/15" />
              <div className="h-20 rounded-lg bg-white/15" />
              <div className="h-20 rounded-lg bg-white/15" />
            </div>
          </div>
        </div>
      </div>

      {/* === Main content === */}
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-12 md:gap-12">
        {/* Left: text column */}
        <div className="order-2 text-center md:order-1 md:col-span-7 md:text-left">
          {/* Status badge */}
          <div
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-neon/20 bg-neon/[0.06] px-3.5 py-1.5 text-[11px] font-medium text-neon backdrop-blur-sm animate-fade-up"
            style={{ animationDelay: "0ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
            </span>
            <span className="tracking-luxury uppercase">Para médicos, coaches y abogados</span>
          </div>

          {/* Kicker */}
          <p
            className="mb-5 text-[11px] font-semibold uppercase tracking-luxury text-white/50 animate-fade-up sm:text-xs"
            style={{ animationDelay: "100ms" }}
          >
            Sistemas de Captación Automatizados
          </p>

          {/* Headline */}
          <h1
            className="mb-6 font-display text-5xl leading-[0.95] tracking-tight animate-fade-up sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "200ms" }}
          >
            <span className="block font-light text-white/95">Consigue más clientes de</span>
            <span className="mt-1 block font-bold text-neon">
              forma automática con IA
            </span>
          </h1>

          {/* Subline */}
          <p
            className="mb-9 max-w-xl text-base leading-relaxed text-white/65 animate-fade-up sm:text-lg"
            style={{ animationDelay: "300ms" }}
          >
            Implemento sistemas que <strong className="font-semibold text-white">responden</strong>, <strong className="font-semibold text-white">filtran</strong> y <strong className="font-semibold text-white">convierten clientes por ti</strong> mientras trabajas.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col items-center gap-4 animate-fade-up sm:items-start"
            style={{ animationDelay: "400ms" }}
          >
            <a
              href={getWhatsAppLink("Hola, quiero saber cómo automatizar mi negocio con IA.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-neon px-8 py-4 text-base font-bold text-dark shadow-[0_0_30px_rgba(0,255,136,0.25)] transition-all duration-500 hover:scale-[1.03] hover:bg-neon-bright hover:shadow-[0_0_60px_rgba(0,255,136,0.5)] active:scale-[0.98]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Automatizar mi negocio
            </a>
            <p className="text-sm text-white/50">
              Te muestro cómo aplicarlo en tu caso por WhatsApp
            </p>
          </div>
        </div>

        {/* Right: photo column */}
        <div
          className="relative order-1 mx-auto md:order-2 md:col-span-5 md:mx-0 animate-fade-up"
          style={{ animationDelay: "150ms" }}
        >
          <div className="relative mx-auto h-56 w-56 sm:h-64 sm:w-64 lg:h-72 lg:w-72">
            {/* Rotating conic ring */}
            <div
              aria-hidden
              className="absolute -inset-1.5 rounded-full opacity-70 animate-ring-rotate"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, rgba(0,255,136,0.55) 60deg, transparent 140deg, transparent 220deg, rgba(0,255,136,0.25) 280deg, transparent 360deg)",
                filter: "blur(2px)",
              }}
            />

            {/* Photo */}
            <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-dark shadow-[0_0_80px_rgba(0,255,136,0.3)]">
              <Image
                src="/assets/fotoperfil.jpg"
                alt="Felipe — Automatización e IA"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 288px"
              />
              <div
                aria-hidden
                className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10"
              />
            </div>
          </div>

          {/* Floating metric card */}
          <div
            className="glass-card absolute -bottom-5 left-1/2 w-[min(86vw,220px)] -translate-x-1/2 rounded-xl px-4 py-3 md:-bottom-4 md:-left-8 md:w-[260px] md:translate-x-0 md:px-5 md:py-4 animate-fade-up"
            style={{ animationDelay: "600ms" }}
          >
            <div className="mb-1 flex items-center gap-2 md:mb-1.5">
              <span className="block h-1.5 w-1.5 rounded-full bg-neon" />
              <span className="text-[10px] font-medium uppercase tracking-luxury text-white/55">
                Respuesta Inmediata
              </span>
            </div>
            <p className="text-xs leading-snug text-white/90 md:text-sm">
              <strong className="font-bold text-neon">24/7 sin descanso.</strong>{" "}
              Nunca más pierdas un cliente por responder tarde.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator — vertical line with falling dot */}
      <div
        aria-hidden
        className="absolute bottom-20 left-1/2 hidden h-12 w-px -translate-x-1/2 overflow-hidden bg-white/10 md:block"
      >
        <div className="absolute h-3 w-px bg-neon animate-scroll-line" />
      </div>
    </section>
  );
}

