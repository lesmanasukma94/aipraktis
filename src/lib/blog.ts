import { getCollection } from "astro:content";

export async function getAllPosts() {

  const posts = await getCollection("blog");

  return posts.sort(
    (a, b) =>
      new Date(b.data.pubDate).getTime() -
      new Date(a.data.pubDate).getTime()
  );

}

export async function getPostsByCategory(category: string) {

  const posts = await getAllPosts();

  return posts.filter(
    (post) => post.data.category === category
  );

}