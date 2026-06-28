# AI Praktis Indonesia v2

# 03-INFORMATION-ARCHITECTURE.md

> **Document Version:** 2.0
> **Status:** Draft (Living Documentation)
> **Last Updated:** June 2026

---

# 1. Tujuan Dokumen

Dokumen ini mendefinisikan arsitektur informasi (Information Architecture/IA) AI Praktis Indonesia.

IA menjadi fondasi bagaimana seluruh konten diorganisasi, ditemukan, dan dihubungkan sehingga pengguna dapat mencapai tujuan mereka dengan cepat, sementara mesin pencari dapat memahami struktur website secara optimal.

---

# 2. Prinsip Information Architecture

Seluruh struktur website harus memenuhi prinsip berikut.

## User First

Pengguna selalu menjadi prioritas utama.

Kategori dibuat berdasarkan cara pengguna mencari informasi, bukan berdasarkan struktur internal tim.

---

## Scalable

Struktur harus mampu berkembang dari ratusan menjadi ribuan halaman tanpa perlu perubahan besar.

---

## Discoverable

Setiap halaman penting harus mudah ditemukan melalui:

* menu;
* pencarian;
* kategori;
* tag;
* internal linking;
* rekomendasi konten.

---

## Semantic

Hubungan antarhalaman harus mencerminkan hubungan topik yang sebenarnya.

---

## SEO Friendly

Hierarki URL, kategori, dan internal linking harus membantu pembentukan topical authority.

---

# 3. Pilar Informasi

Website dibangun di atas tujuh pilar utama.

```text
Homepage
│
├── AI Tools
├── Tutorial
├── Prompt Library
├── Template Library
├── Blog
├── News
└── Resources
```

Masing-masing pilar dapat berkembang secara independen tanpa mengubah struktur utama.

---

# 4. Hierarki Konten

Level 1

* Homepage

Level 2

* AI Tools
* Tutorial
* Prompt Library
* Template Library
* Blog
* News
* Resources

Level 3

* Kategori

Level 4

* Artikel
* Tool
* Prompt
* Template
* Panduan

Prinsip ini menjaga struktur tetap sederhana namun fleksibel.

---

# 5. Jenis Konten

## Evergreen

Konten yang relevan dalam jangka panjang.

Contoh:

* Cara menggunakan ChatGPT.
* Prompt untuk guru.
* AI untuk UMKM.

---

## Dynamic

Konten yang berubah secara berkala.

Contoh:

* Berita AI.
* Update model AI.
* Rilis fitur baru.

---

## Reference

Konten yang menjadi rujukan.

Contoh:

* Glosarium AI.
* Cheat Sheet.
* Dokumentasi.
* FAQ.

---

# 6. Model Navigasi

Navigasi dibagi menjadi tiga lapisan.

## Global Navigation

Selalu muncul di seluruh website.

Contoh:

* AI Tools
* Tutorial
* Prompt
* Blog
* Resources

---

## Contextual Navigation

Navigasi yang berubah sesuai halaman.

Misalnya:

Kategori artikel.

Kategori prompt.

Kategori AI Tools.

---

## Footer Navigation

Berisi halaman pendukung.

* Tentang
* Kontak
* Privacy
* Disclaimer
* Sitemap

---

# 7. Taxonomy

Taxonomy digunakan untuk mengelompokkan konten.

## Category

Digunakan sebagai struktur utama.

Contoh:

Tutorial → ChatGPT

Tutorial → Gemini

Tutorial → Claude

---

## Tag

Digunakan sebagai atribut tambahan.

Contoh:

* Pendidikan
* Marketing
* Coding
* Bisnis
* Produktivitas

Tag tidak boleh menjadi pengganti kategori.

---

# 8. Hubungan Antar Konten

Setiap halaman minimal memiliki hubungan dengan:

* halaman induk;
* halaman terkait;
* artikel lanjutan;
* artikel sebelumnya (jika seri);
* rekomendasi konten.

Tidak boleh ada halaman yang terisolasi (orphan page).

