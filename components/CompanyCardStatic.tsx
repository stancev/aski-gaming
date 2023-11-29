import Image from 'next/image';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import Stars from '@/components/ui/stars';

const CompanyCard = () => {
  return (
    <Card className="w-304 h-178 2xl:w-464 2xl:h-253 lg:rounded-20 p-3 sm:p-4">
      <div className="flex flex-row border-b border-gray-300 pb-4">
        <Image
          className="rounded-lg mr-3"
          alt="netent logo"
          src="/netent.png"
          width={92}
          height={92}
        />
        <div className="flex flex-col justify-between space-y-0 mt-0 pt-0 flex-grow">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <CardTitle className="text-sm lg:text-[20px]">NetEnt</CardTitle>
              <CardDescription className="text-xs lg:text-sm">
                San Clemente, United States
              </CardDescription>
            </div>
            <div className="relative w-4 h-4 lg:w-6 lg:h-6">
              <Image
                className="rounded-lg object-cover"
                alt="claimed company icon"
                src="/claimed.svg"
                fill={true}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Stars />
            <p className="text-xs">4.0 / 32 reviews</p>
          </div>
        </div>
      </div>
      <div className="flex" style={{ height: '109px' }}>
        <div className="pt-4 flex flex-col justify-between flex-grow">
          <div>
            <p className="text-sm line-clamp-2">
              With more than 24 years of cash service experience and the most advanced and it goes
              like this so text and fara a tufar...
            </p>
          </div>
          <div className="flex flex-grow items-end space-x-2">
            <div className="flex items-center rounded-3xl text-primary bg-blue-100 h-8 px-5 text-xs font-semibold">
              <p>Supplier</p>
            </div>
            <div className="flex items-center rounded-3xl text-primary bg-blue-100 h-8 px-5 text-xs font-semibold">
              <p>Michael Daly</p>
            </div>
            <div className="flex items-center rounded-3xl text-primary bg-blue-100 h-8 px-5 text-xs font-semibold">
              <p>Test</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CompanyCard;
