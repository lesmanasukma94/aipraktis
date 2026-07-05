import type { CollectionEntry } from "astro:content";

import {
  getCluster,
  getLearningPath,
} from "./content-engine";

import {
  getContentMetadata,
} from "./content-metadata";

type BlogPost = CollectionEntry<"blog">;

export interface RecommendationContext {

  category: string;

  clusterTitle?: string;

  learningPathTitle?: string;

  clusterArticleCount: number;

  learningPathStepCount: number;

}

export function buildRecommendationContext(
  post: BlogPost
): RecommendationContext {

  const cluster =
    getCluster(
      post.data.category,
      post.id
    );

  const learningPath =
    getLearningPath(
      post.data.category,
      post.id
    );

const metadata =
  getContentMetadata(
    post
  );

return {

  category:
    metadata.category,

  clusterTitle:
    cluster?.title,

  learningPathTitle:
    learningPath?.title,

  clusterArticleCount:
    cluster?.articles.length ?? 0,

  learningPathStepCount:
    learningPath?.steps.length ?? 0,

};
}