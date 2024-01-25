import Link from 'next/link';
import ReviewCard from '../ReviewCard';
import { getRecentReviews } from '@/lib/getData';

const ReviewsSection = async () => {
  const data = await getRecentReviews();
  return (
    <section className="flex h-full w-full items-center justify-center overflow-hidden p-4 md:p-8">
      <div className="max-w-[1420px]">
        <h2 className="text-base font-semibold text-heading md:text-2xl">Recent Reviews</h2>
        <div className="my-2 grid grid-cols-1 items-center gap-4 md:grid-cols-2 md:justify-between xl:grid-cols-3 2xl:grid-cols-3">
          <>
            {data.map((review: any) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </>
        </div>
        <Link href="/reviews" className="font-semibold text-primary">
          View all
        </Link>
      </div>
    </section>
  );
};
export default ReviewsSection;
