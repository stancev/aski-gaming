import { Category } from '@/types/companies';

interface Props {
  data: Category[];
}
const Categories: React.FC<Props> = ({ data }) => {
  const categories = data.map((category: Category) => (
    <div
      key={category.id}
      className="flex h-8 items-center whitespace-nowrap rounded-3xl bg-blue-100 px-4 text-xs font-semibold text-primary"
    >
      <p>{category.name}</p>
    </div>
  ));
  return categories;
};
export default Categories;
