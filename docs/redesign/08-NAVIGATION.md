# AI Praktis Indonesia v2

# 08-NAVIGATION.md

> **Document Version:** 2.1
> **Status:** Living Documentation
> **Last Updated:** June 2026

---

# 1. Tujuan Dokumen

Dokumen ini mendefinisikan arsitektur navigasi AI Praktis Indonesia.

Navigasi merupakan sistem utama yang menghubungkan seluruh halaman, entitas, dan fitur website.

Dokumen ini menjadi acuan untuk:

* Header Navigation
* Mega Menu
* Mobile Navigation
* Search Navigation
* Footer Navigation
* Breadcrumb
* Internal Linking
* Navigation Components

---

# 2. Prinsip Navigasi

Navigasi mengikuti prinsip berikut.

## Search First

Sebagian besar pengguna datang untuk mencari sesuatu.

Karena itu Search menjadi elemen utama.

---

## Progressive Disclosure

Jangan tampilkan semua menu sekaligus.

Tampilkan informasi secara bertahap.

---

## Information Scent

Label menu harus langsung menjelaskan tujuan.

Contoh yang baik:

* AI Tools
* Learn
* Prompts
* Templates

Hindari label yang ambigu.

---

## Three Click Rule

Pengguna idealnya dapat mencapai halaman yang diinginkan dalam maksimal tiga klik.

---

## Consistency

Struktur desktop, tablet, dan mobile harus memiliki urutan yang sama.

---

# 3. Navigation Hierarchy

```text
Global Navigation
│
├── Header
├── Mega Menu
├── Search
├── Breadcrumb
├── Sidebar (halaman tertentu)
├── In-page Navigation
└── Footer
```

---

# 4. Header Navigation

Header terdiri dari:

```text
Logo

Primary Navigation

Search

Theme Toggle

CTA

Profile (Future)
```

Header selalu berada di bagian atas.

---

# 5. Primary Navigation

Menu utama.

```text
AI Tools

Learn

Prompts

Templates

Resources
```

Menu dibuat sesingkat mungkin.

---

# 6. Secondary Navigation

Berisi informasi perusahaan.

```text
About

Contact

Newsletter
```

Halaman legal tidak ditempatkan di header.

---

# 7. Header Behaviour

Saat halaman berada di posisi paling atas:

* Header transparan atau solid sesuai desain.
* Tinggi maksimum.

Saat pengguna mulai menggulir:

* Header menjadi sticky.
* Tinggi sedikit berkurang.
* Bayangan (shadow) muncul secara halus.
* Tidak mengubah posisi menu.

---

# 8. Mega Menu

Mega Menu hanya digunakan untuk pilar utama.

```text
AI Tools

Learn

Prompts

Templates

Resources
```

Menu lain cukup menggunakan dropdown biasa atau tautan langsung.

---

# 9. Mega Menu Structure

Contoh untuk **AI Tools**.

```text
AI Tools
│
├── Popular
├── Categories
├── By Use Case
├── By Industry
└── View All
```

Contoh untuk **Learn**.

```text
Learn
│
├── Tutorials
├── Guides
├── Reviews
├── Comparisons
├── AI News
└── View All
```

---

# 10. Search Navigation

Search tersedia pada seluruh halaman.

Search mampu menemukan:

* AI Tool
* Tutorial
* Prompt
* Template
* Glossary
* FAQ

Search merupakan navigasi utama, bukan fitur tambahan.

---

# 11. Breadcrumb Strategy

Breadcrumb digunakan pada seluruh halaman selain homepage.

Contoh:

```text
Home

↓

Learn

↓

Tutorial

↓

Cara Menggunakan ChatGPT
```

Breadcrumb membantu:

* SEO
* Navigasi
* Konteks halaman

---

# 12. Footer Navigation

Footer dibagi menjadi beberapa kelompok.

