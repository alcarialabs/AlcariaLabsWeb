import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | ALCARIA",
  description:
    "Ponte en contacto con ALCARIA para descubrir soluciones de automatización y chatbots que transforman la gestión operativa de tu empresa.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contacto"
        description="Si buscas transformar digitalmente tu empresa, contáctanos. En ALCARIA ofrecemos soluciones personalizadas para optimizar procesos y mejorar la eficiencia operativa."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
