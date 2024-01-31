import * as React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import Stars from '@/components/ui/stars';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

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
  className?: string;
}

const ProfileBox: React.FC<ProfileBoxProps> = ({ profile, className }) => {
  const reviewText = profile.reviews.length === 1 ? 'Review' : 'Reviews';
  return (
    <div className={className}>
      <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-stretch justify-center rounded-full">
            <div className="flex flex-col items-center justify-center rounded-full py-4">
              <Avatar className="h-[194px] w-[194px]">
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
                <AvatarFallback className="text-3xl">
                  {profile.username.substring(0, 1)}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <div className="flex w-[48%] flex-col items-stretch max-md:ml-0 max-md:w-full">
          <div className="my-auto flex flex-col items-stretch self-stretch px-2 text-xs text-zinc-500">
            <div className="flex">
              <div className="mr-1 whitespace-nowrap text-3xl font-semibold capitalize leading-10 text-white">
                {profile.username}
              </div>
              {profile.confirmed == true ? (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Image
                        alt="verified profile icon"
                        src="/claimed.svg"
                        width={24}
                        height={24}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This user&apos;s authenticity has been verified by AskiGaming team.</p>
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
                        AskiGaming team yet.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
            <div className="mt-3 text-sm text-white">{profile.position}</div>
            <div className="my-3">
              {profile.reviews.length} {reviewText}
            </div>
            <Stars />
            <div className="mt-2.5">Average rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;
