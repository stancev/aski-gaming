import { Suspense } from 'react';
import { SearchParams } from '@/types/companies';
import { getCategoryFull } from '@/lib/categories';
import Headings from '@/components/pagers/Headings';
import Search from '@/components/filters/Search';
import CategoriesList from './CategoriesList';
import Skeleton from '@/components/Skeleton';
import Pagination from '@/components/Pagination';
import Image from 'next/image';
interface Props {
  searchParams: SearchParams;
}

const Categories: React.FC<Props> = async ({ searchParams }) => {
  const { pagination } = await getCategoryFull(searchParams);

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
          title="Explore more than 80+ different categories"
          subtitle="Find the best companies in the iGaming industry by browsing through many available categories"
        />
        <Search placeholder="Search categories" />

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:max-lg:mt-10 xl:grid-cols-3 2xl:grid-cols-4">
          <Suspense fallback={<Skeleton />}>
            <CategoriesList searchParams={searchParams} />
          </Suspense>
        </section>

        <Pagination pathname="/companies" pagination={pagination} searchParams={searchParams} />
      </div>
    </main>
  );
};

export default Categories;
