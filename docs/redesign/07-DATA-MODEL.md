# AI Praktis Indonesia v2

# 07-DATA-MODEL.md

> **Document Version:** 2.1
> **Status:** Living Documentation
> **Last Updated:** June 2026

---

# 1. Tujuan Dokumen

Dokumen ini mendefinisikan arsitektur data AI Praktis Indonesia.

Data Model menjadi dasar untuk:

* Astro Content Collections
* Validasi data
* Relasi antar entitas
* Internal Linking
* Search Engine
* RSS Feed
* Sitemap
* API (masa depan)
* CMS
* Database Migration

Seluruh implementasi data harus mengacu pada dokumen ini.

---

# 2. Prinsip Data Model

## Single Source of Truth

Setiap data hanya memiliki satu lokasi utama.

Contoh:

* Informasi AI Tool hanya berada pada collection `tools`.
* Artikel hanya menyimpan referensi ke AI Tool.

---

## Relationship over Duplication

Data dihubungkan menggunakan referensi.

Jangan menyalin data yang sama ke banyak file.

---

## Immutable Identifier

Slug menjadi identitas publik.

ID internal dapat berubah.

Slug tidak boleh berubah tanpa proses redirect.

---

## Schema First

Seluruh collection memiliki schema yang tervalidasi.

Tidak ada field bebas tanpa definisi.

---

## Future Ready

Model harus siap berkembang menjadi CMS atau database tanpa perubahan besar.

---

# 3. Arsitektur Data

```text
Website
│
├── Pages
├── Content Collections
├── Taxonomy
├── Assets
└── System Data
```

---

# 4. Content Collections

```text
articles/

tutorials/

guides/

reviews/

comparisons/

news/

tools/

prompts/

templates/

glossary/

faqs/

authors/

categories/

tags/
```

Setiap collection memiliki schema tersendiri.

---

# 5. Entity Relationship

```text
Author
│
├── Articles
├── Tutorials
└── Reviews

Tool
│
├── Tutorials
├── Prompts
├── Reviews
├── Comparisons
└── FAQ

Prompt
│
├── Tool
├── Tutorial
├── Template
└── Tags

Template
│
├── Tutorial
├── Prompt
└── Tool
```

---

# 6. Relasi Antar Collection

| Collection  | Relasi                                               |
| ----------- | ---------------------------------------------------- |
| tutorials   | tools, prompts, templates, authors, categories, tags |
| articles    | authors, categories, tags                            |
| guides      | tools, authors, categories                           |
| reviews     | tools, authors                                       |
| comparisons | tools                                                |
| prompts     | tools, tutorials, categories, tags                   |
| templates   | tutorials, prompts                                   |
| glossary    | categories                                           |
| faqs        | tools                                                |
| authors     | artikel yang ditulis                                 |
| categories  | semua content type                                   |
| tags        | semua content type                                   |

---

# 7. Struktur Identifier

Setiap entitas memiliki dua identifier.

## Internal ID

Digunakan sistem.

Contoh:

```text
tool_0001
prompt_0015
tutorial_0042
```

---

## Slug

Digunakan pada URL.

Contoh:

```text
chatgpt

cara-menggunakan-chatgpt

prompt-chatgpt-untuk-guru
```

Slug harus:

* unik;
* huruf kecil;
* menggunakan tanda hubung (`-`);
* tidak mengandung tanggal atau nomor versi.

---

# 8. URL Strategy

Semua URL bersifat deskriptif.

```text
/tools/chatgpt

/tutorials/cara-menggunakan-chatgpt

/prompts/chatgpt-untuk-guru

/templates/notion-project-planner

/learn/perbandingan-chatgpt-vs-gemini
```

Aturan:

* gunakan bentuk jamak untuk koleksi;
* gunakan slug yang stabil;
* hindari parameter URL untuk konten utama.

---

# 9. Metadata Wajib

Seluruh collection minimal memiliki field berikut.

