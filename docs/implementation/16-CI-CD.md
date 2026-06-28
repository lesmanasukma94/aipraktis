# AI Praktis Indonesia v2

# 16-CI-CD.md

> **Document Version:** 1.0
> **Status:** Active
> **Last Updated:** June 2026

---

# 1. Tujuan

Dokumen ini mendefinisikan implementasi Continuous Integration (CI) dan Continuous Deployment (CD) pada AI Praktis Indonesia.

CI/CD bertujuan untuk:

* mengotomatiskan proses validasi;
* menjaga kualitas kode;
* mengurangi kesalahan manual;
* mempercepat proses deployment;
* memastikan setiap rilis dapat direproduksi.

---

# 2. Prinsip CI/CD

Seluruh pipeline mengikuti prinsip berikut.

* Automation First
* Git Driven
* Fail Fast
* Repeatable
* Immutable Build
* Zero Manual Deployment

---

# 3. Arsitektur Pipeline

```text
Developer
    │
    ▼
Git Commit
    │
    ▼
GitHub
    │
    ▼
GitHub Actions
    │
    ├── Install Dependencies
    ├── Lint
    ├── Type Check
    ├── Content Validation
    ├── Build
    ├── Testing
    └── Artifact
            │
            ▼
Cloudflare Pages
            │
            ▼
Production
```

Seluruh deployment dilakukan melalui pipeline otomatis.

---

# 4. Platform

Platform utama.

| Komponen           | Platform         |
| ------------------ | ---------------- |
| Repository         | GitHub           |
| CI                 | GitHub Actions   |
| CD                 | Cloudflare Pages |
| Preview Deployment | Cloudflare Pages |

Arsitektur tetap kompatibel dengan Vercel dan Netlify.

---

# 5. Trigger Pipeline

Pipeline dijalankan ketika:

* push ke `main`;
* Pull Request dibuat;
* Pull Request diperbarui;
* workflow dijalankan secara manual (jika diperlukan).

---

# 6. Tahapan CI

Urutan proses CI.

1. Checkout Repository
2. Install Dependencies
3. Type Checking
4. Content Schema Validation
5. Lint
6. Astro Build
7. Generate Search Index
8. Generate Sitemap
9. Jalankan Testing
10. Upload Build Artifact

Pipeline berhenti jika salah satu tahap gagal.

---

# 7. Content Validation

Validasi mencakup:

* frontmatter;
* schema Content Collections;
* slug;
* metadata wajib;
* internal consistency.

Konten yang tidak valid membatalkan pipeline.

---

# 8. Build Validation

Pastikan:

* Astro Build berhasil;
* tidak ada error TypeScript;
* output build lengkap;
* Search Index berhasil dibuat;
* Sitemap berhasil dibuat.

---

# 9. Testing Stage

Pipeline menjalankan:

* Content Validation
* Build Testing
* Component Testing (jika tersedia)
* Accessibility Check
* Link Validation

---

# 10. Deployment Flow

```text
Feature Branch
      │
      ▼
Pull Request
      │
      ▼
Preview Deployment
      │
      ▼
Review
      │
      ▼
Merge
      │
      ▼
Production Deployment
```

Deployment production hanya berasal dari branch `main`.

---

# 11. Preview Deployment

Setiap Pull Request menghasilkan:

* URL preview;
* hasil build;
* validasi awal.

Preview digunakan untuk proses review sebelum merge.

---

# 12. Secret Management

Seluruh secret disimpan pada platform CI.

Contoh:

* Analytics ID
* API Key
* Deployment Token

Secret tidak boleh disimpan di repository.

---

# 13. Failure Handling

Jika pipeline gagal:

* deployment dibatalkan;
* developer memperbaiki masalah;
* pipeline dijalankan kembali.

Tidak ada deployment parsial.

---

# 14. Rollback

Rollback dilakukan dengan:

* memilih deployment stabil sebelumnya; atau
* melakukan redeploy commit yang telah diketahui stabil.

Rollback tidak dilakukan melalui perubahan manual di server.

---

# 15. Logging

Pipeline mencatat:

* waktu build;
* durasi setiap tahap;
* hasil validasi;
* status deployment;
* pesan error.

Log digunakan untuk investigasi apabila terjadi kegagalan.

---

# 16. Best Practices

* Gunakan workflow yang sederhana.
* Pisahkan CI dan CD bila diperlukan.
* Jalankan validasi sebelum build.
* Simpan secret secara aman.
* Pantau durasi pipeline secara berkala.

---

# 17. Anti-pattern

Hindari:

* deployment manual ke production;
* mengabaikan pipeline yang gagal;
* menyimpan secret di Git;
* menjalankan deployment tanpa validasi;
* workflow yang terlalu kompleks.

---

# 18. Acceptance Criteria

Implementasi dianggap sesuai apabila:

* [ ] Pipeline berjalan otomatis.
* [ ] Build gagal jika validasi gagal.
* [ ] Preview deployment tersedia.
* [ ] Deployment production hanya dari `main`.
* [ ] Secret dikelola dengan aman.
* [ ] Rollback dapat dilakukan.
* [ ] Log pipeline tersedia.

---

# 19. Hubungan dengan Dokumen Lain

Dokumen ini berkaitan dengan:

* 14-DEPLOYMENT.md
* 15-TESTING.md
* 11-CMS-IMPLEMENTATION.md
* 08-SEO-IMPLEMENTATION.md
* 09-PERFORMANCE-IMPLEMENTATION.md

---

# 20. Roadmap Pengembangan

Tahap implementasi CI/CD.

### Phase 1

* GitHub Repository
* GitHub Actions
* Build Automation

### Phase 2

* Automated Testing
* Preview Deployment
* Notification

### Phase 3

* Lighthouse CI
* Accessibility Audit
* Broken Link Checker
* Performance Regression

---

# 21. Changelog

## v1.0

* Menetapkan standar CI/CD berbasis GitHub Actions.
* Mendefinisikan pipeline build, testing, deployment, rollback, dan pengelolaan secret.
* Menjadi acuan otomatisasi pengembangan dan rilis AI Praktis Indonesia.
