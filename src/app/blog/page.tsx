import type { Metadata } from "next";
import { Suspense } from "react";
import { CATEGORIES, POSTS } from "@/content/blog";
import { SITE, absoluteUrl } from "@/lib/site";
import { ORG_ID, breadcrumbs, graph, webPage } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PostCard from "@/components/blog/PostCard";
import BlogGrid from "@/components/blog/BlogGrid";
import SplitReveal from "@/components/motion/SplitReveal";
import Reveal from "@/components/motion/Reveal";
import Marquee from "@/components/motion/Marquee";

const DESCRIPTION =
  "Guías prácticas sobre inteligencia artificial, automatización de procesos, agentes de IA, chatbots de WhatsApp y tarjetas Wallet para empresas y PYMEs en España.";

export const metadata: Metadata = {
  title: "Blog de IA y automatización para empresas",
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: { url: "/blog", title: `Blog de ${SITE.name}: IA y automatización para empresas`, description: DESCRIPTION },
};

export default function BlogPage() {
  const [featured, ...rest] = POSTS;
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <main className="bg-night">
      <JsonLd
        data={graph(
          { ...webPage({ path: "/blog", name: "Blog de ALCARIA", description: DESCRIPTION, type: "CollectionPage" }), breadcrumb: breadcrumbs(crumbs) },
          {
            "@type": "Blog",
            "@id": `${SITE.url}/blog#blog`,
            name: `Blog de ${SITE.name}`,
            description: DESCRIPTION,
            url: absoluteUrl("/blog"),
            inLanguage: SITE.lang,
            publisher: { "@id": ORG_ID },
            blogPost: POSTS.map((p) => ({
              "@type": "BlogPosting",
              "@id": `${absoluteUrl(`/blog/${p.slug}`)}#article`,
              headline: p.title,
              url: absoluteUrl(`/blog/${p.slug}`),
              datePublished: p.publishDate,
              dateModified: p.updatedDate,
            })),
          },
        )}
      />

      <section className="relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-44">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-ember/15 blur-[140px]" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 mask-fade-b" />
        <div className="container relative">
          <Breadcrumbs items={crumbs} />
          <p className="eyebrow mb-6">Recursos · {POSTS.length} guías</p>
          <SplitReveal
            as="h1"
            trigger="load"
            className="max-w-[14ch] font-display text-display-lg font-extrabold text-white"
          >
            Blog de IA y automatización para empresas
          </SplitReveal>
          <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-white/65">
            Guías rigurosas y prácticas para aplicar la inteligencia artificial en tu negocio: qué automatizar,
            cuánto cuesta, cómo implantarlo y qué resultados esperar.
          </p>
        </div>
      </section>

      <div className="border-y border-white/10 py-5">
        <Marquee duration={45} className="mask-fade-x">
          {["Automatización", "Agentes de IA", "WhatsApp", "Facturas", "Wallet", "Fidelización", "Estrategia", "ROI"].map((t) => (
            <span key={t} className="flex items-center whitespace-nowrap font-display text-2xl font-bold text-white/25 md:text-3xl">
              {t}
              <span className="mx-8 h-2 w-2 rounded-full bg-ember" />
            </span>
          ))}
        </Marquee>
      </div>

      <section aria-label="Artículo destacado" className="container py-16 md:py-24">
        <Reveal>
          <div data-reveal>
            <PostCard post={featured} featured priority />
          </div>
        </Reveal>
      </section>

      <section aria-label="Todos los artículos" className="container pb-28 md:pb-36">
        <Suspense
          fallback={
            <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          }
        >
          <BlogGrid
            posts={rest.map(({ slug, category }) => ({ slug, category }))}
            categories={CATEGORIES}
            cards={Object.fromEntries(rest.map((p) => [p.slug, <PostCard key={p.slug} post={p} />]))}
          />
        </Suspense>
      </section>
    </main>
  );
}
