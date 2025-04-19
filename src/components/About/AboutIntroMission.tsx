import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const AboutIntroMission = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* Placeholder for intro content */}
        <SectionTitle 
          title="Nuestra Misión: Potenciar a las PYMEs con Tecnología Accesible"
          paragraph="Creemos que la Inteligencia Artificial y las herramientas digitales avanzadas no deben ser exclusivas de las grandes corporaciones. ALCARIA nace para cerrar esa brecha."
          center
          mb='44px'
        />
        {/* Add more content here: vision, origin story, etc. */}
        <div className="prose prose-lg mx-auto max-w-3xl text-center text-body-color">
          <p>
            Facilitamos la adopción de soluciones como las Tarjetas Wallet y la automatización inteligente, 
            permitiendo a negocios como el tuyo competir eficazmente, mejorar la relación con sus clientes 
            y optimizar sus operaciones diarias de forma práctica y rentable.
          </p>
          {/* Example of more content: */}
          {/* <p>Nuestra visión es ser el socio tecnológico de referencia para las PYMEs que buscan innovar y crecer en la era digital.</p> */}
        </div>
      </div>
    </section>
  );
};

export default AboutIntroMission; 