```text
Learn

AI Tools

Prompts

Templates

Resources

Company

Legal

Social
```

Footer menjadi pusat navigasi sekunder.

---

# 13. Mobile Navigation

Navigasi mobile menggunakan Drawer.

Isi drawer sama dengan navigasi desktop.

Urutan menu tidak berubah.

---

# 14. Mobile Search

Search ditempatkan di bagian atas Drawer.

Prioritas:

1. Search
2. Menu
3. CTA

---

# 15. Sidebar Navigation

Sidebar hanya digunakan pada halaman tertentu.

Contoh:

* Tutorial panjang
* Dokumentasi
* Glosarium
* Learning Path

Homepage tidak menggunakan sidebar.

---

# 16. In-page Navigation

Digunakan pada artikel yang panjang.

Berisi daftar heading.

Tujuan:

* meningkatkan pengalaman membaca;
* membantu navigasi cepat.

---

# 17. Internal Linking Strategy

Setiap halaman harus memiliki tautan menuju:

* Parent Category
* Related Content
* Related Tool
* Related Prompt
* Related Template

Tidak boleh ada orphan page.

---

# 18. Keyboard Navigation

Seluruh navigasi harus dapat digunakan dengan keyboard.

Minimal mendukung:

* Tab
* Shift + Tab
* Enter
* Escape
* Arrow Keys (Mega Menu)

---

# 19. Accessibility

Target:

* WCAG 2.2 AA
* Focus indicator terlihat jelas
* ARIA Label pada menu
* Landmark navigation
* Skip to Content

---

# 20. Performance

Target:

* Tidak menggunakan library navigasi yang berat.
* Mega Menu dimuat seperlunya.
* Ikon menggunakan SVG.
* Animasi ringan (<200 ms).
* Tidak ada layout shift saat header berubah menjadi sticky.

---

# 21. Komponen Navigasi

Komponen yang direkomendasikan:

```text
Header.astro

Logo.astro

PrimaryNav.astro

MegaMenu.astro

SearchButton.astro

SearchDialog.astro

ThemeToggle.astro

Breadcrumb.astro

Footer.astro

MobileDrawer.astro

SidebarNav.astro
```

Semua komponen harus reusable.

---

# 22. Navigation Data

Data menu tidak ditulis langsung pada komponen.

Contoh struktur:

```text
src/data/navigation/

header.ts

footer.ts

mega-menu.ts

breadcrumbs.ts
```

Dengan pendekatan ini, perubahan struktur menu tidak memerlukan perubahan komponen.

---

# 23. Future Expansion

Navigasi disiapkan untuk fitur masa depan.

```text
Dashboard

Bookmarks

Learning Paths

Collections

Community

Marketplace

Courses
```

Penambahan menu tidak boleh mengubah struktur utama.

---

# 24. Acceptance Criteria

* [ ] Header konsisten di seluruh halaman.
* [ ] Search tersedia di seluruh website.
* [ ] Mega Menu hanya digunakan pada pilar utama.
* [ ] Mobile Navigation setara dengan desktop.
* [ ] Breadcrumb tersedia pada seluruh halaman konten.
* [ ] Tidak ada orphan page.
* [ ] Seluruh komponen dapat digunakan kembali.

---

# 25. Hubungan dengan Dokumen Lain

Dokumen ini menjadi dasar bagi:

* 05-HOMEPAGE.md
* 09-DESIGN-SYSTEM.md
* 11-COMPONENT-INVENTORY.md
* 16-SEO.md
* 20-ACCESSIBILITY.md
* 23-SEARCH.md

---

# 26. Changelog

## v2.1

* Menetapkan arsitektur navigasi global.
* Mendefinisikan Header, Mega Menu, Search, Breadcrumb, dan Footer.
* Menambahkan strategi navigasi mobile, keyboard, dan aksesibilitas.
* Menetapkan pemisahan data navigasi dari komponen agar mudah dipelihara.
