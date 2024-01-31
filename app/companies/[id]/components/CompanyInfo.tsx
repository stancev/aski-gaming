import Image from 'next/image';
import Stars from '@/components/ui/stars';
import { Separator } from '@/components/ui/separator';
import { Company } from '@/types/companies';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface Props {
  company: Company;
}

const CompanyInfo: React.FC<Props> = ({ company }) => {
  return (
    <>
      <section className="flex">
        <div className="relative h-[92px] w-[92px] sm:h-[160px] sm:w-[160px]">
          <Image
            fill={true}
            className="mr-5 rounded-md"
            alt={`${company.name} logo`}
            src={`${process.env.STRAPI_URL}${company.logo.url}`}
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="ms-4 mt-0 flex flex-grow flex-col justify-between space-y-0 pt-0">
          <div className="mb-4 sm:mb-0">
            <div className="flex justify-between sm:justify-normal">
              <div className="flex">
                <h1 className="my-0 me-3 py-0 text-[32px] font-semibold text-heading">
                  {company.name}
                </h1>
                <Popover>
                  <PopoverTrigger className="sm:hidden">
                    <Image
                      className=""
                      alt="3 dots menu icon"
                      src="/icons/dots-ico.svg"
                      width={25}
                      height={25}
                    />
                  </PopoverTrigger>
                  <PopoverContent className="rounded-sm">
                    <div className="flex flex-col justify-between space-y-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Image
                          alt="globe icon"
                          src="/company-info/world-down.svg"
                          width={24}
                          height={24}
                        />
                        <p>{company.website}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Image alt="pin icon" src="/company-info/pin.svg" width={24} height={24} />
                        <p>{company.countries} countries</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Image
                          alt="people icon"
                          src="/company-info/people.svg"
                          width={24}
                          height={24}
                        />
                        <p>{company.employees} Employees</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Image
                          alt="suitcase icon"
                          src="/company-info/suitcase.svg"
                          width={24}
                          height={24}
                        />
                        <p>EST {company.established}</p>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              {company.claimed == true ? (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Image alt="claimed company icon" src="/claimed.svg" width={24} height={24} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        This company has been claimed. AskiGaming team verified the user running
                        this company&apos;s profile.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Image
                        alt="unclaimed company icon"
                        src="/unclaimed.svg"
                        width={24}
                        height={24}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This company has not been claimed yet.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
            <p className="mb-2 mt-0 text-sm">
              {company.country}, {company.city}
            </p>
            <p className="mb-1 text-xs">4.0 / 32 reviews</p>
            <Stars />
          </div>
          <div className="flex space-x-5 text-primary">
            <div className="flex items-center">
              <Image alt="unlock icon" src="/unlock.svg" height={20} width={20} />
              <p className="my-0 ms-2">Claim</p>
            </div>
            <div className="flex items-center">
              <Image alt="message-circle icon" src="/message-circle.svg" height={20} width={20} />
              <p className="my-0 ms-2">Review</p>
            </div>
          </div>
        </div>
        <div className="hidden flex-col justify-between text-sm sm:flex">
          <div className="flex items-center justify-end space-x-2">
            <p>{company.website}</p>
            <Image alt="globe icon" src="/company-info/world-down.svg" width={24} height={24} />
          </div>
          <div className="flex items-center justify-end space-x-2">
            <p>{company.countries} countries</p>
            <Image alt="pin icon" src="/company-info/pin.svg" width={24} height={24} />
          </div>
          <div className="flex items-center justify-end space-x-2">
            <p>{company.employees} Employees</p>
            <Image alt="people icon" src="/company-info/people.svg" width={24} height={24} />
          </div>
          <div className="flex items-center justify-end space-x-2">
            <p>EST {company.established}</p>
            <Image alt="suitcase icon" src="/company-info/suitcase.svg" width={24} height={24} />
          </div>
        </div>
      </section>
      <Separator className="my-8" />
      <section>
        <h2 className="mb-3 text-2xl font-semibold text-heading">Company description</h2>
        <p>{company.description}</p>
      </section>
    </>
  );
};
export default CompanyInfo;
