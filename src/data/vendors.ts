export type VendorCategory = "chatbot" | "tool";

export interface Vendor {
  slug: string;
  name: string;
  shortName: string;
  category: VendorCategory;
  description: string;
  logo: string;
  website: string;
  pricing: "Free" | "Freemium" | "Paid";
  featured: boolean;
  affiliate: boolean;
  comparisonPriority: number;
}

export const vendors: Vendor[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    shortName: "ChatGPT",
    category: "chatbot",
    description: "Chatbot AI dari OpenAI untuk produktivitas, coding, bisnis, dan pembelajaran.",
    logo: "/images/vendors/chatgpt.svg",
    website: "https://chat.openai.com",
    pricing: "Freemium",
    featured: true,
    affiliate: false,
    comparisonPriority: 1
  },
  {
    slug: "claude",
    name: "Claude",
    shortName: "Claude",
    category: "chatbot",
    description: "AI Assistant dari Anthropic yang unggul untuk penulisan dan analisis dokumen.",
    logo: "/images/vendors/claude.svg",
    website: "https://claude.ai",
    pricing: "Freemium",
    featured: true,
    affiliate: false,
    comparisonPriority: 2
  },
  {
    slug: "gemini",
    name: "Gemini",
    shortName: "Gemini",
    category: "chatbot",
    description: "AI Assistant dari Google yang terintegrasi dengan ekosistem Google.",
    logo: "/images/vendors/gemini.svg",
    website: "https://gemini.google.com",
    pricing: "Freemium",
    featured: true,
    affiliate: false,
    comparisonPriority: 3
  },
  {
    slug: "grok",
    name: "Grok",
    shortName: "Grok",
    category: "chatbot",
    description: "Chatbot AI dari xAI yang terintegrasi dengan platform X.",
    logo: "/images/vendors/grok.svg",
    website: "https://grok.x.ai",
    pricing: "Paid",
    featured: true,
    affiliate: false,
    comparisonPriority: 4
  },
  {
    slug: "deepseek",
    name: "DeepSeek",
    shortName: "DeepSeek",
    category: "chatbot",
    description: "Model AI open-weight yang populer untuk coding dan reasoning.",
    logo: "/images/vendors/deepseek.svg",
    website: "https://www.deepseek.com",
    pricing: "Freemium",
    featured: true,
    affiliate: false,
    comparisonPriority: 5
  },
  {
    slug: "copilot",
    name: "Microsoft Copilot",
    shortName: "Copilot",
    category: "chatbot",
    description: "AI Assistant dari Microsoft yang terintegrasi dengan Microsoft 365.",
    logo: "/images/vendors/copilot.svg",
    website: "https://copilot.microsoft.com",
    pricing: "Freemium",
    featured: true,
    affiliate: false,
    comparisonPriority: 6
  },
  {
    slug: "perplexity",
    name: "Perplexity",
    shortName: "Perplexity",
    category: "chatbot",
    description: "AI Search Engine yang memberikan jawaban lengkap dengan sumber referensi.",
    logo: "/images/vendors/perplexity.svg",
    website: "https://www.perplexity.ai",
    pricing: "Freemium",
    featured: true,
    affiliate: false,
    comparisonPriority: 7
  },
  {
    slug: "cursor",
    name: "Cursor",
    shortName: "Cursor",
    category: "tool",
    description: "AI Code Editor yang dirancang untuk meningkatkan produktivitas developer.",
    logo: "/images/vendors/cursor.svg",
    website: "https://cursor.com",
    pricing: "Freemium",
    featured: true,
    affiliate: false,
    comparisonPriority: 8
  },
  {
    slug: "mistral",
    name: "Mistral",
    shortName: "Mistral",
    category: "chatbot",
    description: "Model AI dari Mistral AI dengan fokus pada open model.",
    logo: "/images/vendors/mistral.svg",
    website: "https://mistral.ai",
    pricing: "Freemium",
    featured: false,
    affiliate: false,
    comparisonPriority: 9
  },
  {
    slug: "qwen",
    name: "Qwen",
    shortName: "Qwen",
    category: "chatbot",
    description: "Model AI dari Alibaba Cloud dengan berbagai varian LLM.",
    logo: "/images/vendors/qwen.svg",
    website: "https://chat.qwen.ai",
    pricing: "Freemium",
    featured: false,
    affiliate: false,
    comparisonPriority: 10
  },
  {
    slug: "mistral",
    name: "Le Chat",
    shortName: "Le Chat",
    category: "chatbot",
    description: "AI Assistant resmi dari Mistral AI.",
    logo: "/images/vendors/le-chat.svg",
    website: "https://chat.mistral.ai",
    pricing: "Freemium",
    featured: false,
    affiliate: false,
    comparisonPriority: 11
  }
];