// import Breadcrumb from "@/components/Common/Breadcrumb"; // Comentado o eliminado previamente
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | ALCARIA",
  description:
    "Ponte en contacto con ALCARIA para descubrir soluciones de automatización y agentes inteligentes que transforman la gestión operativa de tu empresa.",
};

const ContactPage = () => {
  return (
    <>
      {/* Añadir padding superior al contenido principal */}
      <main className="pt-32"> {/* Añadir padding top aquí */}
        {/* <Breadcrumb pageName="Contacto" description="..." /> */}
        <Contact />
      </main>
    </>
  );
};

export default ContactPage;
