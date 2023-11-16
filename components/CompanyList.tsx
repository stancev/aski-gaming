import { Card, CardHeader, CardTitle } from '@/components/ui/card';

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
  const companies = result.data;

  return (
    <section className="mb-6 flex flex-wrap justify-between w-7/10">
      {companies.map((company: any) => (
        <div key={company.id} className="w-full md:w-1/3 p-4">
          <Card className="mb-6 px-3" key={company.id}>
            <CardHeader>
              <CardTitle>{company.attributes.name}</CardTitle>
            </CardHeader>
          </Card>
        </div>
      ))}
    </section>
  );
};

export default CompanyList;
