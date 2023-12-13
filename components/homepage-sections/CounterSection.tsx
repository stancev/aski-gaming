import { Button } from '@/components/ui/button';
import Link from 'next/link';
import CounterCard from '@/components/CounterCard';
import Image from 'next/image';

const CounterSection = () => {
  return (
    <section className="flex h-full w-full items-center justify-center overflow-hidden lg:p-8 relative">
      <Image
        src="/background-counter.svg"
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Background"
        className="absolute z-0"
      />
      <div className="flex max-w-[1420px] flex-col-reverse items-center justify-between lg:flex-row z-10">
        <div className="w-full p-4 lg:mb-0 lg:w-[40%]">
          <h2 className="my-6 text-[20px] font-bold text-heading md:text-[48px]">
            Every Review Matters
          </h2>
          <p className="text-sm md:text-base">
            Every review plays a crucial role in building a comprehensive and honest overview of the
            iGaming world, offering invaluable insights to both newcomers and seasoned players
            alike. <br></br>
            <br></br>
            These personal experiences and evaluations contribute to a trusted community, helping
            guide decisions in an ever-evolving industry.
          </p>
          <div className="flex w-full">
            <Link href="/companies" className="mx-auto mt-10 w-full sm:w-[187px] lg:mx-0">
              <Button className="mx-auto w-full sm:w-[187px] lg:mx-0">View all reviews</Button>
            </Link>
          </div>
        </div>
        <div className="grid gap-1 overflow-hidden pl-4">
          <div className="scrollbar-hide flex flex-nowrap gap-4 overflow-x-auto lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:overflow-visible">
            <CounterCard
              count="4,000+"
              label="Members"
              svg="people-ico.svg"
              className="lg:mt-20 bg-[#FFD89E]"
            />
            <CounterCard count="300+" label="Reviews" svg="star-ico.svg" className="bg-[#78A3B1]" />
            <CounterCard
              count="1,000+"
              label="Listed Companies"
              svg="building-ico.svg"
              className="bg-[#80287B99]"
            />
            <CounterCard
              count="10,000+"
              label="Unique Visitors"
              svg="chart-ico.svg"
              className="lg:-mt-20 bg-[#80B2FF]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default CounterSection;
