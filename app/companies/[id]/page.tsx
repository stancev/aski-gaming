import { getAllCompaniesIds, getCompanyData } from '@/lib/getData';
import Breadcrumbs from './components/Breadcrumbs';
import CompanyInfo from './components/CompanyInfo';
import Certificates from './components/Certificates';

interface Props {
  params: {
    id: string;
  };
  resolvedUrl: string;
}

interface Company {
  id: string;
}

export async function generateStaticParams() {
  const companies = await getAllCompaniesIds();

  return companies.map((company: Company) => ({
    id: company.id.toString()
  }));
}

const CompanyPage: React.FC<Props> = async ({ params, resolvedUrl }) => {
  const company = await getCompanyData(params.id);
  console.log(resolvedUrl);
  return (
    <main className="grid gap-4 p-10 md:grid-cols-5 2xl:p-16">
      <div className="md:col-span-4">
        <Breadcrumbs name={company.name} />
        <article className="mt-2 w-full rounded-md bg-white p-12">
          <CompanyInfo company={company} />
          <Certificates name="Certificates" certificates={company.certificates} />
          <Certificates name="Licences" certificates={company.licences} />
          <Certificates name="Awards" certificates={company.awards} />
        </article>
      </div>
      <div className="md:col-span-1">
        <h2 className="">Similar Companies</h2>
        <div className="h-screen w-full bg-white">Hello</div>
      </div>
    </main>
  );
};
export default CompanyPage;
