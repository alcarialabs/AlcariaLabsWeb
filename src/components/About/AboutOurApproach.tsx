import React from 'react';
import SectionTitle from '../Common/SectionTitle';

// Placeholder icons (replace with actual SVGs or icon components if available)
const ApproachIcon1 = () => <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 12a4.5 4.5 0 00-4.5 4.5v1.5h18v-1.5a4.5 4.5 0 00-4.5-4.5" /></svg>; // Example: User focus
const ApproachIcon2 = () => <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17.25l4.5-4.5m0 0l-4.5-4.5M14.25 12H3.75" /></svg>; // Example: Arrow right / Process
const ApproachIcon3 = () => <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.471-2.471a2.652 2.652 0 000-3.75l-2.471-2.471M11.42 15.17l-2.471 2.471a2.652 2.652 0 01-3.75 0L2.75 15.17M6.83 11.42L12.58 5.67" /></svg>; // Example: Puzzle piece / Tailored solution
const ApproachIcon4 = () => <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>; // Example: Zap / Results

const approachData = [
  {
    icon: <ApproachIcon1 />,
    title: 'Diagnóstico Personalizado',
    description: 'Empezamos por escuchar. Entendemos tus retos y objetivos específicos antes de proponer cualquier solución.',
  },
  {
    icon: <ApproachIcon2 />,
    title: 'Soluciones a Medida',
    description: 'No creemos en paquetes únicos. Diseñamos e implementamos la combinación perfecta de IA y Wallet para tu caso.',
  },
  {
    icon: <ApproachIcon3 />,
    title: 'Implementación Práctica',
    description: 'Nos enfocamos en una integración fluida y en obtener resultados tangibles rápidamente, sin complicaciones innecesarias.',
  },
   {
    icon: <ApproachIcon4 />,
    title: 'Colaboración Continua',
    description: 'Somos tu socio a largo plazo, ofreciendo soporte y evolucionando las soluciones a medida que tu negocio crece.',
  },
];

const AboutOurApproach = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Cómo Trabajamos Contigo"
          paragraph="Nuestro enfoque se centra en entenderte y ofrecerte tecnología que realmente funcione para tu PYME."
          center
          mb="60px"
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {approachData.map((item, index) => (
            <div key={index} className="text-center">
               <div className="mx-auto mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary">
                {item.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-space-blue">
                {item.title}
              </h3>
              <p className="text-base text-body-color">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutOurApproach; 