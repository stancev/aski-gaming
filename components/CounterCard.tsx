import React from 'react';
import Image from 'next/image';

interface CounterCardProps {
  bgColor: string;
  count: string;
  label: string;
  svg: string;
  className?: string;
  imgWidth?: number;
  imgHeight?: number;
}

const CounterCard = ({
  bgColor,
  count,
  label,
  svg,
  className,
  imgWidth = 101,
  imgHeight = 101
}: CounterCardProps) => {
  return (
    <div
      className={`max-h-[306px] min-h-[161px]  w-[300px] flex-col items-start rounded-[40.853px] ${bgColor} inline-block flex-none py-12 pl-8 pr-20 ${className}`}
    >
      <Image
        src={svg}
        alt="Counter Image"
        width={imgWidth}
        height={imgHeight}
        className="mt-1.5 aspect-[0.96] w-[101px] max-w-full overflow-hidden object-contain object-center"
      />
      <div className="mb-5 whitespace-nowrap text-5xl font-semibold leading-[65px] text-violet-950">
        {count}
      </div>
      <div className="mb-5 mt-5 whitespace-nowrap text-xl leading-10 text-violet-950">{label}</div>
    </div>
  );
};

export default CounterCard;
