import Image from 'next/image';

interface Props {
  category: any;
}

const CompanyCard: React.FC<Props> = ({ category }) => {
  return (
    <div className="flex w-[342px] flex-col rounded-xl bg-white p-4 shadow-sm">
      <div className="flex items-stretch justify-between gap-3 self-stretch">
        <div className="relative mx-3 flex items-center justify-center py-5">
          <Image alt="blue circle" src="/elipse.svg" width={64} height={64} />
          <div className="absolute mt-1.5 text-3xl font-semibold capitalize leading-10 text-primary">
            {category.name.charAt(0).toUpperCase()}
          </div>
        </div>
        <div className="my-auto flex grow basis-[0%] flex-col items-stretch self-center">
          <h2 className="text-xl font-semibold capitalize leading-6 text-heading">
            {category.name}
          </h2>
          <p className="mt-1.5 text-sm leading-6">3,200 Companies</p>
        </div>
      </div>
      <div className="mt-4 flex h-px shrink-0 flex-col self-stretch bg-zinc-200" />
      <div className="mt-4 flex items-start justify-between gap-5 self-stretch px-px">
        <div className="flex flex-grow flex-col items-stretch space-y-4">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Image alt="company logo" src="/netent.png" width={30} height={30} />
              <div className="my-auto text-sm font-semibold capitalize leading-4 text-heading">
                Netent
              </div>
            </div>
            <Image alt="right chevron" src="/right-chevron.svg" width={24} height={24} />
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Image alt="company logo" src="/netent.png" width={30} height={30} />
              <div className="my-auto text-sm font-semibold capitalize leading-4 text-heading">
                Company name
              </div>
            </div>
            <Image alt="right chevron" src="/right-chevron.svg" width={24} height={24} />
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Image alt="company logo" src="/netent.png" width={30} height={30} />
              <div className="my-auto text-sm font-semibold capitalize leading-4 text-heading">
                Stake casino
              </div>
            </div>
            <Image alt="right chevron" src="/right-chevron.svg" width={24} height={24} />
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Image alt="company logo" src="/netent.png" width={30} height={30} />
              <div className="my-auto text-sm font-semibold capitalize leading-4 text-heading">
                Mozzart
              </div>
            </div>
            <Image alt="right chevron" src="/right-chevron.svg" width={24} height={24} />
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Image alt="company logo" src="/netent.png" width={30} height={30} />
              <div className="my-auto text-sm font-semibold capitalize leading-4 text-heading">
                Super bet
              </div>
            </div>
            <Image alt="right chevron" src="/right-chevron.svg" width={24} height={24} />
          </div>
        </div>
      </div>
      <div className="mt-3.5 flex h-px shrink-0 flex-col self-stretch bg-zinc-200" />
      <div className="mt-3.5 self-center whitespace-nowrap text-sm font-semibold leading-6 text-primary">
        View more
      </div>
    </div>
  );
};

export default CompanyCard;
