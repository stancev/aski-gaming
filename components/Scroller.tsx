'use client';

import React, { useRef, useState } from 'react';

interface Props {
  name: string;
  children: React.ReactNode;
}

const Certificates: React.FC<Props> = ({ name, children }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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
      const walk = (x - startX) * 3;
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <section className="my-6">
      <p className="text-xs">{name}</p>
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="scrollbar-hide mt-3 flex cursor-pointer space-x-4 overflow-x-auto"
      >
        {children}
      </div>
    </section>
  );
};
export default Certificates;
