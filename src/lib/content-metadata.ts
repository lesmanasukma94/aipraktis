import type {
  BlogPost,
} from "./content-types";

export interface ContentMetadata {

  slug: string;

  title: string;

  category: string;

  description: string;

  pubDate: Date;

}

export function getContentMetadata(
  post: BlogPost
): ContentMetadata {

  return {

    slug: post.id,

    title: post.data.title,

    category: post.data.category,

    description: post.data.description,

    pubDate: post.data.pubDate,

  };

}