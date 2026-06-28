# AI Praktis Indonesia v2

# 21-SECURITY.md

> **Document Version:** 2.1
> **Status:** Living Documentation
> **Last Updated:** June 2026

---

# 1. Tujuan Dokumen

Dokumen ini mendefinisikan Security Architecture AI Praktis Indonesia.

Keamanan merupakan bagian dari kualitas produk dan harus diterapkan sejak tahap perancangan, pengembangan, deployment, hingga operasional.

Tujuan utama:

* Melindungi pengguna.
* Melindungi data.
* Mengurangi risiko keamanan.
* Menjaga kepercayaan pengguna.
* Mendukung skalabilitas jangka panjang.

---

# 2. Filosofi Security

## Security by Design

Keamanan dipertimbangkan sejak awal pengembangan, bukan ditambahkan setelah produk selesai.

---

## Least Privilege

Setiap sistem, layanan, dan pengguna hanya memiliki akses minimum yang diperlukan.

---

## Defense in Depth

Gunakan beberapa lapisan perlindungan sehingga kegagalan satu lapisan tidak langsung menyebabkan kompromi sistem.

---

## Secure by Default

Konfigurasi bawaan harus aman tanpa memerlukan perubahan tambahan.

---

# 3. Security Objectives

Target utama:

* Kerahasiaan (Confidentiality)
* Integritas (Integrity)
* Ketersediaan (Availability)
* Auditability
* Recoverability

---

# 4. Authentication (Future)

Jika sistem login diterapkan, gunakan:

* OAuth 2.0
* OpenID Connect
* Passkeys (jika memungkinkan)
* Multi-Factor Authentication (MFA) untuk akun administrator

Password tidak disimpan dalam bentuk plaintext.

---

# 5. Authorization

Gunakan Role-Based Access Control (RBAC).

Contoh role:

```text
Guest

Member

Author

Editor

Administrator
```

Hak akses dikelola berdasarkan peran, bukan pengguna individual.

---

# 6. Input Validation

Seluruh input harus:

* divalidasi di sisi klien;
* divalidasi ulang di sisi server;
* menggunakan whitelist bila memungkinkan;
* menolak input yang tidak valid.

Validasi klien hanya untuk kenyamanan pengguna, bukan keamanan.

---

# 7. Output Encoding

Seluruh output harus di-escape sesuai konteks.

Contoh:

* HTML
* URL
* JavaScript
* CSS

Tujuan:

* mencegah Cross-Site Scripting (XSS).

---

# 8. Content Security Policy (CSP)

Gunakan CSP untuk membatasi sumber daya yang dapat dimuat.

Contoh kebijakan:

* default-src 'self'
* script-src
* style-src
* img-src
* connect-src
* frame-src

Kebijakan diperketat secara bertahap.

---

# 9. HTTP Security Headers

Header yang direkomendasikan:

```text
Content-Security-Policy

Strict-Transport-Security

Referrer-Policy

Permissions-Policy

X-Content-Type-Options

X-Frame-Options
```

Seluruh halaman publik menggunakan HTTPS.

---

# 10. Cross-Site Scripting (XSS)

Pencegahan:

* sanitasi input;
* output encoding;
* CSP;
* hindari penggunaan `innerHTML` tanpa sanitasi.

---

# 11. Cross-Site Request Forgery (CSRF)

Jika terdapat formulir yang mengubah data:

* gunakan CSRF Token;
* gunakan SameSite Cookie;
* validasi origin bila sesuai.

---

# 12. Clickjacking Protection

Gunakan:

* `X-Frame-Options`
* atau `frame-ancestors` pada CSP.

Halaman sensitif tidak boleh di-embed oleh situs lain tanpa izin.

---

# 13. Rate Limiting

Rate limiting diterapkan pada:

* Search API
* Contact Form
* Newsletter
* Login (future)
* API publik (future)

Tujuan:

* mencegah penyalahgunaan;
* mengurangi beban server.

---

# 14. Secrets Management

Rahasia aplikasi:

* API Key
* Access Token
* Database Credentials
* SMTP Credentials

Tidak boleh disimpan di dalam repository Git.

Gunakan environment variables dan secret manager.

---

# 15. Dependency Management

Seluruh dependency harus:

* diperbarui secara berkala;
* dipantau terhadap kerentanan;
* dihapus jika tidak digunakan.

Audit dependency dilakukan sebelum rilis utama.

---

# 16. File Upload (Future)

Jika mendukung unggahan file:

* batasi tipe file;
* batasi ukuran;
* ubah nama file;
* lakukan pemindaian malware bila memungkinkan;
* simpan di lokasi yang aman.

---

# 17. Backup & Recovery

Backup meliputi:

* database;
* konten;
* konfigurasi;
* aset penting.

Prinsip:

* otomatis;
* terenkripsi;
* diuji proses pemulihannya.

---

# 18. Logging & Monitoring

Catat kejadian penting seperti:

* login administrator;
* perubahan konfigurasi;
* error aplikasi;
* percobaan akses yang ditolak.

Log tidak boleh menyimpan data sensitif secara langsung.

---

# 19. Incident Response

Tahapan penanganan insiden:

```text
Detection

↓

Analysis

↓

Containment

↓

Recovery

↓

Post Incident Review
```

Setiap insiden harus didokumentasikan untuk perbaikan proses.

---

# 20. Privacy & Compliance

Website harus:

* memiliki Privacy Policy;
* memiliki Cookie Policy bila diperlukan;
* menjelaskan penggunaan data;
* memberikan pilihan persetujuan jika diwajibkan oleh regulasi.

Pengumpulan data dilakukan seminimal mungkin.

---

# 21. Security Testing

Lakukan pengujian:

* Static Analysis
* Dependency Audit
* Manual Testing
* Penetration Testing (berkala)
* Security Header Validation

Keamanan menjadi bagian dari proses CI/CD.

---

# 22. Future Security Roadmap

```text
Web Application Firewall (WAF)

Bot Protection

Security Dashboard

Single Sign-On (SSO)

API Gateway

Audit Trail

Automatic Secret Rotation

Zero Trust Architecture
```

---

# 23. Acceptance Criteria

* [ ] Seluruh halaman menggunakan HTTPS.
* [ ] Security Headers diterapkan.
* [ ] CSP dikonfigurasi.
* [ ] Input tervalidasi.
* [ ] Output di-escape.
* [ ] Secrets tidak disimpan di repository.
* [ ] Backup otomatis tersedia.
* [ ] Logging aktif.
* [ ] Monitoring keamanan tersedia.
* [ ] Security testing menjadi bagian dari proses rilis.

---

# 24. Hubungan dengan Dokumen Lain

Dokumen ini bergantung pada:

* 16-SEO.md
* 18-ANALYTICS.md
* 19-PERFORMANCE.md
* 20-ACCESSIBILITY.md
* 22-ANIMATION.md
* 24-ROADMAP.md
* 25-LAUNCH-CHECKLIST.md

---

# 25. Changelog

## v2.1

* Menetapkan Security sebagai bagian dari arsitektur produk.
* Mendefinisikan prinsip Security by Design, Least Privilege, dan Defense in Depth.
* Menambahkan standar untuk Authentication, Authorization, CSP, Security Headers, Input Validation, dan Secrets Management.
* Mendefinisikan strategi Backup, Monitoring, Incident Response, serta Security Testing.
* Menyiapkan fondasi keamanan untuk pengembangan fitur lanjutan seperti membership, API, dan marketplace.
