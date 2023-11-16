import { Suspense } from 'react';
import Pagination from '@/components/Pagination';
import Search from '@/components/Search';
import CompanyList from '@/components/CompanyList';
import Skeleton from '@/components/Skeleton';

const CompaniesPage = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { page = '1', search = '' } = searchParams;

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Search search={String(search)} />
      <Suspense fallback={<Skeleton />}>
        <CompanyList page={String(page)} search={String(search)} />
      </Suspense>
      <Pagination search={search} />
    </main>
  );
};

export default CompaniesPage;
