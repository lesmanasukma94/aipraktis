export interface Category {
  slug: string;
  name: string;
  description: string;
}

export const categories: Category[] = [
  {
    slug: "belajar-ai",
    name: "Belajar AI",
    description: "Panduan belajar AI dari nol."
  },
  {
    slug: "ai-chatbot",
    name: "AI Chatbot",
    description: "ChatGPT, Claude, Gemini, Grok, DeepSeek dan chatbot AI lainnya."
  },
  {
    slug: "prompt-engineering",
    name: "Prompt Engineering",
    description: "Teknik membuat prompt AI yang efektif."
  },
  {
    slug: "ai-tools",
    name: "AI Tools",
    description: "Direktori tools AI terbaik."
  },
  {
    slug: "tutorial-ai",
    name: "Tutorial AI",
    description: "Panduan langkah demi langkah menggunakan AI."
  },
  {
    slug: "ai-untuk-bisnis",
    name: "AI untuk Bisnis",
    description: "Penerapan AI untuk UMKM dan perusahaan."
  },
  {
    slug: "ai-untuk-pendidikan",
    name: "AI untuk Pendidikan",
    description: "AI untuk guru, siswa, dan dosen."
  },
  {
    slug: "ai-untuk-content-creator",
    name: "AI untuk Content Creator",
    description: "AI untuk YouTube, TikTok, Blog dan Media Sosial."
  },
  {
    slug: "karier-ai",
    name: "Karier AI",
    description: "Profesi dan peluang kerja di bidang AI."
  },
  {
    slug: "studi-kasus-ai",
    name: "Studi Kasus AI",
    description: "Implementasi AI di berbagai industri."
  }
];