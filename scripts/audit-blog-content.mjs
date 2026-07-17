import fs from "fs";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");
const OUTPUT_DIR = path.join(process.cwd(), "audit-results");

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

const REQUIRED_FRONTMATTER = [
  "title",
  "description",
  "pubDate",
  "author",
  "category",
  "tags",
  "featured",
  "draft",
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

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);

  if (!match) {
    return {
      raw: "",
      data: {},
      body: content,
      hasFrontmatter: false,
    };
  }

  const raw = match[1];
  const body = content.slice(match[0].length).trim();

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

      data[key] = value;
      currentKey = key;
      continue;
    }

    if (currentKey && line.trim().startsWith("- ")) {
      if (!Array.isArray(data[currentKey])) {
        data[currentKey] = [];
      }

      data[currentKey].push(line.trim().replace("- ", "").trim());
    }
  }

  return {
    raw,
    data,
    body,
    hasFrontmatter: true,
  };
}

function getSlug(filename) {
  return filename.replace(/\.mdx?$/, "");
}

function countWords(text) {
  return text
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/[^\w\sÀ-ÿ-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

function getInternalLinks(content) {
  const links = [];
  const regex = /\[([^\]]+)\]\((\/blog\/[^)]+)\)/g;

  let match;

  while ((match = regex.exec(content)) !== null) {
    links.push({
      anchor: match[1],
      url: match[2],
    });
  }

  return links;
}

