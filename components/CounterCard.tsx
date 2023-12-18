import React from 'react';
import Image from 'next/image';

interface CounterCardProps {
  count: string;
  label: string;
  svg: string;
  className?: string;
}

const CounterCard = ({ count, label, svg, className }: CounterCardProps) => {
  return (
    <div
      className={`inline-block max-h-[306px] min-h-[161px] w-[300px] flex-none flex-col items-start rounded-[40.853px] py-12 pl-8 pr-20 ${className}`}
    >
      <Image
        src={`/icons/${svg}`}
        alt="Counter Image"
        width={101}
        height={106}
        className="mt-1.5 aspect-[0.96] h-auto w-auto overflow-hidden"
      />
      <div className="mb-5 whitespace-nowrap text-5xl font-semibold leading-[65px] text-violet-950">
        {count}
      </div>
      <div className="mb-5 mt-5 whitespace-nowrap text-xl leading-10 text-violet-950">{label}</div>
    </div>
  );
};

export default CounterCard;
