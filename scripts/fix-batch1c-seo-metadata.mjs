import fs from "fs";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");
const AUDIT_DIR = path.join(process.cwd(), "audit-results");
const BACKUP_DIR = path.join(
  AUDIT_DIR,
  `backup-before-batch1c-seo-metadata-${new Date().toISOString().slice(0, 10)}`
);

const APPLY = process.argv.includes("--apply");

const CATEGORY_LABELS = {
  "belajar-ai": "belajar AI untuk pemula",
  "ai-chatbot": "AI chatbot seperti ChatGPT, Gemini, Claude, dan tools sejenis",
  "prompt-engineering": "prompt engineering dan cara membuat prompt AI yang efektif",
  "ai-tools": "tools AI untuk kerja, bisnis, belajar, dan produktivitas",
  "tutorial-ai": "tutorial AI praktis langkah demi langkah",
  "ai-untuk-bisnis": "penerapan AI untuk bisnis, UMKM, marketing, sales, dan customer service",
  "ai-untuk-pendidikan": "penerapan AI untuk siswa, mahasiswa, guru, dosen, dan pendidikan",
  "ai-untuk-content-creator": "penerapan AI untuk content creator, video, blog, podcast, dan media sosial",
  "karier-ai": "karier AI, skill AI, freelance AI, portofolio, dan peluang kerja",
  "studi-kasus-ai": "studi kasus AI dan contoh workflow AI dalam dunia nyata",
};

const CATEGORY_TAGS = {
  "belajar-ai": ["Belajar AI", "AI untuk Pemula", "Artificial Intelligence"],
  "ai-chatbot": ["AI Chatbot", "ChatGPT", "Chatbot AI"],
  "prompt-engineering": ["Prompt AI", "Prompt Engineering", "Belajar Prompt"],
  "ai-tools": ["AI Tools", "Tools AI", "Produktivitas"],
  "tutorial-ai": ["Tutorial AI", "Cara Menggunakan AI", "AI Praktis"],
  "ai-untuk-bisnis": ["AI untuk Bisnis", "AI untuk UMKM", "Bisnis Digital"],
  "ai-untuk-pendidikan": ["AI untuk Pendidikan", "Belajar dengan AI", "EdTech"],
  "ai-untuk-content-creator": ["AI untuk Content Creator", "Content Creator", "Social Media AI"],
  "karier-ai": ["Karier AI", "Skill AI", "Freelance AI"],
  "studi-kasus-ai": ["Studi Kasus AI", "Workflow AI", "Implementasi AI"],
};

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

function getSlug(file) {
  return file.replace(/\.mdx?$/, "");
}

