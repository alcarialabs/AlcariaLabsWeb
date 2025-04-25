import Image from "next/image";
// No importar iconos, usar SVG directamente

// SVG para CpuChipIcon (outline)
const CpuChipIconSVG = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
  </svg>
);

// SVG para CogIcon (outline)
const CogIconSVG = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1 1 15 0m-15 0h-1.5m15 0h1.5m-15 0a7.5 7.5 0 0 1 15 0m-15 0h-1.5m15 0h1.5M12 4.5v-1.5m0 15v1.5" />
 </svg>
);

// SVG para ChatBubbleOvalLeftEllipsisIcon (outline)
const ChatBubbleIconSVG = ({ className }: { className?: string }) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 10.5c0 .941-.062 1.854-.18 2.739a5.487 5.487 0 0 1-.762 1.64M18 10.5c0-.941.062-1.854.18-2.739a5.487 5.487 0 0 0 .762-1.64M18 10.5H6c-2.9 0-5.25 2.35-5.25 5.25v.75c0 1.214.296 2.359.826 3.368m11.548-10.376a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Zm-4.5 3.75h.008v.008h-.008v-.008Zm2.25 0h.008v.008h-.008v-.008Zm2.25 0h.008v.008h-.008v-.008Z" />
  </svg>
);

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
            {/* Textos (lado derecho) - Con iconos SVG */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[470px] space-y-9"> {/* Añadir space-y para espaciado uniforme */}
                {/* Punto 1: IA Aplicada */}
                <div className="flex items-start">
                  <div className="mr-5 flex-shrink-0 text-primary">
                    <CpuChipIconSVG className="h-8 w-8" />
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
                    <CogIconSVG className="h-8 w-8" />
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
                    <ChatBubbleIconSVG className="h-8 w-8" />
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
