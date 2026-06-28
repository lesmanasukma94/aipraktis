# AI Praktis Indonesia v2

# 03-COMPONENT-SPECIFICATION.md

> **Document Version:** 1.0
> **Status:** Active
> **Last Updated:** June 2026

---

# 1. Tujuan

Dokumen ini mendefinisikan spesifikasi implementasi seluruh komponen yang digunakan pada AI Praktis Indonesia.

Tujuan utama:

- menjaga konsistensi antarkomponen;
- meningkatkan reusability;
- mempermudah maintenance;
- mengurangi duplikasi kode;
- memastikan seluruh halaman menggunakan Design System yang sama.

Dokumen ini menjadi acuan utama saat membuat folder `src/components`.

---

# 2. Prinsip Komponen

Seluruh komponen harus mengikuti prinsip berikut.

## Single Responsibility

Satu komponen hanya memiliki satu tanggung jawab utama.

---

## Reusable

Komponen dapat digunakan di banyak halaman tanpa modifikasi besar.

---

## Composable

Komponen dapat digabungkan menjadi komponen yang lebih besar.

---

## Predictable

Input dan output komponen harus mudah dipahami.

---

## Accessible

Komponen harus memenuhi standar aksesibilitas.

---

## Lightweight

Hindari JavaScript jika tidak diperlukan.

---

# 3. Hierarki Komponen

```
Pages
    │
    ▼
Layouts
    │
    ▼
Sections
    │
    ▼
Feature Components
    │
    ▼
UI Components
```

Semakin ke bawah, komponen semakin kecil dan semakin mudah digunakan ulang.

---

# 4. Kategori Komponen

## Layout Components

Mengatur struktur halaman.

Contoh:

- Header
- Footer
- Sidebar
- Container
- Main
- Section
- Breadcrumb

---

## Navigation Components

Navigasi utama website.

Contoh:

- Navbar
- Mobile Menu
- Mega Menu
- Pagination
- Tabs
- Table of Contents

---

## Content Components

Menampilkan konten.

Contoh:

- ArticleCard
- ToolCard
- PromptCard
- TemplateCard
- AuthorCard
- CategoryCard

---

## Form Components

Interaksi pengguna.

Contoh:

- SearchBar
- SearchInput
- Select
- Checkbox
- Radio
- NewsletterForm

---

## Feedback Components

Memberikan informasi kepada pengguna.

Contoh:

- Alert
- Badge
- EmptyState
- Loading
- Skeleton
- Toast

---

## SEO Components

Mendukung optimasi mesin pencari.

Contoh:

- SEOHead
- Canonical
- StructuredData
- OpenGraph
- BreadcrumbSchema

---

## Utility Components

Komponen pendukung.

Contoh:

- ThemeSwitcher
- ShareButtons
- ReadingProgress
- CopyButton

---

# 5. Struktur Folder Komponen

Contoh struktur:

```
components/

ui/
common/
layout/
navigation/
cards/
forms/
search/
seo/
blog/
tools/
prompts/
templates/
home/
```

Komponen kompleks memiliki folder sendiri.

Contoh:

```
ToolCard/

ToolCard.astro

ToolCard.css

types.ts

index.ts
```

---

# 6. Naming Convention

Gunakan PascalCase.

Contoh:

```
Button.astro

ArticleCard.astro

SearchBar.astro

NewsletterForm.astro
```

Hindari nama yang terlalu umum.

Contoh yang tidak disarankan:

```
Card

Item

Data

Content

Widget
```

Gunakan nama yang mencerminkan fungsi.

---

# 7. Standar Props

Props harus:

- jelas;
- bertipe TypeScript;
- memiliki default value bila sesuai;
- seminimal mungkin.

Contoh:

```ts
interface ToolCardProps {
  title: string;
  slug: string;
  description?: string;
  logo?: string;
}
```

---

# 8. Styling

Setiap komponen:

- menggunakan Design Tokens;
- tidak memiliki hardcoded color;
- tidak memiliki spacing tetap yang bertentangan dengan token;
- mendukung responsive layout.

---

# 9. JavaScript

Gunakan JavaScript hanya bila diperlukan.

Contoh komponen tanpa hidrasi:

- ArticleCard
- ToolCard
- Footer
- Hero
- CTA
- AuthorCard

Contoh komponen dengan hidrasi:

- Search
- Theme Switcher
- Bookmark
- Newsletter Form
- Filter

---

# 10. Komponen Homepage

Homepage terdiri dari section berikut.

- Hero
- Featured Content
- AI Tools
- Prompt Library
- Template Library
- Learning Paths
- Latest Articles
- Newsletter CTA
- FAQ
- Footer CTA

Masing-masing dibuat sebagai komponen terpisah.

---

# 11. Komponen Blog

Minimal terdiri dari:

- ArticleHeader
- ArticleContent
- TableOfContents
- AuthorBox
- RelatedArticles
- ReadingProgress
- ShareButtons
- NewsletterInline

---

# 12. Komponen AI Tools

Minimal terdiri dari:

- ToolCard
- ToolHero
- ToolFeatures
- ToolPricing
- ToolProsCons
- ToolAlternatives
- ToolFAQ
- ToolCTA

---

# 13. Komponen Prompt Library

Minimal terdiri dari:

- PromptCard
- PromptCategory
- PromptExample
- CopyPromptButton
- PromptTags
- PromptCTA

---

# 14. Komponen Template Library

Minimal terdiri dari:

- TemplateCard
- TemplatePreview
- DownloadCTA
- TemplateInfo
- TemplateFAQ

---

# 15. Komponen UI Dasar

Komponen dasar yang harus tersedia.

- Button
- Link
- Badge
- Chip
- Tag
- Card
- Avatar
- Icon
- Divider
- Tooltip
- Modal
- Accordion
- Tabs
- Pagination
- Breadcrumb

Semua halaman harus menggunakan komponen ini daripada membuat variasi baru.

---

# 16. Anti-pattern

Hindari:

- komponen lebih dari ±300 baris;
- logika bisnis di dalam komponen presentasi;
- CSS duplikat;
- prop drilling berlebihan;
- JavaScript untuk elemen statis;
- komponen dengan lebih dari satu tanggung jawab utama.

Jika komponen mulai sulit dipahami, pecah menjadi beberapa komponen yang lebih kecil.

---

# 17. Acceptance Criteria

Implementasi komponen dianggap sesuai apabila:

- [ ] Mengikuti Single Responsibility Principle.
- [ ] Reusable di berbagai halaman.
- [ ] Menggunakan Design Tokens.
- [ ] Mendukung aksesibilitas.
- [ ] Tidak memiliki JavaScript yang tidak diperlukan.
- [ ] Props terdokumentasi dengan baik.
- [ ] Nama komponen konsisten menggunakan PascalCase.

---

# 18. Hubungan dengan Dokumen Lain

Dokumen ini berkaitan langsung dengan:

- 01-ASTRO-ARCHITECTURE.md
- 02-FOLDER-STRUCTURE.md
- 04-CONTENT-COLLECTIONS.md
- 05-ROUTING.md
- 10-DESIGN-SYSTEM-IMPLEMENTATION.md

---

# 19. Changelog

## v1.0

- Menetapkan spesifikasi implementasi seluruh komponen.
- Mendefinisikan kategori, struktur, dan konvensi penamaan komponen.
- Menentukan standar props, styling, dan penggunaan JavaScript.
- Menjadi acuan implementasi komponen pada proyek AI Praktis Indonesia.