export const CATEGORY_ARTICLE_PRIORITY: Record<string, string[]> = {
  "belajar-ai": [
    "ai-untuk-pemula",
    "apa-itu-ai",
    "cara-belajar-ai-dari-nol",
    "roadmap-belajar-ai",
    "skill-ai",
    "apakah-ai-aman",
    "kesalahan-pemula-saat-belajar-ai",
    "kursus-ai-gratis-terbaik",
    "ai-agent-untuk-pemula",
  ],
};

type BlogPostLike = {
  slug: string;
  data: {
    pubDate: Date | string;
    featured?: boolean;
  };
};

function getPriorityRank(categorySlug: string, postSlug: string) {
  const priorityList = CATEGORY_ARTICLE_PRIORITY[categorySlug] ?? [];
  const index = priorityList.indexOf(postSlug);

  return index === -1 ? Number.POSITIVE_INFINITY : index;
}

function getPostDate(post: BlogPostLike) {
  return new Date(post.data.pubDate).getTime();
}

export function sortPostsByCategoryPriority<T extends BlogPostLike>(
  posts: T[],
  categorySlug: string
): T[] {
  return [...posts].sort((a, b) => {
    const rankA = getPriorityRank(categorySlug, a.slug);
    const rankB = getPriorityRank(categorySlug, b.slug);

    if (rankA !== rankB) {
      return rankA - rankB;
    }

    if ((a.data.featured ?? false) !== (b.data.featured ?? false)) {
      return Number(b.data.featured ?? false) - Number(a.data.featured ?? false);
    }

    return getPostDate(b) - getPostDate(a);
  });
}