import { POSTS, getAuthor } from "@/content/blog";
import { SITE, absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function GET() {
  const items = POSTS.map(
    (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${absoluteUrl(`/blog/${p.slug}`)}</link>
      <guid isPermaLink="true">${absoluteUrl(`/blog/${p.slug}`)}</guid>
      <pubDate>${new Date(`${p.publishDate}T09:00:00Z`).toUTCString()}</pubDate>
      <dc:creator>${esc(getAuthor(p.author).name)}</dc:creator>
      <category>${esc(p.category)}</category>
      <description>${esc(p.description)}</description>
    </item>`,
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Blog de ${SITE.name}</title>
    <link>${absoluteUrl("/blog")}</link>
    <description>${esc(SITE.description)}</description>
    <language>es-ES</language>
    <atom:link href="${absoluteUrl("/feed.xml")}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
