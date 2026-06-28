# AI Praktis Indonesia v2

# 10-DESIGN-TOKENS.md

> **Document Version:** 2.1
> **Status:** Living Documentation
> **Last Updated:** June 2026

---

# 1. Tujuan Dokumen

Dokumen ini mendefinisikan seluruh Design Tokens AI Praktis Indonesia.

Design Tokens adalah sumber tunggal (Single Source of Truth) untuk seluruh nilai desain yang digunakan oleh:

* UI Design
* Astro Components
* CSS Variables
* Utility Classes
* Dark Mode
* Future Design Tools

Tidak diperbolehkan menggunakan nilai visual secara hardcode di komponen jika sudah tersedia sebagai token.

---

# 2. Filosofi Design Tokens

Seluruh token mengikuti prinsip berikut.

## Semantic First

Gunakan nama berdasarkan fungsi, bukan warna.

Contoh:

```text
--color-primary
```

lebih baik daripada

```text
--blue-500
```

---

## Reusable

Satu token dapat digunakan oleh seluruh halaman.

---

## Consistent

Nilai yang sama tidak boleh ditulis berulang.

---

## Scalable

Token harus mendukung penambahan tema baru di masa depan.

---

# 3. Hierarki Token

```text
Core Tokens
│
├── Color
├── Typography
├── Spacing
├── Radius
├── Shadow
├── Breakpoint
└── Motion

↓

Semantic Tokens

↓

Component Tokens
```

---

# 4. Core Color Tokens

Core Token adalah nilai dasar.

Contoh struktur:

```text
Primary

Neutral

Success

Warning

Danger

Info
```

Core Token tidak digunakan langsung oleh komponen.

---

# 5. Semantic Color Tokens

Semantic Token digunakan oleh UI.

Contoh:

```text
Background

Surface

Surface Elevated

Border

Text Primary

Text Secondary

Text Muted

Primary

Primary Hover

Success

Warning

Danger

Info

Link

Focus Ring
```

Komponen hanya menggunakan Semantic Token.

---

# 6. Typography Tokens

Typography terdiri dari:

```text
Font Family

Font Size

Font Weight

Line Height

Letter Spacing
```

Ukuran menggunakan skala yang konsisten.

---

# 7. Font Scale

Disarankan menggunakan skala modular.

Contoh:

```text
xs
sm
base
lg
xl
2xl
3xl
4xl
5xl
6xl
```

Ukuran tidak ditulis langsung pada komponen.

---

# 8. Font Weight

Standar:

```text
Regular

Medium

Semibold

Bold
```

Hindari terlalu banyak variasi.

---

# 9. Spacing Tokens

Spacing menggunakan sistem 4px.

Contoh:

```text
0

4

8

12

16

20

24

32

40

48

64

80

96
```

Spacing menjadi dasar seluruh layout.

---

# 10. Border Radius Tokens

Gunakan jumlah radius yang terbatas.

```text
None

Small

Medium

Large

XL

Full
```

---

# 11. Shadow Tokens

Shadow dibagi menjadi beberapa level.

```text
None

XS

SM

MD

LG

XL
```

Gunakan shadow hanya untuk memperjelas elevasi.

---

# 12. Elevation Tokens

Elevation memiliki level:

```text
Base

Raised

Overlay

Modal

Popover
```

Elevation membantu menentukan urutan visual.

---

# 13. Border Tokens

Border memiliki token untuk:

* ketebalan;
* warna;
* state aktif;
* state fokus.

---

# 14. Layout Tokens

Layout terdiri dari:

```text
Container Width

Content Width

Sidebar Width

Header Height

Footer Height
```

Nilai harus konsisten di seluruh website.

---

# 15. Breakpoint Tokens

Breakpoint standar.

```text
Mobile

Tablet

Laptop

Desktop

Wide
```

Gunakan pendekatan Mobile First.

---

# 16. Grid Tokens

Grid mendefinisikan:

* jumlah kolom;
* gutter;
* margin;
* container.

Grid digunakan secara konsisten.

---

# 17. Motion Tokens

Motion terdiri dari:

```text
Duration Fast

Duration Normal

Duration Slow

Ease In

Ease Out

Ease In Out
```

Animasi tidak boleh menggunakan nilai acak.

---

# 18. Z-Index Tokens

Urutan layer.

```text
Base

Sticky Header

Dropdown

Drawer

Modal

Toast

Tooltip
```

Hindari angka z-index yang ditulis langsung.

---

# 19. Opacity Tokens

Gunakan token untuk opacity.

Contoh:

```text
Disabled

Overlay

Hover

Focus
```

---

# 20. Icon Tokens

Ikon memiliki ukuran standar.

```text
XS

SM

MD

LG

XL
```

Seluruh ikon menggunakan skala yang sama.

---

# 21. Component Token Strategy

Komponen tidak menggunakan Core Token secara langsung.

Alur:

```text
Core Token

↓

Semantic Token

↓

Component Token

↓

Component
```

Contoh:

```text
Primary Blue

↓

Primary Background

↓

Button Primary Background

↓

Primary Button
```

Dengan strategi ini, perubahan tema tidak memerlukan perubahan komponen.

---

# 22. Dark Mode Strategy

Dark Mode menggunakan Semantic Token yang berbeda.

Core Token tetap sama.

Contoh:

```text
Background

↓

White (Light)

↓

Neutral 950 (Dark)
```

Komponen tidak mengetahui apakah sedang berada pada mode terang atau gelap.

---

# 23. CSS Variable Mapping

Implementasi direkomendasikan:

```css
:root {
  --color-background: ...;
  --color-surface: ...;
  --color-text-primary: ...;

  --spacing-md: ...;

  --radius-md: ...;

  --shadow-sm: ...;

  --font-size-base: ...;
}
```

Komponen hanya menggunakan CSS Variable.

---

# 24. Naming Convention

Gunakan format:

```text
--category-name-size
```

Contoh:

```text
--color-primary

--spacing-lg

--radius-md

--shadow-xl

--font-size-base
```

Gunakan penamaan yang konsisten.

---

# 25. Design Tool Compatibility

Design Tokens harus dapat digunakan oleh:

* CSS Variables
* Astro
* Tailwind (opsional)
* Figma Variables
* Style Dictionary (masa depan)

---

# 26. Acceptance Criteria

* [ ] Seluruh nilai desain berasal dari token.
* [ ] Tidak ada nilai visual hardcode pada komponen.
* [ ] Semantic Token digunakan oleh seluruh UI.
* [ ] Mendukung Light Mode dan Dark Mode.
* [ ] Mudah dipetakan ke CSS Variables.
* [ ] Siap digunakan pada Figma dan Astro.

---

# 27. Hubungan dengan Dokumen Lain

Dokumen ini menjadi dasar bagi:

* 09-DESIGN-SYSTEM.md
* 11-COMPONENT-INVENTORY.md
* 20-ACCESSIBILITY.md
* 22-ANIMATION.md

---

# 28. Changelog

## v2.1

* Menetapkan Design Tokens sebagai sumber tunggal seluruh nilai desain.
* Memisahkan Core Token, Semantic Token, dan Component Token.
* Mendefinisikan strategi implementasi untuk CSS Variables, Astro, dan Design Tools.
* Menambahkan dukungan Light Mode, Dark Mode, serta kompatibilitas dengan sistem desain di masa depan.
