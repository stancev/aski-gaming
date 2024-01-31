import CategoryCard from './CategoryCard';
import { getCategoryFull } from '@/lib/categories';
import { SearchParams } from '@/types/companies';

interface Props {
  searchParams: SearchParams;
}

const CategoriesList: React.FC<Props> = async ({ searchParams }) => {
  const { data } = await getCategoryFull(searchParams);
  return (
    <>
      {data.map((category: any) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </>
  );
};

export default CategoriesList;