function normalizeBlogUrl(url) {
  return url
    .replace(/^\/blog\//, "")
    .replace(/\/$/, "")
    .trim();
}

function csvEscape(value) {
  const stringValue = String(value ?? "");
  return `"${stringValue.replace(/"/g, '""')}"`;
}

function toCsv(rows, headers) {
  const headerRow = headers.map(csvEscape).join(",");

  const bodyRows = rows.map((row) =>
    headers.map((header) => csvEscape(row[header])).join(",")
  );

  return [headerRow, ...bodyRows].join("\n");
}

function main() {
  ensureDir(OUTPUT_DIR);

  if (!fs.existsSync(BLOG_DIR)) {
    console.error(`Folder tidak ditemukan: ${BLOG_DIR}`);
    process.exit(1);
  }

  const files = getMarkdownFiles(BLOG_DIR);
  const slugs = new Set(files.map(getSlug));

  const auditRows = [];
  const issueRows = [];
  const linkRows = [];
  const categorySummary = {};
  const duplicateTitles = new Map();

  for (const file of files) {
    const filePath = path.join(BLOG_DIR, file);
    const content = fs.readFileSync(filePath, "utf8");
    const parsed = parseFrontmatter(content);
    const slug = getSlug(file);
    const wordCount = countWords(parsed.body);
    const internalLinks = getInternalLinks(content);

    const title = parsed.data.title || "";
    const description = parsed.data.description || "";
    const category = parsed.data.category || "";
    const draft = String(parsed.data.draft ?? "");
    const featured = String(parsed.data.featured ?? "");
    const pubDate = parsed.data.pubDate || "";
    const author = parsed.data.author || "";
    const tags = Array.isArray(parsed.data.tags)
      ? parsed.data.tags
      : parsed.data.tags
        ? [parsed.data.tags]
        : [];

    if (title) {
      const existing = duplicateTitles.get(title) || [];
      existing.push(file);
      duplicateTitles.set(title, existing);
    }

    if (!categorySummary[category]) {
      categorySummary[category] = {
        category,
        total: 0,
        draftTrue: 0,
        emptyOrShort: 0,
        featuredTrue: 0,
      };
    }

    categorySummary[category].total += 1;

    if (draft === "true") {
      categorySummary[category].draftTrue += 1;
    }

    if (wordCount < 800) {
      categorySummary[category].emptyOrShort += 1;
    }

    if (featured === "true") {
      categorySummary[category].featuredTrue += 1;
    }

    const issues = [];

    if (!parsed.hasFrontmatter) {
      issues.push("Tidak ada frontmatter");
    }

    for (const field of REQUIRED_FRONTMATTER) {
      if (
        parsed.data[field] === undefined ||
        parsed.data[field] === "" ||
        parsed.data[field] === null
      ) {
        issues.push(`Frontmatter kosong/hilang: ${field}`);
      }
    }

    if (!VALID_CATEGORIES.includes(category)) {
      issues.push(`Kategori tidak valid: ${category}`);
    }

    if (draft === "true") {
      issues.push("Masih draft: true");
    }

    if (author !== "AI Praktis Indonesia") {
      issues.push(`Author tidak standar: ${author}`);
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(pubDate)) {
      issues.push(`Format pubDate tidak standar: ${pubDate}`);
    }

    if (description.length < 120) {
      issues.push("Description terlalu pendek");
    }

    if (description.length > 180) {
      issues.push("Description terlalu panjang");
    }

    if (!Array.isArray(tags) || tags.length < 3) {
      issues.push("Tags kurang dari 3");
    }

    if (wordCount < 300) {
      issues.push("Artikel kosong/sangat pendek");
    } else if (wordCount < 800) {
      issues.push("Artikel terlalu pendek");
    }

    if (internalLinks.length < 5) {
      issues.push("Internal link kurang dari 5");
    }

    for (const link of internalLinks) {
      const linkedSlug = normalizeBlogUrl(link.url);
      const exists = slugs.has(linkedSlug);

      linkRows.push({
        file,
        slug,
        anchor: link.anchor,
        url: link.url,
        linkedSlug,
        status: exists ? "OK" : "BROKEN",
      });

      if (!exists) {
        issues.push(`Broken internal link: ${link.url}`);
      }
    }

    auditRows.push({
      file,
      slug,
      title,
      category,
      pubDate,
      author,
      draft,
      featured,
      tagsCount: tags.length,
      wordCount,
      internalLinksCount: internalLinks.length,
      issuesCount: issues.length,
      issues: issues.join(" | "),
    });

    for (const issue of issues) {
      issueRows.push({
        file,
        slug,
        title,
        category,
        issue,
      });
    }
  }

  for (const [title, titleFiles] of duplicateTitles.entries()) {
    if (titleFiles.length > 1) {
      for (const file of titleFiles) {
        issueRows.push({
          file,
          slug: getSlug(file),
          title,
          category: "",
          issue: `Duplikasi title: ${title}`,
        });
      }
    }
  }

  const categoryRows = Object.values(categorySummary).sort((a, b) =>
    a.category.localeCompare(b.category)
  );

  const brokenLinks = linkRows.filter((row) => row.status === "BROKEN");

  const priorityRows = auditRows
    .filter((row) => row.issuesCount > 0)
    .sort((a, b) => {
      if (b.issuesCount !== a.issuesCount) {
        return b.issuesCount - a.issuesCount;
      }

      return a.wordCount - b.wordCount;
    });

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "audit-200-artikel.csv"),
    toCsv(auditRows, [
      "file",
      "slug",
      "title",
      "category",
      "pubDate",
      "author",
      "draft",
      "featured",
      "tagsCount",
      "wordCount",
      "internalLinksCount",
      "issuesCount",
      "issues",
    ])
  );

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "audit-issues.csv"),
    toCsv(issueRows, ["file", "slug", "title", "category", "issue"])
  );

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "audit-internal-links.csv"),
    toCsv(linkRows, ["file", "slug", "anchor", "url", "linkedSlug", "status"])
  );

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "audit-broken-links.csv"),
    toCsv(brokenLinks, ["file", "slug", "anchor", "url", "linkedSlug", "status"])
  );

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "audit-category-summary.csv"),
    toCsv(categoryRows, ["category", "total", "draftTrue", "emptyOrShort", "featuredTrue"])
  );

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "audit-priority-fixes.csv"),
    toCsv(priorityRows, [
      "file",
      "slug",
      "title",
      "category",
      "wordCount",
      "internalLinksCount",
      "issuesCount",
      "issues",
    ])
  );

  console.log("");
  console.log("AUDIT 200 ARTIKEL SELESAI");
  console.log("=========================");
  console.log(`Total file artikel: ${files.length}`);
  console.log(`Total issue: ${issueRows.length}`);
  console.log(`Broken internal link: ${brokenLinks.length}`);
  console.log("");
  console.log("File hasil audit:");
  console.log("- audit-results/audit-200-artikel.csv");
  console.log("- audit-results/audit-issues.csv");
  console.log("- audit-results/audit-internal-links.csv");
  console.log("- audit-results/audit-broken-links.csv");
  console.log("- audit-results/audit-category-summary.csv");
  console.log("- audit-results/audit-priority-fixes.csv");
  console.log("");
}

main();