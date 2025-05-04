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
        {/* Envolver el bloque del título en AnimatedSection */}
        <AnimatedSection className="pt-36 md:pt-40 lg:pt-44">
          <div className="container mb-12 md:mb-16 lg:mb-20 text-center">
              <h1 className="text-3xl font-bold text-space-blue dark:text-white sm:text-4xl md:text-[45px] font-syne">
                  Blog ALCARIA: Soluciones Inteligentes para tu Negocio
              </h1>
              <p className="text-base text-body-color md:text-lg mt-4 max-w-2xl mx-auto">
                  Mantente al día con las últimas estrategias y tecnologías en IA, Wallet y automatización diseñadas para impulsar la eficiencia y crecimiento de tu empresa.
              </p>
          </div>
        </AnimatedSection>

        {/* Renderizar Blog sin límite para mostrar todos */}
        <AnimatedSection>
          <Blog />
        </AnimatedSection>
      </main>
    </>
  );
};

export default BlogPage;
