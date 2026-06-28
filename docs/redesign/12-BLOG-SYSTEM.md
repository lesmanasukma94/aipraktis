# AI Praktis Indonesia v2

# 12-BLOG-SYSTEM.md

> **Document Version:** 2.1
> **Status:** Living Documentation
> **Last Updated:** June 2026

---

# 1. Tujuan Dokumen

Dokumen ini mendefinisikan sistem konten edukasi (Learn System) untuk AI Praktis Indonesia.

“Blog” dalam sistem ini bukan sekadar artikel, tetapi **learning engine** yang terdiri dari:

* Tutorial
* Guide
* Review
* Comparison
* News
* Article editorial
* Learning path (future)

Tujuan utama:

* Edukasi pengguna
* SEO authority building
* Internal linking growth
* User retention
* Topical authority di Google

---

# 2. Filosofi Blog System

## Learn First, Blog Second

Sistem ini bukan media berita.

Ini adalah **platform pembelajaran AI**.

---

## Structured Knowledge

Setiap artikel harus memiliki struktur yang jelas dan terhubung dengan entitas lain.

---

## Entity Driven Content

Setiap konten harus terhubung ke:

* AI Tools
* Prompts
* Templates
* Categories

---

## Evergreen First

Konten harus tahan lama.

News hanya tambahan, bukan inti.

---

# 3. Content Types dalam Learn System

```text id="g3xv0m"
Tutorial

Guide

Comparison

Review

News

Article
```

---

# 4. Struktur URL

```text id="8lq9v2"
/learn/tutorials/
/learn/guides/
/learn/comparisons/
/learn/reviews/
/learn/news/
/learn/articles/
```

---

# 5. Article Model

Setiap artikel memiliki struktur standar.

```yaml id="a1k2m9"
title:
slug:
description:
excerpt:

content:

type: tutorial | guide | review | comparison | news | article

publishedAt:
updatedAt:

author:

categories:
tags:

relatedTools:
relatedPrompts:
relatedTemplates:

featured:

difficulty:
readingTime:

seo:
```

---

# 6. Tutorial System

Tutorial adalah inti dari Learn System.

Karakteristik:

* step-by-step
* actionable
* berbasis tool AI
* sering mengandung prompt

Contoh:

* Cara menggunakan ChatGPT untuk kerja
* Cara membuat konten dengan AI
* Cara membuat desain dengan Midjourney

---

# 7. Guide System

Guide bersifat lebih konseptual.

Contoh:

* Panduan lengkap AI untuk pemula
* Cara memilih AI tool terbaik
* Strategi penggunaan AI dalam bisnis

---

# 8. Comparison System

Comparison digunakan untuk SEO tinggi.

Contoh:

* ChatGPT vs Gemini
* Midjourney vs DALL·E
* Claude vs ChatGPT

Struktur wajib:

* tabel perbandingan
* use case
* rekomendasi

---

# 9. Review System

Review berisi evaluasi objektif.

Struktur:

* overview
* fitur
* kelebihan
* kekurangan
* harga
* kesimpulan

---

# 10. News System

News hanya bersifat pendukung.

Tidak boleh mendominasi struktur konten.

News digunakan untuk:

* update AI tools
* update model AI
* fitur baru

---

# 11. Article Structure

Setiap artikel harus memiliki struktur:

```text id="m7q9x1"
Intro

↓

Problem

↓

Solution

↓

Step-by-step

↓

Examples

↓

Tools

↓

Prompt

↓

Conclusion
```

---

# 12. Entity Integration

Setiap artikel harus mengandung minimal:

* 1 AI Tool
* 1 Prompt (jika relevan)
* 1 Category

---

# 13. Internal Linking Rules

Setiap artikel harus link ke:

* AI Tool related
* Prompt related
* Template related
* Category page
* Related articles

---

# 14. SEO Structure

SEO wajib mencakup:

* Title optimized
* Meta description
* H1 tunggal
* H2 terstruktur
* Schema Article
* FAQ schema (jika relevan)

---

# 15. Content Quality Rules

Konten tidak boleh:

* terlalu pendek (<600 kata untuk tutorial)
* tidak punya struktur
* tidak punya contoh
* tidak punya AI tool reference

---

# 16. Featured System

Konten dapat ditandai:

```text id="r9x1z0"
Featured

Trending

New

Evergreen

High Traffic Potential
```

---

# 17. Related Content Engine

Setiap artikel harus memiliki:

* Related Articles
* Related Tools
* Related Prompts
* Related Templates

Dihasilkan dari:

* category similarity
* tag similarity
* entity relationship

---

# 18. Author System

Setiap artikel harus memiliki author.

Author dapat memiliki:

* expertise area
* social profile
* bio
* contribution score (future)

---

# 19. Content Lifecycle

```text id="k8m3n2"
Draft

↓

Review

↓

Published

↓

Updated

↓

Archived
```

---

# 20. Editorial Workflow

```text id="q2w9e4"
Writer

↓

Editor

↓

SEO Reviewer

↓

Published
```

---

# 21. Performance Requirements

* Artikel harus SSR-ready
* Gambar lazy-loaded
* Tidak ada script berat
* TOC generated static
* Related content precomputed

---

# 22. Analytics Requirements (Future)

* time on page
* scroll depth
* CTR internal link
* exit rate
* content engagement score

---

# 23. Future Extensions

```text id="f7k2p9"
Learning Path

AI Course System

Certification

User Notes

Bookmark System

Community Contribution
```

---

# 24. Acceptance Criteria

* [ ] Semua artikel memiliki struktur standar
* [ ] Semua artikel terhubung ke entity
* [ ] Internal linking aktif
* [ ] SEO structure lengkap
* [ ] Siap scaling ke ribuan artikel
* [ ] Tidak ada konten tanpa kategori

---

# 25. Hubungan dengan Dokumen Lain

Dokumen ini bergantung pada:

* 06-CONTENT-MODEL.md
* 07-DATA-MODEL.md
* 11-COMPONENT-INVENTORY.md
* 13-AI-TOOLS.md
* 14-PROMPT-LIBRARY.md

---

# 26. Changelog

## v2.1

* Mendefinisikan Blog System sebagai Learn Engine
* Menambahkan struktur content types
* Menentukan article architecture
* Menambahkan entity integration rules
* Menetapkan SEO dan internal linking system
