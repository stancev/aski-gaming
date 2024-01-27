import { getProfileData } from '@/lib/getData';
import Image from 'next/image';
import ProfileBox from './components/ProfileBox';
import FullReviewCard from './components/FullReviewCard';
import Pagination from '@/components/Pagination';
import Breadcrumbs from './components/Breadcrumbs';

interface Props {
  params: {
    id: string;
  };
}

const ProfilePage: React.FC<Props> = async ({ params }) => {
  const profile = await getProfileData(params.id);
  return (
    <section>
      <div style={{ width: '100%', height: '200px', position: 'relative' }}>
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
              <ProfileBox profile={profile} />
            </div>
            <div className="mt-20 flex flex-wrap justify-center">
              {profile.reviews.map((review: any) => (
                <FullReviewCard key={review.id} review={review} />
              ))}
            </div>
            <Pagination pathname="/profiles" pagination={profile} searchParams={profile} />
          </article>
        </div>
      </div>
    </section>
  );
};
export default ProfilePage;
