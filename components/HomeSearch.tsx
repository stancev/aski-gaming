'use client';

import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
interface SearchProps {
  placeholder: string;
}

const HomeSearch: React.FC<SearchProps> = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const router = useRouter();
  const pathname = usePathname();
  const [searchValue, setSearchValue] = useState(search ? search : '');
  const handleSearch = () => {
    router.push(`/companies?searchOpen=true&search=${searchValue}`);
  };

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleCloseSearch = () => {
    setSearchValue('');
    router.push(pathname);
  };
  return (
    <section
      className={cn('relative flex w-full max-w-[1424px] items-center justify-center xl:mb-10')}
    >
      <div className="relative rounded-[10px] xl:h-[64px] xl:w-[636px]">
        <Input
          className="h-12 min-w-[200px] py-8 pl-24 pr-10 xl:h-full xl:w-full xl:text-[16px]"
          placeholder={placeholder}
          type="search"
          name="search"
          id="search"
          value={searchValue || ''}
          onChange={e => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSearch}
          className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 transform place-items-center rounded-[7px] bg-primary sm:h-12 sm:w-12"
        >
          <Image alt="search-icon" src="/search.svg" width={22} height={22} />
        </button>
        {searchValue !== '' && (
          <button
            className="absolute right-3 top-1/2 h-6 w-6 -translate-y-1/2 transform text-gray-400"
            onClick={handleCloseSearch}
          >
            <Image alt="cancel search" src="/cancel.svg" width={24} height={24} />
          </button>
        )}
      </div>
    </section>
  );
};

export default HomeSearch;
