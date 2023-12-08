'use client';

import { useCallback, useState } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import CategoriesFilter from '@/components/CategoriesFilter';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import Search from '../Search';

const Filters = ({ categories }: any) => {
  const pathname = usePathname();
  const router = useRouter();
  const [searchActive, setSearchActive] = useState(false);
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      if (name === 'featured') {
        params.delete('claimed');
      }

      if (name === 'claimed') {
        params.delete('featured');
      }

      return params.toString();
    },
    [searchParams]
  );

  return (
    <section className="w-full max-w-[1424px] h-16 mb-10 flex flex-col items-center">
      <div className={cn('w-full flex', searchActive && 'hidden')}>
        <div className={cn('flex space-x-1 xl:space-x-6', searchActive && 'hidden')}>
          <CategoriesFilter categories={categories} createQueryString={createQueryString} />
          <Select
            value={searchParams.get('sort') ?? 'newest'}
            onValueChange={value => router.push(pathname + '?' + createQueryString('sort', value))}
          >
            <SelectTrigger className="w-[144px] sm:w-[216px] h-10 sm:h-12 rounded-[10px] text-heading sm:text-sm lg:text-base font-semibold">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="most-reviews">Most reviews</SelectItem>
              <SelectItem value="top-rated">Top rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div
          className={cn('hidden lg:flex space-x-1 xl:space-x-3 ml-auto', searchActive && 'hidden')}
        >
          <Button
            onClick={() => {
              router.push(pathname + '?' + createQueryString('featured', 'true'));
            }}
            size="filter"
            variant={searchParams.has('featured') ? 'default' : 'outline'}
          >
            Featured
          </Button>
          <Button
            onClick={() => {
              router.push(pathname + '?' + createQueryString('claimed', 'false'));
            }}
            variant={searchParams.has('claimed') ? 'default' : 'outline'}
            size="filter"
          >
            Unclaimed
          </Button>
          <Button asChild variant={!searchParams.size ? 'default' : 'outline'} size="filter">
            <Link className="px-0 sm:px-4" href={pathname}>
              All companies
            </Link>
          </Button>
        </div>
        <Button
          size="square"
          variant="default"
          className="ml-auto xl:ms-3"
          onClick={() => {
            setSearchActive(true);
            router.push(pathname);
          }}
        >
          <Image alt="search-icon" src="/search.svg" width={22} height={22} />
        </Button>
      </div>
      <div
        className={cn(
          'lg:hidden flex justify-between w-full space-x-1 xl:space-x-6 mt-4',
          searchActive && 'hidden'
        )}
      >
        <Button
          onClick={() => {
            router.push(pathname + '?' + createQueryString('featured', 'true'));
          }}
          variant={searchParams.has('featured') ? 'default' : 'outline'}
          size="filter"
        >
          Featured
        </Button>
        <Button
          onClick={() => {
            router.push(pathname + '?' + createQueryString('unclaimed', 'true'));
          }}
          variant={searchParams.has('claimed') ? 'default' : 'outline'}
          size="filter"
        >
          Unclaimed
        </Button>
        <Button asChild variant={!searchParams.size ? 'default' : 'outline'} size="filter">
          <Link href={pathname}>All companies</Link>
        </Button>
      </div>
      {searchActive && <Search searchActive={searchActive} setSearchActive={setSearchActive} />}
    </section>
  );
};

export default Filters;
