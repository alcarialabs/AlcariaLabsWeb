import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full text-center">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mx-auto mb-8 flex h-[60px] w-[60px] items-center justify-center rounded-lg bg-primary bg-opacity-10 text-primary md:mb-10 md:h-[70px] md:w-[70px] md:rounded-xl">
          {icon}
        </div>
        <h3 className="mb-4 text-lg font-bold text-space-blue dark:text-white sm:text-xl md:mb-5 lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="px-2 text-base font-medium leading-relaxed text-body-color sm:px-0">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
