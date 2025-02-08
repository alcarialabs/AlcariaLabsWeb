import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre ALCARIA | Automatización y Chatbots para Empresas",
  description:
    "Conoce ALCARIA, la startup que revoluciona la eficiencia operativa a través de soluciones de automatización y chatbots personalizados para empresas y PYMEs.",
  // Puedes agregar otros metadata según necesites.
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Sobre ALCARIA"
        description="ALCARIA nace para transformar la gestión de procesos operativos mediante soluciones de automatización y chatbots personalizados. Descubre nuestra historia, visión y el impacto que generamos en empresas y PYMEs en su camino hacia la transformación digital."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
