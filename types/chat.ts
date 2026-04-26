export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface LeadPayload {
  timestamp: string;
  intent: string;
  matchedKeywords: string[];
  lastUserMessage: string;
  history: ChatMessage[];
}
