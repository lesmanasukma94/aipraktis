import { getCollection } from "astro:content";

export async function getAllPosts() {
  const posts = await getCollection("blog");

  return posts.sort(
    (a, b) =>
      new Date(b.data.pubDate).getTime() -
      new Date(a.data.pubDate).getTime()
  );
}

export async function getLatestPosts(limit = 10) {
  const posts = await getAllPosts();

  return posts.slice(0, limit);
}

export async function getPostsByCategory(category: string) {
  const posts = await getAllPosts();

  return posts.filter(
    (post) => post.data.category === category
  );
}

export async function getPostBySlug(slug: string) {
  const posts = await getCollection("blog");

  return posts.find((post) => post.id === slug);
}