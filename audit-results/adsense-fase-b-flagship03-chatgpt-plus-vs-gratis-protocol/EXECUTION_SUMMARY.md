# Execution Summary — ChatGPT Free vs Plus

Tanggal pengujian: 29 Agustus 2026  
Zona waktu: Asia/Jakarta  
Status: skor disetujui dan rewrite artikel selesai divalidasi secara lokal pada 8 September 2026

## Ringkasan skor yang disetujui

| Paket | Total | Maksimum | Rata-rata |
| --- | ---: | ---: | ---: |
| Free | 158 | 175 | 4,514 |
| Plus | 171 | 175 | 4,886 |

Selisih yang disetujui adalah 13 poin dari 175, atau 0,371 poin rata-rata per dimensi, untuk Plus. Ini adalah hasil satu kali pada dua akun dengan mode terlihat berbeda, bukan estimasi efek kausal paket.

## Hasil per tugas

| Tugas | Free | Plus | Temuan pembeda |
| --- | ---: | ---: | --- |
| T01 penulisan | 5,0 | 5,0 | Keduanya memenuhi seluruh batas email. |
| T02 dokumen | 4,2 | 5,0 | Free tidak menyertakan deskripsi tindakan dalam tabel dan menggabungkan dua peran terbuka menjadi satu pertanyaan. |
| T03 debugging | 5,0 | 5,0 | Keduanya menemukan empat bug dan memberi hasil test yang benar. |
| T04 CSV | 4,0 | 5,0 | Free salah Rp5.000 pada kategori Snack serta dua total; Plus cocok dengan ground truth. |
| T05 gambar | 4,8 | 4,8 | Fitur tersedia dan prompt dipenuhi pada keduanya; bukti tersimpan sebagai crop UI. |
| T06 riset web | 3,6 | 4,4 | Plus lebih disiplin memisahkan produk; klaim consumer-plan dan allowance tetap perlu verifikasi tautan langsung sebelum publikasi. |
| T07 multigilir | 5,0 | 5,0 | Keduanya mempertahankan constraint dan menghitung Rp1.750.000 dengan benar. |

## Ketersediaan fitur yang diamati

| Fitur | Free | Plus |
| --- | --- | --- |
| Upload file | Berhasil pada T02 | Berhasil pada T02 |
| Pencarian web | Berhasil pada T06 | Berhasil pada T06 |
| Pembuatan gambar | Berhasil pada T05 | Berhasil pada T05 |
| Mode terlihat | Think | High |
| Limit alami | Tidak muncul | Tidak muncul |

Tidak ada uji yang sengaja menghabiskan kuota. Ketiadaan peringatan limit tidak membuktikan limitnya sama atau tidak terbatas.

## Temuan faktual

- Free dan Plus sama-sama menyelesaikan ketujuh tugas.
- Free gagal pada satu penghitungan material di T04: Snack seharusnya Rp168.000, total mentah Rp3.108.000, dan total setelah deduplikasi Rp3.068.000.
- Plus cocok dengan ground truth T02–T04.
- Kedua paket membuat gambar yang memenuhi rasio, palet, dua label, dan larangan logo/watermark.
- Kedua paket mempertahankan constraint tiga giliran T07.
- Halaman pricing resmi OpenAI untuk Work/Codex menyatakan Free $0/bulan dan Plus $20/bulan serta menjelaskan bahwa Work dan Codex berbagi penggunaan.
- Dokumentasi model API resmi mengonfirmasi harga token GPT-5.6 Sol, Terra, dan Luna yang dikutip hasil Plus T06. Harga API bukan bukti limit ChatGPT consumer.

## Deviasi protokol

1. Eksekusi beralih menjadi dua blok browser karena koneksi ekstensi Chrome dan Edge tidak stabil bila dipakai bergantian.
2. T03 dan T04 menggunakan isi fixture identik secara inline. T02 tetap menggunakan upload file yang sama.
3. Browser berbeda: Edge untuk Free dan Chrome untuk Plus.
4. Mode terlihat berbeda: `Think` untuk Free dan `High` untuk Plus.
5. Timestamp T01 presisi tidak tersimpan. Percakapan menunjukkan waktu sekitar 06:10 WIB.
6. Bukti gambar T05 merupakan crop UI karena pengambilan aset asli tidak tersedia melalui sesi browser.

## Implikasi editorial

Rewrite sebaiknya menyatakan apa yang benar-benar diamati: kedua paket mampu menyelesaikan tugas umum, sementara Plus unggul pada satu ekstraksi dokumen, satu audit angka, dan kehati-hatian riset dalam sampel ini. Artikel tidak boleh menyatakan bahwa Plus selalu lebih akurat, selalu lebih cepat, atau bahwa perbedaan disebabkan paket saja. Klaim fitur dan harga consumer harus diverifikasi ulang pada halaman produk resmi saat rewrite berlangsung.

## Hasil editorial

Rewrite artikel produksi selesai pada 8 September 2026. Naskah mempertahankan slug, menyajikan skor yang disetujui, membedakan observasi dari dokumentasi resmi, menyertakan empat bukti visual, dan mengungkapkan seluruh keterbatasan utama. Build lokal lulus. Commit, push, dan deployment belum dilakukan.
