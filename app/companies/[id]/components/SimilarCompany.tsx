import Image from 'next/image';
import Stars from '@/components/ui/stars';

const SimilarCompany = () => {
  return (
    <div className="mb-4 flex rounded-xl bg-white p-4">
      <div className="">
        <Image
          className="mr-3 rounded-sm"
          alt="netent logo"
          src="/netent.png"
          width={92}
          height={92}
        />
      </div>
      <div className="ms-2 flex w-full flex-col justify-between">
        <div>
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold text-heading">NetEnt</h3>
            <Image alt="claimed" src="/claimed.svg" width={24} height={24} />
          </div>
          <p className="text-sm">San Clemente, United States</p>
        </div>
        <div className="flex justify-between">
          <Stars />
          <p className="text-xs">4.0 / 32 reviews</p>
        </div>
      </div>
    </div>
  );
};
export default SimilarCompany;
