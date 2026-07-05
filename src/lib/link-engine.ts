import type {
  BlogPost,
} from "./content-types";

import {
  getContentMetadata,
} from "./content-metadata";

export function getRelatedByCategory(
  posts: BlogPost[],
  currentPost: BlogPost,
  limit = 5
): BlogPost[] {

  const current =
    getContentMetadata(
      currentPost
    );

  return posts
    .filter((post) => {

      const candidate =
        getContentMetadata(
          post
        );

      return (
        candidate.slug !== current.slug &&
        candidate.category === current.category
      );

    })
    .slice(0, limit);

}

export function getRelatedOutsideCategory(
  posts: BlogPost[],
  currentPost: BlogPost,
  limit = 5
): BlogPost[] {

  const current =
    getContentMetadata(
      currentPost
    );

  return posts
    .filter((post) => {

      const candidate =
        getContentMetadata(
          post
        );

      return (
        candidate.slug !== current.slug &&
        candidate.category !== current.category
      );

    })
    .slice(0, limit);

}

export function mergeInternalLinks(
  primary: BlogPost[],
  secondary: BlogPost[],
  limit = 5
): BlogPost[] {

  const merged: BlogPost[] = [];

  for (const post of primary) {

    if (!merged.find((item) => item.id === post.id)) {
      merged.push(post);
    }

  }

  for (const post of secondary) {

    if (
      merged.length >= limit
    ) {
      break;
    }

    if (!merged.find((item) => item.id === post.id)) {
      merged.push(post);
    }

  }

  return merged;

}

export function getInternalLinks(
  posts: BlogPost[],
  currentPost: BlogPost,
  limit = 5
): BlogPost[] {

  const sameCategory =
    getRelatedByCategory(
      posts,
      currentPost,
      limit
    );

  if (
    sameCategory.length >= limit
  ) {
    return sameCategory;
  }

  const outsideCategory =
    getRelatedOutsideCategory(
      posts,
      currentPost,
      limit
    );

  return mergeInternalLinks(
    sameCategory,
    outsideCategory,
    limit
  );

}