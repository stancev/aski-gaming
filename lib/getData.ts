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

  let url = `${process.env.API_URL}/companies?pagination[page]=${page}&populate=*`;

  if (updatedStrapiQuery) {
    url += updatedStrapiQuery;
  }

  // const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  // const res = await delay(7000).then(() => fetch(url));

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

export async function getReviewData(searchParams: SearchParams) {
  const page = searchParams.page || 1;

  const strapiQuery: Record<string, string> = {
    // Add or modify the parameters as needed for fetching reviews
    rating: 'filters[rating][$eq]=${rating}',
    company: 'filters[company][id][$eq]=${company}'
  };

  const updatedStrapiQuery = generateQueryParams(searchParams, strapiQuery);

  // Update the URL to point to the reviews endpoint
  let url = `${process.env.API_URL}/reviews?pagination[page]=${page}&populate=user,company.logo.url,user.profilePicture.url`;

  if (updatedStrapiQuery) {
    url += updatedStrapiQuery;
  }

  // Fetch the data from the API
  const res = await fetch(url);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const {
    data,
    meta: { pagination }
  } = await res.json();

  return { data, pagination };
}

export async function getRecentReviews() {
  const url = `${process.env.API_URL}/reviews?sort=publishedAt:desc&pagination[limit]=6&populate=user,company.logo.url,user.profilePicture.url`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const { data } = await res.json();

  return data;
}

export async function getAllCompaniesIds() {
  const res = await fetch(`${process.env.API_URL}/companies?fields[0]=id&pagination[limit]=2000`);
  const data = await res.json();
  const companies = data.data;
  return companies;
}

export async function getCompanyData(id: string) {
  const res = await fetch(`${process.env.API_URL}/companies/${id}?populate=*`, {
    next: { revalidate: 60 }
  });
  const data = await res.json();
  const company = data.data;
  return company;
}

export async function getMe(token: string) {
  const res = await fetch(`${process.env.API_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const data = await res.json();

  return data;
}
