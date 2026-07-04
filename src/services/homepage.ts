import { getLatestPosts } from "./blog";
import { categories } from "@/data/categories";
import { vendors } from "@/data/vendors";

export async function getHomepageData() {
  return {
    latestPosts: await getLatestPosts(6),
    featuredCategories: categories,
    featuredVendors: vendors.slice(0, 6),
  };
}