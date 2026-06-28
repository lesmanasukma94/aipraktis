# AI Praktis Indonesia v2

# 01-ASTRO-ARCHITECTURE.md

> **Document Version:** 1.0
> **Status:** Active
> **Last Updated:** June 2026

---

# 1. Tujuan

Dokumen ini mendefinisikan arsitektur Astro yang digunakan oleh AI Praktis Indonesia.

Seluruh implementasi harus mengikuti dokumen ini agar struktur proyek tetap konsisten, mudah dipelihara, dan mampu berkembang seiring bertambahnya fitur maupun konten.

Dokumen ini merupakan implementasi teknis dari keputusan yang telah ditetapkan pada folder `docs/redesign/`.

---

# 2. Tujuan Arsitektur

Arsitektur harus memenuhi prinsip berikut:

* Performa tinggi.
* SEO optimal.
* Mobile-first.
* Component-driven.
* Content-first.
* Mudah dikembangkan.
* Mudah dipelihara.
* Siap untuk skala besar.

---

# 3. Technology Stack

| Area       | Teknologi                 |
| ---------- | ------------------------- |
| Framework  | Astro 5.x                 |
| Language   | TypeScript (Strict Mode)  |
| Build Tool | Vite                      |
| Styling    | CSS + Design Tokens       |
| Content    | Astro Content Collections |
| Markdown   | MD + MDX                  |
| Icons      | Astro Icon / SVG          |
| Deployment | Cloudflare Pages / Vercel |

---

# 4. Architecture Principles

Seluruh implementasi mengikuti prinsip berikut.

## 4.1 Server First

Gunakan rendering di server sebagai pilihan utama.

JavaScript hanya dikirim ketika benar-benar dibutuhkan.

---

## 4.2 Islands Architecture

Komponen interaktif menggunakan Astro Islands.

Contoh:

* Search
* Theme Switcher
* Bookmark
* Share Button
* Filter
* Newsletter Form

Komponen statis tidak menggunakan hidrasi.

---

## 4.3 Content First

Konten menjadi pusat aplikasi.

Semua halaman seperti artikel, AI Tools, Prompt Library, dan Template Library berasal dari Astro Content Collections.

---

## 4.4 Progressive Enhancement

Website harus tetap dapat digunakan meskipun JavaScript dinonaktifkan, selama tidak mengganggu fungsi utama.

---

## 4.5 Component Reusability

Komponen dibuat kecil, fokus pada satu tanggung jawab, dan dapat digunakan kembali di berbagai halaman.

---

# 5. Rendering Strategy

| Jenis Halaman    | Strategi     |
| ---------------- | ------------ |
| Homepage         | SSG          |
| Blog             | SSG          |
| Artikel          | SSG          |
| AI Tools         | SSG          |
| Prompt Library   | SSG          |
| Template Library | SSG          |
| Kategori         | SSG          |
| Tag              | SSG          |
| Search           | Hybrid / SSR |
| Newsletter       | SSR          |
| API Endpoint     | Server       |

Prinsip utama:

> Gunakan Static Site Generation (SSG) secara default. Gunakan Server-Side Rendering (SSR) hanya jika diperlukan oleh fitur.

---

# 6. Hydration Strategy

Gunakan hidrasi seminimal mungkin.

| Directive        | Penggunaan                       |
| ---------------- | -------------------------------- |
| `client:load`    | Sangat jarang                    |
| `client:idle`    | Komponen non-kritis              |
| `client:visible` | Komponen di bawah fold           |
| `client:media`   | Berdasarkan media query          |
| Tanpa hidrasi    | Default untuk mayoritas komponen |

Target utama adalah meminimalkan JavaScript yang dikirim ke browser.

---

# 7. Routing Principles

Routing mengikuti file-based routing Astro.

Contoh:

```text
/

/

/blog/

/blog/[slug]

/tools/

/tools/[slug]

/prompts/

/prompts/[slug]

/templates/

/templates/[slug]

/categories/[slug]

/tags/[slug]
```

Tidak menggunakan routing yang kompleks tanpa kebutuhan nyata.

---

# 8. Layout Architecture

