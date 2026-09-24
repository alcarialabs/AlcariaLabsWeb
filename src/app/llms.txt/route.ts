import { POSTS } from "@/content/blog";
import { HOME_FAQ, SERVICES } from "@/lib/services";
import { SITE, absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

/** llms.txt (llmstxt.org): a concise, LLM-friendly map of the site for answer engines. */
export function GET() {
  const body = `# ${SITE.name}

> ${SITE.description}

${SITE.name} es una empresa española fundada en ${SITE.foundingDate} por ${SITE.founders.map((f) => f.name).join(", ")}. Ayuda a empresas y PYMEs de toda España a automatizar procesos con inteligencia artificial, crear agentes de IA para web y WhatsApp, digitalizar su fidelización con tarjetas Apple Wallet y Google Wallet y definir su estrategia de IA. Contacto: ${SITE.email}. Primera reunión de diagnóstico gratuita.

## Servicios

${SERVICES.map((s) => `- [${s.name}](${absoluteUrl(s.href)}): ${s.description}`).join("\n")}

## Preguntas frecuentes

${HOME_FAQ.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Guías del blog

${POSTS.map((p) => `- [${p.title}](${absoluteUrl(`/blog/${p.slug}`)}): ${p.tldr}`).join("\n")}

## Empresa

- [Sobre nosotros](${absoluteUrl("/about")}): equipo y valores de ${SITE.name}.
- [Contacto](${absoluteUrl("/contact")}): diagnóstico gratuito de 30 minutos.

## Optional

- [Texto completo de todas las guías](${absoluteUrl("/llms-full.txt")})
- [RSS del blog](${absoluteUrl("/feed.xml")})
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
