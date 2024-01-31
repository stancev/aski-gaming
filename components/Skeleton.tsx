import { Skeleton } from '@/components/ui/skeleton';

export default function SkeletonCard() {
  return (
    <>
      {[...Array(18)].map((movie, index) => (
        <div
          key={index}
          className="flex items-center space-x-4 w-304 h-178 2xl:w-464 2xl:h-253 p-3 sm:p-4"
        >
          <div className="flex flex-col">
            <div className="flex flex-row border-b border-gray-300 pb-4">
              <Skeleton className="h-[92px] w-[92px] rounded-full" />
              <div className="flex flex-col justify-between">
                <div className="">
                  <Skeleton className="h-4 w-[80px]" />
                  <Skeleton className="h-2 w-[130px]" />
                </div>
                <div className="flex justify-between mb-4">
                  <Skeleton className="h-4 w-[140px]" />
                  <Skeleton className="h-4 w-[50px]" />
                </div>
              </div>
            </div>
            <div className="h-[50%] w-[250px] pt-4">
              <div className="">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[250px]" />
              </div>
              <div className="flex justify-between">
                <Skeleton className="h-5" />
                <Skeleton className="h-4" />
                <Skeleton className="h-4" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
