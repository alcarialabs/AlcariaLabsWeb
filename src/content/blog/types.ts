export type AuthorId = "eric" | "joan" | "vicent";

export type PostCategory = "IA" | "Automatización" | "Wallet" | "Estrategia";

export type FaqItem = { q: string; a: string };

export type Post = {
  /** URL slug. Never change it for published posts: it breaks rankings and backlinks. */
  slug: string;
  /** Visible H1. */
  title: string;
  /** <title> tag, max ~60 chars. Falls back to `title`. */
  seoTitle?: string;
  /** Meta description, 140-160 chars. */
  description: string;
  /** Short summary for cards, 1-2 sentences. */
  excerpt: string;
  category: PostCategory;
  tags: string[];
  author: AuthorId;
  /** ISO date (YYYY-MM-DD). */
  publishDate: string;
  /** ISO date (YYYY-MM-DD). */
  updatedDate: string;
  /** Path under /public. Optional: posts without image get a generated cover. */
  image?: string;
  imageAlt?: string;
  /** Direct 40-60 word answer to the main question of the post (answer engines quote this). */
  tldr: string;
  /** 3-5 bullets. */
  keyTakeaways: string[];
  /** Markdown body. Use ## and ### headings (no H1), lists, tables, > quotes. No backticks. */
  content: string;
  /** 3-6 questions people actually search for. Rendered visibly and as FAQPage schema. */
  faq: FaqItem[];
  /** Slugs of related posts. */
  related?: string[];
};

export type Author = {
  id: AuthorId;
  name: string;
  role: string;
  image: string;
  bio: string;
  url?: string;
  sameAs?: string[];
};
