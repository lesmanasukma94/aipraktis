$ErrorActionPreference = "Stop"

$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$fixtureDir = Join-Path $scriptRoot "fixtures"
New-Item -ItemType Directory -Path $fixtureDir -Force | Out-Null

$memo = @'
# Memo Rapat Proyek Lentera

Tanggal rapat: 18 Agustus 2026
Lokasi: Kantor Koperasi Lentera, Bandung
Fasilitator: Rani Kusuma
Peserta: Rani Kusuma, Bima Hartono, Sari Wulandari, Dedi Pranoto, Lilis Amelia, Yoga Mahendra, dan Nanda Putri

## Latar belakang

Koperasi Lentera menjalankan program digitalisasi pemesanan untuk 42 warung anggota. Selama enam bulan terakhir, pesanan dicatat melalui pesan pribadi dan dipindahkan manual ke spreadsheet. Cara ini memicu pesanan ganda, stok yang terlambat diperbarui, dan laporan mingguan yang tidak konsisten. Tim sepakat bahwa proyek tidak bertujuan membuat aplikasi besar. Sasaran tahap pertama adalah alur pemesanan sederhana yang dapat dipakai pemilik warung melalui telepon genggam, memiliki jejak perubahan, dan tidak menambah beban administrasi lebih dari lima menit per hari.

Anggaran tahap pertama dibatasi Rp48.000.000 untuk tiga bulan. Nilai tersebut mencakup konfigurasi platform, pelatihan, dukungan, perangkat cadangan, dan kontingensi. Biaya langganan setelah masa proyek tidak boleh melebihi Rp2.500.000 per bulan tanpa persetujuan pengurus. Data pelanggan tidak boleh dipakai untuk iklan pihak ketiga. Nomor telepon hanya disimpan selama diperlukan untuk konfirmasi pesanan dan harus dihapus paling lambat 90 hari setelah transaksi selesai.

## Keputusan ruang lingkup

Peserta menyetujui bahwa versi awal hanya menangani katalog, pesanan, status pembayaran, dan status pengiriman. Program loyalitas, rekomendasi produk otomatis, integrasi marketplace, serta chatbot generatif ditunda. Rani menekankan bahwa penundaan ini bukan penolakan permanen; fitur tersebut baru dinilai setelah alur dasar stabil selama empat minggu. Setiap perubahan ruang lingkup harus memiliki estimasi biaya dan dampak privasi sebelum dibahas kembali.

Identitas pelanggan dibatasi pada nama panggilan, nomor telepon, dan kecamatan. Alamat lengkap tidak disimpan dalam dashboard pusat; alamat diteruskan kepada kurir melalui tautan yang kedaluwarsa setelah 24 jam. Bima akan memeriksa apakah penyedia platform mendukung penghapusan otomatis dan pencatatan akses. Jika dua persyaratan itu tidak tersedia, tim harus menggunakan alternatif atau menunda peluncuran.

## Uji coba warung

Enam warung dipilih untuk pilot: Melati, Sumber Rejeki, Pojok Kita, Rasa Ibu, Cendana, dan Harapan Baru. Pemilihan mencakup volume tinggi dan rendah serta dua lokasi dengan koneksi internet tidak stabil. Sari bertanggung jawab memperoleh persetujuan tertulis dari keenam pemilik paling lambat 25 Agustus 2026. Persetujuan harus menjelaskan data yang dikumpulkan, lama penyimpanan, pihak yang dapat mengakses, dan cara keluar dari pilot.

Pilot direncanakan mulai 2 September 2026 dan berjalan 14 hari. Lilis akan membuat panduan satu halaman dan video maksimal tiga menit. Draf pertama harus selesai 27 Agustus, kemudian diuji oleh dua pemilik warung yang tidak mengikuti rapat. Perbaikan panduan harus selesai 30 Agustus. Apabila lebih dari dua pemilik membutuhkan bantuan lebih dari 30 menit pada hari pertama, materi pelatihan harus disederhanakan sebelum pilot dilanjutkan.

## Migrasi katalog dan stok

Dedi akan membersihkan katalog produk sebelum 28 Agustus. Spreadsheet saat ini memiliki 613 baris, 31 nama produk ganda, 18 harga kosong, dan 9 produk yang sudah tidak dijual. Nama produk harus mengikuti pola jenis, merek, dan ukuran. Harga kosong tidak boleh diisi dengan perkiraan; Dedi harus meminta konfirmasi dari warung terkait. Produk lama dipindahkan ke arsip, bukan dihapus, agar laporan historis tetap dapat direkonsiliasi.

Nanda akan mengambil snapshot katalog yang sudah disetujui pada 31 Agustus pukul 17.00 WIB. Perubahan setelah waktu tersebut dicatat dalam daftar terpisah dan dimasukkan setelah pilot hari pertama. Risiko utama adalah pemilik warung tetap mengubah spreadsheet lama tanpa memberi tahu tim. Untuk mengurangi risiko, akses edit spreadsheet lama akan dibatasi setelah snapshot, tetapi salinan baca tetap tersedia selama pilot.

