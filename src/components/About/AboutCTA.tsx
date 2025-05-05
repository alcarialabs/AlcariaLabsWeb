import React from 'react';
import Link from 'next/link';

const AboutCTA = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="relative z-10 overflow-hidden rounded-xl bg-primary/[.07] px-8 py-12 md:p-[70px]">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4 lg:w-1/2">
              <span className="mb-2 text-base font-medium text-primary">
                ¿Listo para el Siguiente Paso?
              </span>
              <h2 className="mb-6 text-3xl font-semibold font-syne leading-tight text-space-blue dark:text-white sm:text-4xl sm:leading-tight md:text-[40px]">
                Hablemos sobre cómo ALCARIA puede impulsar tu negocio.
              </h2>
              <p className="mb-9 text-base text-body-color">
                Agenda una consulta gratuita y sin compromiso para explorar soluciones personalizadas.
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="flex flex-wrap lg:justify-end">
                <Link
                  href="/contact"
                  className="my-1 mr-4 inline-block rounded-full bg-white px-6 py-4 text-base font-semibold font-syne text-primary transition hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Contactar Ahora
                </Link>
                {/* Optional secondary button */}
                {/* <Link href="/solutions" className="my-1 inline-block rounded-xl bg-primary/10 px-6 py-4 text-base font-medium text-primary transition hover:bg-primary/20 lg:px-8 xl:px-10"> Ver Soluciones </Link> */}
              </div>
            </div>
          </div>
           {/* Decorative elements (optional, similar to Pricing section maybe) */}
           {/* ... */}
        </div>
      </div>
    </section>
  );
};

export default AboutCTA; 