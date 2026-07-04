import { getAllPosts } from "./blog";

export async function searchPosts(keyword: string) {
  const posts = await getAllPosts();

  const query = keyword.toLowerCase();

  return posts.filter((post) => {
    return (
      post.data.title.toLowerCase().includes(query) ||
      post.data.description.toLowerCase().includes(query)
    );
  });
}