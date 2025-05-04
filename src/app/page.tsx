import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import AnimatedSection from "@/components/Common/AnimatedSection";

export const metadata: Metadata = {
  title: "ALCARIA - Automatización e IA para Empresas",
  description:
    "Descubre cómo ALCARIA transforma procesos operativos con soluciones personalizadas de automatización y agentes inteligentes, ayudando a empresas y PYMEs en su transformación digital.",
  // Puedes agregar más metadata según lo necesites.
};

export default function Home() {
  return (
    <>
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
      <AnimatedSection>
        <Blog limitPosts={3} showAllLink={true} />
      </AnimatedSection>
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
    </>
  );
}
