import { Suspense } from 'react';
import { getData } from '@/lib/getData';
import { getCategories } from '@/lib/categories';
import Pagination from '@/components/Pagination';
import CompanyList from '@/components/CompanyList';
import Headings from '@/components/pagers/Headings';
import Filters from '@/components/pagers/Filters';
import Skeleton from '@/components/Skeleton';

type SearchParams = { [key: string]: string };

const CompaniesPage = async ({
  searchParams
}: {
  searchParams: SearchParams;
}) => {
  const { search = '' } = searchParams;
  const result = await getData(searchParams);
  const categories = await getCategories();
  const companies = result.data;
  const pagination = result.meta.pagination;

  return (
    <main className="flex min-h-screen flex-col items-center p-2 xl:p-16 bg-[#F6F8FC]">
      <Headings
        title="Connect With 800+ Industry Players"
        subtitle="Secondary line of text that goes here"
      />
      <Filters categories={categories.data} />

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Suspense fallback={<Skeleton />}>
          <CompanyList companies={companies} />
        </Suspense>
      </section>
      <Pagination pagination={pagination} search={search} />
    </main>
  );
};

export default CompaniesPage;
