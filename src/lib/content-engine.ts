import type {
  BlogPost,
} from "./content-types";

import { topicClusters } from "@/data/clusters";
import { learningPaths } from "@/data/learning-paths";
import { getInternalLinks } from "./link-engine";
import {
getContentMetadata,
} from "./content-metadata";

export function getRelatedPosts(
  posts: BlogPost[],
  currentPost: BlogPost,
  limit = 5
): BlogPost[] {

  const metadata =
    getContentMetadata(
      currentPost
    );

  return getInternalLinks(
    posts,
    currentPost,
    limit
  );

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

export function getLearningPathPosts(
  posts: BlogPost[],
  learningPath:
    | typeof learningPaths[number]
    | undefined,
  currentSlug: string
) {

  if (!learningPath) return [];

  return learningPath.steps
    .filter(
      (step) => step.slug !== currentSlug
    )
    .map(
      (step) =>
        posts.find(
          (post) => post.id === step.slug
        )
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

export function getClusterByPost(
  post: BlogPost
) {

  const metadata =
    getContentMetadata(
      post
    );

  return getCluster(
    metadata.category,
    metadata.slug
  );

}

export function getLearningPathByPost(
  post: BlogPost
) {

  const metadata =
    getContentMetadata(
      post
    );

  return getLearningPath(
    metadata.category,
    metadata.slug
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

export function getFeaturedPost(
  posts: any[]
) {
  return posts.length > 0
    ? posts[0]
    : undefined;
}

export function getCategoryMetadata(
  post: BlogPost
) {

  return getContentMetadata(
    post
  );

}

export function getRemainingPosts(
  posts: any[]
) {
  return posts.slice(1);
}