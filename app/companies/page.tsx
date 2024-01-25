import { Suspense } from 'react';
import { getData } from '@/lib/getData';
import { getCategories } from '@/lib/categories';
import { SearchParams } from '@/types/companies';
import Pagination from '@/components/Pagination';
import CompanyList from '@/components/CompanyList';
import Headings from '@/components/pagers/Headings';
import FiltersSection from '@/components/pagers/FiltersSection';
import Skeleton from '@/components/Skeleton';
import Image from 'next/image';
const CompaniesPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { pagination } = await getData(searchParams);
  const categories = await getCategories();
  const isSearchOpen = searchParams.hasOwnProperty('searchOpen');

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
      <div className="relative z-10 flex min-h-screen flex-col items-center p-2 xl:p-16">
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
      </div>
    </main>
  );
};

export default CompaniesPage;
