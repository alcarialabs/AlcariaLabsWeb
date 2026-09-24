import { POSTS, getPost } from "@/content/blog";
import { OG_SIZE, renderOg } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Guía de ALCARIA";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  return renderOg({ kicker: `Blog · ${post?.category ?? "Guía"}`, title: post?.title ?? "Blog de ALCARIA" });
}
