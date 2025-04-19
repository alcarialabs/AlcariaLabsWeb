import React from 'react';

const AboutTeamConcept = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-2 block text-base font-medium text-primary">
            Nuestro Equipo
          </span>
          <h2 className="mb-4 text-3xl font-bold text-space-blue sm:text-4xl">
            Impulsado por la Experiencia
          </h2>
          <p className="text-lg leading-relaxed text-body-color">
            Detrás de ALCARIA hay un equipo multidisciplinar con años de experiencia combinada en desarrollo de IA, 
            estrategia de negocio, automatización de procesos y marketing digital, 
            enfocado en traducir tecnología compleja en resultados simples y efectivos para las PYMEs.
          </p>
          {/* Opcional: Añadir algún icono genérico o un placeholder para fotos */}
        </div>
      </div>
    </section>
  );
};

export default AboutTeamConcept; 