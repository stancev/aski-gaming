import Image from 'next/image';
import { Card, CardHeader, CardDescription, CardTitle, CardFooter } from '@/components/ui/card';
import Stars from '@/components/ui/stars';
import ReviewerStars from '@/components/ui/reviewerstars';
import Link from 'next/link';
//import { cn } from '@/lib/utils';
import { Review } from '@/types/companies';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <Card className="w-304 flex flex-col p-3 sm:p-4 lg:rounded-md 2xl:w-464">
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
      <CardDescription className="mt-2 line-clamp-3 min-h-[60px] text-sm">
        {review.description}
      </CardDescription>
      <div className="mt-2 flex justify-between gap-5 pr-2">
        <Link href="/reviews">
          <p className="text-xs font-semibold text-primary xl:text-sm">Full Review</p>
        </Link>
        <ReviewerStars rating={review.rating} />
      </div>
      <div className="mt-4 h-px bg-zinc-200" />
      <CardFooter className="mt-4 flex items-center p-0">
        <Avatar className="mr-3 h-[54px] w-[54px]">
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
        <div className="flex flex-col justify-center">
          <div className="flex items-center justify-start">
            <Link href={`/profiles/${review.user.id}`}>
              <h4 className="mr-3 text-base font-semibold capitalize text-heading xl:text-xl">
                {review.user.username}
              </h4>
            </Link>
            <Image
              className="rounded-sm object-cover"
              alt="claimed company icon"
              src="/claimed.svg"
              width={16}
              height={16}
            />
          </div>
          <p className="text-xs xl:text-sm">{review.user.position}</p>
          <p className="text-xs xl:text-sm">3,200 Reviews</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;
