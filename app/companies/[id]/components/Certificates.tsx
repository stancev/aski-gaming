'use client';

import React, { useRef, useState, useEffect } from 'react';

interface Props {
  name: string;
  certificates: string[];
}

const Certificates: React.FC<Props> = ({ name, certificates }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [isScrollable, setIsScrollable] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const checkScrollability = () => {
      if (scrollContainerRef.current) {
        setIsScrollable(
          scrollContainerRef.current.scrollWidth > scrollContainerRef.current.clientWidth
        );
      }
    };

    checkScrollability();
    window.addEventListener('resize', checkScrollability);

    return () => {
      window.removeEventListener('resize', checkScrollability);
    };
  }, []);

  const handleMouseDown = (e: { pageX: number }) => {
    setIsDragging(true);
    if (scrollContainerRef.current) {
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: { preventDefault: () => void; pageX: number }) => {
    if (!isDragging) return;
    e.preventDefault();
    if (scrollContainerRef.current) {
      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      const walk = (x - startX) * 3; // Change this value to adjust the scroll amount
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 100; // Change this value to adjust the scroll amount
    }
  };

  return (
    <section className="my-4">
      <p className="text-xs">{name}</p>
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="scrollbar-hide flex cursor-pointer space-x-4 overflow-x-auto"
      >
        {certificates.map(certificate => (
          <p key={certificate} className="whitespace-nowrap text-sm text-primary">
            {certificate}
          </p>
        ))}
      </div>
      <button className={isScrollable ? '' : 'invisible'} onClick={handleScrollRight}>
        Scroll Right
      </button>
    </section>
  );
};
export default Certificates;
