import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionWallet = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Textos (lado izquierdo) */}
          <div className="w-full px-4 lg:w-1/2">
            <SectionTitle
              title="Tarjetas Wallet Digitales"
              paragraph="Transforma tarjetas físicas en versiones digitales para optimizar accesibilidad y seguridad en tu negocio."
              mb="44px"
            />

            <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
              <div className="mx-[-12px] flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <p className="mb-5 text-lg font-medium text-body-color">
                    <strong>✔ Digitalización Inteligente:</strong> 
                    Tarjetas listas para Apple Wallet y Google Wallet.
                  </p>
                  <p className="mb-5 text-lg font-medium text-body-color">
                    <strong>✔ Personalización y Seguridad:</strong> 
                    Identidad corporativa con autenticación avanzada.
                  </p>
                </div>
                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <p className="mb-5 text-lg font-medium text-body-color">
                    <strong>✔ Integración y Automatización:</strong> 
                    Sincronización con bases de datos y CRM.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Imagen (lado derecho) */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
              <Image
                src="/images/about/mockup_wallet_center.png"
                alt="Tarjetas Wallet ALCARIA"
                fill
                className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
              />
              <Image
                src="/images/about/mockup_wallet_center.png"
                alt="Tarjetas Wallet ALCARIA"
                fill
                className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionWallet;
