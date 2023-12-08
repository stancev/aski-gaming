import { generateQueryParams } from './utils';
type SearchParams = { [key: string]: string };

// Your existing strapiQuery object
const strapiQuery: Record<string, string> = {
  featured: 'filters[featured][$eq]=${featured}',
  claimed: 'filters[claimed][$eq]=${unclaimed}',
  category: 'filters[categories][id][$eq]=${category}'
};

export async function getData(searchParams: SearchParams) {
  const page = searchParams.page || 1;

  const updatedStrapiQuery = generateQueryParams(searchParams, strapiQuery);

  let url = `${process.env.API_URL}/companies?pagination[page]=${page}&pagination[pageSize]=6&populate=*`;

  if (updatedStrapiQuery) {
    url += updatedStrapiQuery;
  }

  const res = await fetch(url);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
