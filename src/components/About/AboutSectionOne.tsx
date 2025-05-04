import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

// --- Nuevos Iconos --- 
const StarIcon = () => ( // Icono para Experiencia Cliente
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-primary mr-2 flex-shrink-0">
   <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
 </svg>
);

const AdjustmentsHorizontalIcon = () => ( // Icono para Operaciones IA
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2 flex-shrink-0">
   <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
 </svg>
);

const LightBulbIcon = () => ( // Icono para Innovación PYMEs
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2 flex-shrink-0">
   <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.355a7.5 7.5 0 0 1-5.25 0m5.25 0a7.5 7.5 0 0 0 5.25 0M12 7.5a6 6 0 0 0-6 6v3.75m12 0v-3.75a6 6 0 0 0-6-6" />
 </svg>
);
// ---------------------

const AboutSectionOne = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-frontier-gray pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Sección de texto y puntos clave (Refinada) */}
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Transformación Inteligente: Wallet + IA para tu Negocio"
                paragraph="En ALCARIA, no solo combinamos tecnología; creamos soluciones. Fusionamos la conexión directa de las Tarjetas Wallet con la eficiencia de la Inteligencia Artificial para potenciar tanto la experiencia de tus clientes como la agilidad de tus operaciones."
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0 space-y-6"
                data-wow-delay=".15s"
              >
                {/* Punto Clave 1: Experiencia Cliente */}
                <div className="flex items-start">
                   {/* Usar nuevo icono */}
                   <StarIcon />
                   <div>
                     <h3 className="text-lg font-semibold text-space-blue dark:text-white mb-1">Experiencia Cliente Optimizada</h3>
                     {/* Texto más conciso */}
                     <p className="text-base text-body-color dark:text-body-color-dark">
                       Comodidad y personalización vía Wallet para mejorar interacción y fidelizar.
                     </p>
                   </div>
                </div>

                 {/* Punto Clave 2: Eficiencia Operativa */}
                <div className="flex items-start">
                  {/* Usar nuevo icono */}
                  <AdjustmentsHorizontalIcon />
                  <div>
                     <h3 className="text-lg font-semibold text-space-blue dark:text-white mb-1">Operaciones Potenciadas por IA</h3>
                     {/* Texto más conciso */}
                     <p className="text-base text-body-color dark:text-body-color-dark">
                       Automatización, análisis predictivo y decisiones inteligentes para tu equipo.
                     </p>
                  </div>
                </div>

                 {/* Punto Clave 3: Enfoque PYME */}
                <div className="flex items-start">
                   {/* Usar nuevo icono */}
                   <LightBulbIcon />
                   <div>
                      <h3 className="text-lg font-semibold text-space-blue dark:text-white mb-1">Innovación Accesible para PYMEs</h3>
                      {/* Texto más conciso */}
                      <p className="text-base text-body-color dark:text-body-color-dark">
                        Tecnología avanzada de forma práctica y personalizada, con soporte experto.
                      </p>
                   </div>
                 </div>
              </div>
            </div>

            {/* Sección de imagen (sin cambios estructurales) */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] overflow-hidden rounded-3xl lg:mr-0">
                <Image
                  src="/images/about/ai_chip.jpg"
                  alt="Acerca de ALCARIA"
                  fill
                  className="mx-auto max-w-full dark:hidden dark:drop-shadow-none lg:mr-0 md:drop-shadow-three"
                />
                <Image
                  src="/images/about/ai_chip.jpg"
                  alt="Acerca de ALCARIA"
                  fill
                  className="mx-auto hidden max-w-full dark:block dark:drop-shadow-none lg:mr-0 md:drop-shadow-three"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
