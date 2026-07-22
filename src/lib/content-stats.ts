import { getCollection } from "astro:content";

export interface ContentStats {
  articleCount: number;
  categoryCount: number;
}

let contentStatsPromise: Promise<ContentStats> | undefined;

export function getContentStats(): Promise<ContentStats> {
  contentStatsPromise ??= getCollection(
    "blog",
    ({ data }) => data.draft !== true,
  ).then((articles) => {
    const categories = new Set<string>();

    for (const { data } of articles) {
      if (
        typeof data.category === "string" &&
        data.category.length > 0
      ) {
        categories.add(data.category);
      }
    }

    return {
      articleCount: articles.length,
      categoryCount: categories.size,
    };
  });

  return contentStatsPromise;
}