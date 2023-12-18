import Image from 'next/image';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import Stars from '@/components/ui/stars';

const CompanyCard = () => {
  return (
    <Card className="h-178 min-w-[304px] p-3 sm:p-4 lg:rounded-md 2xl:min-h-[253px] 2xl:min-w-[464px]">
      <div className="flex flex-row border-b border-gray-300 pb-4">
        <Image
          className="mr-3 rounded-sm"
          alt="netent logo"
          src="/netent.png"
          width={92}
          height={92}
        />
        <div className="mt-0 flex flex-grow flex-col justify-between space-y-0 pt-0">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <CardTitle className="text-sm text-heading lg:text-[20px]">NetEnt</CardTitle>
              <CardDescription className="text-xs lg:text-sm">
                San Clemente, United States
              </CardDescription>
            </div>
            <div className="relative h-4 w-4 lg:h-6 lg:w-6">
              <Image
                className="rounded-sm object-cover"
                alt="claimed company icon"
                src="/claimed.svg"
                fill={true}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Stars />
            <p className="text-xs">4.0 / 32 reviews</p>
          </div>
        </div>
      </div>
      <div className="flex" style={{ height: '109px' }}>
        <div className="flex flex-grow flex-col justify-between pt-4">
          <div>
            <p className="line-clamp-2 text-sm">
              With more than 24 years of cash service experience and the most advanced and it goes
              like this so text and fara a tufar...
            </p>
          </div>
          <div className="flex flex-grow items-end space-x-2">
            <div className="flex h-8 items-center rounded-3xl bg-blue-100 px-5 text-xs font-semibold text-primary">
              <p>Supplier</p>
            </div>
            <div className="flex h-8 items-center rounded-3xl bg-blue-100 px-5 text-xs font-semibold text-primary">
              <p>Michael Daly</p>
            </div>
            <div className="flex h-8 items-center rounded-3xl bg-blue-100 px-5 text-xs font-semibold text-primary">
              <p>Test</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CompanyCard;
