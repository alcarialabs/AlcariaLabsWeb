import React from 'react';
import Image from 'next/image';

const AboutIntroStory = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Imagen Introductoria (Opcional, pero ayuda a personalizar) */}
          <div className="w-full px-4 lg:w-5/12">
            <div className="relative mx-auto mb-12 aspect-[1/1] max-w-[400px] text-center lg:m-0 overflow-hidden rounded-3xl">
              {/* Placeholder: Imagen conceptual del equipo o del 'por qué' de Alcaria */}
              <Image 
                src="/images/about/alcariaBlue.png" // Cambiar a una imagen relevante
                alt="Equipo Alcaria Concepto"
                fill 
                className="object-cover"
              />
            </div>
          </div>
          {/* Texto Introductorio */}
          <div className="w-full px-4 lg:w-7/12">
            <div className="lg:pl-8">
              <span className="mb-2 block text-base font-medium text-primary">
                Quiénes Somos
              </span>
              <h2 className="mb-5 text-3xl font-bold leading-tight text-space-blue sm:text-4xl sm:leading-tight">
                Nacimos de la convicción de que cada PYME merece tecnología de vanguardia.
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-body-color">
                Observamos una brecha: herramientas poderosas como la IA, la automatización y las soluciones digitales avanzadas parecían reservadas solo para los gigantes. 
                <strong>Decidimos cambiar eso.</strong>
              </p>
              <p className="text-lg leading-relaxed text-body-color">
                ALCARIA fue fundada por tres apasionados de la tecnología y el emprendimiento con una misión clara: 
                <strong>democratizar la innovación</strong> y hacerla accesible, práctica y rentable para empresas como la tuya. Somos tu socio en la transformación digital inteligente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntroStory; 