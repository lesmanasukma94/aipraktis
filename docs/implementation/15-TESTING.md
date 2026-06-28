# AI Praktis Indonesia v2

# 15-TESTING.md

> **Document Version:** 1.0
> **Status:** Active
> **Last Updated:** June 2026

---

# 1. Tujuan

Dokumen ini mendefinisikan standar pengujian (Testing) untuk AI Praktis Indonesia.

Testing bertujuan untuk:

* menjaga kualitas aplikasi;
* mencegah regresi;
* memastikan fitur bekerja sesuai spesifikasi;
* menjaga performa dan SEO;
* meningkatkan kepercayaan sebelum rilis.

---

# 2. Prinsip Testing

Seluruh pengujian mengikuti prinsip berikut.

* Test Early
* Test Often
* Automated When Possible
* Repeatable
* Fast Feedback
* Quality First

---

# 3. Ruang Lingkup

Testing mencakup:

* Content Validation
* Build Validation
* Component Testing
* Accessibility Testing
* SEO Testing
* Performance Testing
* Cross Browser Testing
* Responsive Testing
* Manual Review

---

# 4. Testing Pipeline

```text
Developer
    │
    ▼
Local Validation
    │
    ▼
Build
    │
    ▼
Automated Testing
    │
    ▼
Preview Deployment
    │
    ▼
Manual Review
    │
    ▼
Production
```

Deployment ke production hanya dilakukan setelah seluruh tahapan berhasil.

---

# 5. Content Testing

Seluruh konten harus diperiksa:

* schema validation;
* frontmatter;
* slug;
* internal link;
* gambar;
* metadata SEO;
* heading structure.

Build harus gagal jika schema tidak valid.

---

# 6. Build Testing

Sebelum deployment:

* install dependency;
* type checking;
* Astro build;
* sitemap generation;
* search index generation.

Tidak boleh ada warning atau error kritis.

---

# 7. Component Testing

Komponen UI harus diuji untuk:

* rendering;
* variant;
* state;
* responsive behavior;
* accessibility.

Komponen reusable menjadi prioritas utama.

---

# 8. Responsive Testing

Minimal diuji pada breakpoint berikut.

| Device  |   Lebar |
| ------- | ------: |
| Mobile  |  360 px |
| Tablet  |  768 px |
| Laptop  | 1024 px |
| Desktop | 1440 px |

Tidak boleh terjadi overflow horizontal.

---

# 9. Browser Testing

Minimal mendukung:

* Chrome
* Edge
* Firefox
* Safari

Versi terbaru menjadi acuan utama.

---

# 10. Accessibility Testing

Periksa:

* keyboard navigation;
* focus indicator;
* heading structure;
* label form;
* kontras warna;
* alt text;
* ARIA bila diperlukan.

Target mengikuti WCAG 2.2 AA.

---

# 11. SEO Testing

Pastikan:

* title unik;
* meta description tersedia;
* canonical benar;
* structured data valid;
* robots.txt tersedia;
* sitemap diperbarui.

---

# 12. Performance Testing

Target minimum:

| Metrik                 |   Target |
| ---------------------- | -------: |
| Lighthouse Performance |     ≥ 95 |
| Accessibility          |     ≥ 95 |
| Best Practices         |     ≥ 95 |
| SEO                    |     ≥ 95 |
| LCP                    |  < 2.5 s |
| CLS                    |    < 0.1 |
| INP                    | < 200 ms |

---

# 13. Search Testing

Pastikan:

* index dibuat saat build;
* hasil pencarian relevan;
* filter berfungsi;
* halaman `/search` menggunakan `noindex`.

---

# 14. Link Testing

Periksa:

* internal link;
* external link;
* breadcrumb;
* navigasi utama;
* tombol CTA.

Tidak boleh ada tautan rusak (broken link).

---

# 15. Visual Review

Periksa:

* konsistensi layout;
* spacing;
* tipografi;
* ikon;
* gambar;
* dark mode (jika tersedia).

---

# 16. Regression Testing

Setiap perubahan besar harus memastikan:

* fitur lama tetap berfungsi;
* tidak ada penurunan performa;
* tidak ada perubahan visual yang tidak diinginkan.

---

# 17. Manual Checklist

Sebelum rilis:

* Homepage.
* Blog.
* AI Tools.
* Prompt Library.
* Template Library.
* Glossary.
* Search.
* Footer.
* Header.
* Sitemap.

Semua halaman utama harus diperiksa secara manual.

---

# 18. Best Practices

* Jalankan build sebelum commit.
* Uji pada perangkat mobile.
* Gunakan preview deployment untuk review.
* Perbaiki warning sebelum rilis.
* Dokumentasikan bug yang ditemukan.

---

# 19. Anti-pattern

Hindari:

* deploy tanpa build lokal;
* mengabaikan warning penting;
* hanya menguji di satu browser;
* melewati validasi schema;
* mengubah fitur tanpa pengujian ulang.

---

# 20. Acceptance Criteria

Implementasi dianggap sesuai apabila:

* [ ] Build berhasil tanpa error.
* [ ] Schema Content Collections valid.
* [ ] Tidak ada broken link.
* [ ] Lighthouse memenuhi target.
* [ ] SEO tervalidasi.
* [ ] Accessibility memenuhi standar.
* [ ] Manual checklist selesai.

---

# 21. Hubungan dengan Dokumen Lain

Dokumen ini berkaitan dengan:

* 08-SEO-IMPLEMENTATION.md
* 09-PERFORMANCE-IMPLEMENTATION.md
* 10-DESIGN-SYSTEM-IMPLEMENTATION.md
* 11-CMS-IMPLEMENTATION.md
* 14-DEPLOYMENT.md

---

# 22. Changelog

## v1.0

* Menetapkan strategi testing untuk konten, komponen, SEO, performa, aksesibilitas, dan deployment.
* Mendefinisikan acceptance criteria sebelum rilis.
* Menjadi acuan quality assurance AI Praktis Indonesia.
