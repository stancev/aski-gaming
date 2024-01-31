import { cn } from '@/lib/utils';
import { Category } from '@/types/companies';
import CategoriesFilter from '@/components/filters/CategoriesFilter';
import SortBy from '@/components/filters/SortBy';
import ButtonFilters from '@/components/filters/ButtonFilters';
import SearchOpenTrigger from '@/components/filters/SearchOpenTrigger';
import Search from '@/components/filters/Search';

interface Props {
  categories: Category[];
  isSearchOpen: boolean;
}

const FiltersSection: React.FC<Props> = ({ categories, isSearchOpen }) => {
  return (
    <section className="mb-10 flex h-16 w-full max-w-[1424px] flex-col items-center">
      <div className={cn('flex w-full', isSearchOpen && 'hidden')}>
        <div className="flex space-x-1 xl:space-x-6">
          <CategoriesFilter categories={categories} />
          <SortBy />
        </div>
        <div className="ml-auto hidden space-x-1 lg:flex xl:space-x-3">
          <ButtonFilters />
        </div>
        <SearchOpenTrigger />
      </div>
      <div
        className={cn(
          'mt-4 flex w-full justify-between space-x-1 lg:hidden xl:space-x-6',
          isSearchOpen && 'hidden'
        )}
      >
        <ButtonFilters />
      </div>
      {isSearchOpen && <Search placeholder="Enter company name" />}
    </section>
  );
};

export default FiltersSection;
