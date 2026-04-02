import { SOCIAL_LINKS, getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="text-xs text-muted">
          Felipe &copy; {new Date().getFullYear()} — Todos los derechos reservados.
        </p>
        <div className="flex gap-5">
          <a
            href={getWhatsAppLink(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-neon"
          >
            WhatsApp
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-white"
          >
            Instagram
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={SOCIAL_LINKS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-white"
          >
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}
