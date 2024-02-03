import {
  getAllCompaniesIds,
  getCompanyData,
  getSingleCompanyReviewData,
  getSimilarCompaniesData
} from '@/lib/getData';
import Breadcrumbs from './components/Breadcrumbs';
import CompanyInfo from './components/CompanyInfo';
import Categories from './components/Categories';
import Achievements from './components/Achievements';
import Scroller from '@/components/Scroller';
import SimilarCompanyList from './components/SimilarCompanyList';
import ReviewList from './components/ReviewList';
import Pagination from '@/components/Pagination';
import { SearchParams } from '@/types/companies';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface Props {
  params: {
    id: string;
  };
  searchParams: SearchParams;
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

const CompanyPage: React.FC<Props> = async ({ params, searchParams }) => {
  const company = await getCompanyData(params.id);
  const { data: reviewData, pagination } = await getSingleCompanyReviewData(
    params.id,
    searchParams
  );
  const { data: similarCompanies } = await getSimilarCompaniesData(
    company.categories[0].id,
    company.id
  );
  return (
    <main>
      <Image
        src="/background-companies.svg"
        quality={100}
        width={1920}
        height={600}
        alt="Background"
        className="absolute z-0 object-cover"
        draggable={false}
        style={{ width: '100%' }}
      />
      <div className="relative z-10 mx-auto grid max-w-[1424px] grid-cols-1 gap-4 p-2 xl:grid-cols-8 xl:px-2 xl:py-16 2xl:px-0">
        <div className="xl:col-span-6">
          <Breadcrumbs name={company.name} />
          <article className="mt-2 w-full rounded-md bg-white p-4 xl:p-12">
            <CompanyInfo company={company} />

            <Scroller name="Categories">
              <Categories data={company.categories} />
            </Scroller>

            <Scroller name="Certificates">
              <Achievements iconSrc="/certificate-ico.svg" data={company.certificates} />
            </Scroller>

            <Scroller name="Licences">
              <Achievements iconSrc="/check-circle.svg" data={company.licences} />
            </Scroller>

            <Scroller name="Awards">
              <Achievements iconSrc="/trophy-ico.svg" data={company.awards} />
            </Scroller>
            <h2 className="mt-14 text-xl font-medium text-primary underline decoration-4 underline-offset-8">
              Reviews
            </h2>
            <ReviewList data={reviewData} />
            <div className="flex w-full flex-col-reverse items-center md:flex-row">
              <Link
                href="/companies"
                className="mt-10 flex min-w-[100px] flex-row space-x-1 font-semibold text-primary"
              >
                <Image alt="right-chevron" src="/left-chevron.svg" width={24} height={24} />
                <p>Back</p>
              </Link>
              <Link href="/reviews" className="mx-auto mt-10 w-full text-base lg:mx-0 lg:w-[330px]">
                <Button className="mx-auto w-full lg:mx-0">
                  <Image
                    alt="message-circle icon"
                    src="/message-circle-white.svg"
                    height={20}
                    width={20}
                    className="mr-2"
                  />
                  Review this company
                </Button>
              </Link>
              <Pagination
                pathname={`/companies/${params.id}`}
                pagination={pagination}
                searchParams={searchParams}
              />
            </div>
          </article>
        </div>
        <div className="xl:col-span-2">
          <h2 className="mb-2 text-xl font-semibold text-black">Similar Companies</h2>
          <SimilarCompanyList data={similarCompanies} />
        </div>
      </div>
    </main>
  );
};
export default CompanyPage;
