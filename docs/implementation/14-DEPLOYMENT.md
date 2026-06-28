# AI Praktis Indonesia v2

# 14-DEPLOYMENT.md

> **Document Version:** 1.0
> **Status:** Active
> **Last Updated:** June 2026

---

# 1. Tujuan

Dokumen ini mendefinisikan standar deployment AI Praktis Indonesia.

Deployment harus:

* otomatis;
* dapat diulang;
* aman;
* mudah dipantau;
* mudah di-rollback.

---

# 2. Prinsip Deployment

Seluruh deployment mengikuti prinsip berikut.

* Git First
* Automated Build
* Immutable Deployment
* Zero Manual Changes
* Rollback Ready

Seluruh perubahan produksi berasal dari repository Git.

---

# 3. Target Platform

Platform utama:

| Platform         | Status    |
| ---------------- | --------- |
| Cloudflare Pages | Primary   |
| Vercel           | Supported |
| Netlify          | Supported |

Arsitektur tidak bergantung pada satu vendor.

---

# 4. Environment

Website menggunakan tiga environment.

| Environment | Tujuan                  |
| ----------- | ----------------------- |
| Development | Pengembangan lokal      |
| Preview     | Review sebelum produksi |
| Production  | Website publik          |

Masing-masing memiliki konfigurasi sendiri.

---

# 5. Branch Strategy

Gunakan strategi Git berikut.

```text
main
│
├── feature/*
├── fix/*
└── docs/*
```

Aturan:

* `main` selalu siap dipublikasikan.
* Perubahan dikembangkan pada branch terpisah.
* Merge dilakukan setelah review.

---

# 6. Build Process

Alur build:

```text
Git Push
    │
    ▼
Install Dependencies
    │
    ▼
Type Check
    │
    ▼
Schema Validation
    │
    ▼
Astro Build
    │
    ▼
Generate Search Index
    │
    ▼
Generate Sitemap
    │
    ▼
Deploy
```

Jika salah satu langkah gagal, deployment dibatalkan.

---

# 7. Build Command

Build standar proyek:

```bash
npm install

npm run build
```

Output berada pada folder hasil build Astro.

---

# 8. Environment Variables

Environment variable digunakan untuk data yang berbeda di setiap environment.

Contoh:

* Site URL
* Analytics ID
* Search Console Verification
* API Key (jika diperlukan)

Jangan menyimpan secret di repository.

---

# 9. Domain

Struktur domain.

```text
Production

aipraktis.id

www.aipraktis.id
```

Preview menggunakan subdomain otomatis dari platform deployment.

---

# 10. HTTPS

Seluruh website harus:

* menggunakan HTTPS;
* mengarahkan HTTP ke HTTPS;
* mendukung HTTP/2 atau lebih baru.

---

# 11. CDN

Seluruh aset statis disajikan melalui CDN.

Meliputi:

* HTML
* CSS
* JavaScript
* Gambar
* Font
* Search Index

---

# 12. Cache Strategy

Cache dibedakan berdasarkan jenis aset.

| Aset         | Strategi                     |
| ------------ | ---------------------------- |
| HTML         | Revalidate sesuai deployment |
| CSS          | Cache panjang + hash         |
| JS           | Cache panjang + hash         |
| Images       | Cache panjang                |
| Fonts        | Cache panjang                |
| Search Index | Mengikuti versi build        |

---

# 13. Preview Deployment

Setiap Pull Request menghasilkan deployment preview.

Tujuan:

* review tampilan;
* validasi SEO;
* pengujian fitur;
* pengecekan performa.

---

# 14. Rollback

Rollback dilakukan dengan:

* memilih deployment sebelumnya; atau
* melakukan redeploy commit terakhir yang stabil.

Tidak melakukan perubahan manual pada server produksi.

---

# 15. Monitoring Deployment

Setelah deployment, lakukan pemeriksaan:

* build berhasil;
* halaman utama dapat diakses;
* sitemap tersedia;
* robots.txt tersedia;
* tidak ada error 404 baru.

---

# 16. Deployment Checklist

Sebelum produksi:

* Build berhasil.
* Tidak ada error TypeScript.
* Schema Content Collections valid.
* Lighthouse sesuai target.
* Sitemap diperbarui.
* Search Index diperbarui.
* Metadata SEO lengkap.

---

# 17. Recovery

Jika deployment gagal:

1. identifikasi penyebab;
2. perbaiki di branch terkait;
3. jalankan build lokal;
4. ulangi deployment.

Jika deployment produksi bermasalah, lakukan rollback.

---

# 18. Best Practices

* Selalu deploy melalui Git.
* Hindari perubahan langsung di production.
* Gunakan preview deployment untuk review.
* Dokumentasikan perubahan besar.
* Pantau deployment setelah rilis.

---

# 19. Anti-pattern

Hindari:

* upload file manual ke server;
* perubahan langsung pada production;
* deployment tanpa build lokal;
* menyimpan secret di repository;
* mengabaikan kegagalan validasi.

---

# 20. Acceptance Criteria

Implementasi dianggap sesuai apabila:

* [ ] Deployment berjalan otomatis dari Git.
* [ ] Preview deployment tersedia.
* [ ] Environment dipisahkan dengan jelas.
* [ ] HTTPS aktif.
* [ ] CDN digunakan.
* [ ] Rollback dapat dilakukan.
* [ ] Build gagal jika validasi gagal.

---

# 21. Hubungan dengan Dokumen Lain

Dokumen ini berkaitan dengan:

* 01-ASTRO-ARCHITECTURE.md
* 04-CONTENT-COLLECTIONS.md
* 07-SEARCH-IMPLEMENTATION.md
* 08-SEO-IMPLEMENTATION.md
* 09-PERFORMANCE-IMPLEMENTATION.md
* 13-ANALYTICS-IMPLEMENTATION.md

---

# 22. Changelog

## v1.0

* Menetapkan standar deployment berbasis Git.
* Mendefinisikan environment, build pipeline, cache, CDN, rollback, dan deployment checklist.
* Menjadi acuan proses rilis AI Praktis Indonesia dari development hingga production.
