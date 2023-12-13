'use client';
import CompanyCardStatic from '@/components/CompanyCardStatic';
import React from 'react';
import Image from 'next/image';

const Slider = () => {
  const scrollContainerRef = React.useRef(null);

  const handleIconClick = (direction: string) => {
    const scrollContainer = scrollContainerRef.current;
    if (direction === 'left') {
      if (scrollContainer) {
        (scrollContainer as unknown as HTMLElement).scrollBy({
          left: 200,
          behavior: 'smooth'
        });
      }
    } else if (direction === 'right') {
      if (scrollContainer) {
        (scrollContainer as unknown as HTMLElement).scrollBy({
          left: -200,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className="relative flex max-w-[1430px] overflow-x-hidden">
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
      <div className="flex min-w-[50px] flex-col items-center justify-center">
        <Image
          src="/icons/scroll-icon.svg"
          alt="slider"
          width={60}
          height={60}
          className="z-50 mb-1 ml-[-20px] rotate-180 cursor-pointer"
          onClick={() => handleIconClick('right')}
        />
        <Image
          src="/icons/scroll-icon.svg"
          alt="slider"
          width={60}
          height={60}
          className="z-50 ml-[-20px] cursor-pointer"
          onClick={() => handleIconClick('left')}
        />
      </div>
    </div>
  );
};

export default Slider;
