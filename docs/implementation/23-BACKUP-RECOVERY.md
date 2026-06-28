# AI Praktis Indonesia v2

# 23-BACKUP-RECOVERY.md

> **Document Version:** 1.0
> **Status:** Active
> **Last Updated:** June 2026

---

# 1. Tujuan

Dokumen ini mendefinisikan standar Backup & Recovery AI Praktis Indonesia.

Tujuannya adalah:

* melindungi aset digital;
* meminimalkan kehilangan data;
* mempercepat proses pemulihan;
* menjaga keberlangsungan operasional;
* memastikan setiap aset penting dapat dipulihkan.

---

# 2. Prinsip Backup

Seluruh strategi backup mengikuti prinsip berikut.

* Backup by Default
* Multiple Copies
* Automated When Possible
* Regular Verification
* Fast Recovery
* Documentation First

Backup dianggap berhasil hanya jika dapat dipulihkan.

---

# 3. Ruang Lingkup

Dokumen ini mencakup:

* Source Code
* Content
* Assets
* Documentation
* Configuration
* Environment Variables
* Deployment History

---

# 4. Aset yang Dilindungi

Aset utama yang harus dipertahankan:

| Aset                    | Prioritas     |
| ----------------------- | ------------- |
| Git Repository          | Sangat Tinggi |
| Dokumentasi             | Sangat Tinggi |
| Konten Markdown         | Sangat Tinggi |
| Gambar & Asset          | Tinggi        |
| Konfigurasi Build       | Tinggi        |
| Environment Variables   | Tinggi        |
| Analytics Configuration | Sedang        |

---

# 5. Strategi Backup

Gunakan pendekatan **3-2-1** bila memungkinkan:

* minimal 3 salinan data;
* disimpan pada 2 media berbeda;
* minimal 1 salinan berada di lokasi berbeda (off-site).

Contoh implementasi:

* GitHub Repository
* Salinan lokal
* Arsip berkala pada penyimpanan cloud

---

# 6. Repository Backup

Repository merupakan sumber utama proyek.

Aturan:

* seluruh perubahan dikomit ke Git;
* seluruh commit dipush ke GitHub;
* gunakan Git Tag untuk setiap release production;
* jangan menyimpan perubahan penting hanya di komputer lokal.

---

# 7. Content Backup

Konten yang harus dicadangkan:

* artikel;
* AI Tools;
* Prompt Library;
* Template Library;
* Glossary;
* Resource Center.

Seluruh konten mengikuti sistem versioning Git.

---

# 8. Asset Backup

Cadangkan:

* logo;
* ilustrasi;
* Open Graph Image;
* favicon;
* screenshot;
* aset visual lainnya.

Gunakan struktur folder yang konsisten agar mudah dipulihkan.

---

# 9. Documentation Backup

Folder berikut harus selalu tersinkronisasi:

```text id="j8myah"
docs/redesign/

docs/implementation/
```

Dokumentasi adalah bagian penting dari aset proyek.

---

# 10. Environment Backup

Environment Variables:

* tidak disimpan di repository;
* didokumentasikan nama dan fungsinya;
* disimpan melalui platform deployment atau password manager yang aman.

Jangan menyimpan nilai rahasia dalam file Markdown.

---

# 11. Backup Schedule

| Frekuensi      | Aktivitas                          |
| -------------- | ---------------------------------- |
| Setiap Commit  | Git Commit                         |
| Harian         | Git Push                           |
| Mingguan       | Verifikasi repository & deployment |
| Bulanan        | Arsip proyek & audit backup        |
| Setiap Release | Git Tag & validasi rollback        |

---

# 12. Recovery Strategy

Jika terjadi masalah:

1. Identifikasi penyebab.
2. Tentukan aset yang terdampak.
3. Pilih sumber backup yang sesuai.
4. Pulihkan data.
5. Verifikasi hasil pemulihan.
6. Dokumentasikan insiden.

---

# 13. Rollback

Rollback dapat dilakukan dengan:

* Git Revert;
* Git Tag;
* deployment sebelumnya;
* branch stabil.

Selalu lakukan pengujian setelah rollback.

---

# 14. Disaster Recovery

Skenario yang harus dipersiapkan:

* kehilangan repository lokal;
* deployment gagal;
* penghapusan file tidak sengaja;
* kerusakan aset;
* kesalahan konfigurasi;
* kompromi akun.

Setiap skenario harus memiliki prosedur pemulihan yang jelas.

---

# 15. Recovery Testing

Lakukan simulasi pemulihan secara berkala.

Minimal:

* clone repository baru;
* build proyek dari awal;
* restore deployment;
* verifikasi dokumentasi.

Recovery yang tidak pernah diuji dianggap belum tervalidasi.

---

# 16. Best Practices

* Commit sesering mungkin.
* Push perubahan setiap hari kerja.
* Gunakan Git Tag untuk release.
* Simpan salinan arsip secara berkala.
* Dokumentasikan perubahan konfigurasi.

---

# 17. Anti-pattern

Hindari:

* menyimpan perubahan penting hanya di lokal;
* tidak melakukan push selama beberapa hari;
* menghapus branch tanpa memastikan sudah di-merge;
* menyimpan secret di repository;
* tidak pernah menguji proses recovery.

---

# 18. Acceptance Criteria

Strategi Backup & Recovery dianggap memenuhi standar apabila:

* [ ] Repository tersinkronisasi.
* [ ] Dokumentasi dicadangkan.
* [ ] Asset penting dicadangkan.
* [ ] Git Tag digunakan pada release.
* [ ] Recovery pernah diuji.
* [ ] Rollback terdokumentasi.
* [ ] Tidak ada aset kritis yang hanya memiliki satu salinan.

---

# 19. Hubungan dengan Dokumen Lain

Dokumen ini berkaitan dengan:

* 14-DEPLOYMENT.md
* 16-CI-CD.md
* 17-MONITORING.md
* 18-SECURITY-IMPLEMENTATION.md
* 19-MAINTENANCE.md
* 22-RELEASE-MANAGEMENT.md

---

# 20. Changelog

## v1.0

* Menetapkan standar Backup & Recovery untuk AI Praktis Indonesia.
* Mendefinisikan strategi backup, jadwal, pemulihan, rollback, dan disaster recovery.
* Menjadi acuan perlindungan aset digital dan keberlangsungan operasional proyek.
