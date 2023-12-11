import CompanyCard from '@/components/CompanyCard';
import { getData } from '@/lib/getData';

interface Props {
  searchParams: any;
}

const CompanyList: React.FC<Props> = async ({ searchParams }) => {
  const { data } = await getData(searchParams);
  return (
    <>
      {data.map((company: any) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </>
  );
};

export default CompanyList;
