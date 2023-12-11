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
