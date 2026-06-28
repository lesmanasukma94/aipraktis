# AI Praktis Indonesia v2

# 18-ANALYTICS.md

> **Document Version:** 2.1
> **Status:** Living Documentation
> **Last Updated:** June 2026

---

# 1. Tujuan Dokumen

Dokumen ini mendefinisikan arsitektur Analytics AI Praktis Indonesia.

Analytics digunakan untuk:

* mengukur pertumbuhan website;
* memahami perilaku pengguna;
* mengoptimalkan konversi;
* mengevaluasi performa konten;
* mendukung keputusan berbasis data.

Analytics bukan hanya alat pelaporan, tetapi bagian dari strategi pengembangan produk.

---

# 2. Filosofi Analytics

## Privacy First

Pengumpulan data harus menghormati privasi pengguna dan mematuhi peraturan yang berlaku.

---

## Actionable Metrics

Fokus pada metrik yang dapat ditindaklanjuti.

Hindari vanity metrics yang tidak memberikan nilai bisnis.

---

## Event Driven

Setiap interaksi penting direkam sebagai event.

---

## Continuous Improvement

Data digunakan untuk melakukan iterasi dan peningkatan secara berkelanjutan.

---

# 3. Measurement Framework

```text
Business Goals
        │
        ▼
Objectives
        │
        ▼
KPIs
        │
        ▼
Metrics
        │
        ▼
Events
```

---

# 4. Business Goals

Target utama analytics:

* meningkatkan trafik organik;
* meningkatkan engagement;
* meningkatkan konversi newsletter;
* meningkatkan penggunaan AI Tools Directory;
* meningkatkan penggunaan Prompt Library;
* meningkatkan pendapatan.

---

# 5. KPI Utama

| Area             | KPI                 |
| ---------------- | ------------------- |
| SEO              | Organic Sessions    |
| Content          | Engaged Sessions    |
| Newsletter       | Subscription Rate   |
| AI Tools         | Tool Page Views     |
| Prompt Library   | Prompt Copy Rate    |
| Template Library | Download Rate       |
| Revenue          | Revenue per Visitor |

---

# 6. Event Tracking

Contoh event utama.

```text
page_view

search

search_result_click

tool_view

prompt_view

prompt_copy

template_download

newsletter_signup

affiliate_click

cta_click

share

scroll_depth

video_play
```

Setiap event memiliki nama yang konsisten.

---

# 7. Search Analytics

Pantau:

* jumlah pencarian;
* kata kunci populer;
* pencarian tanpa hasil;
* CTR hasil pencarian;
* filter yang paling sering digunakan.

---

# 8. Content Analytics

Metrik yang dipantau:

* Page Views
* Engaged Sessions
* Average Engagement Time
* Scroll Depth
* Reading Completion Rate
* Internal Link CTR
* Exit Rate

---

# 9. AI Tools Analytics

Pantau:

* Tool Views
* Comparison Views
* Affiliate Clicks
* CTA Click Rate
* Filter Usage
* Search Clicks

---

# 10. Prompt Analytics

Pantau:

* Prompt Views
* Prompt Copy
* Prompt Share
* Model AI yang dipilih
* Prompt Collection Views

---

# 11. Template Analytics

Pantau:

* Template Views
* Download Count
* Preview Views
* CTA Clicks
* Conversion Rate

---

# 12. Newsletter Analytics

Pantau:

* Subscription Rate
* Confirmation Rate
* Open Rate
* Click Rate
* Unsubscribe Rate

---

# 13. Funnel Analytics

```text
Visitor

↓

Content View

↓

Internal Click

↓

Newsletter

↓

Download

↓

Affiliate Click

↓

Purchase
```

Setiap tahap memiliki target konversi.

---

# 14. User Journey

Analisis perjalanan pengguna:

* Landing Page
* Halaman berikutnya
* Pencarian
* Klik internal
* Konversi
* Exit

---

# 15. Dashboard

Dashboard utama mencakup:

* SEO Dashboard
* Content Dashboard
* AI Tools Dashboard
* Prompt Dashboard
* Template Dashboard
* Revenue Dashboard

---

# 16. Alerts

Sistem peringatan untuk:

* penurunan trafik organik;
* peningkatan error 404;
* penurunan Core Web Vitals;
* lonjakan bounce rate;
* penurunan konversi newsletter.

---

# 17. Data Retention

Prinsip:

* simpan data sesuai kebutuhan bisnis;
* hapus data yang tidak lagi diperlukan;
* patuhi kebijakan privasi.

---

# 18. A/B Testing (Future)

Area yang dapat diuji:

* CTA
* Hero Section
* Newsletter Form
* Tool Card
* Prompt Card
* Landing Page

---

# 19. Reporting

Laporan:

* Harian
* Mingguan
* Bulanan
* Kuartalan

Laporan harus menampilkan tren, bukan hanya angka.

---

# 20. Success Metrics

Target jangka panjang:

* pertumbuhan trafik organik;
* peningkatan engagement;
* peningkatan konversi;
* peningkatan pendapatan;
* peningkatan retensi pengguna.

---

# 21. Acceptance Criteria

* [ ] Event tracking terdokumentasi.
* [ ] KPI ditentukan untuk setiap fitur utama.
* [ ] Dashboard tersedia.
* [ ] Funnel dapat dianalisis.
* [ ] Search analytics aktif.
* [ ] Privacy menjadi prioritas.

---

# 22. Hubungan dengan Dokumen Lain

Dokumen ini bergantung pada:

* 12-BLOG-SYSTEM.md
* 13-AI-TOOLS.md
* 14-PROMPT-LIBRARY.md
* 15-TEMPLATE-LIBRARY.md
* 16-SEO.md
* 17-MONETIZATION.md
* 23-SEARCH.md

---

# 23. Changelog

## v2.1

* Menetapkan Analytics sebagai bagian dari arsitektur produk.
* Mendefinisikan KPI untuk seluruh fitur utama.
* Menambahkan event tracking, dashboard, funnel, dan user journey.
* Menetapkan prinsip privacy-first dan continuous improvement.
* Menyiapkan dukungan untuk A/B testing dan analitik bisnis jangka panjang.
