import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Juanvi Aparici",
    designation: "Miembro - Club Ciclista Ontinyent",
    content:
      "Gracias a ALCARIA, nuestro club ha optimizado la gestión de nuestras tarjetas para Wallet y el sistema de cupones automatizados. Ahora, nuestros socios disfrutan de una experiencia más fluida y eficiente. Sin duda un acierto confiar en ellos.",
    image: "/images/testimonials/juanvi.jpeg",
    star: 5,
  },
  {
    id: 2,
    name: "Jorge Guillem",
    designation: "Propietario - Origen Padel",
    content:
      "Con la implementación de tarjetas dinámicas para Wallet, ALCARIA nos ha permitido ofrecer a nuestros clientes una experiencia digital moderna y personalizada. La fidelización y la interacción con nuestros jugadores han mejorado notablemente.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Jose Vicent",
    designation: "Propietario - Cestería Vicent",
    content:
      "ALCARIA ha revolucionado nuestra gestión interna con una automatización eficiente de facturas y pedidos. Hemos reducido tiempos administrativos y ahora podemos centrarnos en lo que realmente importa: ofrecer el mejor servicio a nuestros clientes.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative z-10 overflow-hidden py-16 md:py-20 lg:py-28">
      {/* Beige background with subtle pattern */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#E3CC9C]/15 via-[#E3CC9C]/8 to-transparent" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #01203F 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative z-10">
        <SectionTitle
          title="Lo que Dicen Nuestros Clientes"
          paragraph="Empresas reales que ya han transformado su negocio con ALCARIA. Resultados medibles y experiencias que hablan por sí solas."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial, index) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
