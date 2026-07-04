export interface CategoryInfo {
  slug: string;
  title: string;
  description: string;
}

export const CATEGORIES: Record<string, CategoryInfo> = {

  "artificial-intelligence": {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    description:
      "Panduan belajar Artificial Intelligence (AI) dari dasar hingga penerapan di dunia kerja dan bisnis."
  },

  "chatgpt": {
    slug: "chatgpt",
    title: "ChatGPT",
    description:
      "Tutorial, tips, prompt, dan panduan menggunakan ChatGPT."
  },

  "gemini": {
    slug: "gemini",
    title: "Google Gemini",
    description:
      "Panduan menggunakan Google Gemini untuk belajar, bekerja, dan bisnis."
  },

  "prompt-engineering": {
    slug: "prompt-engineering",
    title: "Prompt Engineering",
    description:
      "Belajar membuat prompt AI yang efektif untuk berbagai kebutuhan."
  },

  "ai-tools": {
    slug: "ai-tools",
    title: "AI Tools",
    description:
      "Kumpulan tools AI terbaik untuk produktivitas, bisnis, pendidikan, dan content creator."
  },

  "karier-ai": {
    slug: "karier-ai",
    title: "Karier AI",
    description:
      "Panduan membangun karier di bidang Artificial Intelligence."
  }

};