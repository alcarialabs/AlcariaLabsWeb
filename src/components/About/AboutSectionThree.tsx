import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

const AboutSectionWallet = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-frontier-gray pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Textos (lado izquierdo) */}
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Tarjetas Wallet: El Futuro de la Interacción con el Cliente"
                paragraph="Moderniza tu negocio, mejora la experiencia y abre un canal de comunicación directo y efectivo con tus clientes usando Apple y Google Wallet."
                mb="44px"
              />

              <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3">
                    <p className="mb-5 text-lg font-medium text-body-color">
                      <strong className="text-space-blue">✔ Digitalización Inteligente y Sostenible:</strong>
                      Tarjetas siempre actualizadas, accesibles y eco-friendly.
                    </p>
                    <p className="mb-5 text-lg font-medium text-body-color">
                      <strong className="text-space-blue">✔ Engagement Potenciado:</strong>
                      Notificaciones push, ofertas personalizadas y fidelización efectiva.
                    </p>
                     <p className="mb-5 text-lg font-medium text-body-color">
                      <strong className="text-space-blue">✔ Integración y Automatización Fácil:</strong>
                      Conecta con tus sistemas (CRM, BBDD) para una gestión fluida.
                    </p>
                  </div>
                </div>
                <Link href="/wallet"
                    className="mt-8 inline-block rounded-xl bg-primary bg-opacity-10 px-6 py-3 text-base font-medium text-primary hover:bg-opacity-20">
                    Descubre Más sobre Wallet
                </Link>
              </div>
            </div>

            {/* Imagen (lado derecho) */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0 overflow-hidden rounded-3xl">
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
      </div>
    </section>
  );
};

export default AboutSectionWallet;
