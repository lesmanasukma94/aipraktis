# AI Praktis Indonesia v2

# 07-SEARCH-IMPLEMENTATION.md

> **Document Version:** 1.0
> **Status:** Active
> **Last Updated:** June 2026

---

# 1. Tujuan

Dokumen ini mendefinisikan implementasi sistem pencarian (Search) pada AI Praktis Indonesia.

Search harus:

* cepat;
* ringan;
* relevan;
* mendukung seluruh Content Collections;
* mudah dikembangkan.

---

# 2. Prinsip Implementasi

Search mengikuti prinsip berikut.

* Static First
* Fast Response
* Relevance Ranking
* Keyboard Friendly
* Mobile Friendly
* Accessible
* Progressive Enhancement

---

# 3. Ruang Lingkup

Search mencakup seluruh koleksi berikut.

| Collection       | Dicari |
| ---------------- | :----: |
| Blog             |    ✅   |
| AI Tools         |    ✅   |
| Prompt Library   |    ✅   |
| Template Library |    ✅   |
| Glossary         |    ✅   |
| News             |    ✅   |

Semua koleksi menggunakan satu antarmuka pencarian.

---

# 4. Arsitektur Search

Alur pencarian:

```text
Content Collections
        │
        ▼
Build Index
        │
        ▼
Search Index
        │
        ▼
Search Service
        │
        ▼
Search UI
        │
        ▼
User
```

Index dibuat saat proses build dan digunakan saat runtime.

---

# 5. Struktur Folder

```text
src/

components/
└── search/
    ├── SearchBar.astro
    ├── SearchInput.astro
    ├── SearchResults.astro
    ├── SearchItem.astro
    └── SearchEmpty.astro

lib/
└── search/
    ├── build-index.ts
    ├── search.ts
    ├── ranking.ts
    └── tokenizer.ts

pages/
└── search/
    └── index.astro
```

---

# 6. Search Index

Setiap dokumen menghasilkan satu entry pada search index.

Minimal berisi:

* title
* slug
* collection
* description
* category
* tags
* keywords
* publishedAt

Konten lengkap tidak perlu dimasukkan seluruhnya agar ukuran index tetap kecil.

---

# 7. Searchable Fields

Field yang digunakan untuk pencarian.

| Field       |         Bobot |
| ----------- | ------------: |
| title       | Sangat Tinggi |
| keywords    |        Tinggi |
| tags        |        Tinggi |
| description |        Sedang |
| category    |        Sedang |
| content     |        Rendah |

Judul memiliki prioritas tertinggi.

---

# 8. Ranking

Urutan hasil mempertimbangkan:

1. Kecocokan judul
2. Keyword
3. Tag
4. Kategori
5. Deskripsi
6. Isi konten

Jika skor sama, gunakan:

* featured terlebih dahulu;
* kemudian konten terbaru.

---

# 9. Search UI

Komponen utama:

* SearchBar
* SearchInput
* SearchResults
* SearchItem
* SearchEmpty
* SearchPagination (opsional)

Search tersedia pada Header dan halaman `/search`.

---

# 10. Search Result

Setiap hasil menampilkan:

* Judul
* Deskripsi singkat
* Jenis konten
* Kategori
* URL
* Highlight kata yang cocok (opsional)

---

# 11. Search Filter

Filter yang didukung:

* Collection
* Category
* Tag

Filter dapat digunakan bersamaan dengan kata kunci.

---

# 12. Search Suggestion

Autocomplete dapat menampilkan:

* artikel populer;
* AI Tools populer;
* Prompt populer;
* pencarian terbaru (opsional).

---

# 13. Empty State

Jika hasil tidak ditemukan:

* tampilkan pesan yang jelas;
* berikan rekomendasi konten populer;
* tampilkan tautan ke kategori utama.

---

# 14. URL

Halaman pencarian menggunakan:

```text
/search
```

Query menggunakan parameter:

```text
/search?q=chatgpt
/search?q=marketing
/search?q=image
```

---

# 15. SEO

Halaman hasil pencarian:

* tidak diindeks;
* memiliki canonical ke `/search`;
* menggunakan `noindex, follow`.

---

# 16. Accessibility

Search harus:

* dapat digunakan dengan keyboard;
* memiliki label yang jelas;
* mendukung fokus yang terlihat;
* menggunakan ARIA bila diperlukan.

---

# 17. Performance

Target performa:

* hasil muncul < 100 ms untuk index lokal;
* ukuran index sekecil mungkin;
* JavaScript hanya dimuat saat Search digunakan.

---

# 18. Future Expansion

Arsitektur memungkinkan migrasi ke:

* Pagefind
* Algolia
* Meilisearch

Tanpa mengubah komponen UI utama.

---

# 19. Anti-pattern

Hindari:

* mengambil data langsung dari seluruh Markdown saat runtime;
* index yang terlalu besar;
* pencarian yang membedakan huruf besar dan kecil;
* hasil duplikat;
* JavaScript global untuk seluruh halaman.

---

# 20. Acceptance Criteria

* [ ] Search mencakup seluruh Content Collections.
* [ ] Search menggunakan index hasil build.
* [ ] Ranking mengikuti prioritas yang ditetapkan.
* [ ] Search dapat dioperasikan dengan keyboard.
* [ ] Halaman search menggunakan `noindex`.
* [ ] Komponen search bersifat modular.
* [ ] Arsitektur siap ditingkatkan ke search engine eksternal.

---

# 21. Hubungan dengan Dokumen Lain

Dokumen ini berkaitan dengan:

* 01-ASTRO-ARCHITECTURE.md
* 04-CONTENT-COLLECTIONS.md
* 05-ROUTING.md
* 06-DATA-FLOW.md
* 08-SEO-IMPLEMENTATION.md

---

# 22. Changelog

## v1.0

* Menetapkan arsitektur sistem pencarian.
* Mendefinisikan struktur search index, ranking, filter, dan UI.
* Menentukan strategi performa dan SEO.
* Menyiapkan fondasi untuk migrasi ke search engine eksternal di masa depan.
