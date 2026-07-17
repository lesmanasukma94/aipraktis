import fs from "fs";
import path from "path";

const AUDIT_DIR = path.join(process.cwd(), "audit-results");

const FILES = {
  audit: path.join(AUDIT_DIR, "audit-200-artikel.csv"),
  issues: path.join(AUDIT_DIR, "audit-issues.csv"),
  brokenLinks: path.join(AUDIT_DIR, "audit-broken-links.csv"),
  categorySummary: path.join(AUDIT_DIR, "audit-category-summary.csv"),
  priority: path.join(AUDIT_DIR, "audit-priority-fixes.csv"),
};

function readFileSafe(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`File tidak ditemukan: ${filePath}`);
    process.exit(1);
  }

  return fs.readFileSync(filePath, "utf8");
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"' && inQuotes && nextChar === '"') {
      field += '"';
      i++;
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(field);
      field = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && nextChar === "\n") {
        i++;
      }

      row.push(field);
      field = "";

      if (row.some((item) => item.trim() !== "")) {
        rows.push(row);
      }

      row = [];
      continue;
    }

    field += char;
  }

  if (field || row.length > 0) {
    row.push(field);

    if (row.some((item) => item.trim() !== "")) {
      rows.push(row);
    }
  }

  if (rows.length === 0) {
    return [];
  }

  const headers = rows[0];

  return rows.slice(1).map((values) => {
    const item = {};

    headers.forEach((header, index) => {
      item[header] = values[index] ?? "";
    });

    return item;
  });
}

