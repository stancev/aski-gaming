import { Suspense } from 'react';
import { SearchParams } from '@/types/companies';
import Headings from '@/components/pagers/Headings';
import Search from '@/components/filters/Search';
import CategoriesList from './CategoriesList';
import Skeleton from '@/components/Skeleton';

interface Props {
  searchParams: SearchParams;
}

const Categories: React.FC<Props> = async ({ searchParams }) => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#F6F8FC] p-2 xl:p-16">
      <Headings
        title="Explore more than 80+ different categories"
        subtitle="Secondary line of text that goes here"
      />
      <Search />

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:max-lg:mt-10 xl:grid-cols-3 2xl:grid-cols-4">
        <Suspense fallback={<Skeleton />}>
          <CategoriesList searchParams={searchParams} />
        </Suspense>
      </section>
    </main>
  );
};

export default Categories;
