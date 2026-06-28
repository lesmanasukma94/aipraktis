# AI Praktis Indonesia v2

# 10-DESIGN-SYSTEM-IMPLEMENTATION.md

> **Document Version:** 1.0
> **Status:** Active
> **Last Updated:** June 2026

---

# 1. Tujuan

Dokumen ini mendefinisikan standar implementasi Design System AI Praktis Indonesia.

Design System bertujuan untuk:

* menjaga konsistensi antarmuka;
* mempercepat pengembangan;
* mengurangi duplikasi kode;
* mempermudah pemeliharaan;
* mendukung skalabilitas proyek.

Dokumen ini menjadi acuan implementasi seluruh komponen UI.

---

# 2. Prinsip Design System

Seluruh implementasi mengikuti prinsip berikut:

* Design Token First
* Component First
* Reusable
* Composable
* Accessible
* Mobile First
* Consistent
* Minimal

---

# 3. Arsitektur Design System

```text
Design Tokens
        │
        ▼
Foundation
        │
        ▼
Base Components
        │
        ▼
Composite Components
        │
        ▼
Page Sections
        │
        ▼
Pages
```

Setiap layer hanya bergantung pada layer di bawahnya.

---

# 4. Struktur Folder

```text
src/

components/
│
├── ui/
│   ├── Button/
│   ├── Badge/
│   ├── Card/
│   ├── Input/
│   ├── Select/
│   ├── Checkbox/
│   ├── Radio/
│   ├── Toggle/
│   ├── Tabs/
│   ├── Accordion/
│   ├── Alert/
│   ├── Modal/
│   ├── Tooltip/
│   ├── Breadcrumb/
│   ├── Pagination/
│   ├── Search/
│   └── EmptyState/
│
├── layout/
│   ├── Header/
│   ├── Footer/
│   ├── Sidebar/
│   └── Container/
│
├── sections/
│   ├── Hero/
│   ├── FeaturedTools/
│   ├── LatestArticles/
│   ├── Newsletter/
│   └── FAQ/
│
└── cards/
    ├── ArticleCard/
    ├── ToolCard/
    ├── PromptCard/
    └── TemplateCard/
```

---

# 5. Design Tokens

Seluruh nilai desain berasal dari Design Tokens.

Kategori token:

* Color
* Typography
* Spacing
* Radius
* Border
* Shadow
* Opacity
* Breakpoint
* Z-index
* Motion

Komponen tidak boleh menggunakan nilai hardcoded.

---

# 6. Styling Strategy

Aturan:

* gunakan Design Tokens;
* hindari inline style;
* hindari duplikasi class;
* gunakan utility class atau pendekatan styling yang telah dipilih proyek secara konsisten.

---

# 7. Component Hierarchy

Urutan komponen:

```text
Button

↓

Card

↓

ArticleCard

↓

LatestArticlesSection

↓

Homepage
```

Komponen kecil menjadi fondasi komponen yang lebih besar.

---

# 8. Component API

Setiap komponen memiliki API yang konsisten.

Contoh properti:

* variant
* size
* disabled
* loading
* icon
* href
* class

Gunakan nama properti yang sama untuk fungsi yang sama di seluruh komponen.

---

# 9. Variant

Komponen mendukung variant bila diperlukan.

Contoh:

Button:

* primary
* secondary
* outline
* ghost
* danger

Badge:

* success
* warning
* info
* neutral

---

# 10. Size

Ukuran standar:

* xs
* sm
* md
* lg
* xl

Gunakan ukuran yang sama di seluruh komponen.

---

# 11. State

Komponen harus mendukung state berikut bila relevan:

* default
* hover
* focus
* active
* disabled
* loading
* error
* success

---

# 12. Accessibility

Seluruh komponen harus:

* dapat digunakan dengan keyboard;
* memiliki focus indicator yang jelas;
* menggunakan elemen HTML semantik;
* memiliki label yang tepat;
* memenuhi WCAG 2.2 AA.

---

# 13. Responsive Behavior

Komponen harus:

* mobile-first;
* fleksibel terhadap berbagai ukuran layar;
* menghindari overflow horizontal;
* menggunakan breakpoint dari Design Tokens.

---

# 14. Layout Components

Komponen layout meliputi:

* Container
* Grid
* Stack
* Section
* Sidebar
* Header
* Footer

Komponen layout tidak mengandung logika bisnis.

---

# 15. Card Components

Card menjadi pola utama penyajian konten.

Jenis card:

* ArticleCard
* ToolCard
* PromptCard
* TemplateCard
* NewsCard

Semua card memiliki struktur visual yang konsisten.

---

# 16. Form Components

Komponen formulir meliputi:

* Input
* Textarea
* Select
* Checkbox
* Radio
* Toggle
* Button

Gunakan validasi dan pesan kesalahan yang konsisten.

---

# 17. Composition

Komponen dapat dikombinasikan menjadi section.

Contoh:

```text
Hero
+
SearchBar
+
FeaturedTools
+
LatestArticles
+
Newsletter
```

Section tidak boleh menduplikasi komponen yang sudah ada.

---

# 18. Anti-pattern

Hindari:

* nilai warna hardcoded;
* ukuran acak;
* komponen yang terlalu spesifik;
* duplikasi komponen dengan fungsi yang sama;
* styling berbeda untuk pola UI yang identik.

---

# 19. Best Practices

* Gunakan satu sumber Design Tokens.
* Dokumentasikan setiap komponen baru.
* Gunakan nama komponen yang deskriptif.
* Pecah komponen besar menjadi bagian kecil bila diperlukan.
* Utamakan komposisi dibanding pewarisan.

---

# 20. Acceptance Criteria

Implementasi dianggap sesuai apabila:

* [ ] Semua komponen menggunakan Design Tokens.
* [ ] Tidak ada nilai desain hardcoded.
* [ ] Komponen bersifat reusable.
* [ ] Variant dan size konsisten.
* [ ] Komponen memenuhi standar aksesibilitas.
* [ ] Responsive pada seluruh breakpoint.
* [ ] Struktur folder mengikuti standar.

---

# 21. Hubungan dengan Dokumen Lain

Dokumen ini berkaitan dengan:

* docs/redesign/09-DESIGN-SYSTEM.md
* docs/redesign/10-DESIGN-TOKENS.md
* docs/redesign/11-COMPONENT-INVENTORY.md
* 01-ASTRO-ARCHITECTURE.md
* 02-FOLDER-STRUCTURE.md

---

# 22. Changelog

## v1.0

* Menetapkan standar implementasi Design System.
* Mendefinisikan struktur komponen, Design Tokens, variant, state, layout, dan aksesibilitas.
* Menjadi acuan pengembangan seluruh antarmuka AI Praktis Indonesia.
