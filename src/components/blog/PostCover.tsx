import Image from "next/image";
import type { Post, PostCategory } from "@/content/blog/types";
import Isotipo from "@/components/brand/Isotipo";

export const CATEGORY_ACCENT: Record<PostCategory, string> = {
  IA: "#0344DC",
  Automatización: "#FF4F00",
  Wallet: "#E3CC9C",
  Estrategia: "#8FB3FF",
};

/** Photo when the post has one; otherwise a branded generative cover. */
export default function PostCover({
  post,
  sizes = "(min-width: 992px) 33vw, 100vw",
  priority = false,
  className = "",
}: {
  post: Post;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  if (post.image) {
    return (
      <Image
        src={post.image}
        alt={post.imageAlt ?? post.title}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${className}`}
      />
    );
  }

  const accent = CATEGORY_ACCENT[post.category];
  return (
    <div
      className={`absolute inset-0 overflow-hidden bg-ink ${className}`}
      role="img"
      aria-label={post.title}
      style={{
        backgroundImage: `radial-gradient(120% 90% at 85% 10%, ${accent}55, transparent 55%), radial-gradient(80% 80% at 0% 100%, #FF4F0033, transparent 60%)`,
      }}
    >
      <div className="absolute inset-0 bg-grid opacity-60" />
      <span className="absolute bottom-[-0.12em] left-4 font-display text-[clamp(3.5rem,9vw,7rem)] font-extrabold leading-none tracking-tighter text-outline">
        {post.category}
      </span>
      <Isotipo className="absolute right-[8%] top-[14%] h-[52%] w-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" title="" aria-hidden />
    </div>
  );
}
