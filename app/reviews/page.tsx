import { Suspense } from 'react';
import { SearchParams } from '@/types/companies';
import { getReviewData } from '@/lib/getData';
import Headings from '@/components/pagers/Headings';
import Skeleton from '@/components/Skeleton';
import Pagination from '@/components/Pagination';
import ReviewList from '@/app/reviews/ReviewList';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
interface Props {
  searchParams: SearchParams;
}

const Reviews: React.FC<Props> = async ({ searchParams }) => {
  const { pagination } = await getReviewData(searchParams);

  return (
    <main>
      <Image
        src="/background-companies.svg"
        quality={100}
        width={1920}
        height={600}
        alt="Background"
        className="absolute z-0 object-cover"
        draggable={false}
        style={{ width: '100%' }}
      />
      <div className="relative z-10 flex min-h-screen flex-col items-center p-2 xl:p-16">
        <Headings
          title="See what others are saying"
          subtitle="Most recent reviews from our community"
        />
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:max-lg:mt-10 lg:grid-cols-3">
          <Suspense fallback={<Skeleton />}>
            <ReviewList searchParams={searchParams} />
          </Suspense>
        </section>
        <div className="flex w-full max-w-[1424px] flex-col justify-between md:flex-row">
          <Link href="/reviews" className="mx-auto mt-10 w-full text-base lg:mx-0 lg:w-[330px]">
            <Button className="mx-auto w-full lg:mx-0">
              <Image
                alt="message-circle icon"
                src="/message-circle-white.svg"
                height={20}
                width={20}
                className="mr-2"
              />
              Review this company
            </Button>
          </Link>
          <Pagination pathname="/reviews" pagination={pagination} searchParams={searchParams} />
        </div>
      </div>
    </main>
  );
};

export default Reviews;
