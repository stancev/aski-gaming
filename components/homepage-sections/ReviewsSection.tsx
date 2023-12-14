import Link from 'next/link';
import ReviewCard from '../ReviewCard';

const ReviewsSection = () => {
  return (
    <section className="flex h-full w-full items-center justify-center overflow-hidden p-4 md:p-8">
      <div className="max-w-[1420px]">
        <h2 className="text-base font-semibold text-heading md:text-2xl">Recent Reviews</h2>
        <div className="my-2 grid grid-cols-1 items-center gap-4 md:grid-cols-2 md:justify-between xl:grid-cols-3 2xl:grid-cols-3">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
        <Link href="/reviews" className="font-semibold text-primary">
          View all
        </Link>
      </div>
    </section>
  );
};
export default ReviewsSection;
