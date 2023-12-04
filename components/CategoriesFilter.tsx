'use client';

import * as React from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useRouter, usePathname } from 'next/navigation';

interface Category {
  id: number;
  name: string;
}

interface Props {
  categories: Category[];
  // eslint-disable-next-line
  createQueryString: (name: string, value: string) => string;
}

const CompaniesFilter = ({ categories, createQueryString }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  const router = useRouter();
  const pathname = usePathname();

  console.log('test', categories);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? categories.find(category => String(category.id) === value)?.name
            : 'Select category...'}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search category..." />
          <CommandEmpty>No category found.</CommandEmpty>
          <CommandGroup>
            {categories.map(category => (
              <CommandItem
                key={String(category.id)}
                value={String(category.id)}
                onSelect={currentValue => {
                  router.push(pathname + '?' + createQueryString('category', currentValue));
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === String(category.id) ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {category.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CompaniesFilter;
