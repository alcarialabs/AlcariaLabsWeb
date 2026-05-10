import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";
import AnimatedSection from "@/components/Common/AnimatedSection";

export const metadata: Metadata = {
  title: "ALCARIA – Automatización e IA para Empresas y PYMEs",
  description:
    "ALCARIA automatiza procesos con IA y agentes inteligentes para empresas y PYMEs. Reduce costes, elimina tareas repetitivas y multiplica la productividad. Consulta gratuita.",
  keywords:
    "automatización empresas, inteligencia artificial PYMEs, agentes IA, tarjetas wallet, transformación digital, ALCARIA",
  openGraph: {
    title: "ALCARIA – Automatización e IA para Empresas",
    description:
      "Automatizamos procesos con IA, eliminamos tareas repetitivas y multiplicamos la productividad. Resultados reales en semanas.",
    url: "https://alcaria.es",
    siteName: "ALCARIA",
    type: "website",
  },
  alternates: { canonical: "https://alcaria.es" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ALCARIA",
  url: "https://alcaria.es",
  logo: "https://alcaria.es/images/logo/LOGO_ALCARIA_AZUL.png",
  description:
    "ALCARIA automatiza procesos con IA y agentes inteligentes para empresas y PYMEs. Tarjetas Wallet, automatización de procesos y soluciones de IA personalizadas.",
  foundingDate: "2025",
  founders: [
    { "@type": "Person", name: "Eric Duró", url: "https://ericduro.com" },
    { "@type": "Person", name: "Joan Aparici" },
    { "@type": "Person", name: "Vicent Reig" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hola@alcaria.es",
    availableLanguage: ["Spanish"],
  },
  sameAs: ["https://ericduro.com"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <ScrollUp />
      <Hero />
      <AnimatedSection>
        <Features />
      </AnimatedSection>
      <AnimatedSection>
        <AboutSectionTwo />
      </AnimatedSection>
      <AnimatedSection>
        <AboutSectionThree />
      </AnimatedSection>
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
      <CTA />
      <AnimatedSection>
        <Blog limitPosts={3} showAllLink={true} />
      </AnimatedSection>
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
    </>
  );
}
