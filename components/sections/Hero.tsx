"use client";

import Image from "next/image";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 py-24 md:min-h-screen">
      {/* Radial gradient — dark green to obsidian */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(0,255,136,0.12),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(0,255,136,0.04),transparent_70%)]" />

      {/* Subtle noise / grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-12 md:flex-row md:gap-16">
        {/* Photo */}
        <div className="flex-shrink-0">
          <div className="relative h-48 w-48 overflow-hidden rounded-full border border-white/10 shadow-[0_0_60px_rgba(0,255,136,0.18)] sm:h-56 sm:w-56">
            <div className="absolute inset-0 rounded-full ring-1 ring-neon/20" />
            <Image
              src="/assets/fotoperfil.jpg"
              alt="Felipe — Desarrollo Web e IA"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 192px, 224px"
            />
          </div>
        </div>

        {/* Text */}
        <div className="text-center md:text-left">
          <p className="mb-4 text-xs font-medium uppercase tracking-luxury text-neon sm:text-sm">
            Desarrollo Web &bull; IA &bull; Finanzas
          </p>

          <h1 className="mb-6 text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="font-light text-white/90">Hago sitios web</span>
            <br />
            <span className="font-black text-neon">que venden.</span>
          </h1>

          <p className="mb-10 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
            Sitios profesionales, chatbots con IA y asesoría financiera.
            <br className="hidden sm:block" />
            <strong className="font-semibold text-white">
              30 días. Resultados reales. Hablamos primero.
            </strong>
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={getWhatsAppLink(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-neon px-8 py-4 text-base font-bold text-dark shadow-[0_0_30px_rgba(0,255,136,0.25)] transition-all duration-500 hover:scale-[1.03] hover:bg-neon-bright hover:shadow-[0_0_50px_rgba(0,255,136,0.45)] active:scale-[0.98]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hablemos por WhatsApp
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-8 py-4 text-base font-medium text-white backdrop-blur-sm transition-all duration-500 hover:border-neon/40 hover:bg-white/[0.04] hover:text-neon"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.25}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 animate-bounce text-white/30"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
