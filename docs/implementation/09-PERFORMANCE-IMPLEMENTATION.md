# AI Praktis Indonesia v2

# 09-PERFORMANCE-IMPLEMENTATION.md

> **Document Version:** 1.0
> **Status:** Active
> **Last Updated:** June 2026

---

# 1. Tujuan

Dokumen ini mendefinisikan standar implementasi performa pada AI Praktis Indonesia.

Seluruh implementasi harus memastikan website:

* cepat dimuat;
* responsif;
* hemat bandwidth;
* nyaman digunakan pada perangkat desktop maupun mobile;
* memenuhi standar Core Web Vitals.

---

# 2. Target Performa

Target minimum produksi.

| Metrik                 |   Target |
| ---------------------- | -------: |
| Lighthouse Performance |     ≥ 95 |
| Accessibility          |     ≥ 95 |
| Best Practices         |     ≥ 95 |
| SEO                    |     ≥ 95 |
| LCP                    |  < 2.5 s |
| CLS                    |    < 0.1 |
| INP                    | < 200 ms |
| TTFB                   | < 800 ms |

---

# 3. Prinsip Implementasi

Seluruh optimasi mengikuti prinsip berikut.

* Static First
* Minimal JavaScript
* Progressive Enhancement
* Mobile First
* Lazy Loading
* Efficient Assets
* Build Time Optimization

---

# 4. Rendering Strategy

Gunakan strategi berikut.

| Jenis Halaman    | Render                       |
| ---------------- | ---------------------------- |
| Homepage         | SSG                          |
| Blog             | SSG                          |
| AI Tools         | SSG                          |
| Prompt Library   | SSG                          |
| Template Library | SSG                          |
| News             | SSG                          |
| Glossary         | SSG                          |
| Search           | Hybrid / SSR bila diperlukan |

SSG menjadi pilihan utama.

---

# 5. JavaScript Strategy

JavaScript adalah aset paling mahal.

Aturan:

* hindari hidrasi jika tidak diperlukan;
* gunakan Astro Islands hanya untuk komponen interaktif;
* lakukan code splitting otomatis;
* hindari library JavaScript berukuran besar.

Komponen statis tidak boleh mengirim JavaScript ke browser.

---

# 6. CSS Strategy

Gunakan CSS yang ringan dan modular.

Aturan:

* Design Tokens sebagai sumber nilai desain;
* minimalkan CSS global;
* hindari CSS yang tidak digunakan;
* gunakan selector yang sederhana.

---

# 7. Font Strategy

Gunakan font secara efisien.

* maksimal dua keluarga font;
* gunakan format WOFF2;
* preload font utama;
* gunakan `font-display: swap`;
* hindari memuat banyak variasi font.

---

# 8. Image Strategy

Seluruh gambar harus dioptimalkan.

Aturan:

* gunakan WebP atau AVIF jika memungkinkan;
* sediakan ukuran yang sesuai;
* gunakan lazy loading untuk gambar non-kritis;
* tentukan `width` dan `height` untuk mencegah CLS;
* kompres gambar sebelum deployment.

---

# 9. Icon Strategy

Gunakan SVG untuk ikon.

Hindari:

* icon font;
* gambar bitmap untuk ikon kecil.

---

# 10. Asset Loading

Prioritas pemuatan:

1. HTML
2. CSS kritis
3. Font utama
4. Hero image
5. JavaScript interaktif
6. Gambar di bawah fold

---

# 11. Caching Strategy

Aset statis:

* cache jangka panjang;
* menggunakan nama file dengan hash.

HTML:

* mengikuti strategi cache dari platform deployment.

---

# 12. Build Optimization

Saat build:

* optimasi gambar;
* minifikasi HTML;
* minifikasi CSS;
* minifikasi JavaScript;
* kompres aset.

Build harus menghasilkan aset sekecil mungkin.

---

# 13. Third-party Scripts

Setiap script eksternal harus dievaluasi.

Pertimbangkan:

* ukuran file;
* waktu eksekusi;
* dampak terhadap Core Web Vitals.

Gunakan seminimal mungkin.

---

# 14. Lazy Loading

Gunakan lazy loading untuk:

* gambar di bawah fold;
* video;
* iframe;
* komponen interaktif yang tidak langsung terlihat.

---

# 15. Prefetch & Preload

Gunakan preload untuk:

* font utama;
* hero image;
* CSS kritis.

Gunakan prefetch untuk halaman yang kemungkinan besar akan dikunjungi berikutnya.

---

# 16. Content Collections

Seluruh konten diproses saat build.

Keuntungan:

* tidak ada query database saat runtime;
* halaman dapat disajikan sebagai HTML statis;
* waktu respons lebih cepat.

---

# 17. Search Performance

Search menggunakan index hasil build.

Target:

* hasil muncul kurang dari 100 ms untuk index lokal;
* JavaScript search hanya dimuat saat diperlukan.

---

# 18. Monitoring

Performa dipantau menggunakan:

* Lighthouse
* PageSpeed Insights
* Chrome DevTools
* Core Web Vitals

Audit dilakukan secara berkala setelah perubahan besar.

---

# 19. Anti-pattern

Hindari:

* JavaScript global yang tidak diperlukan;
* gambar berukuran terlalu besar;
* font berlebihan;
* library dengan ukuran besar tanpa alasan yang jelas;
* inline style yang berulang;
* render blocking resources.

---

# 20. Best Practices

* Optimalkan gambar sebelum commit.
* Gunakan Astro Image bila sesuai.
* Batasi penggunaan library pihak ketiga.
* Gunakan lazy loading secara konsisten.
* Audit performa sebelum setiap rilis.

---

# 21. Acceptance Criteria

Implementasi dianggap sesuai apabila:

* [ ] Lighthouse Performance ≥ 95.
* [ ] Core Web Vitals memenuhi target.
* [ ] JavaScript hanya dimuat bila diperlukan.
* [ ] Gambar telah dioptimalkan.
* [ ] Font menggunakan WOFF2 dan `font-display: swap`.
* [ ] CSS tetap ringan dan modular.
* [ ] Build menghasilkan aset yang telah diminifikasi.

---

# 22. Hubungan dengan Dokumen Lain

Dokumen ini berkaitan dengan:

* 01-ASTRO-ARCHITECTURE.md
* 05-ROUTING.md
* 07-SEARCH-IMPLEMENTATION.md
* 08-SEO-IMPLEMENTATION.md
* docs/redesign/19-PERFORMANCE.md

---

# 23. Changelog

## v1.0

* Menetapkan standar implementasi performa.
* Mendefinisikan strategi rendering, JavaScript, CSS, font, gambar, caching, dan build.
* Menetapkan target Core Web Vitals dan Lighthouse.
* Menjadi acuan optimasi performa seluruh AI Praktis Indonesia.
