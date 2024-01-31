import CompanyReviewCard from './CompanyReviewCard';

const ReviewList = ({ data }: { data: any[] }) => {
  return (
    <div className="mb-4 flex-col rounded-xl bg-white p-4">
      {data.length > 0 ? (
        data.map((review: any) => <CompanyReviewCard key={review.id} review={review} />)
      ) : (
        <p className="text-center">No reviews yet</p>
      )}
    </div>
  );
};
export default ReviewList;
