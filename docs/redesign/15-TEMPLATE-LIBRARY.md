# AI Praktis Indonesia v2

# 15-TEMPLATE-LIBRARY.md

> **Document Version:** 2.1
> **Status:** Living Documentation
> **Last Updated:** June 2026

---

# 1. Tujuan Dokumen

Dokumen ini mendefinisikan Template Library sebagai salah satu fitur inti AI Praktis Indonesia.

Template Library menyediakan berbagai aset siap pakai yang membantu pengguna mengimplementasikan AI dalam pekerjaan sehari-hari.

Template dapat berupa:

* Dokumen
* Spreadsheet
* Presentasi
* Workspace
* Prompt Bundle
* Workflow
* Checklist
* Automation Blueprint

Template Library dirancang untuk:

* meningkatkan produktivitas pengguna;
* memperkuat ekosistem AI Tools dan Prompt Library;
* menjadi sumber lead magnet dan monetisasi.

---

# 2. Prinsip Template Library

## Practical First

Setiap template harus dapat langsung digunakan.

---

## Structured Metadata

Template memiliki metadata lengkap agar mudah dicari dan difilter.

---

## Reusable

Template dapat digunakan kembali pada berbagai use case.

---

## Connected Ecosystem

Template harus terhubung dengan AI Tool, Prompt, Tutorial, dan Category.

---

# 3. Arsitektur Template Library

```text
Template Library
│
├── Applications
├── Categories
├── Industries
├── Use Cases
├── AI Tools
├── Prompts
├── Tutorials
└── Downloads
```

---

# 4. Struktur URL

```text
/templates/

/templates/notion-content-calendar

/templates/google-sheets-budget-planner

/templates/canva-social-media-kit

/templates/chatgpt-content-workflow
```

Slug bersifat permanen.

---

# 5. Template Data Model

```yaml
title:

slug:

description:

application:

category:

industry:

useCase:

format:

version:

author:

featured:

tags:
```

---

# 6. Metadata Tambahan

```yaml
downloadUrl:

previewImages:

demoUrl:

fileSize:

license:

compatibility:

lastUpdated:

relatedTools:

relatedPrompts:

relatedTutorials:
```

---

# 7. Jenis Template

Contoh jenis template.

```text
Document

Spreadsheet

Presentation

Database

Workflow

Checklist

Calendar

Dashboard

Canvas

Mind Map

Automation

Prompt Pack
```

---

# 8. Aplikasi yang Didukung

Template dapat dibuat untuk berbagai aplikasi.

```text
Notion

Google Docs

Google Sheets

Google Slides

Microsoft Word

Microsoft Excel

Microsoft PowerPoint

Canva

Figma

ClickUp

Trello

Airtable
```

Daftar aplikasi dapat berkembang.

---

# 9. Kategori Template

Contoh kategori.

```text
Marketing

Business

Education

Content Creation

Productivity

Finance

Project Management

Human Resources

Research

Design
```

---

# 10. Use Case

Template dikelompokkan berdasarkan tujuan.

Contoh:

* Content Planning
* Project Tracking
* Lesson Planning
* Business Proposal
* Marketing Campaign
* Social Media Calendar
* Customer Support
* AI Workflow

---

# 11. Struktur Halaman Template

```text
Hero

↓

Overview

↓

Preview

↓

Features

↓

Compatibility

↓

Download

↓

Usage Guide

↓

Related AI Tools

↓

Related Prompts

↓

Related Tutorials

↓

FAQ

↓

CTA
```

---

# 12. Preview System

Setiap template memiliki preview.

Preview dapat berupa:

* gambar;
* slideshow;
* video singkat;
* demonstrasi interaktif (future).

Preview membantu pengguna memahami isi template sebelum mengunduh.

---

# 13. Compatibility

Setiap template harus mencantumkan kompatibilitas.

Contoh:

```text
Google Sheets

Microsoft Excel

LibreOffice Calc
```

atau

```text
Notion

Notion AI
```

---

# 14. Download System

Informasi minimum.

```yaml
fileType:

downloadSize:

version:

downloadCount:

license:
```

Unduhan dapat berupa satu file atau paket file.

---

# 15. Related AI Tools

Setiap template minimal memiliki satu AI Tool terkait.

Contoh:

* ChatGPT
* Claude
* Canva AI
* Gemini
* Notion AI

---

# 16. Related Prompts

Template dapat memiliki beberapa prompt pendukung.

Contoh:

* Prompt untuk menghasilkan isi template.
* Prompt untuk memperbarui data.
* Prompt untuk brainstorming.

---

# 17. Related Tutorials

Template dihubungkan dengan tutorial implementasi.

Contoh:

* Cara menggunakan Content Calendar AI
* Cara membuat Business Proposal dengan AI
* Cara mengelola proyek menggunakan Notion AI

---

# 18. Search & Filter

Filter tersedia berdasarkan:

* aplikasi;
* kategori;
* industri;
* use case;
* format;
* AI Tool;
* tag.

Sorting:

* Terbaru
* Terpopuler
* Direkomendasikan
* Paling Banyak Diunduh
* A–Z

---

# 19. SEO Requirements

Setiap halaman template memiliki:

* SEO Title
* Meta Description
* Canonical URL
* Breadcrumb
* Open Graph
* Schema.org CreativeWork
* Download metadata

---

# 20. Internal Linking

Setiap template harus menampilkan:

* AI Tool terkait;
* Prompt terkait;
* Tutorial terkait;
* Template serupa;
* Category page.

Target:

Tidak ada template yang menjadi orphan content.

---

# 21. Monetization Strategy

Template Library mendukung:

* Free Download
* Premium Templates
* Template Bundles
* Membership
* Sponsored Templates
* Affiliate CTA
* Newsletter Lead Magnet

Seluruh konten sponsor harus diberi penanda yang jelas.

---

# 22. Analytics

Data yang dapat diukur:

* jumlah unduhan;
* CTR ke AI Tool;
* CTR ke Tutorial;
* CTR ke Prompt;
* tingkat konversi lead magnet;
* template paling populer.

---

# 23. Future Extensions

```text
Version History

User Ratings

Collections

Bookmarks

Duplicate Template

One-click Import

Cloud Sync

Community Templates
```

---

# 24. Acceptance Criteria

* [ ] Setiap template memiliki halaman sendiri.
* [ ] Metadata lengkap dan tervalidasi.
* [ ] Preview tersedia.
* [ ] Terhubung ke AI Tool, Prompt, dan Tutorial.
* [ ] Mendukung pencarian dan filter.
* [ ] Mendukung distribusi gratis dan premium.

---

# 25. Hubungan dengan Dokumen Lain

Dokumen ini bergantung pada:

* 06-CONTENT-MODEL.md
* 07-DATA-MODEL.md
* 12-BLOG-SYSTEM.md
* 13-AI-TOOLS.md
* 14-PROMPT-LIBRARY.md
* 16-SEO.md
* 23-SEARCH.md

---

# 26. Changelog

## v2.1

* Menetapkan Template Library sebagai pilar ketiga ekosistem konten.
* Mendefinisikan metadata, preview, kompatibilitas, dan sistem unduhan.
* Menambahkan relasi dengan AI Tools, Prompt, dan Tutorial.
* Menetapkan strategi SEO, pencarian, analitik, dan monetisasi.
* Menyiapkan dukungan untuk template gratis, premium, dan fitur kolaborasi di masa depan.
