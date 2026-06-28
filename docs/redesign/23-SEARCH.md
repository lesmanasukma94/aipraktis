# AI Praktis Indonesia v2
# 23-SEARCH.md

> **Document Version:** 2.1
> **Status:** Living Documentation
> **Last Updated:** June 2026

---

# 1. Tujuan Dokumen

Dokumen ini mendefinisikan Search Architecture AI Praktis Indonesia.

Search merupakan fitur inti website karena seluruh konten akan terus bertambah.

Tujuan utama:

- membantu pengguna menemukan informasi dengan cepat;
- mengurangi waktu pencarian;
- meningkatkan engagement;
- meningkatkan internal discovery;
- meningkatkan konversi.

Search harus menjadi salah satu fitur terbaik di website.

---

# 2. Filosofi Search

## Fast First

Hasil pencarian harus muncul secepat mungkin.

---

## Relevant First

Relevansi lebih penting daripada jumlah hasil.

---

## Predictive

Search membantu pengguna sebelum mereka selesai mengetik.

---

## Discoverable

Search juga menjadi alat eksplorasi konten.

---

# 3. Search Architecture

Search mencakup seluruh konten website.

```text
Website Search
│
├── AI Tools
├── Prompt Library
├── Template Library
├── Tutorials
├── Articles
├── Categories
├── Tags
├── Learning Paths
└── Authors
```

Semua jenis konten menggunakan indeks pencarian yang konsisten.

---

# 4. Indexed Content

Konten yang harus diindeks:

- AI Tools
- Prompt
- Template
- Blog
- Tutorial
- Category
- Tag
- Author
- FAQ

Metadata ikut diindeks untuk meningkatkan relevansi.

---

# 5. Search Fields

Setiap dokumen minimal memiliki field berikut:

```yaml
title

slug

description

excerpt

tags

category

keywords

author

updatedAt

popularity
```

Field tambahan dapat ditambahkan sesuai jenis konten.

---

# 6. Ranking Strategy

Prioritas ranking:

1. Exact Match
2. Title Match
3. Keyword Match
4. Description Match
5. Tag Match
6. Popularity
7. Freshness

Relevansi selalu lebih penting daripada popularitas.

---

# 7. Search Interface

Komponen utama:

```text
Search Input

↓

Autocomplete

↓

Search Suggestions

↓

Filters

↓

Results

↓

Pagination
```

Antarmuka harus tetap sederhana dan cepat dipahami.

---

# 8. Autocomplete

Autocomplete menampilkan:

- AI Tool
- Prompt
- Template
- Tutorial
- Category

Target:

Muncul dalam waktu kurang dari 100 ms pada indeks lokal.

---

# 9. Search Suggestions

Jenis saran:

- kata kunci populer;
- pencarian terbaru (lokal);
- kategori;
- AI Tool populer;
- prompt populer.

---

# 10. Search Filters

Filter berdasarkan:

- Jenis Konten
- AI Model
- Kategori
- Industri
- Use Case
- Tingkat Kesulitan
- Gratis/Berbayar
- Tanggal Pembaruan
- Bahasa

Filter dapat dikombinasikan.

---

# 11. Sorting

Pilihan urutan:

- Relevansi
- Terbaru
- Terpopuler
- A–Z

Default:

Relevansi.

---

# 12. Search Result Card

Setiap hasil menampilkan:

- Judul
- Deskripsi singkat
- Jenis konten
- Kategori
- Tanggal pembaruan
- Badge (bila ada)

Highlight kata yang cocok dengan pencarian.

---

# 13. Empty State

Jika tidak ada hasil:

Tampilkan:

- pesan yang jelas;
- saran kata kunci;
- kategori populer;
- AI Tools populer;
- artikel rekomendasi.

Empty state harus tetap membantu pengguna melanjutkan eksplorasi.

---

# 14. Search Analytics

Pantau:

- jumlah pencarian;
- kata kunci populer;
- pencarian tanpa hasil;
- CTR hasil pencarian;
- filter yang digunakan;
- waktu menuju klik pertama.

Data digunakan untuk meningkatkan kualitas indeks.

---

# 15. Internal Search SEO

Halaman hasil pencarian:

- tidak diindeks mesin pencari;
- dapat diakses pengguna;
- menggunakan canonical yang sesuai bila diperlukan.

---

# 16. Performance

Target:

| Metrik | Target |
|--------|--------:|
| Autocomplete | < 100 ms |
| Search Results | < 300 ms |
| Filter Update | < 150 ms |

---

# 17. Accessibility

Search harus mendukung:

- keyboard navigation;
- screen reader;
- focus management;
- ARIA live region untuk hasil dinamis;
- shortcut keyboard (future).

---

# 18. Mobile Search

Pada perangkat mobile:

- search full-screen;
- filter mudah digunakan;
- tombol jelas;
- area sentuh memadai.

---

# 19. AI Search (Future)

Roadmap:

```text
Natural Language Search

↓

Semantic Search

↓

AI Assistant

↓

Recommendation Engine
```

Implementasi dilakukan bertahap setelah fondasi pencarian tradisional matang.

---

# 20. Search Security

Search harus:

- membatasi request berlebihan;
- menggunakan rate limiting;
- memvalidasi input;
- menghindari injection.

---

# 21. Search Monitoring

Pantau:

- response time;
- error rate;
- cache hit ratio;
- indeks gagal;
- query tanpa hasil.

Monitoring dilakukan secara otomatis.

---

# 22. Future Roadmap

```text
Search History

Saved Searches

Voice Search

Visual Search

AI Recommendations

Personalized Ranking
```

Fitur dikembangkan berdasarkan kebutuhan pengguna.

---

# 23. Acceptance Criteria

- [ ] Semua konten terindeks.
- [ ] Autocomplete berfungsi.
- [ ] Filter lengkap.
- [ ] Ranking relevan.
- [ ] Search analytics tersedia.
- [ ] Empty state membantu pengguna.
- [ ] Mendukung keyboard dan screen reader.
- [ ] Memenuhi target performa.

---

# 24. Hubungan dengan Dokumen Lain

Dokumen ini bergantung pada:

- 03-INFORMATION-ARCHITECTURE.md
- 04-SITEMAP.md
- 06-CONTENT-MODEL.md
- 07-DATA-MODEL.md
- 13-AI-TOOLS.md
- 14-PROMPT-LIBRARY.md
- 15-TEMPLATE-LIBRARY.md
- 16-SEO.md
- 18-ANALYTICS.md
- 19-PERFORMANCE.md
- 20-ACCESSIBILITY.md

---

# 25. Changelog

## v2.1

- Menetapkan Search sebagai fitur inti platform.
- Mendefinisikan Search Architecture untuk seluruh jenis konten.
- Menambahkan strategi ranking, autocomplete, filter, analytics, dan monitoring.
- Menyiapkan roadmap menuju semantic search dan AI-powered search.
- Menetapkan target performa, aksesibilitas, dan keamanan untuk sistem pencarian.