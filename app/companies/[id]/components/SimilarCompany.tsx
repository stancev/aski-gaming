import Image from 'next/image';
import Stars from '@/components/ui/stars';
import { Company } from '@/types/companies';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';

const SimilarCompany = ({ company }: { company: Company }) => {
  const reviewText = company.totalRatings === 1 ? 'Review' : 'Reviews';
  return (
    <Link href={`/companies/${company.id}`} passHref>
      <div className="mb-4 flex rounded-xl bg-white p-4 hover:bg-gray-50">
        <div className="flex flex-row border-gray-300">
          <Image
            className="mr-3 rounded-sm"
            alt={`${company.name} logo`}
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${company.logo.url}`}
            width={92}
            height={92}
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="ms-2 flex w-full flex-col justify-between">
          <div>
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold text-heading">{company.name}</h3>
              {company.claimed == true ? (
                <div className="relative h-4 w-4 lg:h-6 lg:w-6">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Image
                          className="rounded-sm object-cover"
                          alt="claimed company icon"
                          src="/claimed.svg"
                          fill={true}
                        />
                      </TooltipTrigger>
                      <TooltipContent side="left">
                        <p>Claimed Company</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              ) : (
                <div className="relative h-4 w-4 lg:h-6 lg:w-6">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Image
                          className="rounded-sm object-cover"
                          alt="unclaimed company icon"
                          src="/unclaimed.svg"
                          fill={true}
                        />
                      </TooltipTrigger>
                      <TooltipContent side="left">
                        <p>Unclaimed Company</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              )}
            </div>
            <p className="text-sm">
              {company.city},{company.country}
            </p>
          </div>
          <div className="flex justify-between">
            <Stars rating={company.averageRating} />
            <p className="text-xs">
              {company.averageRating} / {company.totalRatings} {reviewText}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default SimilarCompany;
