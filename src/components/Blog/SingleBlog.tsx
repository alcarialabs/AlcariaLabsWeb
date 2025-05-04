import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate, slug } = blog;
  return (
    <>
      <div
        className="wow fadeInUp group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-dark dark:shadow-none dark:hover:shadow-lg dark:hover:shadow-gray-700/50"
        data-wow-delay=".1s"
      >
        <Link
          href={`/blog/${slug}`}
          className="relative block aspect-[16/9] w-full overflow-hidden"
        >
          <span className="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase leading-none text-white">
            {tags[0]}
          </span>
          <Image src={image || '/images/blog/placeholder.jpg'} alt={title} fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" />
        </Link>
        <div className="p-5 sm:p-6">
          <h3>
            <Link
              href={`/blog/${slug}`}
              className="mb-3 block text-lg font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-xl font-syne"
            >
              {title}
            </Link>
          </h3>
          <p className="mb-5 border-b border-body-color border-opacity-10 pb-5 text-sm font-medium text-body-color dark:border-white dark:border-opacity-10 line-clamp-3">
            {paragraph}
          </p>
          <div className="flex items-center">
            <div className="mr-3 flex-shrink-0">
              <div className="relative h-8 w-8 overflow-hidden rounded-full">
                {author?.image && (
                    <Image src={author.image} alt={author.name || 'Autor'} fill className="object-cover object-center"/>
                )}
              </div>
            </div>
            <div className="flex-grow text-xs">
              <h4 className="mb-0 font-medium text-dark dark:text-white">
                Por {author?.name || 'Equipo ALCARIA'}
              </h4>
              <p className="text-body-color dark:text-body-color-dark">
                {publishDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
