'use client';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const SearchOpenTrigger = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Button
      size="square"
      variant="default"
      className="ml-auto xl:ms-3"
      onClick={() => router.push(pathname + '?' + 'search=')}
    >
      <Image alt="search-icon" src="/search.svg" width={22} height={22} />
    </Button>
  );
};
export default SearchOpenTrigger;
