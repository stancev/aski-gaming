'use client';
import { useSearchParams, usePathname } from 'next/navigation';
import { useUpdateLocation } from '@/hooks/useUpadeLocation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ButtonFilters = () => {
  const updateLocation = useUpdateLocation();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  return (
    <>
      <Button
        onClick={() => updateLocation('featured', 'true')}
        size="filter"
        variant={searchParams.has('featured') ? 'default' : 'outline'}
      >
        Featured
      </Button>
      <Button
        onClick={() => updateLocation('claimed', 'false')}
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
    </>
  );
};
export default ButtonFilters;
