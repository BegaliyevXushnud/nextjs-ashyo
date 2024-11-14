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
    <div className="relative w-full bg-[#F3F0F0] -z-10">
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &lt;
      </button>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full h-[200px]  ">
             
             <div className='flex flex-col p-3 mt-5'>
             <h1 className='text-[17px] text-[#203F68] leading-[26px] font-sans'>Siz kutgan Xiaomi 12 Mi Laite</h1>
             <h3 className='text-[#203F6899] text-[8px] leading-[12px] font-sans w-[60%]'>Orginallik va qulay narxni o'zida jamlagan   siz uchun eng yaxshi arziydigan takliflarimizdan biridir!ii</h3>
             </div>
                <div className='flex justify-between mb-5'>
                <button>dezs</button> 
             
             <Image
               src={image}
               alt={`Slide ${index}`}
               className="w-[192px] h-auto object-cover"
             
             />
                </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
