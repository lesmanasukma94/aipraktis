import type { CollectionEntry } from "astro:content";

import { topicClusters } from "@/data/clusters";
import { learningPaths } from "@/data/learning-paths";

export type BlogPost = CollectionEntry<"blog">;

export function getRelatedPosts(
  posts: BlogPost[],
  currentPost: BlogPost,
  limit = 5
) {

  const related = posts.filter(
    (post) =>
      post.id !== currentPost.id &&
      post.data.category === currentPost.data.category
  );

  if (related.length >= limit) {
    return related.slice(0, limit);
  }

  const additional = posts.filter(
    (post) =>
      post.id !== currentPost.id &&
      post.data.category !== currentPost.data.category
  );

  return [
    ...related,
    ...additional,
  ].slice(0, limit);

}

export function getCluster(
  category: string,
  slug: string
) {

  return topicClusters.find(
    (cluster) =>
      cluster.category === category &&
      cluster.articles.includes(slug)
  );

}

export function getClusterPosts(
  posts: BlogPost[],
  cluster:
    | typeof topicClusters[number]
    | undefined,
  currentSlug: string
) {

  if (!cluster) return [];

  return cluster.articles
    .filter((slug) => slug !== currentSlug)
    .map((slug) =>
      posts.find((post) => post.id === slug)
    )
    .filter(Boolean);

}

export function getLearningPath(
  category: string,
  slug: string
) {

  return learningPaths.find(
    (path) =>
      path.category === category &&
      path.steps.some(
        (step) => step.slug === slug
      )
  );

}

export function getPreviousStep(
  path: typeof learningPaths[number] | undefined,
  slug: string
) {

  if (!path) return undefined;

  const index =
    path.steps.findIndex(
      (step) => step.slug === slug
    );

  if (index <= 0) return undefined;

  return path.steps[index - 1];

}

export function getNextStep(
  path: typeof learningPaths[number] | undefined,
  slug: string
) {

  if (!path) return undefined;

  const index =
    path.steps.findIndex(
      (step) => step.slug === slug
    );

  if (index < 0) return undefined;

  if (index >= path.steps.length - 1)
    return undefined;

  return path.steps[index + 1];

}

export function getCategoryPosts() {}

export function getFeaturedPost() {}