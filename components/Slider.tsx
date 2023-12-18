'use client';
import CompanyCardStatic from '@/components/CompanyCardStatic';
import React, { MutableRefObject } from 'react';
import Image from 'next/image';

const Slider = () => {
  const scrollContainerRef = React.useRef(null) as MutableRefObject<HTMLDivElement | null>;

  const handleIconClick = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = direction === 'right' ? 300 : -300;
      container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative flex max-w-[1430px] overflow-x-hidden">
      <div className="mr-1 hidden min-w-[60px] flex-col items-center justify-center sm:flex">
        <Image
          src="/icons/scroll-icon.svg"
          alt="slider"
          width={60}
          height={60}
          className="rotate-180 cursor-pointer"
          onClick={() => handleIconClick('left')}
        />
      </div>
      <div
        ref={scrollContainerRef}
        className="scrollbar-hide flex flex-nowrap gap-4 overflow-x-auto"
      >
        <CompanyCardStatic />
        <CompanyCardStatic />
        <CompanyCardStatic />
        <CompanyCardStatic />
        <CompanyCardStatic />
        <CompanyCardStatic />
      </div>
      <div className="ml-1 hidden min-w-[60px] flex-col items-center justify-center sm:flex">
        <Image
          src="/icons/scroll-icon.svg"
          alt="slider"
          width={60}
          height={60}
          className="cursor-pointer"
          onClick={() => handleIconClick('right')}
        />
      </div>
    </div>
  );
};

export default Slider;