function countBy(rows, key) {
  const map = new Map();

  for (const row of rows) {
    const value = row[key] || "(kosong)";
    map.set(value, (map.get(value) || 0) + 1);
  }

  return [...map.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

function classifyIssue(issue) {
  if (!issue) return "Tidak diketahui";

  if (issue.includes("Tidak ada frontmatter")) return "Tidak ada frontmatter";
  if (issue.includes("Frontmatter kosong/hilang")) return "Frontmatter kosong/hilang";
  if (issue.includes("Kategori tidak valid")) return "Kategori tidak valid";
  if (issue.includes("Masih draft")) return "Masih draft true";
  if (issue.includes("Author tidak standar")) return "Author tidak standar";
  if (issue.includes("Format pubDate")) return "Format pubDate tidak standar";
  if (issue.includes("Description terlalu pendek")) return "Description terlalu pendek";
  if (issue.includes("Description terlalu panjang")) return "Description terlalu panjang";
  if (issue.includes("Tags kurang")) return "Tags kurang";
  if (issue.includes("Artikel kosong/sangat pendek")) return "Artikel kosong/sangat pendek";
  if (issue.includes("Artikel terlalu pendek")) return "Artikel terlalu pendek";
  if (issue.includes("Internal link kurang")) return "Internal link kurang";
  if (issue.includes("Broken internal link")) return "Broken internal link";
  if (issue.includes("Duplikasi title")) return "Duplikasi title";

  return "Issue lain";
}

function issueClassList(issuesText) {
  if (!issuesText) return "";

  const issues = issuesText
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);

  return [...new Set(issues.map(classifyIssue))].join(", ");
}

function toMarkdownTable(rows, headers) {
  if (rows.length === 0) {
    return "_Tidak ada data._";
  }

  const headerRow = `| ${headers.map((h) => h.label).join(" |")} |`;
  const dividerRow = `| ${headers.map(() => "---").join(" |")} |`;

  const bodyRows = rows.map((row) => {
    return `| ${headers
      .map((h) => String(row[h.key] ?? "").replace(/\|/g, "\\|"))
      .join(" |")} |`;
  });

  return [headerRow, dividerRow, ...bodyRows].join("\n");
}

function writeOutput(filename, content) {
  fs.writeFileSync(path.join(AUDIT_DIR, filename), content.trim() + "\n", "utf8");
}

function main() {
  const auditRows = parseCsv(readFileSafe(FILES.audit));
  const issueRows = parseCsv(readFileSafe(FILES.issues));
  const brokenLinkRows = parseCsv(readFileSafe(FILES.brokenLinks));
  const categoryRows = parseCsv(readFileSafe(FILES.categorySummary));
  const priorityRows = parseCsv(readFileSafe(FILES.priority));

  const issueTypeRows = issueRows.map((row) => ({
    ...row,
    issueType: classifyIssue(row.issue),
  }));

  const issueTypeSummary = countBy(issueTypeRows, "issueType");
  const issueByCategory = countBy(issueRows, "category");
  const brokenByTarget = countBy(brokenLinkRows, "url");
  const brokenBySource = countBy(brokenLinkRows, "file");

  const emptyOrShortArticles = auditRows
    .filter((row) => Number(row.wordCount || 0) < 800)
    .sort((a, b) => Number(a.wordCount || 0) - Number(b.wordCount || 0));

  const draftTrueArticles = auditRows.filter((row) => row.draft === "true");

  const invalidCategoryArticles = issueRows.filter((row) =>
    row.issue.includes("Kategori tidak valid")
  );

  const missingFrontmatterArticles = issueRows.filter(
    (row) =>
      row.issue.includes("Tidak ada frontmatter") ||
      row.issue.includes("Frontmatter kosong/hilang")
  );

  const priorityTop50 = priorityRows.slice(0, 50).map((row, index) => ({
    no: index + 1,
    file: row.file,
    category: row.category,
    wordCount: row.wordCount,
    internalLinksCount: row.internalLinksCount,
    issuesCount: row.issuesCount,
    issueTypes: issueClassList(row.issues),
  }));

  const categorySummaryTable = categoryRows.map((row) => ({
    category: row.category || "(kosong)",
    total: row.total,
    draftTrue: row.draftTrue,
    emptyOrShort: row.emptyOrShort,
    featuredTrue: row.featuredTrue,
  }));

  const criticalSummary = [
    {
      area: "Broken internal link",
      count: brokenLinkRows.length,
      action: "Perbaiki URL/link yang salah atau ganti ke artikel yang benar.",
    },
    {
      area: "Artikel kosong/sangat pendek",
      count: emptyOrShortArticles.filter((row) => Number(row.wordCount || 0) < 300).length,
      action: "Isi artikel kosong terlebih dahulu.",
    },
    {
      area: "Artikel terlalu pendek",
      count: emptyOrShortArticles.filter(
        (row) => Number(row.wordCount || 0) >= 300 && Number(row.wordCount || 0) < 800
      ).length,
      action: "Perluas artikel minimal menjadi konten fondasi yang layak.",
    },
    {
      area: "Draft true",
      count: draftTrueArticles.length,
      action: "Ubah ke draft false jika artikel siap publish.",
    },
    {
      area: "Kategori tidak valid",
      count: invalidCategoryArticles.length,
      action: "Samakan category dengan 10 kategori resmi.",
    },
    {
      area: "Frontmatter bermasalah",
      count: missingFrontmatterArticles.length,
      action: "Lengkapi title, description, pubDate, author, category, tags, featured, draft.",
    },
  ];

  const actionPlan = `
# AUDIT ACTION PLAN — AI Praktis Indonesia

## Ringkasan Audit

| Metrik | Jumlah |
|---|---:|
| Total file artikel | ${auditRows.length} |
| Total issue | ${issueRows.length} |
| Broken internal link | ${brokenLinkRows.length} |
| Artikel < 800 kata | ${emptyOrShortArticles.length} |
| Artikel draft true | ${draftTrueArticles.length} |
| Artikel kategori tidak valid | ${invalidCategoryArticles.length} |
| Frontmatter bermasalah | ${missingFrontmatterArticles.length} |

Catatan penting:

Total file artikel adalah **${auditRows.length}**, bukan 200. Ini kemungkinan karena ada artikel fondasi, artikel tambahan, atau artikel non-roadmap. Ini tidak masalah selama semua artikel valid, berkualitas, dan terhubung dengan struktur website.

---

## Prioritas Perbaikan

${toMarkdownTable(criticalSummary, [
  { key: "area", label: "Area" },
  { key: "count", label: "Jumlah" },
  { key: "action", label: "Aksi" },
])}

---

## Ringkasan Issue Berdasarkan Jenis

${toMarkdownTable(issueTypeSummary, [
  { key: "name", label: "Jenis Issue" },
  { key: "count", label: "Jumlah" },
])}

---

## Ringkasan Kategori

${toMarkdownTable(categorySummaryTable, [
  { key: "category", label: "Kategori" },
  { key: "total", label: "Total Artikel" },
  { key: "draftTrue", label: "Draft True" },
  { key: "emptyOrShort", label: "Kosong/Pendek" },
  { key: "featuredTrue", label: "Featured True" },
])}

---

## 50 Artikel Prioritas Perbaikan

${toMarkdownTable(priorityTop50, [
  { key: "no", label: "No" },
  { key: "file", label: "File" },
  { key: "category", label: "Kategori" },
  { key: "wordCount", label: "Kata" },
  { key: "internalLinksCount", label: "Internal Link" },
  { key: "issuesCount", label: "Issue" },
  { key: "issueTypes", label: "Jenis Issue" },
])}

---

## Broken Link Target Terbanyak

${toMarkdownTable(brokenByTarget.slice(0, 30), [
  { key: "name", label: "URL Broken" },
  { key: "count", label: "Jumlah" },
])}

---

## File dengan Broken Link Terbanyak

${toMarkdownTable(brokenBySource.slice(0, 30), [
  { key: "name", label: "File" },
  { key: "count", label: "Jumlah Broken Link" },
])}

---

## Urutan Eksekusi Perbaikan

### Batch 1 — Critical Fix

Fokus:

1. Artikel kosong atau sangat pendek.
2. Frontmatter hilang atau tidak valid.
3. Draft true.
4. Kategori tidak valid.
5. Broken internal link.

Tujuan:

Website tidak punya halaman kosong, halaman draft yang tidak sengaja ikut publish, kategori rusak, atau link internal mati.

### Batch 2 — Struktur SEO

Fokus:

1. Description terlalu pendek atau terlalu panjang.
2. Tags kurang.
3. Internal link kurang dari 5.
4. Duplikasi title.
5. Featured article berlebihan.

Tujuan:

Setiap artikel punya metadata sehat dan struktur internal link yang cukup.

### Batch 3 — Quality Upgrade

Fokus:

1. Artikel < 800 kata.
2. Artikel pilar kategori.
3. Artikel monetisasi.
4. Artikel affiliate.
5. Artikel konsultasi/training.

Tujuan:

Artikel bukan hanya valid secara teknis, tetapi cukup kuat untuk ranking, konversi, dan monetisasi.

---

## Rekomendasi Langkah Berikutnya

Langkah berikutnya adalah memperbaiki **Batch 1** terlebih dahulu.

Urutan yang disarankan:

1. Buka daftar 50 artikel prioritas.
2. Perbaiki artikel yang kosong/sangat pendek.
3. Perbaiki broken internal link.
4. Perbaiki category/frontmatter/draft.
5. Jalankan ulang audit.
6. Baru lanjut ke internal link dan SEO metadata.
`;

  const brokenLinksReport = `
# BROKEN LINKS REPORT — AI Praktis Indonesia

## Ringkasan

Total broken internal link: **${brokenLinkRows.length}**

---

## Broken Link Target Terbanyak

${toMarkdownTable(brokenByTarget, [
  { key: "name", label: "URL Broken" },
  { key: "count", label: "Jumlah" },
])}

---

## Daftar Broken Link Lengkap

${toMarkdownTable(brokenLinkRows, [
  { key: "file", label: "File Sumber" },
  { key: "anchor", label: "Anchor" },
  { key: "url", label: "URL Broken" },
  { key: "linkedSlug", label: "Slug Target" },
])}
`;

  const top50Report = `
# TOP 50 PRIORITY FIXES — AI Praktis Indonesia

${toMarkdownTable(priorityTop50, [
  { key: "no", label: "No" },
  { key: "file", label: "File" },
  { key: "category", label: "Kategori" },
  { key: "wordCount", label: "Kata" },
  { key: "internalLinksCount", label: "Internal Link" },
  { key: "issuesCount", label: "Issue" },
  { key: "issueTypes", label: "Jenis Issue" },
])}
`;

  writeOutput("AUDIT_ACTION_PLAN.md", actionPlan);
  writeOutput("BROKEN_LINKS_REPORT.md", brokenLinksReport);
  writeOutput("TOP_50_PRIORITY_FIXES.md", top50Report);

  console.log("");
  console.log("RINGKASAN AUDIT BERHASIL DIBUAT");
  console.log("================================");
  console.log("- audit-results/AUDIT_ACTION_PLAN.md");
  console.log("- audit-results/BROKEN_LINKS_REPORT.md");
  console.log("- audit-results/TOP_50_PRIORITY_FIXES.md");
  console.log("");
  console.log("Buka file pertama dulu:");
  console.log("audit-results/AUDIT_ACTION_PLAN.md");
  console.log("");
}

main();