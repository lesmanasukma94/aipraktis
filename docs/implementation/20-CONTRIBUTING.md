# AI Praktis Indonesia v2

# 20-CONTRIBUTING.md

> **Document Version:** 1.0
> **Status:** Active
> **Last Updated:** June 2026

---

# 1. Tujuan

Dokumen ini mendefinisikan standar kontribusi pada proyek AI Praktis Indonesia.

Tujuan utama:

* menjaga kualitas kode;
* menjaga konsistensi dokumentasi;
* mempermudah kolaborasi;
* mempercepat proses review;
* mengurangi konflik saat pengembangan.

---

# 2. Prinsip Kontribusi

Seluruh kontributor mengikuti prinsip berikut.

* Documentation First
* Quality First
* Small & Focused Changes
* Review Before Merge
* Respect Existing Architecture
* Continuous Improvement

---

# 3. Ruang Lingkup

Panduan ini berlaku untuk:

* Source Code
* Dokumentasi
* Konten
* Bug Fix
* Fitur Baru
* Refactoring
* Testing
* Infrastruktur

---

# 4. Workflow Kontribusi

Alur kontribusi:

```text id="kq0rj8"
Issue
   │
   ▼
Create Branch
   │
   ▼
Implement
   │
   ▼
Local Testing
   │
   ▼
Commit
   │
   ▼
Pull Request
   │
   ▼
Code Review
   │
   ▼
Merge
```

Semua perubahan mengikuti alur ini.

---

# 5. Branch Strategy

Gunakan penamaan branch berikut.

```text id="1rtsmy"
feature/

fix/

docs/

refactor/

chore/

hotfix/
```

Contoh:

```text id="fth3gq"
feature/search-page

fix/internal-link

docs/seo-guide

refactor/article-card
```

---

# 6. Commit Message

Gunakan format commit yang konsisten.

```text id="d5o8tv"
type: description
```

Contoh:

```text id="mrj72v"
feat: add search page

fix: resolve sitemap issue

docs: update implementation guide

refactor: simplify tool card

chore: update dependencies
```

Jenis commit:

* feat
* fix
* docs
* refactor
* chore
* test
* ci

---

# 7. Pull Request

Setiap Pull Request harus:

* fokus pada satu perubahan;
* memiliki deskripsi yang jelas;
* lolos build;
* lolos testing;
* memperbarui dokumentasi jika diperlukan.

---

# 8. Code Review

Review mencakup:

* arsitektur;
* kualitas kode;
* performa;
* aksesibilitas;
* SEO;
* keamanan;
* dokumentasi.

Komentar review harus konstruktif dan berbasis fakta.

---

# 9. Standar Kode

Seluruh kode harus:

* mengikuti `21-CODING-STANDARDS.md`;
* menggunakan TypeScript;
* mudah dibaca;
* mudah diuji;
* menghindari duplikasi.

---

# 10. Standar Dokumentasi

Jika perubahan memengaruhi arsitektur atau proses:

* perbarui dokumen terkait;
* tambahkan changelog bila diperlukan;
* pastikan dokumentasi tetap sinkron dengan implementasi.

---

# 11. Standar Konten

Kontribusi konten harus:

* mengikuti Content Collections;
* lolos schema validation;
* memiliki metadata lengkap;
* mengikuti pedoman SEO;
* melalui proses review.

---

# 12. Bug Report

Laporan bug minimal mencakup:

* ringkasan masalah;
* langkah reproduksi;
* hasil yang diharapkan;
* hasil aktual;
* browser/perangkat;
* tangkapan layar jika relevan.

---

# 13. Feature Request

Usulan fitur harus menjelaskan:

* masalah yang ingin diselesaikan;
* manfaat bagi pengguna;
* dampak terhadap arsitektur;
* estimasi kompleksitas.

---

# 14. Definition of Done

Perubahan dianggap selesai apabila:

* kode selesai;
* build berhasil;
* testing berhasil;
* dokumentasi diperbarui;
* review selesai;
* siap di-merge.

---

# 15. Best Practices

* Buat perubahan kecil dan terfokus.
* Jalankan build sebelum commit.
* Hindari perubahan yang tidak terkait.
* Gunakan nama branch yang deskriptif.
* Dokumentasikan keputusan penting.

---

# 16. Anti-pattern

Hindari:

* commit yang mencampur banyak perubahan;
* Pull Request berukuran sangat besar;
* merge tanpa review;
* perubahan langsung di branch `main`;
* dokumentasi yang tidak diperbarui.

---

# 17. Acceptance Criteria

Kontribusi dianggap memenuhi standar apabila:

* [ ] Branch mengikuti konvensi.
* [ ] Commit menggunakan format yang disepakati.
* [ ] Build berhasil.
* [ ] Testing berhasil.
* [ ] Dokumentasi diperbarui bila diperlukan.
* [ ] Pull Request telah direview.

---

# 18. Hubungan dengan Dokumen Lain

Dokumen ini berkaitan dengan:

* 15-TESTING.md
* 16-CI-CD.md
* 19-MAINTENANCE.md
* 21-CODING-STANDARDS.md
* 22-RELEASE-MANAGEMENT.md

---

# 19. Roadmap Kolaborasi

### Phase 1

* Single Maintainer
* Dokumentasi lengkap
* Workflow Git

### Phase 2

* Internal Contributor
* Pull Request Review
* Issue Management

### Phase 3

* Community Contribution
* Template Issue & PR
* Automation Review
* Contribution Metrics

---

# 20. Changelog

## v1.0

* Menetapkan standar kontribusi proyek AI Praktis Indonesia.
* Mendefinisikan workflow Git, branch strategy, commit message, Pull Request, code review, dan Definition of Done.
* Menjadi acuan resmi bagi seluruh kontributor proyek.
