import Image from "next/image";
// No importar iconos, usar SVG directamente

// --- Nuevos Iconos SVG --- 
const ChartBarIcon = ({ className }: { className?: string }) => ( // Icono para IA Aplicada
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
   <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
 </svg>
);

const BoltIcon = ({ className }: { className?: string }) => ( // Icono para Automatización
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
   <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
 </svg>
);

const ChatBubbleLeftRightIcon = ({ className }: { className?: string }) => ( // Icono para Agentes Inteligentes
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
   <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 12 3.054c-2.69.147-5.282.61-7.74 1.346A2.125 2.125 0 0 0 2.25 6.637v4.286c0 1.135.847 2.1 1.98 2.193.34.027.68.052 1.02.072v3.091l3-3c.967-.023 1.91-.078 2.83-.156" />
 </svg>
);
// -------------------------

const AboutSectionTwo = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Imagen (lado izquierdo) */}
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0 overflow-hidden rounded-3xl" // Ya tenías rounded-xl aquí, lo cambio a 3xl por consistencia
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/about/ia23.jpg"
                  alt="IA y Automatización en ALCARIA"
                  fill
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                <Image
                  src="/images/about/ia23.jpg"
                  alt="IA y Automatización en ALCARIA"
                  fill
                  className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
                />
              </div>
            </div>
            {/* Textos (lado derecho) - Con nuevos iconos SVG */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[470px] space-y-9"> {/* Añadir space-y para espaciado uniforme */}
                {/* Punto 1: IA Aplicada */}
                <div className="flex items-start">
                  <div className="mr-5 flex-shrink-0 text-primary">
                    <ChartBarIcon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-space-blue dark:text-white sm:text-2xl lg:text-xl xl:text-2xl font-syne">
                      IA Aplicada: Decisiones Inteligentes
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Transforma datos en ventaja competitiva. Implementamos IA para análisis predictivo, patrones y optimización de estrategias.
                    </p>
                  </div>
                </div>

                {/* Punto 2: Automatización */}
                <div className="flex items-start">
                   <div className="mr-5 flex-shrink-0 text-primary">
                    <BoltIcon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-space-blue dark:text-white sm:text-2xl lg:text-xl xl:text-2xl font-syne">
                      Automatización que Libera Potencial
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Elimina tareas manuales con RPA + IA. Agiliza flujos, reduce costes y permite a tu equipo centrarse en tareas de alto valor.
                    </p>
                  </div>
                </div>

                {/* Punto 3: Agentes Inteligentes */}
                 <div className="flex items-start">
                   <div className="mr-5 flex-shrink-0 text-primary">
                    <ChatBubbleLeftRightIcon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-space-blue dark:text-white sm:text-2xl lg:text-xl xl:text-2xl font-syne">
                      Agentes Inteligentes que Mejoran la Experiencia
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Soporte instantáneo y personalizado 24/7. Desarrollamos agentes inteligentes que resuelven consultas, gestionan tareas y mejoran la satisfacción del cliente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
