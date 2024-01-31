import Link from 'next/link';
import Slider from '@/components/Slider';
import Image from 'next/image';
import { getHomepageCompanies } from '@/lib/getData';

const CompaniesSection = async () => {
  const { data: featuredCompanies } = await getHomepageCompanies('featured');
  const { data: newCompanies } = await getHomepageCompanies('new');
  return (
    <section>
      <Image
        src="/background-companies.svg"
        quality={100}
        width={1920}
        height={600}
        alt="Background"
        className="absolute z-0 object-cover"
        draggable={false}
        style={{ width: '100%' }}
      />
      <div className="relative z-10 flex justify-end py-4 pl-4 pr-0 lg:py-8 2xl:pl-0">
        <div className=" overflow-hidden text-left 2xl:ml-auto 2xl:w-5/6 2xl:min-w-[1658px]">
          <h2 className="z-10 mb-2 text-base font-semibold text-heading md:text-2xl">Featured</h2>
          <Slider companies={featuredCompanies} />
          <div className="mt-2">
            <Link href="/companies?featured=true" className="font-semibold text-primary">
              View all
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="relative z-10 flex justify-center py-4 pl-4 pr-0 lg:py-8 lg:pr-8">
        <div className="mx-auto overflow-hidden text-left">
          <h2 className="mb-2 text-base font-semibold text-heading md:text-2xl">Most Reviews</h2>
          <Slider />
          <div className="mt-2">
            <Link href="/companies?sort=most-reviews" className="font-semibold text-primary">
              View all
            </Link>
          </div>
        </div>
      </div> */}
      <div className="relative z-10 flex justify-end py-4 pl-4 pr-0 lg:py-8 2xl:pl-0">
        <div className=" overflow-hidden text-left 2xl:ml-auto 2xl:w-5/6 2xl:min-w-[1580px]">
          <h2 className="mb-2 text-base font-semibold text-heading md:text-2xl">New</h2>
          <Slider companies={newCompanies} />
          <div className="mt-2">
            <Link href="/companies?sort=newest" className="font-semibold text-primary">
              View all
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CompaniesSection;
