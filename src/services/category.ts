import { categories } from "@/data/categories";
import { getPostsByCategory } from "./blog";

export function getAllCategories() {
  return categories;
}

export function getCategory(slug: string) {
  return categories.find(
    (category) => category.slug === slug
  );
}

export async function getCategoryPosts(slug: string) {
  return getPostsByCategory(slug);
}