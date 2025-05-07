import React from 'react';
import SectionTitle from '../Common/SectionTitle';

// Placeholder icons (replace with actual SVGs or icon components if available)
const ApproachIcon1 = () => ( // Diagnóstico Personalizado - MagnifyingGlassPlusIcon
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6" />
  </svg>
);
const ApproachIcon2 = () => ( // Soluciones a Medida - CubeTransparentIcon
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
  </svg>
);
const ApproachIcon3 = () => ( // Implementación Práctica - CheckBadgeIcon
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
  </svg>
);
const ApproachIcon4 = () => ( // Colaboración Continua - HandThumbUpIcon
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.25a2.25 2.25 0 01-2.25-2.25v-6.75a2.25 2.25 0 012.25-2.25H6.633z" />
  </svg>
);

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
              <h3 className="mb-3 text-2xl font-semibold font-syne text-space-blue">
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