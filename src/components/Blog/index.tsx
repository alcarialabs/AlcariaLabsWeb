import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import Link from "next/link";

interface BlogProps {
  showAllLink?: boolean;
  limitPosts?: number;
}

const Blog = ({ showAllLink = false, limitPosts }: BlogProps) => {
  const postsToShow = limitPosts ? blogData.slice(0, limitPosts) : blogData;
  const showPagination = !limitPosts && blogData.length > 0;

  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-gray-50 py-16 dark:bg-gray-dark md:py-20 lg:py-28"
    >
      {/* Subtle top border accent */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#E3CC9C]/40 to-transparent" />

      <div className="container">
        <SectionTitle
          title={limitPosts ? "Últimos Artículos" : "Todos los Artículos"}
          paragraph="Análisis y consejos prácticos sobre IA, Wallet y automatización para llevar tu empresa al siguiente nivel."
          center
          mb="60px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {postsToShow.map((blog) => (
            <div key={blog.id}>
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>

        {showPagination && (
          <div className="mt-12 flex justify-center">
            <ul className="flex items-center gap-2">
              <li>
                <span className="flex h-10 min-w-[40px] cursor-default items-center justify-center rounded-full bg-white px-4 text-sm font-medium text-body-color/40 shadow-sm dark:bg-gray-dark">
                  Anterior
                </span>
              </li>
              <li>
                <span className="flex h-10 min-w-[40px] items-center justify-center rounded-full bg-[#01203F] px-4 text-sm font-bold text-white">
                  1
                </span>
              </li>
              <li>
                <span className="flex h-10 min-w-[40px] cursor-default items-center justify-center rounded-full bg-white px-4 text-sm font-medium text-body-color/40 shadow-sm dark:bg-gray-dark">
                  Siguiente
                </span>
              </li>
            </ul>
          </div>
        )}

        {showAllLink && (
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="font-syne inline-flex items-center gap-2 rounded-full border-2 border-[#01203F] px-7 py-3 text-base font-bold text-[#01203F] transition-all duration-300 hover:bg-[#01203F] hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-[#01203F]"
            >
              Ver Todos los Artículos
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
