import Image from 'next/image';
import { Card, CardHeader, CardDescription, CardTitle } from '@/components/ui/card';
import Stars from '@/components/ui/stars';
import ReviewerStars from '@/components/ui/reviewerstars';
import Link from 'next/link';
import { Review } from '@/types/companies';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const FullReviewCard = ({ review }: { review: Review }) => {
  const reviewText = review.companyTotalRatings === 1 ? 'Review' : 'Reviews';
  return (
    <Card className="m-3 flex w-full max-w-[1074px] flex-col p-3 sm:p-4 lg:rounded-md">
      <CardHeader className="flex-row items-center justify-between space-y-0 p-0">
        <div className="flex">
          <Image
            className="rounded-sm object-cover"
            alt={`${review.company.name} logo`}
            src={`${process.env.STRAPI_URL}${review.company.logo.url}`}
            width={92}
            height={92}
            style={{ objectFit: 'contain' }}
          />
          <div className="ml-3 flex flex-col justify-start">
            <Link href={`/companies/${review.company.id}`}>
              <div className="flex flex-row items-center">
                <p className="mr-2 text-sm font-semibold text-heading hover:text-primary xl:text-base">
                  {review.company.name}
                </p>
                {review.company.claimed == true ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Image
                          alt="verified profile icon"
                          src="/claimed.svg"
                          width={16}
                          height={16}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Claimed Company</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Image
                          alt="unverified profile icon"
                          src="/unclaimed.svg"
                          width={18}
                          height={18}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Unclaimed Company</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            </Link>
            <div className="text-xs lg:text-sm">
              {`${review.company.city}, ${review.company.country}`}
            </div>
            <div className="mt-1 flex flex-row items-center">
              <Stars rating={review.companyAverageRating} />
              <p className="ml-2 text-xs">
                {review.companyAverageRating} / {review.companyTotalRatings} {reviewText}
              </p>
              {/* <p className="text-xs font-semibold text-primary">+8</p> */}
            </div>
          </div>
        </div>
        <Link href={`/companies/${review.company.id}`}>
          <p className="text-xs font-semibold text-primary hover:text-black xl:text-sm">
            View company
          </p>
        </Link>
      </CardHeader>
      <CardTitle className="mt-3 text-base font-semibold text-heading xl:mt-8 xl:text-[22px]">
        {review.title}
      </CardTitle>
      <CardDescription className="mt-2 min-h-[60px] text-sm">{review.description}</CardDescription>
      <div className="mt-2 flex justify-between gap-5 pr-2">
        <p className="text-xs font-semibold text-primary xl:text-sm"> </p>
        <ReviewerStars rating={review.rating} />
      </div>
    </Card>
  );
};

export default FullReviewCard;
