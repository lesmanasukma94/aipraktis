# AI Praktis Indonesia v2

# 16-SEO.md

> **Document Version:** 2.1
> **Status:** Living Documentation
> **Last Updated:** June 2026

---

# 1. Tujuan Dokumen

Dokumen ini mendefinisikan arsitektur SEO AI Praktis Indonesia.

SEO merupakan bagian dari arsitektur produk, bukan aktivitas setelah website selesai dibuat.

## Tujuan Utama

* Membangun topical authority di bidang Artificial Intelligence.
* Mendatangkan trafik organik berkualitas tinggi.
* Memaksimalkan internal linking.
* Mendukung monetisasi jangka panjang.
* Memastikan seluruh halaman dapat diindeks dan dipahami mesin pencari.

---

# 2. Filosofi SEO

## User First

Konten dibuat untuk membantu pengguna menyelesaikan masalah.

Optimasi mesin pencari tidak boleh mengurangi kualitas pengalaman pengguna.

---

## Entity First

Website dibangun berdasarkan hubungan antar entitas.

Entitas utama:

```text
AI Tool
Tutorial
Prompt
Template
Category
Tag
Author
```

---

## Evergreen First

Prioritaskan konten yang relevan dalam jangka panjang.

Konten berita hanya menjadi pelengkap.

---

## Structured Knowledge

Seluruh halaman membentuk knowledge graph yang saling terhubung.

---

# 3. Topical Authority Strategy

AI Praktis Indonesia dibangun sebagai website otoritatif mengenai Artificial Intelligence.

## Topik Utama

```text
Artificial Intelligence
│
├── AI Tools
├── ChatGPT
├── Claude
├── Gemini
├── Midjourney
├── Prompt Engineering
├── AI Productivity
├── AI Business
├── AI Education
├── AI Marketing
├── AI Coding
├── AI Design
├── AI Automation
└── AI News
```

Setiap topik memiliki Pillar Page yang didukung oleh puluhan hingga ratusan artikel pendukung.

---

# 4. Content Cluster Strategy

Setiap cluster terdiri dari:

```text
Pillar Page

↓

Guides

↓

Tutorials

↓

Comparisons

↓

Reviews

↓

AI Tools

↓

Prompts

↓

Templates
```

Semua halaman dalam satu cluster wajib saling terhubung.

---

# 5. URL Architecture

Prinsip URL:

* Pendek
* Deskriptif
* Permanen
* Menggunakan huruf kecil
* Menggunakan tanda hubung (-)

Contoh:

```text
/tools/chatgpt

/prompts/chatgpt-email-marketing

/templates/notion-content-calendar

/learn/tutorials/cara-menggunakan-chatgpt
```

Slug tidak boleh berubah setelah dipublikasikan kecuali terdapat alasan yang sangat kuat.

---

# 6. Metadata Standards

Seluruh halaman wajib memiliki:

* SEO Title
* Meta Description
* Canonical URL
* Open Graph
* Twitter Card
* Robots Directive
* Theme Color
* Favicon

Metadata dihasilkan secara otomatis dari data model jika memungkinkan.

---

# 7. Heading Structure

Gunakan satu H1 pada setiap halaman.

Hierarki heading:

```text
H1

↓

H2

↓

H3

↓

H4
```

Jangan melewati level heading.

---

# 8. Internal Linking Architecture

Setiap halaman wajib memiliki tautan menuju:

* Parent Category
* Related Articles
* Related AI Tools
* Related Prompts
* Related Templates
* Related Comparisons
* Breadcrumb

Target utama:

* Tidak ada orphan page.
* Semua entitas saling terhubung.

---

# 9. Schema Markup Strategy

Schema yang digunakan:

```text
Article

FAQPage

BreadcrumbList

SoftwareApplication

CollectionPage

CreativeWork

Organization

Person

WebSite

SearchAction
```

Pemilihan schema mengikuti jenis halaman.

---

# 10. Entity SEO

Entity menjadi fondasi SEO.

Entity utama:

```text
AI Tool

Prompt

Template

Tutorial

Author

Category
```

Setiap entity memiliki:

* halaman resmi;
* URL permanen;
* metadata;
* relasi dengan entity lain.

---

# 11. Programmatic SEO

Programmatic SEO digunakan untuk:

* Category Pages
* AI Tool Pages
* Prompt Collections
* Template Collections
* Tag Pages
* Comparison Pages

Halaman programatik tetap memiliki kualitas editorial dan tidak menghasilkan konten tipis (thin content).

---

# 12. EEAT Strategy

Implementasi Experience, Expertise, Authoritativeness, dan Trustworthiness melalui:

* profil penulis;
* bio penulis;
* tanggal publikasi;
* tanggal pembaruan;
* sumber referensi;
* transparansi sponsor;
* informasi perusahaan.

---

# 13. Freshness Strategy

Status konten:

