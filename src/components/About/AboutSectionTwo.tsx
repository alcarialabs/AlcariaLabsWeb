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

const ChatBubbleLeftRightIcon = ({ className }: { className?: string }) => ( // Icono para Agentes Inteligentes - CAMBIADO A UserCircleIcon
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    {/* UserCircleIcon */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
// -------------------------

const AboutSectionTwo = () => {
  return (
    <section>
      <div className="container">
        <div className="border-b border-frontier-gray">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Imagen (lado izquierdo) */}
            <div className="w-full px-4 lg:w-1/2">
              <div
               className="mx-auto my-8 max-w-[500px] text-center lg:my-0 overflow-hidden rounded-3xl"
               data-wow-delay=".15s"
              >
                <Image
                  src="/images/about/ia23.png"
                  alt="IA y Automatización en ALCARIA"
                  width={500}
                  height={500}
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none w-full h-auto"
                />
                <Image
                  src="/images/about/ia23.png"
                  alt="IA y Automatización en ALCARIA"
                  width={500}
                  height={500}
                  className="hidden drop-shadow-three dark:block dark:drop-shadow-none w-full h-auto"
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
