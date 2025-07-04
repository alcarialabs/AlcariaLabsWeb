import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import blogData from "@/components/Blog/blogData";
import AnimatedSection from "@/components/Common/AnimatedSection"; // Opcional para animar la entrada
import ReactMarkdown from 'react-markdown';

// Temporarily remove static generation functions to bypass build error

// // Define the expected type for static params
// type BlogStaticParams = {
//   slug: string;
// };

// // Generate static paths for each post based on the slug
// // Add explicit return type
// export function generateStaticParams(): BlogStaticParams[] {
//   return blogData.map((post) => ({
//     slug: post.slug,
//   }));
// }

// // Generate dynamic metadata for each post using inline type
// export async function generateMetadata(
//   { params }: { params: { slug: string } }
// ): Promise<Metadata> {
//   const slug = params.slug;
//   const post = blogData.find((p) => p.slug === slug);
//
//   if (!post) {
//     return {
//       title: "Artículo No Encontrado | ALCARIA Blog",
//     };
//   }
//
//   return {
//     title: `${post.title} | ALCARIA Blog`,
//     description: post.paragraph,
//   };
// }

// Add basic static metadata as a placeholder
export const metadata: Metadata = {
  title: "Artículo del Blog | ALCARIA",
  description: "Lee nuestros últimos artículos sobre tecnología y negocios.",
};

// Define the page component letting TypeScript infer the props type
const SingleBlogPage = ({ params }) => {
  const slug = params.slug;
  const post = blogData.find((p) => p.slug === slug);

  // Si el post no se encuentra por el slug, mostrar 404
  if (!post) {
    notFound();
  }

  return (
    <>
      <main className="pt-36 pb-16 md:pb-20 lg:pb-28 md:pt-40 lg:pt-44"> {/* Padding superior similar a la pág de blog */}
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Encabezado del Post */}
            <div className="mb-10 md:mb-14 text-center">
              {/* Tags */}
              <div className="mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Título */}
              <h1 className="font-syne text-2xl font-bold text-space-blue dark:text-white sm:text-3xl md:text-4xl lg:text-[42px] !leading-tight mb-4">
                {post.title}
              </h1>
              {/* Autor y Fecha */}
              <div className="flex items-center justify-center space-x-4 text-sm text-body-color dark:text-body-color-dark">
                <div className="flex items-center space-x-2">
                  {post.author?.image && (
                    <Image
                      src={post.author.image}
                      alt={post.author.name}
                      width={24}
                      height={24}
                      className="rounded-full object-cover"
                    />
                  )}
                  <span>Por {post.author?.name || 'Equipo ALCARIA'}</span>
                </div>
                <span>•</span>
                <span>{post.publishDate}</span>
              </div>
            </div>

            {/* Imagen Principal */}
            <div className="mb-10 md:mb-14 relative aspect-[16/9] w-full overflow-hidden rounded-xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Contenido del Post - Aplicar estilos de prose */}
            <article
              className="prose prose-lg dark:prose-invert max-w-none mx-auto
                         prose-headings:font-syne prose-headings:text-space-blue dark:prose-headings:text-white
                         prose-a:text-primary hover:prose-a:underline
                         prose-blockquote:border-l-primary prose-blockquote:pl-4 prose-blockquote:font-medium"
            >
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>

            {/* Podríamos añadir aquí "Artículos Relacionados" o navegación entre posts */}

          </div>
        </div>
      </main>
    </>
  );
};

export default SingleBlogPage; 