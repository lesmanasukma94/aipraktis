# AI Praktis Indonesia v2

# 14-PROMPT-LIBRARY.md

> **Document Version:** 2.1
> **Status:** Living Documentation
> **Last Updated:** June 2026

---

# 1. Tujuan Dokumen

Dokumen ini mendefinisikan Prompt Library sebagai salah satu fitur inti AI Praktis Indonesia.

Prompt Library merupakan katalog prompt yang terstruktur, dapat dicari, difilter, dan terhubung dengan AI Tools, Tutorial, serta Template.

Tujuan utama:

* Membantu pengguna menemukan prompt yang tepat.
* Menjadi aset SEO jangka panjang.
* Mendukung pembelajaran AI berbasis praktik.
* Menjadi fondasi koleksi prompt premium di masa depan.

---

# 2. Prinsip Prompt Library

## Prompt as an Asset

Setiap prompt adalah aset yang memiliki halaman sendiri.

---

## Structured Metadata

Prompt memiliki metadata lengkap agar mudah dicari dan digunakan.

---

## Reusable

Satu prompt dapat digunakan pada berbagai AI Tool yang kompatibel.

---

## Versionable

Prompt dapat diperbarui tanpa mengubah URL.

---

# 3. Arsitektur Prompt Library

```text
Prompt Library
│
├── Models
├── Categories
├── Industries
├── Roles
├── Objectives
├── Difficulty
├── Languages
├── Tutorials
├── AI Tools
└── Templates
```

---

# 4. Struktur URL

```text
/prompts/

/prompts/chatgpt-email-marketing

/prompts/gemini-ringkasan-artikel

/prompts/claude-analisis-data
```

Slug bersifat permanen.

---

# 5. Prompt Data Model

```yaml
title:

slug:

description:

prompt:

objective:

model:

compatibleModels:

language:

category:

industry:

role:

difficulty:

tags:

featured:
```

---

# 6. Metadata Tambahan

```yaml
version:

author:

createdAt:

updatedAt:

estimatedOutput:

recommendedTemperature:

recommendedMaxTokens:

license:

lastVerified:
```

---

# 7. Kategori Prompt

Contoh kategori utama.

```text
Writing

Marketing

Education

Programming

Business

Research

Design

Productivity

Translation

Customer Support

Social Media

Data Analysis
```

---

# 8. Model AI yang Didukung

Prompt dapat dikaitkan dengan:

```text
ChatGPT

Claude

Gemini

Microsoft Copilot

Perplexity

Mistral

Grok

DeepSeek

Llama

Qwen
```

Prompt dapat mendukung lebih dari satu model AI.

---

# 9. Tingkat Kesulitan

```text
Beginner

Intermediate

Advanced

Expert
```

Tingkat kesulitan membantu proses filter dan rekomendasi.

---

# 10. Struktur Halaman Prompt

```text
Hero

↓

Overview

↓

Prompt

↓

Expected Output

↓

Usage Tips

↓

Compatible Models

↓

Related AI Tools

↓

Related Tutorials

↓

Related Templates

↓

FAQ

↓

CTA
```

---

# 11. Expected Output

Setiap prompt memiliki contoh hasil yang diharapkan.

Tujuan:

* membantu pengguna memahami kualitas output;
* mengurangi trial and error.

---

# 12. Usage Tips

Bagian ini berisi:

* cara memodifikasi prompt;
* kapan digunakan;
* kesalahan umum;
* rekomendasi lanjutan.

---

# 13. Prompt Versioning

Prompt memiliki versi.

Contoh:

```text
v1.0

v1.1

v2.0
```

Riwayat perubahan didokumentasikan.

---

# 14. Related AI Tools

Setiap prompt harus memiliki minimal satu AI Tool terkait.

Contoh:

* ChatGPT
* Claude
* Gemini

---

# 15. Related Tutorials

Prompt dapat digunakan dalam tutorial.

Contoh:

* Cara membuat email marketing dengan AI
* Cara menulis artikel menggunakan AI

---

# 16. Related Templates

Prompt dapat dihubungkan dengan template.

Contoh:

* Template Content Calendar
* Template Business Proposal
* Template Lesson Plan

---

# 17. Search & Filter

Filter yang tersedia:

* model AI;
* kategori;
* industri;
* peran;
* tingkat kesulitan;
* bahasa;
* tag.

Filter dapat dikombinasikan.

---

# 18. SEO Requirements

Setiap prompt memiliki:

* SEO title;
* meta description;
* canonical URL;
* Breadcrumb;
* Schema.org CreativeWork;
* Open Graph.

---

# 19. Internal Linking

Setiap prompt wajib menampilkan:

* AI Tool terkait;
* Tutorial terkait;
* Template terkait;
* Prompt serupa;
* Category page.

---

# 20. Future Features

```text
Copy Prompt

Favorite Prompt

Prompt Collections

Community Rating

Prompt Remix

Prompt History

Export Prompt

Prompt Packs
```

---

# 21. Monetization Strategy

Prompt Library mendukung:

* Premium Prompt Packs
* Membership
* Sponsored Collections
* Affiliate CTA ke AI Tool
* Newsletter Lead Magnet

Konten premium harus dibedakan dengan jelas dari konten gratis.

---

# 22. Analytics

Data yang dapat diukur:

* jumlah salinan (copy);
* CTR ke AI Tool;
* CTR ke Tutorial;
* pencarian;
* prompt paling populer.

---

# 23. Acceptance Criteria

* [ ] Setiap prompt memiliki halaman sendiri.
* [ ] Metadata lengkap dan tervalidasi.
* [ ] Terhubung ke AI Tool, Tutorial, dan Template.
* [ ] Mendukung pencarian dan filter.
* [ ] Mendukung versioning.
* [ ] Siap untuk monetisasi.

---

# 24. Hubungan dengan Dokumen Lain

Dokumen ini bergantung pada:

* 06-CONTENT-MODEL.md
* 07-DATA-MODEL.md
* 12-BLOG-SYSTEM.md
* 13-AI-TOOLS.md
* 15-TEMPLATE-LIBRARY.md
* 23-SEARCH.md

---

# 25. Changelog

## v2.1

* Menetapkan Prompt Library sebagai katalog prompt terstruktur.
* Mendefinisikan metadata, versioning, filter, dan relasi.
* Menambahkan strategi pencarian, SEO, dan monetisasi.
* Menjadikan Prompt Library bagian inti dari ekosistem AI Praktis Indonesia.
