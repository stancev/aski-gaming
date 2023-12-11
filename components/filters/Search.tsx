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

    if (!debouncedSearchValue) {
      router.push(`${pathname}?search=`);
    } else {
      router.push(`${pathname}?search=${debouncedSearchValue}`);
    }
  }, [debouncedSearchValue, router, pathname]);

  const handleCloseSearch = () => {
    router.push(pathname);
  };

  return (
    <section className="w-full max-w-[1424px] mb-10 flex justify-center items-center">
      <div className="relative sm:w-[600px] xl:w-[636px] rounded-[10px] h-14 md:h-16">
        <Input
          className="pl-16 sm:pl-24 pr-10 py-2 w-full h-full"
          placeholder="Enter company name"
          type="text"
          name="search"
          id="search"
          value={searchValue || ''}
          onChange={e => setSearchValue(e.target.value)}
        />
        <div className="grid place-items-center absolute left-3 top-1/2 transform -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 bg-primary rounded-[7px]">
          <Image alt="search-icon" src="/search.svg" width={22} height={22} />
        </div>
        <button
          className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400"
          onClick={handleCloseSearch}
        >
          <Image alt="cancel search" src="/cancel.svg" width={24} height={24} />
        </button>
      </div>
    </section>
  );
};

export default Search;