```yaml
id:
slug:
title:
description:
excerpt:

publishedAt:
updatedAt:

status:

featured:

draft:

author:

categories:

tags:
```

---

# 10. Metadata Opsional

```yaml
coverImage:

heroImage:

canonical:

robots:

seoTitle:

seoDescription:

related:

readingTime:

difficulty:

estimatedTime:
```

---

# 11. Status Konten

```text
draft

review

scheduled

published

archived
```

Status harus konsisten di seluruh collection.

---

# 12. Referensi Antar Data

Seluruh relasi menggunakan slug atau reference yang tervalidasi.

Contoh:

```yaml
tool: chatgpt

relatedPrompts:
  - prompt-chatgpt-guru
  - prompt-chatgpt-marketing

relatedTutorials:
  - cara-menggunakan-chatgpt
```

Jangan menyimpan judul sebagai referensi.

---

# 13. Search Index

Mesin pencarian minimal mengindeks:

* title
* description
* excerpt
* tags
* categories
* AI Tool
* Prompt
* Template

Konten penuh (`body`) dapat diindeks sebagai tahap lanjutan.

---

# 14. Internal Linking

Setiap konten harus menghasilkan tautan ke:

* kategori;
* penulis;
* AI Tool terkait;
* Prompt terkait;
* Template terkait;
* artikel terkait.

Target:

Tidak ada orphan content.

---

# 15. Media & Assets

Aset disimpan terpisah dari metadata.

```text
src/assets/

public/images/

public/icons/

public/downloads/
```

Metadata hanya menyimpan path atau referensi.

---

# 16. Validasi Data

Seluruh collection harus memiliki validasi.

Minimal:

* slug unik;
* title wajib;
* description wajib;
* kategori valid;
* author valid;
* referensi valid.

Build harus gagal bila validasi tidak terpenuhi.

---

# 17. Cache Strategy

Konten bersifat statis.

Cache dapat memanfaatkan:

* browser cache;
* CDN cache;
* image cache.

Invalidasi dilakukan saat build baru dipublikasikan.

---

# 18. Migrasi ke CMS

Data Model dirancang agar mudah dipindahkan ke CMS.

Prinsip:

* schema tetap;
* slug tetap;
* relasi tetap;
* URL tetap.

Dengan demikian, perpindahan penyimpanan tidak mengubah struktur website.

---

# 19. Integrasi Search

Data Model harus mendukung:

* pencarian global;
* autocomplete;
* filter;
* sorting;
* related content.

Semua fitur mengambil data dari collection yang sama.

---

# 20. Integrasi Sitemap & RSS

Sitemap dan RSS dihasilkan otomatis dari collection.

Konten berstatus:

* draft
* review
* archived

tidak boleh muncul.

---

# 21. Acceptance Criteria

* [ ] Semua collection memiliki schema.
* [ ] Semua relasi terdokumentasi.
* [ ] Identifier konsisten.
* [ ] URL mengikuti strategi yang ditetapkan.
* [ ] Validasi dapat diterapkan pada build.
* [ ] Siap diimplementasikan pada Astro Content Collections.
* [ ] Siap dimigrasikan ke CMS atau database.

---

# 22. Hubungan dengan Dokumen Lain

Dokumen ini menjadi dasar bagi:

* 06-CONTENT-MODEL.md
* 08-NAVIGATION.md
* 12-BLOG-SYSTEM.md
* 13-AI-TOOLS.md
* 14-PROMPT-LIBRARY.md
* 15-TEMPLATE-LIBRARY.md
* 16-SEO.md
* 23-SEARCH.md
* 24-CMS.md

---

# 23. Changelog

## v2.1

* Menetapkan arsitektur data sebagai fondasi implementasi.
* Mendefinisikan collection, relasi, identifier, dan strategi URL.
* Menentukan aturan validasi, pencarian, cache, serta migrasi ke CMS.
* Menjadi acuan utama implementasi Astro Content Collections dan pengembangan fitur di masa depan.
