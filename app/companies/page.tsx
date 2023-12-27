import { Suspense } from 'react';
import { getData } from '@/lib/getData';
import { getCategories } from '@/lib/categories';
import { SearchParams } from '@/types/companies';
import Pagination from '@/components/Pagination';
import CompanyList from '@/components/CompanyList';
import Headings from '@/components/pagers/Headings';
import FiltersSection from '@/components/pagers/FiltersSection';
import Skeleton from '@/components/Skeleton';

const CompaniesPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { pagination } = await getData(searchParams);
  const categories = await getCategories();
  const isSearchOpen = searchParams.hasOwnProperty('search');

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#F6F8FC] p-2 xl:p-16">
      <Headings
        title="Connect With 800+ Industry Players"
        subtitle="Secondary line of text that goes here"
      />
      <FiltersSection categories={categories.data} isSearchOpen={isSearchOpen} />

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:max-lg:mt-10 lg:grid-cols-3">
        <Suspense fallback={<Skeleton />}>
          <CompanyList searchParams={searchParams} />
        </Suspense>
      </section>

      <Pagination pathname="/companies" pagination={pagination} searchParams={searchParams} />
    </main>
  );
};

export default CompaniesPage;
