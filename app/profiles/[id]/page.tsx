import { getProfileData, getProfileReviews } from '@/lib/getData';
import Image from 'next/image';
import ProfileBox from './components/ProfileBox';
import FullReviewCard from './components/FullReviewCard';
import Breadcrumbs from './components/Breadcrumbs';
import { SearchParams } from '@/types/companies';
import Pagination from '@/components/Pagination';

interface Props {
  params: {
    id: string;
  };
  searchParams: SearchParams;
}

const ProfilePage: React.FC<Props> = async ({ params, searchParams }) => {
  const profile = await getProfileData(params.id);
  const { data: reviews, pagination } = await getProfileReviews(params.id, searchParams);
  const averageRating = Math.round(
    reviews.reduce((total: any, review: any) => total + review.rating / reviews.length, 0)
  );

  return (
    <section>
      <div className="relative h-[140px] w-full lg:h-[200px]">
        <Image
          src="/profile-cover.svg"
          quality={100}
          fill
          objectFit="cover"
          alt="Background"
          draggable={false}
        />
      </div>
      <div>
        <Image
          src="/background-companies.svg"
          quality={100}
          width={1920}
          height={600}
          alt="Background"
          className="absolute z-0 object-cover"
          draggable={false}
          style={{ width: '100%' }}
        />
        <div className="relative z-10 mx-auto w-full max-w-[1424px]">
          <article className="min-h-[1000px] w-full rounded-b-md bg-white p-4 shadow-lg xl:p-12">
            <div className="absolute top-[-10px] max-w-[451px] -translate-y-1/2 transform">
              <Breadcrumbs username={profile.username} />
              <ProfileBox profile={profile} rating={averageRating} />
            </div>
            <div className="mt-20 flex flex-wrap justify-center">
              {reviews.map((review: any) => (
                <FullReviewCard key={review.id} review={review} />
              ))}
              <Pagination
                pathname={`/profiles/${params.id}`}
                pagination={pagination}
                searchParams={searchParams}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
export default ProfilePage;
