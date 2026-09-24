import { POSTS, getAuthor } from "@/content/blog";
import { SERVICES } from "@/lib/services";
import { SITE, absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

/** Full plain-text corpus so LLMs can quote ALCARIA accurately. */
export function GET() {
  const services = SERVICES.map((s) =>
    [
      `## ${s.name}`,
      `URL: ${absoluteUrl(s.href)}`,
      "",
      s.intro,
      ...(s.benefits.length ? ["", "Beneficios:", ...s.benefits.map((b) => `- ${b.title}: ${b.text}`)] : []),
      ...(s.faq.length ? ["", ...s.faq.map((f) => `### ${f.q}\n${f.a}`)] : []),
    ].join("\n"),
  ).join("\n\n");

  const posts = POSTS.map((p) =>
    [
      `## ${p.title}`,
      `URL: ${absoluteUrl(`/blog/${p.slug}`)}`,
      `Autor: ${getAuthor(p.author).name} · Actualizado: ${p.updatedDate}`,
      "",
      `Respuesta rápida: ${p.tldr}`,
      "",
      p.content,
      "",
      ...p.faq.map((f) => `### ${f.q}\n${f.a}`),
    ].join("\n"),
  ).join("\n\n---\n\n");

  const body = `# ${SITE.name}: contenido completo\n\n> ${SITE.description}\n\n# Servicios\n\n${services}\n\n# Guías\n\n${posts}\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
