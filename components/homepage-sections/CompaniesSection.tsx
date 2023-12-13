import Link from 'next/link';
import Slider from '@/components/Slider';

const CompaniesSection = () => {
  return (
    <section>
      <div className="flex justify-center p-4 md:p-8">
        <div className="max-w-1420 mx-auto overflow-hidden text-left">
          <h2 className="mb-2 text-base font-semibold text-heading md:text-2xl">Featured</h2>
          <Slider />
          <div className="mt-2">
            <Link
              href={{
                pathname: '/companies'
              }}
              className="font-semibold text-primary"
            >
              View all
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-4 md:p-8 ">
        <div className="max-w-1420 mx-auto overflow-hidden text-left">
          <h2 className="mb-2 text-base font-semibold text-heading md:text-2xl">Most Reviews</h2>
          <Slider />
          <div className="mt-2">
            <Link
              href={{
                pathname: '/companies'
              }}
              className="font-semibold text-primary"
            >
              View all
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-4 md:p-8">
        <div className="max-w-1420 mx-auto overflow-hidden text-left">
          <h2 className="mb-2 text-base font-semibold text-heading md:text-2xl">New</h2>
          <Slider />
          <div className="mt-2">
            <Link
              href={{
                pathname: '/companies'
              }}
              className="font-semibold text-primary"
            >
              View all
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CompaniesSection;
