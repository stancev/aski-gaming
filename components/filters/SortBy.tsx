"use client";
import { useSearchParams } from 'next/navigation';
import { useUpdateLocation } from '@/hooks/useUpadeLocation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

const SortBy= () => {
  const searchParams = useSearchParams();
  const updateLocation = useUpdateLocation();

  return (
    <Select
            value={searchParams.get('sort') ?? 'newest'}
            onValueChange={value => updateLocation('sort', value)}
          >
            <SelectTrigger className="w-[144px] sm:w-[216px] h-10 sm:h-12 rounded-[10px] sm:text-sm lg:text-base">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="most-reviews">Most reviews</SelectItem>
              <SelectItem value="top-rated">Top rated</SelectItem>
            </SelectContent>
          </Select>
  );
};
export default SortBy;