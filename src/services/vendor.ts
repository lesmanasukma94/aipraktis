import { vendors } from "@/data/vendors";

export function getAllVendors() {
  return vendors;
}

export function getVendor(slug: string) {
  return vendors.find(
    (vendor) => vendor.slug === slug
  );
}