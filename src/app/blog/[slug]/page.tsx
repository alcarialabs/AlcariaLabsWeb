import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, formatDate, getAuthor, getHeadings, getPost, getRelated, readingTime } from "@/content/blog";
import { SERVICES } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";
import { blogPosting, breadcrumbs, faqPage, graph, webPage } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ArticleBody from "@/components/blog/ArticleBody";
import PostCover from "@/components/blog/PostCover";
import PostCard from "@/components/blog/PostCard";
import { ReadingProgress, ShareButtons, Toc } from "@/components/blog/ArticleChrome";
import Faq from "@/components/sections/Faq";
import SplitReveal from "@/components/motion/SplitReveal";
import Arrow from "@/components/ui/Arrow";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const author = getAuthor(post.author);
  const path = `/blog/${post.slug}`;
  return {
    title: post.seoTitle ?? post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: author.name, url: author.url }],
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: post.title,
      description: post.description,
      publishedTime: post.publishDate,
      modifiedTime: post.updatedDate,
      authors: [author.name],
      section: post.category,
      tags: post.tags,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description },
  };
}

// Service most relevant to the post, for the inline CTA.
const serviceFor = (category: string) =>
  SERVICES.find((s) =>
    category === "Wallet" ? s.slug === "tarjetas-wallet" : category === "IA" ? s.slug === "agentes-ia" : category === "Estrategia" ? s.slug === "consultoria-ia" : s.slug === "automatizacion-de-procesos",
  )!;

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const author = getAuthor(post.author);
  const headings = getHeadings(post);
  const related = getRelated(post);
  const service = serviceFor(post.category);
  const path = `/blog/${post.slug}`;
  const url = absoluteUrl(path);
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path },
  ];

  return (
    <main>
      <JsonLd
        data={graph(
          { ...webPage({ path, name: post.title, description: post.description }), breadcrumb: breadcrumbs(crumbs), primaryImageOfPage: absoluteUrl(`${path}/opengraph-image`) },
          blogPosting(post),
          faqPage(post.faq, url),
        )}
      />
      <ReadingProgress />

      {/* Header */}
      <header className="relative overflow-hidden bg-night pb-16 pt-36 md:pb-20 md:pt-44">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-cobalt/25 blur-[140px]" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 mask-fade-b" />
        <div className="container relative">
          <Breadcrumbs items={crumbs} />
          <div className="max-w-5xl">
            <Link
              href={`/blog?categoria=${encodeURIComponent(post.category)}`}
              className="mb-6 inline-flex rounded-full border border-white/15 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-sand"
            >
              {post.category}
            </Link>
            <SplitReveal
              as="h1"
              trigger="load"
              className="mb-10 max-w-[22ch] font-display text-[clamp(2rem,3.9vw,3.7rem)] font-extrabold leading-[1.04] tracking-[-0.035em] text-white"
            >
              {post.title}
            </SplitReveal>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/60">
              <span className="flex items-center gap-3">
                <Image src={author.image} alt={author.name} width={44} height={44} className="h-11 w-11 rounded-full object-cover ring-2 ring-white/10" />
                <span>
                  <span className="block font-semibold text-white">{author.name}</span>
                  <span className="block text-xs text-white/45">{author.role}</span>
                </span>
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.14em]">
                Actualizado <time dateTime={post.updatedDate}>{formatDate(post.updatedDate)}</time>
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.14em]">{readingTime(post)} min de lectura</span>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-paper text-ink" data-article>
        {/* Cover */}
        <div className="container relative">
          <div className="relative -mt-2 aspect-[16/9] overflow-hidden rounded-b-[28px] md:aspect-[21/9] md:rounded-[32px] md:[transform:translateY(-3rem)]">
            <PostCover post={post} priority sizes="(min-width: 1400px) 1300px, 100vw" />
          </div>
        </div>

        <div className="container grid gap-12 pb-20 pt-12 md:pt-4 lg:grid-cols-12">
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28">
              <Toc headings={headings} />
            </div>
          </aside>

          <article className="min-w-0 lg:col-span-8 lg:col-start-5 xl:col-span-7 xl:col-start-5">
            {/* Answer-first block (AEO) */}
            <section aria-label="Respuesta rápida" className="mb-12 overflow-hidden rounded-[24px] bg-ink text-white">
              <div className="p-7 md:p-9">
                <p className="eyebrow mb-4">Respuesta rápida</p>
                <p className="font-display text-xl font-semibold leading-relaxed md:text-[22px]">{post.tldr}</p>
              </div>
              <div className="border-t border-white/10 bg-white/[0.03] p-7 md:p-9">
                <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">Claves del artículo</p>
                <ul className="space-y-3">
                  {post.keyTakeaways.map((k) => (
                    <li key={k} className="flex gap-3 text-[15.5px] leading-relaxed text-white/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                      {k}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <ArticleBody content={post.content} />

            {/* Inline service CTA */}
            <aside className="my-14 flex flex-col gap-6 rounded-[24px] border border-ink/10 bg-white p-7 md:flex-row md:items-center md:justify-between md:p-9">
              <div>
                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ember">{service.kicker}</p>
                <p className="font-display text-2xl font-bold leading-tight">¿Quieres aplicarlo en tu empresa?</p>
                <p className="mt-2 text-ink/60">{service.name}: diagnóstico gratis y propuesta cerrada.</p>
              </div>
              <Link href={service.href} className="btn-ink shrink-0">
                Ver servicio <Arrow />
              </Link>
            </aside>

            <div className="flex flex-col gap-8 border-t border-ink/10 pt-10">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span key={t} className="rounded-full bg-ink/5 px-3 py-1 text-xs text-ink/60">
                    #{t}
                  </span>
                ))}
              </div>
              <ShareButtons url={url} title={post.title} />
            </div>

            {/* Author (E-E-A-T) */}
            <section aria-label="Sobre el autor" className="mt-12 flex flex-col gap-6 rounded-[24px] bg-white p-7 sm:flex-row md:p-9">
              <Image src={author.image} alt={author.name} width={88} height={88} className="h-20 w-20 shrink-0 rounded-full object-cover" />
              <div>
                <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/45">Escrito por</p>
                <p className="font-display text-xl font-bold">
                  {author.url ? (
                    <a href={author.url} target="_blank" rel="noopener author" className="hover:text-ember">
                      {author.name}
                    </a>
                  ) : (
                    author.name
                  )}
                </p>
                <p className="mb-3 text-sm text-ink/55">{author.role}</p>
                <p className="leading-relaxed text-ink/70">{author.bio}</p>
              </div>
            </section>
          </article>
        </div>
      </div>

      <Faq items={post.faq} id="preguntas" title="Preguntas frecuentes" eyebrow="FAQ del artículo" />

      <section aria-labelledby="related-title" className="bg-night py-24 md:py-32">
        <div className="container">
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 id="related-title" className="font-display text-display-sm font-extrabold text-white">
              Sigue leyendo
            </h2>
            <Link href="/blog" className="btn-ghost hidden sm:inline-flex">
              Todas las guías <Arrow />
            </Link>
          </div>
          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ember py-20 text-white md:py-24">
        <div className="container flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <p className="max-w-[20ch] font-display text-display-sm font-extrabold">
            ¿Hablamos de tu caso? Diagnóstico gratis en 30 minutos.
          </p>
          <Link href="/contact" className="btn bg-night text-white hover:bg-ink">
            Reservar diagnóstico <Arrow />
          </Link>
        </div>
      </section>
    </main>
  );
}
