// import AboutSectionOne from "@/components/About/AboutSectionOne"; // No usar directamente
// import AboutSectionTwo from "@/components/About/AboutSectionTwo"; // No usar directamente
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import AnimatedSection from "@/components/Common/AnimatedSection";
// Importar los nuevos componentes
import AboutIntroStory from "@/components/About/AboutIntroStory";
import AboutOurApproach from "@/components/About/AboutOurApproach";
import AboutValues from "@/components/About/AboutValues";
import AboutTeamConcept from "@/components/About/AboutTeamConcept";
import AboutCTA from "@/components/About/AboutCTA";

export const metadata: Metadata = {
  title: "Sobre ALCARIA | Impulsando PYMEs con IA y Wallet",
  description:
    "Conoce la misión, visión y valores de ALCARIA. Descubre cómo ayudamos a las PYMEs a transformarse digitalmente con soluciones accesibles de IA, automatización y Tarjetas Wallet.",
  // Puedes agregar otros metadata según necesites.
};

const AboutPage = () => {
  return (
    <>
      {/* Breadcrumb se eliminó, añadir padding superior al contenido principal */}
      <main className="pt-32"> {/* Añadir padding top aquí */}
        {/* Nueva estructura */}
        <AnimatedSection> <AboutIntroStory /> </AnimatedSection>
        <AnimatedSection> <AboutOurApproach /> </AnimatedSection>
        <AnimatedSection> <AboutValues /> </AnimatedSection>
        <AnimatedSection> <AboutTeamConcept /> </AnimatedSection>
        <AnimatedSection> <AboutCTA /> </AnimatedSection>
      </main>
    </>
  );
};

export default AboutPage;
