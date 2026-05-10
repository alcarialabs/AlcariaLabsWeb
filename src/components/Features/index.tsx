import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section id="features" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-frontier-gray/30 pb-16 md:pb-20 lg:pb-28">
          <SectionTitle
            title="Cómo lo Hacemos Realidad"
            paragraph="En ALCARIA, transformamos tu empresa con automatizaciones basadas en Inteligencia Artificial que generan resultados medibles desde el primer mes."
            center
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {featuresData.map((feature, index) => (
              <SingleFeature key={feature.id} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
