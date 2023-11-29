//import { Card, CardHeader, CardTitle } from '@/components/ui/card';
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

interface Props {
  page: string;
  search: string;
}

const CompanyList: React.FC<Props> = async ({ page, search }) => {
  await new Promise(resolve => setTimeout(resolve, 3000));
  const result = await getData(String(page), String(search));
  console.log('test', result.meta.pagination);
  const companies = result.data;

  return (
    <>
      {companies.map((company: any) => (
          <CompanyCard key={company.id} />
      ))}
    </>
  );
};

export default CompanyList;
