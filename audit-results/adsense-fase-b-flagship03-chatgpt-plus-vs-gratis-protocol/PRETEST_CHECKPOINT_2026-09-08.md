# Flagship 03 — Pretest Checkpoint

Tanggal: 2026-09-08 (Asia/Jakarta)

Status: `OFFICIAL_SOURCES_REVERIFIED_DUAL_ACCOUNT_EVIDENCE_PENDING`

## Hasil verifikasi sumber resmi

Lima halaman dokumentasi resmi OpenAI diperiksa ulang pada tanggal checkpoint dan dicatat di `source-register.csv`:

1. `https://learn.chatgpt.com/docs/pricing`
2. `https://learn.chatgpt.com/docs/models`
3. `https://learn.chatgpt.com/docs/web-search`
4. `https://learn.chatgpt.com/docs/image-generation`
5. `https://learn.chatgpt.com/docs/artifacts-viewer`

Halaman pricing menampilkan konteks Free USD 0/bulan dan Plus USD 20/bulan untuk ChatGPT Work/Codex. Halaman lain mendokumentasikan kontrol model, pencarian web, pembuatan gambar, dan alur file. Namun, kelimanya tidak membuktikan secara lengkap harga checkout regional, label model, kuota, atau ketersediaan fitur pada dua akun konsumen yang akan diuji.

## Keputusan bukti

- Semua sumber resmi berstatus `VERIFIED_LIMITED`.
- Bukti UI bertanggal dari akun Free dan Plus tetap menjadi sumber utama untuk inventaris paket.
- Harga lokal atau pajak tidak boleh disimpulkan dari angka USD di dokumentasi.
- Ketersediaan fitur tidak boleh disimpulkan dari dokumentasi umum bila kontrolnya tidak terlihat pada akun uji.
- Perbedaan output tidak boleh diatribusikan hanya kepada paket bila label model atau mode berbeda.

## Gate yang masih tertutup

Eksekusi T01–T07 dan rewrite artikel belum boleh dimulai sampai dua sesi independen tersedia dan UI masing-masing memperlihatkan paket Free dan Plus. Pada checkpoint ini:

- 0 dari 14 baris hasil telah dieksekusi;
- akun Free belum diverifikasi;
- akun Plus belum diverifikasi;
- belum ada screenshot paket/model;
- belum ada review manusia atas skor;
- artikel produksi tetap tidak diubah.

## Langkah berikutnya

1. Hubungkan dua sesi browser independen pada hari pengujian.
2. Ambil `00-plan-model.png` untuk Free dan Plus setelah menyamarkan data pribadi.
3. Jalankan T01 Free lalu T01 Plus, lanjut bergantian sampai T07.
4. Simpan output utuh, metadata, dan screenshot sesuai `TEST_PROTOCOL.md`.
5. Isi 14 baris hasil; gunakan `NOT_AVAILABLE` atau `EXECUTION_BLOCKED` tanpa skor bila relevan.
6. Minta reviewer manusia menyetujui skor sebelum membuka gate rewrite.
