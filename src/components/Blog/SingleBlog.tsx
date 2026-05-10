import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate, slug } = blog;

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-[#E3CC9C]/40 dark:bg-gray-dark dark:ring-white/10">
      {/* Top accent on hover */}
      <div className="absolute inset-x-0 top-0 z-10 h-[3px] scale-x-0 bg-gradient-to-r from-[#0344DC] via-[#E3CC9C] to-[#FF4F00] transition-transform duration-300 group-hover:scale-x-100" />

      <Link
        href={`/blog/${slug}`}
        className="relative block aspect-[16/9] w-full overflow-hidden"
      >
        <span className="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-[#01203F] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
          {tags[0]}
        </span>
        <Image
          src={image || "/images/blog/placeholder.jpg"}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="p-6">
        <h3>
          <Link
            href={`/blog/${slug}`}
            className="font-syne mb-3 block text-lg font-bold text-[#01203F] transition-colors duration-200 hover:text-[#0344DC] dark:text-white dark:hover:text-[#E3CC9C] sm:text-xl"
          >
            {title}
          </Link>
        </h3>
        <p className="mb-5 border-b border-gray-100 pb-5 text-sm leading-relaxed text-body-color line-clamp-3 dark:border-white/10 dark:text-body-color-dark">
          {paragraph}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative h-8 w-8 flex-shrink-0 overflow-hidden rounded-full">
              {author?.image && (
                <Image
                  src={author.image}
                  alt={author.name || "Autor"}
                  fill
                  className="object-cover object-center"
                />
              )}
            </div>
            <div className="text-xs">
              <p className="font-semibold text-[#01203F] dark:text-white">
                {author?.name || "Equipo ALCARIA"}
              </p>
              <time className="text-body-color dark:text-body-color-dark" dateTime={publishDate}>
                {publishDate}
              </time>
            </div>
          </div>

          <Link
            href={`/blog/${slug}`}
            className="font-syne flex items-center gap-1 text-xs font-bold text-[#0344DC] transition-colors hover:text-[#01203F] dark:text-[#E3CC9C] dark:hover:text-white"
          >
            Leer
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
