import SimilarCompany from './SimilarCompany';

const SimilarCompanyList = ({ data }: { data: any[] }) => {
  return (
    <div className="mb-8 flex-col">
      {data.length > 0 ? (
        data.map((company: any) => <SimilarCompany key={company.id} company={company} />)
      ) : (
        <p className="text-left text-xs">
          No similar companies found.
          <a href="/companies" className="text-primary">
            {' '}
            View all.
          </a>
        </p>
      )}
    </div>
  );
};
export default SimilarCompanyList;
