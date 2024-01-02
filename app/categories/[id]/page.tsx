import Headings from '@/components/pagers/Headings';
import FiltersContainer from './FiltersContainer';
//import CompanyCard from '@/components/CompanyCardStatic';
import CompanyList from '@/components/CompanyList';
import { getData } from '@/lib/getData';
import Skeleton from '@/components/Skeleton';
import { Suspense } from 'react';
import Pagination from '@/components/Pagination';

interface Props {
  params: {
    id: string;
  };
  searchParams: any;
}

const page: React.FC<Props> = async ({ params, searchParams }) => {
  const { pagination } = await getData({ category: params.id });
  console.log('test', { ...searchParams, category: params.id });
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#F6F8FC] p-2 xl:p-16">
      <Headings
        title="Explore more than 80+ different categories"
        subtitle="Secondary line of text that goes here"
      />
      <FiltersContainer />

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:max-lg:mt-10 lg:grid-cols-3">
        <Suspense fallback={<Skeleton />}>
          <CompanyList searchParams={{ category: params.id }} />
        </Suspense>
      </section>

      <Pagination
        pathname="/companies"
        pagination={pagination}
        searchParams={{ category: params.id }}
      />
    </main>
  );
};
export default page;
