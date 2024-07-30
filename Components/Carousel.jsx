'use client';
import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: 'https://mdbcdn.b-cdn.net/img/new/slides/041.webp',
      alt: 'Wild Landscape'
    },
    {
      src: 'https://mdbcdn.b-cdn.net/img/new/slides/042.webp',
      alt: 'Camera'
    },
    {
      src: 'https://mdbcdn.b-cdn.net/img/new/slides/043.webp',
      alt: 'Exotic Fruits'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[600ms] ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0'
            }`}
            style={{ transition: 'opacity 600ms ease-in-out' }}
          >
            <img src={image.src} className="block w-full h-full object-cover rounded-lg" alt={image.alt} />
          </div>
        ))}
      </div>

      {/* Carousel controls - prev item */}
      <button
        className="absolute bottom-0 left-0 top-0 z-20 flex items-center justify-center p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-in-out hover:text-white hover:opacity-90"
        type="button"
        onClick={goToPrevious}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </span>
        <span className="sr-only">Previous</span>
      </button>

      {/* Carousel controls - next item */}
      <button
        className="absolute bottom-0 right-0 top-0 z-20 flex items-center justify-center p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-in-out hover:text-white hover:opacity-90"
        type="button"
        onClick={goToNext}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
