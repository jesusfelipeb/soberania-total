import {
  GROQ_MODEL,
  LEAD_KEYWORDS,
  LEAD_THRESHOLD,
  MAX_HISTORY,
  MAX_MESSAGE_CHARS,
  SYSTEM_PROMPT,
} from "@/lib/chatPrompt";
import type { ChatMessage } from "@/types/chat";

export const runtime = "edge";

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

export async function POST(req: Request) {
  if (!process.env.GROQ_API_KEY) {
    return new Response(
      "Falta GROQ_API_KEY en variables de entorno.",
      { status: 500 },
    );
  }

  let body: { messages?: ChatMessage[] };
  try {
    body = await req.json();
  } catch {
    return new Response("JSON inválido", { status: 400 });
  }

  const incoming = body.messages;
  if (!Array.isArray(incoming) || incoming.length === 0) {
    return new Response("messages requerido", { status: 400 });
  }

  const messages: ChatMessage[] = incoming
    .filter(
      (m): m is ChatMessage =>
        m && (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string",
    )
    .slice(-MAX_HISTORY)
    .map((m) => ({
      role: m.role,
      content: m.content.slice(0, MAX_MESSAGE_CHARS),
    }));

  if (messages.length === 0) {
    return new Response("Sin mensajes válidos", { status: 400 });
  }

  // Lead detection — fire-and-forget
  detectAndNotifyLead(messages).catch(() => {});

  const groqRes = await fetch(GROQ_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      stream: true,
      temperature: 0.5,
      max_tokens: 600,
    }),
  });

  if (!groqRes.ok || !groqRes.body) {
    const errorText = await groqRes.text().catch(() => "");
    console.error("Groq error:", groqRes.status, errorText);
    return new Response("Error del modelo. Probá de nuevo en un momento.", {
      status: 502,
    });
  }

  const decoder = new TextDecoder();
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      const reader = groqRes.body!.getReader();
      let buffer = "";
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";
          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith("data:")) continue;
            const payload = trimmed.slice(5).trim();
            if (payload === "[DONE]") {
              controller.close();
              return;
            }
            try {
              const json = JSON.parse(payload);
              const delta: string | undefined =
                json.choices?.[0]?.delta?.content;
              if (delta) controller.enqueue(encoder.encode(delta));
            } catch {
              // ignore malformed chunks
            }
          }
        }
        controller.close();
      } catch (err) {
        controller.error(err);
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });
}

async function detectAndNotifyLead(messages: ChatMessage[]) {
  const webhook = process.env.LEADS_WEBHOOK_URL;

  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  if (!lastUser) return;

  const lastText = lastUser.content.toLowerCase();
  const allUserText = messages
    .filter((m) => m.role === "user")
    .map((m) => m.content.toLowerCase())
    .join(" ");

  const lastMatched = LEAD_KEYWORDS.filter((k) => lastText.includes(k));
  const allMatched = LEAD_KEYWORDS.filter((k) => allUserText.includes(k));

  if (lastMatched.length === 0 || allMatched.length < LEAD_THRESHOLD) return;

  const payload = {
    timestamp: new Date().toISOString(),
    intent: `${allMatched.length} keywords detectadas en la sesión`,
    matchedKeywords: allMatched,
    lastUserMessage: lastUser.content,
    history: messages,
  };

  console.log("[LEAD]", JSON.stringify(payload));

  if (!webhook) return;

  try {
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error("Webhook error:", err);
  }
}
