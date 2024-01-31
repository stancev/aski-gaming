'use client';
import { useSearchParams } from 'next/navigation';
import { useUpdateLocation } from '@/hooks/useUpadeLocation';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

interface Props {
  size?: 'lg';
}

const SortBy: React.FC<Props> = ({ size }) => {
  const searchParams = useSearchParams();
  const updateLocation = useUpdateLocation();

  return (
    <Select
      value={searchParams.get('sort') ?? 'newest'}
      onValueChange={value => updateLocation('sort', value)}
    >
      <SelectTrigger
        className={cn(
          'rounded-[10px] sm:text-sm lg:text-base',
          size === 'lg' ? 'h-14 w-[355px] md:h-16' : 'h-10 w-[144px] sm:h-12 sm:w-[216px]'
        )}
      >
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
