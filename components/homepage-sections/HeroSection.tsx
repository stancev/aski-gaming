import HomeSearch from '@/components/HomeSearch';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="w-full h-full flex justify-center items-center overflow-hidden relative">
      <Image
        src="/background-hero.svg"
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Background"
        className=" z-0"
      />
      <div className="w-full xl:max-w-[1440px] flex flex-col xl:flex-row z-10">
        <div className="flex flex-1 flex-col justify-center items-center xl:items-start text-center xl:text-left px-4 pt-11 lg:pt-14">
          <h1 className="font-semibold text-white text-[24px] md:text-[28px] lg:text-[46px] leading-normal md:leading-[57px] xl:leading-[77.8px]">
            Browse, Connect, Review
          </h1>
          <p className="font-medium text-white text-[14px] lg:text-[20px] xl:text-[24px] leading-normal xl:leading-[30.1px] mt-3 mb-3">
            Make an informed decision based on real opinions
          </p>

          <div className="mt-4 xl:mt-6 w-full xl:w-[636px]">
            <HomeSearch searchActive={true} />
          </div>
        </div>

        <div className="flex-1 xl:w-auto xl:flex xl:items-center xl:justify-center">
          <picture className="w-full flex justify-center h-full">
            <source srcSet="/askigaming-hero-section-mob.webp" media="(max-width: 1279px)" />
            <Image
              src="/askigaming-hero-section.webp"
              alt="Hero Section"
              className="xl:w-auto xl:h-full"
              objectFit="cover"
              width={393}
              height={626}
            />
          </picture>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
