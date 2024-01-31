'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useDebounce } from 'use-debounce';
import Image from 'next/image';
import { Input } from '@/components/ui/input';

const Search = () => {
  const searchParams = useSearchParams();
  const hasSearch = searchParams.has('search');
  const search = searchParams.get('search');
  const router = useRouter();
  const pathname = usePathname();
  const initialRender = useRef(true);

  const [searchValue, setSearchValue] = useState(hasSearch ? search : '');

  const [debouncedSearchValue] = useDebounce(searchValue, 250);

  useEffect(() => {
    if (search !== debouncedSearchValue && debouncedSearchValue) {
      router.push(`${pathname}?search=${debouncedSearchValue}`);
    }
  }, [search, debouncedSearchValue, router, pathname]);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    if (debouncedSearchValue) {
      router.push(`${pathname}?search=${debouncedSearchValue}`);
    }
    if (searchValue === '') {
      router.push(pathname);
    }
  }, [debouncedSearchValue, router, pathname, searchValue]);

  const handleCloseSearch = () => {
    setSearchValue('');
    router.push(pathname);
  };

  return (
    <section className="mb-10 flex max-w-[1424px] items-center justify-center">
      <div className="relative h-14 w-[345px] rounded-[10px] sm:w-[600px] md:h-16 xl:w-[636px]">
        <Input
          className="h-full w-full py-2 pl-16 pr-10 sm:pl-24"
          placeholder="Enter company name"
          type="text"
          name="search"
          id="search"
          value={searchValue || ''}
          onChange={e => setSearchValue(e.target.value)}
        />
        <div className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 transform place-items-center rounded-[7px] bg-primary sm:h-12 sm:w-12">
          <Image alt="search-icon" src="/search.svg" width={22} height={22} />
        </div>
        <button
          className="absolute right-3 top-1/2 h-6 w-6 -translate-y-1/2 transform text-gray-400"
          onClick={handleCloseSearch}
        >
          <Image alt="cancel search" src="/cancel.svg" width={24} height={24} />
        </button>
      </div>
    </section>
  );
};

export default Search;
