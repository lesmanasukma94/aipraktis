# AI Praktis Indonesia v2

# 04-CONTENT-COLLECTIONS.md

> **Document Version:** 1.0
> **Status:** Active
> **Last Updated:** June 2026

---

# 1. Tujuan

Dokumen ini mendefinisikan standar implementasi Astro Content Collections pada AI Praktis Indonesia.

Seluruh konten harus berasal dari Content Collections agar:

* tervalidasi menggunakan schema;
* mudah dikelola;
* aman dari kesalahan struktur data;
* konsisten antar koleksi;
* mudah dikembangkan.

Dokumen ini menjadi acuan utama pembuatan `src/content/config.ts`.

---

# 2. Prinsip Implementasi

Seluruh Content Collections mengikuti prinsip berikut.

* Content First
* Schema Driven
* Type Safe
* Scalable
* SEO Friendly
* Mudah dipelihara

---

# 3. Struktur Folder

```text
src/
└── content/
    ├── blog/
    ├── tools/
    ├── prompts/
    ├── templates/
    ├── glossary/
    ├── news/
    └── config.ts
```

Setiap folder merepresentasikan satu koleksi konten.

---

# 4. Daftar Collections

| Collection | Fungsi              |
| ---------- | ------------------- |
| blog       | Artikel edukasi AI  |
| tools      | Direktori AI Tools  |
| prompts    | Prompt Library      |
| templates  | Template Library    |
| glossary   | Istilah AI          |
| news       | Ringkasan berita AI |

---

# 5. Schema Umum

Seluruh koleksi minimal memiliki field berikut.

| Field       | Wajib | Keterangan        |
| ----------- | :---: | ----------------- |
| title       |   ✅   | Judul             |
| slug        |   ✅   | URL slug          |
| description |   ✅   | Ringkasan         |
| publishedAt |   ✅   | Tanggal publikasi |
| updatedAt   |   ❌   | Tanggal pembaruan |
| category    |   ✅   | Kategori utama    |
| tags        |   ✅   | Daftar tag        |
| draft       |   ✅   | Status draft      |
| featured    |   ❌   | Konten unggulan   |
| cover       |   ❌   | Gambar utama      |
| author      |   ✅   | Penulis           |
| seo         |   ✅   | Metadata SEO      |

---

# 6. Blog Collection

Digunakan untuk artikel tutorial dan edukasi.

Field tambahan:

* readingTime
* difficulty
* relatedTools
* relatedPrompts
* relatedTemplates
* faq
* references

Contoh struktur:

```text
blog/
└── cara-menggunakan-chatgpt.md
```

---

# 7. AI Tools Collection

Digunakan untuk direktori AI Tools.

Field tambahan:

* website
* logo
* pricing
* platform
* features
* pros
* cons
* alternatives
* integrations
* rating

Contoh:

```text
tools/
└── chatgpt.md
```

---

# 8. Prompt Collection

Digunakan untuk Prompt Library.

Field tambahan:

* prompt
* outputExample
* useCase
* model
* variables
* difficulty

Contoh:

```text
prompts/
└── email-marketing.md
```

---

# 9. Template Collection

Digunakan untuk Template Library.

Field tambahan:

* fileType
* downloadUrl
* previewImages
* compatibleApps
* useCase
* license

---

# 10. Glossary Collection

Digunakan untuk istilah AI.

Field tambahan:

* definition
* aliases
* relatedTerms
* examples

---

# 11. News Collection

Digunakan untuk ringkasan perkembangan AI.

Field tambahan:

* source
* sourceUrl
* publishedBy
* summary

---

# 12. SEO Metadata

Setiap dokumen wajib memiliki metadata SEO.

Minimal terdiri dari:

* metaTitle
* metaDescription
* canonical
* robots
* ogImage

Metadata disimpan dalam objek `seo`.

---

# 13. Relasi Antar Collection

Content Collections saling terhubung.

Contoh relasi:

```text
Blog
├── Related Tools
├── Related Prompts
└── Related Templates

Tools
├── Related Articles
└── Related Prompts

Prompts
├── Related Articles
└── Related Templates

Templates
└── Related Articles
```

Relasi menggunakan slug, bukan ID numerik.

---

# 14. Slug Strategy

Aturan slug:

* huruf kecil;
* menggunakan tanda hubung (`-`);
* tanpa karakter khusus;
* permanen setelah dipublikasikan.

Contoh:

```text
cara-menggunakan-chatgpt

prompt-email-marketing

canva-ai

template-rencana-bisnis
```

---

# 15. Kategori

Setiap konten memiliki satu kategori utama.

Contoh:

Blog:

* Tutorial
* Panduan
* Review
* Perbandingan

Tools:

* Chatbot
* Writing
* Image
* Video
* Coding

---

# 16. Tag

Tag bersifat fleksibel.

Contoh:

* ChatGPT
* Gemini
* Midjourney
* Productivity
* Marketing
* Education

Jumlah tag disarankan antara 3–8 per konten.

---

# 17. Draft Workflow

Field `draft` digunakan untuk mengontrol publikasi.

```yaml
draft: true
```

Konten draft tidak ditampilkan pada production build.

---

# 18. Validasi

Seluruh schema divalidasi menggunakan Zod melalui `src/content/config.ts`.

Target:

* tidak ada field wajib yang kosong;
* tipe data selalu benar;
* build gagal jika schema tidak valid.

---

# 19. Best Practices

* Gunakan frontmatter yang konsisten.
* Hindari field yang tidak terdokumentasi.
* Gunakan relasi berdasarkan slug.
* Perbarui `updatedAt` saat revisi substansial.
* Simpan aset gambar di lokasi yang konsisten.

---

# 20. Acceptance Criteria

Implementasi dianggap sesuai apabila:

* [ ] Semua konten berada di Content Collections.
* [ ] Semua koleksi memiliki schema Zod.
* [ ] Build gagal jika schema tidak valid.
* [ ] Metadata SEO tersedia di setiap konten.
* [ ] Relasi antar koleksi menggunakan slug.
* [ ] Struktur folder konsisten.
* [ ] Frontmatter mengikuti standar.

---

# 21. Hubungan dengan Dokumen Lain

Dokumen ini berkaitan dengan:

* 01-ASTRO-ARCHITECTURE.md
* 02-FOLDER-STRUCTURE.md
* 05-ROUTING.md
* 06-DATA-FLOW.md
* 08-SEO-IMPLEMENTATION.md

---

# 22. Changelog

## v1.0

* Menetapkan standar Astro Content Collections.
* Mendefinisikan seluruh koleksi konten utama.
* Menetapkan strategi schema, validasi, relasi, slug, kategori, dan metadata SEO.
* Menjadi acuan implementasi `src/content/config.ts`.
