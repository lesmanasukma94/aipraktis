import fs from "node:fs";
import path from "node:path";

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

function getMarkdownFiles(dir) {
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => path.join(dir, file));
}

function fixFile(filePath) {
  const original = fs.readFileSync(filePath, "utf8");

  const match = original.match(/^---\r?\n([\s\S]*?)\r?\n---/);

  if (!match) return false;

  const frontmatter = match[1];
  const lines = frontmatter.split(/\r?\n/);

  let changed = false;

  for (let i = 0; i < lines.length; i++) {
    if (!/^tags:\s*$/.test(lines[i])) continue;

    for (let j = i + 1; j < lines.length; j++) {
      const line = lines[j];

      // Stop ketika masuk ke field frontmatter berikutnya
      if (/^[A-Za-z0-9_-]+:\s*/.test(line)) break;

      const tagMatch = line.match(/^(\s*-\s*)(.+?)\s*$/);
      if (!tagMatch) continue;

      const prefix = tagMatch[1];
      const rawValue = tagMatch[2].trim();

      const alreadyQuoted =
        (rawValue.startsWith('"') && rawValue.endsWith('"')) ||
        (rawValue.startsWith("'") && rawValue.endsWith("'"));

      // YAML bisa membaca item dengan ":" sebagai object jika tidak di-quote
      if (rawValue.includes(":") && !alreadyQuoted) {
        lines[j] = `${prefix}${JSON.stringify(rawValue)}`;
        changed = true;
      }
    }
  }

  if (!changed) return false;

  const fixedFrontmatter = lines.join("\n");
  const fixed = original.replace(frontmatter, fixedFrontmatter);

  fs.writeFileSync(filePath, fixed, "utf8");

  return true;
}

const files = getMarkdownFiles(BLOG_DIR);
const changedFiles = [];

for (const file of files) {
  if (fixFile(file)) {
    changedFiles.push(path.relative(process.cwd(), file));
  }
}

console.log("Invalid tag schema fixer complete.");
console.log(`Updated files: ${changedFiles.length}`);

for (const file of changedFiles) {
  console.log(`- ${file}`);
}