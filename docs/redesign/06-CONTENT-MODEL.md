# AI Praktis Indonesia v2

# 06-CONTENT-MODEL.md

> **Document Version:** 2.1
> **Status:** Living Documentation
> **Last Updated:** June 2026

---

# 1. Tujuan Dokumen

Dokumen ini mendefinisikan seluruh model konten (Content Model) AI Praktis Indonesia.

Content Model menjadi fondasi bagi:

* Astro Content Collections
* Struktur folder
* SEO
* Internal Linking
* Search Engine
* Sitemap
* Related Content
* RSS Feed
* CMS (masa depan)

Seluruh jenis konten harus mengikuti model ini agar konsisten dan mudah dikembangkan.

---

# 2. Prinsip Content Model

Seluruh model konten mengikuti prinsip berikut.

## Single Source of Truth

Setiap informasi hanya memiliki satu sumber utama.

Contoh:

* Data AI Tool hanya disimpan pada koleksi AI Tools.
* Artikel hanya menyimpan referensi ke AI Tool tersebut.

Hindari duplikasi data.

---

## Structured Content

Konten harus terdiri dari data yang terstruktur, bukan sekadar teks.

Sebisa mungkin gunakan field yang jelas daripada menyisipkan informasi penting di dalam isi artikel.

---

## Reusable

Setiap entitas harus dapat digunakan kembali oleh berbagai halaman.

Contoh:

* satu AI Tool dapat muncul pada banyak tutorial;
* satu Prompt dapat direferensikan oleh banyak artikel.

---

## Relationship First

Hubungan antar konten lebih penting daripada jumlah kontennya.

Model harus memudahkan navigasi dan internal linking.

---

## Scalable

Model harus mampu berkembang hingga:

* 10.000+ artikel
* 2.000+ AI Tools
* 20.000+ Prompt
* 5.000+ Template

tanpa perubahan struktur.

---

# 3. Klasifikasi Konten

Seluruh konten dibagi menjadi lima kelompok.

```text
Website
│
├── Pages
├── Content Types
├── Entities
├── Taxonomy
└── System Data
```

---

# 4. Pages

Pages adalah halaman statis.

Contoh:

```text
/

about

contact

privacy

terms

cookie-policy

newsletter
```

Karakteristik:

* URL tetap
* Tidak berada dalam koleksi konten
* Jarang berubah

---

# 5. Content Types

Content Type adalah konten editorial.

```text
Tutorial

Guide

Comparison

Review

News

Article
```

Karakteristik:

* ditulis oleh penulis
* memiliki tanggal publikasi
* memiliki author
* dapat memiliki AI Tool terkait
* dapat memiliki Prompt terkait

---

# 6. Entities

Entity adalah objek utama dalam ekosistem AI Praktis Indonesia.

```text
AI Tool

Prompt

Template

Glossary

FAQ
```

Entity bukan artikel.

Entity dapat digunakan oleh banyak artikel sekaligus.

---

# 7. Taxonomy

Taxonomy digunakan untuk mengelompokkan konten.

```text
Category

Tag

Topic

Series
```

Taxonomy tidak memiliki isi editorial panjang.

Taxonomy digunakan untuk navigasi, filter, dan SEO.

---

# 8. System Data

Data sistem digunakan oleh website.

```text
Author

Navigation

Footer

Announcement

Social Links

Partner

Sponsor
```

System Data tidak memiliki URL publik kecuali diperlukan.

---

# 9. Relasi Konten

Hubungan antar konten.

```text
Tutorial
│
├── AI Tool
├── Prompt
├── Template
├── Category
├── Tags
└── Author
```

---

```text
AI Tool
│
├── Tutorial
├── Prompt
├── Review
├── Comparison
├── FAQ
└── Alternative
```

---

```text
Prompt
│
├── AI Tool
├── Tutorial
├── Category
├── Difficulty
└── Tags
```

---

# 10. Standard Metadata

Seluruh Content Type dan Entity harus memiliki metadata standar.

```yaml
title:
slug:
description:
excerpt:

publishedAt:
updatedAt:

coverImage:

author:

categories:

tags:

featured:

draft:

canonical:

robots:

readingTime:
```

