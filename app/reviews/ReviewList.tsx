import ReviewCard from '@/components/ReviewCard';
import { getReviewData } from '@/lib/getData';

interface Props {
  searchParams: any;
}

const ReviewList: React.FC<Props> = async ({ searchParams }) => {
  const { data } = await getReviewData(searchParams);
  return (
    <>
      {data.map((review: any) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </>
  );
};

export default ReviewList;
