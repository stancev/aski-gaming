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
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

interface Category {
  id: number;
  name: string;
}

interface Props {
  categories: Category[];
  // eslint-disable-next-line
  createQueryString: (name: string, value: string) => string;
}

const CategoriesFilter = ({ categories, createQueryString }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleCategoryChange = (currentValue: string) => {
    const lowerCaseValue = currentValue.toLowerCase();
    const matchedCategory = categories.find(
      category => category.name.toLowerCase() === lowerCaseValue
    );

    if (matchedCategory) {
      router.push(pathname + '?' + createQueryString('category', matchedCategory.id.toString()));
      return;
    }

    router.push(pathname);
  };

  const setActiveCategory = (value: string) => {
    if (!searchParams.has('category')) {
      return 'All categories';
    }
    return categories.find(category => category.name.toLowerCase() === value)?.name;
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[160px] sm:w-[200px] h-10 sm:h-12 justify-between text-heading sm:text-sm lg:text-base"
        >
          {value ? setActiveCategory(value) : 'All categories'}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[160px] sm:w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No categories found.</CommandEmpty>
          <CommandGroup>
            <CommandItem
              value="All categories"
              onSelect={currentValue => {
                handleCategoryChange(currentValue);
                setValue(currentValue === value ? '' : currentValue);
                setOpen(false);
              }}
            >
              <Check
                className={cn(
                  'mr-2 h-4 w-4',
                  value === 'all categories' ? 'opacity-100' : 'opacity-0'
                )}
              />
              All categories
            </CommandItem>
            {categories.map(category => (
              <CommandItem
                key={category.name}
                value={category.name.toString()}
                onSelect={currentValue => {
                  handleCategoryChange(currentValue);
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === category.name.toLowerCase() ? 'opacity-100' : 'opacity-0'
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

export default CategoriesFilter;
