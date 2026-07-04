import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_DIR = path.join(__dirname, "..", "src", "content", "blog");

const DEFAULT_AUTHOR = "AI Praktis Indonesia";

function detectCategory(filename) {
  const name = filename.toLowerCase();

  if (name.includes("chatgpt")) return "chatgpt";
  if (name.includes("gemini")) return "gemini";
  if (name.includes("claude")) return "claude";

  if (name.includes("prompt")) return "prompt-engineering";

  if (name.includes("tools-ai")) return "ai-tools";

  if (name.includes("cara-")) return "tutorial";

  if (name.includes("roadmap")) return "roadmap";

  if (name.includes("ai-untuk")) return "use-case";

  if (name.includes("umkm")) return "ai-bisnis";

  if (name.includes("bisnis")) return "ai-bisnis";

  if (name.includes("guru")) return "ai-pendidikan";

  if (name.includes("mahasiswa")) return "ai-pendidikan";

  if (name.includes("siswa")) return "ai-pendidikan";

  return "artificial-intelligence";
}

const files = fs.readdirSync(BLOG_DIR);

for (const file of files) {

  if (!file.endsWith(".md")) continue;

  const fullPath = path.join(BLOG_DIR, file);

  let content = fs.readFileSync(fullPath, "utf8");

  if (!content.startsWith("---")) continue;

  const end = content.indexOf("---", 3);

  if (end === -1) continue;

  const frontmatter = content.slice(0, end + 3);
  const body = content.slice(end + 3);

  let updated = frontmatter;

  if (!updated.includes("category:")) {

    updated = updated.replace(
      /^---/,
      `---
category: "${detectCategory(file)}"`
    );

  }

  if (!updated.includes("tags:")) {

    updated = updated.replace(
      /^---/,
      `---
tags: []`
    );

  }

  if (!updated.includes("author:")) {

    updated = updated.replace(
      /^---/,
      `---
author: "${DEFAULT_AUTHOR}"`
    );

  }

  fs.writeFileSync(fullPath, updated + body);

}

console.log("✅ Semua artikel berhasil dimigrasikan.");