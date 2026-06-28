# AI Praktis Indonesia v2

# 05-ROUTING.md

> **Document Version:** 1.0
> **Status:** Active
> **Last Updated:** June 2026

---

# 1. Tujuan

Dokumen ini mendefinisikan standar implementasi routing pada AI Praktis Indonesia menggunakan Astro File-Based Routing.

Tujuan utama:

* URL konsisten dan mudah dipahami.
* SEO-friendly.
* Mudah dikembangkan.
* Mendukung Static Site Generation (SSG).
* Mendukung Content Collections.

---

# 2. Prinsip Routing

Seluruh routing mengikuti prinsip berikut:

* File-Based Routing Astro.
* URL pendek dan deskriptif.
* Satu URL untuk satu konten (canonical).
* Menggunakan slug sebagai identifier.
* Tidak menggunakan ID numerik pada URL.
* Struktur URL stabil setelah dipublikasikan.

---

# 3. Struktur URL

```text
/
/about
/contact
/privacy
/terms
/search
```

Halaman utilitas berada di level root.

---

# 4. Blog

```text
/blog
/blog/page/2
/blog/[slug]
```

Contoh:

```text
/blog/cara-menggunakan-chatgpt
```

---

# 5. AI Tools

```text
/tools
/tools/page/2
/tools/[slug]
```

Contoh:

```text
/tools/chatgpt
```

---

# 6. Prompt Library

```text
/prompts
/prompts/page/2
/prompts/[slug]
```

---

# 7. Template Library

```text
/templates
/templates/page/2
/templates/[slug]
```

---

# 8. Glossary

```text
/glossary
/glossary/[slug]
```

---

# 9. News

```text
/news
/news/page/2
/news/[slug]
```

---

# 10. Category Pages

Kategori menggunakan struktur berikut.

```text
/categories/[slug]
```

Contoh:

```text
/categories/tutorial
/categories/chatbot
/categories/productivity
```

Kategori dapat digunakan lintas collection apabila relevan.

---

# 11. Tag Pages

Tag menggunakan struktur:

```text
/tags/[slug]
```

Contoh:

```text
/tags/chatgpt
/tags/gemini
/tags/marketing
```

---

# 12. Pagination

Pagination mengikuti pola:

```text
/page/2
/page/3
/page/4
```

Contoh:

```text
/blog/page/3
/tools/page/5
```

Halaman pertama tidak menggunakan `/page/1`.

---

# 13. Dynamic Routes

Dynamic routing menggunakan parameter `[slug]`.

Contoh struktur folder:

```text
src/pages/
├── blog/
│   ├── index.astro
│   └── [slug].astro
├── tools/
│   ├── index.astro
│   └── [slug].astro
├── prompts/
│   ├── index.astro
│   └── [slug].astro
├── templates/
│   ├── index.astro
│   └── [slug].astro
```

---

# 14. Archive Pages

Setiap collection memiliki halaman arsip.

Contoh:

```text
/blog
/tools
/prompts
/templates
/news
/glossary
```

Archive menampilkan daftar konten dengan pagination.

---

# 15. Search

Halaman pencarian menggunakan:

```text
/search
```

Parameter pencarian menggunakan query string.

Contoh:

```text
/search?q=chatgpt
/search?q=prompt
```

URL hasil pencarian tidak diindeks oleh mesin pencari.

---

# 16. URL Rules

Aturan URL:

* huruf kecil;
* menggunakan tanda hubung (`-`);
* tanpa underscore (`_`);
* tanpa spasi;
* tanpa karakter khusus;
* tidak diakhiri garis miring (`/`) jika konfigurasi proyek menghindarinya (sesuaikan dengan `trailingSlash` di Astro).

Contoh:

```text
cara-menggunakan-chatgpt
prompt-email-marketing
template-rencana-bisnis
```

---

# 17. Canonical URL

Setiap halaman memiliki satu canonical URL.

Canonical harus:

* menggunakan HTTPS;
* tanpa parameter query;
* sesuai slug utama.

---

# 18. Redirect Strategy

Redirect digunakan jika:

* slug berubah;
* konten dipindahkan;
* kategori diganti;
* URL lama tidak lagi digunakan.

Gunakan **301 Redirect** untuk perubahan permanen.

Hindari rantai redirect.

---

# 19. Error Routes

Website harus menyediakan:

```text
404
500 (untuk SSR bila digunakan)
```

404 harus memberikan rekomendasi konten terkait dan navigasi kembali ke halaman utama.

---

# 20. Sitemap

Sitemap dibuat otomatis saat proses build.

Minimal mencakup:

* Homepage
* Blog
* AI Tools
* Prompt Library
* Template Library
* News
* Glossary
* Categories
* Tags

---

# 21. RSS

RSS Feed tersedia minimal untuk:

```text
/feed.xml
```

Opsional:

```text
/blog/feed.xml
/news/feed.xml
```

---

# 22. Robots

Robots.txt harus:

* mengizinkan halaman publik;
* memblokir halaman yang tidak perlu diindeks;
* mencantumkan lokasi sitemap.

Contoh:

```text
Sitemap: https://aipraktis.id/sitemap-index.xml
```

---

# 23. Build Strategy

Mayoritas halaman dibangun menggunakan SSG.

SSR hanya digunakan untuk:

* Search (jika diperlukan)
* API Endpoint
* Fitur dinamis di masa depan

---

# 24. Best Practices

* Gunakan slug sebagai identifier.
* Hindari perubahan URL setelah dipublikasikan.
* Gunakan canonical pada setiap halaman.
* Pastikan pagination memiliki relasi navigasi yang jelas.
* Pertahankan struktur URL tetap sederhana.

---

# 25. Anti-pattern

Hindari:

* URL dengan ID numerik.
* Query parameter untuk navigasi utama.
* Slug yang berubah tanpa redirect.
* URL yang terlalu panjang.
* Nested route yang tidak diperlukan.

---

# 26. Acceptance Criteria

Implementasi dianggap sesuai apabila:

* [ ] Menggunakan Astro File-Based Routing.
* [ ] Semua collection memiliki archive dan detail page.
* [ ] Dynamic route menggunakan `[slug]`.
* [ ] Pagination konsisten.
* [ ] Canonical URL tersedia.
* [ ] Sitemap dibuat otomatis.
* [ ] RSS tersedia.
* [ ] Redirect terdokumentasi.
* [ ] URL mengikuti standar SEO.

---

# 27. Hubungan dengan Dokumen Lain

Dokumen ini berkaitan dengan:

* 01-ASTRO-ARCHITECTURE.md
* 02-FOLDER-STRUCTURE.md
* 04-CONTENT-COLLECTIONS.md
* 06-DATA-FLOW.md
* 08-SEO-IMPLEMENTATION.md

---

# 28. Changelog

## v1.0

* Menetapkan standar routing Astro.
* Mendefinisikan struktur URL untuk seluruh jenis konten.
* Menentukan strategi dynamic routes, pagination, canonical, redirect, sitemap, dan RSS.
* Menjadi acuan implementasi routing proyek AI Praktis Indonesia.
