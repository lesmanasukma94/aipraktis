# AI Praktis Indonesia v2

# 21-CODING-STANDARDS.md

> **Document Version:** 1.0
> **Status:** Active
> **Last Updated:** June 2026

---

# 1. Tujuan

Dokumen ini mendefinisikan standar penulisan kode (Coding Standards) untuk AI Praktis Indonesia.

Tujuannya adalah:

* menjaga konsistensi kode;
* meningkatkan keterbacaan;
* mempermudah pemeliharaan;
* mengurangi bug;
* mendukung skalabilitas proyek.

Seluruh implementasi wajib mengikuti standar dalam dokumen ini.

---

# 2. Prinsip Utama

Seluruh kode mengikuti prinsip berikut.

* Readability First
* Simplicity Over Cleverness
* Reusability
* Consistency
* Performance by Default
* Accessibility by Default
* Type Safety
* Documentation Driven

Kode lebih sering dibaca daripada ditulis.

---

# 3. Teknologi

Standar ini berlaku untuk:

* Astro
* TypeScript
* Tailwind CSS
* Markdown
* Content Collections

---

# 4. Struktur Folder

Kode mengikuti struktur proyek yang telah didefinisikan pada:

`02-FOLDER-STRUCTURE.md`

Tidak membuat folder baru tanpa alasan yang jelas.

---

# 5. Penamaan File

Gunakan PascalCase untuk komponen.

```text
ArticleCard.astro

HeroSection.astro

SearchInput.astro
```

Gunakan kebab-case untuk halaman.

```text
ai-tools.astro

prompt-library.astro

template-library.astro
```

Gunakan camelCase untuk utilitas.

```text
formatDate.ts

generateSlug.ts

readingTime.ts
```

---

# 6. Penamaan Variabel

Gunakan nama yang deskriptif.

Baik:

```ts
const articleCount
const featuredTools
const relatedArticles
```

Hindari:

```ts
const a
const data
const temp
```

---

# 7. Konstanta

Gunakan huruf besar untuk konstanta global.

```ts
const POSTS_PER_PAGE = 12

const MAX_RELATED_ARTICLES = 4
```

---

# 8. TypeScript

Gunakan TypeScript secara penuh.

* Hindari `any`.
* Gunakan type atau interface.
* Gunakan inferensi jika sudah jelas.
* Validasi data eksternal.

Contoh:

```ts
interface Article {
  title: string
  slug: string
  publishedAt: Date
}
```

---

# 9. Fungsi

Satu fungsi hanya memiliki satu tanggung jawab.

Baik:

```ts
formatDate()

calculateReadingTime()

generateSlug()
```

Hindari fungsi yang melakukan banyak pekerjaan sekaligus.

---

# 10. Komponen Astro

Komponen harus:

* kecil;
* reusable;
* memiliki satu tanggung jawab;
* mudah diuji.

Jika komponen terlalu besar, pecah menjadi beberapa komponen.

---

# 11. Props

Props harus memiliki tipe yang jelas.

```ts
interface Props {
  title: string
  description?: string
}
```

Hindari props yang tidak digunakan.

---

# 12. Styling

Seluruh styling menggunakan Tailwind CSS.

Aturan:

* gunakan utility class;
* hindari inline style;
* hindari CSS duplikat;
* gunakan design tokens.

Jika styling kompleks dan digunakan berulang, buat komponen.

---

# 13. Import

Urutan import:

1. Library
2. Astro
3. Components
4. Layout
5. Utils
6. Types
7. Styles

Contoh:

```ts
import type { CollectionEntry } from "astro:content"

import BaseLayout from "@/layouts/BaseLayout.astro"

import ArticleCard from "@/components/blog/ArticleCard.astro"

import { formatDate } from "@/utils/formatDate"
```

---

# 14. Magic Number

Hindari angka tanpa konteks.

Buruk:

```ts
if (articles.length > 8)
```

Baik:

```ts
const FEATURED_ARTICLE_LIMIT = 8

if (articles.length > FEATURED_ARTICLE_LIMIT)
```

---

# 15. Error Handling

Tangani setiap kemungkinan error.

* tampilkan fallback;
* jangan membiarkan aplikasi gagal tanpa penjelasan;
* catat error bila diperlukan.

---

# 16. Komentar

Komentar digunakan untuk menjelaskan *mengapa*, bukan *apa*.

Baik:

```ts
// Mengurutkan artikel berdasarkan tanggal publikasi terbaru
```

Hindari komentar yang hanya mengulang isi kode.

---

# 17. Performance

Selalu pertimbangkan performa.

* minimalkan JavaScript;
* gunakan Astro Islands bila diperlukan;
* optimalkan gambar;
* hindari render yang tidak perlu;
* gunakan lazy loading.

---

# 18. Accessibility

Seluruh komponen harus:

* mendukung keyboard;
* memiliki focus state;
* menggunakan heading yang benar;
* memiliki alt text;
* memenuhi WCAG 2.2 AA.

---

# 19. SEO

Komponen yang memengaruhi SEO harus:

* mendukung metadata;
* menggunakan semantic HTML;
* memiliki heading yang benar;
* tidak menghasilkan konten duplikat.

---

# 20. Clean Code Checklist

Sebelum commit, pastikan:

* [ ] Nama variabel jelas.
* [ ] Fungsi memiliki satu tanggung jawab.
* [ ] Tidak ada kode mati.
* [ ] Tidak ada duplikasi.
* [ ] TypeScript tanpa `any`.
* [ ] Styling mengikuti Design System.
* [ ] Komponen reusable bila memungkinkan.

---

# 21. Code Review Checklist

Reviewer memeriksa:

* arsitektur;
* keterbacaan;
* performa;
* aksesibilitas;
* SEO;
* keamanan;
* konsistensi dengan dokumentasi.

---

# 22. Best Practices

* Tulis kode sesederhana mungkin.
* Gunakan kembali komponen yang sudah ada.
* Hindari optimasi prematur.
* Dokumentasikan keputusan penting.
* Refactor bila kompleksitas meningkat.

---

# 23. Anti-pattern

Hindari:

* penggunaan `any`;
* fungsi yang terlalu panjang;
* komponen dengan banyak tanggung jawab;
* inline style;
* hardcoded value;
* duplikasi logika;
* import yang tidak digunakan;
* komentar berlebihan.

---

# 24. Acceptance Criteria

Standar dianggap terpenuhi apabila:

* [ ] Seluruh kode menggunakan TypeScript.
* [ ] Penamaan konsisten.
* [ ] Tidak ada `any` tanpa alasan yang kuat.
* [ ] Komponen reusable.
* [ ] Styling mengikuti Design System.
* [ ] Tidak ada duplikasi signifikan.
* [ ] Build dan lint berhasil.

---

# 25. Hubungan dengan Dokumen Lain

Dokumen ini berkaitan dengan:

* 01-ASTRO-ARCHITECTURE.md
* 02-FOLDER-STRUCTURE.md
* 03-COMPONENT-SPECIFICATION.md
* 10-DESIGN-SYSTEM-IMPLEMENTATION.md
* 15-TESTING.md
* 20-CONTRIBUTING.md

---

# 26. Changelog

## v1.0

* Menetapkan standar penulisan kode untuk Astro, TypeScript, dan Tailwind CSS.
* Mendefinisikan konvensi penamaan, struktur komponen, praktik terbaik, dan checklist code review.
* Menjadi acuan utama seluruh implementasi kode pada AI Praktis Indonesia.
