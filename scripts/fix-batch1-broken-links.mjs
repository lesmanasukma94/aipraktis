import fs from "fs";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");
const AUDIT_DIR = path.join(process.cwd(), "audit-results");
const BACKUP_DIR = path.join(
  AUDIT_DIR,
  `backup-before-batch1-broken-links-${new Date().toISOString().slice(0, 10)}`
);

const APPLY = process.argv.includes("--apply");

const LINK_MAP = {
  "/blog/apakah-ai-aman/": "/blog/ai-untuk-pemula/",
  "/blog/skill-ai/": "/blog/skill-ai-yang-harus-dipelajari/",
  "/blog/prompt-ai-untuk-video/": "/blog/ai-tools-untuk-video/",
  "/blog/kesalahan-pemula-saat-belajar-ai/": "/blog/ai-untuk-pemula/",
  "/blog/prompt-ai-untuk-caption-instagram/": "/blog/ai-untuk-instagram-creator/",
  "/blog/prompt-ai-untuk-content-creator/": "/blog/ai-untuk-content-creator/",
  "/blog/ai-tools-terbaik/": "/blog/15-tools-ai-gratis-terbaik-2026/",
  "/blog/ai-tools-untuk-coding/": "/blog/ai-tools-terbaik-untuk-produktivitas/",
  "/blog/cara-menggunakan-ai-untuk-coding/": "/blog/cara-menggunakan-ai-untuk-kerja/",
  "/blog/prompt-ai-untuk-menulis/": "/blog/ai-tools-untuk-menulis/",
  "/blog/ai-untuk-karyawan/": "/blog/cara-menggunakan-ai-untuk-kerja/",
  "/blog/ai-tools-terbaik-untuk-content-creator/": "/blog/ai-untuk-content-creator/",
  "/blog/cara-menggunakan-ai-untuk-membuat-video/": "/blog/ai-tools-untuk-video/",
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

function getSlugFromBlogUrl(url) {
  return url
    .replace(/^\/blog\//, "")
    .replace(/\/$/, "")
    .trim();
}

function getExistingSlugs() {
  const files = getMarkdownFiles(BLOG_DIR);

  return new Set(
    files.map((file) => file.replace(/\.mdx?$/, ""))
  );
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceMarkdownLinks(content, fromUrl, toUrl) {
  const fromWithoutSlash = fromUrl.replace(/\/$/, "");
  const toWithoutSlash = toUrl.replace(/\/$/, "");

  let nextContent = content;

  const patterns = [
    {
      from: fromUrl,
      to: toUrl,
    },
    {
      from: fromWithoutSlash,
      to: toWithoutSlash,
    },
  ];

  let count = 0;

  for (const item of patterns) {
    const regex = new RegExp(
      `(\\[[^\\]]+\\]\\()${escapeRegExp(item.from)}(\\))`,
      "g"
    );

    nextContent = nextContent.replace(regex, (_match, before, after) => {
      count += 1;
      return `${before}${item.to}${after}`;
    });
  }

  return {
    content: nextContent,
    count,
  };
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

function main() {
  if (!fs.existsSync(BLOG_DIR)) {
    console.error(`Folder tidak ditemukan: ${BLOG_DIR}`);
    process.exit(1);
  }

  ensureDir(AUDIT_DIR);
  ensureDir(BACKUP_DIR);

  const existingSlugs = getExistingSlugs();
  const files = getMarkdownFiles(BLOG_DIR);

  const validMap = {};
  const skippedMap = [];

  for (const [fromUrl, toUrl] of Object.entries(LINK_MAP)) {
    const targetSlug = getSlugFromBlogUrl(toUrl);

    if (existingSlugs.has(targetSlug)) {
      validMap[fromUrl] = toUrl;
    } else {
      skippedMap.push({
        fromUrl,
        toUrl,
        reason: `Target file tidak ditemukan: ${targetSlug}.md`,
      });
    }
  }

  const changeRows = [];
  let changedFiles = 0;
  let totalReplacement = 0;

  for (const file of files) {
    const filePath = path.join(BLOG_DIR, file);
    const backupPath = path.join(BACKUP_DIR, file);
    const originalContent = fs.readFileSync(filePath, "utf8");

    let nextContent = originalContent;
    let fileReplacementCount = 0;

    for (const [fromUrl, toUrl] of Object.entries(validMap)) {
      const result = replaceMarkdownLinks(nextContent, fromUrl, toUrl);

      if (result.count > 0) {
        fileReplacementCount += result.count;
        totalReplacement += result.count;

        changeRows.push({
          file,
          fromUrl,
          toUrl,
          replacements: result.count,
        });
      }

      nextContent = result.content;
    }

    if (fileReplacementCount > 0) {
      changedFiles += 1;

      if (APPLY) {
        fs.writeFileSync(backupPath, originalContent, "utf8");
        fs.writeFileSync(filePath, nextContent, "utf8");
      }
    }
  }

  fs.writeFileSync(
    path.join(AUDIT_DIR, "batch1-broken-link-fixes.csv"),
    toCsv(changeRows, ["file", "fromUrl", "toUrl", "replacements"]),
    "utf8"
  );

  fs.writeFileSync(
    path.join(AUDIT_DIR, "batch1-broken-link-skipped.csv"),
    toCsv(skippedMap, ["fromUrl", "toUrl", "reason"]),
    "utf8"
  );

  console.log("");
  console.log("BATCH 1B — BROKEN INTERNAL LINK FIX");
  console.log("===================================");
  console.log(`Mode: ${APPLY ? "APPLY / file diubah" : "DRY RUN / belum mengubah file"}`);
  console.log(`Total file diperiksa: ${files.length}`);
  console.log(`Mapping valid: ${Object.keys(validMap).length}`);
  console.log(`Mapping dilewati: ${skippedMap.length}`);
  console.log(`File yang akan/berhasil diubah: ${changedFiles}`);
  console.log(`Total link diganti: ${totalReplacement}`);
  console.log("");
  console.log("Report:");
  console.log("- audit-results/batch1-broken-link-fixes.csv");
  console.log("- audit-results/batch1-broken-link-skipped.csv");

  if (APPLY) {
    console.log(`Backup tersimpan di: ${BACKUP_DIR}`);
  } else {
    console.log("");
    console.log("Belum ada file yang diubah.");
    console.log("Jika hasilnya aman, jalankan:");
    console.log("node scripts/fix-batch1-broken-links.mjs --apply");
  }

  console.log("");
}

main();