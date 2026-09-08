# Content and Intent Audit — ChatGPT Plus vs Gratis

Tanggal audit: 2026-08-29 (Asia/Jakarta)

## Keputusan

`KEEP_REWRITE_P0`

Artikel memenuhi intent komersial-informasional yang penting: membantu pembaca Indonesia memutuskan apakah biaya langganan ChatGPT Plus memberikan nilai praktis dibanding ChatGPT Free. URL ini menerima sedikitnya 24 internal link dari 11 artikel unik, sehingga mempertahankan URL dan memperbaiki isinya lebih aman daripada konsolidasi atau penghapusan.

## Baseline artikel

- 860 kata, 257 baris, dan 26 heading.
- 13 internal link, 0 external link, dan 0 gambar.
- Tidak memiliki `updatedDate`.
- Tidak mencatat tanggal pengujian, paket akun, label model, mode, prompt, output, limit yang benar-benar terlihat, atau kondisi browser.
- Klaim tentang model, kecepatan, prioritas server, upload file, gambar, pembuatan gambar, dan deep research belum ditautkan ke bukti primer atau bukti UI bertanggal.
- Tidak ada baris GSC ternormalisasi untuk URL ini pada snapshot yang tersedia.

Baseline SHA-256: `36A8E9F4221A483D8A8CB88672DB858177D960FF8779F1CD0C35C642EE5E39E4`.

## Risiko utama

1. **Fitur cepat berubah:** paket, model, kuota, dan fitur ChatGPT dapat berbeda menurut tanggal, akun, wilayah, serta rollout.
2. **Atribusi sebab yang lemah:** bila label model atau mode berbeda, selisih output tidak boleh dinyatakan semata-mata disebabkan oleh paket.
3. **Harga dan produk tercampur:** dokumentasi API, ChatGPT Work/Codex, dan paket aplikasi konsumen tidak saling menggantikan.
4. **Klaim kecepatan sulit dikontrol:** browser, jaringan, panjang output, dan beban layanan dapat memengaruhi durasi.
5. **Nilai langganan terlalu subjektif:** rekomendasi harus dihitung dari fitur yang benar-benar dipakai, bukan daftar fitur generik.

## Intent rewrite

Artikel baru harus menjawab tiga pertanyaan secara terpisah:

1. Apa yang terlihat berbeda pada paket Free dan Plus pada tanggal pengujian?
2. Pada tugas yang benar-benar sebanding, apakah kualitas hasilnya berbeda secara material?
3. Untuk profil penggunaan apa biaya Plus layak, belum perlu, atau perlu dievaluasi ulang?

Bagian fitur harus memakai inventaris UI bertanggal. Bagian kualitas harus memakai tujuh tugas terkontrol, output asli, dan skor dengan alasan. Bagian rekomendasi harus berbentuk skenario dan break-even waktu, bukan janji bahwa Plus selalu lebih baik.

## Definition of done

- Paket Free dan Plus diverifikasi pada dua sesi independen.
- Tujuh tugas dijalankan tanpa retry korektif dan menghasilkan 14 baris hasil atau alasan `NOT_AVAILABLE` yang jelas.
- Fitur yang tidak tersedia dipisahkan dari skor kualitas dan tidak diberi nilai nol.
- Semua klaim harga, model, kuota, dan fitur memiliki sumber resmi atau screenshot UI bertanggal.
- Skor ditinjau manusia sebelum rewrite.
- Artikel mengungkap perbedaan model/mode dan tidak membuat atribusi kausal yang tidak didukung.
- Build, canonical, schema, sitemap, dan internal link tetap lulus.

