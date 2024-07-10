"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import aus3 from '@/public/images/aus 3.jpg';
import aus4 from '@/public/images/aus 4.jpg';
import aus5 from '@/public/images/aus 5.jpg';
import aus6 from '@/public/images/aus 6.jpg';
import aus7 from '@/public/images/aus 7.jpg';
import aus8 from '@/public/images/aus 8.jpg';

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: aus3, alt: 'Australia 3' },
    { src: aus4, alt: 'Australia 4' },
    { src: aus5, alt: 'Australia 5' },
    { src: aus6, alt: 'Australia 6' },
    { src: aus7, alt: 'Australia 7' },
    { src: aus8, alt: 'Australia 8' },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative mb-8">
      <div className="flex justify-center items-center mb-4">
        <button
          className="bg-gray-800 text-white p-2 rounded-full"
          onClick={handlePrev}
        >
          &#9664;
        </button>
        <div className="overflow-hidden rounded mx-4">
          <Image
            className="w-full"
            src={images[currentIndex].src}
            width={768}
            height={390}
            priority
            alt={images[currentIndex].alt}
          />
        </div>
        <button
          className="bg-gray-800 text-white p-2 rounded-full"
          onClick={handleNext}
        >
          &#9654;
        </button>
      </div>
      <div className="flex justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className={`cursor-pointer mx-1 p-1 border ${index === currentIndex ? 'border-blue-500' : 'border-transparent'}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <Image
              src={image.src}
              width={100}
              height={60}
              alt={image.alt}
              className="rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
