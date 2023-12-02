export async function getData(page: string, search: string, featured: any) {
  let url = `${process.env.API_URL}/companies?pagination[page]=${page}&pagination[pageSize]=6`;
  if (search) {
    url += `&filters[name][$contains]=${search}`;
  }

  if (featured) {
    url += `&filters[featured][$eq]=${featured}`;
  }

  const res = await fetch(url);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
