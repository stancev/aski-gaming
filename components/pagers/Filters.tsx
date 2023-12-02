'use client';

import { useState } from 'react';
//import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import Search from '../Search';

const Filters = () => {
  // const router = useRouter();
  const [searchActive, setSearchActive] = useState(false);
  // const { featured, ...otherSearchParams } = searchParams;

  return (
    <section className="w-full max-w-[1424px] mb-10 flex justify-between items-center">
      <div className={cn('flex space-x-3 xl:space-x-6', searchActive && 'hidden')}>
        <Select>
          <SelectTrigger className="w-[216px] h-[48px] rounded-[10px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[216px] h-[48px] rounded-[10px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Newest</SelectItem>
            <SelectItem value="dark">Most reviews</SelectItem>
            <SelectItem value="system">Top rated</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className={cn('space-x-3 xl:space-x-6', searchActive && 'hidden')}>
        <Button asChild className="w-[206px] rounded-[42px]">
          <Link
            href={{
              pathname: '/companies',
              query: {
                featured: true
              }
            }}
          >
            Featured
          </Link>
        </Button>
        <Button className="w-[206px] rounded-[42px]" variant="outline">
          Unclaimed
        </Button>
        <Button className="w-[206px] rounded-[42px]" variant="outline">
          <Link href="/companies">All companies</Link>
        </Button>
        <Button className="w-[48px]" variant="default" onClick={() => setSearchActive(true)}>
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
        </Button>
      </div>
      <Search searchActive={searchActive} setSearchActive={setSearchActive} />
    </section>
  );
};

export default Filters;
