import { Suspense } from 'react';
import { getData } from '@/lib/getData';
import { getCategories } from '@/lib/categories';
import Pagination from '@/components/Pagination';
import CompanyList from '@/components/CompanyList';
import Headings from '@/components/pagers/Headings';
import Filters from '@/components/pagers/Filters';
import Skeleton from '@/components/Skeleton';

const CompaniesPage = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { page = '1', search = '', featured, category, unclaimed } = searchParams;
  const result = await getData(String(page), String(search), featured, category, unclaimed);
  const categories = await getCategories();
  const companies = result.data;
  const pagination = result.meta.pagination;
  console.log('hello');

  // Your URL params object
  const urlParams: Record<string, string> = { category: '1', featured: 'true' };

  // Your existing strapiQuery object
  const strapiQuery: Record<string, string> = {
    featured: `filters[featured][$eq]=${featured}`,
    unclaimed: `filters[unclaimed][$eq]=${unclaimed}`,
    category: `filters[categories][id][$eq]=${category}`
  };

  // Function to generate strapiQuery based on URL params
  function generateStrapiQuery(urlParams: Record<string, string>): string {
    const updatedStrapiQuery: Record<string, string> = {};

    // Iterate over keys in urlParams
    for (const key in urlParams) {
      if (urlParams.hasOwnProperty(key) && strapiQuery.hasOwnProperty(key)) {
        // Update the value in strapiQuery with the corresponding value from urlParams
        updatedStrapiQuery[key] = (strapiQuery[key] as string).replace(
          `=${key}`,
          `=${urlParams[key]}`
        );
      }
    }

    const queryStrings = Object.values(updatedStrapiQuery);

    // Concatenate the strings with '&' separator
    const queryString = `&${queryStrings.join('&')}`;

    return queryString;
  }

  // Generate the updated strapiQuery
  const updatedStrapiQuery = generateStrapiQuery(urlParams);

  // Output the result
  console.log('test', updatedStrapiQuery);

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
