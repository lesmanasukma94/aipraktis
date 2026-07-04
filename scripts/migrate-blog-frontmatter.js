import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_DIR = path.join(__dirname, "..", "src", "content", "blog");

const DEFAULT_AUTHOR = "AI Praktis Indonesia";

function detectCategory(filename) {
  const name = filename.toLowerCase();

  // AI Chatbot
  if (
    name.includes("chatgpt") ||
    name.includes("gemini") ||
    name.includes("claude") ||
    name.includes("grok") ||
    name.includes("deepseek") ||
    name.includes("copilot") ||
    name.includes("perplexity") ||
    name.includes("mistral") ||
    name.includes("qwen") ||
    name.includes("le-chat")
  ) {
    return "ai-chatbot";
  }

  // Prompt Engineering
  if (name.includes("prompt")) {
    return "prompt-engineering";
  }

  // AI Tools
  if (
    name.includes("tool") ||
    name.includes("midjourney") ||
    name.includes("canva") ||
    name.includes("cursor") ||
    name.includes("notion") ||
    name.includes("runway") ||
    name.includes("elevenlabs")
  ) {
    return "ai-tools";
  }

  // Tutorial AI
  if (
    name.startsWith("cara-") ||
    name.includes("tutorial")
  ) {
    return "tutorial-ai";
  }

  // AI untuk Bisnis
  if (
    name.includes("umkm") ||
    name.includes("bisnis") ||
    name.includes("marketing") ||
    name.includes("sales") ||
    name.includes("customer-service") ||
    name.includes("hr")
  ) {
    return "ai-untuk-bisnis";
  }

  // AI untuk Pendidikan
  if (
    name.includes("guru") ||
    name.includes("mahasiswa") ||
    name.includes("siswa") ||
    name.includes("skripsi") ||
    name.includes("pendidikan")
  ) {
    return "ai-untuk-pendidikan";
  }

  // AI untuk Content Creator
  if (
    name.includes("youtube") ||
    name.includes("tiktok") ||
    name.includes("instagram") ||
    name.includes("creator") ||
    name.includes("thumbnail") ||
    name.includes("konten")
  ) {
    return "ai-untuk-content-creator";
  }

  // Karier AI
  if (
    name.includes("karier") ||
    name.includes("career") ||
    name.includes("prompt-engineer") ||
    name.includes("consultant") ||
    name.includes("specialist") ||
    name.includes("freelancer") ||
    name.includes("sertifikasi")
  ) {
    return "karier-ai";
  }

  // Studi Kasus AI
  if (
    name.includes("studi-kasus") ||
    name.includes("case-study")
  ) {
    return "studi-kasus-ai";
  }

  // Default
  return "belajar-ai";
}

const files = fs.readdirSync(BLOG_DIR);

for (const file of files) {

  if (!file.endsWith(".md")) continue;

  const fullPath = path.join(BLOG_DIR, file);

  let content = fs.readFileSync(fullPath, "utf8");

  if (!content.startsWith("---")) continue;

  const end = content.indexOf("---", 3);

  if (end === -1) continue;

  let frontmatter = content.slice(0, end + 3);
  let body = content.slice(end + 3);

  // ===========================
  // FRONTMATTER
  // ===========================

  if (!frontmatter.includes("category:")) {

    frontmatter = frontmatter.replace(
      /^---/,
      `---
category: "${detectCategory(file)}"`
    );

  }

  if (!frontmatter.includes("tags:")) {

    frontmatter = frontmatter.replace(
      /^---/,
      `---
tags: []`
    );

  }

  if (!frontmatter.includes("author:")) {

    frontmatter = frontmatter.replace(
      /^---/,
      `---
author: "${DEFAULT_AUTHOR}"`
    );

  }

  // ===========================
  // BODY ARTICLE
  // ===========================

  body = body.trimStart();

  // Hilangkan H1 pertama
  body = body.replace(
    /^#\s+.+?\r?\n+/,
    ""
  );

  // Tambahkan Ringkasan jika belum ada
  if (!body.startsWith("## Ringkasan")) {
    body = "## Ringkasan\n\n" + body;
  }

// Hapus horizontal rule tepat setelah Ringkasan
body = body.replace(
  /^## Ringkasan\s*\n+\s*---\s*\n+/,
  "## Ringkasan\n\n"
);

  // Rapikan baris kosong
  body = body.replace(/\n{3,}/g, "\n\n");

  fs.writeFileSync(
    fullPath,
    frontmatter + "\n\n" + body,
    "utf8"
  );

  console.log("✓", file);

}

console.log("\n✅ Semua artikel berhasil dimigrasikan.");