# AI Praktis Indonesia v2

# 09-DESIGN-SYSTEM.md

> **Document Version:** 2.1
> **Status:** Living Documentation
> **Last Updated:** June 2026

---

# 1. Tujuan Dokumen

Dokumen ini mendefinisikan Design System AI Praktis Indonesia.

Design System memastikan seluruh halaman, komponen, dan interaksi memiliki bahasa visual yang konsisten.

Dokumen ini menjadi dasar bagi:

* UI Design
* Frontend Development
* Component Library
* Accessibility
* Motion
* Design Tokens
* Branding

---

# 2. Filosofi Design System

Design System dibangun berdasarkan lima prinsip.

## Clarity

Konten selalu lebih penting daripada dekorasi.

Desain harus membantu pengguna memahami informasi.

---

## Consistency

Komponen yang sama harus selalu terlihat dan berperilaku sama.

---

## Simplicity

Kurangi elemen yang tidak memberikan nilai.

Hindari kompleksitas visual yang tidak perlu.

---

## Accessibility

Website harus dapat digunakan oleh sebanyak mungkin pengguna.

Aksesibilitas bukan fitur tambahan.

---

## Performance

Performa adalah bagian dari pengalaman pengguna.

Desain tidak boleh mengorbankan kecepatan.

---

# 3. Design Layers

Design System terdiri dari beberapa lapisan.

```text
Brand
│
├── Visual Language
├── Design Tokens
├── Layout System
├── Interaction System
├── Motion System
├── Component System
└── Content Presentation
```

Setiap lapisan memiliki tanggung jawab yang jelas.

---

# 4. Visual Language

Visual Language mendefinisikan identitas antarmuka.

Meliputi:

* warna;
* tipografi;
* ikonografi;
* ilustrasi;
* bentuk;
* bayangan;
* elevasi;
* ruang kosong (white space).

Detail teknis berada pada dokumen lain.

---

# 5. Layout System

Layout mengikuti prinsip berikut.

* Mobile First
* Responsive
* Content First
* Grid Based
* Consistent Spacing

Seluruh halaman menggunakan struktur container yang sama.

---

# 6. Responsive Philosophy

Website dirancang dengan pendekatan:

```text
Mobile

↓

Tablet

↓

Desktop

↓

Large Screen
```

Tidak ada halaman yang hanya dioptimalkan untuk desktop.

---

# 7. Typography System

Tipografi harus:

* mudah dibaca;
* konsisten;
* mendukung bahasa Indonesia;
* memiliki hierarki yang jelas.

Prinsip:

* satu keluarga font utama;
* ukuran berbasis skala;
* line-height yang nyaman;
* panjang baris optimal.

---

# 8. Color System

Palet warna dibagi menjadi:

```text
Primary

Secondary

Neutral

Success

Warning

Danger

Info
```

Seluruh warna harus memiliki peran yang jelas.

---

# 9. Iconography

Ikon digunakan untuk:

* memperjelas tindakan;
* membantu pemindaian visual;
* memperkuat navigasi.

Ikon tidak boleh menggantikan teks penting.

---

# 10. Illustration

Ilustrasi digunakan untuk:

* Hero
* Empty State
* Error State
* Tutorial

Kriteria:

* ringan;
* modern;
* konsisten;
* mendukung dark mode.

---

# 11. Interaction System

Semua elemen interaktif memiliki state.

Minimal:

```text
Default

Hover

Focus

Active

Disabled

Loading
```

Perubahan state harus jelas namun tidak mengganggu.

---

# 12. Motion System

Animasi digunakan untuk:

* memberi umpan balik;
* memperjelas transisi;
* membantu orientasi pengguna.

Animasi tidak digunakan sebagai dekorasi.

---

# 13. Content Presentation

Konten mengikuti pola yang konsisten.

Contoh urutan:

```text
Title

Description

Metadata

Body

Related Content

CTA
```

Tujuannya agar pengguna mudah mengenali struktur halaman.

---

# 14. Component Principles

Setiap komponen harus:

* reusable;
* modular;
* terdokumentasi;
* mudah diuji;
* mudah dipelihara.

Komponen tidak boleh bergantung pada konteks halaman tertentu.

---

# 15. Accessibility Principles

Seluruh komponen harus:

* dapat digunakan dengan keyboard;
* memiliki fokus yang terlihat;
* mendukung pembaca layar;
* memenuhi kontras warna minimum;
* menggunakan HTML semantik.

---

# 16. Performance Principles

Design System harus mendukung:

* CSS yang ringan;
* JavaScript seminimal mungkin;
* lazy loading bila sesuai;
* SVG untuk ikon;
* optimasi gambar.

---

# 17. Dark Mode

Dark Mode merupakan fitur bawaan.

Prinsip:

* warna tetap memiliki kontras yang baik;
* ilustrasi kompatibel;
* ikon tetap jelas;
* tidak menggunakan warna murni hitam atau putih.

---

# 18. Design Tokens

Seluruh nilai desain harus berasal dari Design Tokens.

Contoh:

* warna;
* spacing;
* radius;
* shadow;
* breakpoint;
* z-index.

Nilai hardcode di komponen harus dihindari.

---

# 19. Component Architecture

Komponen dibagi menjadi empat level.

```text
Primitives

↓

Base Components

↓

Composite Components

↓

Page Sections
```

Contoh:

```text
Button

↓

Card

↓

Search Card

↓

Homepage Hero
```

---

# 20. Naming Convention

Komponen menggunakan PascalCase.

Contoh:

```text
Button.astro

SearchBox.astro

HeroSection.astro

ArticleCard.astro

PromptCard.astro
```

Data menggunakan camelCase.

CSS mengikuti konvensi yang dipilih proyek secara konsisten.

---

# 21. Documentation Standard

Setiap komponen wajib memiliki dokumentasi minimal:

* tujuan;
* props;
* contoh penggunaan;
* state;
* aksesibilitas;
* dependensi.

---

# 22. Acceptance Criteria

* [ ] Bahasa visual konsisten.
* [ ] Komponen dapat digunakan kembali.
* [ ] Design Tokens menjadi sumber nilai desain.
* [ ] Responsif pada seluruh breakpoint.
* [ ] Mendukung dark mode.
* [ ] Memenuhi standar aksesibilitas.
* [ ] Mendukung performa tinggi.

---

# 23. Hubungan dengan Dokumen Lain

Dokumen ini menjadi dasar bagi:

* 10-DESIGN-TOKENS.md
* 11-COMPONENT-INVENTORY.md
* 20-ACCESSIBILITY.md
* 22-ANIMATION.md
* 23-SEARCH.md

---

# 24. Changelog

## v2.1

* Menetapkan filosofi Design System.
* Mendefinisikan lapisan desain dari Brand hingga Component System.
* Menentukan prinsip layout, interaksi, motion, aksesibilitas, dan performa.
* Menjadikan Design Tokens sebagai sumber tunggal seluruh nilai desain.
