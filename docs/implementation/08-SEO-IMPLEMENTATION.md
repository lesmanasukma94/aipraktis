# AI Praktis Indonesia v2

# 08-SEO-IMPLEMENTATION.md

> **Document Version:** 1.0
> **Status:** Active
> **Last Updated:** June 2026

---

# 1. Tujuan

Dokumen ini mendefinisikan implementasi teknis SEO pada AI Praktis Indonesia.

Seluruh halaman harus dibangun agar:

* mudah dipahami mesin pencari;
* memiliki struktur metadata yang konsisten;
* memenuhi standar Google Search;
* siap mendukung pertumbuhan organic traffic jangka panjang.

---

# 2. Prinsip SEO

Seluruh implementasi mengikuti prinsip berikut:

* SEO First
* Semantic HTML
* Content First
* Fast Loading
* Mobile First
* Accessibility
* Structured Data
* Internal Linking

---

# 3. SEO Architecture

Alur implementasi SEO:

```text
Content Collection
        │
        ▼
SEO Metadata
        │
        ▼
SEO Utility
        │
        ▼
SEO Component
        │
        ▼
<head>
```

Metadata tidak ditulis langsung di halaman, tetapi dihasilkan melalui komponen SEO yang dapat digunakan kembali.

---

# 4. Metadata Standar

Setiap halaman wajib memiliki:

* Title
* Meta Description
* Canonical URL
* Robots
* Open Graph
* Twitter Card
* Language
* Viewport

Tidak boleh ada halaman publik tanpa metadata.

---

# 5. Title Strategy

Aturan:

* unik;
* deskriptif;
* mengandung kata kunci utama;
* maksimal ±60 karakter.

Contoh:

```
Cara Menggunakan ChatGPT untuk Pemula | AI Praktis Indonesia
```

---

# 6. Meta Description

Aturan:

* maksimal ±160 karakter;
* menjelaskan isi halaman;
* mengandung kata kunci utama secara alami.

---

# 7. Canonical URL

Seluruh halaman memiliki satu Canonical URL.

Contoh:

```
https://aipraktis.id/blog/cara-menggunakan-chatgpt
```

Canonical tidak menggunakan parameter query.

---

# 8. Open Graph

Minimal terdiri dari:

* og:title
* og:description
* og:image
* og:url
* og:type
* og:site_name

---

# 9. Twitter Card

Minimal:

* summary_large_image
* title
* description
* image

---

# 10. Structured Data

Gunakan JSON-LD.

Jenis schema yang digunakan:

| Halaman    | Schema              |
| ---------- | ------------------- |
| Homepage   | WebSite             |
| Blog       | Article             |
| AI Tools   | SoftwareApplication |
| Prompt     | CreativeWork        |
| Template   | CreativeWork        |
| Glossary   | DefinedTerm         |
| FAQ        | FAQPage             |
| Breadcrumb | BreadcrumbList      |

---

# 11. Heading Structure

Setiap halaman mengikuti struktur:

```
H1

H2

H3

H4
```

Aturan:

* satu H1 per halaman;
* tidak melompati level heading;
* heading harus deskriptif.

---

# 12. URL

URL harus:

* pendek;
* permanen;
* menggunakan slug;
* huruf kecil;
* menggunakan tanda hubung (`-`).

---

# 13. Internal Linking

Seluruh konten saling terhubung.

Minimal setiap halaman memiliki:

* Related Articles
* Related Tools
* Related Prompts
* Related Templates
* Breadcrumb

Target:

* minimal 5 internal link kontekstual per artikel.

---

# 14. Images

Semua gambar harus:

* memiliki `alt`;
* menggunakan format modern (WebP/AVIF jika memungkinkan);
* dioptimalkan ukurannya;
* lazy loading untuk gambar non-kritis.

---

# 15. Sitemap

Sitemap dibuat otomatis saat build.

Mencakup:

* Homepage
* Blog
* Tools
* Prompts
* Templates
* Glossary
* News
* Categories
* Tags

---

# 16. Robots

Robots.txt harus:

* mengizinkan halaman publik;
* memblokir halaman yang tidak perlu diindeks;
* menyertakan lokasi sitemap.

---

# 17. Pagination SEO

Halaman arsip:

* memiliki title unik;
* memiliki canonical yang sesuai;
* dapat diindeks bila memiliki nilai bagi pengguna.

---

# 18. Search SEO

Halaman:

```
/search
```

menggunakan:

```
noindex, follow
```

---

# 19. Redirect

Gunakan:

* 301 untuk perubahan permanen;
* 302 hanya bila bersifat sementara.

Hindari redirect berantai.

---

# 20. Performance & SEO

Target minimal:

| Metrik         |   Target |
| -------------- | -------: |
| Lighthouse SEO |     ≥ 95 |
| LCP            |  < 2.5 s |
| CLS            |    < 0.1 |
| INP            | < 200 ms |

---

# 21. Best Practices

* Gunakan semantic HTML.
* Hindari duplikasi title.
* Hindari duplikasi meta description.
* Pastikan semua gambar memiliki `alt`.
* Perbarui `updatedAt` ketika artikel direvisi.
* Gunakan internal link yang relevan.

---

# 22. Anti-pattern

Hindari:

* Title duplikat.
* Canonical kosong.
* H1 lebih dari satu.
* URL berubah tanpa redirect.
* Gambar tanpa `alt`.
* Halaman tanpa metadata.
* Keyword stuffing.

---

# 23. Acceptance Criteria

Implementasi dianggap sesuai apabila:

* [ ] Semua halaman memiliki metadata lengkap.
* [ ] Canonical tersedia.
* [ ] Structured Data sesuai jenis halaman.
* [ ] Internal linking diterapkan.
* [ ] Sitemap dibuat otomatis.
* [ ] Robots.txt sesuai standar.
* [ ] Lighthouse SEO ≥ 95.

---

# 24. Hubungan dengan Dokumen Lain

Dokumen ini berkaitan dengan:

* 04-CONTENT-COLLECTIONS.md
* 05-ROUTING.md
* 06-DATA-FLOW.md
* 07-SEARCH-IMPLEMENTATION.md
* docs/redesign/16-SEO.md

---

# 25. Changelog

## v1.0

* Menetapkan standar implementasi SEO.
* Mendefinisikan metadata, structured data, internal linking, sitemap, robots, dan canonical.
* Menjadi acuan implementasi SEO seluruh halaman AI Praktis Indonesia.
