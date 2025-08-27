
import React, { useState, useEffect } from 'react';
import { Slide } from '../types/index';

interface SlideshowProps {
  slides: Slide[];
  interval?: number;
}

const Slideshow: React.FC<SlideshowProps> = ({ slides, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slides.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  if (slides.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex items-center justify-center p-8 transition-opacity duration-[4000ms] ease-in-out ${slide.bgColor} ${
            index === currentIndex ? 'opacity-100 z-[1]' : 'opacity-0 z-[0]'
          }`}
        >
          <h2 
            className={`text-center font-black text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight tracking-tighter ${slide.textColor}`}
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
          >
            {slide.question}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
