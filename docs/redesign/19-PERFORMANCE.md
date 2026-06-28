# AI Praktis Indonesia v2

# 19-PERFORMANCE.md

> **Document Version:** 2.1
> **Status:** Living Documentation
> **Last Updated:** June 2026

---

# 1. Tujuan Dokumen

Dokumen ini mendefinisikan Performance Architecture AI Praktis Indonesia.

Performance merupakan salah satu pilar utama kualitas website karena berdampak langsung pada:

* User Experience
* SEO
* Accessibility
* Conversion Rate
* Core Web Vitals
* Biaya Infrastruktur

Performance harus dipertimbangkan sejak tahap desain hingga deployment.

---

# 2. Filosofi Performance

## Fast by Default

Website harus cepat tanpa memerlukan optimasi tambahan.

---

## Less JavaScript

Gunakan JavaScript hanya jika benar-benar diperlukan.

Prioritaskan HTML dan CSS.

---

## Progressive Enhancement

Website tetap dapat digunakan meskipun JavaScript tidak aktif.

---

## Performance Budget

Setiap fitur baru harus mempertimbangkan dampaknya terhadap performa.

---

# 3. Performance Goals

Target global:

| Metric                    | Target |
| ------------------------- | -----: |
| Lighthouse Performance    | 95–100 |
| Lighthouse Accessibility  |    100 |
| Lighthouse SEO            |    100 |
| Lighthouse Best Practices |    100 |

---

# 4. Core Web Vitals

Target minimum.

| Metric                          |   Target |
| ------------------------------- | -------: |
| Largest Contentful Paint (LCP)  |  ≤ 2.5 s |
| Interaction to Next Paint (INP) | ≤ 200 ms |
| Cumulative Layout Shift (CLS)   |    ≤ 0.1 |

Monitoring dilakukan secara berkala.

---

# 5. Astro Rendering Strategy

Gunakan kemampuan Astro secara maksimal.

```text
Static HTML

↓

Server Side Rendering (SSR)

↓

Islands Architecture

↓

Hydration hanya bila diperlukan
```

Komponen interaktif harus seminimal mungkin.

---

# 6. JavaScript Strategy

Prinsip utama:

* Zero JavaScript bila memungkinkan.
* Hydrate hanya komponen interaktif.
* Hindari library besar.
* Gunakan native browser API bila memungkinkan.

Directive Astro yang direkomendasikan:

* client:idle
* client:visible
* client:media
* client:only (hanya bila benar-benar diperlukan)

---

# 7. Code Splitting

Seluruh JavaScript harus dipisahkan berdasarkan kebutuhan.

Tujuan:

* mengurangi bundle awal;
* mempercepat First Load;
* mempercepat navigasi.

---

# 8. Lazy Loading Strategy

Lazy loading diterapkan pada:

* gambar non-kritis;
* video;
* iframe;
* komentar;
* widget pihak ketiga;
* analytics tambahan.

Konten di atas area lipatan (above the fold) tidak boleh di-lazy-load jika berdampak pada LCP.

---

# 9. Image Optimization

Seluruh gambar harus:

* memiliki dimensi eksplisit;
* menggunakan format AVIF atau WebP bila sesuai;
* memiliki fallback;
* dioptimalkan ukurannya;
* menggunakan responsive images (`srcset` dan `sizes`).

Gunakan `astro:assets` sebagai standar pengelolaan gambar.

---

# 10. Font Strategy

Prinsip:

* gunakan maksimal dua keluarga font;
* self-host font jika memungkinkan;
* preload font utama;
* gunakan `font-display: swap`.

Hindari memuat banyak variasi font yang tidak digunakan.

---

# 11. CSS Strategy

Gunakan:

* CSS modular;
* Design Tokens;
* Custom Properties;
* minimalkan CSS global;
* hapus CSS yang tidak terpakai.

Prioritaskan CSS bawaan Astro sebelum menambahkan framework.

---

# 12. Asset Optimization

Seluruh aset harus:

* dikompresi;
* menggunakan cache jangka panjang;
* memiliki hash filename;
* diminifikasi pada produksi.

