import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import blogData from "@/components/Blog/blogData";
import ReactMarkdown from "react-markdown";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogData.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Artículo No Encontrado | ALCARIA Blog" };
  }

  const canonical = `https://alcaria.es/blog/${post.slug}`;
  const ogImage = `https://alcaria.es${post.image}`;

  return {
    title: `${post.title} | ALCARIA Blog`,
    description: post.paragraph,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author?.name || "Equipo ALCARIA" }],
    openGraph: {
      title: post.title,
      description: post.paragraph,
      url: canonical,
      siteName: "ALCARIA",
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author?.name || "Equipo ALCARIA"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.paragraph,
      images: [ogImage],
    },
    alternates: { canonical },
  };
}

const SingleBlogPage = async ({ params }: Props) => {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const canonical = `https://alcaria.es/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.paragraph,
    image: `https://alcaria.es${post.image}`,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: {
      "@type": "Person",
      name: post.author?.name || "Equipo ALCARIA",
    },
    publisher: {
      "@type": "Organization",
      name: "ALCARIA",
      logo: {
        "@type": "ImageObject",
        url: "https://alcaria.es/images/logo/LOGO_ALCARIA_AZUL.png",
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    keywords: post.tags.join(", "),
    articleSection: post.tags[0],
    inLanguage: "es-ES",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="pb-16 pt-36 md:pb-20 md:pt-40 lg:pb-28 lg:pt-44">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {/* Back link */}
            <Link
              href="/blog"
              className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-[#0344DC] hover:text-[#01203F] dark:text-[#E3CC9C] dark:hover:text-white transition-colors"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
              Volver al Blog
            </Link>

            {/* Header */}
            <div className="mb-10 text-center md:mb-14">
              <div className="mb-4 flex flex-wrap justify-center gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block rounded-full bg-[#0344DC]/10 px-3 py-1 text-xs font-semibold text-[#0344DC] dark:bg-[#0344DC]/20 dark:text-[#E3CC9C]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="font-syne mb-5 text-2xl font-bold leading-tight text-[#01203F] dark:text-white sm:text-3xl md:text-4xl lg:text-[42px]">
                {post.title}
              </h1>

              <div className="flex items-center justify-center gap-4 text-sm text-body-color dark:text-body-color-dark">
                <div className="flex items-center gap-2">
                  {post.author?.image && (
                    <Image
                      src={post.author.image}
                      alt={post.author.name}
                      width={28}
                      height={28}
                      className="rounded-full object-cover"
                    />
                  )}
                  <span className="font-medium">
                    {post.author?.name || "Equipo ALCARIA"}
                  </span>
                </div>
                <span className="text-gray-300 dark:text-gray-600">•</span>
                <time dateTime={post.publishDate}>{post.publishDate}</time>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-2xl md:mb-14">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Article content */}
            <article
              className="prose prose-lg dark:prose-invert mx-auto max-w-none
                         prose-headings:font-syne prose-headings:text-[#01203F] dark:prose-headings:text-white
                         prose-a:text-[#0344DC] hover:prose-a:underline
                         prose-strong:text-[#01203F] dark:prose-strong:text-white
                         prose-blockquote:border-l-[#FF4F00] prose-blockquote:pl-4 prose-blockquote:font-medium
                         prose-li:marker:text-[#FF4F00]"
            >
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>

            {/* CTA */}
            <div className="mt-16 rounded-2xl bg-[#01203F] p-8 text-center">
              <h3 className="font-syne mb-3 text-2xl font-bold text-white">
                ¿Quieres aplicar esto en tu empresa?
              </h3>
              <p className="mb-6 text-white/65">
                En ALCARIA te ayudamos a implementar soluciones de IA y automatización adaptadas a tu negocio.
              </p>
              <Link
                href="/contact"
                className="font-syne inline-flex items-center gap-2 rounded-full bg-[#FF4F00] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#FF4F00]/25 transition-all hover:bg-[#FF4F00]/90"
              >
                Hablemos
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SingleBlogPage;
