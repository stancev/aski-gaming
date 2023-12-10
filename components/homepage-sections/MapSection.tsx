import { Button } from '@/components/ui/button';
import Link from 'next/link';

const MapSection = () => {
  return (
    <section
      className="my-10 flex h-full w-full items-center justify-center overflow-hidden bg-contain bg-center p-4 md:p-8"
      style={{
        backgroundImage: 'url(/background-map.webp)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden px-16 py-12 max-md:px-0">
        <div className="absolute inset-0 h-full w-full object-contain object-center" />
        <div className="relative mb-24 mt-36 flex w-full max-w-[984px] flex-col items-stretch max-md:my-10 max-md:max-w-full">
          <div className="text-center text-5xl font-semibold leading-[60px] text-violet-950 max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">
            Be Found Where It Matters. Your Industry Players Database.
          </div>
          <div className="flex w-full">
            <Link href="/companies" className="mx-auto mt-10 w-full sm:w-[187px]">
              <Button className="mx-auto w-full bg-[#80287B] text-white sm:w-[187px] lg:mx-0">
                View all reviews
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MapSection;
