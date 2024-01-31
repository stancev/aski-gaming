export interface Category {
  id: number;
  name: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

interface Logo {
  id: number;
  name: string;
  url: string;
  width: number;
  height: number;
}

export interface Company {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  established: number;
  employees: number;
  countries: string;
  website: string;
  country: string;
  state?: string | null;
  city: string;
  claimed: boolean;
  featured: boolean;
  categories: Category[];
  logo: Logo;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ProfilePicture {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string | null;
  provider: string;
  provider_metadata?: any;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  country: string;
  state: string;
  city: string;
  company: string;
  position: string;
  reviews: Review[];
  profilePicture: ProfilePicture;
}

export interface Review {
  id: number;
  title: string;
  description: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  company: Company;
  user: User;
}

export type SearchParams = { [key: string]: string };