---

# 9. Internal Linking

Internal linking mengikuti prinsip berikut.

## Vertical

Parent → Child

Kategori → Artikel

---

## Horizontal

Artikel ↔ Artikel terkait

---

## Contextual

Link muncul secara alami di dalam isi artikel.

---

## Recommended

Bagian "Baca Juga".

---

## Related

Bagian "Artikel Terkait".

---

# 10. Search Experience

Pencarian harus mampu menemukan:

* artikel;
* AI tools;
* prompt;
* template;
* glossary.

Hasil pencarian harus dikelompokkan berdasarkan tipe konten agar pengguna cepat menemukan informasi yang diinginkan.

---

# 11. URL Structure

Prinsip URL:

* pendek;
* jelas;
* konsisten;
* mudah dibaca;
* mencerminkan hierarki konten.

Contoh:

```text
/tutorial/chatgpt/cara-menggunakan-chatgpt

/tools/chatgpt

/prompts/guru

/templates/excel

/blog/...
```

---

# 12. Breadcrumb

Semua halaman utama harus memiliki breadcrumb.

Contoh:

```text
Home

Tutorial

ChatGPT

Cara Menggunakan ChatGPT
```

Breadcrumb membantu navigasi pengguna dan SEO.

---

# 13. Metadata

Setiap halaman harus memiliki metadata yang konsisten.

Minimal:

* Title
* Description
* Canonical
* Open Graph
* Twitter Card
* Structured Data

---

# 14. Content Relationships

Hubungan antarjenis konten.

Contoh:

AI Tool → Tutorial → Prompt → Template → Artikel → FAQ

Pengguna selalu memiliki jalur eksplorasi berikutnya.

---

# 15. Content Lifecycle

Konten melalui tahapan berikut.

1. Ide.
2. Riset.
3. Penulisan.
4. Review.
5. Publikasi.
6. Update.
7. Arsip (jika diperlukan).

Seluruh konten harus memiliki jadwal evaluasi berkala.

---

# 16. Skalabilitas

Arsitektur harus tetap stabil meskipun website berkembang menjadi:

* 5.000+ artikel;
* 1.000+ AI tools;
* 3.000+ prompt;
* 1.000+ template.

Tidak boleh ada perubahan struktur URL yang tidak perlu.

---

# 17. Prinsip UX

Pengguna harus dapat menemukan tujuan mereka dalam maksimal tiga langkah.

Contoh:

Homepage

↓

Tutorial

↓

Artikel

atau

Homepage

↓

AI Tools

↓

Detail Tool

---

# 18. Hubungan dengan SEO

IA mendukung strategi SEO melalui:

* Topical Authority.
* Internal Linking.
* Taxonomy yang jelas.
* URL konsisten.
* Breadcrumb.
* Structured Data.

---

# 19. Hubungan dengan Dokumen Lain

Dokumen ini menjadi dasar bagi:

* 04-SITEMAP.md
* 05-HOMEPAGE.md
* 06-NAVIGATION.md
* 09-BLOG-SYSTEM.md
* 10-AI-TOOLS.md
* 11-PROMPT-LIBRARY.md
* 12-SEO.md

---

# 20. Checklist

* [ ] Pilar konten telah ditetapkan.
* [ ] Hierarki konten jelas.
* [ ] Tidak ada orphan page.
* [ ] Taxonomy konsisten.
* [ ] URL mengikuti struktur yang ditentukan.
* [ ] Internal linking diterapkan pada seluruh jenis konten.
* [ ] Search mendukung semua tipe konten.
* [ ] Breadcrumb tersedia di seluruh halaman utama.

---

# 21. Changelog

## v2.0

* Menetapkan arsitektur informasi AI Praktis Indonesia.
* Mendefinisikan pilar konten.
* Menentukan hierarki konten dan taxonomy.
* Menetapkan strategi internal linking.
* Menentukan prinsip URL, breadcrumb, dan metadata.
* Menjadi fondasi bagi sitemap, navigasi, dan sistem SEO.
