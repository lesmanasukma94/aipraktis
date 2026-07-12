export const SOCIAL_IDENTITY = {
  brandName: "AI Praktis Indonesia",
  handle: "@aipraktiscoid",
  website: "https://www.aipraktis.co.id/",
  publicEmail: "haloaipraktis@gmail.com",
} as const;

export const SOCIAL_LINKS = [
  {
    platform: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@aipraktiscoid",
    handle: "@aipraktiscoid",
    showInFooter: true,
    showInSchema: true,
  },
  {
    platform: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/aipraktiscoid/",
    handle: "@aipraktiscoid",
    showInFooter: true,
    showInSchema: true,
  },
  {
    platform: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@aipraktiscoid",
    handle: "@aipraktiscoid",
    showInFooter: true,
    showInSchema: true,
  },
  {
    platform: "threads",
    label: "Threads",
    href: "https://www.threads.com/@aipraktiscoid",
    handle: "@aipraktiscoid",
    showInFooter: true,
    showInSchema: true,
  },
  {
    platform: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/aipraktiscoid",
    handle: "@aipraktiscoid",
    showInFooter: true,
    showInSchema: true,
  },
] as const;

export const FOOTER_SOCIAL_LINKS =
  SOCIAL_LINKS.filter(
    (socialLink) => socialLink.showInFooter
  );

export const SCHEMA_SOCIAL_LINKS =
  SOCIAL_LINKS
    .filter(
      (socialLink) => socialLink.showInSchema
    )
    .map(
      (socialLink) => socialLink.href
    );

export type SocialLink =
  (typeof SOCIAL_LINKS)[number];
