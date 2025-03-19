import Image from "next/image";

const AboutSectionWallet = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Imagen (lado izquierdo) */}
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/apple_wallet_square.png"
                alt="Tarjetas Wallet ALCARIA"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/apple_wallet_square.png"
                alt="Tarjetas Wallet ALCARIA"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          {/* Textos (lado derecho) */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Digitalización Inteligente
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Convierte tarjetas físicas en versiones digitales listas para
                  Apple Wallet y Google Wallet. Asegura acceso rápido, reducción
                  de costos y mayor comodidad para tus clientes y empleados.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Personalización y Seguridad
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Diseñamos tarjetas digitales con identidad corporativa y
                  protocolos de seguridad avanzados, asegurando autenticidad y
                  un acceso exclusivo.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Integración y Automatización
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Vincula tus tarjetas Wallet con bases de datos y CRM para
                  actualizar automáticamente accesos, membresías y beneficios
                  sin necesidad de procesos manuales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionWallet;
