import Image from 'next/image';
import Stars from '@/components/ui/stars';
import { Separator } from '@/components/ui/separator';
import { Company } from '@/types/companies';

interface Props {
  company: Company;
}

const CompanyInfo: React.FC<Props> = ({ company }) => {
  return (
    <>
      <section className="flex">
        <Image
          className="mr-5 rounded-md"
          alt={`${company.name} logo`}
          src={`${process.env.STRAPI_URL}${company.logo.url}`}
          width={160}
          height={160}
        />
        <div className="mt-0 flex flex-grow flex-col justify-between space-y-0 pt-0">
          <div className="">
            <h1 className="my-0 py-0 text-[32px] font-semibold text-heading">{company.name}</h1>
            <p className="mb-2 mt-0 text-sm">
              {company.country}, {company.city}
            </p>
            <p className="text-xs">4.0 / 32 reviews</p>
            <Stars />
          </div>
          <div className="flex space-x-1 text-primary">
            <p>Claim</p>
            <p>Review</p>
          </div>
        </div>
        <div className="flex flex-col justify-between text-sm">
          <p>{company.website}</p>
          <p>{company.countries} countries</p>
          <p>{company.employees} Employees</p>
          <p>EST {company.established}</p>
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
