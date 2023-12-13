import Image from 'next/image';
import { Card, CardHeader, CardDescription, CardTitle, CardFooter } from '@/components/ui/card';
import Stars from '@/components/ui/stars';
import Link from 'next/link';

const ReviewCard = () => {
  return (
    <Card className="flex flex-col p-3 sm:p-4 lg:rounded-md">
      <CardHeader className="flex-row items-center space-y-0 p-0">
        <div className="mr-3 mt-1">
          <Image
            className="rounded-sm object-cover"
            alt="netent logo"
            src="/netent.png"
            width={48}
            height={48}
          />
        </div>
        <div className="flex flex-col justify-start">
          <Link
            href={{
              pathname: '/companies'
            }}
          >
            <p className="text-sm font-semibold text-heading xl:text-base">Mozzartbet</p>
          </Link>
          <div className="flex">
            <p className="text-xs">4.0 / 32 reviews /</p>
            <p className="text-xs font-semibold text-primary">+8</p>
          </div>
          <div className="mt-1">
            <Stars />
          </div>
        </div>
      </CardHeader>
      <Link
        href={{
          pathname: '/reviews'
        }}
      >
        <CardTitle className="mt-3 text-base font-semibold text-heading xl:mt-8 xl:text-[22px]">
          Pretty Cool Company
        </CardTitle>
      </Link>
      <CardDescription className="mt-2 text-sm">
        Most advanced and it goes like this so farWith more than 24 years...
      </CardDescription>
      <div className="mt-2 flex justify-between gap-5 pr-2">
        <Link
          href={{
            pathname: '/reviews'
          }}
        >
          <p className="text-xs font-semibold text-primary xl:text-sm">Full Review</p>
        </Link>
        <Stars />
      </div>
      <div className="mt-4 h-px bg-zinc-200" />
      <CardFooter className="mt-4 flex items-center p-0">
        <Image
          className="mr-3 rounded-full"
          alt="reviewer placeholder"
          src="/reviewer.svg"
          width={56}
          height={56}
        />
        <div className="flex flex-col justify-center">
          <div className="flex items-center justify-start">
            <Link
              href={{
                pathname: '/reviews'
              }}
            >
              <h4 className="mr-3 text-base font-semibold capitalize text-heading xl:text-xl">
                Reviewer
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
          <p className="text-xs xl:text-sm">Netent account manager</p>
          <p className="text-xs xl:text-sm">3,200 Reviews</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;
