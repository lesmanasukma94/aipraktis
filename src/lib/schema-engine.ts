export function buildArticleSchema(
  post: any,
  articleUrl: string
) {

  return {

    "@context": "https://schema.org",

    "@type": "Article",

    headline: post.data.title,

    description: post.data.description,

    datePublished: post.data.pubDate,

    dateModified: post.data.pubDate,

    author: {
      "@type": "Organization",
      name: "AI Praktis Indonesia",
    },

    publisher: {
      "@type": "Organization",
      name: "AI Praktis Indonesia",

      logo: {
        "@type": "ImageObject",
        url: "https://www.aipraktis.co.id/og-image.jpg",
      },
    },

    mainEntityOfPage: {

      "@type": "WebPage",

      "@id": articleUrl,

    },

  };

}

export function buildBreadcrumbSchema(
  items: {

    name: string;

    url: string;

  }[]
) {

  return {

    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement:

      items.map((item, index) => ({

        "@type": "ListItem",

        position: index + 1,

        name: item.name,

        item: item.url,

      })),

  };

}

export function buildCollectionSchema(
  category: any,
  categoryUrl: string
) {

  return {

    "@context": "https://schema.org",

    "@type": "CollectionPage",

    name: category.name,

    description: category.description,

    url: categoryUrl,

    isPartOf: {

      "@type": "WebSite",

      name: "AI Praktis Indonesia",

      url: "https://www.aipraktis.co.id",

    },

  };

}