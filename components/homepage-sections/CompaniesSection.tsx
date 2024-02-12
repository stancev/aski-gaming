import Link from 'next/link';
import Slider from '@/components/Slider';
import Image from 'next/image';
import { getHomepageCompanies } from '@/lib/getData';
import { Company } from '@/types/companies';
import CompanyCard from '@/components/CompanyCard';

const CompaniesSection = async () => {
  const { data: featuredCompanies } = await getHomepageCompanies('featured');
  const { data: mostReviews } = await getHomepageCompanies('mostReviews');
  mostReviews.sort((a: Company, b: Company) => b.totalRatings - a.totalRatings);
  const { data: newCompanies } = await getHomepageCompanies('new');
  return (
    <section>
      <Image
        src="/background-home.svg"
        quality={100}
        width={1920}
        height={600}
        alt="Background"
        className="absolute z-0 object-cover"
        draggable={false}
        style={{ width: '100%' }}
      />
      <div className="relative z-10 flex justify-center py-4 pl-4 pr-0 lg:py-4 2xl:pl-0">
        <div className="relative max-w-[1420px] overflow-hidden text-left">
          <div className="absolute inset-y-0 right-0 z-50 h-[294px] w-20 bg-gradient-to-l from-[#F0EDF5] to-transparent"></div>
          <h2 className="z-10 mb-2 text-base font-semibold text-heading md:text-2xl">Featured</h2>
          <Slider>
            {featuredCompanies.map((company: Company) => (
              <CompanyCard company={company} key={company.id} />
            ))}
          </Slider>
          <div className="mt-2">
            <Link href="/companies?featured=true" className="font-semibold text-primary">
              View all
            </Link>
          </div>
        </div>
      </div>
      <div className="relative z-10 flex justify-center py-4 pl-4 pr-0 lg:py-4 2xl:pl-0">
        <div className="relative max-w-[1420px] overflow-hidden text-left">
          <div className="absolute inset-y-0 right-0 z-50 h-[294px] w-20 bg-gradient-to-l from-[#F0EDF5] to-transparent"></div>
          <h2 className="z-10 mb-2 text-base font-semibold text-heading md:text-2xl">
            Most Reviews
          </h2>
          <Slider>
            {mostReviews.map((company: Company) => (
              <CompanyCard company={company} key={company.id} />
            ))}
          </Slider>
          <div className="mt-2">
            <Link href="/companies?featured=true" className="font-semibold text-primary">
              View all
            </Link>
          </div>
        </div>
      </div>
      <div className="relative z-10 flex justify-center py-4 pl-4 pr-0 lg:py-4 2xl:pl-0">
        <div className="relative max-w-[1420px] overflow-hidden text-left">
          <div className="absolute inset-y-0 right-0 z-50 h-[294px] w-20 bg-gradient-to-l from-[#F0EDF5] to-transparent"></div>
          <h2 className="mb-2 text-base font-semibold text-heading md:text-2xl">New</h2>
          <Slider>
            {newCompanies.map((company: Company) => (
              <CompanyCard company={company} key={company.id} />
            ))}
          </Slider>
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