```text
Draft

↓

Published

↓

Updated

↓

Verified

↓

Archived
```

Review berkala:

* AI Tools: setiap 3–6 bulan.
* Prompt: saat model AI berubah.
* Tutorial: saat antarmuka aplikasi berubah.
* Template: saat format diperbarui.

---

# 14. Technical SEO

Persyaratan teknis:

* Server-Side Rendering (SSR)
* HTML semantik
* Sitemap XML
* Robots.txt
* Canonical URL
* Lazy Loading
* Optimasi gambar
* CSS minimal
* JavaScript sesuai kebutuhan
* Kompresi aset

---

# 15. Core Web Vitals

Target performa:

| Metrik                          |      Target |
| ------------------------------- | ----------: |
| Largest Contentful Paint (LCP)  | ≤ 2,5 detik |
| Interaction to Next Paint (INP) |    ≤ 200 ms |
| Cumulative Layout Shift (CLS)   |       ≤ 0,1 |

Target dievaluasi secara berkala.

---

# 16. Image SEO

Seluruh gambar harus memiliki:

* alt text deskriptif;
* nama file bermakna;
* ukuran yang diketahui;
* format WebP atau AVIF bila sesuai;
* lazy loading untuk gambar non-kritis.

---

# 17. Sitemap Strategy

Pisahkan sitemap berdasarkan jenis konten.

```text
sitemap.xml

├── sitemap-tools.xml

├── sitemap-prompts.xml

├── sitemap-templates.xml

├── sitemap-learn.xml

├── sitemap-categories.xml

└── sitemap-authors.xml
```

Pendekatan ini mempermudah pengelolaan saat jumlah halaman mencapai ribuan.

---

# 18. Robots Strategy

Robots.txt digunakan untuk:

* mengizinkan crawler mengakses halaman publik;
* memblokir halaman internal yang tidak perlu diindeks;
* menunjuk lokasi sitemap;
* mengurangi crawl budget yang terbuang.

---

# 19. Redirect Policy

Gunakan:

* **301** untuk perpindahan permanen.
* **302** untuk perpindahan sementara.

Seluruh redirect harus terdokumentasi.

Slug tidak boleh diubah tanpa proses migrasi.

---

# 20. Canonical Strategy

Canonical wajib digunakan untuk:

* halaman dengan konten serupa;
* pagination;
* filter;
* parameter URL.

Canonical selalu menunjuk halaman utama.

---

# 21. Search Optimization

Fitur pencarian harus:

* mendukung typo tolerance;
* autocomplete;
* search suggestions;
* pencarian AI Tool;
* pencarian Prompt;
* pencarian Template;
* pencarian Tutorial.

Search internal membantu distribusi trafik ke seluruh website.

---

# 22. Analytics & Monitoring

Metrik yang dipantau:

* Organic Sessions
* Indexed Pages
* Keyword Rankings
* Click Through Rate (CTR)
* Impressions
* Crawl Errors
* Broken Links
* Internal Link Coverage
* Core Web Vitals

Monitoring dilakukan secara berkala.

---

# 23. SEO KPI

Target jangka panjang:

* peningkatan jumlah halaman berkualitas;
* pertumbuhan trafik organik;
* peningkatan keyword Top 10;
* peningkatan CTR organik;
* peningkatan konversi dari trafik organik;
* peningkatan internal link coverage.

---

# 24. Acceptance Criteria

* [ ] Semua halaman memiliki metadata lengkap.
* [ ] Tidak ada orphan page.
* [ ] Internal linking konsisten.
* [ ] Schema sesuai jenis halaman.
* [ ] Core Web Vitals memenuhi target.
* [ ] Sitemap terdokumentasi.
* [ ] Robots.txt dikonfigurasi.
* [ ] URL konsisten.
* [ ] Entity SEO diterapkan.
* [ ] Programmatic SEO siap dikembangkan.

---

# 25. Hubungan dengan Dokumen Lain

Dokumen ini bergantung pada:

* 03-INFORMATION-ARCHITECTURE.md
* 04-SITEMAP.md
* 06-CONTENT-MODEL.md
* 07-DATA-MODEL.md
* 12-BLOG-SYSTEM.md
* 13-AI-TOOLS.md
* 14-PROMPT-LIBRARY.md
* 15-TEMPLATE-LIBRARY.md
* 23-SEARCH.md

---

# 26. Changelog

## v2.1

* Menetapkan SEO sebagai bagian dari arsitektur produk.
* Mendefinisikan Topical Authority Strategy.
* Menambahkan Content Cluster Strategy.
* Menetapkan Entity SEO dan Programmatic SEO.
* Menambahkan EEAT Strategy.
* Menentukan standar Technical SEO.
* Mendefinisikan Core Web Vitals.
* Menambahkan Sitemap Strategy, Redirect Policy, dan Canonical Strategy.
* Menetapkan KPI dan Acceptance Criteria untuk pertumbuhan organik jangka panjang.
