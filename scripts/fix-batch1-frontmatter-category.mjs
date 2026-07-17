import fs from "fs";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");
const BACKUP_DIR = path.join(
  process.cwd(),
  "audit-results",
  `backup-before-batch1-${new Date().toISOString().slice(0, 10)}`
);

const APPLY = process.argv.includes("--apply");

const VALID_CATEGORIES = [
  "belajar-ai",
  "ai-chatbot",
  "prompt-engineering",
  "ai-tools",
  "tutorial-ai",
  "ai-untuk-bisnis",
  "ai-untuk-pendidikan",
  "ai-untuk-content-creator",
  "karier-ai",
  "studi-kasus-ai",
];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function getMarkdownFiles(dir) {
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .sort();
}

function normalizeLineEndings(text) {
  return text.replace(/\r\n/g, "\n").replace(/\r/g, "\n").replace(/^\uFEFF/, "");
}

function slugToTitle(slug) {
  const specialTerms = {
    ai: "AI",
    chatgpt: "ChatGPT",
    gemini: "Gemini",
    claude: "Claude",
    deepseek: "DeepSeek",
    copilot: "Copilot",
    grok: "Grok",
    seo: "SEO",
    umkm: "UMKM",
    whatsapp: "WhatsApp",
    youtube: "YouTube",
    youtuber: "YouTuber",
    tiktok: "TikTok",
    tiktoker: "TikToker",
    instagram: "Instagram",
    blogger: "Blogger",
    podcaster: "Podcaster",
    api: "API",
    faq: "FAQ",
  };

  return slug
    .split("-")
    .map((word) => specialTerms[word] || word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function parseFrontmatter(content) {
  const normalized = normalizeLineEndings(content).trimStart();

  const match = normalized.match(/^---\n([\s\S]*?)\n---\n?/);

  if (!match) {
    return {
      hasFrontmatter: false,
      frontmatterRaw: "",
      body: normalized,
      data: {},
    };
  }

  const frontmatterRaw = match[1];
  const body = normalized.slice(match[0].length).trimStart();

  return {
    hasFrontmatter: true,
    frontmatterRaw,
    body,
    data: parseYamlLike(frontmatterRaw),
  };
}

function parseYamlLike(raw) {
  const data = {};
  const lines = raw.split("\n");

  let currentKey = null;

  for (const line of lines) {
    const keyValue = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);

    if (keyValue) {
      const key = keyValue[1];
      let value = keyValue[2].trim();

      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      if (value === "true") value = true;
      if (value === "false") value = false;

      data[key] = value;
      currentKey = key;
      continue;
    }

    if (currentKey && line.trim().startsWith("- ")) {
      if (!Array.isArray(data[currentKey])) {
        data[currentKey] = [];
      }

      let item = line.trim().replace("- ", "").trim();

      if (
        (item.startsWith('"') && item.endsWith('"')) ||
        (item.startsWith("'") && item.endsWith("'"))
      ) {
        item = item.slice(1, -1);
      }

      data[currentKey].push(item);
    }
  }

  return data;
}

function getSlug(file) {
  return file.replace(/\.mdx?$/, "");
}

function extractFirstHeading(body) {
  const match = body.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : "";
}

function inferCategory(slug) {
  if (
    slug.includes("studi-kasus")
  ) {
    return "studi-kasus-ai";
  }

  if (
    slug.includes("prompt") ||
    slug.includes("struktur-prompt") ||
    slug.includes("teknik-prompt")
  ) {
    return "prompt-engineering";
  }

  if (
    slug.includes("ai-tools") ||
    slug.includes("tools-ai") ||
    slug.includes("tool-ai") ||
    slug.includes("tools-")
  ) {
    return "ai-tools";
  }

  if (
    slug.startsWith("chatgpt") ||
    slug.includes("gemini") ||
    slug.includes("claude") ||
    slug.includes("copilot") ||
    slug.includes("deepseek") ||
    slug.includes("grok") ||
    slug.includes("ai-chatbot") ||
    slug.includes("chatbot")
  ) {
    return "ai-chatbot";
  }

  if (
    slug.includes("guru") ||
    slug.includes("siswa") ||
    slug.includes("mahasiswa") ||
    slug.includes("dosen") ||
    slug.includes("pendidikan") ||
    slug.includes("kursus-online") ||
    slug.includes("penelitian") ||
    slug.includes("skripsi")
  ) {
    return "ai-untuk-pendidikan";
  }

  if (
    slug.includes("content-creator") ||
    slug.includes("youtuber") ||
    slug.includes("youtube") ||
    slug.includes("tiktoker") ||
    slug.includes("tiktok") ||
    slug.includes("instagram") ||
    slug.includes("blogger") ||
    slug.includes("podcaster") ||
    slug.includes("social-media") ||
    slug.includes("video")
  ) {
    return "ai-untuk-content-creator";
  }

  if (
    slug.includes("karier") ||
    slug.includes("freelancer") ||
    slug.includes("portofolio") ||
    slug.includes("consultant") ||
    slug.includes("konsultan") ||
    slug.includes("agensi") ||
    slug.includes("prospek-kerja") ||
    slug.includes("skill-ai-yang-dibutuhkan") ||
    slug.includes("roadmap-menjadi")
  ) {
    return "karier-ai";
  }

  if (
    slug.includes("bisnis") ||
    slug.includes("umkm") ||
    slug.includes("marketing") ||
    slug.includes("sales") ||
    slug.includes("customer-service") ||
    slug.includes("lead-generation") ||
    slug.includes("whatsapp") ||
    slug.includes("toko-online") ||
    slug.includes("produktivitas") ||
    slug.includes("personal-assistant") ||
    slug.includes("administrasi-perkantoran")
  ) {
    return "ai-untuk-bisnis";
  }

  if (
    slug.includes("cara-menggunakan") ||
    slug.includes("cara-membuat") ||
    slug.includes("tutorial")
  ) {
    return "tutorial-ai";
  }

  return "belajar-ai";
}

function inferTags(slug, category, title) {
  const tags = new Set();

  tags.add("AI");
  tags.add("Belajar AI");

  if (category === "belajar-ai") {
    tags.add("AI untuk Pemula");
  }

  if (category === "ai-chatbot") {
    tags.add("AI Chatbot");
    tags.add("ChatGPT");
  }

  if (category === "prompt-engineering") {
    tags.add("Prompt AI");
    tags.add("Prompt Engineering");
  }

  if (category === "ai-tools") {
    tags.add("AI Tools");
    tags.add("Produktivitas");
  }

  if (category === "tutorial-ai") {
    tags.add("Tutorial AI");
    tags.add("Cara Menggunakan AI");
  }

  if (category === "ai-untuk-bisnis") {
    tags.add("AI untuk Bisnis");
    tags.add("AI untuk UMKM");
  }

  if (category === "ai-untuk-pendidikan") {
    tags.add("AI untuk Pendidikan");
    tags.add("Belajar dengan AI");
  }

  if (category === "ai-untuk-content-creator") {
    tags.add("AI untuk Content Creator");
    tags.add("Content Creator");
  }

  if (category === "karier-ai") {
    tags.add("Karier AI");
    tags.add("Skill AI");
  }

  if (category === "studi-kasus-ai") {
    tags.add("Studi Kasus AI");
    tags.add("Workflow AI");
  }

  if (slug.includes("chatgpt")) tags.add("ChatGPT");
  if (slug.includes("gemini")) tags.add("Gemini");
  if (slug.includes("claude")) tags.add("Claude");
  if (slug.includes("seo")) tags.add("SEO");
  if (slug.includes("umkm")) tags.add("UMKM");
  if (slug.includes("youtube")) tags.add("YouTube");
  if (slug.includes("tiktok")) tags.add("TikTok");
  if (slug.includes("instagram")) tags.add("Instagram");

  const titleWords = title
    .split(/\s+/)
    .filter((word) => word.length > 3)
    .slice(0, 3);

  for (const word of titleWords) {
    tags.add(word);
  }

  return [...tags].slice(0, 10);
}

function makeDescription(title, category) {
  const categoryLabel = {
    "belajar-ai": "pemula yang ingin belajar AI dari dasar",
    "ai-chatbot": "pengguna yang ingin memahami chatbot AI seperti ChatGPT, Gemini, Claude, dan tools sejenis",
    "prompt-engineering": "pemula yang ingin membuat prompt AI lebih jelas, praktis, dan efektif",
    "ai-tools": "pengguna yang ingin memilih dan memakai tools AI secara praktis",
    "tutorial-ai": "pengguna yang ingin mengikuti tutorial AI langkah demi langkah",
    "ai-untuk-bisnis": "pemilik bisnis, UMKM, tim marketing, sales, dan customer service",
    "ai-untuk-pendidikan": "siswa, mahasiswa, guru, dosen, dan pelaku pendidikan",
    "ai-untuk-content-creator": "content creator, YouTuber, TikToker, Instagram creator, blogger, dan podcaster",
    "karier-ai": "pemula, karyawan, freelancer, dan profesional yang ingin membangun karier AI",
    "studi-kasus-ai": "pembaca yang ingin melihat contoh penerapan AI dalam workflow nyata",
  };

  return `Panduan lengkap ${title} untuk ${categoryLabel[category] || "pemula Indonesia"}, dilengkapi penjelasan sederhana, contoh penggunaan, workflow praktis, tips, checklist, dan langkah penerapan.`;
}

function normalizePubDate(value) {
  if (!value) return "2026-07-17";

  const stringValue = String(value).trim().replace(/^["']|["']$/g, "");

  if (/^\d{4}-\d{2}-\d{2}$/.test(stringValue)) {
    return stringValue;
  }

  const parsed = new Date(stringValue);

  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString().slice(0, 10);
  }

  return "2026-07-17";
}

function sanitizeString(value) {
  return String(value ?? "")
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .trim();
}

function buildFrontmatter(data) {
  const tags = Array.isArray(data.tags) ? data.tags : [];

  return `---
title: "${sanitizeString(data.title)}"
description: "${sanitizeString(data.description)}"
pubDate: "${sanitizeString(data.pubDate)}"
author: "AI Praktis Indonesia"
category: "${sanitizeString(data.category)}"
tags:
${tags.map((tag) => `  - ${sanitizeString(tag)}`).join("\n")}
featured: ${data.featured === true ? "true" : "false"}
draft: false
---`;
}

function shouldFixDescription(description) {
  if (!description) return true;
  return description.length < 120 || description.length > 180;
}

function main() {
  if (!fs.existsSync(BLOG_DIR)) {
    console.error(`Folder tidak ditemukan: ${BLOG_DIR}`);
    process.exit(1);
  }

  const files = getMarkdownFiles(BLOG_DIR);

  ensureDir(BACKUP_DIR);

  let changedCount = 0;
  let missingFrontmatterCount = 0;
  let invalidCategoryCount = 0;
  let fixedDescriptionCount = 0;
  let fixedTagsCount = 0;
  let fixedPubDateCount = 0;

  const changedFiles = [];

  for (const file of files) {
    const filePath = path.join(BLOG_DIR, file);
    const backupPath = path.join(BACKUP_DIR, file);
    const originalContent = fs.readFileSync(filePath, "utf8");
    const normalizedContent = normalizeLineEndings(originalContent);
    const parsed = parseFrontmatter(normalizedContent);
    const slug = getSlug(file);

    const firstHeading = extractFirstHeading(parsed.body);
    const fallbackTitle = firstHeading || slugToTitle(slug);

    const currentCategory = parsed.data.category;
    const inferredCategory = inferCategory(slug);

    const title = parsed.data.title || fallbackTitle;

    let category = VALID_CATEGORIES.includes(currentCategory)
      ? currentCategory
      : inferredCategory;

    const pubDate = normalizePubDate(parsed.data.pubDate);

    const tags =
      Array.isArray(parsed.data.tags) && parsed.data.tags.length >= 3
        ? parsed.data.tags
        : inferTags(slug, category, title);

    const description = shouldFixDescription(parsed.data.description)
      ? makeDescription(title, category)
      : parsed.data.description;

    const featured =
      parsed.data.featured === true ||
      parsed.data.featured === "true";

    const nextFrontmatter = buildFrontmatter({
      title,
      description,
      pubDate,
      author: "AI Praktis Indonesia",
      category,
      tags,
      featured,
      draft: false,
    });

    const nextContent = `${nextFrontmatter}

${parsed.body.trim()}
`;

    const changed = nextContent !== normalizedContent;

    if (changed) {
      changedCount += 1;
      changedFiles.push(file);

      if (!parsed.hasFrontmatter) missingFrontmatterCount += 1;
      if (!VALID_CATEGORIES.includes(currentCategory)) invalidCategoryCount += 1;
      if (shouldFixDescription(parsed.data.description)) fixedDescriptionCount += 1;
      if (!(Array.isArray(parsed.data.tags) && parsed.data.tags.length >= 3)) fixedTagsCount += 1;
      if (pubDate !== parsed.data.pubDate) fixedPubDateCount += 1;

      if (APPLY) {
        fs.writeFileSync(backupPath, originalContent, "utf8");
        fs.writeFileSync(filePath, nextContent, "utf8");
      }
    }
  }

  console.log("");
  console.log("BATCH 1A — FRONTMATTER + CATEGORY FIX");
  console.log("=====================================");
  console.log(`Mode: ${APPLY ? "APPLY / file diubah" : "DRY RUN / belum mengubah file"}`);
  console.log(`Total artikel diperiksa: ${files.length}`);
  console.log(`File yang perlu/pernah diubah: ${changedCount}`);
  console.log(`Missing frontmatter diperbaiki: ${missingFrontmatterCount}`);
  console.log(`Kategori invalid diperbaiki: ${invalidCategoryCount}`);
  console.log(`Description diperbaiki: ${fixedDescriptionCount}`);
  console.log(`Tags diperbaiki: ${fixedTagsCount}`);
  console.log(`PubDate diperbaiki: ${fixedPubDateCount}`);

  if (APPLY) {
    console.log(`Backup tersimpan di: ${BACKUP_DIR}`);
  }

  console.log("");
  console.log("Contoh file berubah:");
  for (const file of changedFiles.slice(0, 30)) {
    console.log(`- ${file}`);
  }

  if (!APPLY) {
    console.log("");
    console.log("Belum ada file yang diubah.");
    console.log("Jika hasilnya aman, jalankan:");
    console.log("node scripts/fix-batch1-frontmatter-category.mjs --apply");
  }

  console.log("");
}

main();