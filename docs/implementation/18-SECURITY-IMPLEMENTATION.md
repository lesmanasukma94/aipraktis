# AI Praktis Indonesia v2

# 18-SECURITY-IMPLEMENTATION.md

> **Document Version:** 1.0
> **Status:** Active
> **Last Updated:** June 2026

---

# 1. Tujuan

Dokumen ini mendefinisikan standar implementasi keamanan AI Praktis Indonesia.

Keamanan bertujuan untuk:

* melindungi pengguna;
* melindungi source code;
* melindungi pipeline deployment;
* menjaga integritas konten;
* mengurangi risiko kerentanan.

---

# 2. Prinsip Keamanan

Seluruh implementasi mengikuti prinsip berikut.

* Security by Design
* Least Privilege
* Defense in Depth
* Secure by Default
* Continuous Improvement
* Zero Trust

Keamanan dipertimbangkan sejak tahap perancangan, bukan ditambahkan di akhir.

---

# 3. Ruang Lingkup

Dokumen ini mencakup:

* Application Security
* Infrastructure Security
* Dependency Security
* Build Security
* Repository Security
* Secret Management
* HTTP Security
* Content Security
* Operational Security

---

# 4. Arsitektur Keamanan

```text id="u7g5xk"
Developer
      │
      ▼
GitHub Repository
      │
      ▼
GitHub Actions
      │
      ▼
Cloudflare Pages
      │
      ▼
CDN
      │
      ▼
Visitor
```

Setiap lapisan memiliki kontrol keamanan yang sesuai.

---

# 5. Repository Security

Repository harus:

* menggunakan branch protection;
* mewajibkan Pull Request untuk perubahan besar;
* membatasi hak akses sesuai kebutuhan;
* mengaktifkan Dependabot (atau layanan sejenis);
* meninjau perubahan sebelum merge.

---

# 6. Secret Management

Seluruh secret disimpan pada platform CI/CD.

Contoh:

* Analytics ID
* API Token
* Deployment Token
* SMTP Credential (jika digunakan)

Aturan:

* tidak menyimpan secret di repository;
* tidak menuliskan secret di dokumentasi;
* lakukan rotasi secret secara berkala.

---

# 7. Dependency Security

Seluruh dependency harus:

* berasal dari sumber tepercaya;
* diperbarui secara berkala;
* diaudit terhadap kerentanan;
* menghapus paket yang tidak lagi digunakan.

---

# 8. HTTP Security Headers

Website harus menggunakan header keamanan berikut jika didukung oleh platform:

* Strict-Transport-Security (HSTS)
* X-Content-Type-Options
* Referrer-Policy
* Permissions-Policy
* X-Frame-Options
* Content-Security-Policy (CSP)

Konfigurasi disesuaikan dengan kebutuhan aplikasi.

---

# 9. Content Security Policy

CSP digunakan untuk:

* membatasi sumber script;
* membatasi sumber style;
* membatasi sumber gambar;
* membatasi koneksi eksternal.

Perubahan CSP harus diuji sebelum diterapkan ke production.

---

# 10. HTTPS

Seluruh halaman harus:

* menggunakan HTTPS;
* mengarahkan HTTP ke HTTPS;
* menggunakan sertifikat TLS yang valid.

---

# 11. Input Validation

Jika di masa depan tersedia form atau API:

* validasi dilakukan di sisi klien dan server;
* batasi panjang input;
* lakukan sanitasi terhadap data yang diterima.

---

# 12. XSS & Clickjacking

Pencegahan meliputi:

* sanitasi konten dinamis;
* penggunaan CSP;
* penggunaan `X-Frame-Options` atau `frame-ancestors` pada CSP;
* menghindari penyisipan HTML yang tidak terpercaya.

---

# 13. Asset Security

Pastikan:

* aset hanya berasal dari sumber tepercaya;
* tidak menyimpan informasi sensitif di aset publik;
* gambar dan file diperiksa sebelum dipublikasikan.

---

# 14. Build Security

Pipeline build harus:

* menggunakan dependency yang tervalidasi;
* gagal jika validasi penting tidak lolos;
* menghasilkan artefak yang konsisten;
* mencatat log build untuk audit.

---

# 15. Operational Security

Lakukan secara berkala:

* audit dependency;
* audit konfigurasi deployment;
* pemeriksaan secret;
* review hak akses repository.

---

# 16. Incident Response

Jika ditemukan masalah keamanan:

1. Identifikasi ruang lingkup.
2. Kurangi dampak.
3. Perbaiki akar penyebab.
4. Lakukan deployment perbaikan.
5. Dokumentasikan insiden.
6. Evaluasi proses untuk mencegah kejadian serupa.

---

# 17. Best Practices

* Aktifkan autentikasi multi-faktor pada akun penting.
* Gunakan kata sandi yang kuat dan unik.
* Perbarui dependency secara rutin.
* Batasi hak akses sesuai peran.
* Audit keamanan secara berkala.
* Dokumentasikan perubahan konfigurasi keamanan.

---

# 18. Anti-pattern

Hindari:

* menyimpan secret di Git;
* menonaktifkan HTTPS;
* menggunakan dependency yang tidak dipelihara;
* mengabaikan pembaruan keamanan;
* memberikan hak akses administrator kepada semua kolaborator.

---

# 19. Acceptance Criteria

Implementasi dianggap sesuai apabila:

* [ ] Branch protection aktif.
* [ ] Secret dikelola di platform CI/CD.
* [ ] HTTPS diterapkan.
* [ ] Header keamanan dikonfigurasi.
* [ ] Dependency diaudit secara berkala.
* [ ] Pipeline build tervalidasi.
* [ ] Prosedur incident response terdokumentasi.

---

# 20. Hubungan dengan Dokumen Lain

Dokumen ini berkaitan dengan:

* 14-DEPLOYMENT.md
* 15-TESTING.md
* 16-CI-CD.md
* 17-MONITORING.md
* docs/redesign/21-SECURITY.md

---

# 21. Roadmap Pengembangan

### Phase 1

* HTTPS
* Security Headers
* Secret Management

### Phase 2

* Dependency Audit
* Branch Protection
* Dependabot

### Phase 3

* CSP Hardening
* Security Review
* Audit Berkala
* Incident Response Improvement

---

# 22. Changelog

## v1.0

* Menetapkan standar keamanan untuk repository, pipeline, deployment, dan aplikasi.
* Mendefinisikan pengelolaan secret, dependency, HTTP Security Headers, CSP, dan incident response.
* Menjadi acuan implementasi keamanan AI Praktis Indonesia.
