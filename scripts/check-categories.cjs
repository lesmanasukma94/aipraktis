const fs = require("fs");
const path = require("path");

const BLOG_DIR = path.join(__dirname, "..", "src", "content", "blog");

const categories = {};

for (const file of fs.readdirSync(BLOG_DIR)) {
  if (!file.endsWith(".md")) continue;

  const content = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");

  const match = content.match(/category:\s*"([^"]+)"/);

  if (!match) continue;

  const cat = match[1];

  categories[cat] ??= 0;
  categories[cat]++;
}

console.table(categories);