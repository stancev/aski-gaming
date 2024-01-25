import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command';
import React from 'react';
import Link from 'next/link';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useDebounce } from 'use-debounce';

type CommandMenuProps = {
  companies: any[];
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
};

export function CommandMenu({ companies, open, onOpenChange }: CommandMenuProps) {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const router = useRouter();
  const pathname = usePathname();
  const initialRender = useRef(true);

  const [searchValue, setSearchValue] = useState(search ? search : '');

  const [debouncedSearchValue] = useDebounce(searchValue, 250);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    if (!debouncedSearchValue && pathname !== '/companies') {
      router.push(pathname);
      return;
    }

    if (pathname === '/companies') {
      router.push(`${pathname}?searchOpen=true&search=${debouncedSearchValue}`);
      return;
    }

    router.push(`${pathname}?search=${debouncedSearchValue}`);
  }, [debouncedSearchValue, router, pathname]);

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput
        placeholder="Start typing to find a company..."
        name="search"
        id="search"
        value={searchValue || ''}
        onValueChange={(e: string) => setSearchValue(e)}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem className="cursor-pointer">Featured Company 1</CommandItem>
          <CommandItem className="cursor-pointer">Featured Company 2</CommandItem>
        </CommandGroup>
        <CommandGroup heading="Companies">
          {companies &&
            companies.map(company => (
              <Link key={company.id} href={`/companies/${company.id}`} passHref>
                <CommandItem className="cursor-pointer">{company.name}</CommandItem>
              </Link>
            ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
