import type {
  BlogPost,
} from "./content-types";

import type {
  RecommendationContext,
} from "./recommendation-context";

import {
  getClusterByPost,
  getLearningPathByPost,
} from "./content-engine";

import {
  RECOMMENDATION_WEIGHTS,
} from "./recommendation-weights";

export function calculateRecommendationScore(
  context: RecommendationContext,
  candidatePost: BlogPost
): number {

  let score = 0;

  // kategori sama
  if (
    context.category ===
    candidatePost.data.category
  ) {
    score += RECOMMENDATION_WEIGHTS.SAME_CATEGORY;
  }

  // artikel berasal dari sebuah topic cluster
  if (
    context.clusterTitle
  ) {
    score += RECOMMENDATION_WEIGHTS.HAS_CLUSTER;
  }

  // artikel berasal dari sebuah learning path
  if (
    context.learningPathTitle
  ) {
    score += RECOMMENDATION_WEIGHTS.HAS_LEARNING_PATH;
  }

  // cluster besar sedikit lebih diprioritaskan
  score += Math.min(
  context.clusterArticleCount,
  RECOMMENDATION_WEIGHTS.MAX_CLUSTER_SIZE_BONUS
);

  // learning path panjang sedikit lebih diprioritaskan
  score += Math.min(
  context.learningPathStepCount,
  RECOMMENDATION_WEIGHTS.MAX_LEARNING_PATH_SIZE_BONUS
);

const candidateCluster =
  getClusterByPost(candidatePost);

if (
  context.clusterTitle &&
  candidateCluster?.title ===
    context.clusterTitle
) {
  score += RECOMMENDATION_WEIGHTS.SAME_CLUSTER;
}

const candidateLearningPath =
  getLearningPathByPost(candidatePost);

if (
  context.learningPathTitle &&
  candidateLearningPath?.title ===
    context.learningPathTitle
) {
  score += RECOMMENDATION_WEIGHTS.SAME_LEARNING_PATH;
}

  return score;

}

export function sortRecommendations(
  context: RecommendationContext,
  candidates: BlogPost[]
): BlogPost[] {

  return [...candidates]

    .map((post) => ({

      post,

      score:
        calculateRecommendationScore(
          context,
          post
        ),

    }))

    .sort(
      (a, b) =>
        b.score - a.score
    )

    .map(
      (item) => item.post
    );

}