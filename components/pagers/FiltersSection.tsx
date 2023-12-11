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
    <section className="w-full max-w-[1424px] h-16 mb-10 flex flex-col items-center">
      <div className={cn('w-full flex', isSearchOpen && 'hidden')}>
        <div className="flex space-x-1 xl:space-x-6">
          <CategoriesFilter categories={categories} />
          <SortBy />
        </div>
        <div className="hidden lg:flex space-x-1 xl:space-x-3 ml-auto">
          <ButtonFilters />
        </div>
        <SearchOpenTrigger />
      </div>
      <div
        className={cn(
          'lg:hidden flex justify-between w-full space-x-1 xl:space-x-6 mt-4',
          isSearchOpen && 'hidden'
        )}
      >
        <ButtonFilters />
      </div>
      {isSearchOpen && <Search />}
    </section>
  );
};

export default FiltersSection;
