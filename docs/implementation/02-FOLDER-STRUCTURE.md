# AI Praktis Indonesia v2

# 02-FOLDER-STRUCTURE.md

> **Document Version:** 1.0
> **Status:** Active
> **Last Updated:** June 2026

---

# 1. Tujuan

Dokumen ini mendefinisikan struktur folder resmi proyek AI Praktis Indonesia.

Seluruh source code harus mengikuti struktur ini agar mudah dipahami, mudah dipelihara, dan siap berkembang tanpa perlu melakukan reorganisasi besar di masa depan.

---

# 2. Prinsip Struktur Folder

Struktur proyek mengikuti prinsip berikut:

* Feature-oriented.
* Mudah dinavigasi.
* Konsisten.
* Modular.
* Scalable.
* Mudah ditemukan.
* Tidak ada folder tanpa tujuan.

---

# 3. Root Structure

```text
/
├── .github/
├── .vscode/
├── docs/
│   ├── redesign/
│   └── implementation/
├── public/
├── src/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── README.md
└── LICENSE
```

Keterangan:

* **docs/** : Dokumentasi proyek.
* **public/** : File statis yang tidak diproses Astro.
* **src/** : Seluruh source code aplikasi.

---

# 4. Struktur Folder `src`

```text
src/
├── assets/
├── components/
├── config/
├── content/
├── data/
├── layouts/
├── lib/
├── pages/
├── scripts/
├── styles/
├── types/
└── utils/
```

---

# 5. Assets

```text
assets/
├── images/
├── illustrations/
├── icons/
├── logos/
└── fonts/
```

Digunakan untuk aset yang diproses saat build.

---

# 6. Components

```text
components/
├── ui/
├── common/
├── layout/
├── navigation/
├── cards/
├── forms/
├── search/
├── seo/
├── blog/
├── tools/
├── prompts/
├── templates/
└── home/
```

### Aturan

* Satu komponen = satu folder jika kompleks.
* Nama menggunakan PascalCase.
* Hindari komponen dengan banyak tanggung jawab.

Contoh:

```text
components/cards/ToolCard/
├── ToolCard.astro
├── ToolCard.css
└── index.ts
```

---

# 7. Config

```text
config/
├── site.ts
├── navigation.ts
├── seo.ts
├── analytics.ts
└── features.ts
```

Berisi konfigurasi global proyek.

---

# 8. Content

```text
content/
├── blog/
├── tools/
├── prompts/
├── templates/
├── glossary/
├── news/
└── config.ts
```

Semua koleksi dikelola melalui Astro Content Collections.

---

# 9. Data

```text
data/
├── authors/
├── categories/
├── tags/
├── faqs/
└── menus/
```

Digunakan untuk data statis yang tidak termasuk Content Collections.

---

# 10. Layouts

```text
layouts/
├── BaseLayout.astro
├── MarketingLayout.astro
├── ContentLayout.astro
├── DocumentationLayout.astro
└── ErrorLayout.astro
```

Layout bertanggung jawab atas struktur halaman, bukan logika bisnis.

---

# 11. Lib

```text
lib/
├── analytics/
├── search/
├── seo/
├── markdown/
├── sitemap/
└── api/
```

Berisi modul yang berhubungan dengan layanan atau integrasi.

---

# 12. Pages

```text
pages/
├── index.astro
├── blog/
├── tools/
├── prompts/
├── templates/
├── categories/
├── tags/
├── search/
├── about/
├── contact/
├── privacy/
├── terms/
└── 404.astro
```

Mengikuti file-based routing Astro.

---

# 13. Scripts

```text
scripts/
├── generate-sitemap.ts
├── generate-rss.ts
├── optimize-images.ts
└── validate-content.ts
```

Digunakan untuk otomasi build dan utilitas pengembangan.

---

# 14. Styles

```text
styles/
├── globals.css
├── reset.css
├── typography.css
├── utilities.css
├── animations.css
└── tokens.css
```

Semua Design Tokens berasal dari `tokens.css`.

---

# 15. Types

```text
types/
├── blog.ts
├── tool.ts
├── prompt.ts
├── template.ts
└── global.ts
```

Seluruh tipe bersama didefinisikan di sini.

---

# 16. Utils

```text
utils/
├── date.ts
├── format.ts
├── slug.ts
├── reading-time.ts
└── string.ts
```

Berisi fungsi utilitas yang tidak memiliki dependensi framework.

---

# 17. Penamaan File

| Jenis    | Format     |
| -------- | ---------- |
| Komponen | PascalCase |
| Layout   | PascalCase |
| Utility  | camelCase  |
| Type     | camelCase  |
| CSS      | kebab-case |
| Markdown | kebab-case |

Contoh:

```text
ToolCard.astro
ContentLayout.astro
reading-time.ts
tool-card.css
cara-menggunakan-chatgpt.md
```

---

# 18. Folder yang Dihindari

Jangan membuat folder umum seperti:

```text
misc/
helpers/
others/
new/
temp/
backup/
```

Setiap folder harus memiliki tujuan yang jelas.

---

# 19. Scalability

Struktur ini harus tetap nyaman digunakan meskipun proyek berkembang menjadi:

* 1.000+ artikel
* 2.000+ AI Tools
* 5.000+ Prompt
* 2.000+ Template
* Puluhan ribu file konten

Jika diperlukan, pengelompokan dilakukan berdasarkan fitur tanpa mengubah struktur utama.

---

# 20. Acceptance Criteria

* [ ] Struktur folder konsisten.
* [ ] Tidak ada folder tanpa tujuan.
* [ ] Penamaan file mengikuti standar.
* [ ] Content Collections dipisahkan dari data statis.
* [ ] Components terorganisasi berdasarkan fitur.
* [ ] Layout dan Pages memiliki tanggung jawab yang jelas.
* [ ] Struktur siap untuk pengembangan jangka panjang.

---

# 21. Hubungan dengan Dokumen Lain

Dokumen ini berkaitan langsung dengan:

* 01-ASTRO-ARCHITECTURE.md
* 03-COMPONENT-SPECIFICATION.md
* 04-CONTENT-COLLECTIONS.md
* 05-ROUTING.md
* 06-DATA-FLOW.md
* 10-DESIGN-SYSTEM-IMPLEMENTATION.md

---

# 22. Changelog

## v1.0

* Menetapkan struktur folder resmi proyek.
* Mendefinisikan fungsi setiap direktori utama.
* Menetapkan konvensi penamaan file dan folder.
* Menyiapkan struktur yang modular, scalable, dan sesuai dengan arsitektur Astro.
