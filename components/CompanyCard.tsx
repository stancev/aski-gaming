import Image from 'next/image';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import Stars from '@/components/ui/stars';
import { cn } from '@/lib/utils';
import { Company } from '@/types/companies';

const CompanyCard = ({ company }: { company: Company }) => {
  const categoriesNumber = company.categories.length;
  return (
    <Card className="w-304 h-178 2xl:w-464 2xl:h-253 lg:rounded-md p-3 sm:p-4">
      <div className="flex flex-row border-b border-gray-300 pb-4">
        <Image
          className="rounded-sm mr-3"
          alt="netent logo"
          src={`${process.env.STRAPI_URL}${company.logo.url}`}
          width={92}
          height={92}
        />
        <div className="flex flex-col justify-between space-y-0 mt-0 pt-0 flex-grow">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <CardTitle className="text-heading text-sm lg:text-[20px]">{company.name}</CardTitle>
              <CardDescription className="text-xs lg:text-sm">
                {`${company.city}, ${company.country}`}
              </CardDescription>
            </div>
            {company.claimed && (
              <div className="relative w-4 h-4 lg:w-6 lg:h-6">
                <Image
                  className="rounded-sm object-cover"
                  alt="claimed company icon"
                  src="/claimed.svg"
                  fill={true}
                />
              </div>
            )}
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
            <p className="text-sm line-clamp-2">{company.description}</p>
          </div>
          <div className="flex space-x-2">
            <div className="flex flex-grow items-end space-x-2">
              {company?.categories.slice(0, 2).map((category: any) => (
                <div
                  key={category.id}
                  className="flex items-center rounded-3xl text-primary bg-blue-100 max-w-[160px] h-8 px-2 2xl:px-5 text-xs font-semibold line-clamp-1"
                >
                  <p
                    title={category.name}
                    className="overflow-hidden overflow-ellipsis whitespace-nowrap"
                  >
                    {category.name}
                  </p>
                </div>
              ))}
            </div>
            <div
              className={cn(
                'flex items-center rounded-3xl text-primary bg-blue-100 h-8 px-5 text-xs font-semibold',
                categoriesNumber < 3 && 'opacity-0'
              )}
            >
              <p className="">+{categoriesNumber - 2}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CompanyCard;
