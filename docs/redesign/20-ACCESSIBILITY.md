# AI Praktis Indonesia v2

# 20-ACCESSIBILITY.md

> **Document Version:** 2.1
> **Status:** Living Documentation
> **Last Updated:** June 2026

---

# 1. Tujuan Dokumen

Dokumen ini mendefinisikan Accessibility Architecture AI Praktis Indonesia.

Accessibility merupakan bagian dari kualitas produk dan harus dipertimbangkan sejak tahap desain hingga implementasi.

Tujuan utama:

* Memastikan website dapat digunakan oleh semua pengguna.
* Memenuhi standar WCAG 2.2 Level AA.
* Meningkatkan usability.
* Mendukung SEO.
* Mengurangi hambatan akses.

---

# 2. Filosofi Accessibility

## Inclusive by Default

Setiap fitur baru harus dapat diakses oleh sebanyak mungkin pengguna.

---

## Semantic First

Gunakan elemen HTML sesuai fungsinya sebelum menambahkan ARIA.

---

## Keyboard First

Seluruh fungsi website harus dapat digunakan menggunakan keyboard.

---

## Progressive Enhancement

Website tetap dapat digunakan meskipun JavaScript tidak aktif.

---

# 3. Standar yang Digunakan

Target minimum:

* WCAG 2.2 Level AA
* Semantic HTML5
* ARIA sesuai kebutuhan
* Accessible Rich Internet Applications Best Practices

---

# 4. Semantic HTML

Gunakan elemen HTML sesuai makna.

Contoh:

```text
<header>

<nav>

<main>

<article>

<section>

<aside>

<footer>
```

Hindari penggunaan `<div>` jika tersedia elemen semantik yang sesuai.

---

# 5. Heading Structure

Gunakan satu H1 pada setiap halaman.

Hierarki heading:

```text
H1

↓

H2

↓

H3

↓

H4
```

Heading harus mencerminkan struktur konten.

---

# 6. Keyboard Navigation

Seluruh fitur harus dapat diakses menggunakan keyboard.

Termasuk:

* Menu
* Dropdown
* Search
* Tabs
* Accordion
* Modal
* Carousel
* Form

Tidak boleh ada keyboard trap.

---

# 7. Focus Management

Focus harus:

* terlihat jelas;
* berpindah secara logis;
* kembali ke elemen pemicu setelah modal ditutup.

Jangan menghilangkan outline bawaan tanpa pengganti yang memadai.

---

# 8. Skip Links

Sediakan tautan "Lewati ke Konten Utama" pada awal halaman.

Tujuan:

* mempercepat navigasi keyboard;
* membantu pengguna screen reader.

---

# 9. Color & Contrast

Target minimum:

| Elemen      | Rasio Kontras |
| ----------- | ------------: |
| Teks normal |       4.5 : 1 |
| Teks besar  |         3 : 1 |
| Komponen UI |         3 : 1 |

Informasi tidak boleh hanya dibedakan berdasarkan warna.

---

# 10. Typography

Prinsip:

* ukuran teks nyaman dibaca;
* line-height memadai;
* panjang baris ideal;
* mendukung zoom hingga 200%.

Konten tidak boleh rusak ketika diperbesar.

---

# 11. Images

Seluruh gambar harus memiliki:

* alt text yang deskriptif;
* alt kosong (`alt=""`) untuk gambar dekoratif;
* caption bila diperlukan.

Informasi penting tidak boleh hanya disampaikan melalui gambar.

---

# 12. Forms

Form harus memiliki:

* label yang jelas;
* petunjuk pengisian;
* validasi yang mudah dipahami;
* pesan error yang spesifik.

Placeholder tidak boleh menggantikan label.

---

# 13. Buttons & Links

Button dan link harus:

* memiliki teks yang jelas;
* area klik yang memadai;
* fokus yang terlihat;
* dapat diakses melalui keyboard.

Hindari teks seperti "Klik di sini" tanpa konteks.

---

# 14. Tables

Gunakan:

* `<table>`
* `<thead>`
* `<tbody>`
* `<th>`
* `<caption>` bila diperlukan.

Tabel hanya digunakan untuk data tabular.

---

# 15. Media

Video harus mendukung:

* subtitle;
* transcript bila relevan;
* kontrol pemutaran yang dapat diakses.

Audio penting sebaiknya memiliki transkrip.

---

# 16. Motion & Animation

Hormati preferensi pengguna.

Gunakan:

```css
prefers-reduced-motion
```

Animasi tidak boleh menyebabkan gangguan atau kehilangan konteks.

---

# 17. Screen Reader Support

Pastikan:

* landmark tersedia;
* label dapat dibaca;
* status dinamis diumumkan bila diperlukan;
* urutan pembacaan logis.

Gunakan ARIA hanya jika HTML semantik tidak mencukupi.

---

# 18. Accessible Components

Seluruh komponen UI harus mendukung aksesibilitas.

Contoh:

* Navigation
* Search
* Cards
* Dialog
* Accordion
* Tabs
* Pagination
* Breadcrumb
* Toast Notification

Setiap komponen harus memiliki dokumentasi perilaku aksesibilitas.

---

# 19. Accessibility Testing

Lakukan pengujian menggunakan:

* keyboard only;
* screen reader;
* color contrast checker;
* Lighthouse Accessibility;
* pengujian manual pada berbagai perangkat.

Accessibility diuji sebelum setiap rilis utama.

---

# 20. Accessibility Checklist

Checklist minimum:

* Semantic HTML.
* Heading hierarchy benar.
* Keyboard navigation berfungsi.
* Focus terlihat.
* Alt text tersedia.
* Form memiliki label.
* Kontras memenuhi standar.
* Tidak ada keyboard trap.
* Tidak ada elemen yang hanya dapat digunakan dengan mouse.

---

# 21. Future Improvements

Roadmap:

```text
Accessibility Dashboard

Automated Accessibility Audit

Voice Navigation Support

High Contrast Theme

Accessibility Preferences

User Accessibility Profile
```

---

# 22. Acceptance Criteria

* [ ] Memenuhi WCAG 2.2 Level AA.
* [ ] Seluruh fitur dapat digunakan menggunakan keyboard.
* [ ] Semantic HTML digunakan secara konsisten.
* [ ] Kontras warna memenuhi standar.
* [ ] Seluruh gambar memiliki alt text yang sesuai.
* [ ] Form dapat diakses.
* [ ] Komponen UI terdokumentasi.
* [ ] Pengujian accessibility menjadi bagian dari proses rilis.

---

# 23. Hubungan dengan Dokumen Lain

Dokumen ini bergantung pada:

* 09-DESIGN-SYSTEM.md
* 10-DESIGN-TOKENS.md
* 11-COMPONENT-INVENTORY.md
* 16-SEO.md
* 19-PERFORMANCE.md
* 21-SECURITY.md
* 22-ANIMATION.md

---

# 24. Changelog

## v2.1

* Menetapkan Accessibility sebagai bagian dari arsitektur produk.
* Menargetkan WCAG 2.2 Level AA.
* Mendefinisikan standar Semantic HTML, Keyboard Navigation, Focus Management, dan Screen Reader Support.
* Menambahkan panduan untuk form, media, tabel, gambar, dan komponen UI.
* Menetapkan proses pengujian dan acceptance criteria untuk memastikan aksesibilitas tetap terjaga selama pengembangan.