## Pembayaran dan rekonsiliasi

Tim memilih untuk tidak menyimpan nomor rekening atau kredensial pembayaran di platform pilot. Pelanggan menerima instruksi pembayaran dari warung, sedangkan dashboard hanya menyimpan status belum dibayar, menunggu verifikasi, atau lunas. Yoga akan menyusun prosedur rekonsiliasi harian dan contoh bukti pembayaran yang harus disamarkan. Prosedur selesai 29 Agustus dan diuji dengan 20 transaksi sintetis.

Selisih antara dashboard dan catatan warung harus diperiksa pada hari yang sama. Jika selisih melebihi dua transaksi atau Rp250.000 pada satu warung, warung tersebut menghentikan penerimaan pesanan baru melalui sistem sampai rekonsiliasi selesai. Rapat belum memutuskan siapa yang boleh membuka kembali akses setelah penghentian. Rani meminta usulan kontrol persetujuan ganda sebelum 1 September.

## Dukungan dan insiden

Selama pilot, pertanyaan masuk melalui satu nomor dukungan yang dijaga bergiliran oleh Sari dan Lilis. Jam dukungan adalah 08.00–20.00 WIB. Insiden yang menghambat semua pesanan harus direspons dalam 30 menit, sedangkan masalah pada satu warung direspons dalam dua jam. Bima menyiapkan formulir insiden yang mencatat waktu, dampak, penyebab sementara, tindakan, dan status pemulihan.

Jika terjadi kebocoran data, akses sistem harus dibekukan, log diamankan, dan Rani diberi tahu dalam 15 menit. Tim belum memiliki keputusan final tentang batas waktu pemberitahuan kepada pelanggan dan perlu meminta nasihat hukum. Tidak seorang pun boleh mengirim screenshot yang mengandung nomor telepon pelanggan melalui grup pesan umum. Semua contoh pelatihan memakai data sintetis.

## Metrik keberhasilan

Pilot dinilai berhasil jika minimal 85 persen pesanan tercatat tanpa koreksi manual, waktu pencatatan median di bawah dua menit, dan sedikitnya lima dari enam pemilik warung menyatakan alurnya mudah digunakan. Selain itu, tidak boleh ada insiden privasi berisiko tinggi dan selisih rekonsiliasi total harus di bawah satu persen dari nilai transaksi. Yoga mengumpulkan metrik transaksi, Lilis menjalankan survei, dan Bima merangkum insiden.

Evaluasi dijadwalkan 18 September 2026. Rani menyusun rekomendasi lanjut, perbaiki, atau hentikan paling lambat 21 September. Pengurus membuat keputusan pendanaan pada 24 September. Jika hanya metrik kemudahan penggunaan yang gagal, tim boleh memperpanjang pilot tujuh hari tanpa tambahan lisensi. Jika ada insiden privasi berisiko tinggi, ekspansi otomatis dihentikan sampai audit selesai.

## Anggaran dan pengadaan

Alokasi sementara adalah Rp24.000.000 untuk konfigurasi dan lisensi, Rp8.000.000 untuk pelatihan dan dukungan, Rp6.000.000 untuk dua perangkat cadangan, serta Rp10.000.000 untuk kontingensi. Bima harus memperoleh dua penawaran pembanding dan memastikan biaya penghentian layanan sebelum 26 Agustus. Salah satu vendor belum menjelaskan lokasi penyimpanan data dan mekanisme ekspor data ketika kontrak berakhir.

Pengurus tidak menyetujui pembayaran tahunan di muka pada tahap pilot. Pembayaran pertama maksimal 50 persen setelah kontrak memuat klausul penghapusan data dan jadwal dukungan. Sisa pembayaran dilakukan setelah konfigurasi lolos uji penerimaan. Belum diputuskan apakah kontingensi dapat dipakai untuk biaya konsultasi hukum; Rani akan meminta keputusan bendahara pada 27 Agustus.

## Tindak lanjut dan pertanyaan terbuka

Rani mengirim notulen final pada 20 Agustus. Semua pemilik tindakan wajib mengonfirmasi tenggat dalam satu hari kerja. Pertemuan kesiapan akhir berlangsung 1 September pukul 15.00 WIB. Peluncuran ditunda bila persetujuan warung, pembersihan katalog, prosedur rekonsiliasi, atau pemeriksaan privasi vendor belum selesai.

Tiga pertanyaan utama belum terjawab. Pertama, siapa pemberi persetujuan kedua untuk membuka kembali akses setelah selisih pembayaran. Kedua, berapa batas waktu dan jalur pemberitahuan pelanggan jika terjadi insiden data. Ketiga, apakah dana kontingensi dapat digunakan untuk konsultasi hukum. Pertanyaan tambahan adalah lokasi penyimpanan data vendor dan format ekspor ketika kontrak dihentikan. Jawaban harus dicatat sebelum rapat kesiapan akhir.
'@

