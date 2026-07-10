import { promises as fs } from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const ROOT = process.cwd();

const CONTENT_DIRECTORY = path.join(
  ROOT,
  "src",
  "content",
  "blog"
);

const REPORT_DIRECTORY = path.join(
  ROOT,
  "reports"
);

const VALID_CATEGORIES = new Set([
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
]);

const REQUIRED_FIELDS = [
  "title",
  "description",
  "pubDate",
  "author",
  "category",
  "tags",
];

const PLACEHOLDER_PATTERNS = [
  {
    label: "TODO",
    pattern: /\bTODO\b/i,
  },
  {
    label: "Lorem ipsum",
    pattern: /lorem ipsum/i,
  },
  {
    label: "Coming soon",
    pattern: /coming soon/i,
  },
  {
    label: "Segera hadir",
    pattern: /segera hadir/i,
  },
  {
    label: "Placeholder",
    pattern: /\bplaceholder\b/i,
  },
  {
    label: "Insert text",
    pattern: /\binsert (text|content|image)\b/i,
  },
];

const CLAIM_PATTERNS = [
  /cepat kaya/i,
  /penghasilan pasti/i,
  /keuntungan pasti/i,
  /dijamin menghasilkan/i,
  /tanpa usaha/i,
  /tanpa risiko/i,
  /100 juta/i,
];