Hierarki layout:

```text
BaseLayout

│

├── MarketingLayout

├── ContentLayout

├── DocumentationLayout

└── ErrorLayout
```

Setiap halaman harus menggunakan layout yang sesuai agar struktur tetap konsisten.

---

# 9. Component Architecture

Hierarki komponen:

```text
Pages

↓

Layouts

↓

Sections

↓

Components

↓

UI Components
```

Aturan:

* Halaman tidak boleh berisi logika presentasi yang kompleks.
* Layout mengatur struktur global.
* Section menyusun blok halaman.
* Component menangani fungsi spesifik.
* UI Component bersifat generik dan dapat digunakan ulang.

---

# 10. Data Flow

Alur data utama:

```text
Content Collections

↓

Schema Validation

↓

Page Generation

↓

Components

↓

Browser
```

Semua data harus divalidasi melalui schema sebelum digunakan.

---

# 11. Styling Strategy

Strategi styling:

* CSS Modular bila diperlukan.
* Design Tokens sebagai sumber nilai desain.
* Variabel CSS untuk warna, tipografi, spacing, dan radius.
* Hindari inline style.
* Hindari duplikasi aturan CSS.

---

# 12. Performance Strategy

Target implementasi:

* Lighthouse Performance ≥ 95
* LCP < 2.5 s
* CLS < 0.1
* INP < 200 ms

Strategi:

* minimalkan JavaScript;
* optimalkan gambar;
* lazy loading untuk aset non-kritis;
* preload aset penting;
* gunakan font secara efisien.

---

# 13. Content Collections Strategy

Seluruh konten dikelola melalui Astro Content Collections.

Koleksi utama:

* blog
* tools
* prompts
* templates
* glossary
* news

Setiap koleksi memiliki schema TypeScript yang tervalidasi.

---

# 14. Error Handling

Website harus menyediakan:

* 404 Page
* 500 Page (bila menggunakan SSR)
* Empty State
* Loading State
* Error Boundary untuk komponen interaktif

Pengguna harus selalu mendapatkan pesan yang jelas ketika terjadi kesalahan.

---

# 15. Scalability

Arsitektur harus tetap optimal untuk:

* 1.000+ artikel
* 2.000+ AI Tools
* 5.000+ Prompt
* 2.000+ Template
* Ratusan kategori dan tag

Penambahan konten tidak boleh mengubah struktur dasar proyek.

---

# 16. Anti-pattern

Hindari praktik berikut:

* JavaScript pada seluruh halaman tanpa kebutuhan.
* Komponen dengan lebih dari satu tanggung jawab utama.
* Hardcoded data di dalam komponen.
* Inline CSS berulang.
* Folder yang tidak memiliki tujuan jelas.
* Logika bisnis di dalam halaman (`.astro`).

---

# 17. Acceptance Criteria

Implementasi dianggap sesuai apabila:

* [ ] Menggunakan Astro 5.x.
* [ ] Menggunakan TypeScript strict mode.
* [ ] Mayoritas halaman menggunakan SSG.
* [ ] Komponen interaktif menggunakan Islands Architecture.
* [ ] Seluruh konten berasal dari Content Collections.
* [ ] Struktur Layout → Section → Component diterapkan.
* [ ] Target performa sesuai dokumen `19-PERFORMANCE.md`.
* [ ] Konsisten dengan seluruh keputusan pada `docs/redesign/`.

---

# 18. Hubungan dengan Dokumen Lain

Dokumen ini menjadi dasar bagi:

* 02-FOLDER-STRUCTURE.md
* 03-COMPONENT-SPECIFICATION.md
* 04-CONTENT-COLLECTIONS.md
* 05-ROUTING.md
* 06-DATA-FLOW.md
* 09-PERFORMANCE-IMPLEMENTATION.md

---

# 19. Changelog

## v1.0

* Menetapkan arsitektur Astro untuk AI Praktis Indonesia.
* Menentukan strategi rendering, hidrasi, layout, routing, dan data flow.
* Menetapkan prinsip penggunaan Astro Content Collections dan Islands Architecture.
* Menjadi acuan implementasi teknis seluruh proyek.
