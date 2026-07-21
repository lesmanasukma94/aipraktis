export interface AffiliateRecommendation {
  badge: string;
  title: string;
  description: string;
  reviewUrl: string;
  affiliateUrl?: string;
  cta: string;
}

export const affiliateRecommendations = [
  {
    badge: "Untuk Pemula",
    title: "Tools AI Gratis Terbaik untuk Pemula",
    description:
      "Temukan tools AI yang mudah digunakan untuk menulis, belajar, bekerja, membuat gambar, dan meningkatkan produktivitas.",
    reviewUrl:
      "/blog/15-tools-ai-gratis-terbaik-2026/",
    cta: "Lihat rekomendasi",
  },
  {
    badge: "Untuk Bisnis",
    title: "Tools AI untuk Bisnis dan UMKM",
    description:
      "Bandingkan tools AI untuk pemasaran, penjualan, layanan pelanggan, analisis, administrasi, dan operasional bisnis.",
    reviewUrl:
      "/blog/tools-ai-untuk-bisnis/",
    cta: "Lihat tools bisnis",
  },
  {
    badge: "Untuk Creator",
    title: "Tools AI untuk Content Creator",
    description:
      "Pelajari pilihan tools AI untuk ide konten, penulisan naskah, desain, video, audio, dan distribusi konten.",
    reviewUrl:
      "/blog/tools-ai-untuk-content-creator/",
    cta: "Lihat tools creator",
  },
] satisfies AffiliateRecommendation[];
