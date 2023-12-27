import Image from 'next/image';
import Search from '@/components/filters/Search';
import SortBy from '@/components/filters/SortBy';

const FiltersContainer = () => {
  return (
    <section className="mb-10 flex h-16 w-full max-w-[1424px] flex-col items-center">
      <div className="flex w-full space-x-4">
        <div className="flex h-14 w-[355px] bg-white md:h-16">
          <div className="relative mx-3 flex items-center justify-center">
            <Image alt="blue circle" src="/elipse.svg" width={40} height={40} />
            <Image
              alt="chevron left"
              src="/left-chevron.svg"
              width={24}
              height={24}
              className="absolute"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3>Payment Providers</h3>
            <p>3,200 Companies</p>
          </div>
        </div>
        <Search />
        <SortBy size="lg" />
      </div>
    </section>
  );
};
export default FiltersContainer;
