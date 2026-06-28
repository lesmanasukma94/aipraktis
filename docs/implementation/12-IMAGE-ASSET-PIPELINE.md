# AI Praktis Indonesia v2

# 12-IMAGE-ASSET-PIPELINE.md

> **Document Version:** 1.0
> **Status:** Active
> **Last Updated:** June 2026

---

# 1. Tujuan

Dokumen ini mendefinisikan standar pengelolaan gambar dan aset visual pada AI Praktis Indonesia.

Tujuan utama:

* menjaga konsistensi aset;
* meningkatkan performa website;
* mendukung SEO;
* mempermudah pengelolaan;
* memastikan seluruh aset siap untuk berbagai perangkat.

---

# 2. Prinsip Pengelolaan Aset

Seluruh aset mengikuti prinsip berikut.

* Performance First
* Responsive Images
* SEO Friendly
* Accessible
* Reusable
* Consistent Naming

---

# 3. Jenis Aset

Website menggunakan beberapa jenis aset.

| Jenis            | Contoh               |
| ---------------- | -------------------- |
| Hero Image       | Banner Homepage      |
| Featured Image   | Thumbnail Artikel    |
| Tool Logo        | Logo AI Tool         |
| Icon             | SVG UI               |
| Illustration     | Ilustrasi Halaman    |
| Open Graph Image | Preview Media Sosial |
| Author Avatar    | Foto Penulis         |
| Screenshot       | Tutorial             |

---

# 4. Struktur Folder

```text
src/

assets/
├── images/
│   ├── blog/
│   ├── tools/
│   ├── prompts/
│   ├── templates/
│   ├── glossary/
│   ├── news/
│   ├── authors/
│   ├── og/
│   └── ui/
│
└── icons/
```

Folder mengikuti jenis konten, bukan tanggal.

---

# 5. Penamaan File

Gunakan nama yang deskriptif.

Contoh:

```text
cara-menggunakan-chatgpt.webp

chatgpt-logo.svg

prompt-email-marketing.webp

og-chatgpt-guide.webp
```

Aturan:

* huruf kecil;
* gunakan tanda hubung (`-`);
* tanpa spasi;
* tanpa karakter khusus.

---

# 6. Format Gambar

Prioritas format:

| Format | Penggunaan           |
| ------ | -------------------- |
| AVIF   | Pilihan utama        |
| WebP   | Default              |
| PNG    | Transparansi         |
| SVG    | Logo & Ikon          |
| JPG    | Foto bila diperlukan |

Hindari GIF untuk animasi.

---

# 7. Ukuran Gambar

Ukuran yang disarankan.

| Jenis          |      Ukuran |
| -------------- | ----------: |
| Hero           | 1920 × 1080 |
| Featured Image |  1200 × 630 |
| Open Graph     |  1200 × 630 |
| Tool Logo      |   512 × 512 |
| Author Avatar  |   256 × 256 |
| Thumbnail Card |   800 × 450 |

---

# 8. Responsive Images

Setiap gambar harus:

* memiliki beberapa ukuran bila diperlukan;
* menggunakan atribut `width` dan `height`;
* mendukung `srcset` dan `sizes` jika menggunakan Astro Image.

---

# 9. Optimasi

Sebelum digunakan:

* kompres gambar;
* hapus metadata yang tidak diperlukan;
* pilih format modern;
* gunakan kualitas yang seimbang.

---

# 10. Open Graph Image

Setiap halaman publik memiliki OG Image.

Ukuran standar:

```text
1200 × 630 px
```

Nama file mengikuti slug halaman.

---

# 11. Logo AI Tools

Logo AI Tools:

* format SVG jika tersedia;
* fallback ke WebP atau PNG;
* ukuran konsisten;
* latar belakang transparan bila memungkinkan.

---

# 12. Screenshot Tutorial

Screenshot harus:

* jelas;
* terbaru;
* dipotong seperlunya;
* diberi nama sesuai topik.

Gunakan anotasi hanya bila membantu pemahaman.

---

# 13. Lazy Loading

Gunakan lazy loading untuk:

* gambar di bawah fold;
* screenshot;
* ilustrasi;
* avatar.

Hero image tidak menggunakan lazy loading.

---

# 14. Accessibility

Seluruh gambar harus:

* memiliki atribut `alt`;
* bersifat dekoratif bila tidak menyampaikan informasi (alt kosong);
* tidak menyampaikan informasi penting hanya melalui gambar.

---

# 15. SEO

Featured Image dan OG Image harus:

* relevan dengan isi halaman;
* memiliki nama file deskriptif;
* tidak terlalu besar;
* mendukung preview media sosial.

---

# 16. Asset Pipeline

Alur pengelolaan aset:

```text
Desain / Screenshot
        │
        ▼
Optimasi
        │
        ▼
Penamaan File
        │
        ▼
Penyimpanan
        │
        ▼
Build Astro
        │
        ▼
Production
```

---

# 17. Best Practices

* Gunakan SVG untuk ikon.
* Gunakan WebP atau AVIF untuk gambar.
* Hindari duplikasi aset.
* Simpan gambar sesuai kategori.
* Optimalkan sebelum commit.
* Gunakan ukuran yang sesuai kebutuhan tampilan.

---

# 18. Anti-pattern

Hindari:

* gambar berukuran sangat besar;
* nama file seperti `IMG001.jpg`;
* penggunaan format PNG untuk foto tanpa alasan;
* gambar tanpa `alt`;
* menyimpan aset di lokasi acak.

---

# 19. Acceptance Criteria

Implementasi dianggap sesuai apabila:

* [ ] Struktur folder konsisten.
* [ ] Nama file mengikuti standar.
* [ ] Format modern digunakan.
* [ ] Gambar telah dioptimalkan.
* [ ] Seluruh gambar memiliki `alt`.
* [ ] Featured Image dan OG Image tersedia untuk setiap halaman publik.
* [ ] Lazy loading diterapkan pada gambar non-kritis.

---

# 20. Hubungan dengan Dokumen Lain

Dokumen ini berkaitan dengan:

* 08-SEO-IMPLEMENTATION.md
* 09-PERFORMANCE-IMPLEMENTATION.md
* 10-DESIGN-SYSTEM-IMPLEMENTATION.md
* 11-CMS-IMPLEMENTATION.md
* docs/redesign/09-DESIGN-SYSTEM.md

---

# 21. Changelog

## v1.0

* Menetapkan standar pengelolaan aset visual.
* Mendefinisikan struktur folder, format gambar, ukuran, optimasi, dan pipeline aset.
* Menjadi acuan implementasi seluruh gambar dan aset AI Praktis Indonesia.
