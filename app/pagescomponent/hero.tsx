import React from 'react';
import Carousel from '../component/carousel';
import Image from 'next/image';
import uploadedImage from '../../public/hero.svg'; // Adjust path as necessary

const HomePage = () => {
  const imageArray = [
    uploadedImage,
    uploadedImage,
    uploadedImage
  ];

  return (
    <div className='flex z-1'>
      
      <Carousel images={imageArray} />
    </div>
  );
};

export default HomePage;
