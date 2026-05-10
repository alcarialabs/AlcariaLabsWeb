import Blog from "@/components/Blog";
import AnimatedSection from "@/components/Common/AnimatedSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | ALCARIA – IA, Automatización y Wallet para PYMEs",
  description:
    "Artículos prácticos sobre inteligencia artificial, automatización de procesos y tarjetas Wallet para empresas y PYMEs. Aprende cómo transformar tu negocio.",
  keywords:
    "IA para empresas, automatización PYMEs, tarjetas wallet, agentes inteligentes, transformación digital, ALCARIA blog",
  openGraph: {
    title: "Blog ALCARIA – IA, Automatización y Wallet",
    description:
      "Artículos prácticos sobre IA, automatización y tarjetas Wallet para PYMEs.",
    url: "https://alcaria.es/blog",
    siteName: "ALCARIA",
    type: "website",
  },
  alternates: { canonical: "https://alcaria.es/blog" },
};

const BlogPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog ALCARIA",
    description:
      "Artículos sobre inteligencia artificial, automatización y tarjetas Wallet para PYMEs.",
    url: "https://alcaria.es/blog",
    publisher: {
      "@type": "Organization",
      name: "ALCARIA",
      url: "https://alcaria.es",
      logo: {
        "@type": "ImageObject",
        url: "https://alcaria.es/images/logo/LOGO_ALCARIA_AZUL.png",
      },
    },
    inLanguage: "es-ES",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="pb-16 md:pb-20 lg:pb-28">
        <AnimatedSection>
          <Blog />
        </AnimatedSection>
      </main>
    </>
  );
};

export default BlogPage;