$debugTask = @'
function normalizeCustomerId(value) {
  return String(value);
}

function calculateNetRevenue(rows) {
  return rows.reduce((total, row) => {
    const gross = row.quantity * row.unitPrice;
    return total + gross - row.discount + gross * row.taxRate;
  }, 0);
}

function uniqueOrders(rows) {
  const seen = new Set();
  return rows.filter((row) => {
    if (seen.has(row.orderId)) return false;
    seen.add(row.orderId);
    return true;
  });
}

function categoryTotals(rows) {
  return rows.reduce((totals, row) => {
    const key = row.category;
    totals[key] = (totals[key] ?? 0) + row.net;
    return totals;
  }, {});
}

const tests = [
  {
    name: "customer id dinormalisasi",
    actual: normalizeCustomerId("  AbC-01  "),
    expected: "abc-01"
  },
  {
    name: "diskon diterapkan sebelum pajak",
    actual: calculateNetRevenue([
      { quantity: 2, unitPrice: 100000, discount: 20000, taxRate: 0.11 }
    ]),
    expected: 199800
  },
  {
    name: "order id angka dan teks dianggap sama",
    actual: uniqueOrders([
      { orderId: 101, value: 10 },
      { orderId: "101", value: 20 },
      { orderId: 102, value: 30 }
    ]).length,
    expected: 2
  },
  {
    name: "kategori dinormalisasi sebelum agregasi",
    actual: categoryTotals([
      { category: "Minuman", net: 100 },
      { category: " minuman ", net: 50 }
    ]),
    expected: { minuman: 150 }
  }
];

for (const test of tests) {
  const actual = JSON.stringify(test.actual);
  const expected = JSON.stringify(test.expected);
  if (actual !== expected) {
    throw new Error(`${test.name}: expected ${expected}, got ${actual}`);
  }
}

console.log("All tests passed");
'@

[System.IO.File]::WriteAllText(
    (Join-Path $fixtureDir "T02-meeting-memo.md"),
    $memo,
    [System.Text.UTF8Encoding]::new($false)
)

[System.IO.File]::WriteAllText(
    (Join-Path $fixtureDir "T03-debug-task.js"),
    $debugTask,
    [System.Text.UTF8Encoding]::new($false)
)

$categories = @("Makanan", "Minuman", "Perawatan")
$rows = [System.Collections.Generic.List[object]]::new()

for ($index = 1; $index -le 205; $index++) {
    $quantity = 1 + ($index % 5)
    $unitPrice = 10000 + (($index % 9) * 2500)
    $discount = if (($index % 10) -eq 0) { 5000 } else { 0 }
    $category = $categories[($index - 1) % $categories.Count]

    if ($index -eq 57) {
        $category = ""
    }

    if ($index -eq 173) {
        $unitPrice = 2500000
    }

    $rows.Add([pscustomobject]@{
        order_id = "ORD-{0:D4}" -f $index
        date = (Get-Date "2026-07-01").AddDays(($index - 1) % 31).ToString("yyyy-MM-dd")
        category = $category
        quantity = $quantity
        unit_price = $unitPrice
        discount = $discount
    })
}

$duplicate = $rows[88].PSObject.Copy()
$rows.Add($duplicate)

$csvPath = Join-Path $fixtureDir "T06-transactions.csv"
$rows | Export-Csv -LiteralPath $csvPath -NoTypeInformation -Encoding utf8

$validRows = @($rows | Where-Object { -not [string]::IsNullOrWhiteSpace($_.category) })
$deduplicated = @($validRows | Group-Object order_id | ForEach-Object { $_.Group | Select-Object -First 1 })
$categoryTotals = [ordered]@{}

foreach ($category in $categories) {
    $values = @(
        $deduplicated |
            Where-Object { $_.category -eq $category } |
            ForEach-Object {
                [decimal](($_.quantity * $_.unit_price) - $_.discount)
            }
    )
    $total = ($values | Measure-Object -Sum).Sum
    $categoryTotals[$category] = [decimal]$total
}

$groundTruth = [ordered]@{
    generatedRows = $rows.Count
    uniqueOrderIds = @($rows.order_id | Sort-Object -Unique).Count
    duplicateRowCount = 1
    missingCategoryRows = 1
    knownOutlierOrderId = "ORD-0173"
    netRevenueFormula = "quantity * unit_price - discount"
    categoryTotalsAfterRemovingDuplicateAndMissingCategory = $categoryTotals
    debugExpectedBugCount = 4
    debugExpectedBehavior = [ordered]@{
        normalizedCustomerId = "abc-01"
        discountedTaxResult = 199800
        uniqueOrderCount = 2
        normalizedCategoryTotals = [ordered]@{ minuman = 150 }
    }
}

$groundTruth | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath (Join-Path $fixtureDir "GROUND_TRUTH.json") -Encoding utf8

Write-Host "PASS | Test fixtures generated"
