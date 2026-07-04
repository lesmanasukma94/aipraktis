# Definition of Done (DoD)
## AI Praktis Indonesia

> Seluruh sprint, fitur, halaman, komponen, dan implementasi dianggap **SELESAI** hanya jika memenuhi seluruh checklist yang relevan pada dokumen ini.

---

# 1. Build & Quality

Semua implementasi harus lolos pemeriksaan dasar.

- [ ] Build Astro berhasil
- [ ] Tidak ada TypeScript Error
- [ ] Tidak ada Astro Error
- [ ] Tidak ada Console Error
- [ ] Tidak ada Broken Import
- [ ] Tidak ada Warning penting

---

# 2. Functional

Fitur bekerja sesuai tujuan.

- [ ] Seluruh fungsi berjalan
- [ ] Seluruh link aktif
- [ ] Tidak ada halaman 404
- [ ] Tidak ada Infinite Loop
- [ ] Tidak ada Duplicate Route

---

# 3. UI / UX

Tampilan konsisten.

- [ ] Responsive Mobile
- [ ] Responsive Tablet
- [ ] Responsive Desktop
- [ ] Layout konsisten
- [ ] Typography konsisten
- [ ] Spacing konsisten
- [ ] Warna mengikuti design system
- [ ] Navigasi mudah dipahami

---

# 4. Performance

Website harus tetap ringan.

- [ ] Tidak ada JavaScript yang tidak diperlukan
- [ ] Tidak ada CSS yang berlebihan
- [ ] Gambar telah dioptimasi
- [ ] Loading cepat
- [ ] Core Web Vitals tetap baik

---

# 5. SEO

Semua halaman wajib SEO Ready.

- [ ] Title
- [ ] Meta Description
- [ ] Canonical URL
- [ ] Open Graph
- [ ] Twitter Card
- [ ] Schema Markup
- [ ] Breadcrumb
- [ ] Sitemap Compatible
- [ ] Robots Compatible

---

# 6. Content

Jika implementasi berkaitan dengan artikel.

- [ ] Menggunakan CATEGORY_GUIDE.md
- [ ] Menggunakan ARTICLE_TEMPLATE.md
- [ ] Mengikuti CONTENT_STRATEGY.md
- [ ] Hanya memiliki satu kategori utama
- [ ] Internal Link tersedia
- [ ] CTA tersedia

---

# 7. Revenue

Setiap fitur harus mendukung bisnis jika relevan.

Minimal salah satu:

- [ ] Affiliate
- [ ] Lead Generation
- [ ] Newsletter
- [ ] Produk Digital
- [ ] Konsultasi
- [ ] Corporate Training

Jika tidak mendukung salah satunya, evaluasi kembali urgensinya.

---

# 8. Internal Linking

Jika halaman merupakan halaman konten.

- [ ] Link ke Parent Hub
- [ ] Link ke Child Hub
- [ ] Link ke Related Article
- [ ] Link ke Category
- [ ] Link ke Vendor Hub

---

# 9. Architecture

Seluruh implementasi wajib mengikuti arsitektur final.

- [ ] Tidak membuat struktur sementara
- [ ] Tidak membuat file yang nantinya akan dihapus
- [ ] Tidak membuat folder yang nantinya akan dihapus
- [ ] Tidak membuat duplikasi komponen
- [ ] Menggunakan reusable component
- [ ] Mengikuti WEBSITE_ARCHITECTURE.md

---

# 10. Scalability

Implementasi harus siap berkembang.

- [ ] Tetap bekerja untuk ribuan artikel
- [ ] Tidak bergantung pada hardcode
- [ ] Mudah dikembangkan
- [ ] Mudah dipelihara

---

# 11. Accessibility

Website mudah digunakan semua pengguna.

- [ ] Heading berurutan
- [ ] Alt Image
- [ ] Link jelas
- [ ] Keyboard Friendly
- [ ] Contrast baik

---

# 12. Security

- [ ] Tidak membuka celah XSS
- [ ] Tidak menyimpan secret
- [ ] Tidak expose API Key
- [ ] Validasi data dilakukan

---

# 13. Documentation

Jika implementasi mengubah arsitektur.

- [ ] Dokumentasi diperbarui
- [ ] Struktur tetap konsisten
- [ ] Tidak bertentangan dengan PROJECT_MASTER_PLAN.md

---

# 14. Business Validation

Sebelum sebuah fitur dibuat, jawab pertanyaan berikut.

Apakah fitur ini:

- [ ] Meningkatkan SEO?
- [ ] Meningkatkan User Experience?
- [ ] Meningkatkan Conversion?
- [ ] Meningkatkan Revenue?
- [ ] Mendukung target Rp100 juta/bulan?

Jika seluruh jawaban adalah **TIDAK**, maka fitur tersebut bukan prioritas.

---

# 15. Anti-Rework Rules

AI Praktis Indonesia dibangun dengan prinsip:

**Build Once. Scale Forever.**

Sebelum membuat file baru, pastikan:

- [ ] Tidak akan diganti sprint berikutnya
- [ ] Tidak akan dihapus sprint berikutnya
- [ ] Sudah merupakan desain final
- [ ] Sudah mempertimbangkan roadmap jangka panjang

Implementasi sementara **tidak diperbolehkan**.

---

# 16. Commit Checklist

Sebelum melakukan Commit.

- [ ] Build berhasil
- [ ] Semua checklist relevan selesai
- [ ] Tidak ada file sementara
- [ ] Tidak ada file testing
- [ ] Tidak ada console.log
- [ ] Tidak ada TODO yang belum diselesaikan

---

# 17. Release Checklist

Sebelum Push ke Repository.

- [ ] Commit bersih
- [ ] Struktur tetap konsisten
- [ ] Dokumentasi diperbarui
- [ ] Siap dipakai pada sprint berikutnya tanpa refactor

---

# Prinsip AI Praktis Indonesia

Build Once.

Scale Forever.

Revenue First.

SEO First.

Performance First.

No Temporary Solution.

No Duplicate Architecture.

No Rework.

Every Sprint Must Increase Business Value.