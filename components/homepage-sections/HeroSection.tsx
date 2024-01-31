import HomeSearch from '@/components/HomeSearch';
import Image from 'next/image';
import { getData } from '@/lib/getData';
import { SearchParams } from '@/types/companies';

const HeroSection = async ({ searchParams }: { searchParams: SearchParams }) => {
  const companies = await getData(searchParams);

  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <Image
        src="/background-hero.svg"
        fill
        quality={100}
        alt="Background"
        className="z-0 object-cover"
        draggable={false}
      />
      <div className="z-10 flex w-full flex-col xl:max-w-[1440px] xl:flex-row">
        <div className="flex flex-1 flex-col items-center justify-center px-4 pt-11 text-center lg:pt-14 xl:items-start xl:text-left">
          <h1 className="text-[24px] font-semibold leading-normal text-white md:text-[28px] md:leading-[57px] lg:text-[46px] xl:leading-[77.8px]">
            Browse, Connect, Review
          </h1>
          <p className="mb-3 mt-3 text-[14px] font-medium leading-normal text-white lg:text-[20px] xl:text-[24px] xl:leading-[30.1px]">
            Make an informed decision based on real opinions
          </p>

          <div className="mt-4 w-full xl:mt-6 xl:w-[636px]">
            <HomeSearch companies={companies.data} />
          </div>
        </div>

        <div className="flex-1 xl:flex xl:w-auto xl:items-center xl:justify-center">
          <picture className="flex h-full w-full justify-center">
            <source srcSet="/askigaming-hero-section-mob.webp" media="(max-width: 1279px)" />
            <Image
              src="/askigaming-hero-section.webp"
              alt="Hero Section"
              className="object-cover xl:h-full xl:w-auto"
              width={393}
              height={626}
              draggable={false}
            />
          </picture>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
