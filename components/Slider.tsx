'use client';
import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel';

type SliderProps = {
  children: React.ReactElement;
};

const Slider: React.FC<SliderProps> = ({ children }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [visibleSlides, setVisibleSlides] = useState<number[]>([]);
  useEffect(() => {
    if (!api) {
      return;
    }

    const updateVisibleSlides = () => {
      const firstVisibleSlide = api.selectedScrollSnap();
      let slidesInView;
      if (window.matchMedia('(min-width: 1024px)').matches) {
        slidesInView = 3;
      } else if (window.matchMedia('(min-width: 768px)').matches) {
        slidesInView = 2;
      } else {
        slidesInView = 1;
      }
      const visibleIndices = Array.from({ length: slidesInView }, (_, i) => firstVisibleSlide + i);
      setVisibleSlides(visibleIndices);
    };

    updateVisibleSlides();
    api.on('select', updateVisibleSlides);
    window.addEventListener('resize', updateVisibleSlides);
    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: 'start'
      }}
      className="md: w-full max-w-full"
    >
      <CarouselContent className="pr-20 2xl:pr-48">
        {React.Children.map(children, (child, index) => (
          <CarouselItem key={index} className="md:max-w-full md:basis-1/2 lg:basis-1/3">
            <div style={{ opacity: visibleSlides.includes(index) ? 1 : 0.3 }}>
              {React.cloneElement(child)}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Slider;
