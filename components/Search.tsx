'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useDebounce } from 'use-debounce';
import { Input } from '@/components/ui/input';

const Search = ({ search }: { search?: string }) => {
  //const searchParams = useSearchParams();
  //const pathname = usePathname();
  console.log('test', search);
  const router = useRouter();
  const initialRender = useRef(true);

  //const urlSearchValue = searchParams.get('search');
  const [searchValue, setSearchValue] = useState(search);

  const [debouncedSearchValue] = useDebounce(searchValue, 750);
  console.log('test', debouncedSearchValue);
  useEffect(() => {
    if (search !== debouncedSearchValue) {
      console.log('test', 'search prop has changed and debouncedSearchValue did not change');
      router.push(`/companies?search=${debouncedSearchValue}`);
      // You can update debouncedSearchValue here if needed
      // setSearchValue(search);
    }
  }, [search, debouncedSearchValue]);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    if (!debouncedSearchValue) {
      router.push(`/companies`);
    } else {
      router.push(`/companies?search=${debouncedSearchValue}`);
    }
  }, [debouncedSearchValue, router]);

  // useEffect(() => {
  //   const params = new URLSearchParams(searchParams);

  //   if (!debouncedSearchValue) {
  //     params.delete('search');
  //   } else {
  //     params.set('search', debouncedSearchValue);
  //     params.set('page', '1');
  //   }
  //   router.push(`${pathname}?${params}`);
  // }, [debouncedSearchValue, pathname, router, searchParams]);

  return (
    <section className="mb-6">
      <Input
        className="w-full"
        placeholder="Search companies"
        type="text"
        name="search"
        id="search"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
    </section>
  );
};

export default Search;
