import CompanyCard from '@/components/CompanyCardStatic';

export default async function Home() {
  const n = 60;
  return (
    <main className="flex min-h-screen flex-col items-center p-2 xl:p-16 bg-[#F6F8FC]">
      <section className="w-full max-w-[1424px] mb-10">
        <div className="text-gray-700 text-5xl font-semibold font-['Poppins'] leading-[60.24px] tracking-wide">
          Connect With 800+ Industry Players
        </div>
        <div className="text-gray-700 text-2xl font-medium font-['Poppins'] leading-[30.12px] tracking-wide">
          Secondary line of text that goes here
        </div>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: n }).map((_, index) => (
          <CompanyCard key={index} />
        ))}
      </section>
    </main>
  );
}
