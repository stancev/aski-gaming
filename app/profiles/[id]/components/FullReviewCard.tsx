import Image from 'next/image';
import { Card, CardHeader, CardDescription, CardTitle } from '@/components/ui/card';
import Stars from '@/components/ui/stars';
import ReviewerStars from '@/components/ui/reviewerstars';
import Link from 'next/link';
//import { cn } from '@/lib/utils';
import { Review } from '@/types/companies';

const FullReviewCard = ({ review }: { review: Review }) => {
  return (
    <Card className="m-3 flex w-full max-w-[1074px] flex-col p-3 sm:p-4 lg:rounded-md">
      <Link href={`/companies/${review.company.id}`} passHref>
        <CardHeader className="flex-row items-center space-y-0 p-0">
          <div className="mr-3 mt-1">
            <Image
              className="rounded-sm object-cover"
              alt="netent logo"
              src={`${process.env.STRAPI_URL}${review.company.logo.url}`}
              width={48}
              height={48}
            />
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-sm font-semibold text-heading xl:text-base">{review.company.name}</p>
            <div className="flex">
              <p className="text-xs">4.0 / 32 reviews /</p>
              <p className="text-xs font-semibold text-primary">+8</p>
            </div>
            <div className="mt-1">
              <Stars />
            </div>
          </div>
        </CardHeader>
      </Link>
      <Link href="/reviews">
        <CardTitle className="mt-3 text-base font-semibold text-heading xl:mt-8 xl:text-[22px]">
          {review.title}
        </CardTitle>
      </Link>
      <CardDescription className="mt-2 min-h-[60px] text-sm">{review.description}</CardDescription>
      <div className="mt-2 flex justify-between gap-5 pr-2">
        <Link href="/reviews">
          <p className="text-xs font-semibold text-primary xl:text-sm"> </p>
        </Link>
        <ReviewerStars rating={review.rating} />
      </div>
    </Card>
  );
};

export default FullReviewCard;
