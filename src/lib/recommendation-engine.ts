import type {
  BlogPost,
} from "./content-types";

import { sortRecommendations } from "./recommendation-score";
import { buildRecommendationContext } from "./recommendation-context";
import { getInternalLinks } from "./link-engine";

function getRecommendationCandidates(
  posts: BlogPost[],
  currentPost: BlogPost
): BlogPost[] {

  return getInternalLinks(
    posts,
    currentPost,
    posts.length
  );

}

export function getRecommendedArticles(
  posts: BlogPost[],
  currentPost: BlogPost,
  limit = 5
): BlogPost[] {

  const context =
    buildRecommendationContext(currentPost);

  const candidates =
  getRecommendationCandidates(
    posts,
    currentPost
  );

  return sortRecommendations(
    context,
    candidates
  ).slice(0, limit);

}

export function getSidebarRecommendations(
  posts: BlogPost[],
  currentPost: BlogPost,
  limit = 8
): BlogPost[] {

  return getRecommendedArticles(
    posts,
    currentPost,
    limit
  );

}

export function getFooterRecommendations(
  posts: BlogPost[],
  currentPost: BlogPost,
  limit = 6
): BlogPost[] {

  return getRecommendedArticles(
    posts,
    currentPost,
    limit
  );

}