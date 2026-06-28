# AI Praktis Indonesia v2
# 22-ANIMATION.md

> **Document Version:** 2.1
> **Status:** Living Documentation
> **Last Updated:** June 2026

---

# 1. Tujuan Dokumen

Dokumen ini mendefinisikan Motion Design System AI Praktis Indonesia.

Motion digunakan untuk:

- meningkatkan pengalaman pengguna;
- memberikan feedback visual;
- memperjelas perpindahan state;
- membantu navigasi;
- memperkuat identitas visual.

Motion bukan sekadar dekorasi.

---

# 2. Filosofi Motion

## Functional First

Animasi harus memiliki tujuan yang jelas.

---

## Fast & Lightweight

Animasi tidak boleh mengurangi performa website.

---

## Consistent

Semua komponen menggunakan prinsip motion yang sama.

---

## Accessible

Motion harus menghormati preferensi pengguna.

---

# 3. Motion Principles

Setiap animasi harus memenuhi minimal satu tujuan berikut:

- Memberikan feedback.
- Menunjukkan perubahan state.
- Membantu orientasi pengguna.
- Mengarahkan perhatian.
- Mengurangi kebingungan.

Jika tidak memiliki tujuan tersebut, animasi sebaiknya tidak digunakan.

---

# 4. Animation Technology

Prioritas implementasi:

1. CSS Transitions
2. CSS Animations
3. Web Animations API
4. JavaScript (jika benar-benar diperlukan)

Gunakan JavaScript hanya untuk animasi kompleks yang tidak dapat dicapai dengan CSS.

---

# 5. Motion Tokens

## Duration

| Token | Nilai |
|--------|-------:|
| motion-instant | 0 ms |
| motion-fast | 120 ms |
| motion-normal | 200 ms |
| motion-medium | 300 ms |
| motion-slow | 500 ms |

---

## Easing

Gunakan easing yang konsisten.

Contoh:

```css
ease-out
ease-in-out
linear
```

Hindari easing yang terlalu ekstrem.

---

# 6. Hover Animations

Hover digunakan untuk:

- Button
- Link
- Card
- Navigation
- Tool Card
- Prompt Card
- Template Card

Hover harus:

- ringan;
- cepat;
- tidak mengubah layout.

---

# 7. Focus Animations

Saat elemen menerima fokus:

- tampilkan focus ring yang jelas;
- hindari animasi yang mengganggu;
- pertahankan aksesibilitas.

---

# 8. Button States

Setiap tombol memiliki state:

```text
Default

↓

Hover

↓

Focus

↓

Active

↓

Loading

↓

Disabled
```

Transisi antar state harus halus.

---

# 9. Card Animations

Card dapat memiliki:

- hover elevation;
- shadow transition;
- border transition;
- subtle scale (opsional).

Skala maksimum yang direkomendasikan:

```
1.02
```

---

# 10. Navigation Animations

Animasi digunakan pada:

- mobile menu;
- dropdown;
- mega menu;
- breadcrumb (jika diperlukan).

Durasi maksimal:

200–250 ms.

---

# 11. Page Transition

Transisi halaman harus:

- cepat;
- tidak menghalangi navigasi;
- tidak memperlambat rendering.

Default:

Tanpa page transition yang berat.

---

# 12. Scroll Animation

Scroll animation hanya digunakan bila memberikan manfaat.

Contoh:

- reveal section;
- fade in;
- timeline;
- progress indicator.

Animasi scroll tidak boleh menjadi syarat untuk melihat konten.

---

# 13. Loading States

Gunakan loading state yang jelas.

Contoh:

- Skeleton UI
- Progress Bar
- Spinner (hanya bila diperlukan)

Skeleton lebih disukai daripada spinner untuk konten yang memerlukan waktu muat.

---

# 14. Skeleton UI

Skeleton digunakan pada:

- Tool Cards
- Prompt Cards
- Template Cards
- Search Results
- Article List

Skeleton harus menyerupai tata letak konten sebenarnya.

---

# 15. Empty States

Empty state harus memberikan:

- penjelasan singkat;
- tindakan yang dapat dilakukan;
- CTA yang relevan.

Contoh:

- "Belum ada hasil pencarian."
- "Coba kata kunci lain."

---

# 16. Success & Error Feedback

Status yang didukung:

- Success
- Warning
- Error
- Information

Feedback dapat berupa:

- toast;
- inline message;
- banner.

---

# 17. Search Animation

Animasi pada fitur pencarian:

- autocomplete;
- loading suggestion;
- filter transition.

Animasi harus terasa instan.

---

# 18. Reduced Motion

Hormati preferensi pengguna.

Gunakan:

```css
@media (prefers-reduced-motion: reduce)
```

Ketika aktif:

- nonaktifkan animasi dekoratif;
- kurangi durasi;
- pertahankan fungsi penting.

---

# 19. Performance Guidelines

Animasikan properti berikut bila memungkinkan:

- opacity
- transform

Hindari animasi pada:

- width
- height
- top
- left
- margin

karena dapat memicu layout recalculation.

---

# 20. Motion Checklist

Checklist minimum:

- Animasi memiliki tujuan.
- Durasi konsisten.
- Hover ringan.
- Focus terlihat.
- Reduced Motion didukung.
- Tidak mengganggu Core Web Vitals.
- Tidak menyebabkan layout shift.

---

# 21. Future Motion Roadmap

```text
Shared Element Transition

View Transition API

Advanced Skeleton

Interactive Tutorials

Animated Charts

Contextual Micro-interactions
```

Implementasi dilakukan bertahap sesuai kebutuhan.

---

# 22. Acceptance Criteria

- [ ] Motion mengikuti prinsip Functional First.
- [ ] Motion Tokens digunakan secara konsisten.
- [ ] Hover dan focus memiliki feedback visual.
- [ ] Reduced Motion didukung.
- [ ] Tidak ada animasi yang menghambat performa.
- [ ] Skeleton UI digunakan pada konten dinamis.
- [ ] Tidak terjadi layout shift akibat animasi.

---

# 23. Hubungan dengan Dokumen Lain

Dokumen ini bergantung pada:

- 09-DESIGN-SYSTEM.md
- 10-DESIGN-TOKENS.md
- 11-COMPONENT-INVENTORY.md
- 19-PERFORMANCE.md
- 20-ACCESSIBILITY.md
- 23-SEARCH.md

---

# 24. Changelog

## v2.1

- Menetapkan Motion Design System sebagai bagian dari arsitektur produk.
- Mendefinisikan Motion Principles dan Motion Tokens.
- Menambahkan panduan untuk hover, focus, loading, skeleton, dan page transition.
- Menetapkan dukungan Reduced Motion sesuai preferensi pengguna.
- Menyelaraskan motion dengan target performa dan aksesibilitas website.