import { getAllCompaniesIds, getCompanyData } from '@/lib/getData';
import Breadcrumbs from './components/Breadcrumbs';
import CompanyInfo from './components/CompanyInfo';
import Categories from './components/Categories';
import Achievements from './components/Achievements';
import Scroller from '@/components/Scroller';
import SimilarCompany from './components/SimilarCompany';

interface Props {
  params: {
    id: string;
  };
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

const CompanyPage: React.FC<Props> = async ({ params }) => {
  const company = await getCompanyData(params.id);

  return (
    <main className="mx-auto grid max-w-[1424px] grid-cols-1 gap-4 p-2 xl:grid-cols-8 xl:px-2 xl:py-16 2xl:px-0">
      <div className="xl:col-span-6">
        <Breadcrumbs name={company.name} />
        <article className="mt-2 w-full rounded-md bg-white p-4 xl:p-12">
          <CompanyInfo company={company} />

          <Scroller name="Categories">
            <Categories data={company.categories} />
          </Scroller>

          <Scroller name="Certificates">
            <Achievements data={company.certificates} />
          </Scroller>

          <Scroller name="Licences">
            <Achievements data={company.licences} />
          </Scroller>

          <Scroller name="Awards">
            <Achievements data={company.awards} />
          </Scroller>
        </article>
      </div>
      <div className="xl:col-span-2">
        <h2 className="mb-2">Similar Companies</h2>
        {Array.from({ length: 9 }).map((_, index) => (
          <SimilarCompany key={index} />
        ))}
      </div>
    </main>
  );
};
export default CompanyPage;
