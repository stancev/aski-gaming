import React from 'react';

interface CounterCardProps {
  bgColor: string;
  count: string;
  label: string;
  svg: string;
  className?: string; // Add className prop
}

const CounterCard = ({ bgColor, count, label, svg, className }: CounterCardProps) => {
  return (
    <div
      className={`max-h-[306px] min-h-[161px] w-[300px] flex-col items-start rounded-[40.853px] ${bgColor} inline-block flex-none py-12 pl-8 pr-20 ${className}`}
    >
      <svg
        className="mt-1.5 aspect-[0.96] w-[101px] max-w-full overflow-hidden object-contain object-center"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      <div className="mb-5 whitespace-nowrap text-5xl font-semibold leading-[65px] text-violet-950">
        {count}
      </div>
      <div className="mb-5 mt-5 whitespace-nowrap text-xl leading-10 text-violet-950">{label}</div>
    </div>
  );
};

export default CounterCard;
