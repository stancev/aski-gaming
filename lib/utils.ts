import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type SearchParams = { [key: string]: string };

export function generateQueryParams(searchParams: SearchParams, strapiQuery: Record<string, string>): string {
  const updatedStrapiQuery: Record<string, string> = {};

  //if (Object.keys(searchParams).length < 1) return '';

  if (searchParams.search) {
    return `&filters[name][$contains]=${searchParams.search}`;
  }

  // Iterate over keys in urlParams
  for (const key in searchParams) {
    if (strapiQuery.hasOwnProperty(key)) {
      // Update the value in strapiQuery with the corresponding value from urlParams
      updatedStrapiQuery[key] = strapiQuery[key].replace(
        new RegExp(`\\$\\{${key}\\}`, 'g'),
        searchParams[key]
      );
    }
  }

  const queryString = `&${Object.values(updatedStrapiQuery).join('&')}`;

  return queryString;
}