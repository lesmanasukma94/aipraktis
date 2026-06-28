# AI Praktis Indonesia v2

# 06-DATA-FLOW.md

> **Document Version:** 1.0
> **Status:** Active
> **Last Updated:** June 2026

---

# 1. Tujuan

Dokumen ini mendefinisikan alur data (Data Flow) pada AI Praktis Indonesia.

Tujuan utama:

* memastikan data mengalir secara konsisten;
* memisahkan tanggung jawab setiap layer;
* memudahkan debugging;
* memudahkan pengujian;
* mendukung pengembangan jangka panjang.

Seluruh implementasi harus mengikuti pola yang dijelaskan pada dokumen ini.

---

# 2. Prinsip Data Flow

Seluruh alur data mengikuti prinsip berikut:

* Single Source of Truth.
* Content First.
* Read Only Content.
* Type Safe.
* Predictable.
* Reusable.
* Stateless Rendering.

---

# 3. Gambaran Umum

Alur data utama:

```text
Markdown / MDX
        │
        ▼
Content Collections
        │
        ▼
Schema Validation (Zod)
        │
        ▼
Data Services (lib/)
        │
        ▼
Pages
        │
        ▼
Components
        │
        ▼
HTML
```

Konten selalu berasal dari Content Collections dan tidak langsung diakses oleh komponen.

---

# 4. Sumber Data

Website memiliki beberapa sumber data.

| Sumber                | Fungsi                 |
| --------------------- | ---------------------- |
| Content Collections   | Konten utama           |
| config/               | Konfigurasi aplikasi   |
| data/                 | Data statis            |
| API (opsional)        | Integrasi eksternal    |
| Environment Variables | Konfigurasi lingkungan |

Content Collections tetap menjadi sumber data utama.

---

# 5. Layer Arsitektur

Implementasi dibagi menjadi lima layer.

```text
Content
    │
    ▼
Data Service
    │
    ▼
Page
    │
    ▼
Section
    │
    ▼
Component
```

Setiap layer memiliki tanggung jawab yang jelas.

---

# 6. Content Layer

Bertanggung jawab menyediakan data mentah.

Lokasi:

```text
src/content/
```

Contoh:

* blog
* tools
* prompts
* templates
* glossary
* news

Layer ini tidak memiliki logika presentasi.

---

# 7. Data Service Layer

Berada pada:

```text
src/lib/
```

Tugas utama:

* mengambil data;
* memfilter;
* mengurutkan;
* melakukan relasi;
* transformasi sederhana.

Contoh fungsi:

```text
getLatestArticles()

getFeaturedTools()

getRelatedPrompts()

getCategoryPosts()

getPopularTemplates()
```

Komponen tidak boleh mengambil data langsung dari Content Collections.

---

# 8. Page Layer

Page bertugas:

* memanggil Data Service;
* menyiapkan metadata SEO;
* mengirim data ke Section.

Page tidak berisi logika bisnis yang kompleks.

---

# 9. Section Layer

Section bertugas menyusun beberapa komponen menjadi satu blok halaman.

Contoh Homepage:

```text
HeroSection

FeaturedToolsSection

LatestArticlesSection

NewsletterSection
```

Section tidak melakukan query data.

---

# 10. Component Layer

Komponen hanya menerima props.

Contoh:

```text
ToolCard

ArticleCard

PromptCard

Button

Badge
```

Komponen tidak melakukan query data.

---

# 11. Relasi Antar Konten

Relasi menggunakan slug.

Contoh:

```text
Blog
├── Related Tools
├── Related Prompts
└── Related Templates

Tools
├── Related Articles
└── Related Prompts

Templates
└── Related Articles
```

Relasi dikelola di Data Service.

---

# 12. Filtering

Filtering dilakukan sebelum data dikirim ke komponen.

Contoh:

* kategori;
* tag;
* featured;
* draft;
* difficulty;
* pricing.

Komponen hanya menerima hasil akhir.

---

# 13. Sorting

Sorting dilakukan di Data Service.

Contoh:

* terbaru;
* alfabet;
* popularitas;
* rating.

---

# 14. Pagination

Pagination diproses di Page Layer.

Langkah:

1. Ambil data.
2. Urutkan.
3. Bagi per halaman.
4. Kirim ke komponen.

---

# 15. Search Flow

Alur pencarian:

```text
User
    │
    ▼
Search Input
    │
    ▼
Search Service
    │
    ▼
Filtered Results
    │
    ▼
Search Page
```

Search tidak mengubah data asli.

---

# 16. SEO Data Flow

Metadata SEO berasal dari frontmatter.

Alur:

```text
Frontmatter
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

---

# 17. Error Handling

Jika data tidak ditemukan:

* tampilkan 404;
* tampilkan Empty State bila daftar kosong;
* jangan menampilkan error mentah kepada pengguna.

---

# 18. Caching Strategy

Karena mayoritas halaman menggunakan SSG:

* data diproses saat build;
* tidak memerlukan cache runtime untuk konten statis.

Jika fitur dinamis ditambahkan di masa depan, strategi cache dapat diperluas.

---

# 19. Anti-pattern

Hindari:

* komponen mengambil data langsung;
* query berulang di banyak tempat;
* logika filter di UI;
* manipulasi data di komponen presentasi;
* penggunaan `any` untuk data konten.

---

# 20. Best Practices

* Semua query melalui Data Service.
* Semua data tervalidasi oleh schema.
* Gunakan TypeScript strict mode.
* Gunakan slug sebagai relasi.
* Pisahkan logika data dari tampilan.

---

# 21. Acceptance Criteria

Implementasi dianggap sesuai apabila:

* [ ] Seluruh data berasal dari Content Collections atau sumber resmi.
* [ ] Komponen hanya menerima props.
* [ ] Page tidak mengandung logika bisnis yang kompleks.
* [ ] Filtering dan sorting dilakukan di Data Service.
* [ ] Relasi menggunakan slug.
* [ ] Data tervalidasi melalui schema.
* [ ] Alur data mudah ditelusuri.

---

# 22. Hubungan dengan Dokumen Lain

Dokumen ini berkaitan dengan:

* 01-ASTRO-ARCHITECTURE.md
* 02-FOLDER-STRUCTURE.md
* 04-CONTENT-COLLECTIONS.md
* 05-ROUTING.md
* 07-SEARCH-IMPLEMENTATION.md
* 08-SEO-IMPLEMENTATION.md

---

# 23. Changelog

## v1.0

* Menetapkan standar Data Flow proyek.
* Mendefinisikan layer arsitektur data.
* Menentukan tanggung jawab setiap layer.
* Menetapkan strategi relasi, filtering, sorting, dan pagination.
* Menjadi acuan implementasi seluruh pengambilan data pada AI Praktis Indonesia.
