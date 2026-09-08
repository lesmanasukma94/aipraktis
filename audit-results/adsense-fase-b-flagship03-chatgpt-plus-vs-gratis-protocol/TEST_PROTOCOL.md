# Test Protocol — ChatGPT Free vs ChatGPT Plus

## Tujuan

Mengukur perbedaan fitur yang terlihat dan kualitas hasil pada penggunaan normal. Protokol ini bukan stress test kuota dan tidak bertujuan menebak model backend.

## Prasyarat dua sesi

- Satu akun yang UI-nya memperlihatkan paket `Free`.
- Satu akun yang UI-nya memperlihatkan paket `Plus`.
- Gunakan dua profil browser atau dua sesi independen agar akun tidak tertukar.
- Samakan perangkat, browser, bahasa UI, ukuran jendela, jaringan, dan zona waktu `Asia/Jakarta` sejauh mungkin.
- Jalankan kedua paket pada hari yang sama, bergantian per tugas: Free T01 lalu Plus T01, dan seterusnya.
- Gunakan chat baru untuk setiap tugas, kecuali T07 yang sengaja terdiri dari beberapa giliran dalam satu chat.
- Nonaktifkan memory/personalization bila tersedia. Catat bila pengaturan tidak dapat disamakan.
- Jangan memilih model yang tidak tersedia pada salah satu paket untuk tugas yang hendak diagregasi.

## P00 — Inventaris sebelum pengujian

Untuk masing-masing akun, ambil screenshot yang memperlihatkan tanpa data sensitif:

- nama paket;
- harga dan periode tagihan yang terlihat;
- label model atau mode yang dipilih;
- pilihan model/mode lain yang terlihat;
- status upload file, web search, pembuatan gambar, memory, dan personalization;
- peringatan limit atau reset time bila muncul secara alami.

Catat teks UI persis. Jangan menyimpulkan bahwa dokumentasi API membuktikan model yang berjalan di aplikasi ChatGPT.

## Aturan eksekusi

- Kirim prompt identik tanpa follow-up korektif dan tanpa regenerasi.
- Catat waktu submit dan waktu output selesai, tetapi durasi hanya metrik deskriptif.
- Bila fitur tidak tersedia, tandai `NOT_AVAILABLE`, simpan bukti UI, dan jangan mengganti metode diam-diam.
- Bila file upload gagal karena kendala browser, tandai `EXECUTION_BLOCKED`; jangan menempelkan isi file hanya pada satu paket.
- Bila label model/mode berbeda, hasil boleh dilaporkan tetapi tidak boleh diklaim sebagai efek paket saja.
- Limit yang muncul selama penggunaan normal dicatat. Jangan mengirim prompt berulang hanya untuk menghabiskan kuota.
- Jangan memasukkan data pribadi, rahasia, atau materi berhak cipta yang tidak berizin.

## Tujuh tugas

### T01 — Penulisan Bahasa Indonesia dengan batas ketat

Prompt:

> Tulis email 180–220 kata dari pemilik toko online kepada pelanggan yang pesanannya terlambat tiga hari. Gunakan Bahasa Indonesia profesional tetapi hangat. Akui masalah tanpa menyalahkan kurir, tawarkan tepat dua pilihan penyelesaian, sertakan tenggat respons 2x24 jam, dan jangan menjanjikan kompensasi selain voucher Rp50.000. Setelah email, tulis jumlah katanya pada baris terpisah.

Ukur: jumlah kata aktual, jumlah constraint terpenuhi, tone, dan kesiapan pakai.

### T02 — Ringkasan dan ekstraksi dokumen

Input: `fixtures/T02-project-brief.md`.

Prompt:

> Ringkas dokumen terlampir menjadi: (1) lima keputusan, (2) tabel berisi pemilik tindakan, tenggat, dan risiko, serta (3) tiga pertanyaan yang belum terjawab. Cantumkan heading sumber untuk setiap keputusan. Jangan menambahkan fakta yang tidak ada di dokumen.

Ukur: keputusan benar, tindakan/tenggat benar, atribusi heading, dan fakta tambahan.

### T03 — Debugging kode

Input: `fixtures/T03-debug-task.js`.

Prompt:

> Temukan semua bug pada kode terlampir. Berikan patch minimal, jelaskan setiap perubahan, dan tulis hasil yang diharapkan untuk tiap test. Jangan mengubah API publik dan jangan menambah dependency.

Ukur: bug yang ditemukan dari empat bug tertanam, ketepatan patch, regresi, dan hasil test yang diprediksi.

### T04 — Analisis CSV dengan ground truth

Input: `fixtures/T04-transactions.csv`.

Prompt:

