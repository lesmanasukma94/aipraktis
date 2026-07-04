export interface Vendor {
  slug: string;
  name: string;
  category: "chatbot" | "tool";
}

export const vendors: Vendor[] = [
  { slug: "chatgpt", name: "ChatGPT", category: "chatbot" },
  { slug: "claude", name: "Claude", category: "chatbot" },
  { slug: "gemini", name: "Gemini", category: "chatbot" },
  { slug: "grok", name: "Grok", category: "chatbot" },
  { slug: "deepseek", name: "DeepSeek", category: "chatbot" },
  { slug: "copilot", name: "Microsoft Copilot", category: "chatbot" },
  { slug: "perplexity", name: "Perplexity", category: "chatbot" },
  { slug: "cursor", name: "Cursor", category: "tool" },
  { slug: "mistral", name: "Mistral", category: "chatbot" },
  { slug: "qwen", name: "Qwen", category: "chatbot" },
  { slug: "le-chat", name: "Le Chat", category: "chatbot" }
];