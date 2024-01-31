'use client';

import * as React from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useUpdateLocation } from '@/hooks/useUpadeLocation';
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
}

const CategoriesFilter = ({ categories }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  const updateLocation = useUpdateLocation();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleCategoryChange = (currentValue: string) => {
    const lowerCaseValue = currentValue.toLowerCase().trim();
    const matchedCategory = categories.find(
      category => category.name.toLowerCase().trim() === lowerCaseValue
    );

    if (matchedCategory) {
      updateLocation('category', matchedCategory.id.toString());
      return;
    }

    router.push(pathname);
  };

  const setActiveCategory = (value: string) => {
    if (!searchParams.has('category')) {
      return 'All categories';
    }
    return categories.find(category => category.name.toLowerCase().trim() === value)?.name;
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[160px] sm:w-[200px] h-10 sm:h-12 justify-between sm:text-sm lg:text-base"
        >
          <div className="w-[160px] sm:w-max-[110px] overflow-hidden whitespace-nowrap text-overflow-ellipsis text-overflow-ellipsis">
            {value ? setActiveCategory(value) : 'All categories'}
          </div>
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