function parseFrontmatter(content) {
  const normalized = normalizeLineEndings(content).trimStart();
  const match = normalized.match(/^---\n([\s\S]*?)\n---\n?/);

  if (!match) {
    return {
      hasFrontmatter: false,
      raw: "",
      body: normalized,
      data: {},
    };
  }

  return {
    hasFrontmatter: true,
    raw: match[1],
    body: normalized.slice(match[0].length).trimStart(),
    data: parseYamlLike(match[1]),
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

function countWords(text) {
  return text
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/[^\w\sÀ-ÿ-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

function sanitizeString(value) {
  return String(value ?? "")
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .trim();
}

function compactTitle(title) {
  return String(title || "")
    .replace(/:.*$/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function makeSeoDescription(title, category) {
  const shortTitle = compactTitle(title);
  const label = CATEGORY_LABELS[category] || "AI praktis untuk pemula Indonesia";

  const candidates = [
    `Panduan ${shortTitle} untuk ${label}, dilengkapi penjelasan sederhana, contoh praktis, tips, dan langkah penerapan.`,
    `Pelajari ${shortTitle} dengan bahasa sederhana, contoh nyata, tips praktis, dan cara menerapkannya dalam kerja, bisnis, atau belajar.`,
    `Panduan praktis ${shortTitle} untuk pemula, lengkap dengan contoh, manfaat, risiko, checklist, dan langkah penggunaan AI.`
  ];

  let selected = candidates.find((item) => item.length >= 120 && item.length <= 160);

  if (!selected) {
    selected = candidates[1];
  }

  if (selected.length > 160) {
    selected = selected.slice(0, 157).trimEnd() + "...";
  }

  return selected;
}

function normalizeTags(tags, category, title, slug) {
  const result = new Set();

  if (Array.isArray(tags)) {
    for (const tag of tags) {
      if (tag && String(tag).trim()) {
        result.add(String(tag).trim());
      }
    }
  }

  const categoryTags = CATEGORY_TAGS[category] || ["AI", "Belajar AI", "AI Praktis"];

  for (const tag of categoryTags) {
    result.add(tag);
  }

  if (slug.includes("chatgpt")) result.add("ChatGPT");
  if (slug.includes("gemini")) result.add("Gemini");
  if (slug.includes("claude")) result.add("Claude");
  if (slug.includes("seo")) result.add("SEO");
  if (slug.includes("umkm")) result.add("UMKM");
  if (slug.includes("youtube")) result.add("YouTube");
  if (slug.includes("tiktok")) result.add("TikTok");
  if (slug.includes("instagram")) result.add("Instagram");
  if (slug.includes("prompt")) result.add("Prompt AI");

  const cleanTitle = compactTitle(title);

  if (cleanTitle) {
    result.add(cleanTitle);
  }

  return [...result].slice(0, 10);
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

function toCsv(rows, headers) {
  const escape = (value) => {
    const stringValue = String(value ?? "");
    return `"${stringValue.replace(/"/g, '""')}"`;
  };

  return [
    headers.map(escape).join(","),
    ...rows.map((row) => headers.map((header) => escape(row[header])).join(",")),
  ].join("\n");
}

function toMarkdownTable(rows, headers) {
  if (rows.length === 0) {
    return "_Tidak ada data._";
  }

  const head = `| ${headers.map((header) => header.label).join(" |")} |`;
  const line = `| ${headers.map(() => "---").join(" |")} |`;

  const body = rows.map((row) => {
    return `| ${headers
      .map((header) => String(row[header.key] ?? "").replace(/\|/g, "\\|"))
      .join(" |")} |`;
  });

  return [head, line, ...body].join("\n");
}

function main() {
  if (!fs.existsSync(BLOG_DIR)) {
    console.error(`Folder tidak ditemukan: ${BLOG_DIR}`);
    process.exit(1);
  }

  ensureDir(AUDIT_DIR);
  ensureDir(BACKUP_DIR);

  const files = getMarkdownFiles(BLOG_DIR);

  const changedRows = [];
  const shortRows = [];

  let changedFiles = 0;
  let descriptionFixed = 0;
  let tagsFixed = 0;

  for (const file of files) {
    const filePath = path.join(BLOG_DIR, file);
    const backupPath = path.join(BACKUP_DIR, file);
    const originalContent = fs.readFileSync(filePath, "utf8");
    const normalizedContent = normalizeLineEndings(originalContent);
    const parsed = parseFrontmatter(normalizedContent);
    const slug = getSlug(file);

    if (!parsed.hasFrontmatter) {
      continue;
    }

    const wordCount = countWords(parsed.body);

    if (wordCount < 800) {
      shortRows.push({
        file,
        title: parsed.data.title || "",
        category: parsed.data.category || "",
        wordCount,
        priority:
          wordCount < 500
            ? "HIGH"
            : wordCount < 700
              ? "MEDIUM"
              : "LOW",
      });
    }

    const currentDescription = String(parsed.data.description || "");
    const currentTags = Array.isArray(parsed.data.tags) ? parsed.data.tags : [];

    const nextDescription =
      currentDescription.length < 120 || currentDescription.length > 160
        ? makeSeoDescription(parsed.data.title, parsed.data.category)
        : currentDescription;

    const nextTags =
      currentTags.length < 3
        ? normalizeTags(currentTags, parsed.data.category, parsed.data.title, slug)
        : currentTags;

    const descriptionChanged = nextDescription !== currentDescription;
    const tagsChanged = JSON.stringify(nextTags) !== JSON.stringify(currentTags);

    if (!descriptionChanged && !tagsChanged) {
      continue;
    }

    if (descriptionChanged) descriptionFixed += 1;
    if (tagsChanged) tagsFixed += 1;

    const nextFrontmatter = buildFrontmatter({
      title: parsed.data.title,
      description: nextDescription,
      pubDate: parsed.data.pubDate,
      author: "AI Praktis Indonesia",
      category: parsed.data.category,
      tags: nextTags,
      featured: parsed.data.featured === true || parsed.data.featured === "true",
      draft: false,
    });

    const nextContent = `${nextFrontmatter}

${parsed.body.trim()}
`;

    changedFiles += 1;

    changedRows.push({
      file,
      title: parsed.data.title || "",
      category: parsed.data.category || "",
      oldDescriptionLength: currentDescription.length,
      newDescriptionLength: nextDescription.length,
      oldTagsCount: currentTags.length,
      newTagsCount: nextTags.length,
      descriptionChanged,
      tagsChanged,
    });

    if (APPLY) {
      fs.writeFileSync(backupPath, originalContent, "utf8");
      fs.writeFileSync(filePath, nextContent, "utf8");
    }
  }

  shortRows.sort((a, b) => {
    const rank = { HIGH: 1, MEDIUM: 2, LOW: 3 };
    return rank[a.priority] - rank[b.priority] || a.wordCount - b.wordCount;
  });

  fs.writeFileSync(
    path.join(AUDIT_DIR, "batch1c-seo-metadata-fixes.csv"),
    toCsv(changedRows, [
      "file",
      "title",
      "category",
      "oldDescriptionLength",
      "newDescriptionLength",
      "oldTagsCount",
      "newTagsCount",
      "descriptionChanged",
      "tagsChanged",
    ]),
    "utf8"
  );

  fs.writeFileSync(
    path.join(AUDIT_DIR, "batch1c-short-articles.csv"),
    toCsv(shortRows, ["file", "title", "category", "wordCount", "priority"]),
    "utf8"
  );

  const markdownReport = `# Batch 1C — Short Articles Report

Total artikel <800 kata: **${shortRows.length}**

${toMarkdownTable(shortRows, [
  { key: "file", label: "File" },
  { key: "category", label: "Kategori" },
  { key: "wordCount", label: "Jumlah Kata" },
  { key: "priority", label: "Prioritas" },
])}
`;

  fs.writeFileSync(
    path.join(AUDIT_DIR, "BATCH1C_SHORT_ARTICLES_REPORT.md"),
    markdownReport.trim() + "\n",
    "utf8"
  );

  console.log("");
  console.log("BATCH 1C — SEO METADATA + SHORT ARTICLES");
  console.log("========================================");
  console.log(`Mode: ${APPLY ? "APPLY / file diubah" : "DRY RUN / belum mengubah file"}`);
  console.log(`Total file diperiksa: ${files.length}`);
  console.log(`File metadata akan/berhasil diubah: ${changedFiles}`);
  console.log(`Description diperbaiki: ${descriptionFixed}`);
  console.log(`Tags diperbaiki: ${tagsFixed}`);
  console.log(`Artikel <800 kata ditemukan: ${shortRows.length}`);
  console.log("");
  console.log("Report:");
  console.log("- audit-results/batch1c-seo-metadata-fixes.csv");
  console.log("- audit-results/batch1c-short-articles.csv");
  console.log("- audit-results/BATCH1C_SHORT_ARTICLES_REPORT.md");

  if (APPLY) {
    console.log(`Backup tersimpan di: ${BACKUP_DIR}`);
  } else {
    console.log("");
    console.log("Belum ada file yang diubah.");
    console.log("Jika hasilnya aman, jalankan:");
    console.log("node scripts/fix-batch1c-seo-metadata.mjs --apply");
  }

  console.log("");
}

main();