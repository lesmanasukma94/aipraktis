# Content and Intent Audit — DeepSeek vs ChatGPT

Tanggal audit: 2026-08-26 (Asia/Jakarta)

## Keputusan

`KEEP_REWRITE_P0`

Artikel memiliki intent yang layak dipertahankan: membantu pembaca Indonesia memilih chatbot untuk menulis, coding, analisis dokumen, riset, dan pekerjaan sehari-hari. URL juga memiliki nilai internal karena menerima tautan dari halaman beranda dan beberapa artikel cluster. Namun, isi sekarang belum memenuhi janji “perbandingan lengkap” karena sebagian besar kesimpulannya generik dan tidak ditopang bukti langsung.

## Baseline artikel

- 2.772 kata, 741 baris, dan 67 heading.
- 30 internal link dan 0 external link.
- 0 screenshot atau referensi gambar lokal.
- Tidak mencatat tanggal pengujian, label model, paket akun, prompt, output, durasi, atau kondisi fitur.
- Tidak mencantumkan sumber primer untuk klaim model, fitur, harga, dan batas penggunaan.
- Tabel perbandingan memakai kategori umum tanpa data uji yang dapat direproduksi.
- Seluruh target link internal terbangun, termasuk category route dinamis.
- Halaman hasil build memiliki canonical URL, Article schema, dan `dateModified`.

## Risiko utama

1. **Kedaluwarsa:** dokumentasi DeepSeek yang diverifikasi pada hari audit sudah mencantumkan keluarga V4. Artikel tidak mengikat klaimnya pada versi tertentu.
2. **Perbandingan semu:** kesimpulan “lebih baik” muncul tanpa input identik dan output asli.
3. **Pencampuran produk:** harga API tidak sama dengan paket aplikasi konsumen. Katalog model API juga tidak membuktikan model yang tersedia pada akun ChatGPT atau DeepSeek tertentu.
4. **Overlap:** struktur dan frasa berpotensi tumpang tindih dengan artikel perbandingan chatbot lain.
5. **Kepercayaan:** tidak ada bukti visual atau sumber primer yang memungkinkan pembaca memeriksa klaim.

## Intent rewrite

Judul dan pembuka harus menjelaskan bahwa hasil berlaku untuk model, paket, mode, dan tanggal yang benar-benar diuji. Artikel baru sebaiknya berpusat pada tabel hasil tujuh tugas identik, cuplikan output yang relevan, kegagalan nyata, biaya/paket yang dibedakan antara aplikasi dan API, serta rekomendasi bersyarat berdasarkan kebutuhan pengguna.

Bagian definisi LLM, sejarah umum, daftar kelebihan generik, dan pengulangan internal-link harus dipangkas. Artikel pendukung tetap menjadi tempat untuk panduan pemula; Flagship 02 fokus pada keputusan perbandingan berbasis bukti.

## Definition of done

- Tujuh pasang hasil uji lengkap dan dapat direproduksi.
- Minimal satu screenshot konteks model/paket untuk setiap produk dan satu screenshot hasil untuk setiap tugas penting.
- Setiap klaim model, paket, harga, konteks, dan batas memiliki sumber primer bertanggal.
- Skor akhir dapat ditelusuri ke rubric per tugas dan alasan reviewer.
- Tidak ada klaim absolut yang melampaui kondisi uji.
- Build, canonical, schema, sitemap, dan link internal tetap lulus.