Metadata ini menjadi dasar SEO dan manajemen konten.

---

# 11. AI Tool Model

Setiap AI Tool minimal memiliki atribut berikut.

```yaml
name:

slug:

developer:

website:

logo:

description:

category:

pricing:

platform:

languages:

features:

alternatives:

relatedTutorials:

relatedPrompts:

faq:
```

AI Tool menjadi pusat relasi bagi banyak jenis konten.

---

# 12. Prompt Model

Prompt memiliki struktur yang lebih kaya dibanding artikel.

```yaml
title:

slug:

model:

role:

industry:

difficulty:

language:

objective:

prompt:

expectedOutput:

tips:

relatedTool:

relatedTutorial:

tags:
```

Prompt dirancang agar dapat dicari dan difilter berdasarkan berbagai atribut.

---

# 13. Template Model

Template menyimpan informasi seperti:

```yaml
title:

slug:

application:

category:

description:

downloadUrl:

previewImage:

relatedTutorial:

relatedPrompt:
```

---

# 14. Tutorial Model

Tutorial merupakan jenis konten editorial.

```yaml
title:

slug:

excerpt:

body:

tool:

prompt:

template:

difficulty:

estimatedTime:

author:
```

Tutorial dapat menghubungkan pengguna ke berbagai entity lain.

---

# 15. Category Model

Category memiliki struktur sederhana.

```yaml
name:

slug:

description:

icon:

cover:

parent:
```

Category mendukung hierarki bila diperlukan.

---

# 16. Tag Model

Tag digunakan sebagai atribut tambahan.

```yaml
name:

slug:

description:
```

Tag tidak boleh menggantikan fungsi Category.

---

# 17. Author Model

Author menyimpan informasi penulis.

```yaml
name:

slug:

avatar:

bio:

website:

social:

expertise:
```

Author dapat memiliki banyak artikel.

---

# 18. Internal Linking Strategy

Setiap konten minimal memiliki hubungan dengan:

* Parent Category
* Related Content
* Related AI Tool
* Related Prompt
* Related Template
* Author

Target:

Tidak ada orphan content.

---

# 19. Content Lifecycle

Semua konten melewati tahapan berikut.

```text
Idea
↓
Research
↓
Draft
↓
Review
↓
Publish
↓
Update
↓
Archive
```

Setiap tahap harus terdokumentasi dengan jelas.

---

# 20. Naming Convention

Seluruh koleksi menggunakan huruf kecil dan bentuk jamak.

```text
articles

tutorials

guides

reviews

comparisons

news

tools

prompts

templates

categories

tags

authors
```

Nama koleksi harus konsisten dengan struktur URL dan folder proyek.

---

# 21. Future Extensibility

Model ini disiapkan untuk mendukung fitur masa depan seperti:

* Bookmark
* Favorites
* Recently Viewed
* Learning Path
* AI Collections
* User Notes
* Community Rating
* User Reviews
* Personalized Recommendation

Tanpa mengubah model dasar.

---

# 22. Acceptance Criteria

Model dianggap selesai apabila:

* [ ] Seluruh jenis konten telah didefinisikan.
* [ ] Metadata standar tersedia.
* [ ] Relasi antar entitas jelas.
* [ ] Tidak ada duplikasi data.
* [ ] Siap diterapkan pada Astro Content Collections.
* [ ] Mendukung SEO dan internal linking.

---

# 23. Hubungan dengan Dokumen Lain

Dokumen ini menjadi dasar bagi:

* 07-DATA-MODEL.md
* 08-NAVIGATION.md
* 12-BLOG-SYSTEM.md
* 13-AI-TOOLS.md
* 14-PROMPT-LIBRARY.md
* 15-TEMPLATE-LIBRARY.md
* 16-SEO.md
* 23-SEARCH.md
* 24-CMS.md

---

# 24. Changelog

## v2.1

* Memperkenalkan Content Model sebagai fondasi arsitektur produk.
* Memisahkan Pages, Content Types, Entities, Taxonomy, dan System Data.
* Menentukan metadata standar untuk seluruh koleksi.
* Mendefinisikan relasi inti antar konten.
* Menyiapkan model agar kompatibel dengan Astro Content Collections dan ekspansi fitur di masa depan.
