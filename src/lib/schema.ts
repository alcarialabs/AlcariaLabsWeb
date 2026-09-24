import { SITE, absoluteUrl } from "./site";
import { SERVICES, type Service } from "./services";
import type { FaqItem, Post } from "@/content/blog/types";
import { getAuthor } from "@/content/blog";

/**
 * JSON-LD builders. Entities reference each other by @id so search engines and
 * answer engines resolve one coherent knowledge graph for ALCARIA.
 */
export const ORG_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;

export const organization = () => ({
  "@type": ["Organization", "ProfessionalService"],
  "@id": ORG_ID,
  name: SITE.name,
  alternateName: SITE.legalName,
  url: SITE.url,
  logo: { "@type": "ImageObject", url: absoluteUrl(SITE.logo), width: 1200, height: 675 },
  image: absoluteUrl("/opengraph-image"),
  description: SITE.description,
  slogan: SITE.tagline,
  email: SITE.email,
  foundingDate: SITE.foundingDate,
  founder: SITE.founders.map((f) => ({ "@type": "Person", name: f.name, ...("url" in f ? { url: f.url } : {}) })),
  address: { "@type": "PostalAddress", addressCountry: SITE.country },
  areaServed: { "@type": "Country", name: "España" },
  knowsLanguage: ["es"],
  knowsAbout: [
    "Automatización de procesos",
    "Inteligencia artificial",
    "Agentes de IA",
    "Chatbots de WhatsApp",
    "RPA",
    "Apple Wallet",
    "Google Wallet",
    "Programas de fidelización",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: SITE.email,
    availableLanguage: ["Spanish"],
    areaServed: "ES",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de ALCARIA",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@id": `${absoluteUrl(s.href)}#service` },
    })),
  },
  sameAs: SITE.sameAs,
});

export const website = () => ({
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE.url,
  name: SITE.name,
  description: SITE.description,
  inLanguage: SITE.lang,
  publisher: { "@id": ORG_ID },
});

export const serviceNode = (s: Service) => ({
  "@type": "Service",
  "@id": `${absoluteUrl(s.href)}#service`,
  name: s.name,
  serviceType: s.kicker,
  description: s.description,
  url: absoluteUrl(s.href),
  provider: { "@id": ORG_ID },
  areaServed: { "@type": "Country", name: "España" },
  audience: { "@type": "BusinessAudience", audienceType: "Empresas y PYMEs" },
});

export const faqPage = (items: FaqItem[], url: string) => ({
  "@type": "FAQPage",
  "@id": `${url}#faq`,
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const breadcrumbs = (items: { name: string; path: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: absoluteUrl(it.path),
  })),
});

export const webPage = (opts: { path: string; name: string; description: string; type?: string }) => ({
  "@type": opts.type ?? "WebPage",
  "@id": `${absoluteUrl(opts.path)}#webpage`,
  url: absoluteUrl(opts.path),
  name: opts.name,
  description: opts.description,
  inLanguage: SITE.lang,
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORG_ID },
});

export const blogPosting = (post: Post) => {
  const url = absoluteUrl(`/blog/${post.slug}`);
  const author = getAuthor(post.author);
  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    abstract: post.tldr,
    image: absoluteUrl(`/blog/${post.slug}/opengraph-image`),
    datePublished: post.publishDate,
    dateModified: post.updatedDate,
    inLanguage: SITE.lang,
    url,
    mainEntityOfPage: { "@id": `${url}#webpage` },
    author: {
      "@type": "Person",
      name: author.name,
      jobTitle: author.role,
      description: author.bio,
      image: absoluteUrl(author.image),
      worksFor: { "@id": ORG_ID },
      ...(author.url ? { url: author.url } : {}),
      ...(author.sameAs ? { sameAs: author.sameAs } : {}),
    },
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": `${SITE.url}/blog#blog` },
    articleSection: post.category,
    keywords: post.tags.join(", "),
    wordCount: post.content.split(/\s+/).length,
  };
};

export const graph = (...nodes: object[]) => ({
  "@context": "https://schema.org",
  "@graph": nodes,
});
