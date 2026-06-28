# AI Praktis Indonesia v2

# 13-AI-TOOLS.md

> **Document Version:** 2.1
> **Status:** Living Documentation
> **Last Updated:** June 2026

---

# 1. Tujuan Dokumen

Dokumen ini mendefinisikan AI Tools Directory sebagai salah satu fitur inti AI Praktis Indonesia.

AI Tools Directory bukan sekadar katalog, tetapi pusat pengetahuan (Knowledge Hub) yang menghubungkan seluruh ekosistem konten.

Tujuan utama:

* Membantu pengguna menemukan AI Tool yang tepat.
* Menjadi pusat internal linking.
* Mendukung SEO Topical Authority.
* Menjadi fondasi monetisasi melalui affiliate, sponsor, dan premium listing.

---

# 2. Prinsip AI Tools Directory

## Directory First

Setiap AI Tool memiliki satu halaman resmi.

---

## Entity Driven

AI Tool adalah entitas utama, bukan artikel.

---

## Structured Data

Semua informasi AI Tool disimpan dalam field terstruktur.

---

## Evergreen

Informasi diperbarui secara berkala tanpa mengubah URL.

---

# 3. Arsitektur AI Tools

```text
AI Tools
│
├── Categories
├── Use Cases
├── Industries
├── Pricing
├── Platforms
├── Integrations
├── Alternatives
├── Tutorials
├── Prompts
├── Reviews
└── Comparisons
```

---

# 4. Struktur URL

```text
/tools/

/tools/chatgpt

/tools/gemini

/tools/claude

/tools/midjourney

/tools/canva-ai
```

Slug bersifat permanen.

---

# 5. Data Model

```yaml
name:

slug:

description:

developer:

website:

logo:

coverImage:

pricing:

category:

subcategories:

platforms:

languages:

integrations:

releaseYear:

status:

featured:
```

---

# 6. Metadata Tambahan

```yaml
aiModels:

apiAvailable:

freePlan:

trialAvailable:

openSource:

license:

lastVerified:

officialDocumentation:

affiliateLink:
```

---

# 7. Kategori AI Tool

Contoh kategori utama.

```text
Chatbot

Writing

Image Generation

Video Generation

Audio

Coding

Productivity

Research

Presentation

Marketing

Education

Business

Automation
```

Kategori dapat memiliki subkategori.

---

# 8. Filter System

Pengguna dapat memfilter berdasarkan:

* kategori;
* use case;
* industri;
* harga;
* platform;
* bahasa;
* free plan;
* open source;
* API tersedia.

Filter dapat digabungkan.

---

# 9. Sorting System

Urutan default:

* Popular
* Recommended
* Recently Updated
* Newest
* Alphabetical

Future:

* Community Rating
* Trending

---

# 10. Halaman Detail AI Tool

Struktur halaman:

```text
Hero

↓

Overview

↓

Key Features

↓

Pricing

↓

Pros & Cons

↓

Integrations

↓

Supported Platforms

↓

Related Tutorials

↓

Related Prompts

↓

Alternatives

↓

FAQ

↓

CTA
```

---

# 11. Feature Model

Setiap fitur disimpan sebagai data.

Contoh:

```yaml
features:

  - Text Generation

  - Image Editing

  - Voice Input

  - API Access

  - Team Collaboration
```

---

# 12. Pricing Model

Standarisasi harga.

```text
Free

Freemium

Subscription

Pay As You Go

Enterprise

Custom
```

Harga dapat memiliki beberapa paket.

---

# 13. Platform Model

Platform yang didukung.

```text
Web

Windows

macOS

Linux

Android

iOS

Browser Extension
```

---

# 14. Integrations

AI Tool dapat memiliki daftar integrasi.

Contoh:

```text
Google Drive

Slack

Notion

Zapier

GitHub

Microsoft 365
```

---

# 15. Alternative Engine

Setiap AI Tool memiliki daftar alternatif.

Contoh:

```text
ChatGPT

↓

Claude

Gemini

Perplexity

Microsoft Copilot
```

Alternative Engine menjadi sumber internal linking.

---

# 16. Related Content

Setiap halaman AI Tool wajib menampilkan:

* Related Tutorials
* Related Prompts
* Related Templates
* Related Reviews
* Related Comparisons

---

# 17. Comparison Support

Halaman AI Tool harus dapat dibandingkan dengan tool lain.

Contoh:

```text
ChatGPT vs Gemini

Claude vs ChatGPT

Canva AI vs Adobe Firefly
```

Comparison menggunakan data yang sama, bukan data duplikat.

---

# 18. Review Integration

Jika tersedia review, tampilkan:

* skor keseluruhan;
* kelebihan;
* kekurangan;
* use case terbaik.

Review tetap merupakan konten editorial.

---

# 19. FAQ Integration

Setiap AI Tool memiliki FAQ terstruktur.

Contoh:

* Apa fungsi tool ini?
* Apakah gratis?
* Apakah tersedia API?
* Siapa pengembangnya?
* Apa alternatifnya?

---

# 20. SEO Requirements

Halaman AI Tool wajib memiliki:

* Schema.org SoftwareApplication
* Open Graph
* Twitter Card
* Breadcrumb
* Canonical URL
* FAQ Schema (jika tersedia)

---

# 21. Search Integration

Search harus mendukung pencarian berdasarkan:

* nama tool;
* developer;
* kategori;
* fitur;
* platform;
* use case.

---

# 22. Monetization Strategy

Model monetisasi yang didukung:

* Affiliate Link
* Sponsored Listing
* Premium Placement
* Display Ads (terbatas)
* Newsletter CTA

Konten editorial dan sponsor harus dibedakan dengan jelas.

---

# 23. Future Extensions

```text
Community Rating

Verified Badge

Change Log

Release Notes

API Examples

Video Tutorials

Collections

Bookmarks
```

---

# 24. Acceptance Criteria

* [ ] Setiap AI Tool memiliki satu halaman resmi.
* [ ] Metadata lengkap dan tervalidasi.
* [ ] Terhubung ke tutorial, prompt, dan template.
* [ ] Mendukung filter dan pencarian.
* [ ] Mendukung comparison dan alternatives.
* [ ] Siap untuk monetisasi.

---

# 25. Hubungan dengan Dokumen Lain

Dokumen ini bergantung pada:

* 06-CONTENT-MODEL.md
* 07-DATA-MODEL.md
* 12-BLOG-SYSTEM.md
* 14-PROMPT-LIBRARY.md
* 15-TEMPLATE-LIBRARY.md
* 16-SEO.md
* 23-SEARCH.md

---

# 26. Changelog

## v2.1

* Menetapkan AI Tools Directory sebagai Knowledge Hub.
* Mendefinisikan struktur halaman, metadata, filter, dan relasi.
* Menambahkan Alternative Engine, Comparison Support, dan strategi monetisasi.
* Menjadikan AI Tool sebagai pusat internal linking dalam ekosistem AI Praktis Indonesia.
