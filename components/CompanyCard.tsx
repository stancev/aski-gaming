import Image from 'next/image';
import Link from 'next/link';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import Stars from '@/components/ui/stars';
import { cn } from '@/lib/utils';
import { Company } from '@/types/companies';

const CompanyCard = ({ company }: { company: Company }) => {
  const categoriesNumber = company.categories.length;

  return (
    <Link href={`/companies/${company.id}`} passHref>
      <Card className="w-304 h-178 p-3 sm:p-4 lg:rounded-md 2xl:h-253 2xl:w-464">
        <div className="flex min-h-[109px] flex-row border-b border-gray-300 pb-4">
          <Image
            className="mr-3 rounded-sm"
            alt={`${company.name} logo`}
            src={`${process.env.STRAPI_URL}${company.logo.url}`}
            width={92}
            height={92}
            style={{ objectFit: 'contain' }}
          />
          <div className="mt-0 flex flex-grow flex-col justify-between space-y-0 pt-0">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <CardTitle className="text-sm text-heading lg:text-[20px]">
                  {company.name}
                </CardTitle>
                <CardDescription className="text-xs lg:text-sm">
                  {`${company.city}, ${company.country}`}
                </CardDescription>
              </div>
              {company.claimed && (
                <div className="relative h-4 w-4 lg:h-6 lg:w-6">
                  <Image
                    className="rounded-sm object-cover"
                    alt="claimed company icon"
                    src="/claimed.svg"
                    fill={true}
                  />
                </div>
              )}
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
              <p className="line-clamp-2 text-sm">{company.description}</p>
            </div>
            <div className="flex space-x-2">
              <div className="flex flex-grow items-end space-x-2">
                {company?.categories.slice(0, 2).map((category: any) => (
                  <div
                    key={category.id}
                    className="line-clamp-1 flex h-8 max-w-[160px] items-center rounded-3xl bg-blue-100 px-2 text-xs font-semibold text-primary 2xl:px-5"
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
                  'flex h-8 items-center rounded-3xl bg-blue-100 px-5 text-xs font-semibold text-primary',
                  categoriesNumber < 3 && 'opacity-0'
                )}
              >
                <p className="">+{categoriesNumber - 2}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CompanyCard;
