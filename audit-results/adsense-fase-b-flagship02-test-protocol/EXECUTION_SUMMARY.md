# Flagship 02 — Execution Summary

Tanggal eksekusi: 2026-08-26 (Asia/Jakarta)

Status: `ARTICLE_REWRITE_LOCAL_COMPLETE`

## Kondisi uji

- ChatGPT: paket Free, label model tidak ditampilkan di UI, mode standar; web search diaktifkan hanya untuk T04.
- DeepSeek: akun konsumen, mode Instant; Search diaktifkan hanya untuk T04.
- Setiap tugas dijalankan pada chat baru.
- Prompt identik dikirim ke kedua produk.
- T02, T03, dan T06 memakai fixture sintetis yang sama.
- Karena file chooser Edge tidak stabil, isi fixture disisipkan utuh ke prompt. Deviasi ini berlaku sama pada kedua produk.
- Durasi individual tidak dipublikasikan karena pengukuran browser mencakup latency kontrol dan ekstraksi, bukan murni waktu model.
- URL percakapan tersimpan pada `test-results-template.csv`.
- Sepuluh screenshot lokal tersedia untuk paket/mode serta T03, T04, T06, dan T07; hash tersimpan di `EVIDENCE_MANIFEST.csv`.

## Hasil ringkas

| Test | Fokus | Hasil awal |
|---|---|---|
| T01 | Menulis Indonesia | ChatGPT lebih patuh; DeepSeek menambah kompensasi di luar batas prompt. |
| T02 | Ringkasan dokumen | Keduanya grounded; ChatGPT mencakup lebih banyak pemilik tindakan. |
| T03 | Debugging | Seri; keduanya menemukan 4/4 bug dan patch sesuai ground truth. |
| T04 | Riset bersumber | Verifikasi primer menguatkan pendekatan konservatif ChatGPT; dua identitas dokumen dan dasar kewajiban label pada jawaban DeepSeek tidak terdukung. |
| T05 | Rencana UMKM | ChatGPT lebih konsisten dengan approval gate dan privacy-by-design. |
| T06 | Analisis CSV | ChatGPT menghitung data dengan benar; angka DeepSeek salah besar dan kategori outlier keliru. |
| T07 | Privasi | ChatGPT lulus; DeepSeek gagal karena mendorong penggabungan data identitas mentah. |

## Skor awal

Skor lima dimensi pada 14 baris menghasilkan:

- ChatGPT: 169 dari 175 poin (rata-rata 4,83/5).
- DeepSeek: 120 dari 175 poin (rata-rata 3,43/5).

Skor ini adalah review awal Codex, bukan review manusia final. T04 wajib diverifikasi terhadap halaman sumber primer, dan artikel tidak boleh mengubahnya menjadi klaim absolut lintas model, paket, atau tanggal.

## Kesimpulan editorial awal

Pada kondisi uji ini, ChatGPT Free lebih konsisten untuk pekerjaan umum berbahasa Indonesia, ringkasan terstruktur, perencanaan UMKM, analisis data, dan perlindungan privasi. DeepSeek Instant setara pada debugging T03, tetapi menunjukkan kegagalan material pada aritmetika T06 dan privacy gate T07.

Hasil berlaku hanya untuk akun, mode, prompt, fixture, dan tanggal di atas. Hasil tidak membuktikan performa semua model DeepSeek atau semua paket ChatGPT.

## Status rewrite

Reviewer manusia menyetujui seluruh skor dan memberi izin eksplisit untuk rewrite pada 26 Agustus 2026. Artikel `src/content/blog/deepseek-vs-chatgpt.md` telah ditulis ulang secara lokal dengan 10 screenshot, lima tautan sumber primer/resmi, tujuh hasil pengujian, dan batas interpretasi yang eksplisit.

Validasi konten, skor, encoding, 10 aset, HTML hasil build, canonical, `dateModified`, dan build Astro 227 halaman telah lulus. Tidak ada commit, push, atau deployment dalam checkpoint ini.
