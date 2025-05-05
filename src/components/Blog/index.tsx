import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import Link from "next/link";

// Definir tipo para las props
interface BlogProps {
  showAllLink?: boolean;
  limitPosts?: number;
}

const Blog = ({ showAllLink = false, limitPosts }: BlogProps) => {
  // Determinar qué datos mostrar
  const postsToShow = limitPosts ? blogData.slice(0, limitPosts) : blogData;
  const showPagination = !limitPosts && blogData.length > 0; // Mostrar paginación solo si no hay límite

  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-gray-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title={limitPosts ? "Últimos Artículos" : "Todos los Artículos"} // Título dinámico
          paragraph="Lee nuestros análisis y consejos prácticos sobre IA, Wallet y automatización para llevar tu empresa al siguiente nivel."
          center
          mb="60px"
        />

        {/* Grid con los posts a mostrar */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {postsToShow.map((blog) => (
            <div key={blog.id} className="wow fadeInUp" data-wow-delay=".1s">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>

        {/* Paginación (Solo si no hay límite) */}
        {showPagination && (
            <div className="mt-12 -mx-4 flex flex-wrap" data-wow-delay=".15s">
             <div className="w-full px-4">
               <ul className="flex items-center justify-center pt-8">
                 {/* Botón Prev (ejemplo básico, sin lógica real de cambio de pág) */}
                 <li className="mx-1">
                   <a
                     href="#0"
                     className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                   >
                     Prev
                   </a>
                 </li>
                 {/* Números de página (ejemplo básico) */}
                 <li className="mx-1">
                   <a
                     href="#0"
                     className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-primary px-4 text-sm text-white transition hover:bg-opacity-100 hover:text-white"
                   >
                     1
                   </a>
                 </li>
                 {/* Mostrar más números si hubiera lógica de paginación real */}
                 {/* ... */}
                 {/* Botón Next (ejemplo básico) */}
                 <li className="mx-1">
                   <a
                     href="#0"
                     className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                   >
                     Next
                   </a>
                 </li>
               </ul>
             </div>
           </div>
        )}

        {/* Botón "Ver todos los artículos" condicional (solo en Home) */}
        {showAllLink && (
           <div className="mt-12 text-center">
             <Link href="/blog" className="inline-block rounded-full bg-primary px-7 py-3 text-center text-base font-semibold font-syne text-white shadow-md transition duration-300 hover:bg-primary/90">
               Ver Todos los Artículos
             </Link>
           </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
