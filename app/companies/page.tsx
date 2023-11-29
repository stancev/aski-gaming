import { Suspense } from 'react';
import Pagination from '@/components/Pagination';
//import Search from '@/components/Search';
import CompanyList from '@/components/CompanyList';
import Skeleton from '@/components/Skeleton';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

const CompaniesPage = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { page = '1', search = '' } = searchParams;

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

      <section className="w-full max-w-[1424px] mb-10 flex justify-between items-center">
        <div className="flex space-x-3 xl:space-x-6">
          <Select>
            <SelectTrigger className="w-[216px] h-[48px] rounded-[10px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[216px] h-[48px] rounded-[10px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-x-3 xl:space-x-6">
          <Button className="w-[206px] rounded-[42px]">Featured</Button>
          <Button className="w-[206px] rounded-[42px]" variant="outline">
            Unclaimed
          </Button>
          <Button className="w-[206px] rounded-[42px]" variant="outline">
            All companies
          </Button>
          <Button className="w-[48px]" variant="default">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M9.62193 19.2423C14.9356 19.2423 19.2432 14.9348 19.2432 9.62107C19.2432 4.30738 14.9356 -0.00012207 9.62193 -0.00012207C4.30824 -0.00012207 0.000688553 4.30743 0.000688553 9.62111C0.000688553 14.9348 4.30829 19.2423 9.62193 19.2423ZM9.62193 2.74882C13.4174 2.74882 16.4942 5.82563 16.4942 9.62111C16.4942 13.4166 13.4174 16.4934 9.62193 16.4934C5.82644 16.4934 2.74963 13.4166 2.74963 9.62111C2.74963 5.82563 5.82649 2.74882 9.62193 2.74882Z"
                fill="white"
              />
              <path
                d="M20.6176 21.9912C20.9829 21.9934 21.3341 21.8499 21.5934 21.5926C22.1324 21.058 22.136 20.1878 21.6014 19.6489C21.5987 19.6462 21.5961 19.6435 21.5934 19.6409L16.4255 14.4729C15.8675 13.934 14.9783 13.9493 14.4393 14.5073C13.9004 15.0652 13.9158 15.9544 14.4737 16.4934L19.6417 21.5926C19.9011 21.8499 20.2522 21.9934 20.6176 21.9912Z"
                fill="white"
              />
            </svg>
          </Button>
        </div>
      </section>
      {/* <Search search={String(search)} /> */}

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Suspense fallback={<Skeleton />}>
          <CompanyList page={String(page)} search={String(search)} />
        </Suspense>
      </section>
      <Pagination search={search} />
    </main>
  );
};

export default CompaniesPage;
