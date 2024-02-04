import { generateQueryParams } from './utils';
type SearchParams = { [key: string]: string };

// Your existing strapiQuery object
const strapiQuery: Record<string, string> = {
  featured: 'filters[featured][$eq]=true',
  claimed: 'filters[claimed][$eq]=false',
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
  let url = `${process.env.API_URL}/reviews?sort=publishedAt:desc&pagination[page]=${page}&populate=user,company.logo.url,user.profilePicture.url&pagination[pageSize]=9`;

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
  const url = `${process.env.API_URL}/reviews?sort=publishedAt:desc&pagination[limit]=6&populate=user,company.logo.url,company.averageRating,company.totalRatings,user.profilePicture.url`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const { data } = await res.json();

  return data;
}

export async function getSingleCompanyReviewData(id: string, searchParams: SearchParams) {
  const page = searchParams.page || 1;
  const strapiQuery: Record<string, string> = {
    rating: 'filters[rating][$eq]=${rating}',
    company: 'filters[company][id][$eq]=${company}'
  };
  const updatedStrapiQuery = generateQueryParams(searchParams, strapiQuery);

  let url = `${process.env.API_URL}/reviews?populate=user.profilePicture.url,company&filters[company][id][$eq]=${id}&sort=publishedAt:desc&pagination[page]=${page}&pagination[pageSize]=5`;

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

export async function getAllCompaniesIds() {
  const res = await fetch(`${process.env.API_URL}/companies?fields[0]=id&pagination[limit]=2000`);
  const data = await res.json();
  const companies = data.data;
  return companies;
}

export async function getCompanyData(id: string) {
  const res = await fetch(
    `${process.env.API_URL}/companies/${id}?populate=reviews.user.profilePicture,logo,categories`,
    {
      next: { revalidate: 60 }
    }
  );
  const data = await res.json();
  const company = data.data;
  return company;
}

export async function getHomepageCompanies(type: 'featured' | 'new' | 'mostReviews') {
  let url = `${process.env.API_URL}/companies?populate=logo,categories&sort=publishedAt:desc&pagination[limit]=10`;

  if (type === 'featured') {
    url = `${process.env.API_URL}/companies?filters[featured][$eq]=true&populate=logo,categories&sort=publishedAt:desc&pagination[limit]=10`;
  }

  if (type === 'mostReviews') {
    url = `${process.env.API_URL}/companies?populate=logo,categories&pagination[limit]=10`;
  }

  const res = await fetch(url);
  const data = await res.json();

  return data;
}

export async function getProfileData(id: string) {
  const res = await fetch(
    `${process.env.API_URL}/users/${id}?sort=createdAt:desc&populate[reviews][populate][0]=company.logo.url&populate=profilePicture`,
    {
      next: { revalidate: 60 }
    }
  );
  const user = await res.json();
  return user;
}

export async function getProfileReviews(id: string, searchParams: SearchParams) {
  const page = searchParams.page || 1;
  const strapiQuery: Record<string, string> = {
    rating: 'filters[rating][$eq]=${rating}',
    company: 'filters[company][id][$eq]=${company}'
  };
  const updatedStrapiQuery = generateQueryParams(searchParams, strapiQuery);
  let url = `${process.env.API_URL}/reviews?sort=createdAt:desc&populate=company.logo.url&pagination[page]=${page}&pagination[pageSize]=5&filters[user][id][$eq]=${id}`;

  if (updatedStrapiQuery) {
    url += updatedStrapiQuery;
  }

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const {
    data,
    meta: { pagination }
  } = await res.json();

  return { data, pagination };
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

export async function getHomepageCounters() {
  const res = await fetch(`${process.env.API_URL}/homepage-counter`);
  const data = await res.json();
  return data;
}

export async function getSimilarCompaniesData(categoryId: number, companyId: number) {
  const res = await fetch(
    `${process.env.API_URL}/companies?populate=categories,logo&filters[categories][id][$eq]=${categoryId}&filters[id][$ne]=${companyId}&sort=publishedAt:desc&pagination[limit]=6`
  );

  const data = await res.json();
  return data;
}
