import CompanyReviewCard from './CompanyReviewCard';

const ReviewList = ({ data }: { data: any[] }) => {
  return (
    <div className="my-8 flex-col">
      {data.length > 0 ? (
        data.map((review: any) => <CompanyReviewCard key={review.id} review={review} />)
      ) : (
        <p className="text-center">No reviews yet. </p>
      )}
    </div>
  );
};
export default ReviewList;