> Audit CSV terlampir. Laporkan masalah kualitas data, hitung omzet bersih per kategori sebelum pembersihan, lalu berikan total setelah menghapus duplikat persis. Identifikasi tiga anomali terpenting dan tulis langkah pembersihan yang dapat direproduksi. Pisahkan hasil hitung dari asumsi; jangan mengoreksi outlier tanpa aturan bisnis.

Ukur: masalah data yang ditemukan dan kecocokan angka dengan `fixtures/GROUND_TRUTH.json`.

### T05 — Pembuatan gambar

Prompt:

> Buat gambar persegi 1:1 bergaya editorial minimalis untuk artikel teknologi Indonesia. Tampilkan dua jalur abstrak bertanda “GRATIS” dan “PLUS” yang menuju tujuan berbeda, gunakan palet biru tua, putih, dan aksen emas, tanpa logo perusahaan, tanpa watermark, dan tanpa teks lain.

Ukur terpisah: ketersediaan fitur; kepatuhan rasio, teks, palet, larangan logo/watermark; artefak visual; kesiapan publikasi. Jika salah satu paket tidak menyediakan fitur, jangan beri skor nol dan jangan masukkan T05 ke agregat kualitas.

### T06 — Riset web bersumber resmi

Prompt:

> Cari sumber resmi OpenAI yang dapat digunakan untuk memeriksa perbedaan ChatGPT Free dan ChatGPT Plus pada hari ini. Berikan maksimal lima sumber langsung, tanggal akses, klaim spesifik yang didukung setiap sumber, dan batas bukti masing-masing. Bedakan aplikasi ChatGPT, ChatGPT Work/Codex, dan API. Jika sumber resmi tidak membuktikan suatu fitur atau limit, katakan bukti tidak cukup.

Ukur: domain resmi, URL langsung valid, pemisahan produk, kehati-hatian, dan ketiadaan klaim yang melampaui sumber. Web search harus aktif pada kedua sesi agar skor dapat dibandingkan.

### T07 — Revisi multigilir dan retensi constraint

Gunakan satu chat baru per paket dan kirim tiga pesan berikut berurutan tanpa mengulang instruksi lama.

Prompt 1:

> Buat rencana kampanye 7 hari untuk kedai kopi lokal dengan anggaran Rp1.400.000. Gunakan tepat tiga kanal: Instagram, WhatsApp, dan promosi di toko. Jangan gunakan diskon; tawarkan bonus topping. Sertakan alokasi biaya per kanal dan total.

Prompt 2:

> Revisi hari 4–7 untuk menargetkan pekerja kantor, tetapi pertahankan semua batas sebelumnya. Tambahkan satu metrik keberhasilan per kanal.

Prompt 3:

> Ringkas versi final dalam tabel. Ubah anggaran total menjadi Rp1.750.000 secara proporsional, tetap tanpa diskon, dan jelaskan pembulatan dalam dua kalimat.

Ukur: retensi tiga kanal, larangan diskon, bonus topping, target baru, metrik per kanal, aritmetika, dan transparansi pembulatan.

## Rubrik 1–5

Setiap hasil yang dapat dibandingkan dinilai pada lima dimensi:

1. `instruction_adherence`
2. `accuracy`
3. `completeness`
4. `clarity`
5. `practical_utility`

Nilai 5 memenuhi penuh tanpa koreksi material; 4 memerlukan koreksi kecil; 3 memiliki kekurangan nyata tetapi masih berguna; 2 memerlukan perbaikan besar; 1 gagal atau menyesatkan. Reviewer wajib menulis alasan berbasis output.

`NOT_AVAILABLE` dan `EXECUTION_BLOCKED` bukan nilai nol. Agregat hanya dihitung pada irisan tugas yang dijalankan dalam kondisi sebanding. Ketersediaan fitur dilaporkan dalam tabel terpisah.

## Bukti

Folder bukti dibuat hanya saat eksekusi:

`evidence/YYYY-MM-DD/{free|plus}/`

Nama minimal:

- `00-plan-model.png`
- `T01-prompt.png` dan `T01-result.png`
- `T01-output.txt`
- `T01-metadata.json`

Ulangi pola untuk T02–T07. Screenshot harus menunjukkan paket/sesi, prompt, dan bagian output yang dinilai. Samarkan email, nama akun, detail pembayaran, dan identifier pribadi tanpa menutupi bukti substantif.

## Gate editorial

Rewrite dibuka hanya jika:

- kedua paket terverifikasi secara visual;
- semua 14 baris memiliki hasil atau status non-skor yang dapat dijelaskan;
- output utuh dan screenshot tersedia;
- klaim resmi diverifikasi ulang pada tanggal pengujian;
- reviewer manusia menyetujui skor dan interpretasi;
- kesimpulan memisahkan perbedaan fitur, kualitas, limit teramati, dan nilai biaya.

