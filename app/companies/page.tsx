import Pagination from '@/components/Pagination';
import Search from '@/components/Search';
import CompanyCard from '@/components/CompanyCard';

async function getData(page: string, search: string) {
  let url = `${process.env.API_URL}/companies?pagination[page]=${page}&pagination[pageSize]=6`;
  if (search) {
    url += `&filters[name][$contains]=${search}`;
  }
  console.log('test', url);
  const res = await fetch(url);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Companies = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { page = '1', search = '' } = searchParams;

  const data = await getData(String(page), String(search));
  const companies = data.data;

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Search search={String(search)} />
      <CompanyCard companies={companies} />
      <Pagination search={search} />
    </main>
  );
};

export default Companies;
