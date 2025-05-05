import React from 'react';
import SectionTitle from '../Common/SectionTitle';

// Placeholder icons (replace with actual SVGs or icon components if available)
const ValueIcon1 = () => <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>; // Example: Lightning bolt
const ValueIcon2 = () => <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2" /></svg>; // Example: Chart bar
const ValueIcon3 = () => <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 2c-2.65 0-8 1.336-8 4v2h16v-2c0-2.664-5.35-4-8-4z" /></svg>; // Example: User group

const valuesData = [
  {
    icon: <ValueIcon1 />,
    title: 'Innovación Práctica',
    description: 'Aplicamos la tecnología más avanzada de forma realista y adaptada a las necesidades y presupuesto de cada PYME.',
  },
  {
    icon: <ValueIcon2 />,
    title: 'Resultados Tangibles',
    description: 'Nos enfocamos en soluciones que generan un impacto medible en eficiencia, ahorro de costes y experiencia del cliente.',
  },
  {
    icon: <ValueIcon3 />,
    title: 'Colaboración Cercana',
    description: 'Trabajamos como un socio estratégico, entendiendo a fondo tu negocio para ofrecer la mejor solución personalizada.',
  },
];

const AboutValues = () => {
  return (
    <section className="bg-alc-beige py-16 md:py-20 lg:py-28"> {/* Fondo Beige */}
      <div className="container">
        <SectionTitle
          title="Nuestra Filosofía de Trabajo"
          paragraph="Estos son los pilares que guían cada proyecto y colaboración en ALCARIA."
          center
          mb="60px"
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
          {valuesData.map((value, index) => (
            <div key={index} className="rounded-xl bg-white p-6 text-center shadow-lg">
              <div className="mx-auto mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary">
                {value.icon}
              </div>
              <h3 className="mb-3 text-2xl font-semibold font-syne text-space-blue">
                {value.title}
              </h3>
              <p className="text-base text-body-color">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues; 