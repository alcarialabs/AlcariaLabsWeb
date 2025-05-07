import Blog from "@/components/Blog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import AnimatedSection from "@/components/Common/AnimatedSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | ALCARIA - IA, Automatización y Wallet",
  description: "Lee nuestros últimos artículos sobre transformación digital, inteligencia artificial, tarjetas wallet y automatización para PYMEs.",
};

const BlogPage = () => {
  return (
    <>
      {/* Opción 1: Usar Breadcrumb (si se quiere mantener) */}
      {/* <Breadcrumb
        pageName="Blog"
        description="Descubre insights y novedades sobre cómo la tecnología puede impulsar tu negocio."
      /> */}

      {/* Opción 2: Usar padding superior (más consistente con otras páginas) */}
      <main className="pb-16 md:pb-20 lg:pb-28">


        {/* Renderizar Blog sin límite para mostrar todos */}
        <AnimatedSection>
          <Blog />
        </AnimatedSection>
      </main>
    </>
  );
};

export default BlogPage;
