import Image from 'next/image';
import { Card, CardHeader, CardDescription, CardTitle, CardFooter } from '@/components/ui/card';
import Stars from '@/components/ui/stars';

interface ReviewCardProps {
  className?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ className }) => {
  return (
    <Card className={`flex flex-col p-3 sm:p-4 lg:rounded-md ${className}`}>
      <CardHeader className="flex flex-row items-center space-y-0 p-0">
        <div className="mr-3 mt-1">
          <Image
            className="rounded-sm object-cover"
            alt="netent logo"
            src={`/netent.png`}
            width={48}
            height={48}
          />
        </div>
        <div className="flex flex-col justify-start">
          <div className="text-sm font-semibold text-heading xl:text-base">{`Mozzartbet`}</div>
          <div className="flex flex-row">
            <div className="text-xs">4.0 / 32 reviews /</div>
            <div className="text-xs font-semibold text-primary">+8</div>
          </div>
          <div className="mt-1">
            <Stars />
          </div>
        </div>
      </CardHeader>
      <CardTitle className="mt-3 text-base font-semibold text-heading xl:mt-8 xl:text-[22px]">
        Pretty Cool Company
      </CardTitle>
      <CardDescription className="mt-2 text-sm">
        Most advanced and it goes like this so farWith more than 24 years...
      </CardDescription>
      <div className="mt-2 flex justify-between gap-5 pr-2">
        <div className="text-xs font-semibold text-primary xl:text-[14px]">Full Review</div>
        <Stars />
      </div>
      <div className="mt-4 h-px bg-zinc-200" />
      <CardFooter className="mt-4 flex items-center p-0">
        <Image
          className="mr-3 rounded-full"
          alt="reviewer placeholder"
          src={`/reviewer.svg`}
          width={56}
          height={56}
        />
        <div className="flex flex-col justify-center">
          <div className="flex items-center justify-start">
            <div className="mr-3 text-base font-semibold capitalize text-heading xl:text-xl">
              Reviewer
            </div>
            <Image
              className="rounded-sm object-cover"
              alt="claimed company icon"
              src="/claimed.svg"
              width={16}
              height={16}
            />
          </div>
          <div className="text-xs xl:text-sm">Netent account manager</div>
          <div className="text-xs xl:text-sm">3,200 Reviews</div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;
