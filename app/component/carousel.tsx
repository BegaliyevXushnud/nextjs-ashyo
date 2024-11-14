"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface CarouselProps {
  images?: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full bg-[#F3F0F0] rounded-lg shadow-lg overflow-hidden">
      {/* Left Arrow Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition"
      >
        &lt;
      </button>

      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full flex flex-col items-center p-5">
              <Image
                src={image}
                alt={`Slide ${index}`}
                className="w-[240px] h-[160px] object-cover rounded-lg shadow-md"
              />
              <div className="text-center mt-4 px-4">
                <h1 className="text-xl text-[#203F68] font-semibold">
                  Siz kutgan Xiaomi 12 Mi Lite
                </h1>
                <h3 className="text-sm text-[#203F6899] mt-2">
                  Orginallik va qulay narxni o&apos;zida jamlagan siz uchun eng yaxshi arziydigan takliflarimizdan biridir!
                </h3>
              </div>
              <button className="mt-5 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Tafsilotlar
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
