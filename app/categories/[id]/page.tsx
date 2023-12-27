import Headings from '@/components/pagers/Headings';
import FiltersContainer from './FiltersContainer';
import CompanyCard from '@/components/CompanyCardStatic';

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#F6F8FC] p-2 xl:p-16">
      <Headings
        title="Explore more than 80+ different categories"
        subtitle="Secondary line of text that goes here"
      />
      <FiltersContainer />

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:max-lg:mt-10 lg:grid-cols-3">
        {Array.from({ length: 24 }).map((_, index) => (
          <CompanyCard key={index} />
        ))}
      </section>
    </main>
  );
};
export default page;
