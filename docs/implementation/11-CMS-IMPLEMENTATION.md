# AI Praktis Indonesia v2

# 11-CMS-IMPLEMENTATION.md

> **Document Version:** 1.0
> **Status:** Active
> **Last Updated:** June 2026

---

# 1. Tujuan

Dokumen ini mendefinisikan standar pengelolaan konten (Content Management System) pada AI Praktis Indonesia.

CMS harus:

* sederhana;
* berbasis Git;
* tervalidasi;
* mudah dipelihara;
* mendukung kolaborasi;
* terintegrasi dengan Astro Content Collections.

---

# 2. Prinsip CMS

Pengelolaan konten mengikuti prinsip berikut.

* Content First
* Git as Source of Truth
* Schema Validation
* Markdown First
* Version Controlled
* Review Before Publish

---

# 3. Arsitektur CMS

Alur pengelolaan konten:

```text
Content Writer
      │
      ▼
Markdown / MDX
      │
      ▼
Content Collections
      │
      ▼
Schema Validation
      │
      ▼
Git Repository
      │
      ▼
Build
      │
      ▼
Production
```

Seluruh perubahan konten melalui Git.

---

# 4. Jenis Konten

CMS mengelola koleksi berikut.

| Collection | Fungsi             |
| ---------- | ------------------ |
| Blog       | Artikel edukasi    |
| Tools      | Direktori AI Tools |
| Prompts    | Prompt Library     |
| Templates  | Template Library   |
| Glossary   | Istilah AI         |
| News       | Ringkasan berita   |

---

# 5. Struktur Folder

```text
src/content/

blog/
tools/
prompts/
templates/
glossary/
news/

config.ts
```

Seluruh koleksi tervalidasi melalui `config.ts`.

---

# 6. Frontmatter

Setiap konten wajib memiliki frontmatter sesuai schema.

Contoh field umum:

* title
* slug
* description
* category
* tags
* publishedAt
* updatedAt
* author
* draft
* featured
* seo

Field tambahan mengikuti jenis koleksi.

---

# 7. Penamaan File

Aturan:

* gunakan slug sebagai nama file;
* huruf kecil;
* gunakan tanda hubung (`-`);
* tanpa spasi atau karakter khusus.

Contoh:

```text
cara-menggunakan-chatgpt.md
prompt-email-marketing.md
chatgpt.md
```

---

# 8. Workflow Penulisan

Urutan kerja:

1. Tentukan topik.
2. Buat file Markdown.
3. Lengkapi frontmatter.
4. Tulis konten.
5. Validasi schema.
6. Review.
7. Commit ke Git.
8. Build.
9. Publish.

---

# 9. Draft

Konten yang belum siap dipublikasikan menggunakan:

```yaml
draft: true
```

Konten draft tidak ikut dalam build produksi.

---

# 10. Review

Sebelum dipublikasikan, lakukan pemeriksaan:

* struktur heading;
* metadata SEO;
* internal link;
* gambar;
* tata bahasa;
* validasi schema.

---

# 11. Gambar

Setiap gambar harus:

* relevan dengan konten;
* memiliki nama file yang deskriptif;
* dioptimalkan sebelum digunakan;
* memiliki atribut `alt`.

Lokasi penyimpanan mengikuti standar proyek.

---

# 12. Internal Linking

Setiap artikel minimal memiliki:

* tautan ke artikel terkait;
* AI Tools terkait;
* Prompt terkait;
* Template terkait.

Relasi menggunakan slug.

---

# 13. Pembaruan Konten

Jika artikel diperbarui secara substansial:

* ubah `updatedAt`;
* periksa kembali metadata SEO;
* pastikan internal link masih valid.

---

# 14. Version Control

Seluruh perubahan menggunakan Git.

Aturan commit:

* satu perubahan logis per commit;
* gunakan pesan commit yang jelas;
* hindari commit campuran antara konten dan kode jika memungkinkan.

---

# 15. Publishing Workflow

Alur publikasi:

```text
Draft
  │
  ▼
Review
  │
  ▼
Merge
  │
  ▼
Build
  │
  ▼
Deploy
  │
  ▼
Production
```

---

# 16. Validasi

Konten harus lolos:

* schema validation;
* pemeriksaan link;
* build Astro;
* audit metadata.

Build harus gagal bila schema tidak valid.

---

# 17. Best Practices

* Satu file untuk satu konten.
* Gunakan slug yang permanen.
* Hindari duplikasi topik.
* Perbarui artikel evergreen secara berkala.
* Dokumentasikan perubahan besar.

---

# 18. Anti-pattern

Hindari:

* mengubah slug tanpa redirect;
* metadata kosong;
* gambar tanpa `alt`;
* file tanpa frontmatter;
* konten langsung dipublikasikan tanpa review.

---

# 19. Acceptance Criteria

Implementasi dianggap sesuai apabila:

* [ ] Seluruh konten berada di Content Collections.
* [ ] Semua file tervalidasi melalui schema.
* [ ] Workflow penulisan terdokumentasi.
* [ ] Draft tidak ikut build produksi.
* [ ] Setiap perubahan tercatat di Git.
* [ ] Proses review diterapkan sebelum publikasi.

---

# 20. Hubungan dengan Dokumen Lain

Dokumen ini berkaitan dengan:

* 04-CONTENT-COLLECTIONS.md
* 05-ROUTING.md
* 06-DATA-FLOW.md
* 08-SEO-IMPLEMENTATION.md
* docs/redesign/06-CONTENT-MODEL.md
* docs/redesign/07-DATA-MODEL.md

---

# 21. Changelog

## v1.0

* Menetapkan standar CMS berbasis Git dan Astro Content Collections.
* Mendefinisikan workflow penulisan, review, validasi, dan publikasi.
* Menjadi acuan operasional pengelolaan seluruh konten AI Praktis Indonesia.
