import { Card, CardHeader, CardDescription, CardTitle } from '@/components/ui/card';
import ReviewerStars from '@/components/ui/reviewerstars';
import Link from 'next/link';
//import { cn } from '@/lib/utils';
import { Review } from '@/types/companies';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Image from 'next/image';

const CompanyReviewCard = ({ review }: { review: Review }) => {
  const date = new Date(review.createdAt);
  const formattedDate = `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}.${date.getFullYear()}`;
  return (
    <Card className="my-3 flex w-full max-w-[1074px] flex-col p-3 sm:p-4 lg:rounded-md">
      <Link href={`/profiles/${review.user.id}`}>
        <CardHeader className="flex-row items-center justify-between space-y-0 border-b p-0 pb-4">
          <div className="flex items-center">
            <div className="mr-3 mt-1 ">
              <Avatar className="mr-3 h-[56px] w-[56px]">
                <AvatarImage
                  className="object-cover"
                  alt="reviewer avatar"
                  src={
                    review.user.profilePicture
                      ? `${process.env.STRAPI_URL}${review.user.profilePicture.url}`
                      : undefined
                  }
                />
                <AvatarFallback className="text-3xl">
                  {review.user.username.substring(0, 1)}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col justify-start">
              <p className="text-sm font-semibold text-heading hover:text-primary xl:text-xl">
                {review.user.username}
              </p>
              <div className="flex">
                <p className="text-sm">{review.user.position}</p>
              </div>
              <div className="mt-1"></div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            {review.user.confirmed == true ? (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Image alt="verified profile icon" src="/claimed.svg" width={24} height={24} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Verified User</p>
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
                      width={26}
                      height={26}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>User not verified</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            <p className="mt-3 text-xs">{formattedDate}</p>
          </div>
        </CardHeader>
      </Link>
      <CardTitle className="mt-3 text-base font-semibold text-heading xl:mt-8 xl:text-[22px]">
        {review.title}
      </CardTitle>
      <CardDescription className="mt-2 min-h-[60px] text-sm leading-6">
        {review.description}
      </CardDescription>
      <div className="mt-2 flex justify-between gap-5 pr-2">
        <Link href={`/profiles/${review.user.id}`}>
          <p className="text-xs font-semibold text-primary hover:text-black xl:text-sm">
            View profile
          </p>
        </Link>
        <p className="text-xs font-semibold text-primary xl:text-sm"> </p>
        <ReviewerStars rating={review.rating} />
      </div>
    </Card>
  );
};

export default CompanyReviewCard;
