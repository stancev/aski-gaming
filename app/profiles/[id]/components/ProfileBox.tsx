import * as React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ReviewerStars from '@/components/ui/reviewerstars';

interface Profile {
  username: string;
  position: string;
  reviews: Array<any>;
  profilePicture: {
    url: string;
  };
  confirmed: boolean;
}

interface ProfileBoxProps {
  profile: Profile;
  rating?: number;
}

const ProfileBox: React.FC<ProfileBoxProps> = ({ profile, rating }) => {
  const reviewText = profile.reviews.length === 1 ? 'Review' : 'Reviews';
  return (
    <div className="flex">
      <div className="flex-col py-4">
        <Avatar className="h-[134px] w-[134px] lg:h-[194px] lg:w-[194px]">
          <AvatarImage
            style={{ border: '15px solid rgba(128, 40, 123, 0.05)', borderRadius: '50%' }}
            className="object-cover"
            alt="reviewer avatar"
            src={
              profile.profilePicture
                ? `${process.env.STRAPI_URL}${profile.profilePicture.url}`
                : undefined
            }
          />
          <AvatarFallback className="text-3xl">{profile.username.substring(0, 1)}</AvatarFallback>
        </Avatar>
      </div>
      <div className="my-auto flex w-[48%] flex-col px-2 text-xs">
        <div className="flex">
          <div className="mr-1 whitespace-nowrap text-lg font-semibold capitalize text-white lg:text-3xl">
            {profile.username}
          </div>
          {profile.confirmed == true ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Image alt="verified profile icon" src="/claimed.svg" width={24} height={24} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>This user&apos;s authenticity has been verified by AskiGaming.</p>
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
                    width={24}
                    height={24}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    This user&apos;s authenticity <strong>has not been verified</strong> by
                    AskiGaming yet.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        <div className="mt-0 whitespace-nowrap  text-sm text-white md:mt-4">{profile.position}</div>
        <div className="my-4">
          {profile.reviews.length} {reviewText}
        </div>
        <ReviewerStars rating={rating || 0} />
        <div className="mt-2.5">Average rating</div>
      </div>
    </div>
  );
};

export default ProfileBox;