async function walk(directory) {
  const entries = await fs.readdir(
    directory,
    {
      withFileTypes: true,
    }
  );

  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(
      directory,
      entry.name
    );

    if (entry.isDirectory()) {
      files.push(...await walk(fullPath));
      continue;
    }

    if (
      entry.isFile() &&
      [".md", ".mdx"].includes(
        path.extname(entry.name).toLowerCase()
      )
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

function escapeRegExp(value) {
  return value.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );
}

function splitFrontmatter(rawContent) {
  const content = rawContent.replace(
    /^\uFEFF/,
    ""
  );

  const match = content.match(
    /^---\s*\r?\n([\s\S]*?)\r?\n---\s*(?:\r?\n|$)/
  );

  if (!match) {
    return {
      hasFrontmatter: false,
      frontmatter: "",
      body: content,
    };
  }

  return {
    hasFrontmatter: true,
    frontmatter: match[1],
    body: content.slice(match[0].length),
  };
}

function hasField(frontmatter, field) {
  return new RegExp(
    `^${escapeRegExp(field)}\\s*:`,
    "mi"
  ).test(frontmatter);
}

function readScalar(frontmatter, field) {
  const pattern = new RegExp(
    `^${escapeRegExp(field)}\\s*:\\s*(.*?)\\s*$`,
    "mi"
  );

  const match = frontmatter.match(pattern);

  if (!match) {
    return null;
  }

  let value = match[1].trim();

  if (
    (value.startsWith('"') &&
      value.endsWith('"')) ||
    (value.startsWith("'") &&
      value.endsWith("'"))
  ) {
    value = value.slice(1, -1);
  }

  return value.trim();
}

function readBoolean(
  frontmatter,
  field,
  fallback = false
) {
  const value = readScalar(
    frontmatter,
    field
  );

  if (value === null) {
    return fallback;
  }

  return value.toLowerCase() === "true";
}

function normalizeText(value) {
  return value
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function stripMarkdown(markdown) {
  return markdown
    .replace(
      /```[\s\S]*?```/g,
      " "
    )
    .replace(
      /`[^`]*`/g,
      " "
    )
    .replace(
      /!\[([^\]]*)\]\([^)]+\)/g,
      " $1 "
    )
    .replace(
      /\[([^\]]+)\]\([^)]+\)/g,
      " $1 "
    )
    .replace(
      /<[^>]+>/g,
      " "
    )
    .replace(
      /^#{1,6}\s+/gm,
      ""
    )
    .replace(
      /[*_~>|-]/g,
      " "
    )
    .replace(
      /https?:\/\/\S+/g,
      " "
    )
    .replace(
      /\s+/g,
      " "
    )
    .trim();
}

function countWords(markdown) {
  const text = stripMarkdown(markdown);

  if (!text) {
    return 0;
  }

  return text.split(/\s+/).length;
}

function extractBlogLinks(markdown) {
  const links = new Set();

  const pattern =
    /\]\(\/blog\/([^/#?)]+)\/?(?:[?#][^)]*)?\)/g;

  let match;

  while (
    (match = pattern.exec(markdown)) !== null
  ) {
    const slug = match[1].trim();

    if (
      slug &&
      slug !== "category"
    ) {
      links.add(slug);
    }
  }

  return [...links];
}

function findPlaceholderLabels(content) {
  return PLACEHOLDER_PATTERNS
    .filter(({ pattern }) =>
      pattern.test(content)
    )
    .map(({ label }) => label);
}

function findClaimLabels(content) {
  return CLAIM_PATTERNS
    .filter((pattern) =>
      pattern.test(content)
    )
    .map((pattern) => pattern.source);
}

function makeBodyHash(body) {
  const normalized = normalizeText(
    stripMarkdown(body)
  );

  if (!normalized) {
    return null;
  }

  return crypto
    .createHash("sha256")
    .update(normalized)
    .digest("hex");
}

function groupDuplicates(posts, key) {
  const groups = new Map();

  for (const post of posts) {
    const value = post[key];

    if (!value) {
      continue;
    }

    const normalized = normalizeText(value);

    if (!normalized) {
      continue;
    }

    const group =
      groups.get(normalized) ?? [];

    group.push(post.file);

    groups.set(normalized, group);
  }

  return [...groups.entries()]
    .filter(([, files]) =>
      files.length > 1
    )
    .map(([value, files]) => ({
      value,
      files,
    }));
}

function groupDuplicateHashes(posts) {
  const groups = new Map();

  for (const post of posts) {
    if (!post.bodyHash) {
      continue;
    }

    const group =
      groups.get(post.bodyHash) ?? [];

    group.push(post.file);

    groups.set(post.bodyHash, group);
  }

  return [...groups.values()]
    .filter((files) =>
      files.length > 1
    );
}

function markdownList(items) {
  if (items.length === 0) {
    return "- Tidak ditemukan.";
  }

  return items
    .map((item) => `- ${item}`)
    .join("\n");
}

async function main() {
  const files = await walk(
    CONTENT_DIRECTORY
  );

  const posts = [];

  for (const absolutePath of files) {
    const rawContent = await fs.readFile(
      absolutePath,
      "utf8"
    );

    const {
      hasFrontmatter,
      frontmatter,
      body,
    } = splitFrontmatter(rawContent);

    const relativePath = path
      .relative(ROOT, absolutePath)
      .replaceAll("\\", "/");

    const slug = path.basename(
      absolutePath,
      path.extname(absolutePath)
    );

    const missingFields =
      hasFrontmatter
        ? REQUIRED_FIELDS.filter(
            (field) =>
              !hasField(
                frontmatter,
                field
              )
          )
        : [...REQUIRED_FIELDS];

    const title = readScalar(
      frontmatter,
      "title"
    );

    const description = readScalar(
      frontmatter,
      "description"
    );

    const category = readScalar(
      frontmatter,
      "category"
    );

    const pubDate = readScalar(
      frontmatter,
      "pubDate"
    );

    const author = readScalar(
      frontmatter,
      "author"
    );

    posts.push({
      file: relativePath,
      slug,
      title,
      description,
      category,
      pubDate,
      author,
      draft: readBoolean(
        frontmatter,
        "draft"
      ),
      hasFrontmatter,
      missingFields,
      wordCount: countWords(body),
      blogLinks: extractBlogLinks(body),
      placeholders:
        findPlaceholderLabels(rawContent),
      riskyClaims:
        findClaimLabels(rawContent),
      bodyHash: makeBodyHash(body),
    });
  }

  const publishedPosts = posts.filter(
    (post) => !post.draft
  );

  const publishedSlugs = new Set(
    publishedPosts.map(
      (post) => post.slug
    )
  );

  const invalidCategories =
    publishedPosts.filter(
      (post) =>
        !post.category ||
        !VALID_CATEGORIES.has(
          post.category
        )
    );

  const missingMetadata =
    publishedPosts.filter(
      (post) =>
        !post.hasFrontmatter ||
        post.missingFields.length > 0
    );

  const brokenLinks = [];

  for (const post of publishedPosts) {
    for (const targetSlug of post.blogLinks) {
      if (
        !publishedSlugs.has(targetSlug)
      ) {
        brokenLinks.push({
          source: post.file,
          target: `/blog/${targetSlug}/`,
        });
      }
    }
  }

  const futureDates =
    publishedPosts.filter((post) => {
      if (!post.pubDate) {
        return false;
      }

      const parsedDate = new Date(
        post.pubDate
      );

      return (
        !Number.isNaN(
          parsedDate.getTime()
        ) &&
        parsedDate >
          new Date()
      );
    });

  const placeholderPosts =
    publishedPosts.filter(
      (post) =>
        post.placeholders.length > 0
    );

  const riskyClaimPosts =
    publishedPosts.filter(
      (post) =>
        post.riskyClaims.length > 0
    );

  const lowInternalLinks =
    publishedPosts.filter(
      (post) =>
        post.blogLinks.length < 2
    );

  const duplicateTitles =
    groupDuplicates(
      publishedPosts,
      "title"
    );

  const duplicateDescriptions =
    groupDuplicates(
      publishedPosts,
      "description"
    );

  const duplicateBodies =
    groupDuplicateHashes(
      publishedPosts
    );

  const shortestPosts = [
    ...publishedPosts,
  ]
    .sort(
      (a, b) =>
        a.wordCount - b.wordCount
    )
    .slice(0, 20);

  const summary = {
    scannedAt:
      new Date().toISOString(),
    totalFiles: posts.length,
    publishedArticles:
      publishedPosts.length,
    draftArticles:
      posts.filter(
        (post) => post.draft
      ).length,
    missingMetadata:
      missingMetadata.length,
    invalidCategories:
      invalidCategories.length,
    brokenInternalLinks:
      brokenLinks.length,
    duplicateTitles:
      duplicateTitles.length,
    duplicateDescriptions:
      duplicateDescriptions.length,
    exactDuplicateBodies:
      duplicateBodies.length,
    placeholderArticles:
      placeholderPosts.length,
    futureDatedArticles:
      futureDates.length,
    articlesWithFewerThanTwoBlogLinks:
      lowInternalLinks.length,
    articlesWithRiskyClaims:
      riskyClaimPosts.length,
  };

  const report = `# Audit Konten AdSense

Dibuat: ${summary.scannedAt}

## Ringkasan

- Total file artikel: ${summary.totalFiles}
- Artikel terbit: ${summary.publishedArticles}
- Artikel draft: ${summary.draftArticles}
- Metadata wajib bermasalah: ${summary.missingMetadata}
- Kategori tidak valid: ${summary.invalidCategories}
- Internal link artikel rusak: ${summary.brokenInternalLinks}
- Judul duplikat: ${summary.duplicateTitles}
- Deskripsi duplikat: ${summary.duplicateDescriptions}
- Isi artikel sama persis: ${summary.exactDuplicateBodies}
- Placeholder ditemukan: ${summary.placeholderArticles}
- Tanggal publikasi masa depan: ${summary.futureDatedArticles}
- Artikel dengan kurang dari 2 internal link blog: ${summary.articlesWithFewerThanTwoBlogLinks}
- Artikel dengan klaim yang perlu ditinjau: ${summary.articlesWithRiskyClaims}

## Metadata Bermasalah

${markdownList(
  missingMetadata.map(
    (post) =>
      `${post.file} — ${post.missingFields.join(", ")}`
  )
)}

## Kategori Tidak Valid

${markdownList(
  invalidCategories.map(
    (post) =>
      `${post.file} — category: ${post.category ?? "kosong"}`
  )
)}

## Internal Link Rusak

${markdownList(
  brokenLinks.map(
    (link) =>
      `${link.source} → ${link.target}`
  )
)}

## Judul Duplikat

${markdownList(
  duplicateTitles.map(
    (group) =>
      `"${group.value}" — ${group.files.join(", ")}`
  )
)}

## Deskripsi Duplikat

${markdownList(
  duplicateDescriptions.map(
    (group) =>
      `"${group.value}" — ${group.files.join(", ")}`
  )
)}

## Isi Artikel Sama Persis

${markdownList(
  duplicateBodies.map(
    (filesInGroup) =>
      filesInGroup.join(", ")
  )
)}

## Placeholder

${markdownList(
  placeholderPosts.map(
    (post) =>
      `${post.file} — ${post.placeholders.join(", ")}`
  )
)}

## Tanggal Publikasi Masa Depan

${markdownList(
  futureDates.map(
    (post) =>
      `${post.file} — ${post.pubDate}`
  )
)}

## Artikel dengan Kurang dari 2 Internal Link Blog

${markdownList(
  lowInternalLinks.map(
    (post) =>
      `${post.file} — ${post.blogLinks.length} link`
  )
)}

## Klaim yang Perlu Ditinjau Manual

Temuan di bagian ini bukan otomatis pelanggaran. Periksa apakah artikel menjelaskan syarat, risiko, variasi hasil, dan tidak memberi jaminan penghasilan.

${markdownList(
  riskyClaimPosts.map(
    (post) =>
      `${post.file} — ${post.riskyClaims.join(", ")}`
  )
)}

## 20 Artikel Terpendek

Tidak ada batas jumlah kata resmi dari Google. Daftar ini hanya digunakan untuk menemukan halaman yang mungkin belum membahas topik secara memadai.

${markdownList(
  shortestPosts.map(
    (post) =>
      `${post.file} — ${post.wordCount} kata`
  )
)}
`;

  await fs.mkdir(
    REPORT_DIRECTORY,
    {
      recursive: true,
    }
  );

  await fs.writeFile(
    path.join(
      REPORT_DIRECTORY,
      "adsense-content-audit.json"
    ),
    JSON.stringify(
      {
        summary,
        posts,
        brokenLinks,
        duplicateTitles,
        duplicateDescriptions,
        duplicateBodies,
      },
      null,
      2
    ),
    "utf8"
  );

  await fs.writeFile(
    path.join(
      REPORT_DIRECTORY,
      "adsense-content-audit.md"
    ),
    report,
    "utf8"
  );

  console.log(
    "\nAudit konten selesai.\n"
  );

  console.table(summary);

  console.log(
    "\nLaporan:"
  );

  console.log(
    "reports/adsense-content-audit.md"
  );

  console.log(
    "reports/adsense-content-audit.json\n"
  );
}

main().catch((error) => {
  console.error(
    "Audit gagal:",
    error
  );

  process.exitCode = 1;
});