import CompanyCard from '@/components/CompanyCard';

interface Props {
  companies: any;
}

const CompanyList: React.FC<Props> = async ({ companies }) => {
  return (
    <>
      {companies.map((company: any) => (
        <CompanyCard key={company.id} />
      ))}
    </>
  );
};

export default CompanyList;
