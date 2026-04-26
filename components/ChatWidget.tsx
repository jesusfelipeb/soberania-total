"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { SUGGESTED_QUESTIONS } from "@/lib/chatPrompt";
import { getWhatsAppLink } from "@/lib/config";
import type { ChatMessage } from "@/types/chat";

const HANDOVER_AFTER = 4;

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  // Auto-scroll on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 350);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // ESC to close
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isLoading) return;

      setError(null);
      const userMsg: ChatMessage = { role: "user", content: trimmed };
      const next = [...messages, userMsg];
      setMessages([...next, { role: "assistant", content: "" }]);
      setInput("");
      setIsLoading(true);

      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: next }),
          signal: controller.signal,
        });

        if (!res.ok || !res.body) {
          throw new Error(`HTTP ${res.status}`);
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let acc = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          acc += decoder.decode(value, { stream: true });
          setMessages((prev) => {
            const copy = [...prev];
            copy[copy.length - 1] = { role: "assistant", content: acc };
            return copy;
          });
        }
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        setError("Hubo un error. Probá de nuevo o escribime por WhatsApp.");
        setMessages((prev) => prev.slice(0, -1));
      } finally {
        setIsLoading(false);
        abortRef.current = null;
      }
    },
    [messages, isLoading],
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const lastUserMsg = [...messages].reverse().find((m) => m.role === "user");
  const showHandover =
    messages.filter((m) => m.role === "user").length >= HANDOVER_AFTER;

  const handoverLink = getWhatsAppLink(
    lastUserMsg
      ? `Hola Felipe, vengo del chat de tu sitio. Le pregunté: "${lastUserMsg.content.slice(0, 200)}". ¿Podemos hablar directo?`
      : "Hola Felipe, vengo del chat de tu sitio. ¿Podemos hablar?",
  );

  return (
    <>
      {/* Floating Action Button + invite bubble */}
      <div
        className={`fixed bottom-6 right-6 z-40 flex items-center gap-3 transition-all duration-300 ${
          isOpen
            ? "pointer-events-none scale-90 opacity-0"
            : "scale-100 opacity-100"
        }`}
      >
        {/* Invite bubble */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir chat con el asistente"
          className="group/bubble relative animate-bubble-in rounded-full border border-white/10 bg-dark/85 px-4 py-2.5 text-sm text-white/85 shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-300 hover:border-neon/30 hover:text-white"
        >
          <span className="whitespace-nowrap">
            ¿Alguna duda?{" "}
            <strong className="font-semibold text-neon">
              Hablá con mi agente
            </strong>
          </span>
          {/* Pointer triangle to FAB */}
          <span
            aria-hidden
            className="absolute right-[-6px] top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 border-r border-t border-white/10 bg-dark/85 backdrop-blur-md"
          />
        </button>

        {/* FAB */}
        <button
          type="button"
          aria-label="Abrir chat con el asistente"
          onClick={() => setIsOpen(true)}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-neon text-dark shadow-[0_0_30px_rgba(0,255,136,0.45)] transition-all duration-300 hover:scale-110 hover:bg-neon-bright hover:shadow-[0_0_50px_rgba(0,255,136,0.6)] active:scale-95 sm:h-16 sm:w-16"
        >
          <span className="absolute inset-0 rounded-full bg-neon opacity-40 animate-ping" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="relative h-6 w-6 sm:h-7 sm:w-7"
            aria-hidden
          >
            <path d="M21 12a9 9 0 11-3.5-7.1L21 3v6h-6" />
            <path d="M8 12h.01M12 12h.01M16 12h.01" />
          </svg>
        </button>
      </div>

      {/* Backdrop */}
      <div
        aria-hidden
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Chat Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Chat con asistente"
        className={`fixed z-50 flex flex-col overflow-hidden border border-white/10 bg-dark shadow-[0_25px_80px_rgba(0,0,0,0.6)] transition-all duration-400 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-8 opacity-0"
        } inset-x-3 bottom-3 top-16 rounded-2xl sm:inset-x-auto sm:bottom-6 sm:right-6 sm:top-auto sm:h-[640px] sm:max-h-[85vh] sm:w-[400px]`}
      >
        {/* Glow accent */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_0%,rgba(0,255,136,0.1),transparent_70%)]" />

        {/* Header */}
        <div className="relative flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-neon/30 bg-neon/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="h-5 w-5 text-neon"
                aria-hidden
              >
                <path d="M12 2a4 4 0 014 4v2a4 4 0 11-8 0V6a4 4 0 014-4z" />
                <path d="M5 22v-2a7 7 0 0114 0v2" />
              </svg>
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-dark bg-neon" />
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Asistente de Felipe</p>
              <p className="text-[11px] uppercase tracking-luxury text-neon/80">
                En línea
              </p>
            </div>
          </div>

          <button
            type="button"
            aria-label="Cerrar chat"
            onClick={() => setIsOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white/50 transition-colors hover:bg-white/[0.04] hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className="h-5 w-5"
              aria-hidden
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div
          ref={scrollRef}
          className="relative flex-1 space-y-4 overflow-y-auto px-5 py-5"
        >
          {messages.length === 0 ? (
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl rounded-tl-sm border border-white/[0.06] bg-white/[0.02] px-4 py-3">
                <p className="text-sm leading-relaxed text-white/85">
                  Hola, soy el asistente de Felipe. Te puedo contar sobre los
                  servicios, precios y cómo trabajamos. ¿Qué necesitás?
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => sendMessage(q)}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-white/70 transition-all duration-300 hover:border-neon/40 hover:bg-neon/[0.06] hover:text-neon"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "rounded-tr-sm bg-neon text-dark"
                      : "rounded-tl-sm border border-white/[0.06] bg-white/[0.02] text-white/85"
                  }`}
                >
                  {m.content || (
                    <TypingDots />
                  )}
                </div>
              </div>
            ))
          )}

          {error && (
            <div className="rounded-xl border border-red-400/30 bg-red-400/5 px-3 py-2 text-xs text-red-300">
              {error}
            </div>
          )}
        </div>

        {/* Handover CTA */}
        {showHandover && (
          <a
            href={handoverLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-5 mb-3 flex items-center justify-center gap-2 rounded-xl border border-neon/30 bg-neon/[0.06] px-4 py-3 text-sm font-semibold text-neon transition-all duration-300 hover:bg-neon/[0.12]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Mejor hablamos directo por WhatsApp
          </a>
        )}

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="relative flex items-center gap-2 border-t border-white/[0.06] bg-black/20 p-3"
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribí tu pregunta…"
            disabled={isLoading}
            maxLength={500}
            className="flex-1 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-neon/40 focus:outline-none focus:ring-1 focus:ring-neon/20 disabled:opacity-50"
          />
          <button
            type="submit"
            aria-label="Enviar"
            disabled={isLoading || !input.trim()}
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-neon text-dark transition-all duration-300 hover:scale-105 hover:bg-neon-bright active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden
            >
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1 py-1">
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:0ms]" />
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:150ms]" />
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:300ms]" />
    </span>
  );
}
