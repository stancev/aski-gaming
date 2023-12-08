'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Input } from '@/components/ui/input';

interface Props {
  search?: string;
  searchActive?: boolean;
}

const HomeSearch: React.FC<Props> = ({ searchActive }) => {
  const searchParams = useSearchParams();
  const hasSearch = searchParams.has('search');
  const search = searchParams.get('search');

  //const urlSearchValue = searchParams.get('search');
  const [searchValue, setSearchValue] = useState(hasSearch ? search : '');

  const handleClick = () => {
    setSearchValue('');
  };

  return (
    <section
      className={cn(
        'w-full max-w-[1424px] xl:mb-10 flex justify-center items-center',
        !searchActive && 'hidden'
      )}
    >
      <div className="relative xl:w-[636px] xl:h-[64px] rounded-[10px]">
        <Input
          className="pl-24 pr-10 py-2 xl:w-full xl:h-full w-86 h-12 xl:text-[16px]"
          placeholder="Search companies"
          type="text"
          name="search"
          id="search"
          value={searchValue || ''}
          onChange={e => setSearchValue(e.target.value)}
        />
        <div className="grid place-items-center absolute left-3 top-1/2 transform -translate-y-1/2 xl:h-12 xl:w-12 bg-primary rounded-[7px] h-9 w-9">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M9.62193 19.2423C14.9356 19.2423 19.2432 14.9348 19.2432 9.62107C19.2432 4.30738 14.9356 -0.00012207 9.62193 -0.00012207C4.30824 -0.00012207 0.000688553 4.30743 0.000688553 9.62111C0.000688553 14.9348 4.30829 19.2423 9.62193 19.2423ZM9.62193 2.74882C13.4174 2.74882 16.4942 5.82563 16.4942 9.62111C16.4942 13.4166 13.4174 16.4934 9.62193 16.4934C5.82644 16.4934 2.74963 13.4166 2.74963 9.62111C2.74963 5.82563 5.82649 2.74882 9.62193 2.74882Z"
              fill="white"
            />
            <path
              d="M20.6176 21.9912C20.9829 21.9934 21.3341 21.8499 21.5934 21.5926C22.1324 21.058 22.136 20.1878 21.6014 19.6489C21.5987 19.6462 21.5961 19.6435 21.5934 19.6409L16.4255 14.4729C15.8675 13.934 14.9783 13.9493 14.4393 14.5073C13.9004 15.0652 13.9158 15.9544 14.4737 16.4934L19.6417 21.5926C19.9011 21.8499 20.2522 21.9934 20.6176 21.9912Z"
              fill="white"
            />
          </svg>
        </div>
        {searchValue && (
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400"
            onClick={handleClick}
          >
            <Image alt="cancel search" src="/cancel.svg" width={24} height={24} />
          </button>
        )}
      </div>
    </section>
  );
};

export default HomeSearch;
