import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

// --- Iconos SVG para puntos clave (Nuevos) --- 
const DevicePhoneMobileIcon = () => ( // Icono para Digitalización - CAMBIADO A Cog6ToothIcon
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-primary">
    {/* Cog6ToothIcon */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.438.99l0 0c0 .377.145.75.438.99l1.003.827c.447.368.574.984.26 1.431l-1.296 2.247a1.125 1.125 0 01-1.37.49l-1.217-.456c-.355-.133-.75-.072-1.075.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.063-.374-.313-.686-.645-.87a6.52 6.52 0 01-.22-.127c-.324-.196-.72-.257-1.075-.124l-1.217.456a1.125 1.125 0 01-1.37-.49l-1.296-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.437-.99l0 0c0-.377-.145-.75-.437-.99l-1.004-.827a1.125 1.125 0 01-.26-1.431l1.296-2.247a1.125 1.125 0 011.37-.49l1.217.456c.355.133.75.072 1.075-.124a6.57 6.57 0 01.22-.128c.332-.183.582-.495.644-.869l.213-1.28Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0Z" />
 </svg>
);

const BellAlertIcon = () => ( // Icono para Engagement
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-primary">
   <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
 </svg>
);

const LinkIcon = () => ( // Icono para Integración (se mantiene)
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-primary">
   <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
 </svg>
);
// ----------------------------------

const AboutSectionWallet = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            

            {/* Textos y Beneficios (lado izquierdp) */}
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Tarjetas Wallet: Conexión Directa, Experiencia Moderna"
                paragraph="Transforma la interacción con tus clientes. Con las Tarjetas Wallet de ALCARIA para Apple y Google Wallet, creas un canal de comunicación potente y fidelizas de forma eficaz."
                mb="44px"
              />

              <div className="mb-12 lg:mb-0 space-y-8" data-wow-delay=".15s">
                {/* Beneficio 1: Digitalización */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 pt-1"><DevicePhoneMobileIcon /></div>
                  <div>
                    <h3 className="mb-2 text-2xl font-semibold text-space-blue dark:text-white font-syne">Digitalización Inteligente</h3>
                    <p className="text-base text-body-color dark:text-body-color-dark">
                      Ofrece tarjetas siempre actualizadas, accesibles y sostenibles. Moderniza tu imagen y facilita la vida a tus clientes.
                    </p>
                  </div>
                </div>

                {/* Beneficio 2: Engagement */}
                <div className="flex items-start space-x-4">
                   <div className="flex-shrink-0 pt-1"><BellAlertIcon /></div>
                   <div>
                    <h3 className="mb-2 text-2xl font-semibold text-space-blue dark:text-white font-syne">Engagement Potenciado</h3>
                    <p className="text-base text-body-color dark:text-body-color-dark">
                      Envía notificaciones push relevantes, ofertas personalizadas y fortalece la lealtad de forma medible.
                    </p>
                  </div>
                </div>

                {/* Beneficio 3: Integración */}
                <div className="flex items-start space-x-4">
                   <div className="flex-shrink-0 pt-1"><LinkIcon /></div>
                   <div>
                     <h3 className="mb-2 text-2xl font-semibold text-space-blue dark:text-white font-syne">Integración Sencilla</h3>
                     <p className="text-base text-body-color dark:text-body-color-dark">
                       Conecta fácilmente con tus sistemas actuales (CRM, BBDD, etc.) para automatizar y gestionar todo de forma fluida.
                     </p>
                   </div>
                </div>

                {/* Botón CTA */}
                <Link href="/wallet"
                  className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-base font-semibold text-white shadow-md transition duration-300 hover:bg-primary/90 font-syne">
                  Descubre el Poder de Wallet
                </Link>
              </div>
            </div>
            {/* Imagen (lado derecho) */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mb-12 aspect-[25/24] max-w-[500px] lg:mb-0 lg:ml-auto overflow-hidden rounded-3xl">
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
