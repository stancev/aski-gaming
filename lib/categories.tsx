export async function getCategories() {
  const url = `${process.env.API_URL}/categories?fields[0]=name&pagination[limit]=2000`;

  const res = await fetch(url);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getCategoryFull(searchParams: any) {
  let url = `${process.env.API_URL}/categories?populate=*`;

  if (searchParams.search) {
    url += `&filters[name][$contains]=${searchParams.search}`;
  }

  const res = await fetch(url);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  const {
    data,
    meta: { pagination }
  } = await res.json();

  //return res.json();
  return { data, pagination };
}
