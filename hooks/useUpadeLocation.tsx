'use client';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export function useUpdateLocation() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);

    if (name === 'featured') {
      params.delete('claimed');
    }

    if (name === 'claimed') {
      params.delete('featured');
    }

    return params.toString();
  };

  const updateLocation = (queryKey: string, queryValue: string) => {
    const queryString = createQueryString(queryKey, queryValue);

    router.push(pathname + '?' + queryString);
  };

  return updateLocation;
}
