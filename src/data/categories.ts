export interface Category {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  color: string;
  order: number;
  featured: boolean;
}

export const categories: Category[] = [
  {
    slug: "belajar-ai",
    name: "Belajar AI",
    shortName: "Belajar AI",
    description: "Panduan belajar Artificial Intelligence dari nol hingga mahir.",
    icon: "🎓",
    color: "blue",
    order: 1,
    featured: true
  },
  {
    slug: "ai-chatbot",
    name: "AI Chatbot",
    shortName: "Chatbot",
    description: "ChatGPT, Claude, Gemini, Grok, DeepSeek, Copilot, Perplexity, dan chatbot AI lainnya.",
    icon: "💬",
    color: "green",
    order: 2,
    featured: true
  },
  {
    slug: "prompt-engineering",
    name: "Prompt Engineering",
    shortName: "Prompt",
    description: "Teknik membuat prompt AI yang efektif untuk berbagai kebutuhan.",
    icon: "✍️",
    color: "purple",
    order: 3,
    featured: true
  },
  {
    slug: "ai-tools",
    name: "AI Tools",
    shortName: "Tools",
    description: "Direktori tools AI terbaik untuk produktivitas, bisnis, dan content creation.",
    icon: "🛠️",
    color: "orange",
    order: 4,
    featured: true
  },
  {
    slug: "tutorial-ai",
    name: "Tutorial AI",
    shortName: "Tutorial",
    description: "Panduan langkah demi langkah menggunakan AI dalam berbagai kebutuhan.",
    icon: "📘",
    color: "cyan",
    order: 5,
    featured: true
  },
  {
    slug: "ai-untuk-bisnis",
    name: "AI untuk Bisnis",
    shortName: "Bisnis",
    description: "Pemanfaatan AI untuk UMKM, startup, marketing, sales, dan perusahaan.",
    icon: "💼",
    color: "emerald",
    order: 6,
    featured: true
  },
  {
    slug: "ai-untuk-pendidikan",
    name: "AI untuk Pendidikan",
    shortName: "Pendidikan",
    description: "Pemanfaatan AI untuk guru, siswa, mahasiswa, dan peneliti.",
    icon: "🏫",
    color: "indigo",
    order: 7,
    featured: true
  },
  {
    slug: "ai-untuk-content-creator",
    name: "AI untuk Content Creator",
    shortName: "Creator",
    description: "AI untuk YouTube, TikTok, Instagram, blog, dan content creator.",
    icon: "🎬",
    color: "pink",
    order: 8,
    featured: true
  },
  {
    slug: "karier-ai",
    name: "Karier AI",
    shortName: "Karier",
    description: "Profesi, skill, roadmap, dan peluang karier di bidang Artificial Intelligence.",
    icon: "🚀",
    color: "amber",
    order: 9,
    featured: true
  },
  {
    slug: "studi-kasus-ai",
    name: "Studi Kasus AI",
    shortName: "Studi Kasus",
    description: "Implementasi AI pada bisnis, pendidikan, dan berbagai industri nyata.",
    icon: "📊",
    color: "red",
    order: 10,
    featured: true
  }
];