Jenis aset:

* CSS
* JavaScript
* SVG
* Fonts
* Images

---

# 13. Caching Strategy

Gunakan caching bertingkat.

```text
Browser Cache

↓

CDN Cache

↓

Server Cache

↓

Build Cache
```

Static assets memiliki cache yang lebih lama dibandingkan HTML.

---

# 14. CDN Strategy

Distribusi aset dilakukan melalui CDN.

Prioritas:

* gambar;
* font;
* JavaScript;
* CSS;
* file unduhan.

---

# 15. API Performance

Jika menggunakan API:

* gunakan pagination;
* cache response;
* batasi ukuran payload;
* gunakan kompresi;
* hindari permintaan berulang.

---

# 16. Database Performance

Prinsip:

* indeks pada kolom pencarian;
* hindari query berulang;
* gunakan pagination;
* batasi jumlah data yang dikirim.

---

# 17. Search Performance

Pencarian harus:

* cepat;
* mendukung autocomplete;
* memanfaatkan indeks;
* menghindari pencarian linear pada dataset besar.

---

# 18. Third-party Scripts

Script pihak ketiga harus dibatasi.

Prioritas:

* Analytics
* Consent Manager
* Newsletter

Hindari memuat banyak widget eksternal secara bersamaan.

---

# 19. Build Performance

Target build:

* incremental bila memungkinkan;
* waktu build konsisten;
* proses CI/CD otomatis;
* validasi sebelum deployment.

---

# 20. Monitoring

Pantau secara berkala:

* Lighthouse
* Core Web Vitals
* Server Response Time
* Cache Hit Ratio
* JavaScript Bundle Size
* CSS Size
* Image Weight

---

# 21. Performance Budget

Batas awal yang direkomendasikan:

| Resource                  |                   Budget |
| ------------------------- | -----------------------: |
| Initial JavaScript        |                 ≤ 150 KB |
| Initial CSS               |                 ≤ 100 KB |
| Hero Image                |                 ≤ 200 KB |
| Total Initial Page Weight |                   ≤ 1 MB |
| Third-party Scripts       | Maksimal 3 layanan utama |

Budget dievaluasi setiap kali fitur besar ditambahkan.

---

# 22. Deployment Strategy

Deployment harus:

* otomatis melalui CI/CD;
* menjalankan linting;
* menjalankan type checking;
* menjalankan build test;
* menjalankan Lighthouse audit sebelum produksi.

Deployment gagal jika build atau pengujian kritis tidak lolos.

---

# 23. Future Optimizations

Roadmap pengembangan:

```text
Edge Rendering

Smart Prefetch

Predictive Loading

Image CDN

Incremental Static Regeneration

Offline Support

Service Worker

HTTP/3 Optimization
```

Implementasi dilakukan berdasarkan kebutuhan dan hasil pengukuran.

---

# 24. Acceptance Criteria

* [ ] Lighthouse Performance ≥ 95.
* [ ] Core Web Vitals memenuhi target.
* [ ] JavaScript diminimalkan.
* [ ] Seluruh gambar dioptimalkan.
* [ ] Performance Budget dipatuhi.
* [ ] Caching aktif.
* [ ] Monitoring tersedia.
* [ ] Deployment otomatis dengan validasi.

---

# 25. Hubungan dengan Dokumen Lain

Dokumen ini bergantung pada:

* 09-DESIGN-SYSTEM.md
* 10-DESIGN-TOKENS.md
* 11-COMPONENT-INVENTORY.md
* 16-SEO.md
* 18-ANALYTICS.md
* 20-ACCESSIBILITY.md
* 21-SECURITY.md

---

# 26. Changelog

## v2.1

* Menetapkan Performance sebagai bagian dari arsitektur produk.
* Mengoptimalkan strategi rendering Astro.
* Mendefinisikan JavaScript Strategy, Image Strategy, dan Font Strategy.
* Menambahkan Performance Budget, Caching, CDN, dan Deployment Strategy.
* Menetapkan target Lighthouse dan Core Web Vitals untuk seluruh website.
