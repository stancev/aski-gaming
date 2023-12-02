import { Suspense } from 'react';
import { getData } from '@/lib/getData';
import Pagination from '@/components/Pagination';
//import Search from '@/components/Search';
import CompanyList from '@/components/CompanyList';
import Headings from '@/components/pagers/Headings';
import Filters from '@/components/pagers/Filters';
import Skeleton from '@/components/Skeleton';

const CompaniesPage = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { page = '1', search = '', featured } = searchParams;
  console.log('roksi', searchParams);
  const result = await getData(String(page), String(search), featured);
  const companies = result.data;
  const pagination = result.meta.pagination;

  return (
    <main className="flex min-h-screen flex-col items-center p-2 xl:p-16 bg-[#F6F8FC]">
      <Headings
        title="Connect With 800+ Industry Players"
        subtitle="Secondary line of text that goes here"
      />
      <Filters searchParams={searchParams} />
      {/* <Search search={String(search)} /> */}

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
