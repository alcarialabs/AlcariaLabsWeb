import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section id="features" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-frontier-gray pb-16 md:pb-20 lg:pb-28">
          <SectionTitle
            title="Cómo lo Hacemos Realidad"
            paragraph="Combinamos la conexión directa de las Tarjetas Wallet con la eficiencia radical de la IA y la Automatización para transformar tu negocio."
            center
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
