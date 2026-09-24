import Link from "next/link";
import type { Post } from "@/content/blog/types";
import { formatDate, getAuthor, readingTime } from "@/content/blog";
import PostCover, { CATEGORY_ACCENT } from "./PostCover";

export default function PostCard({
  post,
  tone = "dark",
  featured = false,
  priority = false,
}: {
  post: Post;
  tone?: "dark" | "light";
  featured?: boolean;
  priority?: boolean;
}) {
  const author = getAuthor(post.author);
  const dark = tone === "dark";

  return (
    <article className={`group relative flex h-full flex-col ${featured ? "lg:grid lg:grid-cols-2 lg:gap-10" : ""}`}>
      <div
        className={`relative mb-6 overflow-hidden rounded-[24px] ${featured ? "aspect-[16/10] lg:mb-0 lg:aspect-auto lg:min-h-[420px]" : "aspect-[16/10]"}`}
      >
        <div className="absolute inset-0 transition-transform duration-[1.2s] ease-expo group-hover:scale-[1.06]">
          <PostCover post={post} priority={priority} sizes={featured ? "(min-width: 992px) 50vw, 100vw" : undefined} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        <span
          className="absolute left-4 top-4 rounded-full bg-night/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white backdrop-blur"
          style={{ boxShadow: `inset 0 0 0 1px ${CATEGORY_ACCENT[post.category]}66` }}
        >
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col">
        <div className={`mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] ${dark ? "text-white/40" : "text-ink/45"}`}>
          <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
          <span className="h-1 w-1 rounded-full bg-ember" />
          <span>{readingTime(post)} min</span>
        </div>
        <h3
          className={`mb-3 font-display font-bold leading-[1.12] tracking-tight ${featured ? "text-[clamp(1.75rem,3vw,2.75rem)]" : "text-xl md:text-[22px]"} ${dark ? "text-white" : "text-ink"}`}
        >
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0" data-cursor="Leer">
            <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-700 ease-expo group-hover:bg-[length:100%_2px]">
              {post.title}
            </span>
          </Link>
        </h3>
        <p className={`mb-6 line-clamp-3 text-[15px] leading-relaxed ${dark ? "text-white/55" : "text-ink/60"} ${featured ? "md:text-lg" : ""}`}>
          {post.excerpt}
        </p>
        <p className={`mt-auto text-sm ${dark ? "text-white/60" : "text-ink/60"}`}>
          Por <span className={dark ? "text-white" : "text-ink"}>{author.name}</span>
        </p>
      </div>
    </article>
  );
}
